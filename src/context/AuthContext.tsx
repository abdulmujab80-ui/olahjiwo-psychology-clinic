"use client";


import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


import {
  User,
  Session
} from "@supabase/supabase-js";


import { supabase } from "@/lib/supabase";





interface Profile {


  id:string;


  nama_lengkap:string | null;


  email:string | null;


  nomor_whatsapp:string | null;


  tanggal_lahir:string | null;


  jenis_kelamin:string | null;


  alamat:string | null;


  avatar:string | null;


}







interface AuthContextType {


  user:User | null;


  profile:Profile | null;


  session:Session | null;


  loading:boolean;



  login:

  (

    email:string,

    password:string

  )=>Promise<any>;




  loginWithGoogle:

  ()=>Promise<any>;




  register:

  (

    email:string,

    password:string,

    nama:string

  )=>Promise<any>;




  logout:

  ()=>Promise<void>;



}









const AuthContext =

createContext<AuthContextType | undefined>(

undefined

);









export function AuthProvider({

children

}:{

children:React.ReactNode

}){





const [user,setUser] =

useState<User|null>(null);



const [profile,setProfile] =

useState<Profile|null>(null);



const [session,setSession] =

useState<Session|null>(null);



const [loading,setLoading] =

useState(true);









async function loadProfile(

userId:string

){



const {

data,

error

}

=

await supabase

.from("profiles")

.select("*")

.eq(

"id",

userId

)

.maybeSingle();





if(error){


console.log(

"profile load error:",

error.message

);


return null;


}





setProfile(data);



return data;



}









useEffect(()=>{


let mounted = true;





async function initialize(){



const {

data

}

=

await supabase.auth.getSession();





if(!mounted)

return;





const currentSession =

data.session;





setSession(

currentSession

);





const currentUser =

currentSession?.user ?? null;





setUser(

currentUser

);





if(currentUser){


await loadProfile(

currentUser.id

);


}





setLoading(false);



}





initialize();







const {

data:

{

subscription

}

}

=

supabase.auth.onAuthStateChange(



async(

_event,

currentSession

)=>{





if(!mounted)

return;





setSession(

currentSession

);





const currentUser =

currentSession?.user ?? null;





setUser(

currentUser

);





if(currentUser){



await loadProfile(

currentUser.id

);



}

else{



setProfile(null);



}



}

);







return ()=>{


mounted=false;


subscription.unsubscribe();


};



},[]);













const login = async(

email:string,

password:string

)=>{



const {

data,

error

}

=

await supabase.auth.signInWithPassword({


email,


password


});





if(error)

throw error;





setSession(

data.session

);





setUser(

data.user

);





if(data.user){



await loadProfile(

data.user.id

);



}





return data;



};













const loginWithGoogle = async()=>{





if(

typeof window === "undefined"

)

return;





const {

data,

error

}

=

await supabase.auth.signInWithOAuth({



provider:"google",





options:{



redirectTo:

`${window.location.origin}/auth/callback`



}



});







if(error){



console.error(

"Google login error:",

error.message

);



throw error;



}







return data;



};















const register = async(

email:string,

password:string,

nama:string

)=>{





const {

data,

error

}

=

await supabase.auth.signUp({





email,



password,





options:{



data:{



nama_lengkap:nama



}



}



});







if(error)

throw error;







return data;



};













const logout = async()=>{





await supabase.auth.signOut();





setSession(null);


setUser(null);


setProfile(null);



};













return (



<AuthContext.Provider


value={{



user,


profile,


session,


loading,


login,


loginWithGoogle,


register,


logout



}}



>



{children}



</AuthContext.Provider>



);



}









export function useAuth(){





const context =

useContext(AuthContext);





if(!context){



throw new Error(

"useAuth harus digunakan di dalam AuthProvider"

);



}





return context;



}