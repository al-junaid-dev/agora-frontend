
export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center mt-3 px-4">
      <form className="
        w-full max-w-3xl
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        p-8 md:p-12
        shadow-2xl
        text-white
      ">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Contact Us
        </h2>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 text-white
                placeholder-white/60
                border border-white/30
                focus:outline-none focus:ring-2
                focus:ring-indigo-400/60
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 text-white
                placeholder-white/60
                border border-white/30
                focus:outline-none focus:ring-2
                focus:ring-indigo-400/60
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 text-white
                placeholder-white/60
                border border-white/30
                focus:outline-none focus:ring-2
                focus:ring-indigo-400/60
              "
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm mb-1 text-white/80">
              City
            </label>
            <input
              type="text"
              placeholder="Hyderabad"
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 text-white
                placeholder-white/60
                border border-white/30
                focus:outline-none focus:ring-2
                focus:ring-indigo-400/60
              "
            />
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="block text-sm mb-1 text-white/80">
            Address
          </label>
          <textarea
            rows="3"
            placeholder="Street, Area, Pincode"
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 text-white
              placeholder-white/60
              border border-white/30
              focus:outline-none focus:ring-2
              focus:ring-indigo-400/60
              resize-none
            "
          />
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block text-sm mb-1 text-white/80">
            Message
          </label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="
              w-full px-4 py-3 rounded-xl
              bg-white/20 text-white
              placeholder-white/60
              border border-white/30
              focus:outline-none focus:ring-2
              focus:ring-indigo-400/60
              resize-none
            "
          />
        </div>

        {/* Submit */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="
              inline-flex items-center justify-center
              px-8 py-3 rounded-2xl font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white

              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              active:scale-95

              focus:outline-none focus:ring-2
              focus:ring-indigo-400/60
            "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
