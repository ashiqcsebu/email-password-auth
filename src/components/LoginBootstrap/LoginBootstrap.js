import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';


const auth = getAuth(app)
const LoginBootstrap = () => {

    const [success, setSuccess] = useState(false);
const handleSubmit =(event)=>{
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email =form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth , email , password)
    .then( result => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
    })
    .catch( error =>{
        console.error('error' , error);
    })
}

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Log in</h1>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Email " required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="password" required />

                </div>

                <button className="btn btn-primary" type="submit">Button</button>
            </form>
            {success && <p>Successfully Log in to the account</p>}
            <p>New to this site? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default LoginBootstrap;