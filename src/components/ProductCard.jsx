

const ProductCard = ({product}) => {
    return <div className="
    flex items-center bg-white/20 flex-col backdrop-blur-lg
  border border-white/30
  rounded-2xl m-2 p-6
  shadow-xl text-white
  transition-all duration-300
  hover:bg-white/5 hover:scale-95">

         <h3 className="font-serif font-bold text-[white] bg-[black]/30 px-2 py-1 rounded mr-auto ">Name : {product.name}</h3>
         <p className="font-serif text-[black]/90 bg-[white]/20 px-2 mt-1 rounded mr-auto">Store : {product.store}</p>
        <div className="w-cover mt-2">
         <img src={product.image} alt="Product Image" className="w-26 h-40 object-cover rounded" />
        </div>
         <div className="flex justify-between mt-3 items-center bg-[white]/20">
        <span className="text-white font-bold bg-[black]/30 px-2 py-1 m-1 rounded">₹ {product.price}</span>
        <span className="text-sm text-[black]/70 m-1 px-2 py-1 font-semibold font-serif bg-[white]/30 rounded">
          {product.distance} KM away
        </span>
        </div>
         <p className="font-mono font-bold mt-2 text-[white]/80">
        AI Rank Score: {product.score}
      </p>
    </div>
}

export default ProductCard 