import ISocialLink from './SocialLink';
import IProfileBasicDetail from './ProfileBasicDetail';

interface IProfile extends IProfileBasicDetail {
  links: ISocialLink[];
}

export default IProfile;
