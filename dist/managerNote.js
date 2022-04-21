"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerNote = void 0;
const chalk = require("chalk");
const fs = require("fs");
class ManagerNote {
    constructor(user, noteUser) {
        this.user = user;
        this.noteUser = noteUser;
        const rute = './src/database/' + this.user;
        let filesRutes = '';
        noteUser.forEach(notes => {
            filesRutes = './src/database/' + this.user + '/' + notes.getTitle() + '.json';
            if (fs.existsSync(rute)) {
                console.log(chalk.green(`Bienvenido ${this.user}`));
                if (fs.existsSync(filesRutes)) {
                    console.log(chalk.red(`Lo sentimos ${this.user}, el titulo de la nota ${notes.getTitle()} no esta disponible, intentelo con otro titulo`));
                }
                else {
                    fs.writeFileSync(filesRutes, `{\n\t"title": "${notes.getTitle()}",\n\t"body": "${notes.getBody()}",\n\t"color": "${notes.getColor()}"\n}`);
                    console.log(chalk.green('Notas del constructor añadidas'));
                }
            }
            else {
                console.log(chalk.green(`Creando la estructura personal para el usuario: ${this.user} para gestionar sus notas `));
                fs.mkdirSync(rute);
                fs.writeFileSync(filesRutes, `{\n\t"title": "${notes.getTitle()}",\n\t"body": "${notes.getBody()}",\n\t"color": "${notes.getColor()}"\n}`);
                console.log(chalk.green('Notas del constructor añadidas'));
            }
        });
    }
    getUser() {
        return this.user;
    }
    getNoteUser() {
        return this.noteUser;
    }
    addNote(addNoteToUser) {
        const rute = './src/database/' + this.user;
        const fileRute = './src/database/' + this.user + '/' + addNoteToUser.getTitle() + '.json';
        if (fs.existsSync(rute)) {
            console.log(chalk.green(`Bienvenido ${this.user}`));
            if (fs.existsSync(fileRute)) {
                console.log(chalk.red(`Lo sentimos ${this.user}, el titulo de la nota: ${addNoteToUser.getTitle()} no esta disponible, intentelo con otro titulo`));
            }
            else {
                fs.writeFileSync(fileRute, `{\n\t"title": "${addNoteToUser.getTitle()}",\n\t"body": "${addNoteToUser.getBody()}",\n\t"color": "${addNoteToUser.getColor()}"\n}`);
                console.log(chalk.green('New note added!'));
            }
        }
    }
    editNote(title, newtitle, newBody, newColor) {
        const fileRute = './src/database/' + this.user + '/' + title + '.json';
        if (fs.existsSync(fileRute)) {
            fs.writeFileSync(fileRute, `{\n\t"title": "${newtitle}",\n\t"body": "${newBody}",\n\t"color": "${newColor}"\n}`);
            console.log(chalk.green(`Note ${title} edited`));
        }
    }
    removeNote(title) {
        const fileRute = './src/database/' + this.user + '/' + title + '.json';
        if (fs.existsSync(fileRute)) {
            fs.rmSync(fileRute);
            console.log(chalk.green('Note removed!'));
        }
        else {
            console.log(chalk.red('No se ha encontrado la nota, intentelo con otro titulo'));
        }
    }
}
exports.ManagerNote = ManagerNote;
