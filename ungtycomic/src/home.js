function execute() {
    return Response.success([
        { title: "Tất cả truyện tranh", input: "/truyen-tranh", script: "gen.js" },
        { title: "Truyện hot", input: "/truyen-hot", script: "gen.js" },
    ]);
}