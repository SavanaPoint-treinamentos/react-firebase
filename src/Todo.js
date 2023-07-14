import { useState, useEffect } from "react"
import { createTodo } from "./user.service";
import { auth } from "./firebase";



export const Todo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const [uid, setUid] = useState('')

    const getLoggedUser = async() => {
         auth.onAuthStateChanged((user) => {
            if(!user) {
                return false 
            }
            setUid(user.uid)
         })
    }

    useEffect(() => {
        getLoggedUser()
    }, [''])

    const handlerForm =async (e) => {
        e.preventDefault();

         console.log(title, description)
 
        if(!title || !description) {
           return console.log('invalid datas')
        }

        const todo = {author: uid, title, description}
      try {
       const snapshot = await createTodo(todo)
       

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
                                <input type="text"  onChange={(event) => {
                                    setTitle(event.target.value)
                                }} className="form-control" placeholder="Please, enter title" />
                            </div>

                            <div className="form-group my-2">
                                <input  onChange={(event) => {
                                    setDescription(event.target.value)
                                }} type="text" id="formControlDefault" className="form-control" placeholder="Description" />
                            </div>

                            <div className="text-center">
                                <button onClick={handlerForm} type="button" className="btn btn-primary">Save it</button>
                            </div>


                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}