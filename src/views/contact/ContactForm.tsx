import React from 'react';

import {
  Formik,
  Form,
  FormikProps,
} from 'formik';
import * as Yup from 'yup';

const kRequired = "Can't be empty";
const kInvalidEmail = "Please use a valid email address";

type TContactForm = {
  [key: string]: any,
  name: string,
  email: string,
  phone: string,
  message: string,
}

const InvoiceFormSchema =
  Yup.object()
    .shape<TContactForm>({
      name: Yup.string()
        .required(kRequired),
      email: Yup.string()
        .required(kRequired)
        .email(kInvalidEmail),
      phone: Yup.string()
        .optional(),
      message: Yup.string()
        .required(kRequired),
    });

import useBreakpoints from '../../hooks/useBreakpoints';
import { ContactData } from '../../data/contact-data';

import InputComp from '../../components/InputComp';
import TextAreaComp from '../../components/TextAreaComp';

import ButtonLight from '../button/ButtonLight';

function ContactForm() {
  const { breakpoint } =  useBreakpoints();
  const [imageBG, setImageBG] = React.useState('');
  const formRef = React.useRef<FormikProps<TContactForm>>(null);

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

      <Formik
        innerRef={formRef}
        enableReinitialize={true}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={InvoiceFormSchema}
        onSubmit={async (values: TContactForm, actions) => {

        }}>

        {(formProps: FormikProps<TContactForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
          } = formProps;

          return (
            <Form className="mt-12 md:mt-10 lg:mt-0 lg:flex-1">
              <div className="space-y-6">
                <div>
                  <InputComp
                    placeholder="Name"
                    name={'name'}
                    id={'name'}
                    error={
                      (errors.name && touched.name )
                        ? errors.name
                        : ''
                    }
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <InputComp
                    placeholder="Email Address"
                    name={'email'}
                    id={'email'}
                    error={
                      (errors.email && touched.email )
                        ? errors.email
                        : ''
                    }
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <InputComp
                    placeholder="Phone"
                    name={'phone'}
                    id={'phone'}
                    error={
                      (errors.phone && touched.phone )
                        ? errors.phone
                        : ''
                    }
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <TextAreaComp
                    rows={5}
                    placeholder="Your Message"
                    name={'message'}
                    id={'message'}
                    error={
                      (errors.message && touched.message )
                        ? errors.message
                        : ''
                    }
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="mt-10 text-center md:text-right md:mt-6">
                <div className="inline-block">
                  <ButtonLight label="Submit" onClick={() => {
                    formRef.current.handleSubmit();
                  }}/>
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ContactForm;
