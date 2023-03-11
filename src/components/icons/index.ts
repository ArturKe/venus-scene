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
            stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>
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


export const icons = {
    arrow,
    arrowcircle,
    play,
    stop,
    circle
}