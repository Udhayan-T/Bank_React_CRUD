import React, { Component } from 'react'
import AccountService from '../services/AccountService';

class UpdateAccountComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            customerId: '',
            name: '',
            accountNumber: ''
        }
        this.changeCustomerIdHandler = this.changeCustomerIdHandler.bind(this);
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeAccountNumberHandler = this.changeAccountNumberHandler.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
    }

    componentDidMount(){
        AccountService.getAccountById(this.state.id).then( (res) =>{
            let Account = res.data;
            this.setState({customerId: Account.customerId,
                name: Account.name,
                accountNumber : Account.accountNumber
            });
        });
    }

    updateAccount = (e) => {
        e.preventDefault();
        let Account = {customerId: this.state.customerId, name: this.state.name, accountNumber: this.state.accountNumber};
        console.log('Account => ' + JSON.stringify(Account));
        console.log('id => ' + JSON.stringify(this.state.id));
        AccountService.updateAccount(this.state.id, Account).then( res => {
            this.props.history.push('/Accounts');
        });
    }
    
    changeCustomerIdHandler= (event) => {
        this.setState({customerId: event.target.value});
    }

    changeCustomerNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAccountNumberHandler= (event) => {
        this.setState({accountNumber: event.target.value});
    }

    cancel(){
        this.props.history.push('/Accounts');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Account</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Id: </label>
                                            <input placeholder="Customer Id" name="customerId" className="form-control" 
                                                value={this.state.customerId} onChange={this.changeCustomerIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Account Number: </label>
                                            <input placeholder="Customer Account" name="accountNumber" className="form-control" 
                                                value={this.state.accountNumber} onChange={this.changeAccountNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateAccount}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateAccountComponent
