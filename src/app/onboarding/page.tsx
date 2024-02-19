import Onboarding from './Onboarding'
import { onboarding } from './actions'

export default function Register(){

    return(
        <>
            <section id="Register" className='mt-10'>
                <form action={onboarding} className=' max-w-md mx-auto flex flex-col gap-5'>
                    <Onboarding />
                </form>
            </section>
        </>
    )
}