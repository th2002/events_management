import React from 'react';
import Logo from '../Logo';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <>
      <footer className="mt-44 h-auto w-full overflow-x-hidden bg-thirdground px-10 pb-10 pt-20 md:px-[80px] lg:px-[150px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          <div className="flex items-start">
            <Logo />
          </div>

          <ul className="flex flex-col justify-start gap-3 text-sm text-white">
            <span className="text-base font-bold">Categories</span>
            <li>All</li>
            <li>Music</li>
            <li>Sport</li>
            <li>Exbition</li>
            <li>Business</li>
            <li>Photography</li>
          </ul>

          <ul className="flex flex-col justify-start gap-3 text-sm text-white">
            <span className="text-base font-bold">Resources</span>
            <li>User guildes</li>
            <li>Help center</li>
            <li>Partners</li>
            <li>Taxes</li>
          </ul>

          <ul className="flex flex-col justify-start gap-3 text-sm text-white">
            <span className="text-base font-bold">Company</span>
            <li>About</li>
            <li>Join us</li>
          </ul>

          <div className="flex flex-col justify-start gap-3">
            <span className="text-base font-bold text-primary">
              Stay in the loop
            </span>
            <p className="mt-2 text-xs text-white">
              For product announcements and exclusive insights
            </p>

            <div className="flex">
              <div className="relative">
                <input
                  type="email"
                  spellCheck="false"
                  placeholder="Input your email address"
                  className="overflow-hidden rounded-bl-xl rounded-tl-xl border-2 border-primary bg-thirdground py-4 pl-10 pr-3 outline-none"
                />
                <CiMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                  size={24}
                />
              </div>
              <button className="flex-1 rounded-br-lg rounded-tr-lg bg-primary text-xs text-white md:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
