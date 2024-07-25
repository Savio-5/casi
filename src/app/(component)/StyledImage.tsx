import Image from 'next/image';

export const StyledImage = ({ src, alt }: { src: string, alt: string }) => (
  <Image
    className='p-2 w-24 h-24 sm:w-24 sm:h-24 md:w-48 md:h-48 lg:w-64 lg:h-64'
    src={src}
    alt={alt}
    width={100}
    height={100}
  />
);