import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl= "../assets/images/BL_logo_square_jpg.jpg";
  ngOnInit() : void{
    this.title = "Hello from BridgeLabz.";
  }
}
