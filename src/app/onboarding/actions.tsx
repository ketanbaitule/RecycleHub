'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const data = {
    name: formData.get('name'),
    profile: formData.get('profile'),
    accountType: formData.get('accountType')
  }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     console.log("Error: ",error)
//     redirect('/error')
//   }

  revalidatePath('/', 'layout')
  redirect('/')
}