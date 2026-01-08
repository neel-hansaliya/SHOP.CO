const BASE = "https://fakestoreapi.com";

/* PRODUCTS */
export const getAllProducts = async () =>
    fetch(`${BASE}/products`, { cache: "no-store" }).then(r => r.json());

export const getProductById = async (id: number) =>
    fetch(`${BASE}/products/${id}`).then(r => r.json());

/* CART */
export const getCartById = async (id: number) =>
    fetch(`${BASE}/carts/${id}`).then(r => r.json());

/* USERS */
export const getUserById = async (id: number) =>
    fetch(`${BASE}/users/${id}`).then(r => r.json());

/* AUTH */
export const loginUser = async (username: string, password: string) =>
    fetch(`${BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    }).then(r => r.json());
