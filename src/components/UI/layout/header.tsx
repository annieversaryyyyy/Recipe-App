"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import RegistartionModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt={siteConfig.title}
      width={28}
      height={28}
      priority
    /> 
  );
};

export default function Header() {
  const pathname = usePathname();

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const getNavItems = () => {
    return siteConfig.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1
             ${isActive ? "text-blue-500" : "text-foreground"}
             hover:text-blue-300 hover:border 
            `}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };

  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button 
          as={Link} 
          color="primary" 
          href="#" 
          variant="flat"
          onPress={() => setIsLoginOpen(true)}>
           Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
          as={Link} 
          color="primary" 
          href="#" 
          variant="flat"
          onPress={() => setIsRegistrationOpen(true)}>
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistartionModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => {
          setIsLoginOpen(false);
        }}
      />
    </Navbar>
  );
}
