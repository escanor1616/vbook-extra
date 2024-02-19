function execute(url) {
    load('config.js');
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url, {
            headers: {
                'user-agent': UserAgent.android()
            }
    });
    if(response.ok){
        let doc = response.html();
        let el = doc.select("#imagech");
        let imgs = [];
        // if(content==""|| content == null) {
        //     imgs = ["Chương không tồn tại !"]
        // }
        el.forEach(e =>{
            var img = e.attr("data-src").replace(/[\t\n]/g,'');
            imgs.push(img)
        });
        return Response.success(imgs);
    }
    return null;
}