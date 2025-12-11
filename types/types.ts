export type post={
    mainimage:string,
    title:string,
    description:string,
    content:string,
    likes:string[],
    comments:string[],
    views:number,
    mainslider:boolean,
    createdAt:string,
    _id:string
}
export type review={
    mainimage:string,
    category:string,
    title:string,
    description:string,
    content:string,
    likes:string[],
    comments:string[],
    views:number,
     score:number,
     summary:string,
     usersscore:{id:string,score:string}[]
    createdAt:string,
    _id:string
}
export type liked={
    item:post|review,
    kind:'post'|'review'
}