import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-view-more-popup',
  templateUrl: './view-more-popup.component.html',
  styleUrls: [
    './view-more-popup.component.css',
    '../list-hacks/list-hacks.component.css',
  ],
})
export class ViewMorePopupComponent implements OnInit {

  @HostListener('document:mousedown', ['$event.target'])
  onGlobalClick(target: any): void {
    if (!this.ref.nativeElement.contains(target)) {
      this.sendDataToParent.emit('close');
    }
  }
  @Input() selectedHack: any = {};
  @Output() sendDataToParent = new EventEmitter();

  constructor(private ref: ElementRef) {}

  ngOnInit(): void {}

  upvote() {
    this.sendDataToParent.emit(this.selectedHack);
  }
}
