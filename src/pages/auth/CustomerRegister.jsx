const CustomerRegister = () => {
    return <div className="w-cover flex p-5 mx-10 justify-center items-center flex-col mt-10 rounded-lg text-center md-max-w-md ">
        <div className="bg-white/10 p-8 rounded-lg  max-w-md w-full text-center text-white backdrop-blur shadow-lg ">
        <h2 className="text-xl font-bold mb-4">
          AGORA – Customer Register
        </h2>
        <input type="email" placeholder="Email" className="w-full mb-4 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"></input>
        <input type="password" placeholder="Password" className="w-full mb-6 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"></input>
        <input type="password" placeholder="Confirm Password" className="w-full mb-6 p-3 rounded bg-white/20 border border-white/20 focus:outline-none"></input>
        <button className="w-full bg-indigo-600 py-3 rounded font-semibold hover:bg-indigo-700 transition disabled:opacity-60">Register</button>
        </div>
    </div>
}
export default CustomerRegister 