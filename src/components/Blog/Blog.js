import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blogs'>
            <div className='forBlog'>
                <h1>Blog Section</h1>
                <div className='questionAnswer'>
                        <div>
                        <h3>How does React work?</h3>
                        <p> <strong>Answer: </strong>Users can create a representation of a DOM node by declaring the Element function in React. Then HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript. In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.A React app usually has a single root DOM node. Rendering an element into the DOM will change the user interface of the page.Whenever a React component returns an element, the Virtual DOM will update the real DOM to match.</p>
                        </div>
                        
                        <div>
                        <h3>What is the difference between props and state?</h3>
                        <p><strong>Answer: Props: </strong>The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only. <br />
                    <strong>State: </strong>The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0). State is both read and write. </p>
                        </div>
                        
                        <div>
                        <h3>Where does useEffect except api data load? </h3>
                    <p><strong>Answer: </strong>It's the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
                        </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Blog;