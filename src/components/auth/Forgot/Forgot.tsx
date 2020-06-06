import React from 'react'
import myCSS from './Forgot.module.css'
import { NavLink } from 'react-router-dom'

const Forgot = () => {
    return (
        <div className={myCSS.backdrop}>
            <div className={myCSS.forgot}>
                <h3 className='mt-3'>Password reset</h3>
                <form className='mt-3 ml-5 mr-5'>
                    <p className="text-left mb-1">
                        Enter your email to reset password
                    </p>
                    <div className="form-group mb-4">
                        <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <button type='button' className='btn btn-dark w-75'>Reset password</button>
                    <hr />
                    <div className='mb-2'>
                        <p> Back to <NavLink to='/login'>Sign in</NavLink></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
// form-group form-check form-inline
export default Forgot