function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('#main');
        let author;
        let el = doc.select(".entry-content p");
        el.forEach(e=> {
            if(e.select("strong").text()=="Tác giả:") {
                author = e.text();
            }
        })
        console.log(author)
        return Response.success({
            name: doc.select(".entry-title").text(),
            cover: doc.select(".wp-block-image img").attr("src"),
            author: author,
            description: doc.select(".entry-content p").text(),
            detail: 'Tác giả : '+ author,
             ongoing: doc.select(".post-status .summary-content").last().text().indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}