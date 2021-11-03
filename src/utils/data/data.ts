import GithubIcon from '../../assets/github.png';
import PortfolioIcon from '../../assets/portfolio.png';
import LinkedInIcon from '../../assets/linkedin.png';
import ResumeIcon from '../../assets/resume.png';

const data = {
  firstName: 'YOUR FIRST NAME',
  middleName: 'YOUR MIDDLE NAME',
  lastName: 'YOUR LAST NAME',
  email: 'YOUR MAIN EMAIL',
  phone: 'YOUR MAIN CONTACT NUMBER',
  title: 'YOUR TITLE',
  organization: 'YOUR ORGANIZATION',
  profilePicture: 'URL TO YOUR PROFILE PICTURE',
  bio: 'OPTIONAL BIO FOR INTRODUCTION',
  links: [
    {
      logo: ResumeIcon,
      text: 'Resume',
      link: 'YOUR RESUME URL',
    },
    {
      logo: GithubIcon,
      text: 'Github',
      link: 'YOUR GITHUB URL',
    },
    {
      logo: PortfolioIcon,
      text: 'Portfolio',
      link: 'YOUR PORTFOLIO/WEBSITE URL',
    },
    {
      logo: LinkedInIcon,
      text: 'LinkedIn',
      link: 'YOUR LINKEDIN URL',
    },
  ],
};

export default data;
