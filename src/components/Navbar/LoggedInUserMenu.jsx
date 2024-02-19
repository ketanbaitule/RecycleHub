import Link from "next/link"

export default function LoggedInUserMenu({name}){
    return(
        <>
            <Link className="text-black-500" href={"/discover"}>Discover </Link>
            <Link className="text-black-500" href={"/insight"}>Insight </Link>
            <Link className="text-black-500" href={"/nearby"}>Nearby </Link>
        </>
    )
}