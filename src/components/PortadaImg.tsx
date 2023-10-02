interface PortadaProps {
  src: string;
  alt: string;
}

const PortadaImg = ({ src, alt }: PortadaProps) => (
  <img className="w-100 mb-5" src={src} alt={alt} />
);

export default PortadaImg;
