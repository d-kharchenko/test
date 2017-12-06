import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './login.css'
class LogIn extends Component {
    constructor(props){
        super(props);
        this.state= {
            login: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }
    onChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className="log-in-wrap">
                <form className="log-in-form px-4 py-3" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label
                            htmlFor="log-in-email"
                            className="form-label"
                        >
                            Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="log-in-email"
                            name="login"
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="log-in-password"
                            className="form-label"
                        >
                            Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="log-in-password"
                            name="password"
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Вхід</button>
                    <Link
                        to="/sign-in"
                        className="btn btn-primary"
                    >
                        Реєстрація</Link>
                </form>
            </div>
        )
    }
}

export default LogIn;
