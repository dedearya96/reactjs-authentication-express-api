import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            setisLoading(true);
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setisLoading(false);
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Auth} className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    {isLoading ? <p className="has-text-centered">Loading</p> : <button className="button is-success is-fullwidth">Login</button>}

                                </div>
                                <Link to="/register" className="field mt-5">
                                    <button className="button is-primary is-fullwidth">Register</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
