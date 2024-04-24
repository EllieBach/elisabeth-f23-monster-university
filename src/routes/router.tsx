import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import NotFound from "./NotFound";
import Home from "./Home";
import Students from "./Students";
import AddStudents from "./AddStudent";
import AboutUs from "./AboutUs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement:<NotFound />,
        children: [
            {
                path:"/home",
                element:<Home/>,
                children: [
                    {
                       path:"/homes/:homeId",
                       element: <Home />,

                    },
                
                ],

            },

            { path: "/", element: <Home /> },
            { path: "students", element: <Students /> },
            { path: "add", element: <AddStudents /> },
            { path: "about", element: <AboutUs /> }

        ],

    },
])
 

export default router