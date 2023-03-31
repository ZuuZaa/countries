import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../components/MainLayout"
import { Home } from "../pages/Home"



export const Routing = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}