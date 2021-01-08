import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';
  QLTSInput = 'Quản Lý Tài Sản'
  QLTSOUT =['Chair','Table','Computer','Fan','Light'];
  addNewTS(qlts: string) {
    console.log('pảent',qlts)
    this.QLTSOUT.push(qlts);
  }
}
