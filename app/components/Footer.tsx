import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-red-900 bg-black text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold tracking-wider">
            THE <span className="text-red-600">COMFORT INN</span>
          </h2>

          <div className="mt-4 h-1 w-12 bg-red-600" />

          <p className="mt-6 max-w-sm leading-7 text-gray-400">
            Experience premium comfort, warm hospitality and
            unforgettable stays at The Comfort Inn. Your comfort
            is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">
            Quick Links
          </h3>

          <div className="mt-4 h-1 w-10 bg-red-600" />

          <ul className="mt-6 space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-400 transition hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/rooms"
                className="text-gray-400 transition hover:text-red-500"
              >
                Rooms
              </Link>
            </li>

            <li>
              <Link
                href="/gallery"
                className="text-gray-400 transition hover:text-red-500"
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                href="/prices"
                className="text-gray-400 transition hover:text-red-500"
              >
                Prices
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-400 transition hover:text-red-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">
            Contact Us
          </h3>

          <div className="mt-4 h-1 w-10 bg-red-600" />

          <div className="mt-6 space-y-4 text-gray-400">

            <p>
              <span className="font-semibold text-white">
                Address:
              </span>
              <br />
              123 Hotel Street,
              <br />
              Kolkata, India
            </p>

            <p>
              <span className="font-semibold text-white">
                Phone:
              </span>
              <br />
              +91 XXXXX XXXXX
            </p>

            <p>
              <span className="font-semibold text-white">
                Email:
              </span>
              <br />
              info@thecomfortinn.com
            </p>

          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold">
            Follow Us
          </h3>

          <div className="mt-4 h-1 w-10 bg-red-600" />

          <p className="mt-6 leading-7 text-gray-400">
            Follow The Comfort Inn on social media for
            updates, offers and more.
          </p>

          <div className="mt-6 flex gap-4">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-sm font-bold transition hover:border-red-600 hover:bg-red-600"
            >
              f
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-sm font-bold transition hover:border-red-600 hover:bg-red-600"
            >
              IG
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-500 md:flex-row md:text-left">

          <p>
            © {new Date().getFullYear()} The Comfort Inn.
            All rights reserved.
          </p>

          <p>
            Designed with ❤️ for a comfortable stay.
          </p>

        </div>
      </div>

    </footer>
  );
}