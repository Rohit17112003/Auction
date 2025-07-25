import Image from "next/image";
import Link from "next/link";

const BannerContainer = ({
  style,
  bgStyle,
  url,
  image,
  title,
  description,
}) => {
  return (
    <div
      style={bgStyle}
      className={`${style} flex h-28 items-center justify-between rounded-xl p-5 ps-4 lg:ps-12`}
    >
      <div className="flex items-center gap-4 lg:gap-6 text-white">
        <Image className="h-24 w-24 object-cover" src={image} alt="notification" width={100} height={100} />
        <div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      {!url == "" && (
        <Link href={url}>
          <i className="ri-arrow-right-s-line ri-2x text-white"></i>
        </Link>
      )}
    </div>
  );
};

export default BannerContainer;
