import {
  NextResponse,
  NextRequest
} from "next/server";


import {
  createServerClient
} from "@supabase/ssr";





export async function GET(
  request: NextRequest
) {



  const code =
    request.nextUrl.searchParams.get(
      "code"
    );



  if (!code) {


    return NextResponse.redirect(

      new URL(
        "/login?error=no_code",
        request.url
      )

    );


  }







  const response =
    NextResponse.redirect(

      new URL(
        "/member",
        request.url
      )

    );







  const supabase =
    createServerClient(


      process.env.NEXT_PUBLIC_SUPABASE_URL!,


      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,



      {


        cookies:{



          getAll(){


            return request.cookies.getAll();


          },



          setAll(
            cookies
          ){


            cookies.forEach(
              ({
                name,
                value,
                options
              })=>{


                response.cookies.set(

                  name,

                  value,

                  options

                );


              }

            );


          }



        }


      }



    );









  const {

    error

  } = await supabase.auth.exchangeCodeForSession(

    code

  );







  if(error){


    console.error(

      "OAuth callback error:",

      error.message

    );



    return NextResponse.redirect(

      new URL(

        `/login?error=${encodeURIComponent(error.message)}`,

        request.url

      )

    );


  }







  return response;



}