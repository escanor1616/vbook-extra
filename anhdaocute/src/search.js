function execute(key,page) {
    load('config.js');
    if(!page) page = '1'
    let response = fetch(BASE_URL,{
        method : "GET",
            queries : {
            s:key,
            post_type:"wp-manga"
        }

    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".nav-links").select("span.current + a").text();
        page = next.toString();
        let el = doc.select(".c-tabs-item__content");
        let data = [];
            el.forEach(e=> {
               
                data.push({
                name: e.select(".post-title a ").text(),
                link: e.select(".post-title a").attr("href"),
                cover: e.select(".tab-thumb img").attr("src"),
                host: "https://qadc.net" ,
                description: e.select(".chapter a ").text()
            })
                
                
            })
            
        return Response.success(data,next);
    }
    return null;
}