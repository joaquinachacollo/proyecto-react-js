import Navbar from "./Navbar"

export const Layout = ({Children}) => {
    return(
        <>
            <Navbar/>
            {Children}
        </>
    )
}