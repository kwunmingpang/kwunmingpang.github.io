
export type LinkType = {
    link: string
}

export type MetaDataType = FrontMatterType & LinkType

export type BlogGroups = {
    key: string;
    item: MetaDataType[]
}[]

export type BlogType = {
    blogGroups: BlogGroups
}

export type GroupedMeta = {}

export type FrontMatterType = {
    title: string;
    date: string;
    category?: string;
}