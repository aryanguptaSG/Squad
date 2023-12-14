import { useEffect, useRef } from 'react';

const useKeyPress = (key: any, callback: any) => {
    const callBackRef = useRef(callback);

    useEffect(() => {
        callBackRef.current = callback;
    }, [])
    useEffect(() => {
        const handlePress = (event: any) => {
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

export const useKeyPress2 = (key: any, key1: any, callback: any) => {
    const callBackRef = useRef(callback);
    let code = ""

    useEffect(() => {
        callBackRef.current = callback;
    }, [])
    useEffect(() => {
        const handlePress = (event: any) => {
            code = code + event.code
            if (code.includes(key) && code.includes(key1)) {
                callBackRef.current(event);
            }
        }
        document.addEventListener("keydown", handlePress);
        return () => {
            document.removeEventListener("keydown", handlePress);
        }
    }, [key])

    useEffect(() => {
        const handlePress = () => {
            code = ""
        }
        document.addEventListener("keyup", handlePress);
        return () => {
            document.removeEventListener("keyup", handlePress);
        }
    }, [key])
}

export default useKeyPress;