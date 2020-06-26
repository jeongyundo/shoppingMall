import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import "../../style/sign.css"
export const SignIn = () => {
    return (
        <div className="login__box">
            <h1>LOG IN</h1>
            <div className="textbox">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Email" name=""></input>
            </div>
            <div className="textbox">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" name=""></input>
            </div>
            
            <input className="btn" type="button" name="" value="Sign In"></input>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
