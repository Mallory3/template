export function Hello(e) {
    const target = e.target

    target.parentElement.className += " hello";
}

export function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}