import { useEffect, useState } from "react";

export const useLetterCounter = (elementName, elementRef) => {
    const [letterCount, setLetterCount] = useState(0);

    useEffect(() => {
        const letterCounter = elementRef.current.value.length;
        setLetterCount(letterCounter);
    }, [elementName, elementRef]);

    return letterCount;
}