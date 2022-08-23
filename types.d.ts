export type TodoType = {
    completed?: boolean,
    userId?: number,
    id?: number,
    title?: string,
    handler?: () => void
}