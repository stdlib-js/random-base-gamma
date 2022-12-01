// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import{factory as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.0.8-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as v}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";function x(t,e){return v(t)?v(e)?null:new TypeError(b("0P47T",e)):new TypeError(b("0P47P",t))}function P(t,e,s,r,n){var i,o,d,m,p,a,l;for(i=!0;i;){do{l=1+n*(p=e())}while(l<=0);d=1-.331*(o=p*p)*o,m=.5*o+r*(1-(l*=l*l)+w(l)),((a=t())<d||w(a)<m)&&(i=!1)}return 1/s*r*l}var E=1/3;function T(){var v,w,T,L,N,M,G,J,R,z,A;if(J=!0,0===arguments.length)M=l(N={copy:!1});else if(1===arguments.length){if(!r(N=arguments[0]))throw new TypeError(b("0P42h",N));if(d(N,"copy")&&!i(N.copy))throw new TypeError(b("0P430","copy",N.copy));if(d(N,"prng")){if(!o(N.prng))throw new TypeError(b("0P47M","prng",N.prng));M=N.prng}else{if(d(N,"state")&&!n(N.state))throw new TypeError(b("0P47I","state",N.state));!1===(N=y(N,1)).copy?J=!1:N.state&&(N.state=f(N.state.length,N.state,1,new g(N.state.length),1)),N.copy=!1,M=l(N)}}else{if(R=x(w=arguments[0],L=arguments[1]))throw R;if(arguments.length>2){if(!r(N=arguments[2]))throw new TypeError(b("0P42h",N));if(d(N,"copy")&&!i(N.copy))throw new TypeError(b("0P430","copy",N.copy));if(d(N,"prng")){if(!o(N.prng))throw new TypeError(b("0P47M","prng",N.prng));M=N.prng}else{if(d(N,"state")&&!n(N.state))throw new TypeError(b("0P47I","state",N.state));!1===(N=y(N,1)).copy?J=!1:N.state&&(N.state=f(N.state.length,N.state,1,new g(N.state.length),1)),N.copy=!1,M=l(N)}}else M=l(N={copy:!1})}return N&&N.prng?T=a({prng:N.prng}):(N.state?v=N.state:(v=M.state,M.state=v),T=a({state:v,copy:!1})),void 0===w?G=H:(w>=1?(G=D,A=w-E):(G=F,A=w+1-E),z=1/j(9*A)),t(G,"NAME","gamma"),N&&N.prng?(t(G,"seed",null),t(G,"seedLength",null),s(G,"state",m(null),p),t(G,"stateLength",null),t(G,"byteLength",null),t(G,"toJSON",m(null)),t(G,"PRNG",M)):(e(G,"seed",I),e(G,"seedLength",O),s(G,"state",k,B),e(G,"stateLength",S),e(G,"byteLength",q),t(G,"toJSON",C),t(G,"PRNG",M),M=M.normalized),G;function I(){return M.seed}function O(){return M.seedLength}function S(){return M.stateLength}function q(){return M.byteLength}function k(){return M.state}function B(t){if(!n(t))throw new TypeError(b("0P47J",t));J&&(t=f(t.length,t,1,new g(t.length),1)),M.state=t}function C(){var t={type:"PRNG"};return t.name=G.NAME,t.state=u(M.state),t.params=void 0===w?[]:[w,L],t}function D(){return P(M,T,L,A,z)}function F(){return P(M,T,L,A,z)*c(M(),1/w)}function H(t,e){var s,r;return h(t)||h(e)||t<=0||e<=0?NaN:t<1?(s=1/j(9*(r=t+1-E)),P(M,T,e,r,s)*c(M(),1/t)):(s=1/j(9*(r=t-E)),P(M,T,e,r,s))}}var L=T();t(L,"factory",T);export{L as default,T as factory};
//# sourceMappingURL=index.mjs.map
