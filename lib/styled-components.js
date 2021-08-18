const styled = {
    h1: function (styles) {
        return content => `<h1 style="${styles}">${content}</h1>`
    },
    div: function (styles) {
        return content => `<div style="${styles}">${content}</div>`
    },
    img: function (styles) {
        return content => `<img style="${styles}" ${content}/>`
    }
}

export default styled