import { Component, OnInit } from '@angular/core';
import { AuthService } from '../client/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private authService: AuthService) { }
  userRole:string | null='';
  isClient : boolean=true;
  ngOnInit() {
    this.userRole=this.authService.getRole();
    if (this.userRole==="new-seller" ||this.userRole==="seller"){
      this.isClient=false;
    }
    console.log()
  }

}
