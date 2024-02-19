"use client"
import { createClient } from "@/utils/supabase/client";
import { useMemo } from "react";
import { useState } from "react";

export default function useUser(){
    const [user, setUser] = useState("HEllo");
    const supabase = createClient

    // useMemo( ()=>{
    //     // supabase.auth.getUser().then((_user)=>{
    //     //     console.log(_user);
    //     //     setUser(_user);
    //     // })
    // }, [user]);

    return user;
}