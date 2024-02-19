function execute() {
    return Response.success([
        { title: "BL Hoàn", input: "/category/bl-hoan/page", script: "gen.js" },
        { title: "BL OnGoing", input: "/category/bl-ongoing/page", script: "gen.js" },

        { title: "BL Ngắn", input: "/category/bl-ngan/page", script: "gen.js" },
        { title: "BL Novel", input: "/category/bl-novel/page", script: "gen.js" },
        { title: "BL Drop", input: "/category/bl-ngan/drop", script: "gen.js" },
    ]);
}