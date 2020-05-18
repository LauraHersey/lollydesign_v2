import React from 'react'

class ContactForm extends React.Component {
  render () {
    return (
      <div className='col-md-6'>
        <form className='form' action='/' name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <div className='field form-group'>
            <div className='control'>
              <label className='label' htmlFor='firstName'>First Name</label>
              <input id='firstName' className='input form-control' name='firstName' component='input' type='text' placeholder='First Name' required />
            </div>
          </div>
          <div className='field form-group'>
            <div className='control'>
              <label className='label' htmlFor='lastName'>Last Name</label>
              <input id='lastName' className='input form-control' name='lastName' component='input' type='text' placeholder='Last Name' />
            </div>
          </div>
          <div className='field form-group'>
            <div className='control'>
              <label className='label' htmlFor='email'>Email</label>
              <input id='email' className='input form-control' name='email' component='input' type='email' placeholder='Email Address' required />
            </div>
          </div>
          <div className='field form-group'>
            <div className='control'>
              <label className='label' htmlFor='message'>Message</label>
              <textarea id='message' className='textarea form-control' name='message' component='textarea' rows='4' cols='50' />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <button className='button is-link btn btn-primary'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

export default ContactForm
