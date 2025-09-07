import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, FileText, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logo from "./SnapCV-Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Apply for Jobs", href: "#jobs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b glass-effect transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-15 w-15 items-center justify-center">
{/*               <FileText className="h-6 w-6 text-white" /> */}
              <img src={logo} alt="SnapCV"/>
            </div>
            <span className="text-xl font-bold text-foreground">SnapCV</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-brand after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" className="font-medium hover-lift">
                Login
              </Button>
              <Button className="gradient-brand text-white font-medium shadow-brand hover:shadow-lg hover-lift transition-all duration-300">
                Sign Up
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t animate-slide-up">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-3 border-t">
                <Button variant="ghost" className="justify-start font-medium">
                  Login
                </Button>
                <Button className="gradient-brand text-white font-medium shadow-brand">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
