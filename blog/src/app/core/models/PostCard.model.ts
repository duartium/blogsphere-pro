export interface PostCard {
    id: number;
    codePost: string;
    title: string;
    description?: string;
    categories: string[];
    urlImage?: string;
}