import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import KeycloakComponent from '../components/keycloak.component';

const Home = () => {
  const { keycloak } = useKeycloak();
 return (
   <div>
     <h1 className="text-green-800 text-4xl">Welcome to the Homepage</h1>
     <pre>{JSON.stringify(keycloak,null,2)}</pre>
     <KeycloakComponent />
   </div>
 );
};

export default Home;