import { AbstractControl } from '@angular/forms';

export class MyValidators {
  constructor() {}

  static isPriceValidate(control: AbstractControl) {
    const { value } = control;
    console.log(value);
    if (value > 1000) {
      return { price_invalid: true };
    }

    return null;
  }
}
