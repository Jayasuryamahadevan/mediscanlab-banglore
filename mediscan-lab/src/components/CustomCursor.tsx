import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Move cursor
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Very snappy
                ease: "power2.out"
            });
        };

        // Hover effects
        const onHover = () => {
            gsap.to(cursor, { scale: 3, backgroundColor: "var(--color-gold)", mixBlendMode: "difference" });
        };

        const onLeave = () => {
            gsap.to(cursor, { scale: 1, backgroundColor: "white", mixBlendMode: "difference" });
        };

        window.addEventListener('mousemove', moveCursor);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .interactive');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onHover);
            el.addEventListener('mouseleave', onLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onHover);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
        </>
    );
};

export default CustomCursor;
