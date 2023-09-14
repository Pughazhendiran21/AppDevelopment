import React from 'react'

    
    const Signup = () => {

        const [formData,setformData]=React.useState({
            username:"",
            password:""
        })
        const handleOnChange=(e)=>{
            const [name,value]=[e.target.name,e.target.value];
            // console.log(e.target.value);
            setformData({
                ...formData,
                [name]:value
            })
        }
        const submitForm =(e)=>{
            e.preventDefalult();
            console.log(formData)
        }
      return (
        <div className='pugal'>
            <form action="" onSubmit={submitForm}>
              <label For="username">SIGNUP </label>
               <br />
                <label For="username">Enter the First Name: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} placeholder='Enter the First Name'/><br />
            <label For="password">Enter the Last Name :</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} placeholder='Enter the Last Name
            '/><br />
            <label For="username">Enter the Email: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} placeholder='Enter the Email'/><br />
            <label For="username">Enter Your Password: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} placeholder='Password'/><br />
            <label For="username"> </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} placeholder='Re-Enter the Password'/><br />
            <button type='submit'>SIGNUP</button>
            </form>
        </div>
      )
    }
    
    export default Signup;