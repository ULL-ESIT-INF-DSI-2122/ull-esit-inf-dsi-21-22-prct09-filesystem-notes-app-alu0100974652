"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = require("./note");
const managerNote_1 = require("./managerNote");
const yargs = require("yargs");
const chalk = require("chalk");
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note Color',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
            const newNote = new note_1.Note(argv.title, argv.body, argv.color);
            const managerNote = new managerNote_1.ManagerNote(argv.user);
            managerNote.addNote(newNote);
        }
        else {
            console.log(chalk.red('Argumentos inválidos'));
        }
    }
});
yargs.command({
    command: 'edit',
    describe: 'Edit note',
    builder: {
        user: {
            describe: 'User Name',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        newTitle: {
            describe: 'New Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        },
        color: {
            describe: 'Note Color',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string' && typeof argv.newTitle === 'string') {
            const managerNote = new managerNote_1.ManagerNote(argv.user);
            managerNote.editNote(argv.title, argv.newTitle, argv.body, argv.color);
        }
        else {
            console.log(chalk.red('Argumentos inválidos'));
        }
    }
});
yargs.command({
    command: 'remove',
    describe: 'Eliminar una nota',
    builder: {
        user: {
            describe: 'Nombre de usuario',
            demandOption: true,
            type: 'string',
        },
        title: {
            describe: 'Título de la nota',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        if (typeof argv.user === 'string' && typeof argv.title === 'string') {
            const managerNote = new managerNote_1.ManagerNote(argv.user);
            managerNote.removeNote(argv.title);
        }
        else {
            console.log(chalk.red('Argumentos no válidos'));
        }
    },
});
yargs.parse();
