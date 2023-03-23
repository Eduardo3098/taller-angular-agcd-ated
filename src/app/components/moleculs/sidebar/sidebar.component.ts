import { Component } from '@angular/core';
import { SidebarRoutes } from 'src/app/const/sidebar.const';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuOptions = SidebarRoutes;
  cambiarcolor(option:any){
    alert(option)
  }
}
