import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form833',
  templateUrl: './form833.component.html',
  styleUrls: ['./form833.component.scss']
})
export class Form833Component implements OnInit {
	email = new FormControl('', [Validators.required, Validators.email]);

  	getErrorMessage() {
    	return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  	}

  	constructor() {}
  	ngOnInit() {}
}
