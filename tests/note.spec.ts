import 'mocha'
import { expect } from 'chai'
import { Note } from '../src/note'

const note1 = new Note()
describe('Tests from Note class', () => {
    expect(note1).instanceOf(Note)
})

