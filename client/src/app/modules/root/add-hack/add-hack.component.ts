import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppConfig } from 'src/app.config';
import { DataManagerService } from 'src/app/services/dataManager.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToastMessageService } from 'src/app/services/toast-message.service';

@Component({
  selector: 'app-add-hack',
  templateUrl: './add-hack.component.html',
  styleUrls: ['./add-hack.component.css'],
})
export class AddHackComponent implements OnInit {
  @Output() sendDataToParent = new EventEmitter();
  @Input() hackList: any = [];
  hackDetails = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    tags: new FormControl(''),
  });

  tagOptions: any = [
    { name: 'Select', value: '' },
    { name: 'AI/ML', value: 'ai' },
    { name: 'Security', value: 'security' },
    { name: 'BigData', value: 'bigdata' },
    { name: 'Cloud', value: 'cloud' },
    { name: 'Programming', value: 'progamming' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private dataManager: DataManagerService,
    private localStorage: LocalStorageService,
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.hackDetails = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  onAdd() {
    console.log(this.hackDetails.valid);
    if (this.hackDetails.valid) {
      let url = AppConfig.API_BASE_URL;
      let f = this.hackDetails.controls;
      let body = {
        title: f.title.value,
        description: f.description.value,
        tags: f.tags.value,
        createdBy: this.localStorage.getItem('empID'),
        createdAt: new Date().getTime(),
        upvotes: [],
        hackId: this.hackList.length + 1,
      };
      console.log(body);
      // return;
      this.dataManager.APIGenericPostMethod(url, body).subscribe((data) => {
        console.log(data);
        this.sendDataToParent.emit('close');
      });
    } else {
      this.toastService.setToastMsgFunction({
        status: true,
        message: 'Please fill all mandatory fields',
        color: '#e9465e',
      });
    }
  }
}
