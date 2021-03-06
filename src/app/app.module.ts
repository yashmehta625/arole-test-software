import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';


import { AppComponent } from './app.component';
import { AddSegmentDialogComponent } from './add-segment-dialog/add-segment-dialog.component';
import { AddTableDialogComponent } from './add-table-dialog/add-table-dialog.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    AddSegmentDialogComponent,
    AddTableDialogComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    PickerModule,
    EmojiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
