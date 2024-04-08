import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = 'Ege';
  items= [
      {description: "Kahvaltı", action:"Yapılmadı"},
      {description: "Ders Çalışma", action:"Yapılmadı"},
      {description: "Duş", action:"Yapılmadı"},
      {description: "Spor", action:"Yapıldı"}
  ];
}
