"use client";

import { supabase } from "@/lib/supabase";

import Link from "next/link";

import {
  useState
} from "react";


import {
  useRouter
} from "next/navigation";


import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
} from "lucide-react";


import {
  useAuth
} from "@/context/AuthContext";




const handleGoogleRegister = async () => {

  const { error } = await supabase.auth.signInWithOAuth({

    provider: "google",

    options: {

      redirectTo:
      `${window.location.origin}/auth/callback`

    }

  });


  if(error){

    console.log(error.message);

  }

};

<button

type="button"

onClick={handleGoogleRegister}

className="
w-full
h-14
border
rounded-xl
flex
justify-center
items-center
gap-3
font-bold
"

>

<GoogleIcon/>

Daftar dengan Google


</button>


function GoogleIcon(){

return (

<svg
width="22"
height="22"
viewBox="0 0 24 24"
>

<path
fill="#4285F4"
d="M21.35 12.23c0-.7-.06-1.37-.18-2H12v3.79h5.23a4.47 4.47 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.92-4.18 2.92-7.17z"
/>

<path
fill="#34A853"
d="M12 21.5c2.63 0 4.83-.87 6.43-2.35l-3.14-2.44c-.87.58-1.98.92-3.29.92-2.53 0-4.67-1.7-5.43-3.98H3.32v2.51A9.72 9.72 0 0 0 12 21.5z"
/>

<path
fill="#FBBC05"
d="M6.57 13.65A5.83 5.83 0 0 1 6.27 12c0-.57.1-1.12.3-1.65V7.84H3.32A9.49 9.49 0 0 0 2.3 12c0 1.53.37 2.98 1.02 4.16l3.25-2.51z"
/>

<path
fill="#EA4335"
d="M12 6.37c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.82 3.42 14.63 2.5 12 2.5a9.72 9.72 0 0 0-8.68 5.34l3.25 2.51C7.33 8.07 9.47 6.37 12 6.37z"
/>

</svg>

)

}









