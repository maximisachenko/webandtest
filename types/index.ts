import { SwiperClass } from "swiper/react";

export interface ButtonProps {
    title: string;
    section?: 'header' | 'about-us' | 'directions' | 'team' | 'cases' | 'form' | 'footer' | 'hero' | 'reward-card' | 'blog';
    icon?: string
    iconWidth?: number;
    iconHeight?: number;
    className?: string;
}

export interface CircleProps {
    className?: string;
}

export interface ContactInfoProps {
    section: string;
    title: string;
    src: string;
    infoText: string;
}

export interface ContainerProps {
    children: React.ReactNode;
    type: 'default' | 'center';
    colorContainer: 'white' | 'gray';
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
}

export interface DescriptionProps {
    text: string;
    className?: string;
}

export interface HeadingProps {
    primaryTitle: string;
    foregroundTitle: string;
    additionalTitle?: string;
    className?: string;
}

export interface LogoProps {
    width: number;
    height: number;
    className?: string;
    ref?: React.Ref<HTMLImageElement>;
}

export interface SectionTitleProps {
    title: string;
}

export interface SocialButtonProps {
    title: string;
    section: string;
}

export interface SliderProps {
    children: React.ReactNode;
}

export interface SliderButtonProps {
    type: 'prev' | 'next';
    swiper?: SwiperClass | null;
    className?: string;
}

export interface SwiperPaginationProps {
    totalSlides: number;
    currentIndex: number;
    onDotClick?: (index: number) => void;
}

export interface ChatItem {
    role: 'model' | 'user';
    text: string;
    hideInChat?: boolean;
    isError?: boolean;
}

export interface ChatbotFormProps {
    setChatHistory: any;
    chatHistory: any;
    generateBotResponse: any;
}

export interface ChatMessageProps {
    chat: {
        role: 'user' | 'model';
        text: string;
        isError?: boolean;
        hideInChat?: boolean;
    };
}

export interface FooterSocialProps {
    title: 'Linkedin' | 'Instagram' | 'Facebook';
}

export interface CloseHamburgerProps {
    onClick: React.MouseEventHandler;
}

export interface HamburgerProps {
    onClick: React.MouseEventHandler;
    children: React.ReactNode;
}

export interface OpenHamburgerProps {
    onClick: React.MouseEventHandler;
}

export interface AboutUsCardProps {
    firstTitle: string;
    secondTitle: string;
    preTitle: string;
    description: string;
    iconSrc: string;
}

export interface BlogCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

export interface CaseCardProps {
    title: string;
    src: string;
    description: string;
    techIndexes: number[];
}

export interface TechnologyCircleProps {
    name: string;
    src: string;
    width: number;
    height: number;
}

export interface InputProps {
    type: 'text' | 'email' | 'tel';
}

export interface DirectionCardProps {
    title: string;
    preTitle: string;
    description: string;
    src: string;
}

export interface ReviewCardProps {
    name: string;
    post: string;
    text: string;
    src: string;
    date: string;
    rating?: number;
}

export interface RewardCardProps {
    title: string;
    description: string;
}

export interface MemberCardProps {
    name: string;
    post: string;
    photoSrc: string;
    iconWidth: number;
    iconHeight: number;
    iconSrc: string;
}

export interface UseGsapFadeUpProps {
    trigger: string;
    y: number;
    x: number;
    opacity: number;
    duration: number;
}

export interface ScaleInOptions {
    trigger: string;
    scaleFrom?: number;
    duration?: number;
    ease?: string;
}
