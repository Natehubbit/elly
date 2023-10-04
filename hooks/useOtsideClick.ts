import React, { EventHandler, MutableRefObject, RefObject, useEffect, useRef, useState } from 'react'

export const useOtsideClick = <T>(ref:MutableRefObject<T>,cb:()=>void,show=false) => {
    // const mounted = useRef(false)
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        // Bind the event listener'
        const onClickOutside = (event:any) => {
            if (ref.current && !(ref.current as any).contains(event.target)) {
                cb()
            }
        }
        if(show){
            document.addEventListener("mousedown", onClickOutside);
        }else document.removeEventListener('mousedown',onClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [ref,show]);
}
