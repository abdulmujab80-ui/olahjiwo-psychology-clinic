"use client";


import {
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  Pencil,
} from "lucide-react";



export default function ProfilPage() {


  const user = {

    name: "User",

    email: "user@email.com",

    phone: "08xxxxxxxxxx",

    birth:
      "-",

    gender:
      "-",

    address:
      "-"

  };




  return (

    <main className="min-h-screen bg-gray-50">



      {/* HEADER */}


      <section className="
        bg-white
        border-b
      ">


        <div className="
          max-w-6xl
          mx-auto
          px-6
          py-10
        ">


          <p className="
            text-sm
            text-red-700
            font-semibold
          ">

            Profil Member

          </p>



          <h1 className="
            mt-3
            text-3xl
            font-bold
            text-gray-900
          ">

            Data Pribadi

          </h1>



          <p className="
            mt-2
            text-gray-600
          ">

            Lengkapi informasi diri Anda untuk kebutuhan konsultasi.

          </p>


        </div>


      </section>









      <section className="
        max-w-6xl
        mx-auto
        px-6
        py-12
      ">



        <div className="
          grid
          lg:grid-cols-3
          gap-8
        ">





          {/* PROFILE CARD */}



          <div className="
            bg-white
            rounded-3xl
            p-8
            border
            border-gray-100
            shadow-sm
            text-center
          ">



            <div className="
              mx-auto
              w-28
              h-28
              rounded-full
              bg-red-100
              flex
              items-center
              justify-center
              text-red-700
            ">


              <UserRound size={55}/>


            </div>





            <h2 className="
              mt-6
              text-xl
              font-bold
              text-gray-900
            ">

              {user.name}

            </h2>




            <p className="
              mt-2
              text-gray-500
              text-sm
            ">

              Member KampusDesa

            </p>






            <button

              className="
                mt-8
                w-full
                flex
                items-center
                justify-center
                gap-2
                bg-red-700
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-800
                transition
              "

            >

              <Pencil size={18}/>

              Edit Profil


            </button>



          </div>












          {/* DETAIL DATA */}



          <div className="
            lg:col-span-2
            bg-white
            rounded-3xl
            p-8
            border
            border-gray-100
            shadow-sm
          ">



            <h2 className="
              text-xl
              font-bold
              text-gray-900
            ">

              Informasi Pribadi

            </h2>





            <div className="
              mt-8
              grid
              md:grid-cols-2
              gap-6
            ">





              <InfoItem

                icon={<UserRound size={20}/>}

                title="Nama Lengkap"

                value={user.name}

              />





              <InfoItem

                icon={<Mail size={20}/>}

                title="Email"

                value={user.email}

              />






              <InfoItem

                icon={<Phone size={20}/>}

                title="Nomor WhatsApp"

                value={user.phone}

              />







              <InfoItem

                icon={<CalendarDays size={20}/>}

                title="Tanggal Lahir"

                value={user.birth}

              />








              <InfoItem

                icon={<UserRound size={20}/>}

                title="Jenis Kelamin"

                value={user.gender}

              />








              <InfoItem

                icon={<MapPin size={20}/>}

                title="Alamat"

                value={user.address}

              />





            </div>





          </div>





        </div>




      </section>





    </main>


  );

}







function InfoItem({

icon,

title,

value

}:{

icon:React.ReactNode;

title:string;

value:string;


}){


return (

<div className="
  flex
  gap-4
  items-start
">


<div className="
  bg-red-100
  text-red-700
  p-3
  rounded-xl
">

{icon}

</div>




<div>

<p className="
text-sm
text-gray-500
">

{title}

</p>


<p className="
mt-1
font-semibold
text-gray-900
">

{value}

</p>


</div>



</div>


);


}