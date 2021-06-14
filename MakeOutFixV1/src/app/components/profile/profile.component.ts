import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { OperationClaimDto } from 'src/app/models/operationClaimDto';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/UserDto';
import { UserOperationClaim } from 'src/app/models/userOperationClaims';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userUpdateForm!: FormGroup;
  user!: User;
  userDto!: UserDto;
  usersClaims: OperationClaimDto[] = [];

  dataLoad!: Boolean;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.createUserUpdateForm();
    this.getUsersClaims();
    this.getUser();
  }
  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  update() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      userModel.id = parseInt(this.localStorageService.get('id')!);
      console.log(userModel);
      this.userService.update(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          this.toastrService.error(responseError.error, 'Hata');
        }
      );
    } else {
      this.toastrService.error('Kullanıcı bilgileri eksik', 'Hata');
    }
  }

  getUser() {
    this.userService
      .getDtoByEmail(this.localStorageService.get('email')!)
      .subscribe((response) => {
        this.userDto = response.data;
        console.log(this.usersClaims);
      });
  }
  getUsersClaims() {
    let userId = parseInt(this.localStorageService.get('id')!);
    this.userService.getUserClaimsById(userId).subscribe((response) => {
      this.usersClaims = response.data;
      console.log(this.usersClaims);
    });
  }
}
