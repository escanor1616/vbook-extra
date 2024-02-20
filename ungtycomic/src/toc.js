function execute(url,page) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    // let specUrl = url + "/ajax/chapters/";
    // console.log(specUrl)

    let repsonse;
    let data = [];
    let page = 1;
    while(page<100) {
        repsonse = fetch(url, {
        method : "GET",
            headers: {
                'user-agent': UserAgent.android()
            },
            queries : {
            page : page.toString()
        }
            
    });
        let doc = repsonse.html();
        let el = doc.select(".item-chapter a")
            for (let i =0; i< el.length; i++) {
            let e = el.get(i);
            data.push({
                name:  e.text(),
                url: e.attr("href"),
                host: "https://ungtycomicsvip.com" 
            })
        }
    page = page +1;
    if(doc.select(".chapter-item").text()=="Chưa có chương nào") break;
    }
    data = data.slice().reverse();
        return Response.success(data);
}