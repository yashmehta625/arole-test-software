import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { SegmentService } from '../segment.service';

@Component({
  selector: 'app-add-segment-dialog',
  templateUrl: './add-segment-dialog.component.html',
  styleUrls: ['./add-segment-dialog.component.css']
})
export class AddSegmentDialogComponent implements OnInit {

  segmentForm = this.fb.group({
    name: ['', Validators.required],
    icons: ['', Validators.required],
    description: ['']
  });

  constructor(private fb : FormBuilder, public segmentService: SegmentService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.segmentService.addSegment(this.segmentForm.value);
  }

  select(emojiEvent: EmojiEvent): void{
    this.segmentForm.patchValue({
      icons: emojiEvent.emoji.native
    });
  }
}
