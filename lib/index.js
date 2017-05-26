"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var common_1 = require("./common");
var app = express();
app.get('/', function (req, res) {
    res.send({
        time: new Date(),
    });
});
function start(options) {
    return __awaiter(this, void 0, void 0, function () {
        var PORT;
        return __generator(this, function (_a) {
            PORT = options.port;
            app.listen(PORT, function () {
                var env = common_1.constants.IS_DEV ? 'dev' : 'prod';
                common_1.log.info.gray("\n" + common_1.log.magenta('Running on') + " " + common_1.log.cyan(PORT) + " (" + env + ")");
            });
            return [2];
        });
    });
}
exports.start = start;
start({ port: 8080 });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFtQztBQUNuQyxtQ0FBMEM7QUFJMUMsSUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFHdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO0tBQ2pCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBT0gsZUFBNEIsT0FBeUI7O1lBQzdDLElBQUk7O21CQUFHLE9BQU8sQ0FBQyxJQUFJO1lBQ3pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQU0sR0FBRyxHQUFHLGtCQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQzlDLFlBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQUssWUFBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBSSxZQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFLLEdBQUcsTUFBRyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7Ozs7Q0FDSjtBQU5ELHNCQU1DO0FBSUQsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMifQ==