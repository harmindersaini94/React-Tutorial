import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
        <>
        {/* Now is the dynamic way of doing things, like we knw that header and footer will be on all the pages, and the middle part is seperate
        so instead of putting the header and footer in each component, why not put it in one place and dynamically call the middle part
        this dynamic call is doe by using the outlet component of react router
        
        Outlet jo react routerprovide kr ta hai ussi k kaaarn hum nesting kr paate hai routes ki just like we did in main.jsx
        */}
            <Header />
            <Outlet />  
            <Footer />
        </>
  )
}

export default Layout
