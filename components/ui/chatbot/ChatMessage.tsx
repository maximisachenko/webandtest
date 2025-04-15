'use client';

import React from 'react';
import Image from 'next/image';

interface Props {
    chat: {
        role: 'user' | 'model';
        text: string;
    };
}

const ChatMessage = ({ chat }: Props) => {
    const isUser = chat.role === 'user';

    return (
        <div className={`flex gap-2 ${isUser ? 'justify-end flex-col items-end' : 'flex-row items-start'}`}>
            {!isUser && (
                <div className="p-[10px] w-[35px] h-[35px] bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Image
                        src="/assets/icons/weband_b_logo_white.svg"
                        width={16}
                        height={16}
                        alt="Weband logo"
                        className="object-contain"
                    />
                </div>
            )}

            <p
                className={`
                    max-w-[75%] py-3 px-4 text-[16px] break-words whitespace-pre-line
                    ${isUser
                        ? 'text-white bg-primary rounded-t-[13px] rounded-bl-[13px]'
                        : 'text-black bg-[#fcdfdd]/50 rounded-tl-[13px] rounded-tr-[13px] rounded-br-[13px]'
                    }
                `}
            >
                {chat.text}
            </p>
        </div>
    );
};

export default ChatMessage;
