import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const CONTACT = {
  email: "info@kampusdesa.com",
  whatsappNumber: "6281952373168", // ganti dengan nomor WA asli, format 62 tanpa +
};

const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTACT.whatsappNumber}`,
  instagram: "https://instagram.com/kampusdesa", // ganti
  tiktok: "https://tiktok.com/@kampusdesa", // ganti
  youtube: "https://youtube.com/@kampusdesa", // ganti
  linkedin: "https://linkedin.com/company/kampusdesa", // ganti
};

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logokamdes.png"
                alt="Logo KampusDesa"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  KampusDesa
                </h2>

                <p className="text-xs tracking-widest text-gray-500 mt-1">
                  PSYCHOLOGY CENTER
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-gray-600 leading-relaxed italic max-w-xs">
              "Ruang aman untuk memahami diri, bertumbuh, dan berkembang."
            </p>
          </div>

          {/* PROGRAM */}
          <FooterColumn title="Program">
            <FooterLink href="/program" text="Konsultasi Individu" />
            <FooterLink href="/program" text="Konseling Keluarga" />
            <FooterLink href="/program" text="Asesmen Psikologi" />
            <FooterLink href="/program" text="Psikoedukasi" />
          </FooterColumn>

          {/* LOKASI */}
          <FooterColumn title="Lokasi">
            <p className="text-sm text-gray-600 leading-relaxed">
              Layanan psikologi online melalui Zoom atau Google Meet.
            </p>
            <p className="mt-3 text-sm text-gray-600">Malang, Indonesia</p>
          </FooterColumn>

          {/* KONTAK */}
          <FooterColumn title="Kontak">
            <p className="text-sm text-gray-600 leading-relaxed">
              Email:
              <br />
              <a
                href={`mailto:${CONTACT.email}`}
                className="hover:text-red-700 transition"
              >
                {CONTACT.email}
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              WhatsApp:
              <br />
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-700 transition"
              >
                0{CONTACT.whatsappNumber.slice(2)}
              </a>
            </p>
          </FooterColumn>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left text-sm text-gray-500">
            <p>© 2026 KampusDesa Psychology Center</p>

            <div className="mt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Link href="#" className="hover:text-red-700 transition">
                Kebijakan Privasi
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-red-700 transition">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-3 flex-wrap justify-center">
            <Social href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
              <FaWhatsapp />
            </Social>

            <Social href={SOCIAL_LINKS.instagram} label="Instagram">
              <FaInstagram />
            </Social>

            <Social href={SOCIAL_LINKS.tiktok} label="TikTok">
              <FaTiktok />
            </Social>

            <Social href={SOCIAL_LINKS.youtube} label="YouTube">
              <FaYoutube />
            </Social>

            <Social href={SOCIAL_LINKS.linkedin} label="LinkedIn">
              <FaLinkedin />
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-600 hover:text-red-700 transition block"
    >
      {text}
    </Link>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-lg hover:bg-red-100 hover:text-red-700 transition"
    >
      {children}
    </a>
  );
}