import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        images: {
          dangerouslyAllowSVG:true,
          domains: ["images.unsplash.com"],
          remotePatterns:[
            {
              protocol:'https',
              hostname:'*',
            }
          ]
        },
        experimental: {
          ppr: "incremental", 
         
        },
      
};

export default nextConfig;
