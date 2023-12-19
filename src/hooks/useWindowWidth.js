import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState({
        width: window.innerWidth,
    })

    const pageWidth = () => {
        setWindowWidth({
            width: window.innerWidth,
        })
    }

    useEffect(() => {
        window.addEventListener("resize", pageWidth);

        return () => 
            window.removeEventListener("resize", pageWidth);
    }, [])

    return windowWidth;
}