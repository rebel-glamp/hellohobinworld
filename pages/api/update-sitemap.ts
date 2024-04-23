import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSiteMap } from '@/lib/get-site-map';
import { host } from '@/lib/config';
import type { SiteMap } from '@/lib/types';

async function createSitemap(siteMap: SiteMap) {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${host}</loc>
  </url>

  <url>
    <loc>${host}/</loc>
  </url>

  ${Object.keys(siteMap.canonicalPageMap)
    .map((canonicalPagePath) =>
      `
        <url>
          <loc>${host}/${canonicalPagePath}</loc>
        </url>
      `.trim()
    )
    .join('')}
</urlset>`;

  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const siteMap = await getSiteMap();
    await createSitemap(siteMap);
    res.status(200).json({ message: 'Sitemap updated successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
