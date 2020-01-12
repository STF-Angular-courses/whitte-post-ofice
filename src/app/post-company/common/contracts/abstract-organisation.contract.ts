import {ILogger} from '../interfaces/logger-interface';
import {OrganisationModel} from '../models/organisation.model';

export default abstract class Organisation implements OrganisationModel, ILogger {
  public abstract name: string;
  public abstract screen: string;
  public abstract description: string;
  public abstract  id: string;
  public abstract  type: string;
  public abstract  address: string;
  public abstract  telephone: string;
  public abstract  owner?: string | Organisation;
  constructor( ) { }

  logData(): void {
    console.log(`
        Name:  ${this.name};
        ID: ${this.id};
        Type: ${this.type};
        Address: ${this.address};
        Telephone: ${this.telephone};
        ${this.owner ? 'Owner: ' + this.owner : 'none'}`
    );
  }
}