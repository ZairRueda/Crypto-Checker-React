# React Criptos

Install project with Vite
> npm init vite@latest

Install Dependencies
> npm install

Run Server 
> npm run dev 

We use to this project Style Components
> npm install @emotion/react @emotion/styled

*What is a Style Component?*
* In JSX we can do HTML with JS expression, but same is possible make a html element with component syntax and add css properties

* Then instead of using a stylesheet or external librery, we can write CSS code of each component

* A problem solved this metod, if we have a module and we need deleted, we do not look for a stylesheet, because the styles is in the module

*How write this metod?*

~~~
const Heading = styled.h1`
    font-size: 2em;
    text-transform: uppercase;
`;

<Heading>Our Products</Heading>
~~~

