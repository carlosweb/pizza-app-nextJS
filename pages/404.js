
import Link from 'next/link'
import { useEffect } from 'react'
import { Router, useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
      setTimeout(() => {
          router.push('/')
      }, 3000)
    }, []);

    return ( 
        <div>
            <h1>Opssss</h1>
            <p>That page cannor be found</p>
            <Link href="/"><a>Go back to the home</a></Link>
        </div>
     );
}
 
export default NotFound;