import * as chalk from 'chalk'

export class Note {
    constructor(private title: string, private body: string, private color: string) {}

    getTitle() {
        return this.title
    }    
    getBody() {
        return this.body
    }
    getColor() {
        return this.color
    }
    setTitle(newTitle: string) {
        this.title = newTitle
    }    
    setBody(newBody: string) {
        this.body = newBody
    }
    setColor(newColor: string) {
        this.color = newColor
    }
    showTitle() {
        switch(this.color) {
            case 'Rojo':
                return chalk.red(this.title)
            case 'Verde':
                return chalk.green(this.title)
            case 'Azul':
                return chalk.blue(this.title)
            case 'Amarillo':
                return chalk.yellow(this.title)
            default:
                return chalk.red('Color erroneo')
        }
    }
}