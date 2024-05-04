import "./Hero.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <Image src="/images/hero-mobile.png" alt="Hero Image" width={300} height={200} />
      <h2>Discover the Perfect Fireplace.....</h2>
      <p><Link href="/booking">Book consultation</Link></p>
    </section>
  );
}