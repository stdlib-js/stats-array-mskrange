"use strict";var d=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}}};var v=d(function(w,l){"use strict";var i=require("@stdlib/assert-is-collection"),h=require("@stdlib/array-dtypes"),o=require("@stdlib/array-dtype"),u=require("@stdlib/array-base-assert-contains"),s=require("@stdlib/array-base-join"),m=require("@stdlib/stats-strided-mskrange").ndarray,a=require("@stdlib/string-format"),n=h("real_and_generic"),g="generic";function y(r,e){var t;if(!i(r))throw new TypeError(a("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(t=o(r)||g,!u(n,t))throw new TypeError(a('invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.',s(n,'", "'),t));if(!i(e))throw new TypeError(a("invalid argument. Second argument must be an array-like object. Value: `%s`.",e));if(t=o(e)||g,!u(n,t))throw new TypeError(a('invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.',s(n,'", "'),t));if(r.length!==e.length)throw new RangeError("invalid arguments. First and second arguments must have the same length.");return m(r.length,r,1,0,e,1,0)}l.exports=y});var c=v();module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
