import link from 'next/link'
import React from 'react'
import About from './About/page'
import Home from './Home/page'
import Contact from './Contact/page'
import Services from './Services/page'


export default function page() {
  return (
    <div>  
      <div> 
      <a href='/About' target='_blank'>Go to About page</a>
      </div>
      <div>
      <a href="/Home" target="_blank">Go to Home page</a>
      </div>
      <div>
      <a href="/Contact" target= "_blank">Go to Contact page</a>
      </div>
      <div>
      <a href="/Services" target="_blank">Go to Services page</a>
      </div>
    </div>
  )
}
