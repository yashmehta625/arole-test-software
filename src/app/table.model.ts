export interface ITable {
    id?: number;
    name?: string;
    icons?: string;
    color?: string;
}

export class Table implements ITable{
    constructor(
        public id?: number,
        public name?: string,
        public icons?: string,
        public color?: string,
    ){}
}

