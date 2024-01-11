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
  filteredHackList: any = [];
  currentTab: string | number = 'all';
  filterMode: string = 'all';
  addMode: boolean = false;

  constructor(
    private dataManagerService: DataManagerService,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllHacks();
    }, 500);
  }

  getAllHacks() {
    let url = AppConfig.API_BASE_URL + `?empID=${this.currentTab}`;
    this.dataManagerService.APIGenericGetMethod(url).subscribe((data) => {
      console.log(data);
      this.hackList = data;
      this.filteredHackList = data;
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

  sortList() {
    if (this.filterMode == 'createdDate') {
      this.filteredHackList = this.hackList.sort(
        (a: any, b: any) => b.createdBy - a.createdBy
      );
    } else {
      this.filteredHackList = this.hackList.sort(
        (a: any, b: any) => b.upvotes.length - a.upvotes.length
      );
    }
  }

  onPopupClose(dataFromChild: any) {
    this.addMode = false;
    if (dataFromChild == 'close') {
      this.getAllHacks();
    }
  }

  upvote(hack: any) {
    let body: any = hack;
    console.log(body);
    if (body.upvotes.includes(this.localStorage.getItem('empID'))) {
      alert('Uh oh! can only upvote once');
    } else {
      body['upvotes'].push(this.localStorage.getItem('empID'));
      let url = AppConfig.API_BASE_URL + '/upvote';
      this.dataManagerService
        .APIGenericPostMethod(url, body)
        .subscribe((data) => console.log(data));
    }
  }
}
