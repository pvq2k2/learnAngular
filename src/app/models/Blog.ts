export interface IBlog {
    id?: number | string,
    title: string,
    createAt?: string | number,
    categoryBlogId: number | string,
    categoryBlog?: {
        name?: string,
        id?: number | string,
    };
    short_desc?: string,
    description: string

    // posts: title, image, createAt, categoryPostId, short-desc, desc
}