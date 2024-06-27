import React from "react";

const userContext = React.createContext()
export default userContext;

// Now this is the first part of the context, now this will gove us a provider.
// By provider we mean that all the components that are put inside this provider will get the access to all the data that is in the context provider 
{/* <userContext>
    <Login />
    <Card >
        <Data />
    </Card>
</userContext> */}