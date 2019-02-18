"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_1 = require("./plugin");
__export(require("./admins"));
__export(require("./authentication"));
__export(require("./users"));
__export(require("./utils"));
// export * from "./plugin";
exports.default = plugin_1.plugin;
// export default PouchDBAuthPlugin;
//# sourceMappingURL=index.js.map