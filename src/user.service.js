import { firestore } from "./firebase";
import { auth } from "./firebase";
import firebase from 'firebase/compat/app';

export const authUser = async(user) => {
     const { email, password } = user;

     try {
        return auth.signInWithEmailAndPassword(email, password)
     } catch (error) {
         return error
     }
}



export const signUpUser = async(user) => {
    const { email, password } = user;

    try {
       return auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
        return error
    }
}


export const authWitGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider
    return auth.signInWithPopup(provider)
}

export const createTodo = async(todo) => {
    console.log(todo)
    const { title, description, author } = todo
    try {
      const myTodo = await  firestore.collection('savanapoint-todo')
        .add({
            author,
            title,
            description
        })

        console.log(myTodo)
        
        return myTodo
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updateProfile = async(userInffo) => {
    const { firstName, lastName } = userInffo
    
    try {
        const displayName = `${firstName} ${lastName}`;
        return auth.onAuthStateChanged(user => {
            user.updateProfile({
                displayName
            })
        })
    } catch (error) {
        return error
    }
}


export const addUserOnFirestore = async(userDatas) => {
     try {
       return await firestore.collection('users').add(userDatas)
     } catch (error) {
        return error
     }
}