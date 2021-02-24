import { motion } from 'framer-motion'
const About = () => {
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1>About Us</h1>
            <p>Lorem Ipusm aisduasi d  iua duasi du iaidsu aiousd </p>
        </motion.div>
    );
}

export default About;