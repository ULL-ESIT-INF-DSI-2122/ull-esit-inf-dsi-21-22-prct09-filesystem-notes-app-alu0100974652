"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const chalk = require("chalk");
class Note {
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }
    getTitle() {
        return this.title;
    }
    getBody() {
        return this.body;
    }
    getColor() {
        return this.color;
    }
    setTitle(newTitle) {
        this.title = newTitle;
    }
    setBody(newBody) {
        this.body = newBody;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    showTitle() {
        switch (this.color) {
            case 'Rojo':
                return chalk.red(this.title);
                break;
            case 'Verde':
                return chalk.green(this.title);
                break;
            case 'Azul':
                return chalk.blue(this.title);
                break;
            case 'Amarillo':
                return chalk.yellow(this.title);
                break;
            default:
                return chalk.red('Color erroneo');
                break;
        }
    }
}
exports.Note = Note;
