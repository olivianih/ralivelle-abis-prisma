export default function Footer() {
    return (
      <footer className="bg-[#D39C9C] text-white text-center py-4 mt-12">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Ralivelle Florist. All rights reserved.
        </div>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
          <a href="mailto:oliviattan@gmail.com" className="hover:underline">
            Email
          </a>
          <a href="/contact" className="hover:underline">
            Hubungi Kami
          </a>
        </div>
      </footer>
    );
  }
  