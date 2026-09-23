import {
  ShieldCheck,
  UserCheck,
  HeartHandshake
} from "lucide-react";


export default function About() {


  return (

    <section className="bg-white py-24">


      <div className="max-w-7xl mx-auto px-6">


        <div className="grid lg:grid-cols-2 gap-16 items-center">



          {/* LEFT */}

          <div>


            <span className="inline-block text-red-700 font-semibold text-sm uppercase tracking-wider">
              Tentang Kami
            </span>



            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

              Membangun Ruang Aman
              Untuk Perjalanan Psikologis Anda

            </h2>




            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Kami menyediakan layanan konsultasi psikologi profesional
              untuk membantu individu memahami diri, menghadapi tantangan,
              serta mengembangkan kualitas hidup yang lebih baik.

            </p>




            <p className="mt-5 text-gray-600 leading-relaxed">

              Setiap individu memiliki pengalaman dan kebutuhan yang berbeda.
              Karena itu, kami memberikan pendampingan secara personal dengan
              pendekatan psikologi yang sesuai dan menjaga kerahasiaan setiap
              proses konsultasi.

            </p>




            <div className="mt-8 flex gap-8">


              <div>

                <h3 className="text-3xl font-bold text-red-700">
                  100%
                </h3>

                <p className="text-sm text-gray-500">
                  Privasi Terjaga
                </p>

              </div>




              <div>

                <h3 className="text-3xl font-bold text-red-700">
                  Profesional
                </h3>

                <p className="text-sm text-gray-500">
                  Pendampingan Psikologi
                </p>

              </div>


            </div>



          </div>






          {/* RIGHT */}

          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100">


            <h3 className="text-2xl font-bold text-gray-900">

              Komitmen Kami

            </h3>




            <div className="mt-8 space-y-6">





              <div className="flex gap-5 items-start">


                <div className="bg-red-100 text-red-700 p-3 rounded-xl">

                  <UserCheck size={24}/>

                </div>


                <div>

                  <h4 className="font-bold text-gray-900">

                    Psikolog Profesional

                  </h4>


                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">

                    Ditangani oleh tenaga psikologi dengan kompetensi
                    dan pengalaman sesuai bidangnya.

                  </p>

                </div>


              </div>







              <div className="flex gap-5 items-start">


                <div className="bg-red-100 text-red-700 p-3 rounded-xl">

                  <ShieldCheck size={24}/>

                </div>


                <div>

                  <h4 className="font-bold text-gray-900">

                    Privasi Terjaga

                  </h4>


                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">

                    Informasi pribadi dan proses konsultasi dijaga
                    dengan standar kerahasiaan profesional.

                  </p>

                </div>


              </div>








              <div className="flex gap-5 items-start">


                <div className="bg-red-100 text-red-700 p-3 rounded-xl">

                  <HeartHandshake size={24}/>

                </div>


                <div>

                  <h4 className="font-bold text-gray-900">

                    Pendekatan Personal

                  </h4>


                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">

                    Setiap layanan disesuaikan dengan kondisi,
                    tujuan, dan kebutuhan setiap individu.

                  </p>

                </div>


              </div>





            </div>


          </div>




        </div>


      </div>


    </section>

  );

}