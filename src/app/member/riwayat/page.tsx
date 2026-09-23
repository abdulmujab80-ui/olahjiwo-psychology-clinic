"use client";


import {
  CalendarDays,
  Clock,
  UserRound,
  Video,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";





const consultations = [

  {
    id: 1,

    psychologist:
      "Dr. Nama Psikolog, M.Psi., Psikolog",

    service:
      "Konseling Individu",

    date:
      "12 Januari 2026",

    time:
      "19.00 WIB",

    platform:
      "Zoom",

    status:
      "Selesai",

  },


  {
    id: 2,

    psychologist:
      "Nama Psikolog, M.Psi., Psikolog",

    service:
      "Konseling Keluarga",

    date:
      "20 Januari 2026",

    time:
      "15.00 WIB",

    platform:
      "Zoom",

    status:
      "Terjadwal",

  },


];






export default function RiwayatPage(){


return (

<main className="min-h-screen bg-gray-50">





{/* HEADER */}

<section className="bg-white border-b">


<div className="
max-w-6xl
mx-auto
px-6
py-10
">


<p className="
text-sm
font-semibold
text-red-700
">

Riwayat Konsultasi

</p>



<h1 className="
mt-3
text-3xl
md:text-4xl
font-bold
text-gray-900
">

Konsultasi Saya

</h1>



<p className="
mt-2
text-gray-600
">

Lihat jadwal dan riwayat layanan psikologi Anda.

</p>


</div>


</section>









<section className="
max-w-6xl
mx-auto
px-6
py-12
">





<div className="space-y-6">



{

consultations.map((item)=>(


<div

key={item.id}

className="
bg-white
rounded-3xl
border
border-gray-100
shadow-sm
p-6
md:p-8
hover:shadow-md
transition
"

>


<div className="
flex
flex-col
md:flex-row
md:items-center
md:justify-between
gap-6
">





{/* LEFT */}


<div className="flex-1">



<div className="
flex
items-center
gap-4
">


<div className="
w-12
h-12
rounded-xl
bg-red-100
text-red-700
flex
items-center
justify-center
">

<UserRound size={22}/>

</div>




<div>


<h2 className="
font-bold
text-gray-900
text-lg
leading-tight
">

{item.psychologist}

</h2>



<p className="
mt-1
text-sm
text-gray-600
">

{item.service}

</p>



</div>


</div>








<div className="
mt-7
grid
grid-cols-1
sm:grid-cols-3
gap-5
">





<Info

icon={<CalendarDays size={18}/>}

title="Tanggal"

value={item.date}

/>





<Info

icon={<Clock size={18}/>}

title="Waktu"

value={item.time}

/>







<Info

icon={<Video size={18}/>}

title="Platform"

value={item.platform}

/>





</div>





</div>









{/* RIGHT */}



<div className="
flex
md:flex-col
items-center
md:items-end
justify-between
gap-4
">





<div

className={`
flex
items-center
gap-2
px-4
py-2
rounded-full
text-sm
font-semibold

${
item.status === "Selesai"

?

"bg-green-100 text-green-700"

:

"bg-blue-100 text-blue-700"

}

`}

>


<CheckCircle2 size={16}/>

{item.status}


</div>







<button

className="
flex
items-center
gap-2
text-red-700
font-semibold
text-sm
hover:text-red-800
transition
"

>

Detail

<ArrowRight size={16}/>

</button>





</div>






</div>


</div>



))


}



</div>





</section>





</main>


);


}










function Info({

icon,

title,

value,

}:{

icon:React.ReactNode;

title:string;

value:string;

}){


return (

<div className="
flex
items-start
gap-3
">


<div className="
text-red-700
mt-1
">

{icon}

</div>




<div>


<p className="
text-xs
text-gray-500
">

{title}

</p>



<p className="
mt-1
text-sm
font-semibold
text-gray-900
">

{value}

</p>



</div>


</div>

);


}