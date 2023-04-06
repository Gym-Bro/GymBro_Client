'use client'
import React from "react";
import { signIn, signOut } from "../firebase/auth/signIn";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    

    const handleForm = async (event:Event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);
        console.log(email, password)

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)        
    }

    
    return (
    <div >
        <div >
            <h1>Sign up</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
                </label>
                <button type="submit">Sign up</button>
                <button onClick={signOut}>cerrar secion</button>
            </form>
        </div>
    </div>);
}

export default Page;