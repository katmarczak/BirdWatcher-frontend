import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FileService } from 'src/app/sharedServices/file.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  avatarImg: File;
  currentUser: User;
  fileName: String;

  constructor(private userService: UserService, private fileService: FileService, private router: Router) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if(!userId) this.router.navigateByUrl('/login');
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  getAvatarSrc() {
    if (this.currentUser && this.currentUser.avatarPath) return `http://localhost:3000/${this.currentUser.avatarPath}`;
    return '../../../assets/default-avatar.png';
  }

  handleFileInput(files: FileList) {
    this.avatarImg = files.item(0);
    this.fileName = files.item(0).name;
  }

  onSubmit() {
    if (this.avatarImg) {
      const formData: FormData = new FormData();
      formData.append('avatar', this.avatarImg);
      this.fileService.uploadFile(formData, '/users/avatar')
        .subscribe((response) => {
          console.log(response);
          this.refresh();
        }, (error) => {
          console.log(error);
        });
    }
  }

  refresh() {
    this.avatarImg = undefined;
    this.fileName = undefined;
    this.ngOnInit();
  }

}
