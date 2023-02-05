import { useEffect } from "react"

export const useTitle = (title, dependecies) => {
    if(!Array.isArray(dependecies)) {
        console.error('No se paso un Array como dependecias al useTitle')
        dependecies = []
    }
    
    useEffect(() => {
        document.title = title 
    }, dependecies) //eslint-disable-line
}