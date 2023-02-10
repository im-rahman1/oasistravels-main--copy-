import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export default function Site() {}

export const getServerSideProps = async (ctx) => {
  // const response = await fetch("https://api.spacexdata.com/v4/capsules");
  // const capsules = await response.json();
  const capsules = [];
  const fields = capsules.map((capsule) => ({
    // loc: `https://fast.com/all/${capsule.id}`,
    // lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(ctx, fields);
};
