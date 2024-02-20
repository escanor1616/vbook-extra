function execute(key,page) {
    load('config.js');
    if(!page) page = '1'
    let response = fetch(BASE_URL,{
        method : "GET",
            queries : {
            s:key,
        }

    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".nav-links").select("span.current + a").text();
        page = next.toString();
        let el = doc.select(".blocks-gallery-item");
        let data = [];
            el.forEach(e=> {
               
                data.push({
                name: e.select(".blocks-gallery-item__caption a span").text(),
                link: e.select(".blocks-gallery-item__caption a").attr("href"),
                cover: e.select("img").attr("src"),
                host: "https://mangadm.cc" ,
                description: "mangadm"
            })
                
                
            })
            
        return Response.success(data,next);
    }
    return null;
}