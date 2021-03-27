import { ITable } from "./table.model";

export interface ISegment {
    description?: string;
    icons?: string;
    id?: number;
    name?: string;
    tables?: ITable[];
    show?: boolean;
}

export class Segment implements ISegment{
    constructor(
        public description?: string,
        public name?: string,
        public icons?: string,
        public id?: number,
        public tables?: ITable[],
        public show?: boolean
    ){}
}
