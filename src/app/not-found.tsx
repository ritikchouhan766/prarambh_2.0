import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-[72px] mb-4">🧒</div>
        <h1 className="font-serif text-[42px] text-slate mb-3">
          Page Not Found
        </h1>
        <p className="text-[17px] text-muted mb-8 max-w-[400px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back on track.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
