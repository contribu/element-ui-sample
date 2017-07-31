const { FuseBox, VuePlugin, SassPlugin, CSSPlugin, PostCSSPlugin, CSSResourcePlugin } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir: "src",
    output: "dist/$name.js",
    plugins: [
        VuePlugin(),
        [
            /node_modules.*\.css$/,
            CSSResourcePlugin({inline: true}),
            PostCSSPlugin(),
            CSSPlugin()
        ],
        [
            SassPlugin({importer: true}),
            CSSResourcePlugin(),
            PostCSSPlugin(),
            CSSPlugin()
        ],
    ]
});

fuse.bundle("app")
    .instructions(`>index.ts`)
    .watch();

fuse.dev();

fuse.run({
    chokidar: {
        usePolling: true,
    },
});
