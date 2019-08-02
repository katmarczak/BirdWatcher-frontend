import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FileService } from 'src/app/sharedServices/file.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  avatarImg: File;

  constructor(private userService: UserService, private fileService: FileService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.avatarImg = files.item(0);
  }

  onSubmit() {
    if(this.avatarImg) {
      const formData: FormData = new FormData();
      formData.append('avatar', this.avatarImg);
      this.fileService.uploadFile(formData, '/users/avatar')
        .subscribe((response) => {
          console.log(response);
        }, (err) => {
          console.log(err);
        });
    }
  }

}
