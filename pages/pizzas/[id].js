import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch('https://backend-strapi-api.herokuapp.com/flavors/')
    const data = await res.json()
    console.log(data)

    const paths = data.map(pizza => {
        return {
            params: { id: pizza.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://backend-strapi-api.herokuapp.com/flavors/' + id)
    const data = await res.json()

    return {
        props: { pizza: data }
    }
}

const Details = ({ pizza }) => {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <img src={'https://backend-strapi-api.herokuapp.com' + pizza.image[0].url} width="250"/>
            {/* <Image
                src={'https://nextdbapp.herokuapp.com' + pizza.image[0].url}
                alt="Picture of the author"
                width={500}
                height={500}
            /> */}
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <p>Post criado em: {pizza.published_at} </p>
            <Link href={'/pizzas'}><a>Voltar</a></Link>
        </motion.div>
    );
}

export default Details;