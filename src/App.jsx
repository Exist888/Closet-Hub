import { Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout/Layout.jsx";
import { Home } from "./routes/Home/Home.jsx";
import { Shop } from "./routes/Shop/Shop.jsx";
import { Auth } from "./routes/Auth/Auth.jsx";
import "./App.scss";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth" element={<Auth />} />
            </Route>
        </Routes>
    );
}