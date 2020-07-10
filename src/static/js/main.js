(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "<span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text);
  console.log(li);
  console.log(messages);
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmRDaGlsZCIsImhhbmRsZVNlbmRNc2ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwibWVzc2FnZSIsImhhbmRsZU5ld01lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsa0NBQXNDSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BQXpELGdCQUNFQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUR4QixzQkFFWUQsSUFGWjtBQUdBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosRUFBWjtBQUNBRyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsUUFBWjtBQUNBQSxFQUFBQSxRQUFRLENBQUNZLFdBQVQsQ0FBcUJMLEVBQXJCO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBVztBQUMvQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHYixPQUFPLENBQUNjLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUYrQixNQUd2QkMsS0FIdUIsR0FHYkYsS0FIYSxDQUd2QkUsS0FIdUI7QUFJL0IsNEJBQVlDLElBQVosQ0FBaUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbEIsT0FBL0IsRUFBd0M7QUFBRW1CLElBQUFBLE9BQU8sRUFBRUo7QUFBWCxHQUF4QztBQUNBRixFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFNBQVMsQ0FBQ2MsS0FBRCxDQUFUO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0QsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWWhCLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQzlCRixTQUFTLENBQUNrQixPQUFELEVBQVVoQixRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDcUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcclxuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xyXG5cclxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtcclxuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXHJcbiAgfTo8L3NwYW4+ICR7dGV4dH1gO1xyXG4gIGNvbnNvbGUubG9nKGxpKTtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlcyk7XHJcbiAgbWVzc2FnZXMuYXBwZW5kQ2hpbGQobGkpO1xyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc2VuZE1zZywgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgYXBwZW5kTXNnKHZhbHVlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdNZXNzYWdlID0gKHsgbWVzc2FnZSwgbmlja25hbWUgfSkgPT5cclxuICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xyXG5cclxuaWYgKHNlbmRNc2cpIHtcclxuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XHJcbn1cclxuIl19
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./notifications");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfY2VlNjRlMWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2NoYXRcIjtcclxuaW1wb3J0IFwiLi9wYWludFwiO1xyXG4iXX0=
},{"./chat":1,"./login":3,"./notifications":4,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFDRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGOEIsTUFHdEJxQixLQUhzQixHQUdaRCxLQUhZLENBR3RCQyxLQUhzQjtBQUk5QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBU0EsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xyXG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn07XHJcblxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgbG9nSW4odmFsdWUpO1xyXG59O1xyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuIl19
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGdCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDAsIDEyMiwgMjU1KVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdCFgLCBcInJnYigyNTUsIDE0OSwgMClcIik7XHJcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var controls = document.getElementById("jsControls");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

var fill = function fill(color) {
  var currentColor = ctx.fillStyle;

  if (color) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

function handleCM(event) {
  event.preventDefault();
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;

var hideControls = function hideControls() {
  return controls.style.opacity = 0;
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  return controls.style.opacity = 1;
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250cm9scyIsImN0eCIsImdldENvbnRleHQiLCJjb2xvcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kZSIsIklOSVRJQUxfQ09MT1IiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0b3BQYWludGluZyIsInN0YXJ0UGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImhhbmRsZUZpbGxlZCIsImRpc2FibGVDYW52YXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5hYmxlQ2FudmFzIiwiaGlkZUNvbnRyb2xzIiwib3BhY2l0eSIsInNob3dDb250cm9scyIsInJlc2V0Q2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLFFBQVEsR0FBR0YsUUFB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QUEyQixZQUEzQixFQUF5Q3BDLFlBQXpDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUN1RCxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ1gsaUJBQXBDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDaEN4RCxFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQ3BCLFdBQXJDO0FBQ0E5QixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixXQUF4QixFQUFxQzlCLGFBQXJDO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixTQUF4QixFQUFtQy9CLFlBQW5DO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixZQUF4QixFQUFzQy9CLFlBQXRDO0FBQ0FuQixFQUFBQSxNQUFNLENBQUNrRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ04saUJBQWpDO0FBQ0QsQ0FOTTs7OztBQVFBLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBT3RELFFBQVEsQ0FBQ29DLEtBQVQsQ0FBZW1CLE9BQWYsR0FBeUIsQ0FBaEM7QUFBQSxDQUFyQjs7OztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBT3hELFFBQVEsQ0FBQ29DLEtBQVQsQ0FBZW1CLE9BQWYsR0FBeUIsQ0FBaEM7QUFBQSxDQUFyQjs7OztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTWpCLElBQUksQ0FBQyxNQUFELENBQVY7QUFBQSxDQUFwQjs7OztBQUVQLElBQUkzQyxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDa0QsZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUNMLFFBQXZDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzQ2FudmFzXCIpO1xyXG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuXHJcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XHJcblxyXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcclxuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xyXG5cclxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHgubGluZVdpZHRoID0gMi41O1xyXG5cclxubGV0IHBhaW50aW5nID0gZmFsc2U7XHJcbmxldCBmaWxsaW5nID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzdG9wUGFpbnRpbmcoKSB7XHJcbiAgcGFpbnRpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcclxuICBwYWludGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XHJcbiAgaWYgKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICB9XHJcbiAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gY3VycmVudENvbG9yO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcclxuICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcclxuICBpZiAoIXBhaW50aW5nKSB7XHJcbiAgICBiZWdpblBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuYmVnaW5QYXRoLCB7IHgsIHkgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHN0cm9rZVBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwge1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgICBjb2xvcjogY3R4LnN0cm9rZVN0eWxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDb2xvckNsaWNrKGV2ZW50KSB7XHJcbiAgY29uc3QgY29sb3IgPSBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xyXG4gIGlmIChmaWxsaW5nID09PSB0cnVlKSB7XHJcbiAgICBmaWxsaW5nID0gZmFsc2U7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWxsaW5nID0gdHJ1ZTtcclxuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmlsbCA9IChjb2xvcikgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguZmlsbFN0eWxlO1xyXG4gIGlmIChjb2xvcikge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gIH1cclxuICBjdHguZmlsbFJlY3QoMCwgMCwgQ0FOVkFTX1NJWkUsIENBTlZBU19TSVpFKTtcclxuICBjdHguZmlsbFN0eWxlID0gY3VycmVudENvbG9yO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2FudmFzQ2xpY2soKSB7XHJcbiAgaWYgKGZpbGxpbmcpIHtcclxuICAgIGZpbGwoKTtcclxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7IGNvbG9yOiBjdHguZmlsbFN0eWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ00oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5BcnJheS5mcm9tKGNvbG9ycykuZm9yRWFjaCgoY29sb3IpID0+XHJcbiAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNvbG9yQ2xpY2spXHJcbik7XHJcblxyXG5pZiAobW9kZSkge1xyXG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVN0cm9rZWRQYXRoID0gKHsgeCwgeSwgY29sb3IgfSkgPT4gc3Ryb2tlUGF0aCh4LCB5LCBjb2xvcik7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVGaWxsZWQgPSAoeyBjb2xvciB9KSA9PiBmaWxsKGNvbG9yKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXNhYmxlQ2FudmFzID0gKCkgPT4ge1xyXG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbmFibGVDYW52YXMgPSAoKSA9PiB7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0UGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2FudmFzQ2xpY2spO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5vcGFjaXR5ID0gMCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0NvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLm9wYWNpdHkgPSAxKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldENhbnZhcyA9ICgpID0+IGZpbGwoXCIjZmZmXCIpO1xyXG5cclxuaWYgKGNhbnZhcykge1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xyXG59XHJcbiJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameEnded = exports.handleLeaderNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var setNotifs = function setNotifs(text) {
  notifs.innerText = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotifs("");
  setNotifs("Game Started. ");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
};

exports.handleGameStarted = handleGameStarted;

var handleLeaderNotif = function handleLeaderNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showControls)();
  setNotifs("Game Started. You are the leader, paint : ".concat(word));
};

exports.handleLeaderNotif = handleLeaderNotif;

var handleGameEnded = function handleGameEnded() {
  setNotifs("Game Ended.");
  (0, _paint.resetCanvas)();
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
};

exports.handleGameEnded = handleGameEnded;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwic2V0Tm90aWZzIiwidGV4dCIsImhhbmRsZVBsYXllclVwZGF0ZSIsInNvY2tldHMiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImhhbmRsZUxlYWRlck5vdGlmIiwid29yZCIsImhhbmRsZUdhbWVFbmRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmOztBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQsRUFBYTtBQUM5QkwsRUFBQUEsS0FBSyxDQUFDTSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUIsUUFBTUMsYUFBYSxHQUFHUixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdEI7QUFDQUQsSUFBQUEsYUFBYSxDQUFDRSxTQUFkLGFBQTZCSCxNQUFNLENBQUNJLFFBQXBDLGVBQWlESixNQUFNLENBQUNLLE1BQXhEO0FBQ0FiLElBQUFBLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkwsYUFBbEI7QUFDRCxHQUpEO0FBS0QsQ0FQRDs7QUFTQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUJiLEVBQUFBLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQkssSUFBbkI7QUFDRCxDQUZEOztBQUlPLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxTQUFpQmQsVUFBVSxDQUFDYyxPQUFELENBQTNCO0FBQUEsQ0FBM0I7Ozs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDckNKLEVBQUFBLFNBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQUEsRUFBQUEsU0FBUyxDQUFDLGdCQUFELENBQVQ7QUFDQTtBQUNBO0FBQ0QsQ0FMTTs7OztBQU9BLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsUUFBYztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVztBQUM3QztBQUNBO0FBQ0FOLEVBQUFBLFNBQVMscURBQThDTSxJQUE5QyxFQUFUO0FBQ0QsQ0FKTTs7OztBQU1BLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQ1AsRUFBQUEsU0FBUyxDQUFDLGFBQUQsQ0FBVDtBQUNBO0FBQ0E7QUFDQTtBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGRpc2FibGVDYW52YXMsXHJcbiAgaGlkZUNvbnRyb2xzLFxyXG4gIGVuYWJsZUNhbnZhcyxcclxuICBzaG93Q29udHJvbHMsXHJcbiAgcmVzZXRDYW52YXMsXHJcbn0gZnJvbSBcIi4vcGFpbnRcIjtcclxuXHJcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1BCb2FyZFwiKTtcclxuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcclxuXHJcbmNvbnN0IGFkZFBsYXllcnMgPSAocGxheWVycykgPT4ge1xyXG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHBsYXllckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5pY2tuYW1lfTogJHtwbGF5ZXIucG9pbnRzfWA7XHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJFbGVtZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHNldE5vdGlmcyA9ICh0ZXh0KSA9PiB7XHJcbiAgbm90aWZzLmlubmVyVGV4dCA9IHRleHQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUGxheWVyVXBkYXRlID0gKHsgc29ja2V0cyB9KSA9PiBhZGRQbGF5ZXJzKHNvY2tldHMpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoKSA9PiB7XHJcbiAgc2V0Tm90aWZzKFwiXCIpO1xyXG4gIHNldE5vdGlmcyhcIkdhbWUgU3RhcnRlZC4gXCIpO1xyXG4gIGRpc2FibGVDYW52YXMoKTtcclxuICBoaWRlQ29udHJvbHMoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMZWFkZXJOb3RpZiA9ICh7IHdvcmQgfSkgPT4ge1xyXG4gIGVuYWJsZUNhbnZhcygpO1xyXG4gIHNob3dDb250cm9scygpO1xyXG4gIHNldE5vdGlmcyhgR2FtZSBTdGFydGVkLiBZb3UgYXJlIHRoZSBsZWFkZXIsIHBhaW50IDogJHt3b3JkfWApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUdhbWVFbmRlZCA9ICgpID0+IHtcclxuICBzZXROb3RpZnMoXCJHYW1lIEVuZGVkLlwiKTtcclxuICByZXNldENhbnZhcygpO1xyXG4gIGRpc2FibGVDYW52YXMoKTtcclxuICBoaWRlQ29udHJvbHMoKTtcclxufTtcclxuIl19
},{"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.leaderNotif, _players.handleLeaderNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIiwicGxheWVyVXBkYXRlIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwiZ2FtZVN0YXJ0ZWQiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImxlYWRlck5vdGlmIiwiaGFuZGxlTGVhZGVyTm90aWYiLCJnYW1lRW5kZWQiLCJoYW5kbGVHYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUNBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUFBLGdCQUNuQkMsTUFEbUI7QUFBQSxNQUM5QkMsTUFEOEIsV0FDOUJBLE1BRDhCO0FBRXRDTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0FsQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDYyxZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0FwQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDZ0IsV0FBakIsRUFBOEJDLDBCQUE5QjtBQUNBdEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2tCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXhCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNvQixTQUFqQixFQUE0QkMsd0JBQTVCO0FBQ0QsQ0FiTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld1VzZXIsIGhhbmRsZURpc2Nvbm5lY3RlZCB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgaGFuZGxlTmV3TWVzc2FnZSB9IGZyb20gXCIuL2NoYXRcIjtcclxuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcclxuaW1wb3J0IHtcclxuICBoYW5kbGVQbGF5ZXJVcGRhdGUsXHJcbiAgaGFuZGxlR2FtZVN0YXJ0ZWQsXHJcbiAgaGFuZGxlTGVhZGVyTm90aWYsXHJcbiAgaGFuZGxlR2FtZUVuZGVkLFxyXG59IGZyb20gXCIuL3BsYXllcnNcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcclxuICBjb25zdCB7IGV2ZW50cyB9ID0gd2luZG93O1xyXG4gIHNvY2tldCA9IGFTb2NrZXQ7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TWVzc2FnZSk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5zdHJva2VkUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGgpO1xyXG4gIHNvY2tldC5vbihldmVudHMuZmlsbGVkLCBoYW5kbGVGaWxsZWQpO1xyXG4gIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xyXG4gIHNvY2tldC5vbihldmVudHMuZ2FtZVN0YXJ0ZWQsIGhhbmRsZUdhbWVTdGFydGVkKTtcclxuICBzb2NrZXQub24oZXZlbnRzLmxlYWRlck5vdGlmLCBoYW5kbGVMZWFkZXJOb3RpZik7XHJcbiAgc29ja2V0Lm9uKGV2ZW50cy5nYW1lRW5kZWQsIGhhbmRsZUdhbWVFbmRlZCk7XHJcbn07XHJcbiJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])