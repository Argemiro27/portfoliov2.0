import React from "react";

type LogoProps = {
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ alt }) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      style={{ width: "50%", height: "50%" }}
    />
  );
};

export default Logo;
