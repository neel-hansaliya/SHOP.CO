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

/* Helper to handle fetch responses safely */
const handleResponse = async (res: Response) => {
    if (!res.ok) {
        // This captures the HTML error page but throws an error instead of trying to parse it as JSON
        throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Expected JSON response but received something else.");
    }

    return res.json();
};

/* PRODUCTS */
export const getAllProducts = async () =>
    fetch(`${BASE}/products`, { cache: "no-store" }).then(handleResponse);

export const getProductById = async (id: number) =>
    fetch(`${BASE}/products/${id}`).then(handleResponse);

/* CART */
export const getCartById = async (id: number) =>
    fetch(`${BASE}/carts/${id}`).then(handleResponse);

/* USERS */
export const getUserById = async (id: number) =>
    fetch(`${BASE}/users/${id}`).then(handleResponse);

/* AUTH */
export const loginUser = async (username: string, password: string) =>
    fetch(`${BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    }).then(handleResponse);