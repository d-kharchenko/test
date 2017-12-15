import React from 'react';
import './callback.css';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {callbackForm} from '../../actions/actionCallback'


class CallBackForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            subject: '',
            text: '',
            errors: '',
            done: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onSubmit(event) {
        event.preventDefault();

        let errors = {};
        if (this.state.username === '') errors.username = "Введіть ім'я";
        if (this.state.email === '') errors.email = "Введіть email";
        if (this.state.text === '') errors.text = "Введіть повідомлення";
        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if(isValid){
            const {username, email, text, subject} = this.state;
            this.props.callbackForm({username, email, subject, text }).then(
                () => {this.setState({done: true})},
                (err) => err.response.json().then(({errors}) => this.setState({errors}))
            )
        }

    }
    onChange(event) {
        if(!!this.state.errors[event.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[event.target.name];
            this.setState({
                [event.target.name]: event.target.value,
                errors
            });
        }else {
            this.setState({[event.target.name]: event.target.value})
        }
    }

    render() {
        const title = (
            <div className="contacts-form contacts-form--finish">
                <h4 className="contacts-form__title-finish">Дякуємо. Чекайте на відповідь.</h4>
            </div>
        );
        const form =(
            <form onSubmit={this.onSubmit} className="contacts-form">
                <h2 className="contacts-form__title">Зворотній зв'язок</h2>
                <div className={classnames('contacts-form__name', {errors: !!this.state.errors.username})}>
                    <label className="contacts-form__label">Ваше ім'я</label>
                    <input
                        value={this.state.username}
                        onChange={this.onChange}
                        type="text"
                        name="username"
                        placeholder={this.state.errors.username}
                    />
                </div>
                <div className={classnames('contacts-form__mail', {errors: !!this.state.errors.username})}>
                    <label className="contacts-form__label">E-mail</label>
                    <input
                        value={this.state.email}
                        onChange={this.onChange}
                        type="email"
                        name="email"
                        placeholder={this.state.errors.email}
                    />
                </div>
                <div className="contacts-form__subject">
                    <label className="contacts-form__label">Тема</label>
                    <input
                        value={this.state.subject}
                        onChange={this.onChange}
                        type="text"
                        name="subject"
                    />
                </div>
                <div className={classnames('contacts-form__text', {errors: !!this.state.errors.username})}>
                    <label className="contacts-form__label">Ваше повідомлення</label>
                    <textarea
                        value={this.state.text}
                        onChange={this.onChange}
                        name="text"
                        rows="5"
                        placeholder={this.state.errors.text}
                    />
                </div>
                <div>
                    <button className="contacts-form__submit">Надіслати</button>
                </div>
            </form>
        );
        return (
            <div className="contacts-form-wrap">
                { this.state.done ? title : form }
            </div>

        )
    }
};
export default connect(null, {callbackForm})(CallBackForm);