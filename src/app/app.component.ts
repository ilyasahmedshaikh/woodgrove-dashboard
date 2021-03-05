import { Component } from '@angular/core';
import { ToggleStateService } from './services/toggle-state/toggle-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'woodgrove-ui-angular';

  toggle: boolean = true;

  constructor(
    private toggleState: ToggleStateService
  ) { }

  ngOnInit(): void {
    this.toggleState.dataObsevable.subscribe(res => {
      this.toggle = res;
    })
  }
}
