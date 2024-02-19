function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('#main');
        let data = []
        el = doc.select(".inner-entry-content p[style=text-align: center;]")
        el.forEach(e=> data.push(e.text()))
        return Response.success({
            name: doc.select(".entry-title").text(),
            cover: doc.select(".post-thumbnail img").attr("src"),
            // author: author,
            description: doc.select(".inner-entry-content p[style=text-align: left;]").text(),
            // detail: 'Tác giả : '+
            // '<br>Tên thay thế : '+
            // '<br>Nguồn Anh: '+ 
            //  '<br>Nguồn Hàn: ' 
            //  ,
            detail: data.join("<br>"),
            //  ongoing: status.indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}