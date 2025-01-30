// next-sitemap.js

module.exports = { 
    siteUrl: 'https://www.aresla.fr', 
    generateRobotsTxt: true, 
    changefreq: 'daily', 
    priority: 0.7, 
    sitemapSize: 5000, 
    exclude: ['/api/*'], 
    robotsTxtOptions: { 
        additionalSitemaps: [ 
            'https://www.aresla.fr/server-sitemap.xml', 
            'https://www.aresla.fr/another-sitemap.xml' 
        ] 
    } 
};