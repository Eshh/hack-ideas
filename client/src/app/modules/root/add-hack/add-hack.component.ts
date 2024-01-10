import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-hack',
  templateUrl: './add-hack.component.html',
  styleUrls: ['./add-hack.component.css'],
})
export class AddHackComponent implements OnInit {
  hackDetails = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    tags: new FormControl(),
  });

  tagOptions: any = [
    { name: 'AI/ML', value: 'ai' },
    { name: 'BigData', value: 'bigdata' },
    { name: 'Cloud', value: 'cloud' },
    { name: 'Programming', value: 'progamming' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.hackDetails = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.hackDetails.valid);
  }
}
