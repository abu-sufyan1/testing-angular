import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  fireEvent(event){
    console.log(typeof(event));
    console.log(event)
    console.log(typeof(event.target.options))
    console.log((event.target.options.length))

  }
}
