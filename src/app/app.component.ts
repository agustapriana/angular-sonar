import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'angular-soner'; 
  header = "est";
  body = "body";    

  awal: number = 0;
  akhir: number = 0;
  hasil : number = 0 ;

  jumlah(){
    this.hasil = this.awal + this.akhir ;
  }

}
