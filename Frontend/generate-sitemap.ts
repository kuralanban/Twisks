import * as fs from 'fs';

function generateSitemap() {
  const baseUrl = 'twisks.onrender.com'; // Replace with your actual website URL
  const routes = [
    '/', // Add the routes of your Angular application here
    '/home/createPost',
    '/home/viewPost/:id',
    '/home/savedPosts',
    'auth/signup',
    'auth/signin',
    'auth/forgotPassword',
    '/search/searchUser',
    'search/cam',
    '/explore',
    '/message',
    '/message/group',
    '/profile/home/:id',
    '/profile/follower',
    '/profile/following',
    '/profile/edit-profile',
    '/profile/switch-account',
    '/profile/changePhoto',


    // Add more routes as needed
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => `<url><loc>${baseUrl}${route}</loc></url>`).join('\n')}
  </urlset>`;

  fs.writeFileSync('./dist/sitemap.xml', sitemapXml, 'utf8');
}

generateSitemap();
// node generate-sitemap.js
