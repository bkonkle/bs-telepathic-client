// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest                 = require("bs-jest/src/jest.js");
var Js_exn               = require("bs-platform/lib/js/js_exn.js");
var Js_option            = require("bs-platform/lib/js/js_option.js");
var Utils$BsTelepathic   = require("../src/Utils.bs.js");
var Client$BsTelepathic  = require("../src/Client.bs.js");
var Actions$BsTelepathic = require("../src/Actions.bs.js");

describe("Client", (function () {
        describe("register(client)", (function () {
                return Jest.test("registers the linkId with the server", (function () {
                              var expectedLinkId = "test-uuid";
                              var handleMessage = function (message) {
                                var json;
                                try {
                                  json = JSON.parse(message);
                                }
                                catch (_exn){
                                  json = Js_exn.raiseError("Unable to parse message");
                                }
                                var action;
                                try {
                                  action = Js_option.getExn(Actions$BsTelepathic.Decode[/* action */1](json));
                                }
                                catch (_exn$1){
                                  action = Js_exn.raiseError("Unable to decode action");
                                }
                                Utils$BsTelepathic.expectMatches("Wrong key", "CLIENT_REGISTER", Actions$BsTelepathic.key(action));
                                switch (action.tag | 0) {
                                  case 0 : 
                                  case 1 : 
                                      return Js_exn.raiseError("Wrong action");
                                  case 2 : 
                                      return Utils$BsTelepathic.expectMatches("Wrong linkId", expectedLinkId, action[0]);
                                  
                                }
                              };
                              var socket = /* Some */[{
                                  send: handleMessage,
                                  addEventListener: (function () {
                                      return /* () */0;
                                    })
                                }];
                              var client = Client$BsTelepathic.make(/* Some */[socket], expectedLinkId, (function () {
                                      return /* () */0;
                                    }), "test-url");
                              var run = function () {
                                return Client$BsTelepathic.register(client);
                              };
                              return Jest.Expect[/* toThrow */18](Jest.Expect[/* not_ */23](Jest.Expect[/* expect */0](run)));
                            }));
              }));
        describe("sendMessage(~linkId, ~text)", (function () {
                return Jest.test("uses the WebSocket client to send the message", (function () {
                              var expectedLinkId = "test-uuid";
                              var expectedText = "Test message!";
                              var handleMessage = function (message) {
                                var action;
                                try {
                                  action = Js_option.getExn(Actions$BsTelepathic.Decode[/* action */1](JSON.parse(message)));
                                }
                                catch (_exn){
                                  action = Js_exn.raiseError("Unable to parse message");
                                }
                                Utils$BsTelepathic.expectMatches("Wrong key", "MESSAGE_SEND", Actions$BsTelepathic.key(action));
                                switch (action.tag | 0) {
                                  case 0 : 
                                      Utils$BsTelepathic.expectMatches("Wrong linkId", expectedLinkId, action[0]);
                                      Utils$BsTelepathic.expectMatches("Wrong userName", "Test Name", action[1]);
                                      return Utils$BsTelepathic.expectMatches("Wrong text", expectedText, action[2]);
                                  case 1 : 
                                  case 2 : 
                                      return Js_exn.raiseError("Wrong action");
                                  
                                }
                              };
                              var socket = /* Some */[{
                                  send: handleMessage,
                                  addEventListener: (function () {
                                      return /* () */0;
                                    })
                                }];
                              var client = Client$BsTelepathic.make(/* Some */[socket], expectedLinkId, (function () {
                                      return /* () */0;
                                    }), "test-url");
                              var run = function () {
                                return Client$BsTelepathic.sendMessage(expectedLinkId, expectedText, client);
                              };
                              return Jest.Expect[/* toThrow */18](Jest.Expect[/* not_ */23](Jest.Expect[/* expect */0](run)));
                            }));
              }));
        return /* () */0;
      }));

/*  Not a pure module */