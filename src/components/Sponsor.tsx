import Image from "next/image";


const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/images/bsi.png",
  },
  {
    name: "Sponsor 2",
    logo: "/images/brii.png",
  },
  {
    name: "Sponsor 3",
    logo: "/images/mandiri.jpg",
  },
];



export default function Sponsor() {


  return (

    <section className="bg-gray-50 py-24">


      <div className="max-w-7xl mx-auto px-6">



        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">


          <span className="text-red-700 font-semibold text-sm uppercase tracking-wide">

            Sponsor & Mitra

          </span>



          <h2 className="mt-4 text-4xl font-bold text-gray-900">

            Dukungan Untuk Program Kami

          </h2>




          <p className="mt-5 text-gray-600 leading-relaxed">

            Program psikologi kami dapat berjalan dengan dukungan
            dari berbagai pihak yang memiliki kepedulian terhadap
            kesehatan mental masyarakat.

          </p>


        </div>






        {/* LOGO SPONSOR */}


        <div className="grid md:grid-cols-3 gap-8 mt-14">


          {
            sponsors.map((item,index)=>(


              <div

                key={index}

                className="
                bg-white 
                rounded-2xl 
                h-40 
                flex 
                items-center 
                justify-center 
                p-8
                border 
                border-gray-100
                shadow-sm
                hover:shadow-md
                transition
                "

              >



                <div className="relative w-full h-full">


                  <Image

                    src={item.logo}

                    alt={item.name}

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


        <div className="text-center mt-16">


          <p className="text-gray-600 text-lg">

            Ingin mendukung program kesehatan mental?

          </p>



          <a

            href="https://wa.me/6281952373168?text=Halo%20OlahJiwo%20Layanan%20Psikologi,%20saya%20ingin%20mendapatkan%20informasi%20mengenai%20program%20kerjasama%20atau%20dukungan."

            target="_blank"

            rel="noopener noreferrer"

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


          </a>



        </div>



      </div>


    </section>

  );

}