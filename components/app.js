import { Component, createElement } from '../lib/react/index.js'
// import User from './user.js'
// import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'

const element = createElement('h1', {
    class: 'title'
}, 'Hola mundo from createElement')
console.log(element);

class App extends Component {
    render() {
        return `
        <div class="app">
           <h1>Hola mundo</h1>
        </div>
        `
    }
}

export default App

// ${new Wrapper({
//     children: `
//         ${new User({
//         avatar: './images/ash.jpg',
//         name: 'Ash',
//     }).render()}
//         ${new UserStyled({
//         avatar: './images/ash.jpg',
//         name: 'Ash',
//     }).render()}
//     `
// }).render()
//     }