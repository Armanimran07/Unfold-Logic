import Link from "next/link";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">SoftwareSolutions</span>
            </Link>
            <p className="text-slate-400 mb-4">
              End-to-end software solutions from simple websites to enterprise
              systems. Quality work on accelerated timelines.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/services#websites"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#software"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services#maintenance"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services#consulting"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Consulting & Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:softwaresolutionsagency@gmail.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  softwaresolutionsagency@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+17472938171"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  +17472938171
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <address className="not-italic text-slate-400">
                  1 League Irvine, CA 92602 United States
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 SoftwareSolutions Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
