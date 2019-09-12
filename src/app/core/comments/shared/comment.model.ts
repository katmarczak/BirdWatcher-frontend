import { User } from 'src/app/user/shared/user.model';

export class Comment {
    _id: String;
    author: User;
    text: String;
    createdOn: Date;
    editedOn: Date;
    editable: Boolean;

    constructor() {
        this.editable = false;
    }
}