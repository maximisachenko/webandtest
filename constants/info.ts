const BASE_CONTACT_INFO = [
    { title: 'Phone', iconName: 'phone.svg', infoText: '+375 (29) 541-20-57'},
    { title: 'Mail', iconName: 'mail.svg', infoText: 'webandteam@gmail.com'},
    { title: 'Location', iconName: 'location.svg', infoText: 'Grottgera str 3, 15-225 Bialystok, Poland'},
  ];
  
  export const CONTACT_INFO = BASE_CONTACT_INFO.map(item => ({
    ...item,
    section: 'contact-form',
    src: `/assets/icons/${item.iconName}`,
  }));
  
  export const CONTACT_INFO_PRIMARY = BASE_CONTACT_INFO.map(item => ({
    ...item,
    section: 'footer',
    src: `/assets/icons/${item.iconName.replace('.svg', 'primary.svg')}`,
  }));
  