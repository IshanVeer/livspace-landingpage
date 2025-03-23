import React from "react";

import Navbar from "@/components/shared/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
