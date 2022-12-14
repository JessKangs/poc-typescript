var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import connection from "../database/connection.js";
import 'dotenv/config';
function insertMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, platform, genre, status, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, platform = _a.platform, genre = _a.genre, status = _a.status;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("INSERT INTO movies (name, platform, genre, status) VALUES ($1, $2, $3, $4);", [name, platform, genre, status])];
                case 2:
                    _b.sent();
                    res.status(201).send("ok");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    res.status(409);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getMoviesByGenre(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var genre, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    genre = req.params.genre;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("SELECT * FROM movies WHERE genre = $1;", [genre])];
                case 2:
                    response = _a.sent();
                    res.status(200).send(response.rows);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(409);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getMoviesByPlatform(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var platform, response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    platform = req.params.platform;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.query("SELECT * FROM movies WHERE platform = $1;", [platform])];
                case 2:
                    response = _a.sent();
                    res.status(200).send(response.rows);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    res.status(409);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var name, response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = req.params.name;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, connection.query('SELECT status FROM movies WHERE name = $1;', [name])];
                case 2:
                    response = (_a.sent()).rows[0];
                    if (!(response.status === 'Not watched')) return [3 /*break*/, 4];
                    return [4 /*yield*/, connection.query("UPDATE movies SET status = 'Watched' WHERE name = $1;", [name])];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, connection.query("UPDATE movies SET status = 'Not watched' WHERE name = $1;", [name])];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    res.status(201).send('Updated!');
                    return [3 /*break*/, 8];
                case 7:
                    error_4 = _a.sent();
                    res.status(409);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function deleteMovie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var moviename, response, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    moviename = req.params.moviename;
                    return [4 /*yield*/, connection.query('SELECT id FROM movies WHERE name = $1;', [moviename])];
                case 1:
                    response = (_a.sent()).rows[0];
                    console.log(response.id);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, connection.query("DELETE FROM movies WHERE id = ".concat(response.id, ";"))];
                case 3:
                    _a.sent();
                    console.log("ihul");
                    res.status(201).send('Deleted!');
                    return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    res.status(409);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
export { insertMovie, getMoviesByGenre, getMoviesByPlatform, updateMovie, deleteMovie };
