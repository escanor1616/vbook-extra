function execute() {
    return Response.success([
        { title: "Chap Mới nhất", input: "/", script: "gen.js" },
        // { title: "Tất cả", input: "//manhwa", script: "gen.js" },
    ]);
}