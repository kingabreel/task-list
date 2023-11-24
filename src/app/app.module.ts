import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HeaderComponent } from './components/header/header.component';
import { NewTaskBoxComponent } from './components/new-task-box/new-task-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    HeaderComponent,
    NewTaskBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
