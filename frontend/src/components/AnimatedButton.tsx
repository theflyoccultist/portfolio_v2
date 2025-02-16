import { Button } from "react-bootstrap";

interface AnimatedButtonProps {
    href: string;
    buttonText: string;
}

export default function AnimatedButton({ href, buttonText }: AnimatedButtonProps) {
    return (
        <Button variant="secondary" href={href} size="lg">{buttonText}</Button>
    )
}
