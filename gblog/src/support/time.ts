import { format, register } from 'timeago.js'

const TimeAgoConfiguration: string[][] = [
    ['today', 'today'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years'],
]

function formatDate(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}/${month}/${day}`
}

function timeago(date?: Date): string {
    if (!date) {
        return 'today'
    }

    const localeFunc = (number: number, index: number, _?: number): [string, string] => {
        return TimeAgoConfiguration[index] as [string, string]
    }

    register('timeago', localeFunc)

    return format(date, 'timeago')
}

export { formatDate, timeago }
