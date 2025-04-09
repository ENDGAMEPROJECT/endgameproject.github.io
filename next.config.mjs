/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export async function getStaticPaths() {
  const res = await fetch('https://api.vercel.app/blog')
  const data = await res.json()
 
  return {
    props: { data },
    revalidate: 60,
  }
}

const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
   output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
   basePath: isProd ? '' : '',

  /**
   * Set asset prefix. This is the URL prefix for assets.
   *
   * @see https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
   */
  assetPrefix: isProd ? '' : '',

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  distDir: 'docs',
  
  /**
   * Environment variables
   */
  env: {
    PUBLIC_URL: isProd ? "" : "",
    BASE_PATH: isProd ? "" : ""
  }
};

export default nextConfig;
