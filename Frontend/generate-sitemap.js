"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function generateSitemap() {
    var baseUrl = 'wisks.onrender.com'; // Replace with your actual website URL
    var routes = [
        '/',
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
    var sitemapXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n  <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n    ".concat(routes.map(function (route) { return "<url><loc>".concat(baseUrl).concat(route, "</loc></url>"); }).join('\n'), "\n  </urlset>");
    fs.writeFileSync('./dist/sitemap.xml', sitemapXml, 'utf8');
}
generateSitemap();
