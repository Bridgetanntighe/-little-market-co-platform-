type Props = {
  src: string;
  webp?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
};

export function ResponsiveImage({
  src,
  webp,
  alt,
  width,
  height,
  className,
  sizes = "(max-width: 720px) 100vw, 720px",
  loading = "lazy",
}: Props) {
  const jpgSrcSet = `${src} ${width}w`;
  return (
    <picture>
      {webp && <source srcSet={`${webp} ${width}w`} type="image/webp" sizes={sizes} />}
      <img
        className={className}
        src={src}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
