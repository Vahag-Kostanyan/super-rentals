import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContactRoute extends Route {
  @service router;

  async beforeModel() {
    // if (true) {
    //   this.router.transitionTo('login');
    // }
  }

}
