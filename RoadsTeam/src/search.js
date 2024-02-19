function execute(key,page) {
    load('config.js');
    
    let response = fetch(BASE_URL,{
        method : "GET",
            queries : {
            s: key,
            post_type:"wp-manga"

        }

    });
    if(response.ok){
        let doc = response.html();
        // let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select(".row.c-tabs-item__content");
        let data = [];
            el.forEach(e=> {
                data.push({
                name: e.select(".post-title h3 a").first().text(),
                link: e.select(".post-title h3 a").attr("href"),
                cover: e.select(".c-image-hover a img").attr("src"),
                host: "https://roadsteam.net",
                description: e.select(".latest-chap .chapter").text(),
            })
            })
            
        return Response.success(data);
    }
    return null;
}