'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';

const CustomPhoneInput = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [valid, setValid] = useState<boolean>(true); // Изначально номер валиден

    const handleChange = (value: string) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        if (!phoneNumber) return true;
        const formattedPhoneNumber = `+${phoneNumber}`;
        return isValidPhoneNumber(formattedPhoneNumber);
    };

    const [active, setActive] = useState(false);

    return (
        <div className=''>
            <div className='flex flex-col gap-2'>
                <h4
                    className={`font-bold text-[16px] transition-colors duration-300 ${active ? 'text-primary' : 'text-[#BCBCBC]'
                        }`}
                >Your phone</h4>
                <div className='relative'>
                    <PhoneInput
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        country={'pl'}
                        value={phoneNumber}
                        onChange={handleChange}
                        inputProps={{
                            required: true,
                            placeholder: '48 (123) 456-789',
                        }}
                        inputClass={`border ${valid ? 'border-green-500' : 'border-red-500'} bg-[#F9F9F9] text-[16px] text-black/80 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200`}
                    />

                    {!valid && phoneNumber && (
                        <p className="text-red-500 text-sm absolute bottom-[-25px] left-0">Неверный формат номера телефона.</p>
                    )}
                </div>
            </div>
        </div >
    );
};

export default CustomPhoneInput;
