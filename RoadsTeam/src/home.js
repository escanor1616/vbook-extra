function execute() {
    return Response.success([
        { title: "Tất cả", input: "/", script: "gen.js" },
        // { title: "Tất cả", input: "//manhwa", script: "gen.js" },
    ]);
}