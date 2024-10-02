import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import faq from '../assets/images/faq.jpg'
const Faqs=()=>{ 
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return( 
   <>
    <section id="faq" class="faq section bg-light">

      <div class="container-fluid">

        <div class="row gy-4">

          <div class="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

            <div class="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
              <h3><span >Frequently Asked </span><strong >Questions</strong></h3>
              <p>
              Learn all you need to know about digital marketing, its methodologies, and how to get started in this career.
              </p>
            </div>

       
      <Accordion open={open} toggle={toggle}   data-aos="fade-up" data-aos-delay="200">
       
          <AccordionHeader targetId="1" className='faq-item faq-active faq-container px-xl-5'><i class="fa-solid fa-circle-question icon1"> </i> Can social media marketing really help my business?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong className='faq-content'></strong><h6 className=' faq-container px-xl-5'>Most definitely! It’s been proven again and again by business after business. In fact, not utilizing social media marketing can actually harm your business, since having an online presence on social media is simply expected of any reputable firm these days.</h6>
            
          </AccordionBody>
       
          <AccordionHeader targetId="2" className='faq-item faq-active faq-container px-xl-5'><i class="fa-solid fa-circle-question icon1"> </i> Should we be using Google+ for marketing?</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong className='faq-content'></strong><h6 className=' faq-container px-xl-5'>Though it started out looking promising, Google+ is one platform we don’t recommend using for marketing purposes anymore.</h6>
          </AccordionBody>
        
          <AccordionHeader targetId="3" className='faq-item faq-active faq-container px-xl-5'><i class="fa-solid fa-circle-question icon1"></i> Can I buy a list when I’m just starting out with email marketing?</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong></strong><h6 className=' faq-container px-xl-5'>It can be tempting, but you’ve got to resist that temptation. The only way to get an email subscriber list that will be beneficial to your company is to grow it organically</h6>
          </AccordionBody>
        
      </Accordion>
      <div>
    </div>

            

          </div>

          <div class="col-lg-5 order-1 order-lg-2">
            <img src={faq} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
          </div>
        </div>

      </div>

    </section>
        </>
    )
};
export default Faqs;