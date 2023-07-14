import { useState } from "react"
import { signUpUser, updateProfile, addUserOnFirestore } from "./user.service";


export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handlerForm = async (e) => {
        e.preventDefault();
        console.log(email, password)
        if (!email || !password) {
            return console.log('Credentials not valid!')
        }

        const user = { email, password }
        const userInffo = { firstName, lastName}

     
        try {
             const newUser = await signUpUser(user)
             const snapshot = await updateProfile(userInffo)

             const userDatas = {
                uid: newUser.user.uid,
                displayName: {
                    firstName,
                    lastName
                },

                email
             }
             await addUserOnFirestore(userDatas)
            

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
                            <div className="row justfiy-content-center">
                                <div className="col-md-6">
                                    <div className="form-group my-2">
                                        <input type="text" onChange={(event) => {
                                            setFirstName(event.target.value)
                                        }} className="form-control" placeholder="First name" />
                                        {firstName}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group my-2">
                                        <input type="text" onChange={(event) => {
                                            setLastName(event.target.value)
                                        }} className="form-control" placeholder="Last name" />

                                        {lastName}
                                    </div>
                                </div>
                            </div>
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
                                <button onClick={handlerForm} type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}