import FileSaver from 'file-saver';
import vCardsJS from 'vcards-js';

const getBase64FromUrl = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
  });
};

const vCardGenerator = async (data: any) => {
  let vCard = vCardsJS();
  const base64String: any = await getBase64FromUrl(data.profilePicture);

  vCard.version = '3.0';
  vCard.firstName = data.firstName;
  vCard.middleName = data.middleName;
  vCard.lastName = data.lastName;
  vCard.email = data.email;
  vCard.organization = data.organization;
  // vCard.photo.url = String(base64String).replace('data:image/png;base64,', '');
  vCard.photo.url = base64String.slice(base64String.indexOf(',') + 1);
  vCard.photo.base64 = true;
  vCard.cellPhone = data.phone;
  vCard.title = data.title;

  // vCard.url = 'https://github.com/enesser';
  vCard.note = `Met ${data.firstName} ${data.lastName} at ...`;

  data.links.forEach((link: any) => {
    vCard.socialUrls[link.text] = link.link;
  });

  const blob = new Blob([vCard.getFormattedString()], {
    type: 'text/vcard;charset=utf-8',
  });

  FileSaver.saveAs(blob, `${data.firstName}${data.lastName}.vcf`);
};

export default vCardGenerator;
