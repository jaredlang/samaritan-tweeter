'use client'

import { createClientComponentClient, Session } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function AuthButtonClient({ session }: { session: Session | null}) {
    const supabase = createClientComponentClient();
    const router = useRouter(); 

    const handleSignIn = async() => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback'
            }
        });

        console.log("login success"); 
    };

    const handleSignOut = async() => {
        await supabase.auth.signOut();
        router.refresh(); 

        console.log("logout success"); 
    }

    return session ? (
        <button className="text-xs text-gray-400" onClick={handleSignOut}>Logout</button>
    ) : (
        <button className="text-xs text-gray-400" onClick={handleSignIn}>Login</button>
    )
}