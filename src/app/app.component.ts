import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddSegmentDialogComponent } from './add-segment-dialog/add-segment-dialog.component';
import { AddTableDialogComponent } from './add-table-dialog/add-table-dialog.component';  
import { ISegment } from './segment.model';
import { SegmentService } from './segment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'arole-test-software';
  segments: ISegment[] = [];

  constructor(public segmentService: SegmentService, private dialog: MatDialog){}

  ngOnInit(): void{
    this.loadAll();
  }

  loadAll(): void{
    this.segments = this.segmentService.getSegments()
  }

  openAddSegmentDialog(): void{
    this.dialog.open(AddSegmentDialogComponent, {width: '30%'});
  }

  openAddTableDialog(index: number): void{
    const modelRef =this.dialog.open(AddTableDialogComponent, {width: '30%'});
    modelRef.componentInstance.segmentIndex = index;
  }
}
