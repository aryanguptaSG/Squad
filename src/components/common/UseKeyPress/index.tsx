import { useEffect, useRef } from 'react';

const useKeyPress = (key:any, callback:any) => {
    const callBackRef = useRef(callback);

    useEffect(() => {
        callBackRef.current = callback;
    }, [])
    useEffect(() => {
        const handlePress = (event:any) => {
            if (event.code === key) {
                callBackRef.current(event);
            }
        }
        document.addEventListener("keypress", handlePress);
        return () => {
            document.removeEventListener("keypress", handlePress);
        }
    }, [key])
}

export default useKeyPress;