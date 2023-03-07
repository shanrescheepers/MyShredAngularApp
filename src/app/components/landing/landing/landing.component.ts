import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // define a method
  helloMessage = "welcome to your template"

  isFirstTime = false

  sayHello = () => {
    console.log("Helooooo")
  }

  loggedIn = false

  // listItems = ["😃", "🥹", "😇"]
  listItems = [{ value: "😃" }, { value: "🥹" }, { value: "😇" }]

  // listOfData = [{ value: "🤓" }, { value: "😎" }, { value: "🤩" }]

  // define the variable we get from the parent in the html
  @Input() emojiObject = { value: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
