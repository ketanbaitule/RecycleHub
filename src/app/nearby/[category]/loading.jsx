"use client"
import { Spinner } from '@chakra-ui/react'
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className='h-[80vh] flex items-center justify-center'>
        <Spinner size={"xl"} thickness={"4px"} />
    </div>
  }