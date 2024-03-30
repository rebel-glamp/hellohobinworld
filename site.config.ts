import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '95e5127a591845b8b6cb65bde890166d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hello, Hobin World!',
  domain: 'glamp-work.duckdns.org',
  author: 'hobin',

  // open graph metadata (optional)
  description: 'Hello, Hobin World!',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: '2skydev',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://file.notion.so/f/f/e40e6f93-1578-4c0d-a843-3276e4ad177d/29b3a07a-b575-4ee1-9872-6475e13b0808/rocket.gif?id=b3358a15-feab-4f24-8ab6-7b4163288174&table=block&spaceId=e40e6f93-1578-4c0d-a843-3276e4ad177d&expirationTimestamp=1711713600000&signature=kCBAjHluiUxoFFcfZ02l1RTsYeMXvqbCbZKl1O_m7n4',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About Me!',
      pageId: '2f8cefb9da8a4a4fa9fce2c5f43adad7'
    },
    // {
    //   title: 'Contact',
    //   pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    // }
  ],

  // -----------------------------------------------------------------------------
  // 커스터마이징
  // -----------------------------------------------------------------------------
  enableComment: true,
});
