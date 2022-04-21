import { Note } from "./note";
import { ManagerNote } from "./managerNote";

const note1 = new Note('Nota1', 'Esto es el cuerpo de la nota 1', 'Rojo')
const note2 = new Note('Nota2', 'Esto es el cuerpo de la nota 2', 'Verde')
const note3 = new Note('Nota3', 'Esto es el cuerpo de la nota 3', 'Azul')
const note4 = new Note('Nota4', 'Esto es el cuerpo de la nota 4', 'Amarillo')
const note5 = new Note('', '', '')
//console.log(note1.showTitle())
//console.log(note2.showTitle())
//console.log(note3.showTitle())
//console.log(note4.showTitle())
//console.log(note5.showTitle())

const userNote = new ManagerNote('usuario1', [note1, note2])

userNote.addNote(note3)