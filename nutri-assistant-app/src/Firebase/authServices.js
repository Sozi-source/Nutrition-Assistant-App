
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


// Sign Up Users
export const signUpUser = async(email, password, firtname, lastname)=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user;
        await updateProfile(user, {
            displayName: `${firtname} ${lastname}`
        });

        return user;
      } catch (error){
        console.error("Sign-up error:", error.message);
        throw error;
    }
    
}

//   SignIn Users

export const signInUser = async(email, password)=>{
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user;
    } catch (error){
        console.error("Sign-in error:", error.message);
        throw error;
    }
}

export const signOutUser = async()=>{
    try{
        await signOut(auth);
        console.log("User Signed Out");
    } catch(error){
        console.error("Sign-out error:", error.message)
    }
}
 