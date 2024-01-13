import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app.config';
import { DataManagerService } from 'src/app/services/dataManager.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-list-hacks',
  templateUrl: './list-hacks.component.html',
  styleUrls: ['./list-hacks.component.css'],
})
export class ListHacksComponent implements OnInit {
  hackList: any = [];
  filteredHackList: any = [];
  selectedHack: any = {};
  currentTab: string | number = 'all';
  filterMode: string = 'all';
  searchValue: string = '';
  addMode: boolean = false;
  showIdleSvg: boolean = false;
  showViewMorePopup: boolean = false;

  constructor(
    private dataManagerService: DataManagerService,
    private localStorage: LocalStorageService,
    private toastService: ToastMessageService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllHacks();
    }, 500);
  }

  getAllHacks() {
    this.spinnerService.showSpinnerMethod();
    let url = AppConfig.API_BASE_URL + `?empID=${this.currentTab}`;
    this.dataManagerService.APIGenericGetMethod(url).subscribe((data) => {
      this.spinnerService.hideSpinner();
      this.hackList = data;
      this.hackList.forEach((e: any) => {
        e['isDescriptionLong'] = false;
        if (e.description.length > 50) {
          e['isDescriptionLong'] = true;
        }
      });
      this.filteredHackList = data;
      if (data.length == 0) {
        this.showIdleSvg = true;
      } else {
        this.showIdleSvg = false;
      }
    });
  }

  switchTab(flag: string) {
    this.currentTab = flag;
    if (flag == 'myHacks') {
      this.currentTab = +this.localStorage.getItem('empID');
    }
    this.getAllHacks();
  }

  sortList(flag: string = '') {
    if (flag == 'search' && this.searchValue.length > 2) {
      this.filteredHackList = this.hackList.filter((e: any) => {
        return +e.createdBy == +this.searchValue;
      });
      if (this.filteredHackList.length == 0) {
        this.toastService.setToastMsgFunction({
          status: true,
          message: `No ideas created by employee with ID:${this.searchValue}`,
          color: '#e9465e',
        });
      }
    } else if (this.filterMode == 'createdDate') {
      this.filteredHackList = this.hackList.sort(
        (a: any, b: any) => b.createdAt - a.createdAt
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
    this.spinnerService.showSpinnerMethod();
    let body: any = hack;
    if (body.upvotes.includes(this.localStorage.getItem('empID'))) {
      // alert('Uh oh! can only upvote once');
      this.toastService.setToastMsgFunction({
        status: true,
        message: 'Uh oh ! You have already upvoted this !',
        color: '#e9465e',
      });
      this.spinnerService.showSpinnerMethod();
    } else {
      body['upvotes'].push(this.localStorage.getItem('empID'));
      let url = AppConfig.API_BASE_URL + '/upvote';
      this.dataManagerService
        .APIGenericPostMethod(url, body)
        .subscribe((data) => {
          console.log(data);
          this.spinnerService.hideSpinner();
        });
    }
  }
}
