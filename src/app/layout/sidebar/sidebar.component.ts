import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from '../../services/toggle-state/toggle-state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  childOpenBool: boolean = false;
  toggle: boolean = true;

  constructor(private toggleState: ToggleStateService) { }

  ngOnInit(): void {
    this.toggleState.dataObsevable.subscribe(res => {
      this.toggle = res;
    })
  }

  openChild() {
    this.childOpenBool = !this.childOpenBool;
  }

}
