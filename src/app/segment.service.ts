import { Injectable } from '@angular/core';
import { ISegment } from './segment.model';
import { ITable } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  segments: ISegment[] = [];

  constructor() { }

  addSegment(segment: ISegment): void {
    this.segments.push({
      description: segment.description,
      name: segment.name,
      icons: segment.icons,
      id: this.generateSegmentId(),
      tables: [],
      show: false
    });
  }

  getSegments(): ISegment[] {
    return this.segments;
  }

  private generateSegmentId(): number {
    return this.segments.length + 1;
  }

  addTable(table: ITable, segmentIndex: number): void {
    this.segments[segmentIndex].tables.push({
      id: this.generateTableId(segmentIndex),
      name: table.name,
      icons: table.icons,
      color: table.color,
    });
  }

  private generateTableId(segmentIndex: number): number {
    return this.segments[segmentIndex].tables.length + 1;
  }
}
