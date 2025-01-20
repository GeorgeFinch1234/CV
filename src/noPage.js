import Nav from "./navigation"
export default function NoPage() {
    return (
        <>
        //need as called outside of the route which has the nav
        <Nav></Nav>
            <h1>No page found</h1>
        </>
    )
}