function execute(key,page) {
    load('config.js');
    if(!page) page = '1'
    let response = fetch(BASE_URL +"/page/" + page,{
        method : "GET",
            queries : {
            s:key
        }

    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".nav-links").select("span.current + a").text();
        page = next.toString();
        let el = doc.select("article");
        let data = [];
            el.forEach(e=> {
               
                    data.push({
                     name: e.select(".read-title  a").first().text(),
                link: e.select(".read-title  a").first().attr("href"),
                cover: e.select(".read-bg-img img").attr("src"),
                host: "https://hacamchicac.com" ,
                description: e.select(".author-links").text()
            })
                
                
            })
            
        return Response.success(data,next);
    }
    return null;
}