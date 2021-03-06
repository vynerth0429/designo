import React from 'react';
import Image from 'next/image';

function SocialMedia() {
  return (
    <div className="flex items-center space-x-4">
      <a href="/">
        <Image
          src="/assets/shared/desktop/icon-facebook.svg"
          alt="Dark logo"
          quality={100}
          width="24px"
          height="24px"
          className="cursor-pointer hover:opacity-75"
        />
      </a>

      <a href="/">
        <Image
          src="/assets/shared/desktop/icon-youtube.svg"
          alt="Dark logo"
          quality={100}
          width="24px"
          height="24px"
          className="cursor-pointer hover:opacity-75"
        />
      </a>

      <a href="/">
        <Image
          src="/assets/shared/desktop/icon-twitter.svg"
          alt="Dark logo"
          quality={100}
          width="24px"
          height="24px"
          className="cursor-pointer hover:opacity-75"
        />
      </a>

      <a href="/">
        <Image
          src="/assets/shared/desktop/icon-pinterest.svg"
          alt="Dark logo"
          quality={100}
          width="24px"
          height="24px"
          className="cursor-pointer hover:opacity-75"
        />
      </a>

      <a href="/">
        <Image
          src="/assets/shared/desktop/icon-instagram.svg"
          alt="Dark logo"
          quality={100}
          width="24px"
          height="24px"
          className="cursor-pointer hover:opacity-75"
        />
      </a>
    </div>
  )
}

export default React.memo(SocialMedia);
