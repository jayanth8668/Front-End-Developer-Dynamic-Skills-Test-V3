import React, { useState } from 'react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 pb-2 px-4 md:px-8 max-w-[1600px] mx-auto">
      <nav className="bg-white rounded-[70px] px-6 py-3.5 shadow-[0_1px_8px_rgba(0,0,0,0.04)] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center pl-2">
          <a href="#" className="flex items-center focus:outline-none" aria-label="TechCare Home">
            <img
              src="/assets/Logo.svg"
              alt="TechCare Logo"
              className="h-8 md:h-9 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
          <a
            href="#overview"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#072635] hover:bg-[#F6F7F8] transition-colors"
          >
            <img src="/assets/HomeIcon.svg" alt="" className="w-4 h-4" />
            <span>Overview</span>
          </a>

          <a
            href="#patients"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold text-[#072635] bg-[#01F0D0] transition-colors shadow-xs"
          >
            <img src="/assets/PatientIcon.svg" alt="" className="w-4 h-4" />
            <span>Patients</span>
          </a>

          <a
            href="#schedule"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#072635] hover:bg-[#F6F7F8] transition-colors"
          >
            <img src="/assets/CalenderIcon.svg" alt="" className="w-4 h-4" />
            <span>Schedule</span>
          </a>

          <a
            href="#message"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#072635] hover:bg-[#F6F7F8] transition-colors"
          >
            <img src="/assets/MessageIcon.svg" alt="" className="w-4 h-4" />
            <span>Message</span>
          </a>

          <a
            href="#transactions"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-bold text-[#072635] hover:bg-[#F6F7F8] transition-colors"
          >
            <img src="/assets/CreditCardIcon.svg" alt="" className="w-4 h-4" />
            <span>Transactions</span>
          </a>
        </div>

        {/* Doctor Profile & Action Controls */}
        <div className="flex items-center gap-3 pr-2">
          <div className="flex items-center gap-3">
            <img
              src="/assets/DrJose.png"
              alt="Dr. Jose Simmons"
              className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shrink-0"
            />
            <div className="text-left hidden sm:block">
              <p className="text-sm font-bold text-[#072635] leading-tight whitespace-nowrap">
                Dr. Jose Simmons
              </p>
              <p className="text-xs text-[#707070] font-normal leading-tight mt-0.5 whitespace-nowrap">
                General Practitioner
              </p>
            </div>
          </div>

          <div className="h-8 w-[1px] bg-[#EDEDED] mx-1 hidden sm:block"></div>

          <div className="flex items-center gap-2">
         

            <button
              type="button"
              className="p-1.5 rounded-full hover:bg-[#F6F7F8] transition-colors focus:outline-none"
              aria-label="Settings"
            >
              <img src="/assets/SettingsIcon.svg" alt="" className="w-4.5 h-4.5" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded-full hover:bg-[#F6F7F8] transition-colors focus:outline-none"
              aria-label="More options"
            >
              <img src="/assets/MoreIcon.svg" alt="" className="w-1 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 ml-1 text-[#072635] hover:bg-[#F6F7F8] rounded-full focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer/Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-lg border border-[#EDEDED] p-4 space-y-2">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#072635] hover:bg-[#F6F7F8]"
          >
            <img src="/assets/HomeIcon.svg" alt="" className="w-4 h-4" />
            <span>Overview</span>
          </a>
          <a
            href="#patients"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#072635] bg-[#01F0D0]"
          >
            <img src="/assets/PatientIcon.svg" alt="" className="w-4 h-4" />
            <span>Patients</span>
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#072635] hover:bg-[#F6F7F8]"
          >
            <img src="/assets/CalenderIcon.svg" alt="" className="w-4 h-4" />
            <span>Schedule</span>
          </a>
          <a
            href="#message"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#072635] hover:bg-[#F6F7F8]"
          >
            <img src="/assets/MessageIcon.svg" alt="" className="w-4 h-4" />
            <span>Message</span>
          </a>
          <a
            href="#transactions"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-[#072635] hover:bg-[#F6F7F8]"
          >
            <img src="/assets/CreditCardIcon.svg" alt="" className="w-4 h-4" />
            <span>Transactions</span>
          </a>
        </div>
      )}
    </header>
  );
};
