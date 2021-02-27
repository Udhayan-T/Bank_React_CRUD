import axios from 'axios';

const REST_API_URL = "http://localhost:8080/api";

class AccountService {

    getAllAccounts(){
        return axios.get(REST_API_URL + '/' + 'getAllAccounts');
    }

    createAccount(account){
        return axios.post(REST_API_URL + '/createAccount', account);
    }

    getAccountById(accountId){
        return axios.get(REST_API_URL + '/getAccount/' + accountId);
    }

    updateAccount(accountId, account){
        return axios.put(REST_API_URL + '/updateAccounts/' + accountId, account);
    }
    
    deleteAccount(accountId){
        return axios.delete(REST_API_URL + '/deleteAccounts/' + accountId);
    }
}

export default new AccountService();