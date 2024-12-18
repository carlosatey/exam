import { Route, Routes, Navigate } from "react-router-dom"
import {Home} from "../pages/Home"
import {Exam}from "../pages/Exam"
import { useContext } from "react"
import { DataContext } from "../context/useContext"

const RouterController = () => {
    const {data} = useContext(DataContext)

    return (
        <Routes>
            <Route>
              <Route path="/" element={<Home/>} />
              <Route path="/exam"  element={ data.preguntas.length ? <Exam/> : <Navigate to="/" replace={true} />} />
            </Route>
        </Routes>
    )
}

export {RouterController}