"use client"
import { createClient } from "@/utils/supabase/client";
import { Button} from "@chakra-ui/react";
import Link from 'next/link'
import { useEffect, useState } from "react";
import AvatarMenu from './AvatarMenu';
import LoggedInUserMenu from './LoggedInUserMenu';
import Image from "next/image";

export default function Navbar(){

    const [user, setUser] = useState(null)    
    const supabase = createClient()

    useEffect( ()=>{
        const {data} = supabase.auth.onAuthStateChange((event, session)=>{
            if((user === null && session !== null) || (user !== null && session === null)){
                setUser(session)
            }
        })

        return ()=>data.subscription.unsubscribe()
    })

    return(
        <>
            <div className="flex flex-row justify-between items-center p-4 md:px-24 shadow-[0_1px_6px_-14px_rgba(0,0,0,.08),0_6px_19px_-6px_rgba(0,0,0,.15)] mb-5 bg-white ">
                <Link className=" font-semibold text-2xl bg-brand px-4 py-2" href={"/"} >
                    <Image src={require("@/images/logo.jpeg")} alt="Recycle Hub" className="h-12 w-auto" />
                </Link>
                {
                    !!!user ? (
                    <div className="flex flex-row gap-x-4">
                        <Button as={Link} href="/login" >Login</Button>
                        <Button as={Link} href="/register">Register</Button>
                    </div>
                    ) : (
                        <div className="flex flex-row items-center gap-3">
                            <LoggedInUserMenu name={user.user.email} />
                            <AvatarMenu name={user.user.email} />
                        </div>
                    )
                }
            </div>
        </>
    )
}