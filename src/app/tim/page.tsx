import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  HeartHandshake,
} from "lucide-react";


const psychologists = [
  {
    slug: "dr-nama-psikolog",

    name: "Dr. Nama Psikolog, M.Psi., Psikolog",

    role: "Psikolog Klinis",

    image: "/images/team/mujab.png",

    education:
      "Pendidikan & Sertifikasi Profesional",

    expertise:
      "Konseling individu, pengelolaan emosi, dan pengembangan diri.",
  },


  {
    slug: "nama-psikolog-keluarga",

    name: "Nama Psikolog, M.Psi., Psikolog",

    role: "Psikolog Klinis",

    image: "/images/team/mujab.png",

    education:
      "Pendidikan & Sertifikasi Profesional",

    expertise:
      "Konseling keluarga, relasi interpersonal, dan kesehatan mental.",
  },


  {
    slug: "nama-psikolog-asesmen",

    name: "Nama Psikolog, M.Psi., Psikolog",

    role: "Psikolog",

    image: "/images/team/mujab.png",

    education:
      "Pendidikan & Sertifikasi Profesional",

    expertise:
      "Asesmen psikologi dan pendampingan psikologis.",
  },
];




export default function TimPage() {


  return (

    <main>


      <section className="bg-gray-50 py-24">


        <div className="max-w-7xl mx-auto px-6">


          {/* HEADER */}

          <div className="text-center max-w-3xl mx-auto">


            <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">

              Tim Kami

            </span>



            <h1 className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            leading-tight
            ">

              Psikolog Profesional
              Untuk Mendampingi Perjalanan Anda

            </h1>



            <p className="
            mt-5
            text-gray-600
            text-lg
            leading-relaxed
            ">

              Kami bekerja bersama psikolog profesional yang
              memiliki kompetensi dan pengalaman dalam memberikan
              layanan pendampingan psikologis.

            </p>


          </div>







          {/* CARD */}


          <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-16
          ">


            {
              psychologists.map((person)=> (


                <div

                  key={person.slug}

                  className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  transition
                  flex
                  flex-col
                  "

                >





                  {/* FOTO */}


                  <div className="
                  relative
                  h-[360px]
                  bg-white
                  ">


                    <Image

                      src={person.image}

                      alt={person.name}

                      fill

                      className="
                      object-contain
                      object-center
                      "

                    />


                  </div>







                  {/* CONTENT */}


                  <div className="
                  p-8
                  flex
                  flex-col
                  flex-1
                  ">



                    <h2 className="
                    text-xl
                    font-bold
                    text-gray-900
                    leading-snug
                    min-h-[60px]
                    ">

                      {person.name}

                    </h2>





                    <p className="
                    mt-2
                    text-red-700
                    font-semibold
                    ">

                      {person.role}

                    </p>







                    <div className="
                    mt-6
                    space-y-5
                    flex-1
                    ">




                      <div className="
                      flex
                      gap-3
                      items-start
                      ">


                        <div className="
                        bg-red-100
                        text-red-700
                        p-2
                        rounded-lg
                        shrink-0
                        ">

                          <GraduationCap size={18}/>

                        </div>




                        <p className="
                        text-sm
                        text-gray-600
                        leading-relaxed
                        ">

                          {person.education}

                        </p>



                      </div>








                      <div className="
                      flex
                      gap-3
                      items-start
                      ">


                        <div className="
                        bg-red-100
                        text-red-700
                        p-2
                        rounded-lg
                        shrink-0
                        ">

                          <HeartHandshake size={18}/>

                        </div>




                        <p className="
                        text-sm
                        text-gray-600
                        leading-relaxed
                        ">

                          {person.expertise}

                        </p>



                      </div>




                    </div>









                    <Link

                      href={`/tim/${person.slug}`}

                      className="
                      mt-8
                      w-full
                      bg-red-700
                      text-white
                      py-3.5
                      rounded-xl
                      font-semibold
                      text-center
                      hover:bg-red-800
                      transition
                      "

                    >

                      Lihat Profil


                    </Link>





                  </div>



                </div>



              ))

            }



          </div>




        </div>


      </section>


    </main>

  );

}