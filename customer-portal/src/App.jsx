import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.component";
import WelcomePage from "./pages/homepage.page";
import SecuredPage from "./pages/securedpage.page";
import PrivateRoute from "./helpers/private-route.helpers";

function App() {

 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak} initOptions={{
      onLoad:'check-sso', 
      onEvent: (event, error) => {
        console.log('onKeycloakEvent', event, error)
      },
      onTokens: (tokens) => {
        console.log('onTokens', tokens);
      }}}>
       <Nav />
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;
