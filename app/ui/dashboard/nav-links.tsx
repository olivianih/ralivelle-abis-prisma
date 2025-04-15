'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the navbar
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function HorizontalNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center gap-2 text-sm font-medium text-white hover:text-blue-600',
              {
                'text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 h-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
