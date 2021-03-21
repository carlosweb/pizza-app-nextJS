import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://nextdbapp.herokuapp.com/flavors')
    const data = await res.json()

    return {
        props: { pizzas: data }
    }
}

const Pizzas = ({ pizzas }) => {
    console.log(pizzas)
    return (
        <div>
            <h1>Pizzas</h1>
            {pizzas.map(pizza => (
                <Link href={'/pizzas/' + pizza.id} key={pizza.id}>
                    <a>
                        <h2>{pizza.title}</h2>
                        <p>{pizza.description}</p>
                

                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Pizzas;