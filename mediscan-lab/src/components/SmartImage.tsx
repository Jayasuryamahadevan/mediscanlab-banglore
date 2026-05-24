import { useEffect, useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
    fallback?: string;
};

const SmartImage = ({ src, fallback = '/assets/fallback.svg', alt = '', ...rest }: Props) => {
    const resolvedSrc = typeof src === 'string' && src.trim() ? src : fallback;
    const [current, setCurrent] = useState<string>(resolvedSrc);

    useEffect(() => {
        setCurrent(resolvedSrc);
    }, [resolvedSrc]);

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            src={current}
            alt={alt}
            onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.src.includes(fallback)) return;
                img.src = fallback;
                setCurrent(fallback);
            }}
            {...rest}
        />
    );
};

export default SmartImage;
