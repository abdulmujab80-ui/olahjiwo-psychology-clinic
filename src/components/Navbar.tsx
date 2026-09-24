"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  ChevronDown,
  User,
  LogOut,
  Menu,
  X,
  ClipboardList,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";



export default function Navbar() {


  const [open, setOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);


  const {
    user,
    logout
  } = useAuth();



  const nama =
    user?.user_metadata?.nama_lengkap
    ||
    user?.email?.split("@")[0]
    ||
    "User";



  function closeMobile(){

    setOpen(false);

  }





  return (


<nav className="bg-white border-b">


<div
className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
"
>



{/* LOGO */}

<Link
href="/"
className="
flex
items-center
gap-3
"
>

<Image
src="/images/kamdes.png"
alt="OlahJiwo"
width={55}
height={55}
className="object-contain"
/>


<div className="hidden sm:block">

<h1
className="
text-lg
font-bold
text-gray-900
"
>
OlahJiwo
</h1>


<p
className="
text-xs
tracking-widest
text-gray-500
"
>
PSYCHOLOGY CENTER
</p>


</div>


</Link>






{/* DESKTOP MENU */}

<div
className="
hidden
md:flex
items-center
gap-10
text-gray-700
font-medium
"
>


<Link
href="/"
className="hover:text-red-700"
>
Beranda
</Link>


<Link
href="/program"
className="hover:text-red-700"
>
Program
</Link>


<Link
href="/tim"
className="hover:text-red-700"
>
Tim
</Link>


<Link
href="/sponsor"
className="hover:text-red-700"
>
Sponsor
</Link>


</div>








{/* DESKTOP AUTH */}

<div
className="
hidden
md:flex
relative
items-center
"
>


{
user ? (


<>


<button

onClick={()=>setProfileOpen(!profileOpen)}

className="
flex
items-center
gap-3
"

>


<div
className="
w-12
h-12
rounded-full
bg-red-700
text-white
flex
items-center
justify-center
font-bold
"
>

{nama.charAt(0).toUpperCase()}

</div>


<span
className="
font-semibold
text-gray-900
"
>

{nama}

</span>


<ChevronDown size={18}/>


</button>




{
profileOpen &&

<div
className="
absolute
right-0
top-16
w-72
bg-white
rounded-2xl
shadow-xl
border
p-3
z-50
"
>


<Link
href="/member/profil"
className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
hover:bg-gray-100
"
>

<User size={20}/>

Profil Saya

</Link>



<Link
href="/member/riwayat"
className="
flex
items-center
gap-3
px-4
py-3
rounded-xl
hover:bg-gray-100
"
>

<ClipboardList size={20}/>

Riwayat Konsultasi

</Link>



<div className="border-t my-2"/>


<button
onClick={logout}
className="
w-full
flex
items-center
gap-3
px-4
py-3
rounded-xl
text-red-700
hover:bg-red-50
font-semibold
"
>

<LogOut size={20}/>

Keluar

</button>


</div>

}


</>


)

:

(

<Link
href="/login"
className="
bg-red-700
text-white
px-7
py-3
rounded-full
font-semibold
"
>

Masuk / Daftar

</Link>

)

}


</div>







{/* MOBILE BUTTON */}

<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-gray-900
"

>

{

open ?

<X size={30}/>

:

<Menu size={30}/>

}


</button>



</div>










{/* MOBILE MENU */}

{

open &&


<div
className="
md:hidden
border-t
bg-white
"
>


<div
className="
px-6
py-6
space-y-5
"
>



<Link
href="/"
onClick={closeMobile}
className="
block
font-medium
text-gray-900
"
>

Beranda

</Link>



<Link
href="/program"
onClick={closeMobile}
className="
block
font-medium
text-gray-900
"
>

Program

</Link>



<Link
href="/tim"
onClick={closeMobile}
className="
block
font-medium
text-gray-900
"
>

Tim

</Link>



<Link
href="/sponsor"
onClick={closeMobile}
className="
block
font-medium
text-gray-900
"
>

Sponsor

</Link>







{

user ? (


<>


<Link
href="/member/profil"
onClick={closeMobile}
className="
block
bg-gray-100
text-center
py-3
rounded-xl
font-medium
"
>

Profil Saya

</Link>



<Link
href="/member/riwayat"
onClick={closeMobile}
className="
block
bg-gray-100
text-center
py-3
rounded-xl
font-medium
"
>

Riwayat Konsultasi

</Link>




<button

onClick={()=>{

logout();

closeMobile();

}}

className="
w-full
bg-red-700
text-white
py-3
rounded-xl
font-semibold
"

>

Keluar

</button>


</>


)

:

(


<Link

href="/login"

onClick={closeMobile}

className="
block
bg-red-700
text-white
text-center
py-3
rounded-xl
font-semibold
"

>

Masuk / Daftar

</Link>


)

}



</div>


</div>


}



</nav>


  );

}