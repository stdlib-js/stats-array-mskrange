"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=d(function(w,l){
var i=require('@stdlib/assert-is-collection/dist'),h=require('@stdlib/array-dtypes/dist'),o=require('@stdlib/array-dtype/dist'),u=require('@stdlib/array-base-assert-contains/dist'),s=require('@stdlib/array-base-join/dist'),m=require('@stdlib/stats-strided-mskrange/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),n=h("real_and_generic"),g="generic";function y(r,e){var t;if(!i(r))throw new TypeError(a('2HN2O',r));if(t=o(r)||g,!u(n,t))throw new TypeError(a('2HNHZ',s(n,'", "'),t));if(!i(e))throw new TypeError(a('2HN2y',e));if(t=o(e)||g,!u(n,t))throw new TypeError(a('2HNHq',s(n,'", "'),t));if(r.length!==e.length)throw new RangeError(a('2HN1E'));return m(r.length,r,1,0,e,1,0)}l.exports=y
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
