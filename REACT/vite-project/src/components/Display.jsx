function Display ({displayData}) {
    console.log("Display component rendering...");

    return(
        <>
        <h1>First Name : {displayData.firstName}</h1>
        <h1>Last Name : {displayData.lastName}</h1>
        <h1>Email : {displayData.email}</h1>
        <h1>Password : {displayData.password}</h1>
        </>
    )
}

export default Display;