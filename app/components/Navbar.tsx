import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/95 border-b border-red-900">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
            C
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wider text-white">
              THE COMFORT INN
            </h1>

            <p className="text-xs tracking-widest text-red-500">
              HOTEL & RESORT
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="/rooms"
            className="text-sm font-medium text-white transition hover:text-red-500"
          >
            Rooms
          </Link>

          <Link
            href="/gallery"
            className="text-sm font-medium text-white transition hover:text-red-500"
          >
            Gallery
          </Link>

          <Link
            href="/prices"
            className="text-sm font-medium text-white transition hover:text-red-500"
          >
            Prices
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-white transition hover:text-red-500"
          >
            Contact
          </Link>

          <Link
            href="/admin"
            className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Admin
          </Link>
        </div>

      </div>
    </nav>
  );
}