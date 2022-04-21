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
            case 'Verde':
                return chalk.green(this.title);
            case 'Azul':
                return chalk.blue(this.title);
            case 'Amarillo':
                return chalk.yellow(this.title);
            default:
                return chalk.red('Color erroneo');
        }
    }
    showBody() {
        switch (this.color) {
            case 'Rojo':
                return chalk.red(this.body);
            case 'Verde':
                return chalk.green(this.body);
            case 'Azul':
                return chalk.blue(this.body);
            case 'Amarillo':
                return chalk.yellow(this.body);
            default:
                return chalk.red('Color erroneo');
        }
    }
}
exports.Note = Note;
