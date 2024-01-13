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

  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataManager: DataManagerService,
    private localStorage: LocalStorageService,
    private toastService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.hackDetails = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      tags: ['', [Validators.required]],
    });
  }

  get f() {
    return this.hackDetails.controls;
  }

  onAdd() {
    this.isSubmitted = true;
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
        this.toastService.setToastMsgFunction({
          status: true,
          message: 'Idea added succesfully',
          color: '#067108a2',
        });
        this.sendDataToParent.emit('close');
      });
    } else {
      this.toastService.setToastMsgFunction({
        status: true,
        message: 'Please fill all mandatory fields with valid values',
        color: '#e9465e',
      });
    }
  }
}
