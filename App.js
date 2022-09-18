import React from "react";
import Navbar from "./src/components/Navbar";
import Tabs from "./src/components/Tabs";
import {AuthProvider} from "./src/context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <Navbar/>
            <Tabs />
        </AuthProvider>
    );
}
