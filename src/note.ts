import * as chalk from 'chalk'

export class Note {
    constructor(private title: string, private body: string, private color: string) {}

    getTitle() {
        return this.title
    }
}