import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Topics from "./components/Topics/Topics";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Main from "./layout/Main";
import Quizzes from "./components/Quizzes/Quizzes";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>,
                },
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
                    path: "topics/:id",
                    loader: async ({ params }) => {
                        return fetch(
                            `https://openapi.programming-hero.com/api/quiz/${params.id}`
                        );
                    },
                    element: <Quizzes></Quizzes>,
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
