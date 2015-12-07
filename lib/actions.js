'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearHighlight = exports.setHighlight = exports.CLEAR_HIGHLIGHT = exports.SET_HIGHLIGHT = exports.selectItem = exports.SELECT_ITEM = exports.closeList = exports.openList = exports.CLOSE_LIST = exports.OPEN_LIST = exports.changeText = exports.CHANGE_TEXT = undefined;

var _reduxActions = require('redux-actions');

var prefix = function prefix(name) {
  return 'redux-autocomplete/' + name;
};

var CHANGE_TEXT = exports.CHANGE_TEXT = prefix('CHANGE_TEXT');
var changeText = exports.changeText = (0, _reduxActions.createAction)(CHANGE_TEXT);

var OPEN_LIST = exports.OPEN_LIST = prefix('OPEN_LIST');
var CLOSE_LIST = exports.CLOSE_LIST = prefix('CLOSE_LIST');
var openList = exports.openList = (0, _reduxActions.createAction)(OPEN_LIST);
var closeList = exports.closeList = (0, _reduxActions.createAction)(CLOSE_LIST);

var SELECT_ITEM = exports.SELECT_ITEM = prefix('SELECT_ITEM');
var selectItem = exports.selectItem = (0, _reduxActions.createAction)(SELECT_ITEM);

var SET_HIGHLIGHT = exports.SET_HIGHLIGHT = prefix('SET_HIGHLIGHT');
var CLEAR_HIGHLIGHT = exports.CLEAR_HIGHLIGHT = prefix('CLEAR_HIGHLIGHT');
var setHighlight = exports.setHighlight = (0, _reduxActions.createAction)(SET_HIGHLIGHT);
var clearHighlight = exports.clearHighlight = (0, _reduxActions.createAction)(CLEAR_HIGHLIGHT);