# React Criptos

Install project with Vite
> npm init vite@latest

Install Dependencies
> npm install

Run Server 
> npm run dev 

We use to this project Style Components
> npm install @emotion/react @emotion/styled

### Style Components

**What is a Style Component?**
* In JSX we can do HTML with JS expression, but same is possible make a html element with component syntax and add css properties

* Then instead of using a stylesheet or external librery, we can write CSS code of each component

* A problem solved this metod, if we have a module and we need deleted, we do not look for a stylesheet, because the styles is in the module

**How write this metod?**

~~~
const Heading = styled.h1`
    font-size: 2em;
    text-transform: uppercase;
`;

<Heading>Our Products</Heading>
~~~

**Properties**

* They style components supports media querys

**My Self Hooks**

* *Why?*

    * Well, sometime i wants make our self hooks, a reason one for would is re-use the same fuction

* *Some Ways To Use*
    * The hooks usually are written with camelcase, and start with use and then the name of the hook
    * They hooks syntax is similar to component, but they do not have a return, is more similar like a object, we want reutrn the fuction or functions in an array 

### APIs

API = Application Programming Interface

Functions or methods with a library for to be uses for other software as a interface abstraction

Api has available resources which be saved in other database

#### Some Methods

Fetch API
Some APIs require a key, and others has protected with CORS
External Librery Axios