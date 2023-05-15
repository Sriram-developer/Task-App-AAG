import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tas-add-edit',
  templateUrl: './tas-add-edit.component.html',
  styleUrls: ['./tas-add-edit.component.scss'],
})
export class TasAddEditComponent implements OnInit {
  tasForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _tasService: TaskService,
    private _dialogRef: MatDialogRef<TasAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.tasForm = this._fb.group({
      firstName: '',
      lastName: '',
      task: '',
      due: '',
      status: '',
      tasklvl: '',
      company: '',
      days: '',
      rewards: '',
    });
  }

  ngOnInit(): void {
    this.tasForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.tasForm.valid) {
      if (this.data) {
        this._tasService
          .updateTask(this.data.id, this.tasForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Task detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._tasService.addTask(this.tasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Task added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}