export interface IProject {
    id?: number | string;
    name: string,
    image: Array<any>,
    createAt: string,
    categoryProjectId: number | string,
    short_desc: string,
    description: string
    // project: name, image, createAt, categoryProjectId, short-desc, desc
}