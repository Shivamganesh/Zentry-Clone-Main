import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "./Button"; // rhombus hover button

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Prologue", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Footer = () => {
  const title = "Zentry";

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <footer className="w-screen bg-[#1c1c1e] text-white pt-10 pb-6">
      {/* Tilted Title */}
      <div
        className="w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="flex justify-center items-center">
          <motion.h1
            style={{ rotateX, rotateY }}
            className="text-[3rem] md:text-[15rem] font-extrabold uppercase tracking-tighter leading-[0.85] text-white flex gap-[0.05em] transition-transform duration-200"
          >
            {title.split("").map((char, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {char === "y" ? (
                  <b className="text-violet-400">{char}</b>
                ) : (
                  char
                )}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Nav Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-6">
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.href}>
            <Button
              title={link.title}
              containerClass="bg-white text-black hover:bg-violet-200"
            />
          </a>
        ))}
      </div>

      {/* Footer Base */}
      <div className="container mx-auto mr-14 flex flex-col items-center justify-between gap-6 px-6 md:flex-row border-t border-gray-700 pt-6">
        <p className="text-center text-sm font-light md:text-left text-gray-400">
          © Shivam Gupta 2024. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex  mr-20 justify-center gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-white transition-transform hover:scale-125 hover:text-violet-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-sm font-light text-gray-400 hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
