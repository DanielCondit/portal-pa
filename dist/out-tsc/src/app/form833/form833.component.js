var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { config } from '../app.config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
var Form833Component = /** @class */ (function () {
    function Form833Component(db, form833Service, router) {
        this.db = db;
        this.form833Service = form833Service;
        this.router = router;
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.editMode = false;
        this.formToEdit = {};
    }
    Form833Component.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    Form833Component.prototype.ngOnInit = function () {
        this.serviceForms = this.db.collection(config.collection_endpoint).valueChanges();
        this.serviceForms = this.db
            .collection(config.collection_endpoint)
            .snapshotChanges()
            .pipe(map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the lname to the document data
                return __assign({ id: id }, data);
            });
        }));
    };
    Form833Component.prototype.edit = function (form) {
        console.log(form);
        //Set formToEdit and editMode
        this.formToEdit = form;
        this.editMode = true;
        //Set form value
        this.fname = form.fname;
    }; //edit
    Form833Component.prototype.saveForm = function () {
        if (this.date, this.desc, this.emails, this.fname, this.grade, this.lname, this.org, this.osymbol, this.phone, this.support !== null) {
            //Get the input value
            var form = {
                desc: this.desc,
                date: this.date,
                emails: this.emails,
                fname: this.fname,
                grade: this.grade,
                lname: this.lname,
                org: this.org,
                osymbol: this.osymbol,
                phone: this.phone,
                support: this.support,
            };
            if (!this.editMode) {
                console.log(form);
                this.form833Service.addForm833(form);
            }
            else {
                //Get the form id
                var formID = this.formToEdit.id;
                //update the task
                this.form833Service.updateForm833(formID, form);
            }
            //set edit mode to false and clear form
            this.editMode = false;
            this.desc = '';
            this.date = '';
            this.emails = '';
            this.fname = '';
            this.grade = '';
            this.lname = '';
            this.org = '';
            this.osymbol = '';
            this.support = '';
            this.router.navigateByUrl('/PA_Portal');
        }
    }; //saveTask
    Form833Component.prototype.deleteTask = function (form) {
        //Get the task lname
        var formId = form.id;
        //delete the task
        this.form833Service.deleteForm833(formId);
    }; //deleteTask
    Form833Component = __decorate([
        Component({
            selector: 'app-form833',
            templateUrl: './form833.component.html',
            styleUrls: ['./form833.component.scss'],
        }),
        __metadata("design:paramtypes", [AngularFirestore,
            AppService,
            Router])
    ], Form833Component);
    return Form833Component;
}());
export { Form833Component };
//# sourceMappingURL=form833.component.js.map