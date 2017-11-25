import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment.prod'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Manducare';

  ngOnInit(): void {
      console.log('Environment state is: ', environment)
  }
}
