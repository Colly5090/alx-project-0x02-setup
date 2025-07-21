
export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    size: string;
    shape: string;
    title?: string;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number
}


    