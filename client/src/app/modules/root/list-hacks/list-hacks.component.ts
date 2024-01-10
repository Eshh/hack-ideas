import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app.config';
import { DataManagerService } from 'src/app/services/dataManager.service';

@Component({
  selector: 'app-list-hacks',
  templateUrl: './list-hacks.component.html',
  styleUrls: ['./list-hacks.component.css'],
})
export class ListHacksComponent implements OnInit {
  hackList:any=[]
  constructor(private dataManagerService: DataManagerService) {}

  ngOnInit(): void {
    this.getAllHacks();
  }

  getAllHacks() {
    let url = AppConfig.API_BASE_URL;
    this.dataManagerService.APIGenericGetMethod(url).subscribe((data) => {
      console.log(data);
      this.hackList = data
    });
  }
}
