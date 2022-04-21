import 'mocha'
import { expect } from 'chai'
import { Note } from '../src/note'
import { ManagerNote } from '../src/managerNote'
import * as chalk from 'chalk'

const note1 = new Note('Nota1', 'Esto es el cuerpo de la nota 1', 'Rojo')
const note2 = new Note('Nota2', 'Esto es el cuerpo de la nota 2', 'Verde')
const note3 = new Note('Nota3', 'Esto es el cuerpo de la nota 3', 'Azul')
const note4 = new Note('Nota4', 'Esto es el cuerpo de la nota 4', 'Amarillo')
const note5 = new Note('', '', '')

const userNote = new ManagerNote('User1', [note1])

describe('Tests from ManagerNote class', () => {
    it('Se espera que userNote sea un objeto de la clase ManagerNote', () => {
        expect(userNote).instanceOf(ManagerNote)
    })
    it('Se obtiene un usuario de la clase ManagerNote', () => {
        expect(userNote.getUser()).to.be.eq('User1')
    })
    it('Se obtiene las notas del usuario', () => {
        expect(userNote.getNoteUser()).to.deep.equal([note1])
    })
})