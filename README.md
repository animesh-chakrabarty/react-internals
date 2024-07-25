Reference :
1. JSX, React.createElement(), React element,Reconciliation, Virtual DOM, Diffing Algorithm, Renderer : 
   [video](https://www.youtube.com/watch?v=7YhdqIR2Yzo&list=PLxRVWC-K96b0ktvhd16l3xA6gncuGP7gJ&index=1)
2. Virtual DOM : [article](https://blog.logrocket.com/virtual-dom-react/)
3. Fiber reconciler : [article](https://www.velotio.com/engineering-blog/react-fiber-algorithm)

## JSX, React.createElement(), React element, Babel :
JSX stands for JavaScript XML and it is an XML-like syntax extension to ECMAScript. Basically it just provides the syntactic sugar for the React.createElement(type, props, ...children) function, giving us expressiveness of JavaScript along with HTML like template syntax.

In the example below, 
The app component can return the UI in two ways -
1. using JSX syntax
2. using React.createElement()

- Using the JSX syntax the code will look like these :

```JS
export default function App() {
  return (
      <h1 className="greeting">Hello, this is a JSX Code!</h1>
  );
}
```
- Using the React.createElement function it will look like these :

```JS
import React from 'react';

export default function App() {
  return React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, this is a JSX Code!'
  );
}
```

Internally both codes described above returns **React element**. This conversion from JSX to react element is done by **babel compiler**. 

When Babel processes JSX code, it transforms JSX syntax into React.createElement calls, which ultimately create React elements. 

React Element is a object that looks like these for the above two codes -
```JS
{
    $$typeof : Symbol(react.element)
    type : "h1",
    props : {
        childern : "Hello, this is a JSX Code!",
        className : "greeting",
    },
    ref : null,
    key : null,
}
``` 

## Virtual DOM :
The virtual DOM is a much lighter replica of the actual DOM in the form of objects. The virtual DOM can be saved in the browser memory and doesn’t directly change what is shown on the user’s browser.

## Reconciliation, Diffing algorithm :
- Reconciliation :  It is the process for comparing the virtual DOM to the real DOM and calculating the minimum number of changes required to update the actual DOM. 

- Initial render : When the web app gets rendered on the client for the first time, React creates a tree like representation with the React elements in the memeory (virtual DOM). And it inserts the whole virtual DOM into real DOM. 
  
When any state is updated or for any other reason a re-render is triggered then comes the role of reconciliation and diffing algorithm.

- Re-render : When rerender is triggered, React creates a new virtual DOM(NVD) representing the new code. Then it compares the NVD to the OVD(Old Virtual DOM) & using the diffing algorithm it identifies the changes & only updates those parts of the real DOM which are changed. This complete process is called reconciliation. 

- Diffing Algorithm : This algorithm is responsible for comparing the current virtual DOM with the previous one and identifying the minimum number of DOM operations required to update the UI. 

![Reconciliation Process](https://blog.logrocket.com/wp-content/uploads/2023/01/5-react-actual-dom-update-repaint.png)
  
## Assumptions in diffing algorithm :
1. Two elements of different types will produce different trees.
2. When we have a list of child elements which often changes, we should provide an unique "key" as prop.

## Reconciler :
Before react 16 - Stack reconcilier 
From react 16 - Fiber reconcilier
   
## Reconciler v/s Renderer :
- reconciler figures out the changes between previous version of virtual DOM and the current version of virtual DOM
- renderer manipulates to real DOM to show the changes on the UI.
   
## Fiber reconciler :
- It's a combination of fiber data structure and the diffing algorithm. 

