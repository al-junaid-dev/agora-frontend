import { useState } from "react";
import { addProduct } from "../../services/productService";
import { useAuth } from "../../context/AuthContext";

export default function AddProduct() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    price: "",
    distance: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addProduct(form, user.token);
      setMessage(res.message);
      setForm({ name: "", price: "", distance: "" });
    } catch (err) {
      setMessage("You are not authorized or input is invalid");
    }
  };

  return (
    <div className="p-8 text-white max-w-lg">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>

      {message && <p className="mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <input
          name="distance"
          type="number"
          placeholder="Distance (km)"
          value={form.distance}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <button className="bg-green-600 px-6 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
