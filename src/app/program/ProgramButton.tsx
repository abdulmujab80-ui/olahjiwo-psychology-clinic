"use client";


import { 
  ArrowRight 
} from "lucide-react";


import {
  useRouter
} from "next/navigation";


import {
  useAuth
} from "@/context/AuthContext";




export default function ProgramButton({

slug

}:{

slug:string

}){


const router = useRouter();


const {
user

}=useAuth();





function handleClick(){


if(!user){


router.push(
`/register?redirect=/program/${slug}`
);


return;


}




router.push(
`/program/${slug}/psikolog`
);



}





return (


<button

onClick={handleClick}

className="
mt-6
inline-flex
items-center
gap-3
bg-red-700
text-white
px-6
py-3
rounded-xl
font-bold
hover:bg-red-800
transition
"

>


Pilih Layanan


<ArrowRight size={18}/>


</button>


);


}