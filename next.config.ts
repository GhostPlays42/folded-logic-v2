import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve the site from one address so Google doesn't split rankings
  // between www.foldedlogic.ca and foldedlogic.ca.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.foldedlogic.ca" }],
        destination: "https://foldedlogic.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
