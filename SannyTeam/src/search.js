function execute(key,page) {
    load('config.js');
    
    let response = fetch(BASE_URL,{
        method : "GET",
            queries : {
            s:key
        }

    });
    if(response.ok){
        let doc = response.html();
        // let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select("article");
        let data = [];
            el.forEach(e=> {
                data.push({
                name: e.select(".data .title h2").first().text(),
                link: e.select(".animposx a").attr("href"),
                cover: e.select(".content-thumb img").attr("data-src"),
                host: "https://manga18.club",
                description: e.select(".data .type").text(),
            })
            })
            
        return Response.success(data);
    }
    return null;
}