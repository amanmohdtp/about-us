import siteConfig from "../config/siteConfig";

export default function Resources() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Resources</h2>
      <a
        href={siteConfig.brochure.fileUrl}
        download
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Download Brochure
      </a>
      <a
        href={siteConfig.brochure.fileUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-blue-600 hover:underline"
      >
        Read Online
      </a>
    </div>
  );
}

