import {
  Clock,
  CheckCircle2,
  ShieldCheck,
  Users,
  ArrowRight
} from "lucide-react";


import {
  getServices
} from "@/lib/services";


import ProgramButton from "./ProgramButton";





export default async function ProgramPage(){


const services =
await getServices();




return (


<main
className="
min-h-screen
bg-gray-50
"
>



{/* HERO */}


<section
className="
bg-white
border-b
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-20
"
>


<div
className="
max-w-3xl
"
>


<p
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-red-50
text-red-700
font-semibold
text-sm
"
>

<ShieldCheck size={16}/>

Layanan Konsultasi Psikologi


</p>




<h1
className="
mt-6
text-4xl
md:text-5xl
font-bold
text-gray-900
leading-tight
"
>

Temukan layanan psikologi
yang sesuai dengan kebutuhan Anda


</h1>





<p
className="
mt-5
text-lg
text-gray-600
leading-relaxed
"
>

Dapatkan pendampingan dari psikolog profesional
melalui sesi konsultasi yang aman,
nyaman, dan terpercaya.


</p>



<div
className="
mt-8
flex
flex-wrap
gap-6
text-sm
text-gray-700
"
>


<div
className="
flex
items-center
gap-2
"
>

<CheckCircle2
className="text-red-700"
size={18}
/>

Psikolog profesional

</div>




<div
className="
flex
items-center
gap-2
"
>

<CheckCircle2
className="text-red-700"
size={18}
/>

Privasi terjaga

</div>




<div
className="
flex
items-center
gap-2
"
>

<CheckCircle2
className="text-red-700"
size={18}
/>

Online melalui Zoom / Google Meet

</div>



</div>


</div>


</div>


</section>







{/* SERVICE LIST */}



<section
className="
max-w-7xl
mx-auto
px-6
py-16
"
>


<div
className="
flex
items-end
justify-between
mb-10
"
>


<div>


<h2
className="
text-3xl
font-bold
text-gray-900
"
>

Pilih Program Konsultasi

</h2>


<p
className="
mt-2
text-gray-600
"
>

Sesuaikan layanan dengan kebutuhan Anda.


</p>


</div>


</div>






{
services.length === 0 ? (


<div
className="
bg-white
rounded-3xl
p-10
text-center
shadow-sm
"
>

Belum ada layanan tersedia.


</div>


)
:


(


<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{

services.map((service)=>(


<div

key={service.id}

className="
group
bg-white
rounded-3xl
border
border-gray-100
p-8
shadow-sm
hover:shadow-xl
hover:-translate-y-2
transition-all
duration-300
"

>



<div
className="
flex
items-center
justify-between
"
>


<div
className="
w-14
h-14
rounded-2xl
bg-red-50
text-red-700
flex
items-center
justify-center
"
>


<Users size={28}/>


</div>



<span
className="
text-xs
font-semibold
px-3
py-1
rounded-full
bg-green-50
text-green-700
"
>

Tersedia

</span>


</div>







<h3
className="
mt-7
text-xl
font-bold
text-gray-900
"
>

{service.nama}


</h3>





<p
className="
mt-3
text-gray-600
text-sm
leading-relaxed
min-h-[72px]
"
>

{service.deskripsi}


</p>






<div
className="
mt-6
flex
items-center
gap-2
text-gray-700
text-sm
"
>


<Clock
size={17}
className="text-red-700"
/>


Durasi {service.durasi} menit


</div>







<div
className="
mt-5
"
>


<p
className="
text-sm
text-gray-500
"
>

Mulai dari


</p>



<p
className="
text-3xl
font-bold
text-red-700
"
>

Rp
{service.harga.toLocaleString("id-ID")}


</p>


</div>






<ProgramButton

slug={service.slug}

/>



</div>



))


}


</div>


)


}



</section>







{/* FOOTER CTA */}



<section
className="
max-w-7xl
mx-auto
px-6
pb-20
"
>


<div
className="
bg-red-700
rounded-3xl
p-10
text-white
flex
flex-col
md:flex-row
md:items-center
md:justify-between
gap-6
"
>


<div>


<h2
className="
text-3xl
font-bold
"
>

Mulai perjalanan kesehatan mental Anda


</h2>


<p
className="
mt-3
text-red-100
"
>

Pilih layanan, psikolog, dan jadwal yang sesuai dengan kebutuhan Anda.


</p>


</div>




<div
className="
flex
items-center
gap-2
font-semibold
"
>

Konsultasi terpercaya

<ArrowRight size={20}/>


</div>


</div>


</section>





</main>


);


}