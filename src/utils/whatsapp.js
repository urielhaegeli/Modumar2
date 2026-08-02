import { siteConfig } from '../config/siteConfig';

export const openWhatsApp = (message) => {
  const url = `https://wa.me/${siteConfig.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
