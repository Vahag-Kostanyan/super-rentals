import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class SignupController extends Controller {
    // @service session;

    name = '';
    email = '';
    password = '';

    @action
    async signup() {
        console.log(this.name,  this.email, this.password);
        return
        if (isEmpty(this.email) || isEmpty(this.password) || isEmpty(this.name)) {
            console.error('Email and password are required.');
            return;
          }
      
          let userData = {
            name: this.name,
            email: this.email,
            password: this.password
          };



          try {
            // Send a signup request to the backend API
            let response = await fetch('your-api-url/auth/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userData)
            });
      
            if (response.ok) {
              // Signup successful, now login the user
              await this.session.authenticate('authenticator:ember-simple-auth-token', userData);
              this.transitionToRoute('protected');
            } else {
              // Handle signup failure (e.g., show an error message)
              console.error('Signup failed:', response);
            }
          } catch (error) {
            console.error('Signup failed:', error);
          }
    }
}
