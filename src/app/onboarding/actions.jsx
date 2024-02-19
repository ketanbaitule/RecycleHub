'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { GiConsoleController } from 'react-icons/gi'

export async function onboarding(formData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const user_id = (await supabase.auth.getUser()).data.user?.id

  const data = {
    name: formData.get('name'),
    designation: formData.get('designation'),
    account_type: formData.get('account_type'),
    avatar: null,
    completed_onboarding: true
  }

  const avatar = formData.get("avatar")
  if(!!avatar){
    const file_upload = await supabase.storage.from("avatar").upload(`${user_id}`, avatar)
    if(!file_upload.error){
      data["avatar"] = `${user_id}`;
    }
  }

  const { error: update_error } = await supabase.from("profile").update(data).eq("user_id", user_id)

  if (update_error) {
    console.log("Error: ",update_error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/register/success')
}