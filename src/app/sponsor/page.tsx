import Image from "next/image";
import Link from "next/link";
import { Handshake } from "lucide-react";


const sponsors = [

  {
    name: "Sponsor 1",
    logo: "/images/brii.png",
  },

  {
    name: "Sponsor 2",
    logo: "/images/bsi.png",
  },

  {
    name: "Sponsor 3",
    logo: "/images/mandiri.jpg",
  },

];



export default function SponsorPage() {


  return (

    <main className="bg-white">


      <section className="py-24">


        <div className="max-w-7xl mx-auto px-6">



          {/* HEADER */}

          <div className="
          text-center
          max-w-3xl
          mx-auto
          ">


            <div className="
            flex
            justify-center
            mb-5
            ">


              <div className="
              bg-red-100
              text-red-700
              p-3
              rounded-xl
              ">

                <Handshake size={28}/>

              </div>


            </div>





            <span className="
            text-red-700
            font-semibold
            text-sm
            uppercase
            tracking-wide
            ">

              Sponsor & Mitra

            </span>





            <h1 className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            ">

              Dukungan Untuk Program Kami

            </h1>





            <p className="
            mt-5
            text-gray-600
            text-lg
            leading-relaxed
            ">

              Program kesehatan mental kami dapat berjalan
              melalui dukungan berbagai pihak yang memiliki
              kepedulian terhadap kesehatan mental masyarakat.

            </p>



          </div>









          {/* SPONSOR CARD */}


          <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-16
          ">


            {
              sponsors.map((sponsor,index)=>(


                <div

                  key={index}

                  className="
                  h-48
                  bg-gray-50
                  rounded-3xl
                  border
                  border-gray-100
                  flex
                  items-center
                  justify-center
                  p-10
                  hover:shadow-lg
                  transition
                  "

                >


                  <div className="
                  relative
                  w-full
                  h-full
                  ">


                    <Image

                      src={sponsor.logo}

                      alt={sponsor.name}

                      fill

                      className="
                      object-contain
                      "

                    />


                  </div>



                </div>


              ))
            }



          </div>









          {/* CTA */}


          <div className="
          text-center
          mt-20
          ">


            <p className="
            text-gray-600
            text-lg
            ">

              Ingin mendukung program kesehatan mental?

            </p>





            <Link

              href="https://wa.me/6281952373168"

              target="_blank"

              className="
              inline-flex
              mt-6
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

              Hubungi Kami


            </Link>



          </div>





        </div>


      </section>


    </main>

  );


}