"use client";


import Link from "next/link";


import {
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";


import {
  useState
} from "react";


import {
  useRouter
} from "next/navigation";


import {
  useAuth
} from "@/context/AuthContext";






export default function LoginPage(){



const router = useRouter();



const {
login,
loginWithGoogle
}
=
useAuth();






const [email,setEmail]
=
useState("");



const [password,setPassword]
=
useState("");



const [showPassword,setShowPassword]
=
useState(false);



const [error,setError]
=
useState("");



const [loading,setLoading]
=
useState(false);



const [googleLoading,setGoogleLoading]
=
useState(false);









async function handleLogin(
e:React.FormEvent
){


e.preventDefault();



setError("");

setLoading(true);



try{



await login(
email,
password
);



router.push("/member");



}

catch(err:any){



setError(
err.message || "Login gagal"
);



}

finally{


setLoading(false);


}



}









async function handleGoogleLogin(){


setError("");

setGoogleLoading(true);



try{



await loginWithGoogle();



}

catch(err:any){



setError(
err.message || "Login Google gagal"
);



setGoogleLoading(false);


}



}









return (



<main

className="
min-h-screen
bg-gray-50
flex
items-center
justify-center
px-5
py-10
"

>



<div

className="
w-full
max-w-md
bg-white
rounded-3xl
shadow-xl
border
border-gray-100
p-8
"

>



<div

className="
text-center
mb-10
"

>



<h1

className="
text-3xl
font-bold
text-gray-900
"

>

Masuk Akun

</h1>



<p

className="
mt-3
text-gray-600
"

>

Akses layanan konsultasi psikologi Anda

</p>



</div>









<form

onSubmit={handleLogin}

className="
space-y-6
"

>




<div>


<label

className="
block
text-sm
font-bold
mb-3
text-gray-900
"

>

Email

</label>



<input


required


type="email"


value={email}


onChange={(e)=>
setEmail(e.target.value)
}


placeholder="nama@email.com"


className="
w-full
h-16
rounded-xl
border
border-gray-300
px-5
text-gray-900
outline-none
focus:ring-4
focus:ring-red-100
"

/>


</div>









<div>


<label

className="
block
text-sm
font-bold
mb-3
text-gray-900
"

>

Password

</label>




<div className="relative">


<input


required


type={
showPassword
?
"text"
:
"password"
}



value={password}



onChange={(e)=>
setPassword(e.target.value)
}



placeholder="Masukkan password"



className="
w-full
h-16
rounded-xl
border
border-gray-300
px-5
pr-14
text-gray-900
outline-none
focus:ring-4
focus:ring-red-100
"

/>



<button

type="button"

onClick={()=>
setShowPassword(!showPassword)
}

className="
absolute
right-5
top-1/2
-translate-y-1/2
text-gray-400
"

>


{
showPassword

?

<EyeOff size={22}/>

:

<Eye size={22}/>

}



</button>



</div>



</div>









{
error &&

<p

className="
text-red-700
text-sm
"

>

{error}

</p>

}








<button


disabled={loading}


type="submit"


className="
w-full
h-14
bg-red-700
hover:bg-red-800
disabled:bg-gray-400
text-white
rounded-xl
font-bold
flex
items-center
justify-center
gap-2
"

>



{
loading

?

"Memproses..."

:

"Masuk"

}



<ArrowRight size={18}/>



</button>







</form>









<div

className="
flex
items-center
gap-4
my-7
"

>



<div className="flex-1 border-t"/>


<span className="text-gray-400 text-sm">

atau

</span>


<div className="flex-1 border-t"/>



</div>









<button


type="button"


disabled={googleLoading}


onClick={handleGoogleLogin}



className="
w-full
h-14
border
border-gray-300
rounded-xl
font-semibold
text-gray-800
flex
items-center
justify-center
gap-3
hover:bg-gray-50
disabled:bg-gray-100
"

>


<img

src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"

className="w-5 h-5"

alt="Google"

/>



{
googleLoading

?

"Menghubungkan Google..."

:

"Masuk dengan Google"

}



</button>









<p

className="
text-center
mt-8
text-gray-600
"

>


Belum punya akun?


<Link

href="/register"

className="
ml-1
font-bold
text-red-700
"

>

Daftar Sekarang

</Link>



</p>






</div>




</main>



);


}