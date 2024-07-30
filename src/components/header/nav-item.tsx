import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const NavItem = ({ label, href, icon }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        isActive && "text-gray-50"
      )}
    >
      <span className={cn('text-gray-400', isActive && 'text-emerald-400')}>{icon}</span>
      {label}
    </Link>
  );
};
