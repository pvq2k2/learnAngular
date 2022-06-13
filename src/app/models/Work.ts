export interface IWork {
    id?: number | string;
    name: string,
    image: string,
    createAt: string | number,
    categoryId: number | string,
    short_desc: string,
    description: string
} 