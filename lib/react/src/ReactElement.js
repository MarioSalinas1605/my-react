function setProperties(prop, attribute, element) {
    return element.setAttribute(prop, attribute)
}

export function createElement(type, props, content) {
    const element = document.createElement(type)

    //Content
    if (content) {
        element.textContent = content
    }

    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))
    return element
}