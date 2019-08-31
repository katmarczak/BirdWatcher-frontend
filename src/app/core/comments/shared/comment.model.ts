import { User } from 'src/app/user/shared/user.model';

export class Comment {
    id: String;
    author: User;
    text: String;
    createdOn: Date;
    editedOn: Date;
}