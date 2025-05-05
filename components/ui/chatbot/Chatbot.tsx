'use client';

import Image from 'next/image';
import { useState } from 'react';
import ChatMessage from './chatMessage';
import { ABOUT_COMPANY } from '@/constants/companyinformation';
import { ChatItem } from '@/types';
import ChatbotForm from '@/components/forms/chatbotForm';

const Chatbot = () => {

    const [chatHistory, setChatHistory] = useState<ChatItem[]>([
        { role: 'model', text: ABOUT_COMPANY, hideInChat: true, },
        { role: 'model', text: 'Hello! My name is Casper. How can I help you?' }
    ]);
    const [showChatBot, setShowChatBot] = useState(false);

    const handleToggleChatBot = () => {
        setShowChatBot(!showChatBot);
    };

    const replaceLastBotMessage = (newText: string, isError = false) => {
        setChatHistory(prev => {
            const updated = [...prev];
            const index = [...prev].reverse().findIndex(msg => msg.role === 'model' && msg.text === 'Thinking...');
            if (index !== -1) {
                const realIndex = prev.length - 1 - index;
                updated[realIndex] = { role: 'model', text: newText, isError };
            }
            return updated;
        });
    };

    const generateBotResponse = async (history: any) => {

        history = history.map(({ role, text }: any) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: history })
        };

        try {
            const url = 'api/gemini';
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log('RESPONSE:', data);
            if (!response.ok) throw new Error(data.error?.message || 'Something went wrong!');

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
            replaceLastBotMessage(apiResponseText);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                replaceLastBotMessage(error.message, true);
            } else {
                console.error('An unknown type of error occurred');
                replaceLastBotMessage('An unknown error occurred', true);
            }
        }
    };

    return (
        <div className='relative z-90'>
            <button
                onClick={handleToggleChatBot}
                className={`fixed shadow-2xl bottom-[30px] right-[35px] border-none h-[50px] w-[50px] flex cursor-pointer rounded-full bg-primary items-center justify-center hover:bg-primary-hover duration-200 max-sm:right-5 max-sm:bottom-5 ${showChatBot ? 'opacity-0' : 'opacity-100'}`}
            >
                <span className='absolute'>
                    <Image src='/assets/icons/comment.svg' width={24} height={24} alt='Comment icon' />
                </span>
            </button>
            <div
                className={`bg-white chatbot-popup-shadow rounded-[15px] w-105 overflow-hidden fixed bottom-8 right-9 origin-bottom-right transform transition-all duration-300 ease-out max-sm:right-0 max-sm:bottom-0 max-sm:h-full max-sm:rounded-none max-sm:w-full ${showChatBot ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-50'}`}
            >
                <div className='flex py-[15px] px-[22px] items-center justify-between bg-primary max-sm:py-3 max-sm:px-4'>
                    <div className='flex gap-[10px] items-center'>
                        <div className='p-1 w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center shrink-0'>
                            <Image
                                src='/assets/icons/robot_primary.svg'
                                height={24}
                                width={24}
                                alt='Weband logo'
                                className='object-contain'
                            />
                        </div>
                        <h2 className='text-white text-[22px] font-semibold'>Casper AI</h2>
                    </div>
                    <button
                        onClick={handleToggleChatBot}
                        className='w-10 h-10 border-none outline-none text-white text-[32px] pt-[2px] bg-primary -mr-3 rounded-[50%] hover:bg-primary-hover duration-150'
                    >
                        <Image
                            src='/assets/icons/keyboard_arrow_down.svg'
                            height={48}
                            width={48}
                            alt='Weband logo'
                            className='fill-white'
                        />
                    </button>
                </div>

                <div className='h-115 mb-[82px] overflow-y-auto py-[25px] px-[22px] flex flex-col gap-[20px] chatbot-scroll max-sm:h-[calc(90%-55px)] max-sm:py-6 max-sm:px-4'>
                    {chatHistory.map((chat, index) => (
                        <ChatMessage key={index} chat={chat} />
                    ))}
                </div>
                <div className='absolute bottom-0 w-full bg-white pt-[15px] px-[22px] pb-5 max-sm:pt-[10px] max-sm:pr-[15px] max-sm:pb-[15px] max-sm:pl-[15px]'>
                    <ChatbotForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
