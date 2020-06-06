import React from 'react'
import myCSS from './Login.module.css'

const Login = () => {
    return (
        <div className={myCSS.backdrop}>
            <div className={myCSS.login}>
                <h3 className='mt-3'>Login</h3>
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
                        <small><a href='/forgot'>Forgot your password?</a></small>
                    </div>
                    <button type='button' className='btn btn-dark w-75'>Login</button>
                    <hr />
                    <div className='mb-2'>
                        <small > Don't have an account? <a href='/register'>Register now</a>.</small>
                    </div>
                </form>
            </div>
        </div>
    )
}
// form-group form-check form-inline
export default Login