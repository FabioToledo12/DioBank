import React from "react";
import { Footer } from "./Footer.tsx";
import { Header } from "./Header/Header.tsx";

export const Layout = ({ children }: any) => {
	return (
		<>
            <Header />
                {children}
            <Footer />
		</>
	);
};