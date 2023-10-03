interface PortadaProps {
  src: string;
  alt: string;
  text: string;
}

const PortadaImg = ({ src, alt, text }: PortadaProps) => (
  <div className="portada-container">
    <img src={src} alt={alt} className="portada-img" />
    <div className="portada-overlay"></div>
    <h1 className="portada-title">{text}</h1>
  </div>
);

export default PortadaImg;
