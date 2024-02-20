'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { GiConsoleController } from 'react-icons/gi'

export async function insightInsert(formData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const insight_data = {
    content: formData.get('content'),
    type: formData.get('type'),
    user: (await supabase.auth.getUser()).data.user?.id
  }

  const { error } = await supabase.from("insight").insert(insight_data)

  if (error) {
    console.log("Error: ",error)
    redirect('/error')
  }  
}

export async function insightRead() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
  
    const { data, error } = await supabase.from("insight").select()

    console.log(data);
  
    if (error) {
      console.log("Error: ",error)
      redirect('/error')
    }  
  }

