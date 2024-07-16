import React from 'react'
import "./CallToAction.css"
import RequestButton from '../../components/RequestButton'

function CallToAction() {
  return (
  <section className='call-to-action'>
    <div className='box-call-to-action'>
      <div className='heading-call-to-action'>
        <h3>Not sure about what you need?</h3>
        <p>Request a consultation so we offer our knowledge base to help you set up the best digital solution for your business</p>
      </div>
      <RequestButton text='request now' color="non-default" />
    </div>
  </section>
  )
}

export default CallToAction