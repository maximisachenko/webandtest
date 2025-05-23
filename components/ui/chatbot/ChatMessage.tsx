'use client';

import React from 'react';
import Image from 'next/image';
import { ChatMessageProps } from '@/types';

const ChatMessage = ({ chat }: ChatMessageProps) => {
    const isUser = chat.role === 'user';

    return (
        !chat.hideInChat && (
            < div className={`flex gap-2 ${isUser ? 'justify-end flex-col items-end' : 'flex-row items-end'}`
            }>
                {!isUser && (
                    <div className="p-1 w-9 h-9 bg-primary rounded-full flex items-center justify-center shrink-0">
                        <Image
                            src="/assets/icons/robot_white.svg"
                            width={24}
                            height={24}
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

                    ${chat.isError ? 'text-red-500' : ''}
                `}
                >
                    {chat.text}
                </p>
            </div >
        ));
};

export default ChatMessage;
