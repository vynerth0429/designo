import React from 'react';
import Image from 'next/image';

interface ComponentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string,
  className?: string,
}

function TextAreaComp(props: ComponentProps) {
  return (
    <div className={`w-full ${props.className}`}>
      <div className="w-full flex flex-row items-start border-white border-opacity-50 border-b pb-3 hover:border-opacity-100 focus-within:border-opacity-100">
        <textarea
          {...props}
          className={`h-full w-full flex-1 px-4 text-white placeholder-white placeholder-opacity-50 font-medium text-caption bg-transparent focus:outline-none resize-none`} />

        {
          props.error &&
          <div className="flex flex-row space-x-2 items-center mr-2">
            <span className="text-note italic text-white">
              { props.error }
            </span>
            <div className="relative bg-white rounded-full h-5 w-5 flex items-center justify-center">
              <Image
                src="/assets/contact/desktop/icon-error.svg"
                layout="fill"
                quality={100}
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default React.memo(TextAreaComp);
