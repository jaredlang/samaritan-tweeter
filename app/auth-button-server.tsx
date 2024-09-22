import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AuthButtonClient from "./auth-button-client";

export default async function AuthButtonServer() {
    const supabase = createServerComponentClient<Database>({ cookies }); 
    const {data: { session }} = await supabase.auth.getSession(); 

    console.log("session: ", session); 

    return <AuthButtonClient session={session} /> 
}