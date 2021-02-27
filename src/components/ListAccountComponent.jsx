import React, { Component } from 'react'
import AccountService from '../services/AccountService'

class ListAccountComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                accounts: []
        }
        this.addAccount = this.addAccount.bind(this);
        this.editAccount = this.editAccount.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    deleteAccount(customerId){
        AccountService.deleteAccount(customerId).then( res => {
            this.setState({accounts: this.state.accounts.filter(account => account.customerId !== customerId)});
        });
   
    }
    
    editAccount(id){
        this.props.history.push(`/updateAccount/${id}`);
    }

    componentDidMount(){
        AccountService.getAllAccounts().then((res) => {
            this.setState({ accounts: res.data});
        });
    }

    addAccount(){
        this.props.history.push('/createAccount/_add');
    }
    viewAccount(id){
        this.props.history.push(`/view-account/${id}`);
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Accounts List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAccount}> Add Account</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Customer Id</th>
                                    <th> Name</th>
                                    <th> Account Number</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.accounts.map(
                                        account => 
                                        <tr key = {account.customerId}>
                                             <td> {account.customerId} </td>   
                                             <td> {account.name}</td>
                                             <td> {account.accountNumber}</td>
                                             <td>
                                                 <button onClick={ () => this.editAccount(account.customerId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAccount(account.customerId)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewAccount(account.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAccountComponent
