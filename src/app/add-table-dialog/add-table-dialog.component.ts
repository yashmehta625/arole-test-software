import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SegmentService } from '../segment.service';

@Component({
  selector: 'app-add-table-dialog',
  templateUrl: './add-table-dialog.component.html',
  styleUrls: ['./add-table-dialog.component.css']
})
export class AddTableDialogComponent implements OnInit {

  segmentIndex:number;
  selectedColor: string;

  tableForm = this.fb.group({
    name: ['', Validators.required],
    icons: ['', Validators.required],
    color: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private segmentService: SegmentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.segmentService.addTable(this.tableForm.value, this.segmentIndex);
  }

  select(emojiEvent: EmojiEvent): void{
    this.tableForm.patchValue({
      icons: emojiEvent.emoji.native
    });
  }

  colorChange(color:string): void{
    this.tableForm.patchValue({
      color: color
    });
    this.selectedColor = color;
  }

}
