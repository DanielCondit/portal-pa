//Native imports
import { Component } from '@angular/core';

//My Imports
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-pa';
  //My adds
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  items: Observable<any[]>;
  constructor(private breakpointObserver: BreakpointObserver, db: AngularFirestore) {this.items = db.collection('items').valueChanges();};
}