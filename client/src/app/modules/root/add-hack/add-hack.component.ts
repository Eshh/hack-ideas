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
import { SpinnerService } from 'src/app/services/spinner.service';
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
    { name: 'AI/ML', value: 'ai/ml' },
    { name: 'Security', value: 'security' },
    { name: 'BigData', value: 'bigdata' },
    { name: 'Cloud', value: 'cloud' },
    { name: 'Programming', value: 'progamming' },
    { name: 'Marketing', value: 'marketinng' },
    { name: 'Miscellaneous', value: 'miscellaneous' },
  ];

  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataManager: DataManagerService,
    private localStorage: LocalStorageService,
    private toastService: ToastMessageService,
    private spinnerService:SpinnerService
  ) {}

  ngOnInit(): void {
    this.hackDetails = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
      tags: ['', [Validators.required]],
    });
  }

  get f() {
    return this.hackDetails.controls;
  }

  onAdd() {
    this.spinnerService.showSpinnerMethod();
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
      // return;
      this.dataManager.APIGenericPostMethod(url, body).subscribe((data) => {
        this.spinnerService.hideSpinner();
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
