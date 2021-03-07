import React from 'react';

import useBreakpoints from '../../hooks/useBreakpoints';
import { ContactData } from '../../data/contact-data';

import InputComp from '../../components/InputComp';
import TextAreaComp from '../../components/TextAreaComp';

import ButtonLight from '../button/ButtonLight';

function ContactForm() {
  const { breakpoint } =  useBreakpoints();
  const [imageBG, setImageBG] = React.useState('');

  React.useEffect(() => {
    if (breakpoint === 'xxs') {
      setImageBG(ContactData.imageBG.mobile);
    } else if (breakpoint === 'xs') {
      setImageBG(ContactData.imageBG.mobile);
    } else if (breakpoint === 'sm') {
      setImageBG(ContactData.imageBG.mobile);
    } else if (breakpoint === 'md') {
      setImageBG(ContactData.imageBG.tablet);
    } else if (breakpoint === 'lg') {
      setImageBG(ContactData.imageBG.desktop);
    } else if (breakpoint === 'xl') {
      setImageBG(ContactData.imageBG.desktop);
    } else if (breakpoint === '2xl') {
      setImageBG(ContactData.imageBG.desktop);
    } else {
      setImageBG(ContactData.imageBG.desktop);
    }
  }, [breakpoint])

  return (
    <div
      className="relative flex flex-col bg-peach py-16 px-6 overflow-hidden bg-left-top bg-no-repeat md:rounded-2xl md:-bg-left-86-top-48 md:px-12 md:py-16 lg:flex-row lg:space-x-10 lg:bg-left-bottom lg:px-24 lg:py-14"
      style={{
        backgroundImage: "url('"+ imageBG +"')"
      }}>
      <div className="space-y-6 flex flex-col md:space-y-8 lg:flex-1 lg:justify-center">
        <div className="text-center md:text-left">
          <span className="text-h3 text-white font-medium md:text-h1">
            { ContactData.title }
          </span>
        </div>

        <div className="text-center md:text-left">
          <span className="text-caption text-white md:text-base">
            { ContactData.description }
          </span>
        </div>
      </div>

      <div className="mt-12 md:mt-10 lg:mt-0 lg:flex-1">
        <div className="space-y-6">
          <div>
            <InputComp
              placeholder="Name"
            />
          </div>
          <div>
            <InputComp
              placeholder="Email Address"
            />
          </div>
          <div>
            <InputComp
              placeholder="Phone"
            />
          </div>
          <div>
            <TextAreaComp
              placeholder="Your Message"
              rows={5}
            />
          </div>
        </div>

        <div className="mt-10 text-center md:text-right md:mt-6">
          <div className="inline-block">
            <ButtonLight label="Submit" onClick={null}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
