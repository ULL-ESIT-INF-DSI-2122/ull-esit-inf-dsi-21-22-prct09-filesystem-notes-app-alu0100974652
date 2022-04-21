import 'mocha'
import { expect } from 'chai'
import { Note } from '../src/note'

const note1 = new Note('Nota1', 'Esto es el cuerpo de la nota 1', 'Rojo')
const note2 = new Note('Nota2', 'Esto es el cuerpo de la nota 2', 'Verde')
const note3 = new Note('Nota3', 'Esto es el cuerpo de la nota 3', 'Azul')
const note4 = new Note('Nota4', 'Esto es el cuerpo de la nota 4', 'Amarillo')

describe('Tests from Note class', () => {
    it('Se espera que Note1 sea un objeto de la clase Note', () => {
        expect(note1).instanceOf(Note)
    })
    it('Se obtiene el titulo de la nota', () => {
        expect(note1.getTitle()).to.be.eq('Nota1')
    })    
    it('Se obtiene el cuerpo de la nota', () => {
        expect(note1.getBody()).to.be.eq('Esto es el cuerpo de la nota 1')
    })   
    it('Se obtiene el color de la nota', () => {
        expect(note3.getColor()).to.be.eq('Azul')
    })
    it('Se cambia el titulo de la nota', () => {
        note1.setTitle('NotaTitulo1')
        expect(note1.getTitle()).to.be.eq('NotaTitulo1')
    })    
    it('Se cambia el cuerpo de la nota', () => {
        note1.setBody('Este cuerpo ha sido cambiado en la nota 1')
        expect(note1.getBody()).to.be.eq('Este cuerpo ha sido cambiado en la nota 1')
    })   
    it('Se cambia el color de la nota', () => {
        note1.setColor('Verde')
        expect(note1.getColor()).to.be.eq('Verde')
    })    
    
})

