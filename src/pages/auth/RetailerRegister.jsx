
const RetailerRegister = () => {
    return <div className="m-5 mt-10 text-white flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-lg shadow-lg backdrop-blur max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">
          AGORA – Retailer Login
        </h2>

        <p className="mb-6 text-gray-300">
          Manage your products & pricing
        </p>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"
        />
        <input type="password"
        placeholder="Confirm Password"
         className="w-full mb-6 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"
         />

        <button
          className="w-full bg-green-600 py-3 rounded font-semibold hover:bg-green-700 transition disabled:opacity-60"
        >
            Register
        </button>

      </div>
    </div>
}

export default RetailerRegister