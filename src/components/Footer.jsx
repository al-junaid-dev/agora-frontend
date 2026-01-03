import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-lg border-t border-white/20 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">AGORA</h2>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            AGORA is proposed as an AI-powered 
hyperlocal retail marketplace that enables local retailers to list products and allows customers 
to discover the cheapest and nearest available options in real time. By leveraging artificial 
intelligence, geolocation, and data-driven price comparison, AGORA aims to optimize 
consumer purchasing decisions, enhance local retailer visibility, and promote fair competition 
within the hyperlocal retail ecosystem. 
          </p>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A modern digital platform empowering local retailers with
              AI-driven visibility, smart product discovery, and competitive
              digital presence.
            </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home
            " className="hover:text-indigo-300 transition">
              Home
            </Link></li>
            <li><Link to="/register" className="hover:text-indigo-300 transition">
              Register
            </Link></li>
            <li><Link to="/login" className="hover:text-indigo-300 transition">
              Login
            </Link></li>
            <li><Link to="/contact" className="hover:text-indigo-300 transition">
              Contact
             </Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">

            {/* GitHub */}
            <a href="https://github.com/al-junaid-dev" target="_blank" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 012.5-.34c.85 0 1.7.12 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.86v2.76c0 .27.16.58.67.48A10 10 0 0022 12c0-5.53-4.47-10-10-10z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/junaidaldev" target="_blank" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h3.96V21H3V8.98zM9.96 8.98h3.79v1.64h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.06V21h-3.96v-5.36c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.08 1.4-2.08 2.84V21H9.96V8.98z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:al.junai.dev@gmail.com" className="hover:text-indigo-300 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6zm2 0l8 5 8-5H4zm16 12V8l-8 5-8-5v10h16z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
        <div className="border-t border-white/20 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Al Junaid. All rights reserved.
      </div>
    </footer>
  );
}
