import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app.config';
import { DataManagerService } from 'src/app/services/dataManager.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-hacks',
  templateUrl: './list-hacks.component.html',
  styleUrls: ['./list-hacks.component.css'],
})
export class ListHacksComponent implements OnInit {
  hackList: any = [];
  currentTab: string|number = 'all';
  addMode: boolean = false;

  constructor(
    private dataManagerService: DataManagerService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getAllHacks();
  }

  getAllHacks() {
    let url = AppConfig.API_BASE_URL + `?empID=${this.currentTab}`;
    this.dataManagerService.APIGenericGetMethod(url).subscribe((data) => {
      console.log(data);
      this.hackList = data;
    });
  }

  switchTab(flag: string) {
    this.currentTab = flag;
    console.log(this.currentTab, 'machaaaa');
    if (flag == 'myHacks') {
      this.currentTab = +this.localStorage.getItem('empID');
    }
    console.log(flag);
    setTimeout(() => {
      this.getAllHacks();
    }, 100);
  }

  addNewHack() {}

  onPopupClose() {
    this.getAllHacks();
  }
}
