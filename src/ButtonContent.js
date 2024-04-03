import React, { useEffect, useState } from 'react';
import './assets/outline.ttf';
import './ButtonContent.css';

function ButtonContent() {
  const [showServices, setShowServices] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showBrochure, setShowBrochure] = useState(false);
  
  useEffect(() => {
    document.querySelectorAll('.button').forEach(element => {
      element.setAttribute('data-content', element.innerHTML);
    });
  }, []); 

  return (
    <div>
      <div className="buttoncontainer">
        <button className="button" onClick={() => {
          setShowServices(true);
          setShowHistory(false);
          setShowContact(false);
          setShowBrochure(false);
        }}>Services</button>
        <button className="button" onClick={() => {
          setShowServices(false);
          setShowHistory(true);
          setShowContact(false);
          setShowBrochure(false);
        }}>History</button>
        <button className="button" onClick={() => {
          setShowServices(false);
          setShowHistory(false);
          setShowContact(false);
          setShowBrochure(true);
        }}>Reviews</button>
        <button className="button" onClick={() => {
          setShowServices(false);
          setShowHistory(false);
          setShowContact(true);
          setShowBrochure(false);
        }}>Contact</button>
      </div>

      <div>
        {showServices && <div className="services"></div>}
        {showHistory && <div className="history"></div>}
        {showBrochure && <div className="reviews"></div>}
        {showContact && (
          <div className="contact">
            <a className="phone" href="tel:17154798733">(715)479-8733</a>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.6244443696246!2d-89.46017392404717!3d45.89882377108432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d55b600a8da3659%3A0xfd3d8eff458eafb2!2sLumber%20Jack&#39;s%20Tree%20Services!5e0!3m2!1sen!2sus!4v1712018506366!5m2!1sen!2sus"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="address">
              7736 HWY 70 EAST <br></br>ST GERMAIN WI 54558
            </div>
            <div className="facebooktitle">Facebook:</div>
<iframe className= "facebook" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61557889832818%26mibextid%3DLQQJ4d&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        )}
      </div>
    </div>
  );
}



export default ButtonContent;