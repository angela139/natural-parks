import Link from 'next/link';
import type { ReactElement } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './style.module.scss';

interface LinkMetadata {
  name: string;
  href: string;
  icon: ReactElement;
}

const links: LinkMetadata[] = [
  { name: 'Email', href: 'mailto:a4hu@ucsd.edu', icon: <EmailIcon /> },
  {
    name: 'Resume',
    href: 'https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/',
    icon: <DescriptionIcon />,
  },
  { name: 'Facebook', href: 'https://www.facebook.com/', icon: <FacebookIcon /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/angelahu925/', icon: <LinkedInIcon /> },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Made with ♡ by A.S. Graphic Studio</span>
      <div className={styles.navLinks}>
        {links.map(link => (
          <Link
            href={link.href}
            className={styles.link}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.text}>{link.name}</span>
            <span className={styles.icon}>{link.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
