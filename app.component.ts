import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppName='Blogger'; 
  data=[
    {
      name:'Awais',
      Age:23,
      Email:"XYZ@test.com",
      Address:"Pakistan",
    },
    {
      name:'Waqas',
      Age:28,
      Email:"XYZ@test.com",
      Address:"Pakistan",
    },
    {
      name:'Numan',
      Age:17,
      Email:"XYZ@test.com",
      Address:"Pakistan",
    },
    {
      name:'Sufyan',
      Age:18,
      Email:"XYZ@test.com",
      Address:"Pakistan",
    }
  ]
}
