function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('.row');
        let data = []
        return Response.success({
            name: doc.select(".post-title").text(),
            cover: doc.select(".summary_image a img").attr("data-src"),
            author: "Đang cập nhật",
            description: doc.select(".manga-excerpt").text(),
            detail: 'Tác giả : Đang cập nhật'+
            '<br>Thể loại : '+ doc.select(".genres-content").text() ,
            
            // detail:doc.select(".post-status .summary-content").text() ,
             ongoing: doc.select(".post-status .summary-content").last().text().indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}