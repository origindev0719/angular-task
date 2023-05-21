import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Channel } from '../../interfaces/travel.interface';

import { NgbCalendar, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  placement = 'bottom';
  form: FormGroup;

  constructor(private calendar: NgbCalendar, config: NgbTimepickerConfig) {
    config.seconds = true;
    config.spinners = false;

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      date: new FormControl({ year: 0, month: 0, day: 0 }, [
        Validators.required,
      ]),
      channel: new FormControl(Channel.agent),
      time: new FormControl({ hour: 0, minute: 0, second: 0 }),
    });
  }

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  ngOnInit(): void {}

  save() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
