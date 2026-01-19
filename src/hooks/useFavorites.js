import { useEffect, useState } from "react";

const STORAGE_KEY = "favorites";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setFavorites(JSON.parse(stored));
    }, []);


    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (pokemon) => {
        setFavorites((prev) => {

        if (prev.some((p) => p.id === pokemon.id)) return prev;
        return [...prev, pokemon];
        });
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id));
    };

    const isFavorite = (id) => favorites.some((p) => p.id === id);

    return { favorites, addFavorite, removeFavorite, isFavorite };
    };
