// const BASE = "https://fakestoreapi.com";

// /* PRODUCTS */
// export const getAllProducts = async () =>
//     fetch(`${BASE}/products`, { cache: "no-store" }).then(r => r.json());

// export const getProductById = async (id: number) =>
//     fetch(`${BASE}/products/${id}`).then(r => r.json());

// /* CART */
// export const getCartById = async (id: number) =>
//     fetch(`${BASE}/carts/${id}`).then(r => r.json());

// /* USERS */
// export const getUserById = async (id: number) =>
//     fetch(`${BASE}/users/${id}`).then(r => r.json());

// /* AUTH */
// export const loginUser = async (username: string, password: string) =>
//     fetch(`${BASE}/auth/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//     }).then(r => r.json());

const BASE = "https://fakestoreapi.com";

// Common headers to prevent 403 Forbidden errors on Vercel
const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Accept": "application/json",
};

/* PRODUCTS */
export const getAllProducts = async () => {
    const res = await fetch(`${BASE}/products`, {
        cache: "no-store",
        headers: headers
    });

    if (!res.ok) {
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
};

export const getProductById = async (id: number) => {
    const res = await fetch(`${BASE}/products/${id}`, { headers });
    if (!res.ok) throw new Error("Product not found");
    return res.json();
};

/* CART */
export const getCartById = async (id: number) => {
    const res = await fetch(`${BASE}/carts/${id}`, { headers });
    if (!res.ok) throw new Error("Cart not found");
    return res.json();
};

/* USERS */
export const getUserById = async (id: number) => {
    const res = await fetch(`${BASE}/users/${id}`, { headers });
    if (!res.ok) throw new Error("User not found");
    return res.json();
};

/* AUTH */
export const loginUser = async (username: string, password: string) => {
    const res = await fetch(`${BASE}/auth/login`, {
        method: "POST",
        headers: {
            ...headers,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
};