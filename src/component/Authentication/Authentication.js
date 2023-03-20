import React, { useContext, useRef, useState } from 'react'
import { useHistory, useNavigate } from 'react-router-dom';
import cartContext from '../conrext-store/contextAPI';
import './Authentication.css'

const Authentication = () => {

    const [isLogin, setIsLogin] = useState(true);
  const [sendingReq,setSendingReq]=useState(false);
  const ctx=useContext(cartContext);
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
//   const history=useHistory()
const history = useNavigate();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =(e)=>{
    e.preventDefault()
    setSendingReq(true);

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    let url;
    if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWBlfzADZbvqEDqq7SnQINQ80zhX_jxD8'
    }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWBlfzADZbvqEDqq7SnQINQ80zhX_jxD8';
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        setSendingReq(false);
        if(res.ok){
            let data=res.json();
            (data).then((resp)=>{
                ctx.login(resp.idToken);
                ctx.userEmailTrack(enteredEmail.replace(/[@.]/g,''));
                history('/store');
                // console.log(enteredEmail);
                console.log('EmailOfUser',ctx.emailOfUser);
            })
        }else{
            const data =res.json();
        data.then((data)=>{
            alert(data.error.message);
        })
        }
    })
  }


  return (
    <section className='auth'>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' required ref={emailInputRef} />
      </div>
      <div className='control'>
        <label htmlFor='password'>Your Password</label>
        <input type='password' id='password' required ref={passwordInputRef} />
      </div>
      <div className='actions'>
        {sendingReq && <p>Sending Request...</p>}
       {!sendingReq && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
        <button
          type='button'
          className='toggle'
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
  )
}

export default Authentication