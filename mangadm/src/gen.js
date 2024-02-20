function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
    let newUrl = BASE_URL;
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
        let el = doc.select(".blocks-gallery-item");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".blocks-gallery-item__caption a span").first().text(),
                link: e.select(".blocks-gallery-item__caption a").attr("href"),
                cover: e.select("img").attr("src"),
                host: "https://mangadm.cc" ,
                description: "mangadm"
            })
        })
        return Response.success(data,next)
    }
    return null
}