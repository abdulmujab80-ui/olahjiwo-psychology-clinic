import {
  MessageCircle
} from "lucide-react";


const testimonials = [
  {
    text:
      "Saya merasa lebih memahami diri sendiri dan mendapatkan ruang aman untuk bercerita tanpa merasa dihakimi.",
    service:
      "Konsultasi Individu"
  },
  {
    text:
      "Proses konsultasi membantu saya melihat masalah dari sudut pandang yang lebih baik dan menemukan langkah yang lebih jelas.",
    service:
      "Pendampingan Psikologi"
  },
  {
    text:
      "Pendekatan yang diberikan terasa nyaman dan profesional. Saya merasa didengarkan selama proses konsultasi.",
    service:
      "Konseling Keluarga"
  }
];


export default function Testimonial(){

return (

<section className="bg-white py-24">


<div className="max-w-7xl mx-auto px-6">


<div className="text-center max-w-3xl mx-auto">


<span className="text-red-700 font-semibold text-sm uppercase">
Testimoni
</span>


<h2 className="mt-4 text-4xl font-bold text-gray-900">

Pengalaman Pengguna Kami

</h2>


<p className="mt-5 text-gray-600">

Cerita pengalaman pengguna setelah mendapatkan
pendampingan psikologi bersama kami.

</p>


</div>





<div className="grid md:grid-cols-3 gap-8 mt-14">


{
testimonials.map((item,index)=>(

<div
key={index}
className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
>


<div className="bg-red-100 text-red-700 w-12 h-12 rounded-xl flex items-center justify-center">

<MessageCircle size={24}/>

</div>



<p className="mt-6 text-gray-700 leading-relaxed">

"{item.text}"

</p>



<div className="mt-6 border-t pt-5">


<h4 className="font-bold text-gray-900">

Anonymous

</h4>


<p className="text-sm text-gray-500">

{item.service}

</p>


</div>



</div>


))

}


</div>



</div>


</section>

)

}