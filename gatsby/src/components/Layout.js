import React from "react";

import Head from "./Head";
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head/>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}