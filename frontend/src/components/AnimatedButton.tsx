import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
    href: string;
    buttonText: string;
}

export default function AnimatedButton({ href, buttonText }: AnimatedButtonProps) {
    return (
        <motion.a
        href={href}
        initial={{ opacity: 0 }} // Initial state before animation
        animate={{ opacity: [0.6, 1, 0.6] }} // Looping animation
        transition={{ duration: 4, repeat: Infinity }}
        >
        <Button variant="secondary" size="lg">{buttonText}</Button>
        </motion.a>
    )
}
