import { useState, useContext } from 'react';
import AuthService from '../services/AuthService';
import Message from './Message';
import { AuthContext } from '../context/AuthContext';

const Login = (props) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onSubmit = e => {
        e.preventDefault();
        console.log("form submitted...");
        AuthService.login(user).then(data => {
            console.log("Data from Login.js: ", data);
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/todos');
            } else {
                setMessage(message);
            }
        });

    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("from onChange: ", user);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h3>Please Log In</h3>
                <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text"
                    name="username"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Username" />
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password"
                    name="password"
                    onChange={onChange}
                    className="form-control"
                    placeholder="Enter Password" />
                <button className="btn btn-lg btn-primary btn-block"
                    type="submit">Log In</button>
            </form>

            {message ? <Message message={message} /> : null}
        </div>
    );
}

export default Login;