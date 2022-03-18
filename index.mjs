// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";var x=y.isPrimitive,E=v;var T=function(t,e){return x(t)?x(e)?null:new TypeError(E("invalid argument. `%s` must be a positive number. Value: `%s`.","beta",e)):new TypeError(E("invalid argument. `%s` must be a positive number. Value: `%s`.","alpha",t))},O=w;var L=function(t,e,s,n,r){var i,o,a,m,p,d,l;for(i=!0;i;){do{l=1+r*(p=e())}while(l<=0);a=1-.331*(o=p*p)*o,m=.5*o+n*(1-(l*=l*l)+O(l)),((d=t())<a||O(d)<m)&&(i=!1)}return 1/s*n*l},N=t,A=e,P=s,V=n,G=r,M=i.isPrimitive,R=o,U=a,z=m,J=p,S=d.factory,q=l.factory,k=h,B=u,C=c,D=j,F=g,H=f,I=b,K=v,Q=T,W=L,X=1/3;var Y=function(){var t,e,s,n,r,i,o,a,m,p,d;if(a=!0,0===arguments.length)i=q(r={copy:!1});else if(1===arguments.length){if(!V(r=arguments[0]))throw new TypeError(K("invalid argument. Options argument must be an object. Value: `%s`.",r));if(U(r,"copy")&&!M(r.copy))throw new TypeError(K("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(U(r,"prng")){if(!R(r.prng))throw new TypeError(K("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",r.prng));i=r.prng}else{if(U(r,"state")&&!G(r.state))throw new TypeError(K("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state));!1===(r=I(r,1)).copy?a=!1:r.state&&(r.state=D(r.state.length,r.state,1,new F(r.state.length),1)),r.copy=!1,i=q(r)}}else{if(m=Q(e=arguments[0],n=arguments[1]))throw m;if(arguments.length>2){if(!V(r=arguments[2]))throw new TypeError(K("invalid argument. Options argument must be an object. Value: `%s`.",r));if(U(r,"copy")&&!M(r.copy))throw new TypeError(K("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(U(r,"prng")){if(!R(r.prng))throw new TypeError(K("invalid option. `prng` option must be a pseudorandom number generator function. Option: `%s`.",r.prng));i=r.prng}else{if(U(r,"state")&&!G(r.state))throw new TypeError(K("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state));!1===(r=I(r,1)).copy?a=!1:r.state&&(r.state=D(r.state.length,r.state,1,new F(r.state.length),1)),r.copy=!1,i=q(r)}}else i=q(r={copy:!1})}return r&&r.prng?s=S({prng:r.prng}):(r.state?t=r.state:(t=i.state,i.state=t),s=S({state:t,copy:!1})),void 0===e?o=y:(e>=1?(o=b,d=e-X):(o=v,d=e+1-X),p=1/B(9*d)),N(o,"NAME","gamma"),r&&r.prng?(N(o,"seed",null),N(o,"seedLength",null),P(o,"state",z(null),J),N(o,"stateLength",null),N(o,"byteLength",null),N(o,"toJSON",z(null)),N(o,"PRNG",i)):(A(o,"seed",l),A(o,"seedLength",h),P(o,"state",j,g),A(o,"stateLength",u),A(o,"byteLength",c),N(o,"toJSON",f),N(o,"PRNG",i),i=i.normalized),o;function l(){return i.seed}function h(){return i.seedLength}function u(){return i.stateLength}function c(){return i.byteLength}function j(){return i.state}function g(t){if(!G(t))throw new TypeError(K("invalid argument. Must provide a Uint32Array. Value: `%s`.",t));a&&(t=D(t.length,t,1,new F(t.length),1)),i.state=t}function f(){var t={type:"PRNG"};return t.name=o.NAME,t.state=H(i.state),t.params=void 0===e?[]:[e,n],t}function b(){return W(i,s,n,d,p)}function v(){return W(i,s,n,d,p)*C(i(),1/e)}function y(t,e){var n,r;return k(t)||k(e)||t<=0||e<=0?NaN:t<1?(n=1/B(9*(r=t+1-X)),W(i,s,e,r,n)*C(i(),1/t)):(n=1/B(9*(r=t-X)),W(i,s,e,r,n))}},Z=Y(),$=Y;t(Z,"factory",$);var _=Z;export{_ as default,$ as factory};
//# sourceMappingURL=index.mjs.map
