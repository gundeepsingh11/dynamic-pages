import Head from 'next/head'

const HtmlHead = ({metadata}) => {
  return (
    <Head>
      <title>{metadata.pageTitle}</title>
      <meta name="keywords" content={metadata.metaKeywords} />
      <meta name="description" content={metadata.metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="manifest" href="manifest.json" />
      <link rel="stylesheet" href="./assets/css/style.css" />
    </Head>
)}
export default HtmlHead;
