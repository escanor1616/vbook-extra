function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    // let specUrl = url + "/ajax/chapters/";
    // console.log(specUrl)
    let repsonse = fetch(url, {
        method : "GET",
            headers: {
                'user-agent': UserAgent.android()
            }
            
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".wp-manga-chapter")
        let data = [];
        for (let i= el.length; i--;) {
            let e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.select("a").attr("href"),
                host: "https://qadc.net" 
            })
        }
        return Response.success(data);
    }
    return null;
}