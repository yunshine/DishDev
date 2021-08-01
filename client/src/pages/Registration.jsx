import { Component, useState, useRef, useEffect } from 'react';
import AuthService from '../services/AuthService';
import Message from './Message';
import { withStyles } from '@material-ui/styles';
import registrationStyles from '../styles/RegistrationStyles.css';


const Registration = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        };
    }, []);

    const resetForm = () => {
        console.log("resetForm function called...");
        setUser({ username: "", pasword: "" });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("form submitted...");
        AuthService.register(user).then(data => {
            console.log("Data from Register.js: ", data);
            const { message } = data;
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    // props.history.push('/login');
                    console.log("line 32 of Registration.jsx")
                }, 2000);
            }
        });
    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("from onChange: ", user);
    }

    return (
        <div className='container registrationForm'>
            <form onSubmit={onSubmit}>
                <h1>Please Register</h1>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text"
                    name="username"
                    value={user.username}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username" />
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Register</button>
            </form>

            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default withStyles(registrationStyles)(Registration);