export default function RegisterPage(){



const router =
useRouter();



const {
register,
loginWithGoogle
}
=
useAuth();




const [
nama,
setNama
]
=
useState("");



const [
email,
setEmail
]
=
useState("");



const [
password,
setPassword
]
=
useState("");



const [
confirmPassword,
setConfirmPassword
]
=
useState("");



const [
showPassword,
setShowPassword
]
=
useState(false);



const [
showConfirmPassword,
setShowConfirmPassword
]
=
useState(false);



const [
loading,
setLoading
]
=
useState(false);



const [
errorMessage,
setErrorMessage
]
=
useState("");








async function handleRegister(
e:React.FormEvent
){


e.preventDefault();


setErrorMessage("");



if(password !== confirmPassword){


setErrorMessage(
"Password dan konfirmasi password tidak sama."
);


return;


}




if(password.length < 6){


setErrorMessage(
"Password minimal 6 karakter."
);


return;


}





try{


setLoading(true);



const result =
await register(
email,
password,
nama
);




if(result.user){


router.push("/member");


router.refresh();


}



}
catch(error:any){


setErrorMessage(
error.message ||
"Gagal membuat akun."
);


}
finally{


setLoading(false);


}



}








async function handleGoogleRegister(){


try{


await loginWithGoogle();


}
catch(error:any){


setErrorMessage(
error.message ||
"Gagal login dengan Google."
);


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
md:p-10
"

>

        <div className="text-center mb-10">


          <h1

            className="
            text-3xl
            font-bold
            text-gray-900
            "

          >

            Buat Akun

          </h1>



          <p

            className="
            mt-3
            text-gray-600
            "

          >

            Daftar untuk menggunakan layanan konsultasi psikologi

          </p>


        </div>







        {
          errorMessage && (

            <div

              className="
              mb-5
              rounded-xl
              bg-red-50
              border
              border-red-200
              text-red-700
              text-sm
              p-4
              "

            >

              {errorMessage}

            </div>

          )
        }







        <form

          onSubmit={handleRegister}

          className="
          space-y-5
          "

        >







          {/* NAMA */}

          <div>


            <label

              className="
              block
              text-sm
              font-bold
              text-gray-900
              mb-3
              "

            >

              Nama Lengkap

            </label>



            <div className="relative">


              <User

                size={22}

                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "

              />



              <input

                type="text"

                value={nama}

                onChange={(e)=>
                  setNama(e.target.value)
                }

                required

                placeholder="Nama lengkap"

                className="
                w-full
                h-16
                rounded-xl
                border
                border-gray-300
                pl-14
                text-gray-900
                placeholder:text-gray-400
                outline-none
                focus:border-red-700
                focus:ring-4
                focus:ring-red-100
                "

              />


            </div>


          </div>










          {/* EMAIL */}


          <div>


            <label

              className="
              block
              text-sm
              font-bold
              text-gray-900
              mb-3
              "

            >

              Email

            </label>




            <div className="relative">


              <Mail

                size={22}

                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "

              />



              <input

                type="email"

                value={email}

                onChange={(e)=>
                  setEmail(e.target.value)
                }

                required

                placeholder="nama@email.com"


                className="
                w-full
                h-16
                rounded-xl
                border
                border-gray-300
                pl-14
                text-gray-900
                placeholder:text-gray-400
                outline-none
                focus:border-red-700
                focus:ring-4
                focus:ring-red-100
                "

              />



            </div>


          </div>












          {/* PASSWORD */}


          <div>


            <label

              className="
              block
              text-sm
              font-bold
              text-gray-900
              mb-3
              "

            >

              Password

            </label>




            <div className="relative">


              <Lock

                size={22}

                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "

              />



              <input


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


                required


                placeholder="Buat password"


                className="
                w-full
                h-16
                rounded-xl
                border
                border-gray-300
                pl-14
                pr-14
                text-gray-900
                placeholder:text-gray-400
                outline-none
                focus:border-red-700
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













          {/* CONFIRM PASSWORD */}


          <div>


            <label

              className="
              block
              text-sm
              font-bold
              text-gray-900
              mb-3
              "

            >

              Konfirmasi Password

            </label>




            <div className="relative">


              <Lock

                size={22}

                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
                "

              />



              <input


                type={
                  showConfirmPassword
                  ?
                  "text"
                  :
                  "password"
                }



                value={confirmPassword}



                onChange={(e)=>
                  setConfirmPassword(e.target.value)
                }



                required



                placeholder="Ulangi password"



                className="
                w-full
                h-16
                rounded-xl
                border
                border-gray-300
                pl-14
                pr-14
                text-gray-900
                placeholder:text-gray-400
                outline-none
                focus:border-red-700
                focus:ring-4
                focus:ring-red-100
                "


              />





              <button

                type="button"

                onClick={()=>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
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
                  showConfirmPassword
                  ?
                  <EyeOff size={22}/>
                  :
                  <Eye size={22}/>
                }


              </button>



            </div>


          </div>









          <button

            type="submit"

            disabled={loading}


            className="
            w-full
            h-14
            mt-3
            bg-red-700
            hover:bg-red-800
            disabled:bg-red-300
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
              "Membuat akun..."
              :
              <>
                Daftar Akun
                <ArrowRight size={18}/>
              </>
            }


          </button>




        </form>












        <div

          className="
          flex
          items-center
          gap-4
          my-8
          "

        >


          <div
            className="
            flex-1
            h-px
            bg-gray-200
            "
          />


          <span
            className="
            text-gray-400
            "
          >

            atau

          </span>


          <div
            className="
            flex-1
            h-px
            bg-gray-200
            "
          />


        </div>












        {/* GOOGLE REGISTER */}


        <button


          type="button"


          onClick={handleGoogleRegister}



          className="
          w-full
          h-14
          border
          border-gray-300
          rounded-xl
          flex
          items-center
          justify-center
          gap-3
          font-bold
          text-gray-800
          hover:bg-gray-50
          "

        >


          <GoogleIcon/>


          Daftar dengan Google



        </button>












        <p

          className="
          text-center
          mt-8
          text-gray-600
          "

        >



          Sudah punya akun?


          <Link

            href="/login"

            className="
            ml-1
            text-red-700
            font-bold
            hover:underline
            "

          >

            Masuk Sekarang


          </Link>



        </p>





      </div>



    </main>


  );


}