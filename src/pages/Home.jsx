import siteConfig from "../config/siteConfig";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img src={siteConfig.logo} alt="Company Logo" className="w-32 mb-6" />
      <h1 className="text-3xl font-bold mb-4">{siteConfig.companyName}</h1>
      <video
        src={siteConfig.videoUrl}
        controls
        className="rounded-lg shadow-lg w-full max-w-lg mb-6"
      ></video>
      <p className="max-w-xl text-gray-600 whitespace-pre-line">
        {siteConfig.aboutText}
      </p>
    </div>
  );
}
