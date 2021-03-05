import { Component, OnInit } from '@angular/core';
import { ToggleStateService } from '../../services/toggle-state/toggle-state.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  
  toggle: boolean = true;

  constructor(
    private toggleState: ToggleStateService
  ) { }

  ngOnInit(): void {
    this.toggleState.dataObsevable.subscribe(res => {
      this.toggle = res;
    })
  }

  toggleMenu() {
    this.toggleState.toggleState(!this.toggle);
  }

}
