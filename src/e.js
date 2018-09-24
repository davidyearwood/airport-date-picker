function e(tagName, attributes, text = "") {
    let element = document.createElement(tagName),
        textNode = (text) ? document.createTextNode(text) : "";

    for (let key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }

    if (textNode) {
        element.appendChild(textNode)
    }
    
    return element;
}

export default e; 