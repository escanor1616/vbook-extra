function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
    });
    if (response.ok) {
        let doc = response.html().select('.row');
        // let author;
        // let status;
        // let translator;
        // let type;
        // let arr = [];
        // arr = doc.select(".infox .spe span");
        // arr.forEach(e=> {
        //     if(e.select("b").text()== "Tình Trạng") {
        //          e.select("b").remove();
        //          status = e.text()
        //     }
        //     if(e.select("b").text()== "Tác Giả") {
        //          e.select("b").remove();
        //          author = e.text()
        //     }
        //     if(e.select("b").text()== "Type") {
        //          e.select("b").remove();
        //          type = e.text()
        //     }
        //     if(e.select("b").text()== "Nhóm Dịch") {
        //          e.select("b").remove();
        //          translator = e.text()
        //     }
        // })
        // console.log(doc)
        return Response.success({
            name: doc.select(".manga-title-badges").text(),
            cover: doc.select(".summary_image a img").attr("src"),
            author: doc.select(".author-content").text(),
            description: doc.select(".summary__content").text(),
            detail: 'Tình trạng : '+ doc.select(".post-status .summary-content").last().text()
            +
            '<br>Tác giả : '+ doc.select(".author-content").text()
            +
             '<br>Mới nhất: '+ doc.select(".wp-manga-chapter").first().text()
             ,
             ongoing: doc.select(".post-status .summary-content").last().text().indexOf("OnGoing") != -1,

            host: BASE_URL
        });
    }
    return null;
}