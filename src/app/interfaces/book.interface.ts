export interface Book extends BookFormValue {
    id: number;
    publishedDate: Date;
}

export interface BookFormValue {
    title: string;
    author: string;
    price: number;
    description: string;
    category: string;
}
