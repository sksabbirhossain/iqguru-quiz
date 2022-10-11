import React, { createContext, useEffect, useState } from 'react';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      fetch("https://openapi.programming-hero.com/api/quiz")
        .then((res) => res.json())
        .then((data) => setCategories(data.data));
    }, []);
    return (
        <CategoryContext.Provider value={{categories}}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryContext;