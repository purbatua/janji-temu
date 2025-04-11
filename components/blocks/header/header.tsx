'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import LogoSVG from "@/components/svgs/logo"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  // { label: 'Beranda', href: '/' },
  {
    label: 'Layanan',
    href: '/layanan',
    children: [
      { label: 'SEO', href: '/layanan/seo' },
      { label: 'PPC Advertising', href: '/layanan/ppc' },
      { label: 'Social Media Marketing', href: '/layanan/social-media' },
      { label: 'Content Marketing', href: '/layanan/content' },
      { label: 'Web Design & Development', href: '/layanan/web-design' },
      { label: 'Email Marketing', href: '/layanan/email' },
      { label: 'Analytics & Reporting', href: '/layanan/analytics' },
    ],
  },
  // {
  //   label: 'Lokasi',
  //   href: '/lokasi',
  //   children: [
  //     { label: 'Jakarta', href: '/lokasi/jakarta' },
  //     { label: 'Bekasi', href: '/lokasi/bekasi' },
  //     { label: 'Depok', href: '/lokasi/depok' },
  //     { label: 'Tangerang', href: '/lokasi/tangerang' },
  //     { label: 'Tangerang Selatan', href: '/lokasi/tangerang-selatan' },
  //     { label: 'Kabupaten Tangerang', href: '/lokasi/tangerang-regency' },
  //     { label: 'Yogyakarta', href: '/lokasi/yogyakarta' },
  //     { label: 'Bandung', href: '/lokasi/bandung' },
  //     { label: 'Surabaya', href: '/lokasi/surabaya' },
  //     { label: 'Medan', href: '/lokasi/medan' },
  //     { label: 'Pekanbaru', href: '/lokasi/pekanbaru' },
  //   ],
  // },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showShadow, setShowShadow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !showShadow) {
        setShowShadow(true);
      } else if (scrollTop === 0 && showShadow) {
        setShowShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showShadow]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible'
    }

    return () => {
      document.body.style.overflowY = 'visible'
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        showShadow && 'drop-shadow-md bg-white dark:bg-black dark:drop-shadow-gray-50',
      )}
    >
      <div className="container mx-auto max-w-screen-xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md">
              <LogoSVG className="size-6 text-brand-100 dark:text-white" />
            </div>
            <p className="text-brand-100 dark:text-white">
              Halaman <span className="font-normal">App</span>
            </p>
          </Link>
          {/* <Link href="/" className="flex items-end">
            <span className="text-2xl font-bold">Halaman</span>
            &nbsp;
            <span className="text-lg">Studio</span>
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center font-medium text-muted-foreground hover:text-orange-600"
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`ring-opacity-5 absolute left-0 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black transition-all duration-200 ${activeDropdown === item.label ? 'visible opacity-100' : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'}`}
                    >
                      <div className="py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-orange-50 hover:text-orange-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-medium text-muted-foreground hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          {/* <div className="hidden lg:block">
            <Button>
              Hubungi Kami
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="text-muted-foreground hover:text-orange-600 focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 pb-4 h-screen lg:hidden">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between font-medium text-muted-foreground hover:text-orange-600"
                      >
                        {item.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform ${activeDropdown === item.label ? 'rotate-180 transform' : ''}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {activeDropdown === item.label && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block text-gray-600 hover:text-orange-600"
                              onClick={toggleMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium text-muted-foreground hover:text-orange-600"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button>
                  Hubungi Kami
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
