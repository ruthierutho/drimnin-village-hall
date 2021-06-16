import React from 'react';
import arial from '../Static/ariel-view.jpg'



const Contact = () => {
    return (
        <>  
            <h2>Where to find us:</h2>
            <p>
            Drimnin Village Hall sits on the sound of Mull, looking across to Tobermory.  It’s 12 miles from Lochaline along the B849.  
                <br></br>If you take the steep left turn at the crossroads towards Bonnavullin then the Village Hall is the first turning on the right.
                </p>
        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2195.698903044126!2d-5.9798353840864324!3d56.61065108079149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488bf017df7bf319%3A0x6308e0a0a33ec3d2!2sDrimnin%20Village%20Hall!5e0!3m2!1sen!2suk!4v1623337420092!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy">
            </iframe>
            <p>
                Address:
                <br></br>
                Drimnin Village Hall
                <br></br>
                Bonnavullin
                <br></br>
                Morvern
                <br></br>
                PA80 5XZ
                <br></br>
                <p>drimninhall@googlemail.com</p>
                

                Let us know if you’d like to use the Hall for an event or if you need any more information.
                <br></br>
               
                <br></br>
                <h4>Handy links:</h4>

                <a href="http://www.calmac.co.uk/">Calmac Ferries</a>
                <br></br>
                <a href="http://www.shielbuses.co.uk/">Sheil Buses</a>
                <br></br>
                <a href="http://www.morverngalaweek.co.uk/">Morvern Gala Week</a>
                <br></br>
                <a href="https://www.facebook.com/pages/Drimnin-Sealink-Limited/317606168417686?fref=ts">Drimnin Sealink</a>

             </p>
             <img src={arial} alt="arial image of Drimni by Jo Gale" />
             <br></br>
             <i>photo credit Jo Gale</i>
        </>
    )
}

export default Contact;