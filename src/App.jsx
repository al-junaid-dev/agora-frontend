import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import Loader from './components/Loader'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2200);
  }, []);

  if (loading) return <div className="fixed inset-0 bg-black/40 backdrop-blur-lg w-screen h-screen mx-auto my-auto flex items-center justify-center"><Loader /></div>;

  return <>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
    </>
}
  
 