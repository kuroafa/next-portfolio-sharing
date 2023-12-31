"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect, Provider } from "react";
import Button from './Button';

type MainProvider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;

}

type Providers = Record<string, MainProvider> 

const Authproviders = () => {
  const [ providers, setProviders ] = useState<Providers | null>(null);

  useEffect(()=>{
    const fetchProviders = async () => {
      const res = await getProviders();
  console.log(res)
      setProviders(res);
    }

    fetchProviders();
  },[])
   
  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: MainProvider, i) => (
          <Button title='Sign In' key={i} handleClick={() => signIn(provider?.id)}/>
        ))}
      </div>
    );
  }
};
export default Authproviders
