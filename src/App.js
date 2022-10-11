import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Main from "./layout/Main";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/home",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>,
                },
                {
                    path: "/topics",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Topics></Topics>,
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>,
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>,
                },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
