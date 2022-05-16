import styles from './Image.module.scss';
import classNames from 'classnames';
import { useState, forwardRef, LegacyRef } from 'react';
import images from '../../assets/images';

interface Props {
  src: string;
  alt: string;
  className: string;
  fallback?: string;
}

const Image = forwardRef(
  (
    { alt, className, src, fallback: customFallback = images.noImage }: Props,
    ref,
  ) => {
    const [fallBack, setFallBack] = useState<string>('');

    const handleImageError = () => {
      setFallBack(customFallback);
    };
    return (
      <img
        ref={ref as LegacyRef<HTMLImageElement>}
        src={fallBack || src}
        alt={alt}
        className={classNames(styles.wrapper, className)}
        onError={handleImageError}
      />
    );
  },
);

export default Image;
