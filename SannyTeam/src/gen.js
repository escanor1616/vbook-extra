function execute(url, page) {
    load('config.js');
    if (!page) page = '1';
    let response = fetch(BASE_URL +url,{
        method : "GET",
        headers: {
                'user-agent': UserAgent.android()
            },
        queries : {
            page : page
        }
    });
    if(response.ok){
        let doc = response.html();
        let next = doc.select(".pagination").select("li.active + li").text();
        let el = doc.select(".post-show article");
        // if(url= "/") {
        //          el = doc.select(".post-show article")
        // }
        // if(url="/manhwa") {
        //     el = el = doc.select(".relat article")
        // }
        
        let data = [];
        el.forEach(e =>{
            data.push({
                name: e.select(".data a").first().text(),
                link: e.select(".data a").first().attr("href"),
                cover: e.select("a img").attr("data-src"),
                host: "https://boylovewithsany.com" ,
                description: "Chap "+e.select(".data .char a").first().text()
            })
        })
        return Response.success(data,next)
    }
    return null
}