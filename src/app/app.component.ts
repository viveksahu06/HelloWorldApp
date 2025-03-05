import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule for ngModel

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Correct standalone syntax
  imports: [RouterOutlet, FormsModule], // ✅ Include FormsModule to use ngModel
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/images/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string="";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(): void {
    console.log("Save button is clicked!");
    window.open(this.url, "_blank");
  }

  onInput(): void {
    console.log("Change event occurred");
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/; 
    if(nameRegex.test(this.userName)){
      this.nameError ="";
      return;
    }
    this.nameError ="Name is incorrect"
}

}