export interface BlogPost {
    id: number;
    title: string;
    description?: string;
    categories: string[];
    urlImage?: string;
    content: string;
}