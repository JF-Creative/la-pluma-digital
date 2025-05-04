import Image from 'next/image';
import "@/styles/logosBN.css"

export default function LogosBN() {
  return (
    <div className="logos-container">
      <div className="logo-wrapper">
        <Image
          src="/Logo_BN.png"
          alt="La Pluma Digital"
          fill
          className="logoBN"
        />
      </div>

      <div className="separata"></div>

      <div className="logo-wrapper">
        <Image
          src="/CUN_BN.png"
          alt="La Pluma Digital"
          fill
          className="logoBN"
        />
      </div>
    </div>
  );
}
