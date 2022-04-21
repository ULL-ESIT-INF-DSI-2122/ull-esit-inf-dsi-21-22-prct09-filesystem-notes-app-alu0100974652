"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const chalk = require("chalk");
class Note {
    /**
     * Constructor
     * @param title titulo de la nota
     * @param body cuerpo de la nota
     * @param color color de la nota
     */
    constructor(title, body, color) {
        this.title = title;
        this.body = body;
        this.color = color;
    }
    /**
     * GetterTitle
     * @returns devuelve el titulo de la nota
     */
    getTitle() {
        return this.title;
    }
    /**
     * GetterBody
     * @returns devuelve el cuerpo de la nota
     */
    getBody() {
        return this.body;
    }
    /**
     * GetterColor
     * @returns devuelve el color de la nota
     */
    getColor() {
        return this.color;
    }
    /**
     * SetterTitle
     * @param newTitle nuevo titulo de la nota
     */
    setTitle(newTitle) {
        this.title = newTitle;
    }
    /**
     * SetterBody
     * @param newBody nuevo cuerpo de la nota
     */
    setBody(newBody) {
        this.body = newBody;
    }
    /**
     * SetterColor
     * @param newColor nuevo color de la nota
     */
    setColor(newColor) {
        this.color = newColor;
    }
    /**
     * Muestra el titulo de la nota con su respectivo color
     * @returns devuelve un console.log a modo de print
     */
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
    /**
     * Muestra el cuerpo de la nota con su respectivo color
     * @returns devuelve un console.log a modo de print
     */
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
