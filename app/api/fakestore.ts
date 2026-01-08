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

/* PRODUCTS */
export const getAllProducts = async () => {
    const res = await fetch(`${BASE}/products`, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json();
};

export const getProductById = async (id: number) => {
    const res = await fetch(`${BASE}/products/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch product ${id}: ${res.status}`);
    return res.json();
};

/* CART */
export const getCartById = async (id: number) => {
    const res = await fetch(`${BASE}/carts/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch cart ${id}: ${res.status}`);
    return res.json();
};

/* USERS */
export const getUserById = async (id: number) => {
    const res = await fetch(`${BASE}/users/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch user ${id}: ${res.status}`);
    return res.json();
};

/* AUTH */
export const loginUser = async (username: string, password: string) => {
    const res = await fetch(`${BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) throw new Error("Login failed");
    return res.json();
};