import React from 'react'
import myCSS from './Register.module.css'
import { NavLink } from 'react-router-dom'

const Register = () => {
    return (
        <div className={myCSS.backdrop}>
            <div className={myCSS.register}>
                <h3 className='mt-3'>Create an account</h3>
                <form className='mt-3 ml-5 mr-5'>
                    <div className="form-group mb-2">
                        <input type='text' className='form-control' placeholder='Display name' />
                    </div>
                    <div className="form-group mb-2">
                        <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div className="form-group mb-2">
                        <input type='password' className='form-control' placeholder='Password' />
                    </div>
                    <button type='button' className='btn btn-dark w-75 mt-2'>Register</button>
                    <hr />
                    <div className='mb-2'>
                        <p> Already have an account? <NavLink to='/login'>Sign in </NavLink></p>
                    </div>
                </form>
            </div>
        </div> 
    )
}

export default Register