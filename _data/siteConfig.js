// require("dotenv").config();

module.exports = {
    title: "PKM Book",
    url: "http://localhost:8080", // "https://mindos.in/pkm-book/"
    author: "Binny V A",
    description: "Book about Personal Knowledge Management, Zettelkasten, Tools and Processes.",
    pathPrefix: "/pkm-book/", // Requires a ending '/'

    headerMenu: [
       {type: 'page', item: '', title: 'Home'},
       {type: 'page', item: '000-index', title: 'Table of Contents'},
       {type: 'page', item: 'sitemap', title: 'Sitemap'},
    ]

};
