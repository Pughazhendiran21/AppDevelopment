import React from 'react'

    
    const Login = () => {

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
                <label htmlFor="username">Enter the UserName: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleOnChange} placeholder='Enter userName'/><br />
            <label htmlFor="password">Enter the password :</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleOnChange} placeholder='Enter the password'/>
            <br/>
            <button type='submit'>Login</button>
            </form>
        </div>
      )
    }
    
    export default Login