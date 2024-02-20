function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('.comics-detail-head');
        return Response.success({
            name: doc.select(".title-heading").text(),
            cover: doc.select(".comics-thumbnail img").attr("src"),
            author: "Đang cập nhật",
            description: doc.select(".meta_item").text(),
            detail: "",
             ongoing: doc.select(".post-status .summary-content").last().text().indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}