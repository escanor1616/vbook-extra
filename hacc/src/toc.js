function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let repsonse = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(repsonse.ok){
        let doc = repsonse.html();
        let el = doc.select(".pc-post-list li")
        let data = [];
        for (let i =0; i< el.length; i++) {
            let e = el.get(i);
            data.push({
                name: "Chap "+e.select("a").text(),
                url: e.select("a").attr("href"),
                host: "dasdsa" 
            })
        }
        return Response.success(data);
    }
    return null;
}