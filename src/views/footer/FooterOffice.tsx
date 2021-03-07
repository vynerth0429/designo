import React from 'react';

function FooterOffice() {
  return (
    <>
      <div className="flex flex-col text-white opacity-50 text-center space-y-1 md:text-left">
        <span className="font-bold">
          Designo Central Office
        </span>
        <span>
          3886 Wellington Street
        </span>
        <span>
          Toronto, Ontario M9C 3J5
        </span>
      </div>

      <div className="flex flex-col text-white opacity-50 text-center space-y-1 md:text-left">
        <span className="font-bold">
          Contact Us (Central Office)
        </span>
        <span>
          P : +1 253-863-8967
        </span>
        <span>
          M : contact@designo.co
        </span>
      </div>
    </>
  )
}

export default React.memo(FooterOffice);
