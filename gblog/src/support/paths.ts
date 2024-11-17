import { join } from 'node:path'

export function resolveFilePath(path: string) {
    if (path.startsWith('/')) {
        return resolveFilePathPublic(path)
    }

    return resolveFilePathInternal(path)
}

export function resolveFilePathPublic(path: string) {
    return join(process.cwd(), path)
}

export function resolveFilePathInternal(path: string) {
    const normalizePath = path.startsWith('@') ? path.replace('@', '') : path

    return join(process.cwd(), 'src/', normalizePath)
}
