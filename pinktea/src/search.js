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
        let el = doc.select(".row.c-tabs-item__content");
        let data = [];
            el.forEach(e=> {
               
                data.push({
                name: e.select(".c-image-hover  a").attr("title"),
                link: e.select(".c-image-hover  a").attr("href"),
                cover: e.select(".c-image-hover a img").attr("src"),
                host: "https://pinkteacomic.com" ,
                description: "pinkteacomic"
            })
                
                
            })
            
        return Response.success(data,next);
    }
    return null;
}