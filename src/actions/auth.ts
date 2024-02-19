'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const onbooard_data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { data, error } = await supabase.auth.signInWithPassword(onbooard_data)

  if (error) {
    console.log("Error: ",error)
    redirect('/error')
  }
  console.log(data.user.id)
  const onboard_data = (await supabase.from("profile").select("completed_onboarding").eq("user_id", data.user.id)).data;
  const completed = onboard_data?.[0].completed_onboarding;
  if(!completed){
    redirect("/onboarding")
  }else{
    revalidatePath('/', 'layout')
    redirect('/discover')
  }
}

export async function signup(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/register/pending')
}

export async function logout() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}