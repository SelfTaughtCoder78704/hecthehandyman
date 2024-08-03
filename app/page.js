'use client';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import Services from '@/components/ServicesSlider';
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/Contact";
import PhoneNumberBig from "@/components/PhoneNumberBig";
import { useState } from "react";


export default function Home() {

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("(830) 321-3057");

  const handlePhoneNumber = () => {
    setShowPhoneNumber(true);
  }

  const handlePhoneNumberClose = () => {
    setShowPhoneNumber(false);
  }
  return (
    <div>
      <Head>
        <title>Hec the Handyman</title>
      </Head>
      <header className="bg-yellow-400 p-8 flex justify-between items-center">
        <Image
          className="w-32 h-auto"
          src="/logo.svg"
          alt="Hec the Handyman Logo"
          width={128}
          height={37}
          priority
        />
        <nav className="space-x-4  text-black grid grid-cols-3">
          <Link href="#contact" className="bg-yellow-400 text-black  p-4 mt-4 block w-fit  hover:underline">Contact Us</Link>
          <Link href='#about' className="bg-yellow-400 text-black  p-4 mt-4 block w-fit  hover:underline">About Us</Link>
          <button onClick={handlePhoneNumber} className="bg-yellow-400 text-black  p-4 mt-4 block w-fit  hover:underline">(830) 321-3057</button>
        </nav>
      </header>
      <main>
        <section className="flex flex-col md:flex-row items-center justify-around bg-gray-100 p-8 md:p-0 max-h-[80vh] overflow-hidden">
          <div className="md:w-1/2 p-8">
            <h1 className="text-6xl font-bold mb-4">Hec The Handyman </h1>
            <h2 className="text-2xl mb-4">Your Go-To Handyman in Temple, TX</h2>
            <p className="mb-4">We offer a wide range of handyman services <br /> to meet your needs.</p>
            <Link href="#contact" className="bg-yellow-400 text-black  p-4 mt-4 block w-fit rounded-lg hover:bg-yellow-500">Contact Us</Link>
          </div>
          <div className="md:w-1/2 p-4 md:p-0">
            <Image
              src="/tilework.png"
              alt="Handyman at work"
              width={600}
              height={400}
              className="rounded-lg md:rounded-none w-full h-full object-cover "
            />
          </div>
        </section>
        <section className="bg-white p-8" >
          <Services />
        </section>
        <section className=" px-8">
          <Testimonials />
        </section>
        <section className="bg-white p-8">
          <Gallery />
        </section>
        <section id="about" className="bg-yellow-400 p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full md:w-1/2 p-4">
                <p className="mb-4 text-lg">
                  Welcome to Hec the Handyman, your trusted local handyman service in Temple, TX. Our company is dedicated to providing top-notch service and quality workmanship on every project.
                </p>
                <p className="mb-4 text-lg">
                  Hector, our skilled handyman, brings years of experience in construction, carpentry, waterproofing, and more. Whether you need help with a small repair or a major renovation, Hector is here to deliver exceptional results with attention to detail and care.
                </p>
                <p className="mb-4 text-lg">
                  Behind the scenes, our office operations are managed meticulously to ensure smooth scheduling and excellent customer service. We believe in building lasting relationships with our clients by understanding their needs and exceeding their expectations.
                </p>
                <p className="mb-4 text-lg">
                  At Hec the Handyman, we take pride in our commitment to integrity, honesty, and excellence. Hector approaches every job with dedication and precision, ensuring that your home projects are completed to the highest standards.
                </p>
                <p className="mb-4 text-lg">
                  Thank you for considering Hec the Handyman for your home improvement needs. Contact us today to learn more about our services and how we can help you with your next project.
                </p>
                <p className="mb-4 text-lg text-center">
                  <a href="#contact" className="bg-gray-800 hover:bg-white hover:text-black text-white px-4 py-2 rounded-lg inline-block">Contact Us Today</a>
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <Image
                  src="/hec.jpg"
                  alt="Hector the Handyman"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <ContactSection />
        </section>

      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Hec the Handyman</p>
      </footer>
      {showPhoneNumber && <PhoneNumberBig phoneNumber={phoneNumber} setShowPhoneNumber={handlePhoneNumberClose} />}
    </div>
  );
}

const services = [
  "Plumbing fixtures",
  "Lighting fixtures",
  "Small Home Repair",
  "Decks",
  "Tile",
  "Laminate Wood Floors",
  "Drywall / Sheetrock / Tape Float / Texture",
  "Window Installation",
  "General Troubleshooting / Finding Where Problems Stem From",
  "Waterproofing",
  "Door Installation",
  "Epoxy Floor Installation",
  "Sidewalks, Patios",
  "Paint",
  "Appliance Installation",
  "Smoke Detector Change/Install",
  "Full Demolition",
  "Demolition Cleanup",
  "Cabinet Installation",
  "Carpet Installation",
];

const excludedServices = [
  "Roofing",
  "Carpet Repair or Cleaning",
  "Major Electrical",
  "Major Plumbing",
  "Cabinet Repair",
];
