import { Component, Input } from '@angular/core';
// Can Import API Services underneath too.


@Component({ //decorator - defines that this is a component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyShredAngularApp';
  listOfData = [{ value: "🤓" }, { value: "😎" }, { value: "🤩" }]

}
