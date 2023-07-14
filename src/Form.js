import { useState } from "react"
import { authUser, authWitGoogle } from "./user.service";


export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handlerForm =async (e) => {
        e.preventDefault();
         console.log(email, password)
        if(!email || !password) {
           return console.log('Credentials not valid!')
        }

        const user = {email, password}
      try {
       const snapshot = await authUser(user)
       console.log(snapshot)

      } catch (error) {
        console.log(error)
      }
    }
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form >
                            <div className="form-group my-2">
                                <input type="email" name="email" onChange={(event) => {
                                    setEmail(event.target.value)
                                }} className="form-control" placeholder="Please, enter your email" />
                            </div>

                            <div className="form-group my-2">
                                <input name="password" onChange={(event) => {
                                    setPassword(event.target.value)
                                }} type="password" id="formControlDefault" className="form-control" placeholder="Password" />
                            </div>

                            <div className="text-center">
                                <button onClick={handlerForm} type="button" className="btn btn-primary">Login</button>
                            </div>


                            <div className="text-center">
                                <button onClick={authWitGoogle} type="button" className="btn btn-primary">Login With Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}