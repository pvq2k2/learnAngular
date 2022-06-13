export interface IWork {
    id?: number | string;
    name: string,
    image: string,
    createAt: string | number,
    categoryId: number | string,
    category?: {
        name?: string,
        id?: number | string
    },
    short_desc: string,
    description: string
} 