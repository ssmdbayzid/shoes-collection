import React from 'react'
import { Header, Footer } from '../Component'
import Routers from '../Routers/Routers'

const Layout = () => {
  return (<div>
    <Header />
    <div>
      <Routers />
    </div>
    <Footer />
  </div>
  )
}

export default Layout