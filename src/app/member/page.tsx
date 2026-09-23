"use client";


import Link from "next/link";


import {
  UserRound,
  MessageCircleHeart,
  ClipboardList,
  ArrowRight,
} from "lucide-react";


import { useAuth } from "@/context/AuthContext";





export default function MemberPage() {



  const {
    profile,
    user
  } = useAuth();






  const googleName =

    user?.user_metadata?.full_name

    ||

    user?.user_metadata?.name

    ||

    user?.user_metadata?.user_name

    ||

    user?.user_metadata?.preferred_username

    ||

    user?.user_metadata?.given_name

    ||

    null;






  const nama =

    profile?.nama_lengkap

    ||

    googleName

    ||

    user?.email?.split("@")[0]

    ||

    "User";







  const avatar =

    profile?.avatar

    ||

    user?.user_metadata?.avatar_url

    ||

    user?.user_metadata?.picture

    ||

    null;






  const initial =

    nama.charAt(0).toUpperCase();







  return (

    <main className="min-h-screen bg-gray-50">


      <section className="bg-white border-b">


        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          "
        >



          <p
            className="
            text-sm
            text-red-700
            font-semibold
            "
          >

            Dashboard Member

          </p>





          <div
            className="
            mt-4
            flex
            items-center
            gap-4
            "
          >


            {
              avatar ? (

                <img

                  src={avatar}

                  alt={nama}

                  className="
                  w-14
                  h-14
                  rounded-full
                  object-cover
                  border
                  border-gray-200
                  "

                />


              ) : (


                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-green-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  "
                >

                  {initial}

                </div>


              )
            }





            <h1
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              "
            >

              Halo, {nama}

            </h1>



          </div>






          <p
            className="
            mt-4
            text-gray-600
            "
          >

            Selamat datang kembali.
            Kelola profil dan layanan konsultasi Anda di sini.

          </p>



        </div>


      </section>









      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        py-12
        "
      >



        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >





          <Link
            href="/member/profil"
            className="
            bg-white
            rounded-3xl
            p-7
            border
            border-gray-100
            shadow-sm
            hover:shadow-lg
            transition
            "
          >


            <div
              className="
              w-12
              h-12
              rounded-xl
              bg-red-100
              text-red-700
              flex
              items-center
              justify-center
              "
            >

              <UserRound size={24}/>

            </div>



            <h2
              className="
              mt-6
              text-xl
              font-bold
              text-gray-900
              "
            >

              Profil Saya

            </h2>



            <p
              className="
              mt-2
              text-gray-600
              text-sm
              "
            >

              Lengkapi data diri untuk memudahkan proses konsultasi.

            </p>




            <div
              className="
              mt-6
              flex
              items-center
              gap-2
              text-red-700
              font-semibold
              text-sm
              "
            >

              Kelola Profil

              <ArrowRight size={16}/>


            </div>


          </Link>








          <div
            className="
            bg-white
            rounded-3xl
            p-7
            border
            border-gray-100
            shadow-sm
            "
          >


            <div
              className="
              w-12
              h-12
              rounded-xl
              bg-red-100
              text-red-700
              flex
              items-center
              justify-center
              "
            >

              <MessageCircleHeart size={24}/>

            </div>




            <h2
              className="
              mt-6
              text-xl
              font-bold
              text-gray-900
              "
            >

              Konsultasi

            </h2>




            <p
              className="
              mt-2
              text-gray-600
              text-sm
              "
            >

              Belum ada jadwal konsultasi.

            </p>




            <Link
              href="/program"
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-red-700
              font-semibold
              text-sm
              "
            >

              Mulai Konsultasi

              <ArrowRight size={16}/>


            </Link>


          </div>









          <Link
            href="/member/riwayat"
            className="
            bg-white
            rounded-3xl
            p-7
            border
            border-gray-100
            shadow-sm
            hover:shadow-lg
            transition
            "
          >


            <div
              className="
              w-12
              h-12
              rounded-xl
              bg-red-100
              text-red-700
              flex
              items-center
              justify-center
              "
            >

              <ClipboardList size={24}/>

            </div>




            <h2
              className="
              mt-6
              text-xl
              font-bold
              text-gray-900
              "
            >

              Riwayat Konsultasi

            </h2>




            <p
              className="
              mt-2
              text-gray-600
              text-sm
              "
            >

              Lihat daftar konsultasi yang pernah dilakukan.

            </p>




            <div
              className="
              mt-6
              flex
              items-center
              gap-2
              text-red-700
              font-semibold
              text-sm
              "
            >

              Lihat Riwayat

              <ArrowRight size={16}/>


            </div>


          </Link>





        </div>







        <div
          className="
          mt-10
          bg-red-700
          rounded-3xl
          p-8
          text-white
          "
        >



          <div
            className="
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
                text-2xl
                font-bold
                "
              >

                Butuh bantuan psikolog?

              </h2>



              <p
                className="
                mt-2
                text-red-100
                "
              >

                Temukan layanan yang sesuai dengan kebutuhan Anda.

              </p>


            </div>





            <Link
              href="/program"
              className="
              bg-white
              text-red-700
              px-7
              py-3
              rounded-xl
              font-bold
              text-center
              hover:bg-red-50
              "
            >

              Lihat Program


            </Link>



          </div>


        </div>





      </section>


    </main>

  );


}