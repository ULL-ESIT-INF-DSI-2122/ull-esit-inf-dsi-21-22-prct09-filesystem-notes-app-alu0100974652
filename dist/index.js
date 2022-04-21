"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = require("./note");
const managerNote_1 = require("./managerNote");
const note1 = new note_1.Note('Nota1', 'Esto es el cuerpo de la nota 1', 'Rojo');
const note2 = new note_1.Note('Nota2', 'Esto es el cuerpo de la nota 2', 'Verde');
const note3 = new note_1.Note('Nota3', 'Esto es el cuerpo de la nota 3', 'Azul');
const note4 = new note_1.Note('Nota4', 'Esto es el cuerpo de la nota 4', 'Amarillo');
const note5 = new note_1.Note('', '', '');
//console.log(note1.showTitle())
//console.log(note2.showTitle())
//console.log(note3.showTitle())
//console.log(note4.showTitle())
//console.log(note5.showTitle())
const userNote = new managerNote_1.ManagerNote('usuario1', [note1, note2]);
userNote.addNote(note3);
userNote.addNote(note3);
