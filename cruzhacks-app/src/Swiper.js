"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const mockDatabase_json_1 = __importDefault(require("./mockDatabase.json"));
const Profile_js_1 = __importDefault(require("./Profile.js"));
class Swiper extends react_1.Component {
    swipeLeftAlert() {
        alert("You've swiped left!");
    }
    render() {
        let userEmail = 'logan@example.com';
        const userData = mockDatabase_json_1.default.users.filter(user => user.emailAddress === userEmail);
        return (react_1.default.createElement("div", { className: "swiperContainer" },
            react_1.default.createElement(Profile_js_1.default, { userProfile: userData }),
            react_1.default.createElement("button", { id: 'swipeLeft', onClick: this.swipeLeftAlert }, "See next hacker"),
            react_1.default.createElement("button", { id: 'swipeRight' }, "Invite to project")));
    }
}
exports.default = Swiper;
