import React from 'react'

const Contact = () => {
  return (
    <div id='contactform' className='max-w-[1240px] m-auto p-4 h-screen py-16'>
      <h1 className='text-2xl font-bold text-center p-4'>Reach out to us</h1>
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input className='border shadow-lg p-3' type="text" placeholder='Name' />
          <input id='email' className='border shadow-lg p-3' type="email" placeholder='Email' />
        </div>
        <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
        <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded border shadow-lg p-3 w-full mt-2' onClick={sendEmail}>Submit</button>
      </form>
    </div>
  )
}
const sendEmail = () => {
  Email.send({
    SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: 'them@website.com',
    From: document.getElementById("email"),
    Subject: "This is the subject",
    Body: "And this is the body",
    Attachments: [
      {
        name: "smtpjs.png",
        path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
      }]
  }).then(
    message => alert(message)
  );
}

export default Contact