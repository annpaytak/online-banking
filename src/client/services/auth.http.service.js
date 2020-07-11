import HttpServices from './http.service';

class AuthHttpService extends HttpServices {
    createUser = user => this.http.post('/api/auth/signup', user);
    signinUser = user => this.http.post('/api/auth/signin', user);
}

export default new AuthHttpService();
