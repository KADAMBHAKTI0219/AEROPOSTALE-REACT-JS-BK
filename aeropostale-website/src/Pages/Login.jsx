import React, { useState } from 'react'
import { auth, provider } from '../Services/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { BiLogOut } from 'react-icons/bi'
import { RiLoginCircleFill } from 'react-icons/ri'
import { IoCreate } from 'react-icons/io5'


const Login = () => {

  const [formToggle,setFormToggle] = useState(true)
  const FormDataObj = {
    firstName:'',
    lastName:'',
    phone:'',
    selectMonth:'',
    selectDay:'',
    email:'',
    password:'',
  }
  const [FormData,setFormData] = useState(FormDataObj)
  const {firstName,lastName,phone,selectMonth,selectDay,email,password}=FormData

  const getFormDataEachValue = (e)=>(
    setFormData({...FormData,[e.target.name]:e.target.value})
  )


  // SignUp or Create Account Page
  const signUpformSubmit=(e)=>{
    e.preventDefault()
    console.log(FormData)
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
      alert("Your Account Is Created SuccessFully")
      setFormData(FormDataObj)
      
    }).catch((err)=>(console.log(err)))
      
  }


    // SignIn or LogIn
    const signInFormSubmit=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password).then(res=>alert('Login Successfully'),
    setFormData(FormDataObj)).catch(err=>console.log(err))
    }


    // SignIn With Google

    const signInWithGoogleBtn=async ()=>{
     return await signInWithPopup(auth,provider).then((res)=>console.log(res)).catch(err=>console.log(err))}

    //  SignOut Func

    const Signoutfunc= async  ()=>{
      return  await signOut(auth).then((res)=>alert("LogOut")).catch(err=>console.log(err))
    }

  return (
    <div >
      <div className='toggleBtnDiv'>{<button onClick={()=>setFormToggle(!formToggle)} className='toggleBtn'>{formToggle ? <h4> <IoCreate />SignUp</h4> : <h4><RiLoginCircleFill/>SignIn</h4> }</button> } </div>
      {
        formToggle ?
        (
          <div className='FormsLoginBtn'> <form action="" className='LoginForm'>
          <input type="text" placeholder='First Name' name='firstName' value={firstName} onChange={(e)=>getFormDataEachValue(e)}/>
          <input type="text" placeholder='Last Name' name='lastName' value={lastName} onChange={(e)=>getFormDataEachValue(e)}/>
          <input type="text" placeholder='Phone' name='phone' value={phone} onChange={(e)=>getFormDataEachValue(e)}/>
          <div className='SelectOption'>
            <select name="selectMonth" id="month" value={selectMonth} onChange={(e)=>getFormDataEachValue(e)}>
            <option value="Month">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <select name="selectDay" id="day" value={selectDay} onChange={(e)=>getFormDataEachValue(e)}>
            <option value="Year">Day</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select></div>
          <input type="email"  placeholder='Email Address' name='email' value={email} onChange={(e)=>getFormDataEachValue(e)}/> 
          <input type="password"  placeholder='Password' name='password' value={password} onChange={(e)=>getFormDataEachValue(e)}/> 
          <p><input type="checkbox" className='checkBox'/>Sign Up for Emails By signing up, you agree to receive emails from Aeropostale about sales, promotions, events, new arrivals, and more. View Terms and Privacy.</p>
       <button onClick={(e)=>signUpformSubmit(e)} className='SubmitBtn'>Apply</button>
      
        </form></div>
         )
  :
        ( <div className='FormsLoginBtn'> <form action="" className='LoginForm'>
          <h2>Sign In</h2>
          <input type="email" placeholder='Enter Your Email' name='email' value={email}  onChange={(e)=>getFormDataEachValue(e)}/>
          <input type="password" placeholder='Enter Your Password'  name='password' value={password}  onChange={(e)=>getFormDataEachValue(e)}/>
          <div className='btnSignUp'>  <button onClick={(e)=>signInFormSubmit(e)} className='SubmitBtn'>Sign In </button>
          <button onClick={Signoutfunc} className='btnLogout'><BiLogOut/>Logout</button> </div>
          <h4>Or</h4>
          <GoogleButton onClick={signInWithGoogleBtn} style={{display:"block",margin:"auto",borderRadius:"5px"}}/>
        </form> </div>)
      }
      
    </div>
  )
}

export default Login
