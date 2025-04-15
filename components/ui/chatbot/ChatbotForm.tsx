'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
    setChatHistory: any;
    generateBotResponse: any;
    chatHistory: any;
}

const ChatbotForm = ({ setChatHistory, chatHistory, generateBotResponse }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userMessage = inputRef.current?.value.trim();
        if (!userMessage) return;
        if (inputRef.current) inputRef.current.value = '';

        setChatHistory((history: any) => [...history, { role: 'user', text: userMessage }]);

        setTimeout(() => setChatHistory((history: any) => [...history, { role: 'bot', text: "Thinking..." }]), 600);

        generateBotResponse([...chatHistory, { role: 'user', text: userMessage }])
    };

    return (
        <form
            className='flex items-center bg-white chatbot-form-shadow border-[2px] border-[#CCCCE5] rounded-4xl focus-within:border-primary'
            onSubmit={handleFormSubmit}
        >
            <input
                ref={inputRef}
                type="text"
                placeholder='Message...'
                required
                className='border-none outline-none bg-transparent h-[47px] py-0 px-[17px] text-[16px] w-full'
                onChange={(e) => setIsValid(e.target.validity.valid)}
            />
            <button
                type="submit"
                className={`${isValid ? 'block' : 'hidden'} h-[35px] w-[35px] text-white flex items-center justify-center bg-primary rounded-full shrink-0 outline-none border-none cursor-pointer text-[19px] mr-[6px] transition-all duration-200 hover:bg-primary-hover`}
            >
                <Image src="/assets/icons/arrow_upward.svg" height={24} width={24} alt="Send message" />
            </button>
        </form>
    );
};

export default ChatbotForm;
