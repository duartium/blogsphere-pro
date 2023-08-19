export interface BlogPost {
    id: number;
    codePost: string;
    title: string;
    description?: string;
    categories: string[];
    urlImage?: string;
    content: string;
}