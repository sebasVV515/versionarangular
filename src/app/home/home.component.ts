import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personajes:Personaje[] = [
    {
      "foto":"https://soyreferee.com/sites/referee/img/2020/12/05/eddie_carter.jpeg",
      "nombre":"Eddie Carter ",
      "edad":15
    },
    {
      "nombre":"Bruce Harper",
      "foto":"https://i.pinimg.com/originals/11/6e/a6/116ea658856e1a068a1f4e5ef6b1857b.jpg",
      "edad":14
    },
    {
      "nombre":"Steve Hyuga",
      "foto":"https://soyreferee.com/sites/referee/img/2020/12/05/steve_hyuga.jpeg",
      "edad":13
    },
    {
      "nombre":"Armand Callahan",
      "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCI0wF71Xg-V0Sj73Qb2kP1SrfCpRcUPudE4g04iC2zFeB13qD8eoZv701Nxh0a59s34&usqp=CAU",
      "edad":12
    },
    {
      "nombre":"Oliver Atom",
      "foto":"https://depor.com/resizer/O3xgtATjZunnAIKOfoY1U0uPa0Q=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DQLBDFFASZFDXKYNSIS7TH6P6E.jpg",
      "edad":16
    }]
  constructor() { }
}
