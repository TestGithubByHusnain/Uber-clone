import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail]=useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler=(e)=>{
e.preventDefault();
setUserData({
email:email,
password:password
})
setEmail('')
setPassword('')

  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
   <div>
       <img className="w-24 " src="https://sdmntprukwest.oaiusercontent.com/files/00000000-be80-6243-ba23-183d48f205af/raw?se=2025-09-24T21%3A04%3A32Z&sp=r&sv=2024-08-04&sr=b&scid=d03c73ea-7033-5d6d-b977-8d5d350aa87a&skoid=5939c452-ea83-4420-b5b4-21182254a5d3&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-24T17%3A19%3A16Z&ske=2025-09-25T17%3A19%3A16Z&sks=b&skv=2024-08-04&sig=7n09dkquHNWW2U3yPYNjyD03zyy/FCgjo1i5hJoYfgU%3D" alt="Nextridelogo" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input required
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className="bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
         type="email"
        placeholder="email@example.com" 
        />
        <h3 className="text-lg font-medium mb-2">
          Enter Password
        </h3>
        <input
         required
           value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
         className="bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
         type="password"
        placeholder="password" />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
          Login</button>
          <p className="text-center">
            New here? <Link to='/signup' className="text-blue-600">Create new Account</Link>

          </p>
        
      </form>
   </div>
   <div>
    <Link
    to='/captain-login'
    className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">
      Sign in as Captain</Link>
   </div>
    </div>
  );
};

export default UserLogin;
