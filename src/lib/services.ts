import {
  createServerSupabase
} from "@/lib/supabase-server";


export async function getServices(){

  const supabase =
    createServerSupabase();


  const {
    data,
    error
  } =
  await supabase
  .from("services")
  .select("*")
  .eq("status", true)
  .order("id", {
    ascending:true
  });



  if(error){

    console.error(
      "services error:",
      error.message
    );

    throw error;

  }


  return data ?? [];

}