import React, {Component} from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userfirstname: '',
            email: '',
            password: '',
            confirmpassword: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form className="px-4 py-3" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name-user">Ім'я</label>
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="username"
                            className="form-control"
                            id="name-user"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="first-name-user">Прізвище</label>
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="userfirstname"
                            className="form-control"
                            id="first-name-user"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={this.onChange}
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            onChange={this.onChange}
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Підтвердіть пароль</label>
                        <input
                            onChange={this.onChange}
                            type="password"
                            name="confirmpassword"
                            className="form-control"
                            id="confirm-password"
                        />
                    </div>
                    <button className="btn btn-primary">Зареєструватись</button>
                </form>
            </div>

        )
    }
}
export default SignIn;
