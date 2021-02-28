const hostName = "https://www.mywebsite.com";
const basePath = "";
const metaDescription = "This is an example description";
const websiteName = "Help and Support";
const mainWebsiteURL = "https://www.example.com";
const mainWebsiteName = "My Site";


module.exports = {
    hostName: hostName,
    basePath: basePath,
    baseURL: hostName + basePath,
    metaDescription: metaDescription,
    websiteName: websiteName,
    mainWebsiteURL: mainWebsiteURL,
    mainWebsiteName: mainWebsiteName,
    env: process.env.ELEVENTY_ENV === 'production'
}