function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
    let newUrl = BASE_URL + url;
    console.log(newUrl);
    let response = fetch(newUrl,{
        method : "GET",
        // headers: {
        //         'user-agent': UserAgent.android()
        //     },
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        next = doc.select(".pagination").select("li.active + li").text();
        let el = doc.select(".item-comics");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".content-title a ").first().text(),
                link: e.select(".content-title a").attr("href"),
                cover: e.select(".content-image a img").attr("data-src"),
                host: "https://ungtycomicsvip.com" ,
                description: e.select(".chapter-item  ").first().text()
            })
        })
        return Response.success(data,next)
    }
    return null
}