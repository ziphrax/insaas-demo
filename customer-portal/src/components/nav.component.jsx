import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import {Link} from 'react-router-dom'

export const InsaaSCustomerNavigation = () => {
  return (
    <div>
      <h2>InsaaS Customer</h2>
      <ul>
        <li>
          <Link to="/insaas/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/insaas/affinities">Affinity Management</Link>
        </li>
      </ul>
    </div>
  )
}

export const CustomerNavigation = () => {
  return (
    <div>
      <h2>Customer</h2>
      <ul>
        <li><Link to="/customer/account">Account</Link></li>
        <li><Link to="/customer/claims">Claims</Link></li>
        <li><Link to="/customer/dashboard">Dashboard</Link></li>
        <li><Link to="/customer/policies">Policies</Link></li>
      </ul>
    </div>
  );
}

export const ProductNavigation = () => {
  return (
    <div>
      <h2>Product</h2>
      <ul>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </div>
  );
}

export const QuoteNavigation = () => {
  return (
    <div>
      <h2>Quote</h2>
      <ul>
        <li><Link to="/quotes/data-capture">Data Capture</Link></li>
        <li><Link to="/quotes/payment">Payment</Link></li>
        <li><Link to="/quotes/price-presentation">Price Presentation</Link></li>
      </ul>
    </div>
  );
}

export const SupportNavigation = () => {
  return (
    <div>
      <h2>Support</h2>
      <li><Link to="/support">Support</Link></li>
    </div>
  )
}

const Nav = () => {
 const { keycloak } = useKeycloak();

 return (
   <div>
     <div className="top-0 w-full flex flex-wrap">
       <section className="x-auto">
         <nav className="flex justify-between bg-gray-200 text-blue-800 w-screen">
           <div className="px-5 xl:px-12 py-6 flex w-full items-center">
             <h1 className="text-3xl font-bold font-heading">
               InsaaS - Customer Portal
             </h1>
             <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
               <li>
                 <a className="hover:text-blue-800" href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a className="hover:text-blue-800" href="/secured">
                   Secured Page
                 </a>
               </li>
               {!keycloak.authenticated && (
                    <li><button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                   </li>
                 )}

                 {!!keycloak.authenticated && (
                   <li><button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                   </li>
                 )}
             </ul>

           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;