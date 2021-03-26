import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-segment-dialog',
  templateUrl: './add-segment-dialog.component.html',
  styleUrls: ['./add-segment-dialog.component.css']
})
export class AddSegmentDialogComponent implements OnInit {

  segmentForm = this.fb.group({
    name: ['', Validators.required],
    icons: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

}
