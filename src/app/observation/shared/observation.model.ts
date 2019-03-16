import { User } from 'src/app/user/shared/user.model';
import { Species } from 'src/app/species/shared/species.model';

export class Observation {
    id: number;
    owner: User;
    species: Species;
    date: Date;
}