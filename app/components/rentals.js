import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalsComponent extends Component {
  @tracked query = '';

  get rentals() {
    return this.args.rentals.filter((item) => item.title.includes(this.query));
  }
}
