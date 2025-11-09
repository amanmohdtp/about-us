import siteConfig from "../config/siteConfig";

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

      <a
        href={`mailto:${contact.email}`}
        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-3 hover:bg-green-600"
      >
        Email Us
      </a>

      <a
        href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`}
        target="_blank"
        rel="noreferrer"
        className="bg-green-600 text-white px-4 py-2 rounded-lg mb-3 hover:bg-green-700"
      >
        WhatsApp
      </a>

      <div className="flex gap-4 my-4">
        {Object.entries(contact.social).map(([key, url]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>

      <p className="text-gray-600 max-w-md">{contact.address}</p>
    </div>
  );
}
