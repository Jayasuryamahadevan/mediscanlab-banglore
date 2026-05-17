/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: 'var(--color-forest)',
                'forest-deep': 'var(--color-forest-deep)',
                gold: 'var(--color-gold)',
                'gold-dim': 'var(--color-gold-dim)',
                'off-white': 'var(--color-off-white)',
                black: 'var(--color-black)',
                white: 'var(--color-white)',
            },
            fontFamily: {
                display: ['var(--font-display)', 'serif'],
                body: ['var(--font-body)', 'sans-serif'],
            },
            spacing: {
                container: 'var(--space-container)',
            }
        },
    },
    plugins: [],
}
