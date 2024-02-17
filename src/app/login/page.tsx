import LoginForm from './LoginForm'
import { login } from '@/actions/auth'

export default function Login(){

    return(
        <>
            <section id="login" className='mt-10'>
                <form action={login} className=' max-w-md mx-auto flex flex-col gap-5'>
                    <LoginForm />
                </form>
            </section>
        </>
    )
}