import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
    return (
        <Container className="blog">
            <h3>Blog</h3>
            <div className="blog-content">
                <h4 className="question">
                    What is the purpose of the react router?
                </h4>
                <div className="answer">
                    <p>
                        React Router is an API for React applications. Most
                        current code is written with React Router 3, although
                        version 4 has been released. React Router uses dynamic
                        routing. When we say dynamic routing, we mean routing
                        that takes place as your app is rendering, not in a
                        configuration or convention outside of a running app.
                        That means almost everything is a component in React
                        Router.
                    </p>
                    <p>
                        React Router, and dynamic, client-side routing, allows
                        us to build a single-page web application with
                        navigation without the page refreshing as the user
                        navigates. React Router uses component structure to call
                        components, which display the appropriate information.
                        By preventing a page refresh, and using Router or Link,
                        which is explained in more depth below, the flash of a
                        white screen or blank page is prevented. This is one
                        increasingly common way of having a more seamless user
                        experience. React router also allows the user to utilize
                        browser functionality like the back button and the
                        refresh page while maintaining the correct view of the
                        application.
                    </p>
                </div>
            </div>
            <div>
                <h4 className="question">How does context api work?</h4>
                <div className="answer">
                    <p>
                        The React Context API is a way for a React app to
                        effectively produce global variables that can be passed
                        around. This is the alternative to "prop drilling" or
                        moving props from grandparent to child to parent, and so
                        on. Context is also touted as an easier, lighter
                        approach to state management using Redux.
                    </p>
                    <p>
                        React.createContext() is all you need. It returns a
                        consumer and a provider. Provider is a component that as
                        it's names suggests provides the state to its children.
                        It will hold the "store" and be the parent of all the
                        components that might need that store. Consumer as it so
                        happens is a component that consumes and uses the state.
                        More information can be found on React's documentation
                        page
                    </p>
                </div>
            </div>
            <div>
                <h4 className="question">Describe about useRef react hook.</h4>
                <div className="answer">
                    <p>
                        useRef returns a mutable ref object whose .current
                        property is initialized to the passed argument
                        (initialValue). The returned object will persist for the
                        full lifetime of the component.
                    </p>
                    <p>
                        Essentially, useRef is like a “box” that can hold a
                        mutable value in its .current property. You might be
                        familiar with refs primarily as a way to access the DOM.
                        If you pass a ref object to React with ref = myRef,
                        React will set its .current property to the
                        corresponding DOM node whenever that node changes.
                        However, useRef() is useful for more than the ref
                        attribute. It’s handy for keeping any mutable value
                        around similar to how you’d use instance fields in
                        classes. This works because useRef() creates a plain
                        JavaScript object. The only difference between useRef()
                        and creating a current object yourself is that useRef
                        will give you the same ref object on every render. Keep
                        in mind that useRef doesn’t notify you when its content
                        changes. Mutating the .current property doesn’t cause a
                        re-render. If you want to run some code when React
                        attaches or detaches a ref to a DOM node, you may want
                        to use a callback ref instead.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Blog;
