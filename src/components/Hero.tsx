import {
  Brain,
  UsersRound,
  ClipboardCheck,
  BookOpen,
  HeartHandshake,
} from "lucide-react";


export default function Hero() {


  return (

    <section className="bg-gradient-to-br from-red-700 to-red-900 text-white">


      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-[1fr_420px] gap-14 items-center">



        {/* LEFT CONTENT */}

        <div>


          <span className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-sm">

            <span className="w-2 h-2 bg-green-400 rounded-full"></span>

            Program psikologi online, praktis, dan terpercaya

          </span>




          <h1 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">

            Temukan Ruang Aman,

            <br />

            Untuk Memahami Diri

            <br />

            dan Berkembang

          </h1>




          <p className="mt-6 text-lg text-red-100 max-w-xl leading-relaxed">

            Layanan konsultasi psikologi profesional bersama psikolog
            berpengalaman secara online dengan privasi yang terjaga.

          </p>




          <div className="flex flex-wrap gap-4 mt-8">


            <a
              href="/program"
              className="bg-white text-red-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Lihat Program
            </a>



            <a
              href="/login"
              className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition"
            >
              Login Member
            </a>


          </div>





          {/* STATISTIC */}


          <div className="grid grid-cols-3 gap-6 mt-14 border-t border-white/30 pt-8">


            <div>

              <h3 className="text-3xl font-bold">
                5
              </h3>

              <p className="text-sm text-red-100">
                Program
              </p>

            </div>



            <div>

              <h3 className="text-3xl font-bold">
                100%
              </h3>

              <p className="text-sm text-red-100">
                Online
              </p>

            </div>



            <div>

              <h3 className="text-3xl font-bold">
                Aman
              </h3>

              <p className="text-sm text-red-100">
                Privasi
              </p>

            </div>


          </div>



        </div>







        {/* PROGRAM CARD */}


        <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-xl">


          <h2 className="text-2xl font-bold">
            Program Kami
          </h2>




          <div className="mt-6 space-y-4">



            {/* Konsultasi Individu */}

            <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-200 transition">

              <div className="bg-red-100 text-red-700 p-2.5 rounded-lg">

                <Brain size={22}/>

              </div>


              <span className="font-medium">
                Konsultasi Individu
              </span>

            </div>






            {/* Konseling Keluarga */}

            <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-200 transition">

              <div className="bg-red-100 text-red-700 p-2.5 rounded-lg">

                <UsersRound size={22}/>

              </div>


              <span className="font-medium">
                Konseling Keluarga
              </span>

            </div>







            {/* Asesmen */}

            <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-200 transition">

              <div className="bg-red-100 text-red-700 p-2.5 rounded-lg">

                <ClipboardCheck size={22}/>

              </div>


              <span className="font-medium">
                Asesmen Psikologi
              </span>

            </div>







            {/* Psikoedukasi */}

            <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-200 transition">

              <div className="bg-red-100 text-red-700 p-2.5 rounded-lg">

                <BookOpen size={22}/>

              </div>


              <span className="font-medium">
                Psikoedukasi
              </span>

            </div>







            {/* Konseling Pasangan */}

            <div className="bg-gray-100 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-200 transition">

              <div className="bg-red-100 text-red-700 p-2.5 rounded-lg">

                <HeartHandshake size={22}/>

              </div>


              <span className="font-medium">
                Konseling Pasangan
              </span>

            </div>



          </div>






          <a
            href="/program"
            className="block text-center mt-6 bg-red-700 text-white py-3 rounded-xl font-semibold hover:bg-red-800 transition"
          >
            Lihat Semua Program
          </a>



        </div>





      </div>


    </section>

  );

}