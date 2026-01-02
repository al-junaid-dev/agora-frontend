import { Route, Routes } from 'react-router-dom'
import { ROLES } from "../utils/constants";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from '../pages/NotFound'
import ContactForm from '../components/ContactForm'

{/* Auth Pages */}
import Landing from '../pages/public/Landing';

{/* Customer Auth */}
import CustomerRegister from '../pages/auth/CustomerRegister'
import CustomerLogin from "../pages/auth/CustomerLogin";
import Home from '../pages/customer/Home'
import SearchResults from "../pages/customer/SearchResults";

{/* Retailer Auth */}
import RetailerLogin from "../pages/auth/RetailerLogin";
import RetailerRegister from '../pages/auth/RetailerRegister'
import Dashboard from "../pages/retailer/Dashboard";
import AddProduct from "../pages/retailer/AddProduct";

{/* Admin Auth */}
import AdminLogin from "../pages/auth/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";


const AppRoutes = () => {
return <Routes>
        <Route path="/" element={<div><Landing /></div>} /> 
        <Route path="/contact" element={<div><ContactForm/></div>} />
        <Route path="/*" element={<div><NotFound/></div>} />

        {/* Customer */}
        <Route path="/login" element={<div><CustomerLogin /></div>} />
        <Route path="/register" element={<div><CustomerRegister /></div>} />
        <Route path="/home" element={<div><Home /></div>} />
        <Route path="/search" element={<div><SearchResults/></div>} />

        {/* Retailer */}
        <Route path="/login/retailer" element={<div><RetailerLogin /></div>} />
        <Route path="/register/retailer" element={<div><RetailerRegister /></div>} />
        <Route path="/retailer/dashboard" element={<div>
           <ProtectedRoute role={ROLES.RETAILER}>
            <Dashboard />
           </ProtectedRoute> 
          </div>}/>

        <Route path="/retailer/add-product" element= {<div>
           <ProtectedRoute role={ROLES.RETAILER}>
            <AddProduct />
           </ProtectedRoute>
         </div>}/>

        {/* Admin */}
        <Route path="/login/admin" element={<div><AdminLogin /></div>} />
        <Route path="/admin/dashboard" element= {<div>
          <ProtectedRoute role={ROLES.ADMIN}>
            <AdminDashboard />
           </ProtectedRoute>
        </div>}/>

      </Routes>
}

export default AppRoutes 