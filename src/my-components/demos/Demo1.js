//Import dependencies, components and images.
import { useState, useEffect } from 'react';
import phone1 from "../Images/Phones/pexels-essow-k-251295-1042143.jpg" //All images are royalty free and taken from pexels.com
import phone2 from "../Images/Phones/pexels-fotios-photos-1092644.jpg"
import phone3 from "../Images/Phones/pexels-ozgomz-837268.jpg"
import phone4 from "../Images/Phones/pexels-solliefoto-336948.jpg"
import phone5 from "../Images/Phones/pexels-tracy-le-blanc-67789-607812.jpg"


// Demo 1 is a manual and automatic slideshow of cellphones.
// Demo 1 function
function Demo1() {

  const phonesArray = [phone1, phone2, phone3, phone4, phone5]; // Moving forward it would be a good idea to have some information about each phone held in the array.
  const [manPhoneIndex, setManPhoneIndex] = useState(0);
  const [autoPhoneIndex, setAutoPhoneIndex] = useState(0);

  // If the next button is pressed the index changes up one or back to zero if it's at the end
  // Otherwise you can assume the previous button was pressed in which case the index is
  // reduced by one or back to the end if it was at 0.
  const changeManSlide = (buttonType) => {
    if (buttonType === "next") {
      if (manPhoneIndex >= (phonesArray.length - 1)) {
        setManPhoneIndex(0);
      } else {
        setManPhoneIndex(manPhoneIndex + 1);
      }

    } else {
      if (manPhoneIndex <= 0) {
        setManPhoneIndex(phonesArray.length -1);
      } else {
        setManPhoneIndex(manPhoneIndex - 1);
      }
    }
  }

  let changeAutoSlide = setInterval(() => {
    if (autoPhoneIndex >= (phonesArray.length - 1)) {
      setAutoPhoneIndex(0);
    } else {
      setAutoPhoneIndex(autoPhoneIndex + 1);
    }
  }, 5000); // 5000 is 5 seconds before looping.


  return (<>
  
    <div>
    <h3>Cellphone slideshow</h3>


    <section id="manualSlideshow" class="col-12" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <button onClick={() => changeManSlide("previous")} style={{marginRight:"10px", width:'128px', padding:'12px 0px'}}>Previous Slide</button> {/*The buttons were both given 128px width so that they're the same size otherwise the previous button was bigger and pushed the image to the right making it out of line with the automatic one. */}
    <img src={phonesArray[manPhoneIndex]} alt="Cellphone" style={{ maxWidth:"80vw" }} />
    <button onClick={() => changeManSlide("next")} style={{marginLeft:"10px", width:'128px', padding:"12px 0px"}}>Next Slide</button>
    </section>

    <section id="autoSlideshow" class="col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src={phonesArray[autoPhoneIndex]} alt="Cellphone" style={{ maxWidth: "80vw"}} />
    </section>

  </div>

  </>)
};

export default Demo1;