export interface GitAction {
    action: string
}

export interface Push extends GitAction {
    branch: string,
    file?: {
        path: string, 
        name: string
    }
}

export interface Merge extends GitAction {
    head: string,
    base: string,
    commitMessage?: string
}

export interface Unknown extends GitAction {
    cmd: string,
    file?: {
        path: string, 
        name: string
    }
}