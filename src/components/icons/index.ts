export const arrow = () => {
    return `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="2em" 
            height="2em" 
            viewBox="0 0 28 28" fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right">
            <polyline points="16 19 21 14 16 9"></polyline>
            <polyline points="9 19 14 14 9 9"></polyline>
        
        </svg>`
}
// <circle cx="14" cy="14" r="12">

export const arrowcircle = () => {
    return `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.5em" height="1.5em" 
            viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" 
            class="feather 
            feather-arrow-right-circle">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>`
}

export const home = () => {
    return `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.5em" height="1.5em" 
            viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" 
            class="feather feather-arrow-right-circle">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>`
}

export const sun = () => {
    return `<svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1.5em" height="1.5em" 
            viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" 
            class="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`
}

export const play = () => {
    return `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" class="feather feather-play">
            <polygon points="7 3 20 12 7 21 7 3"></polygon>
        </svg>`
}

export const stop = () => {
    return `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" class="feather feather-play">
            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        </svg>`
}

export const circle = () => {
    return `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" 
            stroke-linejoin="round" class="feather feather-play">
            <circle cx="12" cy="12" r="10"></circle>
        </svg>`
}

interface iconsInterface {
    [key: string]: () => string
}


export const icons: iconsInterface = {
    arrow,
    arrowcircle,
    play,
    stop,
    circle,
    home,
    sun
}