import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.minLength(4),
      Validators.maxLength(12),
    ]);
  }

  ngOnInit(): void {
    this.emailField.valueChanges.subscribe((currentEmail) => {
      console.log({ currentEmail });
    });
  }

  registerMail() {
    if (this.emailField.valid) {
      alert(this.emailField.value);
    }
  }
}
