import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import {ErrorBoundary} from "../error-boundary.tsx";
import {PostData} from "./post-data.tsx";
import {Example1, Example2, Example3} from "./class-example.tsx";

export function App() {
return (
    <>
        <BrowserRouter>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <Routes>
                <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
                <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
                <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
            </Routes>
        </BrowserRouter>
        <PostData/>
        <Example1/>
        <Example2/>
        <Example3/>
        <button onClick={fetchWebhook}>Fetch Webhook</button>
    </>
)
}

export function HomeScreen() {
    return (
        <h1>HOME</h1>
    )
}

export function ProfileScreen() {
    return (
        <h1>PROFILE</h1>
    )
}

export function ShopScreen() {
    const isError = true
    if (isError) {
    throw new Error("Something went wrong")}
    return (
        <div>SHOP</div>
    )
}

async function fetchWebhook() {
    const url = "https://webhook.site/5e712301-a05e-4c5d-a135-22e7d8769d94";
    const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
    }
    try{
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error)
    }
}