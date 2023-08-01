import { useState } from "react"
import { loginWithApi } from "./product.service";




export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handlerForm =async (e) => {
        e.preventDefault();
         console.log(email, password)
        if(!email || !password) {
           return console.log('Credentials not valid!')
        }

        
      try {
      const data = await loginWithApi(email, password)
      localStorage.setItem('access_token', data)
      console.log(data)

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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
