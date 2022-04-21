import 'mocha'
import { expect } from 'chai'
import { Note } from '../src/note'

const note1 = new Note('Nota1', 'Esto es el cuerpo de la nota 1', 'Azul')
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
        expect(note1.getColor()).to.be.eq('Azul')
    })  
    
})

