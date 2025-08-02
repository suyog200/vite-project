import facebookLogo from "../assets/facebook.png";
import twitterLogo from "../assets/twitter.png";
import linkedinLogo from "../assets/linkedin.png";

interface SocialMediaProps {
  currentUrl: string;
  job: {
    title: string;
  };
}

const SocialMedia = ({ currentUrl, job }: SocialMediaProps) => {
  return (
    <div className="bg-[#f6f8fb] p-5 rounded-lg shadow-sm">
      <h3 className="text-gray-800 font-bold">SHARE JOB OPENINGS</h3>
      <div className="border-b-4 border-blue-300 w-16"></div>
      <div className="flex gap-4 mt-4">
        <span
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`,
              "_blank"
            )
          }
        >
          <img
            src={facebookLogo}
            alt="Facebook"
            className="inline w-6 h-6 mr-2 cursor-pointer"
          />
        </span>

        <span
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                currentUrl
              )}&text=${encodeURIComponent(job.title)}`,
              "_blank"
            )
          }
        >
          <img
            src={twitterLogo}
            alt="Twitter"
            className="inline w-6 h-6 mr-2 cursor-pointer"
          />
        </span>

        <span
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`,
              "_blank"
            )
          }
        >
          <img
            src={linkedinLogo}
            alt="LinkedIn"
            className="inline w-6 h-6 mr-2 cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
