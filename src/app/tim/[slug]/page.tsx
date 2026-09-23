import Image from "next/image";
import {
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";



const psychologists = {

  "dr-nama-psikolog": {

    name: "Fulan, M.Psi., Psikolog",

    role: "Psikolog Klinis",

    image: "/images/team/mujab.png",

    education:
      "S2 Magister Psikologi Profesi Klinis Universitas Tarumanagara",

    license:
      "20230105-2024-01-3729",

    description:
      "Fulan adalah seorang psikolog klinis yang memiliki pengalaman dalam menangani masalah emosi, relasi pasangan dan keluarga, kecemasan, serta pengembangan diri. Pendekatan yang diberikan berfokus pada penciptaan ruang aman bagi individu untuk memahami diri, mengelola tantangan, dan mencapai perkembangan psikologis yang lebih baik.",

    expertise: [
      "Konseling Individu",
      "Konseling Keluarga",
      "Pengelolaan Emosi",
      "Kesehatan Mental",
    ],
    

  },

    "nama-psikolog-keluarga": {

    name: "Fulan, M.Psi., Psikolog",

    role: "Psikolog Klinis",

    image: "/images/team/mujab.png",

    education:
      "S2 Magister Psikologi Profesi Klinis Universitas Tarumanagara",

    license:
      "20230105-2024-01-3729",

    description:
      "Fulan adalah seorang psikolog klinis yang memiliki pengalaman dalam menangani masalah emosi, relasi pasangan dan keluarga, kecemasan, serta pengembangan diri. Pendekatan yang diberikan berfokus pada penciptaan ruang aman bagi individu untuk memahami diri, mengelola tantangan, dan mencapai perkembangan psikologis yang lebih baik.",

    expertise: [
      "Konseling Individu",
      "Konseling Keluarga",
      "Pengelolaan Emosi",
      "Kesehatan Mental",
    ],
    

  },

    "nama-psikolog-asesmen": {

    name: "Fulan, M.Psi., Psikolog",

    role: "Psikolog Klinis",

    image: "/images/team/mujab.png",

    education:
      "S2 Magister Psikologi Profesi Klinis Universitas Tarumanagara",

    license:
      "20230105-2024-01-3729",

    description:
      "Fulan adalah seorang psikolog klinis yang memiliki pengalaman dalam menangani masalah emosi, relasi pasangan dan keluarga, kecemasan, serta pengembangan diri. Pendekatan yang diberikan berfokus pada penciptaan ruang aman bagi individu untuk memahami diri, mengelola tantangan, dan mencapai perkembangan psikologis yang lebih baik.",

    expertise: [
      "Konseling Individu",
      "Konseling Keluarga",
      "Pengelolaan Emosi",
      "Kesehatan Mental",
    ],
    

  },

};





export default async function ProfilePage({

  params,

}: {

  params: Promise<{
    slug: string;
  }>;

}) {



  const { slug } = await params;



  const person =
    psychologists[slug as keyof typeof psychologists];





  if (!person) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-xl font-semibold text-gray-700">

          Psikolog tidak ditemukan

        </h1>

      </main>

    );

  }






  return (

    <main className="bg-white">



      <section className="py-24">


        <div className="max-w-6xl mx-auto px-6">



          <div className="grid lg:grid-cols-3 gap-12 items-start">





            {/* FOTO */}


            <div className="
            relative
            h-[520px]
            bg-gray-50
            rounded-3xl
            overflow-hidden
            border
            border-gray-100
            ">


              <Image

                src={person.image}

                alt={person.name}

                fill

                className="object-contain"

              />


            </div>








            {/* DETAIL */}


            <div className="lg:col-span-2">





              <span className="
              text-red-700
              font-semibold
              text-sm
              uppercase
              tracking-wide
              ">

                Profil Psikolog

              </span>






              <h1 className="
              mt-4
              text-4xl
              font-bold
              text-gray-900
              leading-tight
              ">

                {person.name}

              </h1>





              <p className="
              mt-3
              text-red-700
              font-semibold
              text-lg
              ">

                {person.role}

              </p>







              <div className="
              grid
              md:grid-cols-2
              gap-6
              mt-10
              ">





                <div className="flex gap-4">


                  <div className="
                  bg-red-100
                  text-red-700
                  p-3
                  rounded-xl
                  h-fit
                  ">

                    <GraduationCap size={24}/>

                  </div>




                  <div>

                    <h3 className="font-bold text-gray-900">

                      Pendidikan

                    </h3>


                    <p className="
                    mt-1
                    text-sm
                    text-gray-600
                    leading-relaxed
                    ">

                      {person.education}

                    </p>


                  </div>


                </div>








                <div className="flex gap-4">


                  <div className="
                  bg-red-100
                  text-red-700
                  p-3
                  rounded-xl
                  h-fit
                  ">

                    <ShieldCheck size={24}/>

                  </div>




                  <div>

                    <h3 className="font-bold text-gray-900">

                      Nomor Izin Praktik

                    </h3>


                    <p className="
                    mt-1
                    text-sm
                    text-gray-600
                    ">

                      {person.license}

                    </p>


                  </div>


                </div>





              </div>









              <div className="mt-12">


                <h2 className="
                text-2xl
                font-bold
                text-gray-900
                ">

                  Tentang {person.name.split(",")[0]}

                </h2>



                <p className="
                mt-5
                text-gray-600
                leading-relaxed
                ">

                  {person.description}

                </p>



              </div>









              <div className="mt-10">


                <h2 className="
                text-2xl
                font-bold
                text-gray-900
                ">

                  Bidang Keahlian

                </h2>





                <div className="
                flex
                flex-wrap
                gap-3
                mt-5
                ">



                  {
                    person.expertise.map((item,index)=>(


                      <span

                        key={index}

                        className="
                        bg-red-50
                        text-red-700
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        "

                      >

                        {item}

                      </span>


                    ))
                  }




                </div>



              </div>









              <button

                className="
                mt-12
                bg-red-700
                text-white
                px-10
                py-4
                rounded-xl
                font-semibold
                hover:bg-red-800
                transition
                "

              >

                Konsultasi Dengan Psikolog Ini


              </button>






            </div>




          </div>




        </div>


      </section>


    </main>

  );


}