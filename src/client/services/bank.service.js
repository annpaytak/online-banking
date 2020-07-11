import api from './auth.http.service';

export default class BankServices {
    constructor() {
        console.log('hello bank');
    }

    async getUserBalance(userId) {
        let response = await api.getUserCard(userId);

        if (response.status === 200) {
            return Number(response.data.balance);
        }

        console.log(response);
        return null;
    }

    async getUserTransactions(userId) {
        let response = await api.getUserTransactions(userId);

        if (response.status === 200) {
            return response.data;
        }

        console.log('error', response);
        return [];
    }

    async getTransactionById(id) {
        let response = await api.getTransactionById(id);

        if (response.status === 200) {
            return response.data;
        }

        console.log('error', response);
        return null;
    }


    async postNewTransaction(data) {
        let response = await api.createTransaction(data);

        if (response.status === 200) {
            return response;
        }

        console.log('error', response);
    }

}
