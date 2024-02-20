function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
    let newUrl = BASE_URL +"/page/"+page;
    console.log(newUrl);
    let response = fetch(newUrl,{
        method : "GET",
        // headers: {
        //         'user-agent': UserAgent.android()
        //     },
        // queries : {
        //     page : page
        // }
    });
    if(response.ok){
        let doc = response.html();
        page = (parseInt(page)+1).toString();
        let next = page;
        let el = doc.select(".page-listing-item");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".post-title a").first().text(),
                link: e.select(".post-title a").first().attr("href"),
                cover: e.select("a img").attr("data-src"),
                host: "https://pinkteacomic.com" ,
                description: e.select(".chapter.font-meta a").first().text()
            })
        })
        return Response.success(data,next)
    }
    return null
}