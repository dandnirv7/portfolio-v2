"use client";

import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/constants/navItems";
import { personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronRight, FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

// Function to get Icon component from icon name
const getIcon = (iconName: string, className: string = "h-4 w-4") => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent className={className} /> : null;
};

// Navigation menu component for large screens
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const prevScrollY = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeRoute, setActiveRoute] = useState("/");
  const [isNavigating, setIsNavigating] = useState(false);

  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();

  // Track if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu if screen becomes large
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position for navbar styling and detect scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = isClient && windowWidth < 640 ? 30 : 50;
    setScrolled(latest > threshold);

    // Detect scroll direction
    if (isClient) {
      prevScrollY.current = latest;
    }
  });

  // Track active section based on scroll position
  useEffect(() => {
    if (!isClient) return; // Skip if not client-side

    const sections = navItems.map((item) => item.href.replace("/#", ""));

    const handleScroll = () => {
      // Find the section that's most visible in the viewport
      let currentSection = "";
      let maxVisibility = 0;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // Calculate how much of the section is visible
          const visibleTop = Math.max(elementTop, window.scrollY);
          const visibleBottom = Math.min(
            elementBottom,
            window.scrollY + window.innerHeight,
          );
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // Weight by position (sections at the top of the viewport get priority)
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          const distanceFromCenter = Math.abs(
            elementTop + rect.height / 2 - viewportCenter,
          );
          const normalizedDistance =
            1 - Math.min(distanceFromCenter / (window.innerHeight / 2), 1);

          // Combine visibility and position for final score
          const visibilityScore = visibleHeight * normalizedDistance;

          if (visibilityScore > maxVisibility) {
            maxVisibility = visibilityScore;
            currentSection = section;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Use passive: true for better scrolling performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth, isClient, activeSection]);

  // Calculate how many menu items to show based on screen width
  const getVisibleNavItems = () => {
    if (!isClient) return navItems.slice(0, 3); // Default for SSR
    if (windowWidth < 1024) return navItems.slice(0, 3);
    if (windowWidth < 1280) return navItems.slice(0, 5);
    return navItems;
  };

  // Items to show in the "More" dropdown on larger screens
  const moreItems = () => {
    if (!isClient) return navItems.slice(3); // Default for SSR
    if (windowWidth < 1024) return navItems.slice(3);
    if (windowWidth < 1280) return navItems.slice(5);
    return [];
  };

  const hasMoreItems = moreItems().length > 0;

  // Safe access to windowWidth
  const isMobile = isClient && windowWidth < 640;
  const isSmallScreen = isClient && windowWidth < 1024;
  const isTinyScreen = isClient && windowWidth < 400;
  const isVeryTinyScreen = isClient && windowWidth < 350;

  // Update active route when pathname changes
  useEffect(() => {
    // Reset scroll progress on page change
    setScrollProgress(0);
    setIsNavigating(false);

    // Find the matching route based on pathname
    const matchedRoute = navItems.find((item) => {
      // Exact match for home
      if (item.href === "/" && pathname === "/") {
        return true;
      }
      // Prefix match for other routes (handles nested routes better)
      if (item.href !== "/" && pathname.startsWith(item.href)) {
        return true;
      }
      return false;
    });

    setActiveRoute(matchedRoute?.href || pathname);
  }, [pathname]);

  // Calculate scroll progress
  useEffect(() => {
    if (isNavigating) {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // Calculate scroll progress (0 to 1)
      const scrollableHeight = scrollHeight - clientHeight;
      const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

      setScrollProgress(progress);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isNavigating]);

  // Set navigation state when links are clicked
  const handleLinkClick = (href?: string) => {
    setIsNavigating(true);
    setScrollProgress(0);

    if (href) {
      router.push(href);
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-lg shadow-md"
            : "bg-background/30 backdrop-blur-sm",
        )}
        // Auto-hide navbar when scrolling down, show when scrolling up
        animate={{
          paddingTop: scrolled ? "0.25rem" : "0.5rem",
          paddingBottom: scrolled ? "0.25rem" : "0.5rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{
            width: `${scrollProgress * 100}%`,
            transition: isNavigating ? "none" : "width ease",
          }}
        />

        <div className="container px-3 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo - responsive sizing */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link
                href="/"
                className="flex items-center gap-1 sm:gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="relative">
                  <Avatar className="border-2 shadow-lg h-7 w-7 sm:h-9 sm:w-9 border-primary/30">
                    <AvatarImage
                      src={personalInfo.profilePicture}
                      alt={`${personalInfo.name}'s profile picture`}
                    />
                    <AvatarFallback className="text-xs bg-primary/10 sm:text-sm">
                      {personalInfo.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <motion.div
                    className="absolute w-3 h-3 bg-green-500 border-2 rounded-full -bottom-1 -right-1 border-background"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
                <motion.div className="flex flex-col">
                  <motion.span
                    className="text-base font-bold text-transparent sm:text-xl bg-clip-text bg-gradient-to-r from-primary to-indigo-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {personalInfo.name}
                  </motion.span>
                  <span className="text-[10px] text-muted-foreground -mt-1 hidden sm:block">
                    {personalInfo.title}
                  </span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation Menu - Modern glassy design */}
            <div className="hidden md:block">
              <motion.div
                className="px-1 py-1 border rounded-full shadow-sm bg-background/50 backdrop-blur-md border-border/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <NavigationMenu>
                  <NavigationMenuList className="gap-0.5 lg:gap-1">
                    {getVisibleNavItems().map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink
                          className={cn(
                            "transition-all text-xs lg:text-sm rounded-full px-3 lg:px-4 py-1.5 flex items-center gap-1.5 hover:bg-accent/50 hover:text-foreground cursor-pointer",
                            activeRoute === item.href.replace("/#", "")
                              ? "bg-primary/15 text-primary font-medium shadow-sm"
                              : "text-muted-foreground",
                          )}
                          onClick={() => handleLinkClick(item.href)}
                        >
                          <motion.div
                            className="flex items-center gap-1.5 md:gap-2"
                            whileHover={{ x: 2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <div
                              className={cn(
                                "flex items-center justify-center",
                                activeRoute === item.href.replace("/#", "")
                                  ? "text-primary"
                                  : "text-muted-foreground",
                              )}
                            >
                              {getIcon(item.icon)}
                            </div>
                            <span
                              className={
                                isSmallScreen ? "hidden lg:inline" : ""
                              }
                            >
                              {item.name}
                            </span>
                          </motion.div>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}

                    {/* More dropdown for extra items */}
                    {hasMoreItems && (
                      <NavigationMenuItem>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="px-3 text-xs rounded-full lg:text-sm hover:bg-accent/50"
                            >
                              <span className="hidden lg:inline">More</span>
                              <span className="lg:hidden">•••</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-40 rounded-xl backdrop-blur-md bg-background/80 border-border/40"
                          >
                            {moreItems().map((item) => (
                              <DropdownMenuItem key={item.name} asChild>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm",
                                    activeRoute === item.href.replace("/#", "")
                                      ? "bg-primary/10 text-primary font-medium"
                                      : "text-foreground hover:bg-accent/50",
                                  )}
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-background">
                                    {getIcon(item.icon)}
                                  </div>
                                  <span>{item.name}</span>
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </NavigationMenuItem>
                    )}
                  </NavigationMenuList>
                </NavigationMenu>
              </motion.div>
            </div>

            {/* Actions - Right side of navbar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <div className="hidden md:flex">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs rounded-full sm:text-sm group border-primary/20 hover:border-primary/50"
                  asChild
                >
                  <Link href="/pdf/resume.pdf">
                    <FileText className="mr-1.5 h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                    <span className={isSmallScreen ? "hidden lg:inline" : ""}>
                      Resume
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 rounded-full md:hidden text-foreground"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <Menu size={isMobile ? 16 : 20} />
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer - Modern design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side drawer */}
            <motion.div
              className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-background/95 backdrop-blur-md shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Avatar className="w-8 h-8 border-2 border-primary/20">
                      <AvatarImage
                        src={personalInfo.profilePicture}
                        alt={personalInfo.name}
                      />
                      <AvatarFallback className="text-xs bg-primary/10">
                        {personalInfo.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">
                        {personalInfo.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground -mt-1">
                        {personalInfo.title}
                      </span>
                    </div>
                  </Link>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X size={isMobile ? 18 : 22} />
                  </Button>
                </div>

                <motion.div
                  className="flex-1 px-4 py-6 overflow-auto"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.07,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                >
                  <div
                    className={cn(
                      "space-y-2",
                      isTinyScreen ? "grid grid-cols-2 gap-2 space-y-0" : "",
                    )}
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          show: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-xl transition-all",
                            isTinyScreen
                              ? "p-2 text-sm flex-col text-center gap-1"
                              : "p-3 text-base gap-2",
                            activeRoute === item.href.replace("/#", "")
                              ? "bg-primary/10 text-primary font-medium shadow-sm"
                              : "text-foreground hover:bg-muted/50",
                          )}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleLinkClick();
                          }}
                        >
                          <div
                            className={cn(
                              "rounded-full bg-background/80 border border-border/30 flex items-center justify-center shadow-sm",
                              isTinyScreen ? "w-8 h-8" : "w-9 h-9 mr-3",
                              activeRoute === item.href.replace("/#", "")
                                ? "bg-primary/5 border-primary/20 text-primary"
                                : "text-muted-foreground",
                            )}
                          >
                            {getIcon(item.icon)}
                          </div>
                          <span>{item.name}</span>
                          {!isTinyScreen && (
                            <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <div className="flex items-center justify-between p-4 border-t border-border/30">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs rounded-full group border-primary/20 hover:border-primary/50"
                    asChild
                  >
                    <Link href="/pdf/resume.pdf">
                      <FileText className="mr-1.5 h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                      <span className={isVeryTinyScreen ? "sr-only" : ""}>
                        Resume
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
