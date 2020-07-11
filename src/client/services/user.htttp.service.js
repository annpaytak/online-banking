import HttpServices from './http.service';

class UserHtttpService extends HttpServices {
    getUserData = userId => this.http.get(`/api/users/${userId}`);
    getUserCard = userId => this.http.get(`/api/cards/${userId}`);
    getUserTransactions = userId => this.http.get(`/api/transactions/users/${userId}`);
    getTransactionById = id => this.http.get(`/api/transactions/${id}`);

    createTransaction = body => this.http.post(`/api/transactions`, body);
}

export default new UserHtttpService();
