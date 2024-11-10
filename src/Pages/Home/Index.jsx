import React from 'react';
import './Styels.css';
import hodaImg from "../Images/ts9l37.jpg"





export default function Index() {
  return (
    <div>
      
<div className='First_text'>
<h4 className='hi'>hi, I'm Nazmol</h4>
      <h1 className='build'>I build beautiful websites <br/>
      for my clients</h1>
      <h4>see my Portfolio</h4>
</div>

<div className='Secand_Con'>
<div  className='Secand_two'>
<img src={hodaImg} className='Firs_img'/>
<h2>My ​name is Sirajum Nazmol hoda</h2>
<p className='freelance'>I’m A freelance web developer with years of experience. As a web developer, 
    I have experience with HTML, CSS, Bootstrap, WordPress, JavaScript, Jquery, 
    and PHP. Most of my skills base on WordPress, and I love to use it to develop 
    websites. My dream is to bring the web to everyone. I am available for any job 
    opportunity that suits my interests.</p>

    <h2 className='Contact_Me'>Contact Me</h2>
    <h3>FAQ</h3>
</div>

</div>


    </div>
  )
}
