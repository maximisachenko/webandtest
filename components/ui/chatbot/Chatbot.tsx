'use client';

import Image from 'next/image'
import ChatbotForm from './ChatbotForm'
import { useState } from 'react';
import ChatMessage from './ChatMessage';

interface ChatItem {
    role: 'user' | 'model';
    text: string;
}

const Chatbot = () => {
    const [chatHistory, setChatHistory] = useState<ChatItem[]>([
        { role: 'model', text: 'Hey there! 👋\nHow can I help you today?' }
    ]);

    const geminiApiUrl = process.env.NEXT_PUBLIC_GEMINI_API_URL;
    const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;;

    const generateBotResponse = async (history: any) => {
        const updateHistory = (text: string) => {
            setChatHistory(prev => [
                ...prev.filter(msg => msg.text !== "Thinking..."),
                { role: "model", text }
            ]);
        };

        history = history.map(({ role, text }: any) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history })
        }

        try {
            const url = `${geminiApiUrl}?key=${geminiApiKey}`;
            const response = await fetch('/api/gemini', requestOptions);

            const data = await response.json();
            console.log("RESPONSE:", data);
            if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

            updateHistory(apiResponseText);
        } catch (error) {
            console.error('Ошибка при запросе к API:', error);;
        }
    }


    return (
        <div>
            <button>
                <span>mode_comment</span>
                <span>close</span>
            </button>
            <div className='bg-white chatbot-popup-shadow rounded-[15px] w-105 overflow-hidden relative'>
                <div className='flex py-[15px] px-[22px] items-center justify-between bg-primary'>
                    <div className='flex gap-[10px] items-center'>
                        <div className="p-1 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shrink-0">
                            <Image
                                src="/assets/icons/robot_primary.svg"
                                height={24}
                                width={24}
                                alt="Weband logo"
                                className="object-contain"
                            />
                        </div>
                        <h2 className='text-white text-[22px] font-medium'>Chatbot</h2>
                    </div>
                    <button className='w-10 h-10 border-none outline-none text-white text-[32px] pt-[2px] bg-primary -mr-3 rounded-[50%] hover:bg-primary-hover duration-150'>
                        <Image src="/assets/icons/keyboard_arrow_down.svg" height={48} width={48} alt="Weband logo" className='fill-white' />
                    </button>
                </div>

                <div className='h-115 mb-[82px] overflow-y-auto py-[25px] px-[22px] flex flex-col gap-[20px] chatbot-scroll'>
                    <div className='flex items-end gap-[11px]'>
                        {/** Bot message */}
                    </div>
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>
                <div className='absolute bottom-0 w-full bg-white pt-[15px] px-[22px] pb-5'>
                    <ChatbotForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>
    )
}

export default Chatbot