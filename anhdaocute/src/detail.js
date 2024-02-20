function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('.row');
        return Response.success({
            name: doc.select(".post-title").text(),
            cover: doc.select(".summary_image a img").attr("src"),
            author: doc.select(".author-content").text(),
            description: doc.select(".description-summary").text(),
            detail: doc.select(".post-content").text(),
             ongoing: doc.select(".post-status .summary-content").last().text().indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}