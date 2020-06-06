import React from 'react'
import myCSS from './Login.module.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className={myCSS.backdrop}>
            <div className={myCSS.login}>
                <h3 className='mt-3'>Sign In</h3>
                <form className='mt-3 ml-5 mr-5'>
                    <div className="form-group mb-2">
                        <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div className="form-group mb-2">
                        <input type='password' className='form-control' placeholder='Password' />
                    </div>
                    <div className="form-group form-inline justify-content-between">
                        <div className='form-check'>
                            <input type='checkbox' className='form-check-input' id='checkboxinput' />
                            <label className="form-check-label mr-5" htmlFor='checkboxinput'>Remember me</label>
                        </div>
                        <small><NavLink to='/forgot'>Forgot your password?</NavLink></small>
                    </div>
                    <button type='button' className='btn btn-dark w-75'>Sign in</button>
                    <hr />
                    <div className='mb-2'>
                        <p> Don't have an account? <NavLink to='/register'>Register now</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
// form-group form-check form-inline
export default Login