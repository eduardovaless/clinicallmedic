import jQuery from 'jQuery';


import { Component, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  title = 'gestor-app';

  ngAfterViewInit(){
    (function($) {
        "use strict";
    
        // Toggle the side navigation
        $("#sidebarToggle").on("click", function(e) {
            e.preventDefault();
            $("body").toggleClass("sb-sidenav-toggled");
        });
    })(jQuery);
  }
}
