import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';



export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-orange-500 px-3 py-4 md:px-1">
      <div className="flex justify-between items-center">
        {/* Left-aligned content */}
        {/* <Link href="/" passHref>
          <a className="flex items-center text-white">
            <AcmeLogo className="w-12 md:w-16" />
          </a>
        </Link>
        <div className="hidden md:flex space-x-2">
          <NavLinks />
        </div> */}
        {/* User profile section */}
        <div className="ml-auto">
          <Image
            src="/hero-desktop.png"
            width={28}
            height={28}
            className="mr-2 rounded-full"
            alt="User Profile"
          />
          <div className="text-white">{/*get logged in user*/}</div>
        </div>

         {/* Right-aligned content */}
        <form className="ml-4"
         action={async () => {
            'use server';
            await signOut();
          }}>
          <button className="flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

      </div>
       
    </div>
  );
}


