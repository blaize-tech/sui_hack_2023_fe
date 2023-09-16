import Head from 'next/head';
import { APP_SEO_TITLE, APP_SEO_DESCRIPTION, APP_DOMAIN_URL } from '@utils/index';

interface HtmlMetaProps {
  title?: any;
  description?: string;
  image?: string;
  url?: string;
}

export const HtmlMeta = ({
  title = '',
  description = '',
  // image = '/assets/images/seo_image.jpg',
  url = APP_DOMAIN_URL,
}: HtmlMetaProps) => (
  <Head>
    <title>{title ? `${title} | ${APP_SEO_TITLE}` : APP_SEO_TITLE}</title>
    <link rel="icon" href={'/favicon.ico'} />
    <meta name="description" content={description || APP_SEO_DESCRIPTION} />
    <meta property="og:site_name" content={APP_SEO_TITLE} />
    <meta property="og:title" content={title} key="title" />
    <meta property="og:description" content={description || APP_SEO_DESCRIPTION} key="ogdesc" />
    <meta property="og:url" content={url} />
    {/*<meta property="og:image" content={image} key="image" />*/}
    {/*<meta property="og:image:secure_url" content={image} />*/}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="600" />
    <meta name="twitter:description" content={description || APP_SEO_DESCRIPTION} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    {/*<meta name="twitter:image" content={image} />*/}
    {/*<meta name="telegram:channel" content="@TG_CHANEL" />*/}
  </Head>
);
