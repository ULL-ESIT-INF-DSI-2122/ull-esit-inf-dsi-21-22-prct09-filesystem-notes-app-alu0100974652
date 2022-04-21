import { Note } from "./note";
import * as chalk from 'chalk';
import * as fs from 'fs';

export class ManagerNote {
    constructor(private user: string, private noteUser: Note) {}
}