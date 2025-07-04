// This page is all about of only a teplate where Navbar and Footer is a template and all other components will be in between of that 
import Navbar from './Navbar'
import Footer from './Footer'


function Combined({children}) {
  
  return (
    <div className='min-h-screen w-full relative flex flex-col overflow-x-hidden ' >
      <Navbar/>
       {children}
       <Footer/>
    </div>
  )
}

export default Combined
