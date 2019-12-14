import {IPerson} from './person.model';

export  interface IOrganisation {
  id: string;
  type: string;
  name: string;
  address: string;
  telephone: string;
  owner?: string | IOrganisation | IPerson;
  screen?: string;
  description?: string;
}