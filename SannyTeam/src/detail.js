function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('.post-body');
        let author;
        let status;
        let translator;
        let type;
        let arr = [];
        arr = doc.select(".infox .spe span");
        arr.forEach(e=> {
            if(e.select("b").text()== "Tình Trạng") {
                 e.select("b").remove();
                 status = e.text()
            }
            if(e.select("b").text()== "Tác Giả") {
                 e.select("b").remove();
                 author = e.text()
            }
            if(e.select("b").text()== "Type") {
                 e.select("b").remove();
                 type = e.text()
            }
            if(e.select("b").text()== "Nhóm Dịch") {
                 e.select("b").remove();
                 translator = e.text()
            }
        })
        console.log(doc)
        return Response.success({
            name: doc.select(".entry-title").text(),
            cover: doc.select(".thumb img").attr("data-src"),
            author: author,
            description: doc.select("[itemprop=description]").text(),
            detail: 'Tình trạng : '+
            status+
            '<br>Tác giả : '+author+
            '<br>type: '+ type+ 
             '<br>Nhóm dịch: ' 
             +translator,
             ongoing: status.indexOf("Đang Làm") != -1,
            host: BASE_URL
        });
    }
    return null;
}