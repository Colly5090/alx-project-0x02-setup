
export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    title?: string;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


    