'use client';

import Image from "next/image";
import { AppleIcon, GooglePlayIcon } from "@/components/Icons";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const handleAppStoreClick = () => {
    trackEvent('app_download', 'engagement', 'ios-app-store', 1);
    window.open('https://apps.apple.com/cy/app/greekly-learn-greek/id6747726049', '_blank');
  };

  const handleGooglePlayClick = () => {
    trackEvent('app_download', 'engagement', 'android-google-play', 1);
    window.open('https://play.google.com/store/apps/details?id=com.codeaxolot.langtutor', '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <Image
            src="/icon.png"
            alt="Greekly"
            width={180}
            height={180}
            className="rounded-[2rem] shadow-xl mb-4"
            priority
          />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-blue-600 font-medium mb-4">
          Learn languages by reading the news
        </p>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto">
          Master Greek, Spanish, and more by reading simplified news articles. Tap any word for instant translations.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAppStoreClick}
            className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <AppleIcon className="w-6 h-6" />
            App Store
          </button>
          <button
            onClick={handleGooglePlayClick}
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <GooglePlayIcon className="w-6 h-6" />
            Google Play
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} S.Z. CODE AXOL LTD</p>
      </footer>
    </main>
  );
}
