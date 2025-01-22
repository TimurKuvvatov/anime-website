"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controllers/newsController");
const router = (0, express_1.Router)();
router.get('/news', newsController_1.getAllNews);
exports.default = router;
//# sourceMappingURL=route.js.map