import replace from "replace-in-file";
import fs from "fs";

// Search-and-replace the manual polyfill injection with the actual code it
// needs to insert.
const plugin_polyfill_source = fs
    .readFileSync("assets/dist/pluginPolyfill.js", "utf8")
    .replaceAll("\r", "\\r")
    .replaceAll("\n", "\\n")
    .replaceAll('"', '\\"');

replace.sync({
    files: "./assets/dist/content.js",
    from: [/%PLUGIN_POLYFILL_SOURCE%/g],
    to: plugin_polyfill_source,
});
