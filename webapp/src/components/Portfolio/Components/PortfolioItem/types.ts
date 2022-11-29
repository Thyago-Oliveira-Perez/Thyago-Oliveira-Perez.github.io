export interface IProjectItemProps {
    project: IProjectItem
}

export interface IProjectItem {
    title: string
    imgUrl: string
    stacks: string[]
    link: string
    description: string
}