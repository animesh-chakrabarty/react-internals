Overview : https://www.youtube.com/watch?v=za2FZ8QCE18

### 1. Basics
react is a library not a framework , that let users create UI. It is combined with a renderer to render that UI on screen.
Renderer for web - React-DOM
Renderer for android - React-Native

react doesn't understand JSX . The JSX code we write is converted into react Elements (details on point 3) by babel.

CRA , VITE - React + React-DOM + live server + babel + bundler

### 2. React Component
JS functions that returns JSX.

The relation between React Component and React Element is the same as the relation between HTML and JS DOM Object.

### 3. React Element
Elements are typically created using JSX (JavaScript XML), a syntax extension in JavaScript that allows you to write HTML-like code within your JavaScript files.

React elements can be created in 2 ways -

1.write JSX , babel will convert it into react element.
ex :

```
const element = <h1>Hello, World!</h1>;
```

Internally tools like babel Converts this JSX Code into React.createElement function calls similiar to the example 2 below.

2.create react element with React.createElement(type,props,children).
ex:

```
const element = React.createElement('h1', null, 'Hello, World!');
```

React element for this two corresponding code will look like these -

```
{
    $$typeof:Symbol(react.element),
    key:null,
    props:{children:"Hello, World!"},
    ref:null,
    type:"h1",
}
```

### 4. React.createElement
Here, React.createElement is used to create a react element . It takes three parameters -
1.Type - HTML Tag / React Fragment
2.Props - Classname / id / onClick / onChange ...
3.Children - Main Content inside the tag

Let's say in App.jsx file we will return a h1 tag with content "This is Heading"

Usual Method (using JSX) :

```
return (
    <div className="heading" key="1">
        <h1>This is Heading</h1>
    </div>
)
```

Another Method (using JS - React.createElement) :

```
return React.createElement(
    "div",
    { className: "heading", key: "1" },
    React.createElement("h1", null, "This is Heading")
);
```

### 5. Virtual DOM :
When we render an application UI , React creates a virtual DOM tree representing that UI and stores it in memory. On the next update, or in other words, when the data that renders the app changes, React will automatically create a new virtual DOM tree for the update.

After React creates the new virtual DOM tree, it compares it to the previous snapshot using a diffing algorithm called reconciliation to figure out what changes are necessary.

After the reconciliation process, React uses a renderer library like ReactDOM, which takes the differ information to update the rendered app. This library ensures that the actual DOM only receives and repaints the updated node or nodes:

For more details go through this article - https://blog.logrocket.com/virtual-dom-react/

### 5. Reconciliation :
Reconciliation in React refers to the process of efficiently updating the UI to reflect changes in the component state.

Here's how it works:

- Virtual DOM: React works with a lightweight, in-memory representation of the real DOM called the virtual DOM. This virtual DOM is much faster to manipulate than the actual DOM.
- State change: When something triggers a state change in a component, React creates a new virtual DOM tree based on the updated state.
- Diffing: React then compares the old and new virtual DOM trees using a diffing algorithm. This algorithm efficiently identifies the minimal set of changes required to update the actual DOM to match the new state.
- Patching: Based on the diff result, React applies only the necessary changes to the actual DOM. This could involve creating new elements, updating existing ones, or deleting old ones.

### 5. Diffing algorithm :
The diffing algorithm is a part of reconciliation that specifically deals with comparing two versions of the Virtual DOM (current and previous) to find the minimal set of changes needed to update the actual DOM.

Go through this article - https://dev.to/ridhamz/the-reconciliation-algorithm-5bab

### 6. React Re-render :

There are three steps in a re-render -
1.trigger
2.render
3.commit
Go through this article - https://iampradip.hashnode.dev/understanding-react-render-and-commit-phase-reconciliation

### 7. Batch Updates :

Go through this article - https://medium.com/swlh/react-state-batch-update-b1b61bd28cd2

### 8. React Fiber:

Tejas Kumar (yt) :
https://www.youtube.com/watch?v=rKk4XJYzSQA
