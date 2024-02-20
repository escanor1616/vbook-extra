function execute(key,page) {
    load('config.js');
    if(!page) page = '1'
    let response = fetch(BASE_URL+"/search",{
        method : "GET",
            queries : {
            query_string:key,
        }

    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".nav-links").select("span.current + a").text();
        page = next.toString();
        let el = doc.select(".item-comics");
        let data = [];
            el.forEach(e=> {
               
                data.push({
                name: e.select(".content-title a").text(),
                link: e.select(".content-title a").attr("href"),
                cover: e.select(".content-image a img").attr("data-src"),
                host: "https://ungtycomicsvip.com" ,
                description: e.select(".chapter-item").text()
            })
                
                
            })
            
        return Response.success(data,next);
    }
    return null;
}