import { Phone } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL } from '../data/siteData';

export default function FloatingButtons() {
return (
<>
{/* WhatsApp */}
<a
href={`https://wa.me/${WHATSAPP_NUMBER}`}
target="_blank"
rel="noreferrer"
className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
title="WhatsApp"
> <svg viewBox="0 0 24 24" width="24" height="24" fill="white"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/> </svg> </a>

```
  {/* Call */}
  <a
    href={`tel:${PHONE_NUMBER}`}
    className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#3E1F00] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
    title="Call Us"
  >
    <Phone size={24} />
  </a>

  {/* Instagram */}
  <a
    href={INSTAGRAM_URL}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-42 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
    title="Instagram"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a
    href={FACEBOOK_URL}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-60 right-6 z-50 w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
    title="Facebook"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
</>

  );
}
