import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "./components/BannerCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white mx-auto px-6">
      {/* Secondary Bar */}
      <div className="flex items-center justify-between">
      <Image
        src="/SUN_logo-20.png"
        alt="Sunway Medical Centre Logo"
        width={200}
        height={80}
        priority
        className="h-auto"
      />
      <div className="flex flex-col">
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center gap-4 text-sm">
        <div className="ml-auto flex items-center gap-4 flex-nowrap">
          <Image
            src="/sunway-logo.svg"
            alt="Sunway Logo"
            width={120}
            height={18}
            className="h-4 w-auto flex-shrink-0"
          />
          <select className="text-gray-600 border-none bg-transparent cursor-pointer flex-shrink-0">
            <option>Healthcare Unit</option>
            <option>SUNWAY MEDICAL CENTRE VELOCITY</option>
            <option>SUNWAY MEDICAL CENTRE PENANG</option>
            <option>SUNWAY HOME HEALTHCARE</option>
            <option>SUNMED CONVENTION CENTRE</option>
            <option>PHARMACY TOWER A</option>
            <option>SUNWAY TCM</option>
            <option>SUNWAY SANCTUARY (SUNWAY CITY)</option>
          </select>
          <select className="text-gray-600 border-none bg-transparent cursor-pointer flex-shrink-0">
            <option>EN</option>
          </select>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center ">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
              <button className="hover:text-red-600">🏠</button>
              <Link href="#" className="hover:text-red-600">
                Find a Doctor
              </Link>
              <Link href="#" className="hover:text-red-600">
                Our Services
              </Link>
              <Link href="#" className="hover:text-red-600">
                Patient Care
              </Link>
              <Link href="#" className="hover:text-red-600">
                International Patient
              </Link>
              <Link href="#" className="hover:text-red-600">
                Health Hub
              </Link>
              <Link href="#" className="hover:text-red-600">
                Highlights
              </Link>
              <Link href="#" className="hover:text-red-600">
                About Us
              </Link>
              <Link href="#" className="hover:text-red-600">
                Contact Us
              </Link>
              <button className="hover:text-red-600">🔍</button>
            </div>
          </div>
        </div>
      </nav>
      </div>
      </div>
      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Hero Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Specialties */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                <span className="text-black">Newsweek Top-Ranked</span>{" "}
                <span className="text-red-600">Specialties in 2025</span>
              </h2>

              <div className="space-y-4">
                {/* Paediatrics - Highlighted */}
                <div className="relative bg-white border-2 border-yellow-400 rounded-lg p-4 flex items-center gap-4 shadow-md">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                    👶
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900">
                      Paediatrics
                    </div>
                    <div className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded inline-block mt-1">
                      NO. 1 In Malaysia
                    </div>
                  </div>
                </div>

                {/* Other Specialties */}
                {[
                  { icon: "🎗️", name: "Oncology" },
                  { icon: "🧠", name: "Neurosurgery" },
                  { icon: "❤️", name: "Cardiology" },
                  { icon: "🧠", name: "Neurology" },
                  { icon: "🦴", name: "Orthopaedics" },
                  { icon: "❤️", name: "Cardiac Surgery" },
                ].map((specialty, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:border-red-500 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                      {specialty.icon}
                    </div>
                    <div className="font-semibold text-lg text-gray-900">
                      {specialty.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Award Badge */}
            <div className="relative">
              <div className="bg-red-600 text-white rounded-lg p-6 shadow-xl max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="text-xl font-bold mb-2">
                  BEST SPECIALIZED HOSPITALS
                  <br />
                  ASIA PACIFIC 2025
                </div>
                <div className="bg-white text-gray-900 px-4 py-2 rounded mb-4 text-center font-semibold">
                  Newsweek
                </div>
                <div className="text-xs text-center mb-4 text-gray-200">
                  POWERED BY statista
                </div>
                <div className="text-center font-bold text-lg">
                  SUNWAY MEDICAL CENTRE
                </div>
              </div>

              {/* Hospital Image Placeholder */}
              <div className="mt-6 h-64 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
                Hospital Campus View
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Icons */}
      <section className="bg-gray-50 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-3">👨‍⚕️</div>
              <div className="font-semibold text-gray-900">Find A Doctor</div>
            </button>
            <button className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-3">📅</div>
              <div className="font-semibold text-gray-900">
                Make an Appointment
              </div>
            </button>
            <button className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-3">🏥</div>
              <div className="font-semibold text-gray-900">Health Packages</div>
            </button>
          </div>
        </div>
      </section>

      {/* Technology and Equipment Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Text Content */}
            <div className="lg:col-span-2">
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                OUR TECHNOLOGY
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Cancer Treatment Technology
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Every type of cancer is different, and a one-size-fits-all
                treatment approach simply isn't enough. At our hospital, we're
                equipped with the latest state-of-the-art technology for
                personalised and effective cancer treatment, with the ultimate
                goal of ensuring the best possible outcomes for our patients.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                LEARN MORE
              </button>
            </div>

            {/* Right Side - Equipment Images and Chat Buttons */}
            <div className="space-y-4">
              {/* Medical Equipment Placeholder */}
              <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-sm">Medical Equipment</div>
                  <div className="text-xs mt-1">SIEMENS • Stryker • ROSA</div>
                </div>
              </div>

              {/* Enquiry Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-left">
                  For General Enquiry
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-left">
                  For Medical Enquiry
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-left">
                  For International Patients Enquiry
                </button>
              </div>

              {/* Chat Button */}
              <button className="w-full bg-green-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                <span>💬</span>
                Chat with us!
              </button>
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="p-2 hover:bg-gray-100 rounded-full">←</button>
            <button className="p-2 hover:bg-gray-100 rounded-full">→</button>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-400 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-500 transition-colors flex items-center justify-center text-xl">
          👤
        </button>
      </div>
    </div>
  );
}
