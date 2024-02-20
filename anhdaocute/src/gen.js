function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
    let newUrl = BASE_URL +"/page/"+page;
    console.log(newUrl);
    let response = fetch(newUrl,{
        method : "GET",
    });
    if(response.ok){
        let doc = response.html();
        let el = doc.select(".page-item-detail");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        page =(parseInt(page)+1).toString();
        let next = page;
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".post-title a ").first().text(),
                link: e.select(".post-title a").attr("href"),
                cover: e.select(".item-thumb img").attr("src"),
                host: "https://qadc.net" ,
                description: e.select(".chapter-item  ").first().text()
            })
        })
        return Response.success(data,next)
    }
    return null
}