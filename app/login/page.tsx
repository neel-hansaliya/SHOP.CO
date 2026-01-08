"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { FiUser, FiLock } from "react-icons/fi";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [form, setForm] = useState({ username: "", password: "" });

    const submit = async () => {
        const res = await login(form.username, form.password);
        if (res.token) router.push("/");
        else alert("Invalid login");
    };

    return (
        <div className="min-h-screen flex items-center text-black justify-center bg-[#F4F1EF] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* TITLE */}
                <h2 className="text-3xl font-black text-center text-black mb-2">
                    Welcome Back
                </h2>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Please login to your account
                </p>

                {/* USERNAME */}
                <div className="mb-4">
                    <label className="text-sm font-medium text-gray-600 mb-1 block">
                        Username
                    </label>
                    <div className="flex items-center border rounded-full px-4 py-3 focus-within:border-black transition">
                        <FiUser className="text-gray-400 mr-3" />
                        <input
                            placeholder="Enter your username"
                            className="w-full outline-none text-sm"
                            onChange={(e) =>
                                setForm({ ...form, username: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* PASSWORD */}
                <div className="mb-6">
                    <label className="text-sm font-medium text-gray-600 mb-1 block">
                        Password
                    </label>
                    <div className="flex items-center border rounded-full px-4 py-3 focus-within:border-black transition">
                        <FiLock className="text-gray-400 mr-3" />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full text-sm"
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* BUTTON */}
                <button
                    onClick={submit}
                    className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-700 transition cursor-pointer">
                    Login
                </button>

                {/* FOOTER */}
                <p className="text-xs text-gray-500 text-center mt-6">
                    Demo credentials available for testing
                </p>
            </div>
        </div>
    );
}
