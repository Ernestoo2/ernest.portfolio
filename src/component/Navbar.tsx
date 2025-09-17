import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { memo } from "react";
import { CONTACT } from "../constants/index";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
}

const SocialLink = memo(({ href, icon, label, ariaLabel }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 rounded p-1"
    aria-label={ariaLabel}
    title={label}
  >
    {icon}
  </a>
));

SocialLink.displayName = 'SocialLink';

const Navbar = memo(() => {
  return (
    <nav className='flex items-center justify-between py-4' role="navigation" aria-label="Main navigation">
      <div className='flex items-center flex-shrink-0'>
        <h1 className='text-5xl font-artistic text-white'>ERNEST
        </h1>
      </div>
      <div className='flex items-center justify-center gap-4 text-2xl' role="list" aria-label="Social media links">
        <SocialLink
          href={CONTACT.linkedin}
          icon={<FaLinkedin />}
          label="LinkedIn"
          ariaLabel="Visit Ernest's LinkedIn profile"
        />
        <SocialLink
          href={CONTACT.github}
          icon={<FaGithub />}
          label="GitHub"
          ariaLabel="Visit Ernest's GitHub profile"
        />
        <SocialLink
          href={CONTACT.instagram}
          icon={<FaInstagram />}
          label="Instagram"
          ariaLabel="Visit Ernest's Instagram profile"
        />
        <SocialLink
          href={CONTACT.twitter}
          icon={<FaSquareXTwitter />}
          label="Twitter"
          ariaLabel="Visit Ernest's Twitter profile"
        />
      </div>
    </nav>
  )
});

Navbar.displayName = 'Navbar';

export default Navbar