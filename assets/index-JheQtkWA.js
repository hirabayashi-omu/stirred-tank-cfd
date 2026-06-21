(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,A=1027,M=1028,N=1029,P=1030,ee=1031,F=1033,te=33776,I=33777,L=33778,ne=33779,re=35840,ie=35841,ae=35842,R=35843,oe=36196,se=37492,ce=37496,le=37488,ue=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,z=36283,Ae=36284,je=36285,Me=36286,B=2300,Ne=2301,V=2302,Pe=2303,Fe=2400,Ie=2401,Le=2402,Re=3200,ze=`srgb`,Be=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=2e3;function Ke(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Je(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ye(){let e=Je(`canvas`);return e.style.display=`block`,e}var Xe={},Ze=null;function Qe(...e){let t=`THREE.`+e.shift();Ze?Ze(`log`,t,...e):console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=$e(e);let t=`THREE.`+e.shift();if(Ze)Ze(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=$e(e);let t=`THREE.`+e.shift();if(Ze)Ze(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Xe||(Xe[t]=!0,H(...e))}function tt(e,t,n){return new Promise(function(r,a){function o(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:r()}}setTimeout(o,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function W(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n,r,a){return r+(e-t)*(a-r)/(n-t)}function dt(e,t,n){return e===t?0:(n-e)/(t-e)}function ft(e,t,n){return(1-n)*e+n*t}function pt(e,t,n,r){return ft(e,t,1-Math.exp(-n*r))}function mt(e,t=1){return t-Math.abs(lt(e,t*2)-t)}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function _t(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vt(e,t){return e+Math.random()*(t-e)}function yt(e){return e*(.5-Math.random())}function bt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xt(e){return e*ot}function St(e){return e*st}function Ct(e){return(e&e-1)==0&&e!==0}function wt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e,t,n,r,a){let o=Math.cos,s=Math.sin,c=o(n/2),l=s(n/2),u=o((t+r)/2),d=s((t+r)/2),f=o((t-r)/2),p=s((t-r)/2),m=o((r-t)/2),h=s((r-t)/2);switch(a){case`XYX`:e.set(c*d,l*f,l*p,c*u);break;case`YZY`:e.set(l*p,c*d,l*f,c*u);break;case`ZXZ`:e.set(l*f,l*p,c*d,c*u);break;case`XZX`:e.set(c*d,l*h,l*m,c*u);break;case`YXY`:e.set(l*m,c*d,l*h,c*u);break;case`ZYZ`:e.set(l*h,l*m,c*d,c*u);break;default:H(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+a)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var kt={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:W,euclideanModulo:lt,mapLinear:ut,inverseLerp:dt,lerp:ft,damp:pt,pingpong:mt,smoothstep:ht,smootherstep:gt,randInt:_t,randFloat:vt,randFloatSpread:yt,seededRandom:bt,degToRad:xt,radToDeg:St,isPowerOfTwo:Ct,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:Et,normalize:Ot,denormalize:Dt},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],f=a[o+0],p=a[o+1],m=a[o+2],h=a[o+3];if(d!==h||c!==f||l!==p||u!==m){let e=c*f+l*p+u*m+d*h;e<0&&(f=-f,p=-p,m=-m,h=-h,e=-e);let t=1-s;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,s=Math.sin(s*n)/r,c=c*t+f*s,l=l*t+p*s,u=u*t+m*s,d=d*t+h*s}else{c=c*t+f*s,l=l*t+p*s,u=u*t+m*s,d=d*t+h*s;let e=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=e,l*=e,u*=e,d*=e}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,o){let s=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=a[o],f=a[o+1],p=a[o+2],m=a[o+3];return e[t]=s*m+u*d+c*p-l*f,e[t+1]=c*m+u*f+l*d-s*p,e[t+2]=l*m+u*p+s*f-c*d,e[t+3]=u*m-s*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(r/2),d=s(a/2),f=c(n/2),p=c(r/2),m=c(a/2);switch(o){case`XYZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`YXZ`:this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`ZXY`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case`ZYX`:this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case`YZX`:this._x=f*u*d+l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d-f*p*m;break;case`XZY`:this._x=f*u*d-l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d+f*p*m;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+s+d;if(f>0){let e=.5/Math.sqrt(f+1);this._w=.25/e,this._x=(u-c)*e,this._y=(a-l)*e,this._z=(o-r)*e}else if(n>s&&n>d){let e=2*Math.sqrt(1+n-s-d);this._w=(u-c)/e,this._x=.25*e,this._y=(r+o)/e,this._z=(a+l)/e}else if(s>d){let e=2*Math.sqrt(1+s-n-d);this._w=(a-l)/e,this._x=(r+o)/e,this._y=.25*e,this._z=(c+u)/e}else{let e=2*Math.sqrt(1+d-n-s);this._w=(o-r)/e,this._x=(a+l)/e,this._y=(c+u)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-n*l,this._z=a*u+o*l+n*c-r*s,this._w=o*u-n*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,o=e._w,s=this.dot(e);s<0&&(n=-n,r=-r,a=-a,o=-o,s=-s);let c=1-t;if(s<.9995){let e=Math.acos(s),l=Math.sin(e);c=Math.sin(c*e)/l,t=Math.sin(t*e)/l,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*n),u=2*(s*t-a*r),d=2*(a*n-o*t);return this.x=t+c*l+o*d-s*u,this.y=n+c*u+s*l-a*d,this.z=r+c*d+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-n*c,this.z=n*s-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new K,Mt=new At,Nt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,a,o,s,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l)}set(e,t,n,r,a,o,s,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],m=n[8],h=r[0],g=r[3],_=r[6],v=r[1],y=r[4],b=r[7],x=r[2],S=r[5],C=r[8];return a[0]=o*h+s*v+c*x,a[3]=o*g+s*y+c*S,a[6]=o*_+s*b+c*C,a[1]=l*h+u*v+d*x,a[4]=l*g+u*y+d*S,a[7]=l*_+u*b+d*C,a[2]=f*h+p*v+m*x,a[5]=f*g+p*y+m*S,a[8]=f*_+p*b+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-n*a*u+n*s*c+r*a*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=u*o-s*l,f=s*c-u*a,p=l*a-o*c,m=t*d+n*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let h=1/m;return e[0]=d*h,e[1]=(r*l-u*n)*h,e[2]=(s*n-r*o)*h,e[3]=f*h,e[4]=(u*t-r*c)*h,e[5]=(r*a-s*t)*h,e[6]=p*h,e[7]=(n*c-l*t)*h,e[8]=(o*t-n*a)*h,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new Nt,Ft=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:Be,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Be]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=Je(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Je(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let e=0;e<a.length;e++)a[e]=zt(a[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}else return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new K,Jt=class e extends rt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,a=r,o=r,s=l,c=d,u=D,p=f,m=e.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ct(),this.name=``,this.source=new Wt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=s,this.minFilter=c,this.anisotropy=m,this.format=u,this.internalFormat=null,this.type=p,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,o=.01,s=.1,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],m=c[9],h=c[2],g=c[6],_=c[10];if(Math.abs(u-f)<o&&Math.abs(d-h)<o&&Math.abs(m-g)<o){if(Math.abs(u+f)<s&&Math.abs(d+h)<s&&Math.abs(m+g)<s&&Math.abs(l+p+_-3)<s)return this.set(1,0,0,0),this;t=Math.PI;let e=(l+1)/2,c=(p+1)/2,v=(_+1)/2,y=(u+f)/4,b=(d+h)/4,x=(m+g)/4;return e>c&&e>v?e<o?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(e),r=y/n,a=b/n):c>v?c<o?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(c),n=y/r,a=x/r):v<o?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(v),n=b/a,r=x/a),this.set(n,r,a,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-h)*(d-h)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-h)/v,this.z=(f-u)/v,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=new Jt({width:e,height:t,depth:n.depth}),a=n.count;for(let e=0;e<a;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=o,this.minFilter=o,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=o,this.minFilter=o,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},en=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,a,o,s,c,l,u,d,f,p,m,h,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,a,o,s,c,l,u,d,f,p,m,h,g){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=a,_[5]=o,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=d,_[14]=f,_[3]=p,_[7]=m,_[11]=h,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),a=1/tn.setFromMatrixColumn(e,1).length(),o=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order===`XYZ`){let e=o*u,n=o*d,r=s*u,a=s*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=n+r*l,t[5]=e-a*l,t[9]=-s*c,t[2]=a-e*l,t[6]=r+n*l,t[10]=o*c}else if(e.order===`YXZ`){let e=c*u,n=c*d,r=l*u,a=l*d;t[0]=e+a*s,t[4]=r*s-n,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=n*s-r,t[6]=a+e*s,t[10]=o*c}else if(e.order===`ZXY`){let e=c*u,n=c*d,r=l*u,a=l*d;t[0]=e-a*s,t[4]=-o*d,t[8]=r+n*s,t[1]=n+r*s,t[5]=o*u,t[9]=a-e*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order===`ZYX`){let e=o*u,n=o*d,r=s*u,a=s*d;t[0]=c*u,t[4]=r*l-n,t[8]=e*l+a,t[1]=c*d,t[5]=a*l+e,t[9]=n*l-r,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order===`YZX`){let e=o*c,n=o*l,r=s*c,a=s*l;t[0]=c*u,t[4]=a-e*d,t[8]=r*d+n,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=n*d+r,t[10]=e-a*d}else if(e.order===`XZY`){let e=o*c,n=o*l,r=s*c,a=s*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=e*d+a,t[5]=o*u,t[9]=n*d-r,t[2]=r*d-n,t[6]=s*u,t[10]=a*d+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],m=n[2],h=n[6],g=n[10],_=n[14],v=n[3],y=n[7],b=n[11],x=n[15],S=r[0],C=r[4],w=r[8],T=r[12],E=r[1],D=r[5],O=r[9],A=r[13],M=r[2],N=r[6],P=r[10],ee=r[14],F=r[3],te=r[7],I=r[11],L=r[15];return a[0]=o*S+s*E+c*M+l*F,a[4]=o*C+s*D+c*N+l*te,a[8]=o*w+s*O+c*P+l*I,a[12]=o*T+s*A+c*ee+l*L,a[1]=u*S+d*E+f*M+p*F,a[5]=u*C+d*D+f*N+p*te,a[9]=u*w+d*O+f*P+p*I,a[13]=u*T+d*A+f*ee+p*L,a[2]=m*S+h*E+g*M+_*F,a[6]=m*C+h*D+g*N+_*te,a[10]=m*w+h*O+g*P+_*I,a[14]=m*T+h*A+g*ee+_*L,a[3]=v*S+y*E+b*M+x*F,a[7]=v*C+y*D+b*N+x*te,a[11]=v*w+y*O+b*P+x*I,a[15]=v*T+y*A+b*ee+x*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],h=e[7],g=e[11],_=e[15],v=c*p-l*f,y=s*p-l*d,b=s*f-c*d,x=o*p-l*u,S=o*f-c*u,C=o*d-s*u;return t*(h*v-g*y+_*b)-n*(m*v-g*x+_*S)+r*(m*y-h*x+_*C)-a*(m*b-h*S+g*C)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],h=e[13],g=e[14],_=e[15],v=t*s-n*o,y=t*c-r*o,b=t*l-a*o,x=n*c-r*s,S=n*l-a*s,C=r*l-a*c,w=u*h-d*m,T=u*g-f*m,E=u*_-p*m,D=d*g-f*h,O=d*_-p*h,A=f*_-p*g,M=v*A-y*O+b*D+x*E-S*T+C*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/M;return e[0]=(s*A-c*O+l*D)*N,e[1]=(r*O-n*A-a*D)*N,e[2]=(h*C-g*S+_*x)*N,e[3]=(f*S-d*C-p*x)*N,e[4]=(c*E-o*A-l*T)*N,e[5]=(t*A-r*E+a*T)*N,e[6]=(g*b-m*C-_*y)*N,e[7]=(u*C-f*b+p*y)*N,e[8]=(o*O-s*E+l*w)*N,e[9]=(n*E-t*O-a*w)*N,e[10]=(m*S-h*b+_*v)*N,e[11]=(d*b-u*S-p*v)*N,e[12]=(s*T-o*D-c*w)*N,e[13]=(t*D-n*T+r*w)*N,e[14]=(h*y-m*x-g*v)*N,e[15]=(u*x-d*y+f*v)*N,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+n,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+n,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,d=s+s,f=a*l,p=a*u,m=a*d,h=o*u,g=o*d,_=s*d,v=c*l,y=c*u,b=c*d,x=n.x,S=n.y,C=n.z;return r[0]=(1-(h+_))*x,r[1]=(p+b)*x,r[2]=(m-y)*x,r[3]=0,r[4]=(p-b)*S,r[5]=(1-(f+_))*S,r[6]=(g+v)*S,r[7]=0,r[8]=(m+y)*C,r[9]=(g-v)*C,r[10]=(1-(f+h))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let o=tn.set(r[0],r[1],r[2]).length(),s=tn.set(r[4],r[5],r[6]).length(),c=tn.set(r[8],r[9],r[10]).length();a<0&&(o=-o),nn.copy(this);let l=1/o,u=1/s,d=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,t.setFromRotationMatrix(nn),n.x=o,n.y=s,n.z=c,this}makePerspective(e,t,n,r,a,o,s=Ge,c=!1){let l=this.elements,u=2*a/(t-e),d=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),m,h;if(c)m=a/(o-a),h=o*a/(o-a);else if(s===2e3)m=-(o+a)/(o-a),h=-2*o*a/(o-a);else if(s===2001)m=-o/(o-a),h=-o*a/(o-a);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=Ge,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),m,h;if(c)m=1/(o-a),h=o/(o-a);else if(s===2e3)m=-2/(o-a),h=-(o+a)/(o-a);else if(s===2001)m=-1/(o-a),h=-a/(o-a);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+s);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=h,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new K,nn=new en,rn=new K(0,0,0),an=new K(1,1,1),on=new K,sn=new K,cn=new K,ln=new en,un=new At,dn=class e{constructor(t=0,n=0,r=0,a=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case`XYZ`:this._y=Math.asin(W(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-W(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case`ZXY`:this._x=Math.asin(W(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case`ZYX`:this._y=Math.asin(-W(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case`YZX`:this._z=Math.asin(W(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case`XZY`:this._z=Math.asin(-W(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},pn=0,mn=new K,hn=new At,gn=new en,_n=new K,vn=new K,yn=new K,bn=new At,xn=new K(1,0,0),Sn=new K(0,1,0),Cn=new K(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new dn,r=new At,a=new K(1,1,1);function o(){r.setFromEuler(n,!1)}function s(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new en},normalMatrix:{value:new Nt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];a(e.shapes,r)}else a(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(a(e.materials,this.material[n]));r.material=t}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(a(e.animations,n))}}if(t){let t=o(e.geometries),r=o(e.materials),a=o(e.textures),s=o(e.images),c=o(e.shapes),l=o(e.skeletons),u=o(e.animations),d=o(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),a.length>0&&(n.textures=a),s.length>0&&(n.images=s),c.length>0&&(n.shapes=c),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),d.length>0&&(n.nodes=d)}return n.object=r,n;function o(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};On.DEFAULT_UP=new K(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null,s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){o=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),a=this._getHandJoint(l,r);e!==null&&(a.matrix.fromArray(e.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=e.radius),a.visible=e!==null}let r=l.joints[`index-finger-tip`],a=l.joints[`thumb-tip`],s=r.position.distanceTo(a.position);l.inputState.pinching&&s>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&s<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(An)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var In=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=lt(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fn(a,r,e+1/3),this.g=Fn(a,r,e),this.b=Fn(a,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,o=r[1],s=r[2];switch(o){case`rgb`:case`rgba`:if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case`hsl`:case`hsla`:if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=Mn[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(W(Ln.r*255,0,255))*65536+Math.round(W(Ln.g*255,0,255))*256+Math.round(W(Ln.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,a=Ln.b,o=Math.max(n,r,a),s=Math.min(n,r,a),c,l,u=(s+o)/2;if(s===o)c=0,l=0;else{let e=o-s;switch(l=u<=.5?e/(o+s):e/(2-o-s),o){case n:c=(r-a)/e+(r<a?6:0);break;case r:c=(a-n)/e+2;break;case a:c=(n-r)/e+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ze){Rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=ft(Nn.h,Pn.h,t),r=ft(Nn.s,Pn.s,t),a=ft(Nn.l,Pn.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new In;In.NAMES=Mn;var Rn=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new K,Jn=new K,Yn=new Yt,Xn=new Yt,Zn=new Yt,Qn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){zn.subVectors(r,t),Bn.subVectors(n,t),Vn.subVectors(e,t);let o=zn.dot(zn),s=zn.dot(Bn),c=zn.dot(Vn),l=Bn.dot(Bn),u=Bn.dot(Vn),d=o*l-s*s;if(d===0)return a.set(0,0,0),null;let f=1/d,p=(l*c-s*u)*f,m=(o*u-s*c)*f;return a.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,a,o,s,c){return this.getBarycoord(e,t,n,r,Hn)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(s,Hn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,o){return Yn.setScalar(0),Xn.setScalar(0),Zn.setScalar(0),Yn.fromBufferAttribute(e,t),Xn.fromBufferAttribute(e,n),Zn.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yn,a.x),o.addScaledVector(Xn,a.y),o.addScaledVector(Zn,a.z),o}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),Bn.subVectors(e,t),zn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),zn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,a,o){return e.getInterpolation(t,this.a,this.b,this.c,n,r,a,o)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,o,s;Un.subVectors(r,n),Wn.subVectors(a,n),Kn.subVectors(e,n);let c=Un.dot(Kn),l=Wn.dot(Kn);if(c<=0&&l<=0)return t.copy(n);qn.subVectors(e,r);let u=Un.dot(qn),d=Wn.dot(qn);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Un,o);Jn.subVectors(e,a);let p=Un.dot(Jn),m=Wn.dot(Jn);if(m>=0&&p<=m)return t.copy(a);let h=p*l-c*m;if(h<=0&&l>=0&&m<=0)return s=l/(l-m),t.copy(n).addScaledVector(Wn,s);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Gn.subVectors(a,r),s=(d-u)/(d-u+(p-m)),t.copy(r).addScaledVector(Gn,s);let _=1/(g+h+f);return o=h*_,s=f*_,t.copy(n).addScaledVector(Un,o).addScaledVector(Wn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,tr):tr.fromBufferAttribute(r,t),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),ur.subVectors(this.max,lr),rr.subVectors(e.a,lr),ir.subVectors(e.b,lr),ar.subVectors(e.c,lr),or.subVectors(ir,rr),sr.subVectors(ar,ir),cr.subVectors(rr,ar);let t=[0,-or.z,or.y,0,-sr.z,sr.y,0,-cr.z,cr.y,or.z,0,-or.x,sr.z,0,-sr.x,cr.z,0,-cr.x,-or.y,or.x,0,-sr.y,sr.x,0,-cr.y,cr.x,0];return!pr(t,rr,ir,ar,ur)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,rr,ir,ar,ur))?!1:(dr.crossVectors(or,sr),t=[dr.x,dr.y,dr.z],pr(t,rr,ir,ar,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},er=[new K,new K,new K,new K,new K,new K,new K,new K],tr=new K,nr=new $n,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K,ur=new K,dr=new K,fr=new K;function pr(e,t,n,r,a){for(let o=0,s=e.length-3;o<=s;o+=3){fr.fromArray(e,o);let s=a.x*Math.abs(fr.x)+a.y*Math.abs(fr.y)+a.z*Math.abs(fr.z),c=t.dot(fr),l=n.dot(fr),u=r.dot(fr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}var mr=new K,hr=new G,gr=0,_r=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix4(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyNormalMatrix(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.transformDirection(e),this.setXYZ(t,mr.x,mr.y,mr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},vr=class extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}},br=new $n,xr=new K,Sr=new K,Cr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?br.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,a=e.length;t<a;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Sr)),this.expandByPoint(xr.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wr=0,Tr=new en,Er=new On,Dr=new K,Or=new $n,kr=new $n,Ar=new K,jr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wr++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ke(e)?yr:vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Nt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tr.makeRotationFromQuaternion(e),this.applyMatrix4(Tr),this}rotateX(e){return Tr.makeRotationX(e),this.applyMatrix4(Tr),this}rotateY(e){return Tr.makeRotationY(e),this.applyMatrix4(Tr),this}rotateZ(e){return Tr.makeRotationZ(e),this.applyMatrix4(Tr),this}translate(e,t,n){return Tr.makeTranslation(e,t,n),this.applyMatrix4(Tr),this}scale(e,t,n){return Tr.makeScale(e,t,n),this.applyMatrix4(Tr),this}lookAt(e){return Er.lookAt(e),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(this.boundingBox.min,Or.min),this.boundingBox.expandByPoint(Ar),Ar.addVectors(this.boundingBox.max,Or.max),this.boundingBox.expandByPoint(Ar)):(this.boundingBox.expandByPoint(Or.min),this.boundingBox.expandByPoint(Or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Or.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];kr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ar.addVectors(Or.min,kr.min),Or.expandByPoint(Ar),Ar.addVectors(Or.max,kr.max),Or.expandByPoint(Ar)):(Or.expandByPoint(kr.min),Or.expandByPoint(kr.max))}Or.getCenter(n);let r=0;for(let t=0,a=e.count;t<a;t++)Ar.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ar));if(t)for(let a=0,o=t.length;a<o;a++){let o=t[a],s=this.morphTargetsRelative;for(let t=0,a=o.count;t<a;t++)Ar.fromBufferAttribute(o,t),s&&(Dr.fromBufferAttribute(e,t),Ar.add(Dr)),r=Math.max(r,n.distanceToSquared(Ar))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,a=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new _r(new Float32Array(4*n.count),4));let o=this.getAttribute(`tangent`),s=[],c=[];for(let e=0;e<n.count;e++)s[e]=new K,c[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(a,e),p.fromBufferAttribute(a,t),m.fromBufferAttribute(a,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let o=1/(p.x*m.y-m.x*p.y);isFinite(o)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(o),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(o),s[e].add(h),s[t].add(h),s[r].add(h),c[e].add(g),c[t].add(g),c[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,a=n.count;for(let t=r,n=r+a;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=s[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(c[e])<0?-1:1;o.setXYZW(e,y.x,y.y,y.z,n)}for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,a=n.count;for(let t=r,n=r+a;t<n;t+=3)C(e.getX(t+0)),C(e.getX(t+1)),C(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new _r(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K,d=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){let p=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,h),s.add(u),c.add(u),l.add(u),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let e=0,s=t.count;e<s;e+=3)r.fromBufferAttribute(t,e+0),a.fromBufferAttribute(t,e+1),o.fromBufferAttribute(t,e+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),n.setXYZ(e+0,u.x,u.y,u.z),n.setXYZ(e+1,u.x,u.y,u.z),n.setXYZ(e+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ar.fromBufferAttribute(e,t),Ar.normalize(),e.setXYZ(t,Ar.x,Ar.y,Ar.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,a=e.normalized,o=new n.constructor(t.length*r),s=0,c=0;for(let a=0,l=t.length;a<l;a++){s=e.isInterleavedBufferAttribute?t[a]*e.data.stride+e.offset:t[a]*r;for(let e=0;e<r;e++)o[c++]=n[s++]}return new _r(o,r,a)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,a=this.attributes;for(let e in a){let o=a[e],s=t(o,r);n.setAttribute(e,s)}let o=this.morphAttributes;for(let e in o){let a=[],s=o[e];for(let e=0,n=s.length;e<n;e++){let n=s[e],o=t(n,r);a.push(o)}n.morphAttributes[e]=a}n.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let e=0,t=s.length;e<t;e++){let t=s[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},a=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],o=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];o.push(r.toJSON(e.data))}o.length>0&&(r[t]=o,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let a=e.morphAttributes;for(let e in a){let n=[],r=a[e];for(let e=0,a=r.length;e<a;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];this.addGroup(t.start,t.count,t.materialIndex)}let s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mr=0,Nr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new In(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){H(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),a=r(e.images);t.length>0&&(n.textures=t),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=new K,zr=new K,Br=new K,Vr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fr.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Fr);let a=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),s=Lr.dot(this.direction),c=-Lr.dot(Ir),l=Lr.lengthSq(),u=Math.abs(1-o*o),d,f,p,m;if(u>0)if(d=o*c-s,f=o*s-c,m=a*u,d>=0)if(f>=-m)if(f<=m){let e=1/u;d*=e,f*=e,p=d*(d+o*f+2*s)+f*(o*d+f+2*c)+l}else f=a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;else f=-a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-a,-c),a),p=f*(f+2*c)+l):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-c),a),p=-d*d+f*(f+2*c)+l);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fr).addScaledVector(Ir,f),p}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);let n=Pr.dot(this.direction),r=Pr.dot(Pr)-n*n,a=e.radius*e.radius;if(r>a)return null;let o=Math.sqrt(a-r),s=n-o,c=n+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||s>r)||((s>n||n!==n)&&(n=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,r,a){Rr.subVectors(t,e),zr.subVectors(n,e),Br.crossVectors(Rr,zr);let o=this.direction.dot(Br),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Lr.subVectors(this.origin,e);let c=s*this.direction.dot(zr.crossVectors(Lr,zr));if(c<0)return null;let l=s*this.direction.dot(Rr.cross(Lr));if(l<0||c+l>o)return null;let u=-s*Lr.dot(Br);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ur=new en,Wr=new Vr,Gr=new Cr,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,Zr=new K,Qr=new K,$r=new K,J=class extends On{constructor(e=new jr,t=new Hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Zr.set(0,0,0);for(let n=0,r=a.length;n<r;n++){let r=s[n],c=a[n];r!==0&&(Xr.fromBufferAttribute(c,e),o?Zr.addScaledVector(Xr,r):Zr.addScaledVector(Xr.sub(t),r))}t.add(Zr)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(a),Wr.copy(e.ray).recast(e.near),!(Gr.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Gr,Kr)===null||Wr.origin.distanceToSquared(Kr)>(e.far-e.near)**2))&&(Ur.copy(a).invert(),Wr.copy(e.ray).applyMatrix4(Ur),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let a=0,c=f.length;a<c;a++){let c=f[a],m=o[c.materialIndex],h=Math.max(c.start,p.start),g=Math.min(s.count,Math.min(c.start+c.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=s.getX(a),f=s.getX(a+1),p=s.getX(a+2);r=ti(this,m,e,n,l,u,d,o,f,p),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=c.materialIndex,t.push(r))}}else{let a=Math.max(0,p.start),c=Math.min(s.count,p.start+p.count);for(let f=a,p=c;f<p;f+=3){let a=s.getX(f),c=s.getX(f+1),p=s.getX(f+2);r=ti(this,o,e,n,l,u,d,a,c,p),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let a=0,s=f.length;a<s;a++){let s=f[a],m=o[s.materialIndex],h=Math.max(s.start,p.start),g=Math.min(c.count,Math.min(s.start+s.count,p.start+p.count));for(let a=h,o=g;a<o;a+=3){let o=a,c=a+1,f=a+2;r=ti(this,m,e,n,l,u,d,o,c,f),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let a=Math.max(0,p.start),s=Math.min(c.count,p.start+p.count);for(let c=a,f=s;c<f;c+=3){let a=c,s=c+1,f=c+2;r=ti(this,o,e,n,l,u,d,a,s,f),r&&(r.faceIndex=Math.floor(c/3),t.push(r))}}}};function ei(e,t,n,r,a,o,s,c){let l;if(l=t.side===1?r.intersectTriangle(s,o,a,!0,c):r.intersectTriangle(a,o,s,t.side===0,c),l===null)return null;$r.copy(c),$r.applyMatrix4(e.matrixWorld);let u=n.ray.origin.distanceTo($r);return u<n.near||u>n.far?null:{distance:u,point:$r.clone(),object:e}}function ti(e,t,n,r,a,o,s,c,l,u){e.getVertexPosition(c,qr),e.getVertexPosition(l,Jr),e.getVertexPosition(u,Yr);let d=ei(e,t,n,r,qr,Jr,Yr,Qr);if(d){let e=new K;Qn.getBarycoord(Qr,qr,Jr,Yr,e),a&&(d.uv=Qn.getInterpolatedAttribute(a,c,l,u,e,new G)),o&&(d.uv1=Qn.getInterpolatedAttribute(o,c,l,u,e,new G)),s&&(d.normal=Qn.getInterpolatedAttribute(s,c,l,u,e,new K),d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1));let t={a:c,b:l,c:u,normal:new K,materialIndex:0};Qn.getNormal(qr,Jr,Yr,t.normal),d.face=t,d.barycoord=e}return d}var ni=class extends Jt{constructor(e=null,t=1,n=1,r,a,s,c,l,u=o,d=o,f,p){super(null,s,c,l,u,d,r,a,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=new K,ii=new K,ai=new Nt,oi=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ri.subVectors(n,t).cross(ii.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ri),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ai.getNormalMatrix(e),r=this.coplanarPoint(ri).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new Cr,ci=new G(.5,.5),li=new K,ui=class{constructor(e=new oi,t=new oi,n=new oi,r=new oi,a=new oi,o=new oi){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ge,n=!1){let r=this.planes,a=e.elements,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],p=a[7],m=a[8],h=a[9],g=a[10],_=a[11],v=a[12],y=a[13],b=a[14],x=a[15];if(r[0].setComponents(l-o,p-u,_-m,x-v).normalize(),r[1].setComponents(l+o,p+u,_+m,x+v).normalize(),r[2].setComponents(l+s,p+d,_+h,x+y).normalize(),r[3].setComponents(l-s,p-d,_-h,x-y).normalize(),n)r[4].setComponents(c,f,g,b).normalize(),r[5].setComponents(l-c,p-f,_-g,x-b).normalize();else if(r[4].setComponents(l-c,p-f,_-g,x-b).normalize(),t===2e3)r[5].setComponents(l+c,p+f,_+g,x+b).normalize();else if(t===2001)r[5].setComponents(c,f,g,b).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476+ci.distanceTo(e.center),si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(li.x=r.normal.x>0?e.max.x:e.min.x,li.y=r.normal.y>0?e.max.y:e.min.y,li.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},di=class extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new In(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fi=new K,pi=new K,mi=new en,hi=new Vr,gi=new Cr,_i=new K,vi=new K,yi=class extends On{constructor(e=new jr,t=new di){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)fi.fromBufferAttribute(t,e-1),pi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=fi.distanceTo(pi);e.setAttribute(`lineDistance`,new q(n,1))}else H(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere),gi.applyMatrix4(r),gi.radius+=a,e.ray.intersectsSphere(gi)===!1)return;mi.copy(r).invert(),hi.copy(e.ray).applyMatrix4(mi);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let n=Math.max(0,o.start),r=Math.min(u.count,o.start+o.count);for(let a=n,o=r-1;a<o;a+=l){let n=u.getX(a),r=u.getX(a+1),o=bi(this,e,hi,c,n,r,a);o&&t.push(o)}if(this.isLineLoop){let a=u.getX(r-1),o=u.getX(n),s=bi(this,e,hi,c,a,o,r-1);s&&t.push(s)}}else{let n=Math.max(0,o.start),r=Math.min(d.count,o.start+o.count);for(let a=n,o=r-1;a<o;a+=l){let n=bi(this,e,hi,c,a,a+1,a);n&&t.push(n)}if(this.isLineLoop){let a=bi(this,e,hi,c,r-1,n,r-1);a&&t.push(a)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function bi(e,t,n,r,a,o,s){let c=e.geometry.attributes.position;if(fi.fromBufferAttribute(c,a),pi.fromBufferAttribute(c,o),n.distanceSqToSegment(fi,pi,_i,vi)>r)return;_i.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(_i);if(!(l<t.near||l>t.far))return{distance:l,point:vi.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var xi=new K,Si=new K,Ci=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)xi.fromBufferAttribute(t,e),Si.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+xi.distanceTo(Si);e.setAttribute(`lineDistance`,new q(n,1))}else H(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},wi=class extends Nr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new In(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ti=new en,Ei=new Vr,Di=new Cr,Oi=new K,ki=class extends On{constructor(e=new jr,t=new wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=a,e.ray.intersectsSphere(Di)===!1)return;Ti.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Ti);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,o.start),a=Math.min(l.count,o.start+o.count);for(let o=n,s=a;o<s;o++){let n=l.getX(o);Oi.fromBufferAttribute(u,n),Ai(Oi,n,c,r,e,t,this)}}else{let n=Math.max(0,o.start),a=Math.min(u.count,o.start+o.count);for(let o=n,s=a;o<s;o++)Oi.fromBufferAttribute(u,o),Ai(Oi,o,c,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,a,o,s){let c=Ei.distanceSqToPoint(e);if(c<n){let n=new K;Ei.closestPointToPoint(e,n),n.applyMatrix4(r);let l=a.ray.origin.distanceTo(n);if(l<a.near||l>a.far)return;o.push({distance:l,distanceToRay:Math.sqrt(c),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var ji=class extends Jt{constructor(e=[],t=301,n,r,a,o,s,c,l,u){super(e,t,n,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends Jt{constructor(e,t,n=_,r,a,s,c=o,l=o,u,d=O,f=1){if(d!==1026&&d!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:f},r,a,s,c,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ni=class extends Mi{constructor(e,t=_,n=301,r,a,s=o,c=o,l,u=O){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,a,s,c,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends jr{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};let s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,p=0;m(`z`,`y`,`x`,-1,-1,n,t,e,o,a,0),m(`z`,`y`,`x`,1,-1,n,t,-e,o,a,1),m(`x`,`z`,`y`,1,1,e,n,t,r,o,2),m(`x`,`z`,`y`,1,-1,e,n,-t,r,o,3),m(`x`,`y`,`z`,1,-1,e,t,n,r,a,4),m(`x`,`y`,`z`,-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute(`position`,new q(l,3)),this.setAttribute(`normal`,new q(u,3)),this.setAttribute(`uv`,new q(d,2));function m(e,t,n,r,a,o,m,h,g,_,v){let y=o/g,b=m/_,x=o/2,S=m/2,C=h/2,w=g+1,T=_+1,E=0,D=0,O=new K;for(let o=0;o<T;o++){let s=o*b-S;for(let c=0;c<w;c++)O[e]=(c*y-x)*r,O[t]=s*a,O[n]=C,l.push(O.x,O.y,O.z),O[e]=0,O[t]=0,O[n]=h>0?1:-1,u.push(O.x,O.y,O.z),d.push(c/g),d.push(1-o/_),E+=1}for(let e=0;e<_;e++)for(let t=0;t<g;t++){let n=f+t+w*e,r=f+t+w*(e+1),a=f+(t+1)+w*(e+1),o=f+(t+1)+w*e;c.push(n,r,o),c.push(r,a,o),D+=6}s.addGroup(p,D,v),p+=D,f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class e extends jr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let a=[],o=[],s=[],c=[],l=new K,u=new G;o.push(0,0,0),s.push(0,0,1),c.push(.5,.5);for(let a=0,d=3;a<=t;a++,d+=3){let f=n+a/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),s.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let e=1;e<=t;e++)a.push(e,e+1,0);this.setIndex(a),this.setAttribute(`position`,new q(o,3)),this.setAttribute(`normal`,new q(s,3)),this.setAttribute(`uv`,new q(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Li=class e extends jr{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};let l=this;r=Math.floor(r),a=Math.floor(a);let u=[],d=[],f=[],p=[],m=0,h=[],g=n/2,_=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute(`position`,new q(d,3)),this.setAttribute(`normal`,new q(f,3)),this.setAttribute(`uv`,new q(p,2));function v(){let o=new K,v=new K,y=0,b=(t-e)/n;for(let l=0;l<=a;l++){let u=[],_=l/a,y=_*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,a=t*c+s,l=Math.sin(a),h=Math.cos(a);v.x=y*l,v.y=-_*n+g,v.z=y*h,d.push(v.x,v.y,v.z),o.set(l,b,h).normalize(),f.push(o.x,o.y,o.z),p.push(t,1-_),u.push(m++)}h.push(u)}for(let n=0;n<r;n++)for(let r=0;r<a;r++){let o=h[r][n],s=h[r+1][n],c=h[r+1][n+1],l=h[r][n+1];(e>0||r!==0)&&(u.push(o,s,l),y+=3),(t>0||r!==a-1)&&(u.push(s,c,l),y+=3)}l.addGroup(_,y,0),_+=y}function y(n){let a=m,o=new G,h=new K,v=0,y=n===!0?e:t,b=n===!0?1:-1;for(let e=1;e<=r;e++)d.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),m++;let x=m;for(let e=0;e<=r;e++){let t=e/r*c+s,n=Math.cos(t),a=Math.sin(t);h.x=y*a,h.y=g*b,h.z=y*n,d.push(h.x,h.y,h.z),f.push(0,b,0),o.x=n*.5+.5,o.y=a*.5*b+.5,p.push(o.x,o.y),m++}for(let e=0;e<r;e++){let t=a+e,r=x+e;n===!0?u.push(r,r+1,t):u.push(r+1,r,t),v+=3}l.addGroup(_,v,n===!0?1:2),_+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ri=class e extends Li{constructor(e=1,t=1,n=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,n,r,a,o,s),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class e extends jr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let a=[],o=[];s(r),l(n),u(),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(a.slice(),3)),this.setAttribute(`uv`,new q(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function s(e){let n=new K,r=new K,a=new K;for(let o=0;o<t.length;o+=3)p(t[o+0],n),p(t[o+1],r),p(t[o+2],a),c(n,r,a,e)}function c(e,t,n,r){let a=r+1,o=[];for(let r=0;r<=a;r++){o[r]=[];let s=e.clone().lerp(n,r/a),c=t.clone().lerp(n,r/a),l=a-r;for(let e=0;e<=l;e++)e===0&&r===a?o[r][e]=s:o[r][e]=s.clone().lerp(c,e/l)}for(let e=0;e<a;e++)for(let t=0;t<2*(a-e)-1;t++){let n=Math.floor(t/2);t%2==0?(f(o[e][n+1]),f(o[e+1][n]),f(o[e][n])):(f(o[e][n+1]),f(o[e+1][n+1]),f(o[e+1][n]))}}function l(e){let t=new K;for(let n=0;n<a.length;n+=3)t.x=a[n+0],t.y=a[n+1],t.z=a[n+2],t.normalize().multiplyScalar(e),a[n+0]=t.x,a[n+1]=t.y,a[n+2]=t.z}function u(){let e=new K;for(let t=0;t<a.length;t+=3){e.x=a[t+0],e.y=a[t+1],e.z=a[t+2];let n=g(e)/2/Math.PI+.5,r=_(e)/Math.PI+.5;o.push(n,1-r)}m(),d()}function d(){for(let e=0;e<o.length;e+=6){let t=o[e+0],n=o[e+2],r=o[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(o[e+0]+=1),n<.2&&(o[e+2]+=1),r<.2&&(o[e+4]+=1))}}function f(e){a.push(e.x,e.y,e.z)}function p(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function m(){let e=new K,t=new K,n=new K,r=new K,s=new G,c=new G,l=new G;for(let u=0,d=0;u<a.length;u+=9,d+=6){e.set(a[u+0],a[u+1],a[u+2]),t.set(a[u+3],a[u+4],a[u+5]),n.set(a[u+6],a[u+7],a[u+8]),s.set(o[d+0],o[d+1]),c.set(o[d+2],o[d+3]),l.set(o[d+4],o[d+5]),r.copy(e).add(t).add(n).divideScalar(3);let f=g(r);h(s,d+0,e,f),h(c,d+2,t,f),h(l,d+4,n,f)}}function h(e,t,n,r){r<0&&e.x===1&&(o[t]=e.x-1),n.x===0&&n.z===0&&(o[t]=r/2/Math.PI+.5)}function g(e){return Math.atan2(e.z,-e.x)}function _(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Bi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){H(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,a=n.length,o;o=t||e*n[a-1];let s=0,c=a-1,l;for(;s<=c;)if(r=Math.floor(s+(c-s)/2),l=n[r]-o,l<0)s=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(a-1);let u=n[r],d=n[r+1]-u,f=(o-u)/d;return(r+f)/(a-1)}getTangent(e,t){let n=1e-4,r=e-n,a=e+n;r<0&&(r=0),a>1&&(a=1);let o=this.getPoint(r),s=this.getPoint(a),c=t||(o.isVector2?new G:new K);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],a=[],o=[],s=new K,c=new en;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}a[0]=new K,o[0]=new K;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),s.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let t=1;t<=e;t++){if(a[t]=a[t-1].clone(),o[t]=o[t-1].clone(),s.crossVectors(r[t-1],r[t]),s.length()>2**-52){s.normalize();let e=Math.acos(W(r[t-1].dot(r[t]),-1,1));a[t].applyMatrix4(c.makeRotationAxis(s,e))}o[t].crossVectors(r[t],a[t])}if(t===!0){let t=Math.acos(W(a[0].dot(a[e]),-1,1));t/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(t=-t);for(let n=1;n<=e;n++)a[n].applyMatrix4(c.makeRotationAxis(r[n],t*n)),o[n].crossVectors(r[n],a[n])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vi=class extends Bi{constructor(e=0,t=0,n=1,r=1,a=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t=new G){let n=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,o=Math.abs(a)<2**-52;for(;a<0;)a+=r;for(;a>r;)a-=r;a<2**-52&&(a=o?0:r),this.aClockwise===!0&&!o&&(a===r?a=-r:a-=r);let s=this.aStartAngle+e*a,c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=c-this.aX,r=l-this.aY;c=n*e-r*t+this.aX,l=n*t+r*e+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hi=class extends Vi{constructor(e,t,n,r,a,o){super(e,t,n,n,r,a,o),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ui(){let e=0,t=0,n=0,r=0;function a(a,o,s,c){e=a,t=s,n=-3*a+3*o-2*s-c,r=2*a-2*o+s+c}return{initCatmullRom:function(e,t,n,r,o){a(t,n,o*(n-e),o*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,o,s,c){let l=(t-e)/o-(n-e)/(o+s)+(n-t)/s,u=(n-t)/s-(r-t)/(s+c)+(r-n)/c;l*=s,u*=s,a(t,n,l,u)},calc:function(a){let o=a*a,s=o*a;return e+t*a+n*o+r*s}}}var Wi=new K,Gi=new K,Ki=new Ui,qi=new Ui,Ji=new Ui,Yi=class extends Bi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,a=r.length,o=(a-+!this.closed)*e,s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:c===0&&s===a-1&&(s=a-2,c=1);let l,u;this.closed||s>0?l=r[(s-1)%a]:(Gi.subVectors(r[0],r[1]).add(r[0]),l=Gi);let d=r[s%a],f=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(Wi.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Wi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=l.distanceToSquared(d)**+e,n=d.distanceToSquared(f)**+e,r=f.distanceToSquared(u)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ki.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,t,n,r),qi.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,t,n,r),Ji.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,t,n,r)}else this.curveType===`catmullrom`&&(Ki.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),qi.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Ji.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Ki.calc(c),qi.calc(c),Ji.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xi(e,t,n,r,a){let o=(r-t)*.5,s=(a-n)*.5,c=e*e,l=e*c;return(2*n-2*r+o+s)*l+(-3*n+3*r-2*o-s)*c+o*e+n}function Zi(e,t){let n=1-e;return n*n*t}function Qi(e,t){return 2*(1-e)*e*t}function $i(e,t){return e*e*t}function ea(e,t,n,r){return Zi(e,t)+Qi(e,n)+$i(e,r)}function ta(e,t){let n=1-e;return n*n*n*t}function na(e,t){let n=1-e;return 3*n*n*e*t}function ra(e,t){return 3*(1-e)*e*e*t}function ia(e,t){return e*e*e*t}function aa(e,t,n,r,a){return ta(e,t)+na(e,n)+ra(e,r)+ia(e,a)}var oa=class extends Bi{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(aa(e,r.x,a.x,o.x,s.x),aa(e,r.y,a.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Bi{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(aa(e,r.x,a.x,o.x,s.x),aa(e,r.y,a.y,o.y,s.y),aa(e,r.z,a.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ca=class extends Bi{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Bi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Bi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(ea(e,r.x,a.x,o.x),ea(e,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Bi{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(ea(e,r.x,a.x,o.x),ea(e,r.y,a.y,o.y),ea(e,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Xi(s,c.x,l.x,u.x,d.x),Xi(s,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},pa=Object.freeze({__proto__:null,ArcCurve:Hi,CatmullRomCurve3:Yi,CubicBezierCurve:oa,CubicBezierCurve3:sa,EllipseCurve:Vi,LineCurve:ca,LineCurve3:la,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:fa}),ma=class extends Bi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=n){let e=r[a]-n,o=this.curves[a],s=o.getLength(),c=s===0?0:1-e/s;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,a=this.curves;r<a.length;r++){let o=a[r],s=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(s);for(let e=0;e<c.length;e++){let r=c[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new pa[n.type]().fromJSON(n))}return this}},ha=class extends ma{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ca(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let a=new ua(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,o){let s=new oa(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){let t=new fa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,o){let s=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+s,t+c,n,r,a,o),this}absarc(e,t,n,r,a,o){return this.absellipse(e,t,n,n,r,a,o),this}ellipse(e,t,n,r,a,o,s,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,a,o,s,c),this}absellipse(e,t,n,r,a,o,s,c){let l=new Vi(e,t,n,r,a,o,s,c);if(this.curves.length>0){let e=l.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ga=class extends ha{constructor(e){super(e),this.uuid=ct(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ha().fromJSON(n))}return this}};function _a(e,t,n=2){let r=t&&t.length,a=r?t[0]*n:e.length,o=va(e,0,a,n,!0),s=[];if(!o||o.next===o.prev)return s;let c,l,u;if(r&&(o=Ta(e,t,o,n)),e.length>80*n){c=e[0],l=e[1];let t=c,r=l;for(let o=n;o<a;o+=n){let n=e[o],a=e[o+1];n<c&&(c=n),a<l&&(l=a),n>t&&(t=n),a>r&&(r=a)}u=Math.max(t-c,r-l),u=u===0?0:32767/u}return ba(o,s,n,c,l,u,0),s}function va(e,t,n,r,a){let o;if(a===Ya(e,t,n,r)>0)for(let a=t;a<n;a+=r)o=Ka(a/r|0,e[a],e[a+1],o);else for(let a=n-r;a>=t;a-=r)o=Ka(a/r|0,e[a],e[a+1],o);return o&&Ra(o,o.next)&&(qa(o),o=o.next),o}function ya(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ra(n,n.next)||La(n.prev,n,n.next)===0)){if(qa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ba(e,t,n,r,a,o,s){if(!e)return;!s&&o&&Aa(e,r,a,o);let c=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(o?Sa(e,r,a,o):xa(e)){t.push(l.i,e.i,u.i),qa(e),e=u.next,c=u.next;continue}if(e=u,e===c){s?s===1?(e=Ca(ya(e),t),ba(e,t,n,r,a,o,2)):s===2&&wa(e,t,n,r,a,o):ba(ya(e),t,n,r,a,o,1);break}}}function xa(e){let t=e.prev,n=e,r=e.next;if(La(t,n,r)>=0)return!1;let a=t.x,o=n.x,s=r.x,c=t.y,l=n.y,u=r.y,d=Math.min(a,o,s),f=Math.min(c,l,u),p=Math.max(a,o,s),m=Math.max(c,l,u),h=r.next;for(;h!==t;){if(h.x>=d&&h.x<=p&&h.y>=f&&h.y<=m&&Fa(a,c,o,l,s,u,h.x,h.y)&&La(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function Sa(e,t,n,r){let a=e.prev,o=e,s=e.next;if(La(a,o,s)>=0)return!1;let c=a.x,l=o.x,u=s.x,d=a.y,f=o.y,p=s.y,m=Math.min(c,l,u),h=Math.min(d,f,p),g=Math.max(c,l,u),_=Math.max(d,f,p),v=Ma(m,h,t,n,r),y=Ma(g,_,t,n,r),b=e.prevZ,x=e.nextZ;for(;b&&b.z>=v&&x&&x.z<=y;){if(b.x>=m&&b.x<=g&&b.y>=h&&b.y<=_&&b!==a&&b!==s&&Fa(c,d,l,f,u,p,b.x,b.y)&&La(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=m&&x.x<=g&&x.y>=h&&x.y<=_&&x!==a&&x!==s&&Fa(c,d,l,f,u,p,x.x,x.y)&&La(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=v;){if(b.x>=m&&b.x<=g&&b.y>=h&&b.y<=_&&b!==a&&b!==s&&Fa(c,d,l,f,u,p,b.x,b.y)&&La(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=g&&x.y>=h&&x.y<=_&&x!==a&&x!==s&&Fa(c,d,l,f,u,p,x.x,x.y)&&La(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ca(e,t){let n=e;do{let r=n.prev,a=n.next.next;!Ra(r,a)&&za(r,n,n.next,a)&&Ua(r,a)&&Ua(a,r)&&(t.push(r.i,n.i,a.i),qa(n),qa(n.next),n=e=a),n=n.next}while(n!==e);return ya(n)}function wa(e,t,n,r,a,o){let s=e;do{let e=s.next.next;for(;e!==s.prev;){if(s.i!==e.i&&Ia(s,e)){let c=Ga(s,e);s=ya(s,s.next),c=ya(c,c.next),ba(s,t,n,r,a,o,0),ba(c,t,n,r,a,o,0);return}e=e.next}s=s.next}while(s!==e)}function Ta(e,t,n,r){let a=[];for(let n=0,o=t.length;n<o;n++){let s=va(e,t[n]*r,n<o-1?t[n+1]*r:e.length,r,!1);s===s.next&&(s.steiner=!0),a.push(Na(s))}a.sort(Ea);for(let e=0;e<a.length;e++)n=Da(a[e],n);return n}function Ea(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Da(e,t){let n=Oa(e,t);if(!n)return t;let r=Ga(n,e);return ya(r,r.next),ya(n,n.next)}function Oa(e,t){let n=t,r=e.x,a=e.y,o=-1/0,s;if(Ra(e,n))return n;do{if(Ra(e,n.next))return n.next;if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let e=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>o&&(o=e,s=n.x<n.next.x?n:n.next,e===r))return s}n=n.next}while(n!==t);if(!s)return null;let c=s,l=s.x,u=s.y,d=1/0;n=s;do{if(r>=n.x&&n.x>=l&&r!==n.x&&Pa(a<u?r:o,a,l,u,a<u?o:r,a,n.x,n.y)){let t=Math.abs(a-n.y)/(r-n.x);Ua(n,e)&&(t<d||t===d&&(n.x>s.x||n.x===s.x&&ka(s,n)))&&(s=n,d=t)}n=n.next}while(n!==c);return s}function ka(e,t){return La(e.prev,e,t.prev)<0&&La(t.next,e,e.next)<0}function Aa(e,t,n,r){let a=e;do a.z===0&&(a.z=Ma(a.x,a.y,t,n,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,ja(a)}function ja(e){let t,n=1;do{let r=e,a;e=null;let o=null;for(t=0;r;){t++;let s=r,c=0;for(let e=0;e<n&&(c++,s=s.nextZ,s);e++);let l=n;for(;c>0||l>0&&s;)c!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,c--):(a=s,s=s.nextZ,l--),o?o.nextZ=a:e=a,a.prevZ=o,o=a;r=s}o.nextZ=null,n*=2}while(t>1);return e}function Ma(e,t,n,r,a){return e=(e-n)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Na(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Pa(e,t,n,r,a,o,s,c){return(a-s)*(t-c)>=(e-s)*(o-c)&&(e-s)*(r-c)>=(n-s)*(t-c)&&(n-s)*(o-c)>=(a-s)*(r-c)}function Fa(e,t,n,r,a,o,s,c){return!(e===s&&t===c)&&Pa(e,t,n,r,a,o,s,c)}function Ia(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ha(e,t)&&(Ua(e,t)&&Ua(t,e)&&Wa(e,t)&&(La(e.prev,e,t.prev)||La(e,t.prev,t))||Ra(e,t)&&La(e.prev,e,e.next)>0&&La(t.prev,t,t.next)>0)}function La(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ra(e,t){return e.x===t.x&&e.y===t.y}function za(e,t,n,r){let a=Va(La(e,t,n)),o=Va(La(e,t,r)),s=Va(La(n,r,e)),c=Va(La(n,r,t));return!!(a!==o&&s!==c||a===0&&Ba(e,n,t)||o===0&&Ba(e,r,t)||s===0&&Ba(n,e,r)||c===0&&Ba(n,t,r))}function Ba(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Va(e){return e>0?1:e<0?-1:0}function Ha(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&za(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ua(e,t){return La(e.prev,e,e.next)<0?La(e,t,e.next)>=0&&La(e,e.prev,t)>=0:La(e,t,e.prev)<0||La(e,e.next,t)<0}function Wa(e,t){let n=e,r=!1,a=(e.x+t.x)/2,o=(e.y+t.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ga(e,t){let n=Ja(e.i,e.x,e.y),r=Ja(t.i,t.x,t.y),a=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Ka(e,t,n,r){let a=Ja(e,t,n);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function qa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ja(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ya(e,t,n,r){let a=0;for(let o=t,s=n-r;o<n;o+=r)a+=(e[s]-e[o])*(e[o+1]+e[s+1]),s=o;return a}var Xa=class{static triangulate(e,t,n=2){return _a(e,t,n)}},Za=class e{static area(e){let t=e.length,n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],a=[];Qa(e),$a(n,e);let o=e.length;t.forEach(Qa);for(let e=0;e<t.length;e++)r.push(o),o+=t[e].length,$a(n,t[e]);let s=Xa.triangulate(n,r);for(let e=0;e<s.length;e+=3)a.push(s.slice(e,e+3));return a}};function Qa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $a(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var eo=class e extends jr{constructor(e=new ga([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],a=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];o(n)}this.setAttribute(`position`,new q(r,3)),this.setAttribute(`uv`,new q(a,2)),this.computeVertexNormals();function o(e){let o=[],s=t.curveSegments===void 0?12:t.curveSegments,c=t.steps===void 0?1:t.steps,l=t.depth===void 0?1:t.depth,u=t.bevelEnabled===void 0?!0:t.bevelEnabled,d=t.bevelThickness===void 0?.2:t.bevelThickness,f=t.bevelSize===void 0?d-.1:t.bevelSize,p=t.bevelOffset===void 0?0:t.bevelOffset,m=t.bevelSegments===void 0?3:t.bevelSegments,h=t.extrudePath,g=t.UVGenerator===void 0?to:t.UVGenerator,_,v=!1,y,b,x,S;if(h){_=h.getSpacedPoints(c),v=!0,u=!1;let e=h.isCatmullRomCurve3?h.closed:!1;y=h.computeFrenetFrames(c,e),b=new K,x=new K,S=new K}u||(m=0,d=0,f=0,p=0);let C=e.extractPoints(s),w=C.shape,T=C.holes;if(!Za.isClockWise(w)){w=w.reverse();for(let e=0,t=T.length;e<t;e++){let t=T[e];Za.isClockWise(t)&&(T[e]=t.reverse())}}function E(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,a=e[r],o=a.x-t.x,s=a.y-t.y,c=o*o+s*s,l=Math.max(Math.abs(a.x),Math.abs(a.y),Math.abs(t.x),Math.abs(t.y));if(c<=10000000000000001e-36*l*l){e.splice(r,1),n--;continue}t=a}}E(w),T.forEach(E);let D=T.length,O=w;for(let e=0;e<D;e++){let t=T[e];w=w.concat(t)}function A(e,t,n){return t||U(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let M=w.length;function N(e,t,n){let r,a,o,s=e.x-t.x,c=e.y-t.y,l=n.x-e.x,u=n.y-e.y,d=s*s+c*c,f=s*u-c*l;if(Math.abs(f)>2**-52){let f=Math.sqrt(d),p=Math.sqrt(l*l+u*u),m=t.x-c/f,h=t.y+s/f,g=n.x-u/p,_=n.y+l/p,v=((g-m)*u-(_-h)*l)/(s*u-c*l);r=m+s*v-e.x,a=h+c*v-e.y;let y=r*r+a*a;if(y<=2)return new G(r,a);o=Math.sqrt(y/2)}else{let e=!1;s>2**-52?l>2**-52&&(e=!0):s<-(2**-52)?l<-(2**-52)&&(e=!0):Math.sign(c)===Math.sign(u)&&(e=!0),e?(r=-c,a=s,o=Math.sqrt(d)):(r=s,a=c,o=Math.sqrt(d/2))}return new G(r/o,a/o)}let P=[];for(let e=0,t=O.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),P[e]=N(O[e],O[n],O[r]);let ee=[],F,te=P.concat();for(let e=0,t=D;e<t;e++){let t=T[e];F=[];for(let e=0,n=t.length,r=n-1,a=e+1;e<n;e++,r++,a++)r===n&&(r=0),a===n&&(a=0),F[e]=N(t[e],t[r],t[a]);ee.push(F),te=te.concat(F)}let I;if(m===0)I=Za.triangulateShape(O,T);else{let e=[],t=[];for(let n=0;n<m;n++){let r=n/m,a=d*Math.cos(r*Math.PI/2),o=f*Math.sin(r*Math.PI/2)+p;for(let t=0,n=O.length;t<n;t++){let n=A(O[t],P[t],o);R(n.x,n.y,-a),r===0&&e.push(n)}for(let e=0,n=D;e<n;e++){let n=T[e];F=ee[e];let s=[];for(let e=0,t=n.length;e<t;e++){let t=A(n[e],F[e],o);R(t.x,t.y,-a),r===0&&s.push(t)}r===0&&t.push(s)}}I=Za.triangulateShape(e,t)}let L=I.length,ne=f+p;for(let e=0;e<M;e++){let t=u?A(w[e],te[e],ne):w[e];v?(x.copy(y.normals[0]).multiplyScalar(t.x),b.copy(y.binormals[0]).multiplyScalar(t.y),S.copy(_[0]).add(x).add(b),R(S.x,S.y,S.z)):R(t.x,t.y,0)}for(let e=1;e<=c;e++)for(let t=0;t<M;t++){let n=u?A(w[t],te[t],ne):w[t];v?(x.copy(y.normals[e]).multiplyScalar(n.x),b.copy(y.binormals[e]).multiplyScalar(n.y),S.copy(_[e]).add(x).add(b),R(S.x,S.y,S.z)):R(n.x,n.y,l/c*e)}for(let e=m-1;e>=0;e--){let t=e/m,n=d*Math.cos(t*Math.PI/2),r=f*Math.sin(t*Math.PI/2)+p;for(let e=0,t=O.length;e<t;e++){let t=A(O[e],P[e],r);R(t.x,t.y,l+n)}for(let e=0,t=T.length;e<t;e++){let t=T[e];F=ee[e];for(let e=0,a=t.length;e<a;e++){let a=A(t[e],F[e],r);v?R(a.x,a.y+_[c-1].y,_[c-1].x+n):R(a.x,a.y,l+n)}}}re(),ie();function re(){let e=r.length/3;if(u){let e=0,t=M*e;for(let e=0;e<L;e++){let n=I[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=c+m*2,t=M*e;for(let e=0;e<L;e++){let n=I[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<L;e++){let t=I[e];oe(t[2],t[1],t[0])}for(let e=0;e<L;e++){let t=I[e];oe(t[0]+M*c,t[1]+M*c,t[2]+M*c)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(O,t),t+=O.length;for(let e=0,n=T.length;e<n;e++){let n=T[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,a=n-1;a<0&&(a=e.length-1);for(let e=0,n=c+m*2;e<n;e++){let n=M*e,o=M*(e+1);se(t+r+n,t+a+n,t+a+o,t+r+o)}}}function R(e,t,n){o.push(e),o.push(t),o.push(n)}function oe(e,t,a){ce(e),ce(t),ce(a);let o=r.length/3,s=g.generateTopUV(n,r,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[2])}function se(e,t,a,o){ce(e),ce(t),ce(o),ce(t),ce(a),ce(o);let s=r.length/3,c=g.generateSideWallUV(n,r,s-6,s-3,s-2,s-1);le(c[0]),le(c[1]),le(c[3]),le(c[1]),le(c[2]),le(c[3])}function ce(e){r.push(o[e*3+0]),r.push(o[e*3+1]),r.push(o[e*3+2])}function le(e){a.push(e.x),a.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return no(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,a=t.shapes.length;e<a;e++){let a=n[t.shapes[e]];r.push(a)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new pa[a.type]().fromJSON(a)),new e(r,t.options)}},to={generateTopUV:function(e,t,n,r,a){let o=t[n*3],s=t[n*3+1],c=t[r*3],l=t[r*3+1],u=t[a*3],d=t[a*3+1];return[new G(o,s),new G(c,l),new G(u,d)]},generateSideWallUV:function(e,t,n,r,a,o){let s=t[n*3],c=t[n*3+1],l=t[n*3+2],u=t[r*3],d=t[r*3+1],f=t[r*3+2],p=t[a*3],m=t[a*3+1],h=t[a*3+2],g=t[o*3],_=t[o*3+1],v=t[o*3+2];return Math.abs(c-d)<Math.abs(s-u)?[new G(s,1-l),new G(u,1-f),new G(p,1-h),new G(g,1-v)]:[new G(c,1-l),new G(d,1-f),new G(m,1-h),new G(_,1-v)]}};function no(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var ro=class e extends zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},io=class e extends jr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,o=t/2,s=Math.floor(n),c=Math.floor(r),l=s+1,u=c+1,d=e/s,f=t/c,p=[],m=[],h=[],g=[];for(let e=0;e<u;e++){let t=e*f-o;for(let n=0;n<l;n++){let r=n*d-a;m.push(r,-t,0),h.push(0,0,1),g.push(n/s),g.push(1-e/c)}}for(let e=0;e<c;e++)for(let t=0;t<s;t++){let n=t+l*e,r=t+l*(e+1),a=t+1+l*(e+1),o=t+1+l*e;p.push(n,r,o),p.push(r,a,o)}this.setIndex(p),this.setAttribute(`position`,new q(m,3)),this.setAttribute(`normal`,new q(h,3)),this.setAttribute(`uv`,new q(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ao=class e extends jr{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+s,Math.PI),l=0,u=[],d=new K,f=new K,p=[],m=[],h=[],g=[];for(let p=0;p<=n;p++){let _=[],v=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let n=0;n<=t;n++){let c=n/t;d.x=-e*Math.cos(r+c*a)*Math.sin(o+v*s),d.y=e*Math.cos(o+v*s),d.z=e*Math.sin(r+c*a)*Math.sin(o+v*s),m.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),g.push(c+y,1-v),_.push(l++)}u.push(_)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=u[e][r+1],a=u[e][r],s=u[e+1][r],l=u[e+1][r+1];(e!==0||o>0)&&p.push(t,a,l),(e!==n-1||c<Math.PI)&&p.push(a,s,l)}this.setIndex(p),this.setAttribute(`position`,new q(m,3)),this.setAttribute(`normal`,new q(h,3)),this.setAttribute(`uv`,new q(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends jr{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2,o=0,s=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a,thetaStart:o,thetaLength:s},n=Math.floor(n),r=Math.floor(r);let c=[],l=[],u=[],d=[],f=new K,p=new K,m=new K;for(let c=0;c<=n;c++){let h=o+c/n*s;for(let o=0;o<=r;o++){let s=o/r*a;p.x=(e+t*Math.cos(h))*Math.cos(s),p.y=(e+t*Math.cos(h))*Math.sin(s),p.z=t*Math.sin(h),l.push(p.x,p.y,p.z),f.x=e*Math.cos(s),f.y=e*Math.sin(s),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),d.push(o/r),d.push(c/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,a=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;c.push(n,a,s),c.push(a,o,s)}this.setIndex(c),this.setAttribute(`position`,new q(l,3)),this.setAttribute(`normal`,new q(u,3)),this.setAttribute(`uv`,new q(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},so=class e extends jr{constructor(e=new da(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};let o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let s=new K,c=new K,l=new G,u=new K,d=[],f=[],p=[],m=[];h(),this.setIndex(m),this.setAttribute(`position`,new q(d,3)),this.setAttribute(`normal`,new q(f,3)),this.setAttribute(`uv`,new q(p,2));function h(){for(let e=0;e<t;e++)g(e);g(a===!1?t:0),v(),_()}function g(a){u=e.getPointAt(a/t,u);let l=o.normals[a],p=o.binormals[a];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,a=Math.sin(t),o=-Math.cos(t);c.x=o*l.x+a*p.x,c.y=o*l.y+a*p.y,c.z=o*l.z+a*p.z,c.normalize(),f.push(c.x,c.y,c.z),s.x=u.x+n*c.x,s.y=u.y+n*c.y,s.z=u.z+n*c.z,d.push(s.x,s.y,s.z)}}function _(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),a=(r+1)*e+(t-1),o=(r+1)*e+t,s=(r+1)*(e-1)+t;m.push(n,a,s),m.push(a,o,s)}}function v(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)l.x=e/t,l.y=n/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function co(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let a=e[n][r];if(uo(a))a.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=a.clone();else if(Array.isArray(a))if(uo(a[0])){let e=[];for(let t=0,n=a.length;t<n;t++)e[t]=a[t].clone();t[n][r]=e}else t[n][r]=a.slice();else t[n][r]=a}}return t}function lo(e){let t={};for(let n=0;n<e.length;n++){let r=co(e[n]);for(let e in r)t[e]=r[e]}return t}function uo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function po(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var mo={clone:co,merge:lo},ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_o=class extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vo=class extends _o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yo=class extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new In(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},bo=class extends yo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return W(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new In(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new In(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new In(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},xo=class extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Co(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var wo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];validate_interval:{seek:{let o;linear_scan:{forward_scan:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<a)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=r,r=t[++n],e<r)break seek}o=t.length;break linear_scan}if(!(e>=a)){let s=t[1];e<s&&(n=2,a=s);for(let o=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(r=a,a=t[--n-1],e>=a)break seek}o=n,n=0;break linear_scan}break validate_interval}for(;n<o;){let r=n+o>>>1;e<t[r]?o=r:n=r+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let e=0;e!==r;++e)t[e]=n[a+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},To=class extends wo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fe,endingEnd:Fe}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,o=e+1,s=r[a],c=r[o];if(s===void 0)switch(this.getSettings_().endingStart){case Ie:a=e,s=2*t-n;break;case Le:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ie:o=e,c=2*n-t;break;case Le:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(c-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),h=m*m,g=h*m,_=-f*g+2*f*h-f*m,v=(1+f)*g+(-1.5-2*f)*h+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*h+.5*m,b=p*g-p*h;for(let e=0;e!==s;++e)a[e]=_*o[u+e]+v*o[l+e]+y*o[c+e]+b*o[d+e];return a}},Eo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=(n-t)/(r-t),d=1-u;for(let e=0;e!==s;++e)a[e]=o[l+e]*d+o[c+e]*u;return a}},Do=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends wo{interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=e*s,l=c-s,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let e=(n-t)/(r-t),u=1-e;for(let t=0;t!==s;++t)a[t]=o[l+t]*u+o[c+t]*e;return a}let p=s*2,m=e-1;for(let u=0;u!==s;++u){let s=o[l+u],h=o[c+u],g=m*p+u*2,_=f[g],v=f[g+1],y=e*p+u*2,b=d[y],x=d[y+1],S=(n-t)/(r-t),C,w,T,E,D;for(let e=0;e<8;e++){C=S*S,w=C*S,T=1-S,E=T*T,D=E*T;let e=D*t+3*E*S*_+3*T*C*b+w*r-n;if(Math.abs(e)<1e-10)break;let a=3*E*(_-t)+6*T*S*(b-_)+3*C*(r-b);if(Math.abs(a)<1e-10)break;S-=e/a,S=Math.max(0,Math.min(1,S))}a[u]=D*s+3*E*S*v+3*T*C*x+w*h}return a}},ko=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case B:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case V:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return B;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return V;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,o=r-1;for(;a!==r&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==r){a>=o&&(o=Math.max(o,1),a=o-1);let e=this.getValueSize();this.times=n.slice(a,o),this.values=this.values.slice(a*e,o*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let o=null;for(let t=0;t!==a;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(o!==null&&o>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,o),e=!1;break}o=r}if(r!==void 0&&qe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===V,a=e.length-1,o=1;for(let s=1;s<a;++s){let a=!1,c=e[s];if(c!==e[s+1]&&(s!==1||c!==e[0]))if(r)a=!0;else{let e=s*n,r=e-n,o=e+n;for(let s=0;s!==n;++s){let n=t[e+s];if(n!==t[r+s]||n!==t[o+s]){a=!0;break}}}if(a){if(s!==o){e[o]=e[s];let r=s*n,a=o*n;for(let e=0;e!==n;++e)t[a+e]=t[r+e]}++o}}if(a>0){e[o]=e[a];for(let e=a*n,r=o*n,s=0;s!==n;++s)t[r+s]=t[e+s];++o}return o===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,o),this.values=t.slice(0,o*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};ko.prototype.ValueTypeName=``,ko.prototype.TimeBufferType=Float32Array,ko.prototype.ValueBufferType=Float32Array,ko.prototype.DefaultInterpolation=Ne;var Ao=class extends ko{constructor(e,t,n){super(e,t,n)}};Ao.prototype.ValueTypeName=`bool`,Ao.prototype.ValueBufferType=Array,Ao.prototype.DefaultInterpolation=B,Ao.prototype.InterpolantFactoryMethodLinear=void 0,Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};jo.prototype.ValueTypeName=`color`;var Mo=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};Mo.prototype.ValueTypeName=`number`;var No=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,c=(n-t)/(r-t),l=e*s;for(let e=l+s;l!==e;l+=4)At.slerpFlat(a,0,o,l-s,o,l,c);return a}},Po=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};Po.prototype.ValueTypeName=`quaternion`,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends ko{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`string`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=B,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends ko{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`vector`;var Lo=new class{constructor(e,t,n){let r=this,a=!1,o=0,s=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){s++,a===!1&&r.onStart!==void 0&&r.onStart(e,o,s),a=!0},this.itemEnd=function(e){o++,r.onProgress!==void 0&&r.onProgress(e,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return l.push(e,t),this},this.removeHandler=function(e){let t=l.indexOf(e);return t!==-1&&l.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=l.length;t<n;t+=2){let n=l[t],r=l[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Ro=class{constructor(e){this.manager=e===void 0?Lo:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var zo=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new In(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bo=new en,Vo=new K,Ho=new K,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wo=new K,Go=new At,Ko=new K,qo=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ge,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Go,Ko),Ko.x===1&&Ko.y===1&&Ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Go,Ko.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wo,Go,Ko),Ko.x===1&&Ko.y===1&&Ko.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Go,Ko.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jo=new K,Yo=new G,Xo=new G,Zo=class extends qo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jo.x,Jo.y).multiplyScalar(-e/Jo.z),Jo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jo.x,Jo.y).multiplyScalar(-e/Jo.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Xo),t.subVectors(Xo,Yo)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let e=o.fullWidth,s=o.fullHeight;a+=o.offsetX*r/e,t-=o.offsetY*n/s,r*=o.width/e,n*=o.height/s}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qo=class extends qo{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,o=n+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=e*this.view.offsetX,o=a+e*this.view.width,s-=t*this.view.offsetY,c=s-t*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$o=class extends Uo{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},es=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ts=class extends zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},ns=-90,rs=1,is=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zo(ns,rs,e,t);r.layers=this.layers,this.add(r);let a=new Zo(ns,rs,e,t);a.layers=this.layers,this.add(a);let o=new Zo(ns,rs,e,t);o.layers=this.layers,this.add(o);let s=new Zo(ns,rs,e,t);s.layers=this.layers,this.add(s);let c=new Zo(ns,rs,e,t);c.layers=this.layers,this.add(c);let l=new Zo(ns,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,c]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,o,s,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;g=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},as=class extends Zo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},os=`\\[\\]\\.:\\/`,ss=RegExp(`[\\[\\]\\.:\\/]`,`g`),cs=`[^\\[\\]\\.:\\/]`,ls=`[^`+os.replace(`\\.`,``)+`]`,us=`((?:WC+[\\/:])*)`.replace(`WC`,cs),ds=`(WCOD+)?`.replace(`WCOD`,ls),fs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,cs),ps=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,cs),ms=RegExp(`^`+us+ds+fs+ps+`$`),hs=[`material`,`materials`,`bones`,`map`],gs=class{constructor(e,t,n){let r=n||_s.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_s=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ss,``)}static parseTrackName(e){let t=ms.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);hs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let a=e[r];if(a.name===t||a.uuid===t)return a;let o=n(a.children);if(o)return o}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,a=n.propertyName,o=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let s=t[a];if(s===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+a+` but it wasn't found.`,t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(a===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=o}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_s.Composite=gs,_s.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_s.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_s.prototype.GetterByBindingType=[_s.prototype._getValue_direct,_s.prototype._getValue_array,_s.prototype._getValue_arrayElement,_s.prototype._getValue_toArray],_s.prototype.SetterByBindingTypeAndVersioning=[[_s.prototype._setValue_direct,_s.prototype._setValue_direct_setNeedsUpdate,_s.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_array,_s.prototype._setValue_array_setNeedsUpdate,_s.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_arrayElement,_s.prototype._setValue_arrayElement_setNeedsUpdate,_s.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_s.prototype._setValue_fromArray,_s.prototype._setValue_fromArray_setNeedsUpdate,_s.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vs=new en,ys=class{constructor(e,t,n=0,r=1/0){this.ray=new Vr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return vs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vs),this}intersectObject(e,t=!0,n=[]){return xs(e,this,n,t),n.sort(bs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)xs(e[r],this,n,t);return n.sort(bs),n}};function bs(e,t){return e.distance-t.distance}function xs(e,t,n,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&r===!0){let r=e.children;for(let e=0,a=r.length;e<a;e++)xs(r[e],t,n,!0)}}var Ss=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=W(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(W(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}});var Cs=class extends Ci{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new jr;r.setAttribute(`position`,new q(t,3)),r.setAttribute(`color`,new q(n,3));let a=new di({vertexColors:!0,toneMapped:!1});super(r,a),this.type=`AxesHelper`}setColors(e,t,n){let r=new In,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(n),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},ws=class extends rt{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){H(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ts(e,t,n,r){let a=Es(r);switch(n){case T:return e*t;case M:return e*t/a.components*a.byteLength;case N:return e*t/a.components*a.byteLength;case P:return e*t*2/a.components*a.byteLength;case ee:return e*t*2/a.components*a.byteLength;case E:return e*t*3/a.components*a.byteLength;case D:return e*t*4/a.components*a.byteLength;case F:return e*t*4/a.components*a.byteLength;case te:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case R:return Math.max(e,16)*Math.max(t,8)/4;case re:case ae:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case z:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Es(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function Ds(){let e=null,t=!1,n=null,r=null;function a(t,o){n(t,o),r=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Os(e){let t=new WeakMap;function n(t,n){let r=t.array,a=t.usage,o=r.byteLength,s=e.createBuffer();e.bindBuffer(n,s),e.bufferData(n,r,a),t.onUploadCallback();let c;if(r instanceof Float32Array)c=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)c=e.HALF_FLOAT;else if(r instanceof Uint16Array)c=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)c=e.SHORT;else if(r instanceof Uint32Array)c=e.UNSIGNED_INT;else if(r instanceof Int32Array)c=e.INT;else if(r instanceof Int8Array)c=e.BYTE;else if(r instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:s,type:c,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:o}}function r(t,n,r){let a=n.array,o=n.updateRanges;if(e.bindBuffer(r,t),o.length===0)e.bufferSubData(r,0,a);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<o.length;e++){let n=o[t],r=o[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,o[t]=r)}o.length=t+1;for(let t=0,n=o.length;t<n;t++){let n=o[t];e.bufferSubData(r,n.start*a.BYTES_PER_ELEMENT,a,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function a(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function o(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function s(e,a){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let o=t.get(e);if(o===void 0)t.set(e,n(e,a));else if(o.version<e.version){if(o.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(o.buffer,e,a),o.version=e.version}}return{get:a,remove:o,update:s}}var ks={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new In(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new In(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new In(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new In(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},As={basic:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:ks.meshbasic_vert,fragmentShader:ks.meshbasic_frag},lambert:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new In(0)},envMapIntensity:{value:1}}]),vertexShader:ks.meshlambert_vert,fragmentShader:ks.meshlambert_frag},phong:{uniforms:lo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new In(0)},specular:{value:new In(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ks.meshphong_vert,fragmentShader:ks.meshphong_frag},standard:{uniforms:lo([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new In(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ks.meshphysical_vert,fragmentShader:ks.meshphysical_frag},toon:{uniforms:lo([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new In(0)}}]),vertexShader:ks.meshtoon_vert,fragmentShader:ks.meshtoon_frag},matcap:{uniforms:lo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:ks.meshmatcap_vert,fragmentShader:ks.meshmatcap_frag},points:{uniforms:lo([Y.points,Y.fog]),vertexShader:ks.points_vert,fragmentShader:ks.points_frag},dashed:{uniforms:lo([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ks.linedashed_vert,fragmentShader:ks.linedashed_frag},depth:{uniforms:lo([Y.common,Y.displacementmap]),vertexShader:ks.depth_vert,fragmentShader:ks.depth_frag},normal:{uniforms:lo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:ks.meshnormal_vert,fragmentShader:ks.meshnormal_frag},sprite:{uniforms:lo([Y.sprite,Y.fog]),vertexShader:ks.sprite_vert,fragmentShader:ks.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ks.background_vert,fragmentShader:ks.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:ks.backgroundCube_vert,fragmentShader:ks.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ks.cube_vert,fragmentShader:ks.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ks.equirect_vert,fragmentShader:ks.equirect_frag},distance:{uniforms:lo([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ks.distance_vert,fragmentShader:ks.distance_frag},shadow:{uniforms:lo([Y.lights,Y.fog,{color:{value:new In(0)},opacity:{value:1}}]),vertexShader:ks.shadow_vert,fragmentShader:ks.shadow_frag}};As.physical={uniforms:lo([As.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new In(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new In(0)},specularColor:{value:new In(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:ks.meshphysical_vert,fragmentShader:ks.meshphysical_frag};var js={r:0,b:0,g:0},Ms=new en,Ns=new Nt;Ns.set(-1,0,0,0,1,0,0,0,1);function Ps(e,t,n,r,a,o){let s=new In(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,a=m(t);a===null?_(s,c):a&&a.isColor&&(_(a,1),r=!0);let l=e.xr.getEnvironmentBlendMode();l===`additive`?n.buffers.color.setClear(0,0,0,1,o):l===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,o),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let a=m(n);a&&(a.isCubeTexture||a.mapping===306)?(u===void 0&&(u=new J(new Fi(1,1,1),new _o({name:`BackgroundCubeMaterial`,uniforms:co(As.backgroundCube.uniforms),vertexShader:As.backgroundCube.vertexShader,fragmentShader:As.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=a,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ms.makeRotationFromEuler(n.backgroundRotation)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ns),u.material.toneMapped=Rt.getTransfer(a.colorSpace)!==He,(d!==a||f!==a.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=a,f=a.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):a&&a.isTexture&&(l===void 0&&(l=new J(new io(2,2),new _o({name:`BackgroundMaterial`,uniforms:co(As.background.uniforms),vertexShader:As.background.vertexShader,fragmentShader:As.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=a,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=Rt.getTransfer(a.colorSpace)!==He,a.matrixAutoUpdate===!0&&a.updateMatrix(),l.material.uniforms.uvTransform.value.copy(a.matrix),(d!==a||f!==a.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=a,f=a.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,r){t.getRGB(js,po(e)),n.buffers.color.setClear(js.r,js.g,js.b,r,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function Fs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=p(null),o=a,s=!1;function c(n,r,a,c,l){let d=!1,p=f(n,c,a,r);o!==p&&(o=p,u(o.object)),d=m(n,c,a,l),d&&h(n,c,a,l),l!==null&&t.update(l,e.ELEMENT_ARRAY_BUFFER),(d||s)&&(s=!1,x(n,r,a,c),l!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(l).buffer))}function l(){return e.createVertexArray()}function u(t){return e.bindVertexArray(t)}function d(t){return e.deleteVertexArray(t)}function f(e,t,n,a){let o=a.wireframe===!0,s=r[t.id];s===void 0&&(s={},r[t.id]=s);let c=e.isInstancedMesh===!0?e.id:0,u=s[c];u===void 0&&(u={},s[c]=u);let d=u[n.id];d===void 0&&(d={},u[n.id]=d);let f=d[o];return f===void 0&&(f=p(l()),d[o]=f),f}function p(e){let t=[],r=[],a=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,a[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:a,object:e,attributes:{},index:null}}function m(e,t,n,r){let a=o.attributes,s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=a[t],r=s[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;c++}return o.attributesNum!==c||o.index!==r}function h(e,t,n,r){let a={},s=t.attributes,c=0,l=n.getAttributes();for(let t in l)if(l[t].location>=0){let n=s[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),a[t]=r,c++}o.attributes=a,o.attributesNum=c,o.index=r}function g(){let e=o.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function _(e){v(e,0)}function v(t,n){let r=o.newAttributes,a=o.enabledAttributes,s=o.attributeDivisors;r[t]=1,a[t]===0&&(e.enableVertexAttribArray(t),a[t]=1),s[t]!==n&&(e.vertexAttribDivisor(t,n),s[t]=n)}function y(){let t=o.newAttributes,n=o.enabledAttributes;for(let r=0,a=n.length;r<a;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function b(t,n,r,a,o,s,c){c===!0?e.vertexAttribIPointer(t,n,r,o,s):e.vertexAttribPointer(t,n,r,a,o,s)}function x(n,r,a,o){g();let s=o.attributes,c=a.getAttributes(),l=r.defaultAttributeValues;for(let r in c){let a=c[r];if(a.location>=0){let c=s[r];if(c===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(c=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(c=n.instanceColor)),c!==void 0){let r=c.normalized,s=c.itemSize,l=t.get(c);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||c.gpuType===1013;if(c.isInterleavedBufferAttribute){let t=c.data,l=t.stride,m=c.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)v(a.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<a.locationSize;e++)_(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)b(a.location+e,s/a.locationSize,d,r,l*f,(m+s/a.locationSize*e)*f,p)}else{if(c.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)v(a.location+e,c.meshPerAttribute);n.isInstancedMesh!==!0&&o._maxInstanceCount===void 0&&(o._maxInstanceCount=c.meshPerAttribute*c.count)}else for(let e=0;e<a.locationSize;e++)_(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)b(a.location+e,s/a.locationSize,d,r,s*f,s/a.locationSize*e*f,p)}}else if(l!==void 0){let t=l[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(a.location,t);break;case 3:e.vertexAttrib3fv(a.location,t);break;case 4:e.vertexAttrib4fv(a.location,t);break;default:e.vertexAttrib1fv(a.location,t)}}}}y()}function S(){E();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)d(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function C(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)d(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function w(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let a=r[e.id];for(let e in a)d(a[e].object),delete a[e];delete r[e.id]}}}function T(e){for(let t in r){let n=r[t],a=e.isInstancedMesh===!0?e.id:0,o=n[a];if(o!==void 0){for(let e in o){let t=o[e];for(let e in t)d(t[e].object),delete t[e];delete o[e]}delete n[a],Object.keys(n).length===0&&delete r[t]}}}function E(){D(),s=!0,o!==a&&(o=a,u(o.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:c,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function Is(e,t,n){let r;function a(e){r=e}function o(t,a){e.drawArrays(r,t,a),n.update(a,r,1)}function s(t,a,o){o!==0&&(e.drawArraysInstanced(r,t,a,o),n.update(a,r,o))}function c(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,a,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,r,1)}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=c}function Ls(e,t,n,r){let a;function o(){if(a!==void 0)return a;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);a=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(n){let a=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!a)}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=n.precision===void 0?`highp`:n.precision,d=l(u);d!==u&&(H(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&p===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Rs(e){let t=this,n=null,r=0,a=!1,o=!1,s=new oi,c=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||a;return a=t,r=e.length,n},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(e,t){n=d(e,t,0)},this.setState=function(t,s,c){let f=t.clippingPlanes,p=t.clipIntersection,m=t.clipShadows,h=e.get(t);if(!a||f===null||f.length===0||o&&!m)o?d(null):u();else{let e=o?0:r,t=e*4,a=h.clippingState||null;l.value=a,a=d(f,s,t,c);for(let e=0;e!==t;++e)a[e]=n[e];h.clippingState=a,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=e}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function d(e,n,r,a){let o=e===null?0:e.length,u=null;if(o!==0){if(u=l.value,a!==!0||u===null){let t=r+o*4,a=n.matrixWorldInverse;c.getNormalMatrix(a),(u===null||u.length<t)&&(u=new Float32Array(t));for(let t=0,n=r;t!==o;++t,n+=4)s.copy(e[t]).applyMatrix4(a,c),s.normal.toArray(u,n),u[n+3]=s.constant}l.value=u,l.needsUpdate=!0}return t.numPlanes=o,t.numIntersection=0,u}}var zs=4,Bs=[.125,.215,.35,.446,.526,.582],Vs=20,Hs=256,Us=new Qo,Ws=new In,Gs=null,Ks=0,qs=0,Js=!1,Ys=new K,Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){let{size:o=256,position:s=Ys}=a;Gs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,s),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gs,Ks,qs),this._renderer.xr.enabled=Js,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gs=this._renderer.getRenderTarget(),Ks=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Js=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:l,minFilter:l,generateMipmaps:!1,type:y,format:D,colorSpace:Be,depthBuffer:!1},r=Qs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zs(r)),this._blurMaterial=tc(r,e,t),this._ggxMaterial=ec(r,e,t)}return r}_compileMaterial(e){let t=new J(new jr,e);this._renderer.compile(t,Us)}_sceneToCubeUV(e,t,n,r,a){let o=new Zo(90,1,t,n),s=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(Ws),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Fi,new Hr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let f=this._backgroundBox,p=f.material,m=!1,h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,m=!0):(p.color.copy(Ws),m=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x+c[t],a.y,a.z)):n===1?(o.up.set(0,0,s[t]),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y+c[t],a.z)):(o.up.set(0,s[t],0),o.position.set(a.x,a.y,a.z),o.lookAt(a.x,a.y,a.z+c[t]));let u=this._cubeSize;$s(r,n*u,t>2?u:0,u,u),l.setRenderTarget(r),m&&l.render(f,o),l.render(e,o)}l.toneMapping=d,l.autoClear=u,e.background=h}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());let a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;let s=a.uniforms;s.envMap.value=e;let c=this._cubeSize;$s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Us)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,s=this._lodMeshes[n];s.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u)*(0+l*1.25),{_lodMax:f}=this,p=this._sizeLods[n],m=3*p*(n>f-zs?n-f+zs:0),h=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=f-t,$s(a,m,h,3*p,2*p),r.setRenderTarget(a),r.render(s,Us),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=f-n,$s(e,m,h,3*p,2*p),r.setRenderTarget(e),r.render(s,Us)}_blur(e,t,n,r,a){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,`latitudinal`,a),this._halfBlur(o,e,n,n,r,`longitudinal`,a)}_halfBlur(e,t,n,r,a,o,s){let c=this._renderer,l=this._blurMaterial;o!==`latitudinal`&&o!==`longitudinal`&&U(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[r];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),m=a/p,h=isFinite(a)?1+Math.floor(3*m):Vs;h>Vs&&H(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Vs}`);let g=[],_=0;for(let e=0;e<Vs;++e){let t=e/m,n=Math.exp(-t*t/2);g.push(n),e===0?_+=n:e<h&&(_+=2*n)}for(let e=0;e<g.length;e++)g[e]=g[e]/_;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o===`latitudinal`,s&&(d.poleAxis.value=s);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let y=this._sizeLods[r];$s(t,3*y*(r>v-zs?r-v+zs:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(u,Us)}};function Zs(e){let t=[],n=[],r=[],a=e,o=e-zs+1+Bs.length;for(let s=0;s<o;s++){let o=2**a;t.push(o);let c=1/o;s>e-zs?c=Bs[s-e+zs-1]:s===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=new Float32Array(108),m=new Float32Array(72),h=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];p.set(r,18*e),m.set(f,12*e);let a=[e,e,e,e,e,e];h.set(a,6*e)}let g=new jr;g.setAttribute(`position`,new _r(p,3)),g.setAttribute(`uv`,new _r(m,2)),g.setAttribute(`faceIndex`,new _r(h,1)),r.push(new J(g,null)),a>zs&&a--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Qs(e,t,n){let r=new Zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function $s(e,t,n,r,a){e.viewport.set(t,n,r,a),e.scissor.set(t,n,r,a)}function ec(e,t,n){return new _o({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tc(e,t,n){let r=new Float32Array(Vs),a=new K(0,1,0);return new _o({name:`SphericalGaussianBlur`,defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nc(){return new _o({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rc(){return new _o({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ji(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),a=new _o({name:`CubemapFromEquirect`,uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;let o=new J(r,a),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new is(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let a=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(a)}};function oc(e){let t=new WeakMap,n=new WeakMap,r=null;function a(e,t=!1){return e==null?null:t?s(e):o(e)}function o(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return c(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let a=new ac(r.height);return a.fromEquirectangularTexture(e,n),t.set(n,a),n.addEventListener(`dispose`,u),c(a.texture,n.mapping)}else return null}}return n}function s(t){if(t&&t.isTexture){let a=t.mapping,o=a===303||a===304,s=a===301||a===302;if(o||s){let a=n.get(t),c=a===void 0?0:a.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==c)return r===null&&(r=new Xs(e)),a=o?r.fromEquirectangular(t,a):r.fromCubemap(t,a),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),a.texture;if(a!==void 0)return a.texture;{let c=t.image;return o&&c&&c.height>0||s&&c&&l(c)?(r===null&&(r=new Xs(e)),a=o?r.fromEquirectangular(t):r.fromCubemap(t),a.texture.pmremVersion=t.pmremVersion,n.set(t,a),t.addEventListener(`dispose`,d),a.texture):null}}}return t}function c(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function l(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function u(e){let n=e.target;n.removeEventListener(`dispose`,u);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function d(e){let t=e.target;t.removeEventListener(`dispose`,d);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function f(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:f}}function sc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cc(e,t,n,r){let a={},o=new WeakMap;function s(e){let c=e.target;c.index!==null&&t.remove(c.index);for(let e in c.attributes)t.remove(c.attributes[e]);c.removeEventListener(`dispose`,s),delete a[c.id];let l=o.get(c);l&&(t.remove(l),o.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function c(e,t){return a[t.id]===!0?t:(t.addEventListener(`dispose`,s),a[t.id]=!0,n.memory.geometries++,t)}function l(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function u(e){let n=[],r=e.index,a=e.attributes.position,s=0;if(a===void 0)return;if(r!==null){let e=r.array;s=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],a=e[t+1],o=e[t+2];n.push(r,a,a,o,o,r)}}else{let e=a.array;s=a.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,a=t+2;n.push(e,r,r,a,a,e)}}let c=new(a.count>=65535?yr:vr)(n,1);c.version=s;let l=o.get(e);l&&t.remove(l),o.set(e,c)}function d(e){let t=o.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&u(e)}else u(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function lc(e,t,n){let r;function a(e){r=e}let o,s;function c(e){o=e.type,s=e.bytesPerElement}function l(t,a){e.drawElements(r,a,o,t*s),n.update(a,r,1)}function u(t,a,c){c!==0&&(e.drawElementsInstanced(r,a,o,t*s,c),n.update(a,r,c))}function d(e,a,s){if(s===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,a,0,o,e,0,s);let c=0;for(let e=0;e<s;e++)c+=a[e];n.update(c,r,1)}this.setMode=a,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function uc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,a){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*a;break;case e.LINES:n.lines+=t/2*a;break;case e.LINE_STRIP:n.lines+=a*(t-1);break;case e.LINE_LOOP:n.lines+=a*t;break;case e.POINTS:n.points+=a*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:r}}function dc(e,t,n){let r=new WeakMap,a=new Yt;function o(o,s,c){let l=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=u===void 0?0:u.length,f=r.get(s);if(f===void 0||f.count!==d){f!==void 0&&f.texture.dispose();let e=s.morphAttributes.position!==void 0,n=s.morphAttributes.normal!==void 0,o=s.morphAttributes.color!==void 0,c=s.morphAttributes.position||[],l=s.morphAttributes.normal||[],u=s.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),o===!0&&(p=3);let m=s.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*d),_=new Qt(g,m,h,d);_.type=v,_.needsUpdate=!0;let y=p*4;for(let t=0;t<d;t++){let r=c[t],s=l[t],d=u[t],f=m*h*4*t;for(let t=0;t<r.count;t++){let c=t*y;e===!0&&(a.fromBufferAttribute(r,t),g[f+c+0]=a.x,g[f+c+1]=a.y,g[f+c+2]=a.z,g[f+c+3]=0),n===!0&&(a.fromBufferAttribute(s,t),g[f+c+4]=a.x,g[f+c+5]=a.y,g[f+c+6]=a.z,g[f+c+7]=0),o===!0&&(a.fromBufferAttribute(d,t),g[f+c+8]=a.x,g[f+c+9]=a.y,g[f+c+10]=a.z,g[f+c+11]=d.itemSize===4?a.w:1)}}f={count:d,texture:_,size:new G(m,h)},r.set(s,f);function b(){_.dispose(),r.delete(s),s.removeEventListener(`dispose`,b)}s.addEventListener(`dispose`,b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,`morphTexture`,o.morphTexture,n);else{let t=0;for(let e=0;e<l.length;e++)t+=l[e];let n=s.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),c.getUniforms().setValue(e,`morphTargetInfluences`,l)}c.getUniforms().setValue(e,`morphTargetsTexture`,f.texture,n),c.getUniforms().setValue(e,`morphTargetsTextureSize`,f.size)}return{update:o}}function fc(e,t,n,r,a){let o=new WeakMap;function s(r){let s=a.render.frame,c=r.geometry,u=t.get(r,c);if(o.get(u)!==s&&(t.update(u),o.set(u,s)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,l)===!1&&r.addEventListener(`dispose`,l),o.get(r)!==s&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),o.set(r,s))),r.isSkinnedMesh){let e=r.skeleton;o.get(e)!==s&&(e.update(),o.set(e,s))}return u}function c(){o=new WeakMap}function l(e){let t=e.target;t.removeEventListener(`dispose`,l),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:s,dispose:c}}var pc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function mc(e,t,n,r,a){let o=new Zt(t,n,{type:e,depthBuffer:r,stencilBuffer:a,depthTexture:r?new Mi(t,n):void 0}),s=new Zt(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new jr;c.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,l),d=new Qo(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let a=0;a<_.length;a++){let o=_[a];if(o.enabled!==!1&&(o.render(e,r,n,t),o.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Rt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=pc[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var hc=new Jt,gc=new Mi(1,1),_c=new Qt,vc=new $t,yc=new ji,bc=[],xc=[],Sc=new Float32Array(16),Cc=new Float32Array(9),wc=new Float32Array(4);function Tc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let a=t*n,o=bc[a];if(o===void 0&&(o=new Float32Array(a),bc[a]=o),t!==0){r.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=n,e[r].toArray(o,a)}return o}function Ec(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Dc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Oc(e,t){let n=xc[t];n===void 0&&(n=new Int32Array(t),xc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function kc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2fv(this.addr,t),Dc(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ec(n,t))return;e.uniform3fv(this.addr,t),Dc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4fv(this.addr,t),Dc(n,t)}}function Nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;wc.set(r),e.uniformMatrix2fv(this.addr,!1,wc),Dc(n,r)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Cc.set(r),e.uniformMatrix3fv(this.addr,!1,Cc),Dc(n,r)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ec(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dc(n,t)}else{if(Ec(n,r))return;Sc.set(r),e.uniformMatrix4fv(this.addr,!1,Sc),Dc(n,r)}}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2iv(this.addr,t),Dc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3iv(this.addr,t),Dc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4iv(this.addr,t),Dc(n,t)}}function Bc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ec(n,t))return;e.uniform2uiv(this.addr,t),Dc(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ec(n,t))return;e.uniform3uiv(this.addr,t),Dc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ec(n,t))return;e.uniform4uiv(this.addr,t),Dc(n,t)}}function Wc(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let o;this.type===e.SAMPLER_2D_SHADOW?(gc.compareFunction=n.isReversedDepthBuffer()?518:515,o=gc):o=hc,n.setTexture2D(t||o,a)}function Gc(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(t||vc,a)}function Kc(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(t||yc,a)}function qc(e,t,n){let r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(t||_c,a)}function Jc(e){switch(e){case 5126:return kc;case 35664:return Ac;case 35665:return jc;case 35666:return Mc;case 35674:return Nc;case 35675:return Pc;case 35676:return Fc;case 5124:case 35670:return Ic;case 35667:case 35671:return Lc;case 35668:case 35672:return Rc;case 35669:case 35673:return zc;case 5125:return Bc;case 36294:return Vc;case 36295:return Hc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return Gc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return qc}}function Yc(e,t){e.uniform1fv(this.addr,t)}function Xc(e,t){let n=Tc(t,this.size,2);e.uniform2fv(this.addr,n)}function Zc(e,t){let n=Tc(t,this.size,3);e.uniform3fv(this.addr,n)}function Qc(e,t){let n=Tc(t,this.size,4);e.uniform4fv(this.addr,n)}function $c(e,t){let n=Tc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function el(e,t){let n=Tc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tl(e,t){let n=Tc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nl(e,t){e.uniform1iv(this.addr,t)}function rl(e,t){e.uniform2iv(this.addr,t)}function il(e,t){e.uniform3iv(this.addr,t)}function al(e,t){e.uniform4iv(this.addr,t)}function ol(e,t){e.uniform1uiv(this.addr,t)}function sl(e,t){e.uniform2uiv(this.addr,t)}function cl(e,t){e.uniform3uiv(this.addr,t)}function ll(e,t){e.uniform4uiv(this.addr,t)}function ul(e,t,n){let r=this.cache,a=t.length,o=Oc(n,a);Ec(r,o)||(e.uniform1iv(this.addr,o),Dc(r,o));let s;s=this.type===e.SAMPLER_2D_SHADOW?gc:hc;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||s,o[e])}function dl(e,t,n){let r=this.cache,a=t.length,o=Oc(n,a);Ec(r,o)||(e.uniform1iv(this.addr,o),Dc(r,o));for(let e=0;e!==a;++e)n.setTexture3D(t[e]||vc,o[e])}function fl(e,t,n){let r=this.cache,a=t.length,o=Oc(n,a);Ec(r,o)||(e.uniform1iv(this.addr,o),Dc(r,o));for(let e=0;e!==a;++e)n.setTextureCube(t[e]||yc,o[e])}function pl(e,t,n){let r=this.cache,a=t.length,o=Oc(n,a);Ec(r,o)||(e.uniform1iv(this.addr,o),Dc(r,o));for(let e=0;e!==a;++e)n.setTexture2DArray(t[e]||_c,o[e])}function ml(e){switch(e){case 5126:return Yc;case 35664:return Xc;case 35665:return Zc;case 35666:return Qc;case 35674:return $c;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return rl;case 35668:case 35672:return il;case 35669:case 35673:return al;case 5125:return ol;case 36294:return sl;case 36295:return cl;case 36296:return ll;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return fl;case 36289:case 36303:case 36311:case 36292:return pl}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jc(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ml(t.type)}},_l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,o=r.length;a!==o;++a){let o=r[a];o.setValue(e,t[o.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function yl(e,t){e.seq.push(t),e.map[t.id]=t}function bl(e,t,n){let r=e.name,a=r.length;for(vl.lastIndex=0;;){let o=vl.exec(r),s=vl.lastIndex,c=o[1],l=o[2]===`]`,u=o[3];if(l&&(c|=0),u===void 0||u===`[`&&s+2===a){yl(n,u===void 0?new hl(c,e,t):new gl(c,e,t));break}else{let e=n.map[c];e===void 0&&(e=new _l(c),yl(n,e)),n=e}}}var xl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bl(n,e.getUniformLocation(t,n.name),this)}let r=[],a=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):a.push(t);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){let o=t[a],s=n[o.id];s.needsUpdate!==!1&&o.setValue(e,s.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Sl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cl=37297,wl=0;function Tl(e,t){let n=e.split(`
`),r=[],a=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let e=a;e<o;e++){let a=e+1;r.push(`${a===t?`>`:` `} ${a}: ${n[e]}`)}return r.join(`
`)}var El=new Nt;function Dl(e){Rt._getMatrix(El,Rt.workingColorSpace,e);let t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ol(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||``).trim();if(r&&a===``)return``;let o=/ERROR: 0:(\d+)/.exec(a);if(o){let r=parseInt(o[1]);return n.toUpperCase()+`

`+a+`

`+Tl(e.getShaderSource(t),r)}else return a}function kl(e,t){let n=Dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Al={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jl(e,t){let n=Al[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ml=new K;function Nl(){return Rt.getLuminanceCoefficients(Ml),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ml.x.toFixed(4)}, ${Ml.y.toFixed(4)}, ${Ml.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ll).join(`
`)}function Fl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Il(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let r=e.getActiveAttrib(t,a),o=r.name,s=1;r.type===e.FLOAT_MAT2&&(s=2),r.type===e.FLOAT_MAT3&&(s=3),r.type===e.FLOAT_MAT4&&(s=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:s}}return n}function Ll(e){return e!==``}function Rl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(e){return e.replace(Bl,Ul)}var Hl=new Map;function Ul(e,t){let n=ks[t];if(n===void 0){let e=Hl.get(t);if(e!==void 0)n=ks[e],H(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Vl(n)}var Wl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(e){return e.replace(Wl,Kl)}function Kl(e,t,n,r){let a=``;for(let e=parseInt(t);e<parseInt(n);e++)a+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return a}function ql(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Jl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Yl(e){return Jl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Xl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Zl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Xl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ql={302:`ENVMAP_MODE_REFRACTION`};function $l(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ql[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var eu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function tu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:eu[e.combine]||`ENVMAP_BLENDING_NONE`}function nu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ru(e,t,n,r){let a=e.getContext(),o=n.defines,s=n.vertexShader,c=n.fragmentShader,l=Yl(n),u=Zl(n),d=$l(n),f=tu(n),p=nu(n),m=Pl(n),h=Fl(o),g=a.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ll).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ll).join(`
`),v.length>0&&(v+=`
`)):(_=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ll).join(`
`),v=[ql(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+l:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ks.tonemapping_pars_fragment,n.toneMapping===0?``:jl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ks.colorspace_pars_fragment,kl(`linearToOutputTexel`,n.outputColorSpace),Nl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ll).join(`
`)),s=Vl(s),s=Rl(s,n),s=zl(s,n),c=Vl(c),c=Rl(c,n),c=zl(c,n),s=Gl(s),c=Gl(c),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=Sl(a,a.VERTEX_SHADER,b),C=Sl(a,a.FRAGMENT_SHADER,x);a.attachShader(g,S),a.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&a.bindAttribLocation(g,0,`position`):a.bindAttribLocation(g,0,n.index0AttributeName),a.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=a.getProgramInfoLog(g)||``,r=a.getShaderInfoLog(S)||``,o=a.getShaderInfoLog(C)||``,s=n.trim(),c=r.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(a,g,S,C);else{let e=Ol(a,S,`vertex`),n=Ol(a,C,`fragment`);U(`THREE.WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+s+`
`+e+`
`+n)}else s===``?(c===``||l===``)&&(d=!1):H(`WebGLProgram: Program Info Log:`,s);d&&(t.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}a.deleteShader(S),a.deleteShader(C),T=new xl(a,g),E=Il(a,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(g,Cl)),D},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wl++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var iu=0,au=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ou(e),t.set(e,n)),n}},ou=class{constructor(e){this.id=iu++,this.code=e,this.usedTimes=0}};function su(e){return e===1030||e===37490||e===36285}function cu(e,t,n,r,a,o){let s=new fn,c=new au,l=new Set,u=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,d,g,_){let v=d.fog,y=g.geometry,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,x=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,S=t.get(a.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[a.type];a.precision!==null&&(p=r.getMaxPrecision(a.precision),p!==a.precision&&H(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,A,M,N;if(w){let e=As[w];O=e.vertexShader,A=e.fragmentShader}else O=a.vertexShader,A=a.fragmentShader,c.update(a),M=c.getVertexShaderID(a),N=c.getFragmentShaderID(a);let P=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),F=g.isInstancedMesh===!0,te=g.isBatchedMesh===!0,I=!!a.map,L=!!a.matcap,ne=!!S,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,R=!!a.normalMap,oe=!!a.displacementMap,se=!!a.emissiveMap,ce=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,he=a.transmission>0,ge=ue&&!!a.anisotropyMap,_e=de&&!!a.clearcoatMap,ve=de&&!!a.clearcoatNormalMap,ye=de&&!!a.clearcoatRoughnessMap,be=pe&&!!a.iridescenceMap,xe=pe&&!!a.iridescenceThicknessMap,Se=me&&!!a.sheenColorMap,Ce=me&&!!a.sheenRoughnessMap,we=!!a.specularMap,Te=!!a.specularColorMap,Ee=!!a.specularIntensityMap,De=he&&!!a.transmissionMap,Oe=he&&!!a.thicknessMap,ke=!!a.gradientMap,z=!!a.alphaMap,Ae=a.alphaTest>0,je=!!a.alphaHash,Me=!!a.extensions,B=0;a.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(B=e.toneMapping);let Ne={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:A,defines:a.defines,customVertexShaderID:M,customFragmentShaderID:N,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&g._colorsTexture!==null,instancing:F,instancingColor:F&&g.instanceColor!==null,instancingMorph:F&&g.morphTexture!==null,outputColorSpace:P===null?e.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!a.alphaToCoverage,map:I,matcap:L,envMap:ne,envMapMode:ne&&S.mapping,envMapCubeUVHeight:C,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:R,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:R&&a.normalMapType===1,normalMapTangentSpace:R&&a.normalMapType===0,packedNormalMap:R&&a.normalMapType===0&&su(a.normalMap.format),metalnessMap:ce,roughnessMap:le,anisotropy:ue,anisotropyMap:ge,clearcoat:de,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:z,alphaTest:Ae,alphaHash:je,combine:a.combine,mapUv:I&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:R&&h(a.normalMap.channel),displacementMapUv:oe&&h(a.displacementMap.channel),emissiveMapUv:se&&h(a.emissiveMap.channel),metalnessMapUv:ce&&h(a.metalnessMap.channel),roughnessMapUv:le&&h(a.roughnessMap.channel),anisotropyMapUv:ge&&h(a.anisotropyMap.channel),clearcoatMapUv:_e&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:ve&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&h(a.sheenRoughnessMap.channel),specularMapUv:we&&h(a.specularMap.channel),specularColorMapUv:Te&&h(a.specularColorMap.channel),specularIntensityMapUv:Ee&&h(a.specularIntensityMap.channel),transmissionMapUv:De&&h(a.transmissionMap.channel),thicknessMapUv:Oe&&h(a.thicknessMap.channel),alphaMapUv:z&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(R||ue),vertexNormals:!!y.attributes.normal,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(I||z),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||y.attributes.normal===void 0&&R===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:g.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:B,decodeVideoTexture:I&&a.map.isVideoTexture===!0&&Rt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&a.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Me&&a.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&a.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=As[t];n=mo.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new ru(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function lu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function a(t,n,r){e.get(t)[n]=r}function o(){e=new WeakMap}return{has:t,get:n,remove:r,update:a,dispose:o}}function uu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function du(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fu(){let e=[],t=0,n=[],r=[],a=[];function o(){t=0,n.length=0,r.length=0,a.length=0}function s(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function c(n,r,a,o,c,l){let u=e[t];return u===void 0?(u={id:n.id,object:n,geometry:r,material:a,materialVariant:s(n),groupOrder:o,renderOrder:n.renderOrder,z:c,group:l},e[t]=u):(u.id=n.id,u.object=n,u.geometry=r,u.material=a,u.materialVariant=s(n),u.groupOrder=o,u.renderOrder=n.renderOrder,u.z=c,u.group=l),t++,u}function l(e,t,o,s,l,u){let d=c(e,t,o,s,l,u);o.transmission>0?r.push(d):o.transparent===!0?a.push(d):n.push(d)}function u(e,t,o,s,l,u){let d=c(e,t,o,s,l,u);o.transmission>0?r.unshift(d):o.transparent===!0?a.unshift(d):n.unshift(d)}function d(e,t){n.length>1&&n.sort(e||uu),r.length>1&&r.sort(t||du),a.length>1&&a.sort(t||du)}function f(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:a,init:o,push:l,unshift:u,finish:f,sort:d}}function pu(){let e=new WeakMap;function t(t,n){let r=e.get(t),a;return r===void 0?(a=new fu,e.set(t,[a])):n>=r.length?(a=new fu,r.push(a)):a=r[n],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function mu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new In};break;case`SpotLight`:n={position:new K,direction:new K,color:new In,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new In,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new In,groundColor:new In};break;case`RectAreaLight`:n={color:new In,position:new K,halfWidth:new K,halfHeight:new K};break}return e[t.id]=n,n}}}function hu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var gu=0;function _u(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function vu(e){let t=new mu,n=hu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let a=new K,o=new en,s=new en;function c(a){let o=0,s=0,c=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0;a.sort(_u);for(let e=0,b=a.length;e<b;e++){let b=a[e],x=b.color,S=b.intensity,C=b.distance,w=null;if(b.shadow&&b.shadow.map&&(w=b.shadow.map.texture.format===1030?b.shadow.map.texture:b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)o+=x.r*S,s+=x.g*S,c+=x.b*S;else if(b.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(b.sh.coefficients[e],S);y++}else if(b.isDirectionalLight){let e=t.get(b);if(e.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let e=b.shadow,t=n.get(b);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[l]=t,r.directionalShadowMap[l]=w,r.directionalShadowMatrix[l]=b.shadow.matrix,m++}r.directional[l]=e,l++}else if(b.isSpotLight){let e=t.get(b);e.position.setFromMatrixPosition(b.matrixWorld),e.color.copy(x).multiplyScalar(S),e.distance=C,e.coneCos=Math.cos(b.angle),e.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),e.decay=b.decay,r.spot[d]=e;let a=b.shadow;if(b.map&&(r.spotLightMap[_]=b.map,_++,a.updateMatrices(b),b.castShadow&&v++),r.spotLightMatrix[d]=a.matrix,b.castShadow){let e=n.get(b);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,r.spotShadow[d]=e,r.spotShadowMap[d]=w,g++}d++}else if(b.isRectAreaLight){let e=t.get(b);e.color.copy(x).multiplyScalar(S),e.halfWidth.set(b.width*.5,0,0),e.halfHeight.set(0,b.height*.5,0),r.rectArea[f]=e,f++}else if(b.isPointLight){let e=t.get(b);if(e.color.copy(b.color).multiplyScalar(b.intensity),e.distance=b.distance,e.decay=b.decay,b.castShadow){let e=b.shadow,t=n.get(b);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[u]=t,r.pointShadowMap[u]=w,r.pointShadowMatrix[u]=b.shadow.matrix,h++}r.point[u]=e,u++}else if(b.isHemisphereLight){let e=t.get(b);e.skyColor.copy(b.color).multiplyScalar(S),e.groundColor.copy(b.groundColor).multiplyScalar(S),r.hemi[p]=e,p++}}f>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=o,r.ambient[1]=s,r.ambient[2]=c;let b=r.hash;(b.directionalLength!==l||b.pointLength!==u||b.spotLength!==d||b.rectAreaLength!==f||b.hemiLength!==p||b.numDirectionalShadows!==m||b.numPointShadows!==h||b.numSpotShadows!==g||b.numSpotMaps!==_||b.numLightProbes!==y)&&(r.directional.length=l,r.spot.length=d,r.rectArea.length=f,r.point.length=u,r.hemi.length=p,r.directionalShadow.length=m,r.directionalShadowMap.length=m,r.pointShadow.length=h,r.pointShadowMap.length=h,r.spotShadow.length=g,r.spotShadowMap.length=g,r.directionalShadowMatrix.length=m,r.pointShadowMatrix.length=h,r.spotLightMatrix.length=g+_-v,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=v,r.numLightProbes=y,b.directionalLength=l,b.pointLength=u,b.spotLength=d,b.rectAreaLength=f,b.hemiLength=p,b.numDirectionalShadows=m,b.numPointShadows=h,b.numSpotShadows=g,b.numSpotMaps=_,b.numLightProbes=y,r.version=gu++)}function l(e,t){let n=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),n++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),a.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),s.identity(),o.copy(p.matrixWorld),o.premultiply(f),s.extractRotation(o),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:r}}function yu(e){let t=new vu(e),n=[],r=[],a=[];function o(e){f.camera=e,n.length=0,r.length=0,a.length=0}function s(e){n.push(e)}function c(e){r.push(e)}function l(e){a.push(e)}function u(){t.setup(n)}function d(e){t.setupView(n,e)}let f={lightsArray:n,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:s,pushShadow:c,pushLightProbeGrid:l}}function bu(e){let t=new WeakMap;function n(n,r=0){let a=t.get(n),o;return a===void 0?(o=new yu(e),t.set(n,[o])):r>=a.length?(o=new yu(e),a.push(o)):o=a[r],o}function r(){t=new WeakMap}return{get:n,dispose:r}}var xu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Su=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],wu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Tu=new en,Eu=new K,Du=new K;function Ou(e,t,n){let r=new ui,a=new G,s=new G,c=new Yt,u=new xo,d=new So,f={},p=n.maxTextureSize,m={0:1,1:0,2:2},h=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:xu,fragmentShader:Su}),g=h.clone();g.defines.HORIZONTAL_PASS=1;let b=new jr;b.setAttribute(`position`,new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new J(b,h),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let C=this.type;this.render=function(t,n,u){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.state;h.setBlending(0),h.buffers.depth.getReversed()===!0?h.buffers.color.setClear(0,0,0,0):h.buffers.color.setClear(1,1,1,1),h.buffers.depth.setTest(!0),h.setScissorTest(!1);let g=C!==this.type;g&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let d=0,f=t.length;d<f;d++){let f=t[d],m=f.shadow;if(m===void 0){H(`WebGLShadowMap:`,f,`has no shadow.`);continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;a.copy(m.mapSize);let b=m.getFrameExtents();a.multiply(b),s.copy(m.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(s.x=Math.floor(p/b.x),a.x=s.x*b.x,m.mapSize.x=s.x),a.y>p&&(s.y=Math.floor(p/b.y),a.y=s.y*b.y,m.mapSize.y=s.y));let x=e.state.buffers.depth.getReversed();if(m.camera._reversedDepth=x,m.map===null||g===!0){if(m.map!==null&&(m.map.depthTexture!==null&&(m.map.depthTexture.dispose(),m.map.depthTexture=null),m.map.dispose()),this.type===3){if(f.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}m.map=new Zt(a.x,a.y,{format:P,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),m.map.texture.name=f.name+`.shadowMap`,m.map.depthTexture=new Mi(a.x,a.y,v),m.map.depthTexture.name=f.name+`.shadowMapDepth`,m.map.depthTexture.format=O,m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=o,m.map.depthTexture.magFilter=o}else f.isPointLight?(m.map=new ac(a.x),m.map.depthTexture=new Ni(a.x,_)):(m.map=new Zt(a.x,a.y),m.map.depthTexture=new Mi(a.x,a.y,_)),m.map.depthTexture.name=f.name+`.shadowMap`,m.map.depthTexture.format=O,this.type===1?(m.map.depthTexture.compareFunction=x?518:515,m.map.depthTexture.minFilter=l,m.map.depthTexture.magFilter=l):(m.map.depthTexture.compareFunction=null,m.map.depthTexture.minFilter=o,m.map.depthTexture.magFilter=o);m.camera.updateProjectionMatrix()}let S=m.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<S;t++){if(m.map.isWebGLCubeRenderTarget)e.setRenderTarget(m.map,t),e.clear();else{t===0&&(e.setRenderTarget(m.map),e.clear());let n=m.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),h.viewport(c)}if(f.isPointLight){let e=m.camera,n=m.matrix,r=f.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Eu.setFromMatrixPosition(f.matrixWorld),e.position.copy(Eu),Du.copy(e.position),Du.add(Cu[t]),e.up.copy(wu[t]),e.lookAt(Du),e.updateMatrixWorld(),n.makeTranslation(-Eu.x,-Eu.y,-Eu.z),Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),m._frustum.setFromProjectionMatrix(Tu,e.coordinateSystem,e.reversedDepth)}else m.updateMatrices(f);r=m.getFrustum(),E(n,u,m.camera,f,this.type)}m.isPointLightShadow!==!0&&this.type===3&&w(m,u),m.needsUpdate=!1}C=this.type,S.needsUpdate=!1,e.setRenderTarget(d,f,m)};function w(n,r){let o=t.update(x);h.defines.VSM_SAMPLES!==n.blurSamples&&(h.defines.VSM_SAMPLES=n.blurSamples,g.defines.VSM_SAMPLES=n.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Zt(a.x,a.y,{format:P,type:y})),h.uniforms.shadow_pass.value=n.map.depthTexture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,o,h,x,null),g.uniforms.shadow_pass.value=n.mapPass.texture,g.uniforms.resolution.value=n.mapSize,g.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,o,g,x,null)}function T(t,n,r,a){let o=null,s=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(s!==void 0)o=s;else if(o=r.isPointLight===!0?d:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=o.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let a=r[t];a===void 0&&(a=o.clone(),r[t]=a,n.addEventListener(`dispose`,D)),o=a}if(o.visible=n.visible,o.wireframe=n.wireframe,a===3?o.side=n.shadowSide===null?n.side:n.shadowSide:o.side=n.shadowSide===null?m[n.side]:n.shadowSide,o.alphaMap=n.alphaMap,o.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,o.map=n.map,o.clipShadows=n.clipShadows,o.clippingPlanes=n.clippingPlanes,o.clipIntersection=n.clipIntersection,o.displacementMap=n.displacementMap,o.displacementScale=n.displacementScale,o.displacementBias=n.displacementBias,o.wireframeLinewidth=n.wireframeLinewidth,o.linewidth=n.linewidth,r.isPointLight===!0&&o.isMeshDistanceMaterial===!0){let t=e.properties.get(o);t.light=r}return o}function E(n,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(a.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);let r=t.update(n),l=n.material;if(Array.isArray(l)){let t=r.groups;for(let u=0,d=t.length;u<d;u++){let d=t[u],f=l[d.materialIndex];if(f&&f.visible){let t=T(n,f,s,c);n.onBeforeShadow(e,n,a,o,r,t,d),e.renderBufferDirect(o,null,r,t,n,d),n.onAfterShadow(e,n,a,o,r,t,d)}}}else if(l.visible){let t=T(n,l,s,c);n.onBeforeShadow(e,n,a,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,a,o,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ku(e,t){function n(){let t=!1,n=new Yt,r=null,a=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,o,s,c){c===!0&&(t*=s,r*=s,o*=s),n.set(t,r,o,s),a.equals(n)===!1&&(e.clearColor(t,r,o,s),a.copy(n))},reset:function(){t=!1,r=null,a.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,a=null,o=null,s=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let a=s;s=null,this.setClear(a)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(t){a!==t&&!n&&(e.depthMask(t),a=t)},setFunc:function(t){if(r&&(t=nt[t]),o!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}o=t}},setLocked:function(e){n=e},setClear:function(t){s!==t&&(s=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,a=null,o=null,s=null,r=!1}}}function a(){let t=!1,n=null,r=null,a=null,o=null,s=null,c=null,l=null,u=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,s){(r!==t||a!==n||o!==s)&&(e.stencilFunc(t,n,s),r=t,a=n,o=s)},setOp:function(t,n,r){(s!==t||c!==n||l!==r)&&(e.stencilOp(t,n,r),s=t,c=n,l=r)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,n=null,r=null,a=null,o=null,s=null,c=null,l=null,u=null}}}let o=new n,s=new r,c=new a,l=new WeakMap,u=new WeakMap,d={},f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new In(0,0,0),E=0,D=!1,O=null,A=null,M=null,N=null,P=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,te=0,I=e.getParameter(e.VERSION);I.indexOf(`WebGL`)===-1?I.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),F=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(I)[1]),F=te>=1);let L=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Yt().fromArray(re),R=new Yt().fromArray(ie);function oe(t,n,r,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<r;s++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),c.setClear(0),ce(e.DEPTH_TEST),s.setFunc(3),_e(!1),ve(1),ce(e.CULL_FACE),he(0);function ce(t){d[t]!==!0&&(e.enable(t),d[t]=!0)}function le(t){d[t]!==!1&&(e.disable(t),d[t]=!1)}function ue(t,n){return p[t]===n?!1:(e.bindFramebuffer(t,n),p[t]=n,t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n),!0)}function de(t,n){let r=h,a=!1;if(t){r=m.get(n),r===void 0&&(r=[],m.set(n,r));let o=t.textures;if(r.length!==o.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=o.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=o.length,a=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,a=!0);a&&e.drawBuffers(r)}function fe(t){return g===t?!1:(e.useProgram(t),g=t,!0)}let pe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};pe[103]=e.MIN,pe[104]=e.MAX;let me={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function he(t,n,r,a,o,s,c,l,u,d){if(t===0){_===!0&&(le(e.BLEND),_=!1);return}if(_===!1&&(ce(e.BLEND),_=!0),t!==5){if(t!==v||d!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),d)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t);break}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=d}return}o||=n,s||=r,c||=a,(n!==y||o!==S)&&(e.blendEquationSeparate(pe[n],pe[o]),y=n,S=o),(r!==b||a!==x||s!==C||c!==w)&&(e.blendFuncSeparate(me[r],me[a],me[s],me[c]),b=r,x=a,C=s,w=c),(l.equals(T)===!1||u!==E)&&(e.blendColor(l.r,l.g,l.b,u),T.copy(l),E=u),v=t,D=!1}function ge(t,n){t.side===2?le(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),_e(r),t.blending===1&&t.transparent===!1?he(0):he(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),s.setFunc(t.depthFunc),s.setTest(t.depthTest),s.setMask(t.depthWrite),o.setMask(t.colorWrite);let a=t.stencilWrite;c.setTest(a),a&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function _e(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ve(t){t===0?le(e.CULL_FACE):(ce(e.CULL_FACE),t!==A&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),A=t}function ye(t){t!==M&&(F&&e.lineWidth(t),M=t)}function be(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(N!==n||P!==r)&&(N=n,P=r,s.getReversed()&&(n=-n),e.polygonOffset(n,r))):le(e.POLYGON_OFFSET_FILL)}function xe(t){t?ce(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+ee-1),L!==t&&(e.activeTexture(t),L=t)}function Ce(t,n,r){r===void 0&&(r=L===null?e.TEXTURE0+ee-1:L);let a=ne[r];a===void 0&&(a={type:void 0,texture:void 0},ne[r]=a),(a.type!==t||a.texture!==n)&&(L!==r&&(e.activeTexture(r),L=r),e.bindTexture(t,n||se[t]),a.type=t,a.texture=n)}function we(){let t=ne[L];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function B(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ne(t){return f[t]===void 0?e.getParameter(t):f[t]}function V(t,n){f[t]!==n&&(e.pixelStorei(t,n),f[t]=n)}function Pe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Fe(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function Ie(t,n){let r=u.get(n);r===void 0&&(r=new WeakMap,u.set(n,r));let a=r.get(t);a===void 0&&(a=e.getUniformBlockIndex(n,t.name),r.set(t,a))}function Le(t,n){let r=u.get(n).get(t);l.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),l.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),d={},f={},L=null,ne={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new In(0,0,0),E=0,D=!1,O=null,A=null,M=null,N=null,P=null,ae.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),c.reset()}return{buffers:{color:o,depth:s,stencil:c},enable:ce,disable:le,bindFramebuffer:ue,drawBuffers:de,useProgram:fe,setBlending:he,setMaterial:ge,setFlipSided:_e,setCullFace:ve,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:Ce,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:Me,texImage3D:B,pixelStorei:V,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:z,scissor:Pe,viewport:Fe,reset:Re}}function Au(e,t,f,p,m,h,g){let _=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,v=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),y=new G,b=new WeakMap,x=new Set,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(e,t){return w?new OffscreenCanvas(e,t):Je(`canvas`)}function E(e,t,n){let r=1,a=Ne(e);if((a.width>n||a.height>n)&&(r=n/Math.max(a.width,a.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*a.width),o=Math.floor(r*a.height);S===void 0&&(S=T(n,o));let s=t?T(n,o):S;return s.width=n,s.height=o,s.getContext(`2d`).drawImage(e,0,0,n,o),H(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+n+`x`+o+`).`),s}else return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e;return e}function D(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function M(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function N(n,r,a,o,s,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;o&&(l=t.get(`EXT_texture_norm16`),l||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=r;if(r===e.RED&&(a===e.FLOAT&&(u=e.R32F),a===e.HALF_FLOAT&&(u=e.R16F),a===e.UNSIGNED_BYTE&&(u=e.R8),a===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),a===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),r===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.R8UI),a===e.UNSIGNED_SHORT&&(u=e.R16UI),a===e.UNSIGNED_INT&&(u=e.R32UI),a===e.BYTE&&(u=e.R8I),a===e.SHORT&&(u=e.R16I),a===e.INT&&(u=e.R32I)),r===e.RG&&(a===e.FLOAT&&(u=e.RG32F),a===e.HALF_FLOAT&&(u=e.RG16F),a===e.UNSIGNED_BYTE&&(u=e.RG8),a===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),a===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RG8UI),a===e.UNSIGNED_SHORT&&(u=e.RG16UI),a===e.UNSIGNED_INT&&(u=e.RG32UI),a===e.BYTE&&(u=e.RG8I),a===e.SHORT&&(u=e.RG16I),a===e.INT&&(u=e.RG32I)),r===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGB8UI),a===e.UNSIGNED_SHORT&&(u=e.RGB16UI),a===e.UNSIGNED_INT&&(u=e.RGB32UI),a===e.BYTE&&(u=e.RGB8I),a===e.SHORT&&(u=e.RGB16I),a===e.INT&&(u=e.RGB32I)),r===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),a===e.UNSIGNED_INT&&(u=e.RGBA32UI),a===e.BYTE&&(u=e.RGBA8I),a===e.SHORT&&(u=e.RGBA16I),a===e.INT&&(u=e.RGBA32I)),r===e.RGB&&(a===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),a===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),a===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),r===e.RGBA){let t=c?Ve:Rt.getTransfer(s);a===e.FLOAT&&(u=e.RGBA32F),a===e.HALF_FLOAT&&(u=e.RGBA16F),a===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),a===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),a===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),u}function P(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ee(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function F(e){let t=e.target;t.removeEventListener(`dispose`,F),I(t),t.isVideoTexture&&b.delete(t),t.isHTMLTexture&&x.delete(t)}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t)}function I(e){let t=p.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=C.get(n);if(r){let a=r[t.__cacheKey];a.usedTimes--,a.usedTimes===0&&L(e),Object.keys(r).length===0&&C.delete(n)}p.remove(e)}function L(t){let n=p.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,a=C.get(r);delete a[n.__cacheKey],g.memory.textures--}function ne(t){let n=p.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),p.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=p.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),g.memory.textures--),p.remove(r[t])}p.remove(t)}let re=0;function ie(){re=0}function ae(){return re}function R(e){re=e}function oe(){let e=re;return e>=m.maxTextures&&H(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+m.maxTextures),re+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,n){let r=p.get(t);if(t.isVideoTexture&&Me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);f.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function le(t,n){let r=p.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ye(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);f.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ue(t,n){let r=p.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){ye(r,t,n);return}f.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function de(t,n){let r=p.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){be(r,t,n);return}f.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let fe={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},pe={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},me={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function he(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,fe[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,fe[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,fe[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,pe[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,pe[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,me[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||p.get(r).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,m.getMaxAnisotropy())),p.get(r).__currentAnisotropy=r.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,F));let a=n.source,o=C.get(a);o===void 0&&(o={},C.set(a,o));let s=se(n);if(s!==t.__cacheKey){o[s]===void 0&&(o[s]={texture:e.createTexture(),usedTimes:0},g.memory.textures++,r=!0),o[s].usedTimes++;let a=o[t.__cacheKey];a!==void 0&&(o[t.__cacheKey].usedTimes--,a.usedTimes===0&&L(n)),t.__cacheKey=s,t.__webglTexture=o[s].texture}return r}function _e(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ve(t,n,r,a){let o=t.updateRanges;if(o.length===0)f.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,a,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],a=t.start+t.count,c=_e(r.start,n.width,4),l=_e(t.start,n.width,4);r.start<=a+1&&c===l&&_e(r.start+r.count-1,n.width,4)===c?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=f.getParameter(e.UNPACK_ROW_LENGTH),l=f.getParameter(e.UNPACK_SKIP_PIXELS),u=f.getParameter(e.UNPACK_SKIP_ROWS);f.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),p=l;f.pixelStorei(e.UNPACK_SKIP_PIXELS,u),f.pixelStorei(e.UNPACK_SKIP_ROWS,d),f.texSubImage2D(e.TEXTURE_2D,0,u,d,p,1,r,a,n.data)}t.clearUpdateRanges(),f.pixelStorei(e.UNPACK_ROW_LENGTH,c),f.pixelStorei(e.UNPACK_SKIP_PIXELS,l),f.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,n,r){let a=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(a=e.TEXTURE_3D);let o=ge(t,n),s=n.source;f.bindTexture(a,t.__webglTexture,e.TEXTURE0+r);let c=p.get(s);if(s.version!==c.__version||o===!0){if(f.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Rt.getPrimaries(Rt.workingColorSpace),r=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),a=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;f.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),f.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),f.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}f.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=E(n.image,!1,m.maxTextureSize);t=B(n,t);let l=h.convert(n.format,n.colorSpace),u=h.convert(n.type),d=N(n.internalFormat,l,u,n.normalized,n.colorSpace,n.isVideoTexture);he(a,n);let p,g=n.mipmaps,_=n.isVideoTexture!==!0,v=c.__version===void 0||o===!0,y=s.dataReady,b=ee(n,t);if(n.isDepthTexture)d=P(n.format===A,n.type),v&&(_?f.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):f.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(n.isDataTexture)if(g.length>0){_&&v&&f.texStorage2D(e.TEXTURE_2D,b,d,g[0].width,g[0].height);for(let t=0,n=g.length;t<n;t++)p=g[t],_?y&&f.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,l,u,p.data):f.texImage2D(e.TEXTURE_2D,t,d,p.width,p.height,0,l,u,p.data);n.generateMipmaps=!1}else _?(v&&f.texStorage2D(e.TEXTURE_2D,b,d,t.width,t.height),y&&ve(n,t,l,u)):f.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){_&&v&&f.texStorage3D(e.TEXTURE_2D_ARRAY,b,d,g[0].width,g[0].height,t.depth);for(let r=0,a=g.length;r<a;r++)if(p=g[r],n.format!==1023)if(l!==null)if(_){if(y)if(n.layerUpdates.size>0){let t=Ts(p.width,p.height,n.format,n.type);for(let a of n.layerUpdates){let n=p.data.subarray(a*t/p.data.BYTES_PER_ELEMENT,(a+1)*t/p.data.BYTES_PER_ELEMENT);f.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,a,p.width,p.height,1,l,n)}n.clearLayerUpdates()}else f.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,p.width,p.height,t.depth,l,p.data)}else f.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,d,p.width,p.height,t.depth,0,p.data,0,0);else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else _?y&&f.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,p.width,p.height,t.depth,l,u,p.data):f.texImage3D(e.TEXTURE_2D_ARRAY,r,d,p.width,p.height,t.depth,0,l,u,p.data)}else{_&&v&&f.texStorage2D(e.TEXTURE_2D,b,d,g[0].width,g[0].height);for(let t=0,r=g.length;t<r;t++)p=g[t],n.format===1023?_?y&&f.texSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,l,u,p.data):f.texImage2D(e.TEXTURE_2D,t,d,p.width,p.height,0,l,u,p.data):l===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&f.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,p.width,p.height,l,p.data):f.compressedTexImage2D(e.TEXTURE_2D,t,d,p.width,p.height,0,p.data)}else if(n.isDataArrayTexture)if(_){if(v&&f.texStorage3D(e.TEXTURE_2D_ARRAY,b,d,t.width,t.height,t.depth),y)if(n.layerUpdates.size>0){let r=Ts(t.width,t.height,n.format,n.type);for(let a of n.layerUpdates){let n=t.data.subarray(a*r/t.data.BYTES_PER_ELEMENT,(a+1)*r/t.data.BYTES_PER_ELEMENT);f.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,n)}n.clearLayerUpdates()}else f.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}else f.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(n.isData3DTexture)_?(v&&f.texStorage3D(e.TEXTURE_3D,b,d,t.width,t.height,t.depth),y&&f.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):f.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(n.isFramebufferTexture){if(v)if(_)f.texStorage2D(e.TEXTURE_2D,b,d,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<b;t++)f.texImage2D(e.TEXTURE_2D,t,d,n,r,0,l,u,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),x.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of x)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}let a=e.RGBA,o=e.RGBA,s=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,a,o,s,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ne(g[0]);f.texStorage2D(e.TEXTURE_2D,b,d,t.width,t.height)}for(let t=0,n=g.length;t<n;t++)p=g[t],_?y&&f.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,p):f.texImage2D(e.TEXTURE_2D,t,d,l,u,p);n.generateMipmaps=!1}else if(_){if(v){let n=Ne(t);f.texStorage2D(e.TEXTURE_2D,b,d,n.width,n.height)}y&&f.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else f.texImage2D(e.TEXTURE_2D,0,d,l,u,t);D(n)&&O(a),c.__version=s.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function be(t,n,r){if(n.image.length!==6)return;let a=ge(t,n),o=n.source;f.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let s=p.get(o);if(o.version!==s.__version||a===!0){f.activeTexture(e.TEXTURE0+r);let t=Rt.getPrimaries(Rt.workingColorSpace),c=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;f.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),f.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),f.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),f.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=n.isCompressedTexture||n.image[0].isCompressedTexture,d=n.image[0]&&n.image[0].isDataTexture,p=[];for(let e=0;e<6;e++)!u&&!d?p[e]=E(n.image[e],!0,m.maxCubemapSize):p[e]=d?n.image[e].image:n.image[e],p[e]=B(n,p[e]);let g=p[0],_=h.convert(n.format,n.colorSpace),v=h.convert(n.type),y=N(n.internalFormat,_,v,n.normalized,n.colorSpace),b=n.isVideoTexture!==!0,x=s.__version===void 0||a===!0,S=o.dataReady,C=ee(n,g);he(e.TEXTURE_CUBE_MAP,n);let w;if(u){b&&x&&f.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,g.width,g.height);for(let t=0;t<6;t++){w=p[t].mipmaps;for(let r=0;r<w.length;r++){let a=w[r];n.format===1023?b?S&&f.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,_,v,a.data):f.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,a.width,a.height,0,_,v,a.data):_===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):b?S&&f.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,_,a.data):f.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,y,a.width,a.height,0,a.data)}}}else{if(w=n.mipmaps,b&&x){w.length>0&&C++;let t=Ne(p[0]);f.texStorage2D(e.TEXTURE_CUBE_MAP,C,y,t.width,t.height)}for(let t=0;t<6;t++)if(d){b?S&&f.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,p[t].width,p[t].height,_,v,p[t].data):f.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,p[t].width,p[t].height,0,_,v,p[t].data);for(let n=0;n<w.length;n++){let r=w[n].image[t].image;b?S&&f.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,_,v,r.data):f.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,y,r.width,r.height,0,_,v,r.data)}}else{b?S&&f.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,p[t]):f.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,_,v,p[t]);for(let n=0;n<w.length;n++){let r=w[n];b?S&&f.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,_,v,r.image[t]):f.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,y,_,v,r.image[t])}}}D(n)&&O(e.TEXTURE_CUBE_MAP),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function xe(t,n,r,a,o,s){let c=h.convert(r.format,r.colorSpace),l=h.convert(r.type),u=N(r.internalFormat,c,l,r.normalized,r.colorSpace),d=p.get(n),m=p.get(r);if(m.__renderTarget=n,!d.__hasExternalTextures){let t=Math.max(1,n.width>>s),r=Math.max(1,n.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?f.texImage3D(o,s,u,t,r,n.depth,0,c,l,null):f.texImage2D(o,s,u,t,r,0,c,l,null)}f.bindFramebuffer(e.FRAMEBUFFER,t),je(n)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,m.__webglTexture,0,Ae(n)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,m.__webglTexture,s),f.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let a=n.depthTexture,o=a&&a.isDepthTexture?a.type:null,s=P(n.stencilBuffer,o),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),s,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),s,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,s,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let a=0;a<t.length;a++){let o=t[a],s=h.convert(o.format,o.colorSpace),c=h.convert(o.type),l=N(o.internalFormat,s,c,o.normalized,o.colorSpace);je(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),l,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ce(t,n,r){let a=n.isWebGLCubeRenderTarget===!0;if(f.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let o=p.get(n.depthTexture);if(o.__renderTarget=n,(!o.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),a){if(o.__webglInit===void 0&&(o.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,F)),o.__webglTexture===void 0){o.__webglTexture=e.createTexture(),f.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),he(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=h.convert(n.depthTexture.format),r=h.convert(n.depthTexture.type),a;n.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let o=0;o<6;o++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,a,n.width,n.height,0,t,r,null)}}else ce(n.depthTexture,0);let s=o.__webglTexture,c=Ae(n),l=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)je(n)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)je(n)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`Unknown depthTexture format`)}function we(t){let n=p.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)Ce(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ce(n.__webglFramebuffer[0],t,0):Ce(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(f.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Se(n.__webglDepthbuffer[r],t,!1);else{let a=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,o),e.framebufferRenderbuffer(e.FRAMEBUFFER,a,e.RENDERBUFFER,o)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?f.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):f.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Se(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,a)}}f.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){let a=p.get(t);n!==void 0&&xe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&we(t)}function Ee(t){let n=t.texture,r=p.get(t),a=p.get(n);t.addEventListener(`dispose`,te);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=n.version,g.memory.textures++),s){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let a=0;a<n.mipmaps.length;a++)r.__webglFramebuffer[t][a]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=p.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),g.memory.textures++)}if(t.samples>0&&je(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],f.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let a=o[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let s=h.convert(a.format,a.colorSpace),c=h.convert(a.type),l=N(a.internalFormat,s,c,a.normalized,a.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Se(r.__webglDepthRenderbuffer,t,!0)),f.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){f.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),he(e.TEXTURE_CUBE_MAP,n);for(let a=0;a<6;a++)if(n.mipmaps&&n.mipmaps.length>0)for(let o=0;o<n.mipmaps.length;o++)xe(r.__webglFramebuffer[a][o],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+a,o);else xe(r.__webglFramebuffer[a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0);D(n)&&O(e.TEXTURE_CUBE_MAP),f.unbindTexture()}else if(c){for(let n=0,a=o.length;n<a;n++){let a=o[n],s=p.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),f.bindTexture(c,s.__webglTexture),he(c,a),xe(r.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+n,c,0),D(a)&&O(c)}f.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),f.bindTexture(o,a.__webglTexture),he(o,n),n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)xe(r.__webglFramebuffer[a],t,n,e.COLOR_ATTACHMENT0,o,a);else xe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,o,0);D(n)&&O(o),f.unbindTexture()}t.depthBuffer&&we(t)}function De(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=M(e),n=p.get(r).__webglTexture;f.bindTexture(t,n),O(t),f.unbindTexture()}}}let Oe=[],ke=[];function z(t){if(t.samples>0){if(je(t)===!1){let n=t.textures,r=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=p.get(t),l=n.length>1;if(l)for(let t=0;t<n.length;t++)f.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),f.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);f.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer);let u=t.texture.mipmaps;u&&u.length>0?f.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):f.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let u=0;u<n.length;u++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[u]);let t=p.get(n[u]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,a,0,0,r,a,o,e.NEAREST),v===!0&&(Oe.length=0,ke.length=0,Oe.push(e.COLOR_ATTACHMENT0+u),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Oe.push(s),ke.push(s),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Oe))}if(f.bindFramebuffer(e.READ_FRAMEBUFFER,null),f.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<n.length;t++){f.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let r=p.get(n[t]).__webglTexture;f.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}f.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&v){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(m.maxSamples,e.samples)}function je(e){let n=p.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Me(e){let t=g.render.frame;b.get(e)!==t&&(b.set(e,t),e.update())}function B(e,t){let n=e.colorSpace,r=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||a!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(y.width=e.naturalWidth||e.width,y.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(y.width=e.displayWidth,y.height=e.displayHeight):(y.width=e.width,y.height=e.height),y}this.allocateTextureUnit=oe,this.resetTextureUnits=ie,this.getTextureUnits=ae,this.setTextureUnits=R,this.setTexture2D=ce,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=de,this.rebindTextures=Te,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return f.buffers.depth.getReversed()}}function ju(e,t){function n(n,r=``){let a,o=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===`srgb`)if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===36196||n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return a.COMPRESSED_R11_EAC;if(n===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return a.COMPRESSED_RG11_EAC;if(n===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Mu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _o({vertexShader:Mu,fragmentShader:Nu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new io(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends rt{constructor(e,t){super();let n=this,r=null,a=1,o=null,s=`local-floor`,c=1,l=null,u=null,d=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,v=new Pu,y={},b=t.getContextAttributes(),x=null,C=null,w=[],T=[],E=new G,M=null,N=new Zo;N.viewport=new Yt;let P=new Zo;P.viewport=new Yt;let ee=[N,P],F=new as,te=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=w[e];return t===void 0&&(t=new jn,w[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=w[e];return t===void 0&&(t=new jn,w[e]=t),t.getGripSpace()},this.getHand=function(e){let t=w[e];return t===void 0&&(t=new jn,w[e]=t),t.getHandSpace()};function L(e){let t=T.indexOf(e.inputSource);if(t===-1)return;let n=w[t];n!==void 0&&(n.update(e.inputSource,e.frame,l||o),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<w.length;e++){let t=T[e];t!==null&&(T[e]=null,w[e].disconnect(t))}te=null,I=null,v.reset();for(let e in y)delete y[e];e.setRenderTarget(x),m=null,p=null,d=null,r=null,C=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){s=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(e){l=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,o=null,s=null;b.depth&&(s=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?A:O,o=b.stencil?S:_);let c={colorFormat:t.RGBA8,depthFormat:s,scaleFactor:a};d=this.getBinding(),p=d.createProjectionLayer(c),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),C=new Zt(p.textureWidth,p.textureHeight,{format:D,type:f,depthTexture:new Mi(p.textureWidth,p.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Zt(m.framebufferWidth,m.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=T.indexOf(n);r>=0&&(T[r]=null,w[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=T.indexOf(n);if(r===-1){for(let e=0;e<w.length;e++)if(e>=T.length){T.push(n),r=e;break}else if(T[e]===null){T[e]=n,r=e;break}if(r===-1)break}let a=w[r];a&&a.connect(n)}}let ie=new K,ae=new K;function R(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),a=t.projectionMatrix.elements,o=n.projectionMatrix.elements,s=a[14]/(a[10]-1),c=a[14]/(a[10]+1),l=(a[9]+1)/a[5],u=(a[9]-1)/a[5],d=(a[8]-1)/a[0],f=(o[8]+1)/o[0],p=s*d,m=s*f,h=r/(-d+f),g=h*-d;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(g),e.translateZ(h),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),a[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=s+h,n=c+h,a=p-g,o=m+(r-g),d=l*c/n*t,f=u*c/n*t;e.projectionMatrix.makePerspective(a,o,d,f,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;v.texture!==null&&(v.depthNear>0&&(t=v.depthNear),v.depthFar>0&&(n=v.depthFar)),F.near=P.near=N.near=t,F.far=P.far=N.far=n,(te!==F.near||I!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),te=F.near,I=F.far),F.layers.mask=e.layers.mask|6,N.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let a=e.parent,o=F.cameras;oe(F,a);for(let e=0;e<o.length;e++)oe(o[e],a);o.length===2?R(F,N,P):F.projectionMatrix.copy(N.projectionMatrix),se(e,F,a)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(e){c=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(e){return y[e]};let ce=null;function le(t,a){if(u=a.getViewerPose(l||o),h=a,u!==null){let t=u.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let a=!1;t.length!==F.cameras.length&&(F.cameras.length=0,a=!0);for(let n=0;n<t.length;n++){let r=t[n],o=null;if(m!==null)o=m.getViewport(r);else{let t=d.getViewSubImage(p,r);o=t.viewport,n===0&&(e.setRenderTargetTextures(C,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(C))}let s=ee[n];s===void 0&&(s=new Zo,s.layers.enable(n),s.viewport=new Yt,ee[n]=s),s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(r.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(o.x,o.y,o.width,o.height),n===0&&(F.matrix.copy(s.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),a===!0&&F.cameras.push(s)}let o=r.enabledFeatures;if(o&&o.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&v.init(e,r.renderState)}if(o&&o.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=y[n];e||(e=new Pi,y[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<w.length;e++){let t=T[e],n=w[e];t!==null&&n!==void 0&&n.update(t,a,l||o)}ce&&ce(t,a),a.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:a}),h=null}let ue=new Ds;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Iu=new en,Lu=new Nt;Lu.set(-1,0,0,0,1,0,0,0,1);function Ru(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,po(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function a(e,t,n,r,a){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?o(e,t):t.isMeshLambertMaterial?(o(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(o(e,t),f(e,t)):t.isMeshPhongMaterial?(o(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(o(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,a)):t.isMeshMatcapMaterial?(o(e,t),h(e,t)):t.isMeshDepthMaterial?o(e,t):t.isMeshDistanceMaterial?(o(e,t),g(e,t)):t.isMeshNormalMaterial?o(e,t):t.isLineBasicMaterial?(s(e,t),t.isLineDashedMaterial&&c(e,t)):t.isPointsMaterial?l(e,t,n,r):t.isSpriteMaterial?u(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function o(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let a=t.get(r),o=a.envMap,s=a.envMapRotation;o&&(e.envMap.value=o,e.envMapRotation.value.setFromMatrix4(Iu.makeRotationFromEuler(s)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Lu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function c(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function l(e,t,r,a){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=a*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function f(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function zu(e,t,n,r){let a={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function u(e,n){let s=a[e.id];s===void 0&&(h(e),s=d(e),a[e.id]=s,e.addEventListener(`dispose`,_));let c=n.program;r.updateUBOMapping(e,c);let l=t.render.frame;o[e.id]!==l&&(p(e),o[e.id]=l)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),a=t.__size,o=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,a,o),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return U(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=a[t.id],r=t.uniforms,o=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,a=n.length;r<a;r++){let a=n[r];if(m(a,t,r,o)===!0){let t=a.__offset,n=Array.isArray(a.value)?a.value:[a.value],r=0;for(let o=0;o<n.length;o++){let s=n[o],c=g(s);typeof s==`number`||typeof s==`boolean`?(a.__data[0]=s,e.bufferSubData(e.UNIFORM_BUFFER,t+r,a.__data)):s.isMatrix3?(a.__data[0]=s.elements[0],a.__data[1]=s.elements[1],a.__data[2]=s.elements[2],a.__data[3]=0,a.__data[4]=s.elements[3],a.__data[5]=s.elements[4],a.__data[6]=s.elements[5],a.__data[7]=0,a.__data[8]=s.elements[6],a.__data[9]=s.elements[7],a.__data[10]=s.elements[8],a.__data[11]=0):ArrayBuffer.isView(s)?a.__data.set(new s.constructor(s.buffer,s.byteOffset,a.__data.length)):(s.toArray(a.__data,r),r+=c.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,a.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(e,t,n,r){let a=e.value,o=t+`_`+n;if(r[o]===void 0)return typeof a==`number`||typeof a==`boolean`?r[o]=a:ArrayBuffer.isView(a)?r[o]=a.slice():r[o]=a.clone(),!0;{let e=r[o];if(typeof a==`number`||typeof a==`boolean`){if(e!==a)return r[o]=a,!0}else if(ArrayBuffer.isView(a))return!0;else if(e.equals(a)===!1)return e.copy(a),!0}return!1}function h(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],a=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=a.length;e<r;e++){let r=a[e],o=g(r),s=n%16,c=s%o.boundary,l=s+c;n+=c,l!==0&&16-l<o.storage&&(n+=16-l),t.__data=new Float32Array(o.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=o.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function g(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t}function _(t){let n=t.target;n.removeEventListener(`dispose`,_);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete o[n.id]}function v(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}return{bind:l,update:u,dispose:v}}var Bu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vu=null;function Hu(){return Vu===null&&(Vu=new ni(Bu,16,16,P,y),Vu.name=`DFG_LUT`,Vu.minFilter=l,Vu.magFilter=l,Vu.wrapS=r,Vu.wrapT=r,Vu.generateMipmaps=!1,Vu.needsUpdate=!0),Vu}var Uu=class{constructor(e={}){let{canvas:t=Ye(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=f}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=n.getContextAttributes().alpha}else v=o;let C=g,w=new Set([F,ee,N]),T=new Set([f,_,h,S,b,x]),E=new Uint32Array(4),D=new Int32Array(4),O=new K,A=null,M=null,P=[],te=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,ne=!1,re=null;this._outputColorSpace=ze;let ie=0,ae=0,R=null,oe=-1,se=null,ce=new Yt,le=new Yt,ue=null,de=new In(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,ve=new Yt(0,0,pe,me),ye=new Yt(0,0,pe,me),be=!1,xe=new ui,Se=!1,Ce=!1,we=new en,Te=new K,Ee=new Yt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return R===null?he:1}let z=n;function Ae(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),z===null){let t=`webgl2`;if(z=Ae(t,e),z===null)throw Ae(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw U(`WebGLRenderer: `+e.message),e}let je,Me,B,Ne,V,Pe,Fe,Ie,Le,Re,Be,Ve,He,Ue,We,Ke,qe,Je,Xe,Ze,$e,et,nt;function rt(){je=new sc(z),je.init(),$e=new ju(z,je),Me=new Ls(z,je,e,$e),B=new ku(z,je),Me.reversedDepthBuffer&&m&&B.buffers.depth.setReversed(!0),Ne=new uc(z),V=new lu,Pe=new Au(z,je,B,V,Me,$e,Ne),Fe=new oc(L),Ie=new Os(z),et=new Fs(z,Ie),Le=new cc(z,Ie,Ne,et),Re=new fc(z,Le,Ie,et,Ne),Je=new dc(z,Me,Pe),We=new Rs(V),Be=new cu(L,Fe,je,Me,et,We),Ve=new Ru(L,V),He=new pu,Ue=new bu(je),qe=new Ps(L,Fe,B,Re,v,c),Ke=new Ou(L,Re,Me),nt=new zu(z,Ne,Me,B),Xe=new Is(z,je,Ne),Ze=new lc(z,je,Ne),Ne.programs=Be.programs,L.capabilities=Me,L.extensions=je,L.properties=V,L.renderLists=He,L.shadowMap=Ke,L.state=B,L.info=Ne}rt(),C!==1009&&(I=new mc(C,t.width,t.height,r,a));let it=new Fu(L,z);this.xr=it,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=je.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=je.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(it.isPresenting){H(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(C===1009){U(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}I.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(ve)},this.setViewport=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),B.viewport(ce.copy(ve).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(he).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=w.has(t)}if(e){let e=R.texture.type,t=T.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),a=n.r,o=n.g,s=n.b;t?(E[0]=a,E[1]=o,E[2]=s,E[3]=r,z.clearBufferuiv(z.COLOR,0,E)):(D[0]=a,D[1]=o,D[2]=s,D[3]=r,z.clearBufferiv(z.COLOR,0,D))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),qe.dispose(),He.dispose(),Ue.dispose(),V.dispose(),Fe.dispose(),Re.dispose(),et.dispose(),nt.dispose(),Be.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,pt),it.removeEventListener(`sessionend`,mt),ht.stop()};function at(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ne=!0}function ot(){Qe(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ne.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,a=Ke.type;rt(),Ne.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=a}function st(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),W(t)}function W(e){lt(e),V.remove(e)}function lt(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,a,o){t===null&&(t=De);let s=a.isMesh&&a.matrixWorld.determinant()<0,c=Tt(e,t,n,r,a);B.setMaterial(r,s);let l=n.index,u=1;if(r.wireframe===!0){if(l=Le.getWireframeAttribute(n),l===void 0)return;u=2}let d=n.drawRange,f=n.attributes.position,p=d.start*u,m=(d.start+d.count)*u;o!==null&&(p=Math.max(p,o.start*u),m=Math.min(m,(o.start+o.count)*u)),l===null?f!=null&&(p=Math.max(p,0),m=Math.min(m,f.count)):(p=Math.max(p,0),m=Math.min(m,l.count));let h=m-p;if(h<0||h===1/0)return;et.setup(a,r,c,n,l);let g,_=Xe;if(l!==null&&(g=Ie.get(l),_=Ze,_.setIndex(g)),a.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),_.setMode(z.LINES)):_.setMode(z.TRIANGLES);else if(a.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),a.isLineSegments?_.setMode(z.LINES):a.isLineLoop?_.setMode(z.LINE_LOOP):_.setMode(z.LINE_STRIP)}else a.isPoints?_.setMode(z.POINTS):a.isSprite&&_.setMode(z.TRIANGLES);if(a.isBatchedMesh)if(je.get(`WEBGL_multi_draw`))_.renderMultiDraw(a._multiDrawStarts,a._multiDrawCounts,a._multiDrawCount);else{let e=a._multiDrawStarts,t=a._multiDrawCounts,n=a._multiDrawCount,o=l?Ie.get(l).bytesPerElement:1,s=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)s.setValue(z,`_gl_DrawID`,r),_.render(e[r]/o,t[r])}else if(a.isInstancedMesh)_.renderInstances(p,h,a.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);_.renderInstances(p,h,t)}else _.render(p,h)};function ut(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),M=Ue.get(n),M.init(t),te.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let a=0;a<t.length;a++){let o=t[a];ut(o,n,e),r.add(o)}else ut(t,n,e),r.add(t)}),M=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}je.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Ds;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,it.setAnimationLoop(e),e===null?ht.stop():ht.start()},it.addEventListener(`sessionstart`,pt),it.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=I!==null&&(R===null||n)&&I.begin(L,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(L,e,t,R),M=Ue.get(e,te.length),M.init(t),M.state.textureUnits=Pe.getTextureUnits(),te.push(M),we.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(we,Ge,t.reversedDepth),Ce=this.localClippingEnabled,Se=We.init(this.clippingPlanes,Ce),A=He.get(e,P.length),A.init(),P.push(A),it.enabled===!0&&it.isPresenting===!0){let e=L.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,L.sortObjects)}gt(e,t,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(ge,_e),Oe=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Oe&&qe.addToRenderList(A,e),this.info.render.frame++,Se===!0&&We.beginShadows();let a=M.state.shadowsArray;if(Ke.render(a,e,t),Se===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&I.hasRenderPass())===!1){let n=A.opaque,r=A.transmissive;if(M.setupLights(),t.isArrayCamera){let a=t.cameras;if(r.length>0)for(let t=0,o=a.length;t<o;t++){let o=a[t];vt(n,r,e,o)}Oe&&qe.render(e);for(let t=0,n=a.length;t<n;t++){let n=a[t];_t(A,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),Oe&&qe.render(e),_t(A,e,t)}R!==null&&ae===0&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),r&&I.end(L),e.isScene===!0&&e.onAfterRender(L,e,t),et.resetDefaultState(),oe=-1,se=null,te.pop(),te.length>0?(M=te[te.length-1],Pe.setTextureUnits(M.state.textureUnits),Se===!0&&We.setGlobalState(L.clippingPlanes,M.state.camera)):M=null,P.pop(),A=P.length>0?P[P.length-1]:null,re!==null&&re.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||xe.intersectsSprite(e)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(we);let t=Re.update(e),a=e.material;a.visible&&A.push(e,t,a,n,Ee.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||xe.intersectsObject(e))){let t=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ee.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(we)),Array.isArray(a)){let r=t.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&A.push(e,t,c,n,Ee.z,s)}}else a.visible&&A.push(e,t,a,n,Ee.z,null)}}let a=e.children;for(let e=0,o=a.length;e<o;e++)gt(a[e],t,n,r)}function _t(e,t,n,r){let{opaque:a,transmissive:o,transparent:s}=e;M.setupLightsView(n),Se===!0&&We.setGlobalState(L.clippingPlanes,n),r&&B.viewport(ce.copy(r)),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),s.length>0&&yt(s,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=je.has(`EXT_color_buffer_half_float`)||je.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Me.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let o=M.state.transmissionRenderTarget[r.id],s=r.viewport||ce;o.setSize(s.z*L.transmissionResolutionScale,s.w*L.transmissionResolutionScale);let c=L.getRenderTarget(),l=L.getActiveCubeFace(),u=L.getActiveMipmapLevel();L.setRenderTarget(o),L.getClearColor(de),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),Oe&&qe.render(n);let p=L.toneMapping;L.toneMapping=0;let m=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),Se===!0&&We.setGlobalState(L.clippingPlanes,r),yt(e,n,r),Pe.updateMultisampleRenderTarget(o),Pe.updateRenderTargetMipmap(o),je.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let a=0,o=t.length;a<o;a++){let{object:o,geometry:s,material:c,group:l}=t[a];if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,bt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(o),Pe.updateRenderTargetMipmap(o))}L.setRenderTarget(c,l,u),L.setClearColor(de,fe),m!==void 0&&(r.viewport=m),L.toneMapping=p}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let a=0,o=e.length;a<o;a++){let o=e[a],{object:s,geometry:c,group:l}=o,u=o.material;u.allowOverride===!0&&r!==null&&(u=r),s.layers.test(n.layers)&&bt(s,t,n,c,u,l)}}function bt(e,t,n,r,a,o){e.onBeforeRender(L,t,n,r,a,o),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),a.onBeforeRender(L,t,n,r,e,o),a.transparent===!0&&a.side===2&&a.forceSinglePass===!1?(a.side=1,a.needsUpdate=!0,L.renderBufferDirect(n,t,r,a,e,o),a.side=0,a.needsUpdate=!0,L.renderBufferDirect(n,t,r,a,e,o),a.side=2):L.renderBufferDirect(n,t,r,a,e,o),e.onAfterRender(L,t,n,r,a,o)}function xt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),a=M.state.lights,o=M.state.shadowsArray,s=a.state.version,c=Be.getParameters(e,a.state,o,t,n,M.state.lightProbeGridArray),l=Be.getProgramCacheKey(c),u=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let d=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,d),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,u===void 0&&(e.addEventListener(`dispose`,ct),u=new Map,r.programs=u);let f=u.get(l);if(f!==void 0){if(r.currentProgram===f&&r.lightsStateVersion===s)return Ct(e,c),f}else c.uniforms=Be.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,c),e.onBeforeCompile(c,L),f=Be.acquireProgram(c,l),u.set(l,f),r.uniforms=c.uniforms;let p=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(p.clippingPlanes=We.uniform),Ct(e,c),r.needsLights=Dt(e),r.lightsStateVersion=s,r.needsLights&&(p.ambientLightColor.value=a.state.ambient,p.lightProbe.value=a.state.probe,p.directionalLights.value=a.state.directional,p.directionalLightShadows.value=a.state.directionalShadow,p.spotLights.value=a.state.spot,p.spotLightShadows.value=a.state.spotShadow,p.rectAreaLights.value=a.state.rectArea,p.ltc_1.value=a.state.rectAreaLTC1,p.ltc_2.value=a.state.rectAreaLTC2,p.pointLights.value=a.state.point,p.pointLightShadows.value=a.state.pointShadow,p.hemisphereLights.value=a.state.hemi,p.directionalShadowMatrix.value=a.state.directionalShadowMatrix,p.spotLightMatrix.value=a.state.spotLightMatrix,p.spotLightMap.value=a.state.spotLightMap,p.pointShadowMatrix.value=a.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=f,r.uniformsList=null,f}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];O.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(O))return n}return null}function Tt(e,t,n,r,a){t.isScene!==!0&&(t=De),Pe.resetTextureUnits();let o=t.fog,s=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,c=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rt.workingColorSpace,l=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,u=Fe.get(r.envMap||s,l),d=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,f=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),p=!!n.morphAttributes.position,m=!!n.morphAttributes.normal,h=!!n.morphAttributes.color,g=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(g=L.toneMapping);let _=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=_===void 0?0:_.length,y=V.get(r),b=M.state.lights;if(Se===!0&&(Ce===!0||e!==se)){let t=e===se&&r.id===oe;We.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===c?a.isBatchedMesh&&y.batching===!1||!a.isBatchedMesh&&y.batching===!0||a.isBatchedMesh&&y.batchingColor===!0&&a.colorTexture===null||a.isBatchedMesh&&y.batchingColor===!1&&a.colorTexture!==null||a.isInstancedMesh&&y.instancing===!1||!a.isInstancedMesh&&y.instancing===!0||a.isSkinnedMesh&&y.skinning===!1||!a.isSkinnedMesh&&y.skinning===!0||a.isInstancedMesh&&y.instancingColor===!0&&a.instanceColor===null||a.isInstancedMesh&&y.instancingColor===!1&&a.instanceColor!==null||a.isInstancedMesh&&y.instancingMorph===!0&&a.morphTexture===null||a.isInstancedMesh&&y.instancingMorph===!1&&a.morphTexture!==null?x=!0:y.envMap===u?r.fog===!0&&y.fog!==o||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==We.numPlanes||y.numIntersection!==We.numIntersection)?x=!0:y.vertexAlphas===d&&y.vertexTangents===f&&y.morphTargets===p&&y.morphNormals===m&&y.morphColors===h&&y.toneMapping===g&&y.morphTargetsCount===v?!!y.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let S=y.currentProgram;x===!0&&(S=xt(r,t,a),re&&r.isNodeMaterial&&re.onUpdateProgram(r,S,y));let C=!1,w=!1,T=!1,E=S.getUniforms(),D=y.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==oe&&(oe=r.id,w=!0),y.needsLights){let e=wt(M.state.lightProbeGridArray,a);y.lightProbeGrid!==e&&(y.lightProbeGrid=e,w=!0)}if(C||se!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Te.setFromMatrixPosition(e.matrixWorld)),Me.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(y.needsLights&&(b.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,b.state.directionalShadowMap,Pe),b.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,b.state.spotShadowMap,Pe),b.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,b.state.pointShadowMap,Pe)),a.isSkinnedMesh){E.setOptional(z,a,`bindMatrix`),E.setOptional(z,a,`bindMatrixInverse`);let e=a.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Pe))}a.isBatchedMesh&&(E.setOptional(z,a,`batchingTexture`),E.setValue(z,`batchingTexture`,a._matricesTexture,Pe),E.setOptional(z,a,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,a._indirectTexture,Pe),E.setOptional(z,a,`batchingColorTexture`),a._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,a._colorsTexture,Pe));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Je.update(a,n,S),(w||y.receiveShadow!==a.receiveShadow)&&(y.receiveShadow=a.receiveShadow,E.setValue(z,`receiveShadow`,a.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Hu()),w){if(E.setValue(z,`toneMappingExposure`,L.toneMappingExposure),y.needsLights&&Et(D,T),o&&r.fog===!0&&Ve.refreshFogUniforms(D,o),Ve.refreshMaterialUniforms(D,r,he,me,M.state.transmissionRenderTarget[e.id]),y.needsLights&&y.lightProbeGrid){let e=y.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}xl.upload(z,St(y),D,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xl.upload(z,St(y),D,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,a.center),E.setValue(z,`modelViewMatrix`,a.modelViewMatrix),E.setValue(z,`normalMatrix`,a.normalMatrix),E.setValue(z,`modelMatrix`,a.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Ot=z.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){R=e,ie=t,ae=n;let r=null,a=!1,o=!1;if(e){let s=V.get(e);if(s.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,s.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(ce),B.scissor(le),B.setScissorTest(ue),oe=-1;return}else if(s.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(s.__hasExternalTextures)Pe.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(l[t])?l[t][n]:l[t],a=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(ve).multiplyScalar(he).floor(),le.copy(ye).multiplyScalar(he).floor(),ue=be;if(n!==0&&(r=Ot),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(ce),B.scissor(le),B.setScissorTest(ue),a){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let a=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,a.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}oe=-1},this.readRenderTargetPixels=function(e,t,n,r,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let l=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l){B.bindFramebuffer(z.FRAMEBUFFER,l);try{let s=e.textures[c],l=s.format,u=s.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+c),!Me.textureFormatReadable(l)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Me.textureTypeReadable(u)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-a&&z.readPixels(t,n,r,a,$e.convert(l),$e.convert(u),o)}finally{let e=R===null?null:V.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,a,o,s,c=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let l=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&s!==void 0&&(l=l[s]),l)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-a){B.bindFramebuffer(z.FRAMEBUFFER,l);let s=e.textures[c],u=s.format,d=s.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+c),!Me.textureFormatReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Me.textureTypeReadable(d))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,o.byteLength,z.STREAM_READ),z.readPixels(t,n,r,a,$e.convert(u),$e.convert(d),0);let p=R===null?null:V.get(R).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await tt(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,o),z.deleteBuffer(f),z.deleteSync(m),o}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,a=Math.floor(e.image.width*r),o=Math.floor(e.image.height*r),s=t===null?0:t.x,c=t===null?0:t.y;Pe.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,s,c,a,o),B.unbindTexture()};let kt=z.createFramebuffer(),G=z.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,a=0,o=0){let s,c,l,u,d,f,p,m,h,g=e.isCompressedTexture?e.mipmaps[o]:e.image;if(n!==null)s=n.max.x-n.min.x,c=n.max.y-n.min.y,l=n.isBox3?n.max.z-n.min.z:1,u=n.min.x,d=n.min.y,f=n.isBox3?n.min.z:0;else{let t=2**-a;s=Math.floor(g.width*t),c=Math.floor(g.height*t),l=e.isDataArrayTexture?g.depth:e.isData3DTexture?Math.floor(g.depth*t):1,u=0,d=0,f=0}r===null?(p=0,m=0,h=0):(p=r.x,m=r.y,h=r.z);let _=$e.convert(t.format),v=$e.convert(t.type),y;t.isData3DTexture?(Pe.setTexture3D(t,0),y=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),y=z.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),y=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let b=B.getParameter(z.UNPACK_ROW_LENGTH),x=B.getParameter(z.UNPACK_IMAGE_HEIGHT),S=B.getParameter(z.UNPACK_SKIP_PIXELS),C=B.getParameter(z.UNPACK_SKIP_ROWS),w=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,g.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,g.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,u),B.pixelStorei(z.UNPACK_SKIP_ROWS,d),B.pixelStorei(z.UNPACK_SKIP_IMAGES,f);let T=e.isDataArrayTexture||e.isData3DTexture,E=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),g=V.get(n.__renderTarget),_=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,g.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,_.__webglFramebuffer);for(let n=0;n<l;n++)T&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,a,f+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,o,h+n)),z.blitFramebuffer(u,d,s,c,p,m,s,c,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(a!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,kt),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let e=0;e<l;e++)T?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,a,f+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,a),E?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,o,h+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,o),a===0?E?z.copyTexSubImage3D(y,o,p,m,h+e,u,d,s,c):z.copyTexSubImage2D(y,o,p,m,u,d,s,c):z.blitFramebuffer(u,d,s,c,p,m,s,c,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else E?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(y,o,p,m,h,s,c,l,_,v,g.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(y,o,p,m,h,s,c,l,_,g.data):z.texSubImage3D(y,o,p,m,h,s,c,l,_,v,g):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,o,p,m,s,c,_,v,g.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,o,p,m,g.width,g.height,_,g.data):z.texSubImage2D(z.TEXTURE_2D,o,p,m,s,c,_,v,g);B.pixelStorei(z.UNPACK_ROW_LENGTH,b),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,x),B.pixelStorei(z.UNPACK_SKIP_PIXELS,S),B.pixelStorei(z.UNPACK_SKIP_ROWS,C),B.pixelStorei(z.UNPACK_SKIP_IMAGES,w),o===0&&t.generateMipmaps&&z.generateMipmap(y),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ie=0,ae=0,R=null,B.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ge}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}},Wu={type:`change`},Gu={type:`start`},Ku={type:`end`},qu=new Vr,Ju=new oi,Yu=Math.cos(70*kt.DEG2RAD),Xu=new K,Zu=2*Math.PI,Qu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$u=1e-6,ed=class extends ws{constructor(n,r=null){super(n,r),this.state=Qu.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new At,this._lastTargetPosition=new K,this._quat=new At().setFromUnitVectors(n.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new K,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new K,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nd.bind(this),this._onPointerDown=td.bind(this),this._onPointerUp=rd.bind(this),this._onContextMenu=ud.bind(this),this._onMouseWheel=od.bind(this),this._onKeyDown=sd.bind(this),this._onTouchStart=cd.bind(this),this._onTouchMove=ld.bind(this),this._onMouseDown=id.bind(this),this._onMouseMove=ad.bind(this),this._interceptControlDown=dd.bind(this),this._interceptControlUp=fd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wu),this.update(),this.state=Qu.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Xu.copy(t).sub(this.target),Xu.applyQuaternion(this._quat),this._spherical.setFromVector3(Xu),this.autoRotate&&this.state===Qu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Zu:n>Math.PI&&(n-=Zu),r<-Math.PI?r+=Zu:r>Math.PI&&(r-=Zu),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=e!=this._spherical.radius}if(Xu.setFromSpherical(this._spherical),Xu.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Xu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),a=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Xu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(qu.origin.copy(this.object.position),qu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qu.direction))<Yu?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),qu.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>$u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$u||this._lastTargetPosition.distanceToSquared(this.target)>$u?(this.dispatchEvent(Wu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Zu/60/60*this.autoRotateSpeed:Zu/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xu.setFromMatrixColumn(t,0),Xu.multiplyScalar(-e),this._panOffset.add(Xu)}_panUp(e,t){this.screenSpacePanning===!0?Xu.setFromMatrixColumn(t,1):(Xu.setFromMatrixColumn(t,0),Xu.crossVectors(this.object.up,Xu)),Xu.multiplyScalar(e),this._panOffset.add(Xu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Xu.copy(r).sub(this.target);let a=Xu.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,o=n.width,s=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zu*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Zu*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zu*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function td(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function nd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function rd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Ku),this.state=Qu.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function id(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Qu.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qu.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qu.PAN}break;default:this.state=Qu.NONE}this.state!==Qu.NONE&&this.dispatchEvent(Gu)}function ad(e){switch(this.state){case Qu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Qu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Qu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function od(e){this.enabled===!1||this.enableZoom===!1||this.state!==Qu.NONE||(e.preventDefault(),this.dispatchEvent(Gu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Ku))}function sd(e){this.enabled!==!1&&this._handleKeyDown(e)}function cd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Qu.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Qu.TOUCH_PAN;break;default:this.state=Qu.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Qu.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Qu.TOUCH_DOLLY_ROTATE;break;default:this.state=Qu.NONE}break;default:this.state=Qu.NONE}this.state!==Qu.NONE&&this.dispatchEvent(Gu)}function ld(e){switch(this._trackPointer(e),this.state){case Qu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Qu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Qu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Qu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Qu.NONE}}function ud(e){this.enabled!==!1&&e.preventDefault()}function dd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function fd(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var pd=new ys,md=new K,hd=new K,gd=new At,_d={X:new K(1,0,0),Y:new K(0,1,0),Z:new K(0,0,1)},vd={type:`change`},yd={type:`mouseDown`,mode:null},bd={type:`mouseUp`,mode:null},xd={type:`objectChange`},Sd=class extends ws{constructor(e,t=null){super(void 0,t);let n=new Ud(this);this._root=n;let r=new Wd;this._gizmo=r,n.add(r);let a=new Gd;this._plane=a,n.add(a);let o=this;function s(e,t){let n=t;Object.defineProperty(o,e,{get:function(){return n===void 0?t:n},set:function(t){n!==t&&(n=t,a[e]=t,r[e]=t,o.dispatchEvent({type:e+`-changed`,value:t}),o.dispatchEvent(vd))}}),o[e]=t,a[e]=t,r[e]=t}s(`camera`,e),s(`object`,void 0),s(`enabled`,!0),s(`axis`,null),s(`mode`,`translate`),s(`translationSnap`,null),s(`rotationSnap`,null),s(`scaleSnap`,null),s(`space`,`world`),s(`size`,1),s(`dragging`,!1),s(`showX`,!0),s(`showY`,!0),s(`showZ`,!0),s(`showXY`,!0),s(`showYZ`,!0),s(`showXZ`,!0),s(`minX`,-1/0),s(`maxX`,1/0),s(`minY`,-1/0),s(`maxY`,1/0),s(`minZ`,-1/0),s(`maxZ`,1/0);let c=new K,l=new K,u=new At,d=new At,f=new K,p=new At,m=new K,h=new K,g=new K,_=new K;s(`worldPosition`,c),s(`worldPositionStart`,l),s(`worldQuaternion`,u),s(`worldQuaternionStart`,d),s(`cameraPosition`,f),s(`cameraQuaternion`,p),s(`pointStart`,m),s(`pointEnd`,h),s(`rotationAxis`,g),s(`rotationAngle`,0),s(`eye`,_),this._offset=new K,this._startNorm=new K,this._endNorm=new K,this._cameraScale=new K,this._parentPosition=new K,this._parentQuaternion=new At,this._parentQuaternionInv=new At,this._parentScale=new K,this._worldScaleStart=new K,this._worldQuaternionInv=new At,this._worldScale=new K,this._positionStart=new K,this._quaternionStart=new At,this._scaleStart=new K,this._getPointer=Cd.bind(this),this._onPointerDown=Td.bind(this),this._onPointerHover=wd.bind(this),this._onPointerMove=Ed.bind(this),this._onPointerUp=Dd.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointermove`,this._onPointerHover),this.domElement.addEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerHover),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=``}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&pd.setFromCamera(e,this.camera);let t=Od(this._gizmo.picker[this.mode],pd);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&pd.setFromCamera(e,this.camera);let t=Od(this._plane,pd,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,yd.mode=this.mode,this.dispatchEvent(yd)}}pointerMove(e){let t=this.axis,n=this.mode,r=this.object,a=this.space;if(n===`scale`?a=`local`:(t===`E`||t===`XYZE`||t===`XYZ`)&&(a=`world`),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&pd.setFromCamera(e,this.camera);let o=Od(this._plane,pd,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n===`translate`)this._offset.copy(this.pointEnd).sub(this.pointStart),a===`local`&&t!==`XYZ`&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf(`X`)===-1&&(this._offset.x=0),t.indexOf(`Y`)===-1&&(this._offset.y=0),t.indexOf(`Z`)===-1&&(this._offset.z=0),a===`local`&&t!==`XYZ`?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(a===`local`&&(r.position.applyQuaternion(gd.copy(this._quaternionStart).invert()),t.search(`X`)!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),a===`world`&&(r.parent&&r.position.add(md.setFromMatrixPosition(r.parent.matrixWorld)),t.search(`X`)!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(md.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(n===`scale`){if(t.search(`XYZ`)!==-1){let e=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(e*=-1),hd.set(e,e,e)}else md.copy(this.pointStart),hd.copy(this.pointEnd),md.applyQuaternion(this._worldQuaternionInv),hd.applyQuaternion(this._worldQuaternionInv),hd.divide(md),t.search(`X`)===-1&&(hd.x=1),t.search(`Y`)===-1&&(hd.y=1),t.search(`Z`)===-1&&(hd.z=1);r.scale.copy(this._scaleStart).multiply(hd),this.scaleSnap&&(t.search(`X`)!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Y`)!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Z`)!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n===`rotate`){this._offset.copy(this.pointEnd).sub(this.pointStart);let e=20/this.worldPosition.distanceTo(md.setFromMatrixPosition(this.camera.matrixWorld)),n=!1;t===`XYZE`?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(md.copy(this.rotationAxis).cross(this.eye))*e):(t===`X`||t===`Y`||t===`Z`)&&(this.rotationAxis.copy(_d[t]),md.copy(_d[t]),a===`local`&&md.applyQuaternion(this.worldQuaternion),md.cross(this.eye),md.length()===0?n=!0:this.rotationAngle=this._offset.dot(md.normalize())*e),(t===`E`||n)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),a===`local`&&t!==`E`&&t!==`XYZE`?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(gd.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(gd.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(vd),this.dispatchEvent(xd)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(bd.mode=this.mode,this.dispatchEvent(bd)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(vd),this.dispatchEvent(xd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return pd}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,r){let a=this._gizmo.materialLib;a.xAxis.color.set(e),a.yAxis.color.set(t),a.zAxis.color.set(n),a.active.color.set(r),a.xAxisTransparent.color.set(e),a.yAxisTransparent.color.set(t),a.zAxisTransparent.color.set(n),a.activeTransparent.color.set(r),a.xAxis._color&&a.xAxis._color.set(e),a.yAxis._color&&a.yAxis._color.set(t),a.zAxis._color&&a.zAxis._color.set(n),a.active._color&&a.active._color.set(r),a.xAxisTransparent._color&&a.xAxisTransparent._color.set(e),a.yAxisTransparent._color&&a.yAxisTransparent._color.set(t),a.zAxisTransparent._color&&a.zAxisTransparent._color.set(n),a.activeTransparent._color&&a.activeTransparent._color.set(r)}};function Cd(e){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};{let t=this.domElement.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:-(e.clientY-t.top)/t.height*2+1,button:e.button}}}function wd(e){if(this.enabled)switch(e.pointerType){case`mouse`:case`pen`:this.pointerHover(this._getPointer(e));break}}function Td(e){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.pointerHover(this._getPointer(e)),this.pointerDown(this._getPointer(e)))}function Ed(e){this.enabled&&this.pointerMove(this._getPointer(e))}function Dd(e){this.enabled&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.pointerUp(this._getPointer(e)))}function Od(e,t,n){let r=t.intersectObject(e,!0);for(let e=0;e<r.length;e++)if(r[e].object.visible||n)return r[e];return!1}var kd=new dn,Ad=new K(0,1,0),jd=new K(0,0,0),Md=new en,Nd=new At,Pd=new At,Fd=new K,Id=new en,Ld=new K(1,0,0),Rd=new K(0,1,0),zd=new K(0,0,1),Bd=new K,Vd=new K,Hd=new K,Ud=class extends On{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error(`TransformControls: The attached 3D object must be a part of the scene graph.`):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Wd=class extends On{constructor(){super(),this.isTransformControlsGizmo=!0,this.type=`TransformControlsGizmo`;let e=new Hr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new di({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let r=t.clone();r.opacity=.5;let a=e.clone();a.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let s=e.clone();s.color.setHex(255);let c=e.clone();c.color.setHex(16711680),c.opacity=.5;let l=e.clone();l.color.setHex(65280),l.opacity=.5;let u=e.clone();u.color.setHex(255),u.opacity=.5;let d=e.clone();d.opacity=.25;let f=e.clone();f.color.setHex(16776960),f.opacity=.25;let p=e.clone();p.color.setHex(16776960);let m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:a,yAxis:o,zAxis:s,active:p,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:f};let h=new Li(0,.04,.1,12);h.translate(0,.05,0);let g=new Fi(.08,.08,.08);g.translate(0,.04,0);let _=new jr;_.setAttribute(`position`,new q([0,0,0,1,0,0],3));let v=new Li(.0075,.0075,.5,3);v.translate(0,.25,0);function y(e,t){let n=new oo(e,.0075,3,64,t*Math.PI*2);return n.rotateY(Math.PI/2),n.rotateX(Math.PI/2),n}function b(){let e=new jr;return e.setAttribute(`position`,new q([0,0,0,1,1,1],3)),e}let x={X:[[new J(h,a),[.5,0,0],[0,0,-Math.PI/2]],[new J(h,a),[-.5,0,0],[0,0,Math.PI/2]],[new J(v,a),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new J(h,o),[0,.5,0]],[new J(h,o),[0,-.5,0],[Math.PI,0,0]],[new J(v,o)]],Z:[[new J(h,s),[0,0,.5],[Math.PI/2,0,0]],[new J(h,s),[0,0,-.5],[-Math.PI/2,0,0]],[new J(v,s),null,[Math.PI/2,0,0]]],XYZ:[[new J(new ro(.1,0),d),[0,0,0]]],XY:[[new J(new Fi(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new J(new Fi(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Fi(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new J(new Li(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Li(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Li(.2,0,.6,4),n),[0,.3,0]],[new J(new Li(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Li(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Li(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new J(new ro(.2,0),n)]],XY:[[new J(new Fi(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Fi(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Fi(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new J(new ro(.01,2),r),null,null,null,`helper`]],END:[[new J(new ro(.01,2),r),null,null,null,`helper`]],DELTA:[[new yi(b(),r),null,null,null,`helper`]],X:[[new yi(_,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new yi(_,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new yi(_,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]},w={XYZE:[[new J(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new J(y(.5,.5),a)]],Y:[[new J(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new J(y(.5,.5),s),null,[0,Math.PI/2,0]]],E:[[new J(y(.75,1),f),null,[0,Math.PI/2,0]]]},T={AXIS:[[new yi(_,r),[-1e3,0,0],null,[1e6,1,1],`helper`]]},E={XYZE:[[new J(new ao(.25,10,8),n)]],X:[[new J(new oo(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new J(new oo(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new J(new oo(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new J(new oo(.75,.1,2,24),n)]]},D={X:[[new J(g,a),[.5,0,0],[0,0,-Math.PI/2]],[new J(v,a),[0,0,0],[0,0,-Math.PI/2]],[new J(g,a),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new J(g,o),[0,.5,0]],[new J(v,o)],[new J(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new J(g,s),[0,0,.5],[Math.PI/2,0,0]],[new J(v,s),[0,0,0],[Math.PI/2,0,0]],[new J(g,s),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new J(new Fi(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new J(new Fi(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Fi(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Fi(.1,.1,.1),d)]]},O={X:[[new J(new Li(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Li(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Li(.2,0,.6,4),n),[0,.3,0]],[new J(new Li(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Li(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Li(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new J(new Fi(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Fi(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Fi(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Fi(.2,.2,.2),n),[0,0,0]]]},A={X:[[new yi(_,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new yi(_,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new yi(_,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]};function M(e){let t=new On;for(let n in e)for(let r=e[n].length;r--;){let a=e[n][r][0].clone(),o=e[n][r][1],s=e[n][r][2],c=e[n][r][3],l=e[n][r][4];a.name=n,a.tag=l,o&&a.position.set(o[0],o[1],o[2]),s&&a.rotation.set(s[0],s[1],s[2]),c&&a.scale.set(c[0],c[1],c[2]),a.updateMatrix();let u=a.geometry.clone();u.applyMatrix4(a.matrix),a.geometry=u,a.renderOrder=1/0,a.position.set(0,0,0),a.rotation.set(0,0,0),a.scale.set(1,1,1),t.add(a)}return t}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=M(x)),this.add(this.gizmo.rotate=M(w)),this.add(this.gizmo.scale=M(D)),this.add(this.picker.translate=M(S)),this.add(this.picker.rotate=M(E)),this.add(this.picker.scale=M(O)),this.add(this.helper.translate=M(C)),this.add(this.helper.rotate=M(T)),this.add(this.helper.scale=M(A)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let t=(this.mode===`scale`?`local`:this.space)===`local`?this.worldQuaternion:Pd;this.gizmo.translate.visible=this.mode===`translate`,this.gizmo.rotate.visible=this.mode===`rotate`,this.gizmo.scale.visible=this.mode===`scale`,this.helper.translate.visible=this.mode===`translate`,this.helper.rotate.visible=this.mode===`rotate`,this.helper.scale.visible=this.mode===`scale`;let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let e=0;e<n.length;e++){let r=n[e];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let a;if(a=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(a*this.size/4),r.tag===`helper`){r.visible=!1,r.name===`AXIS`?(r.visible=!!this.axis,this.axis===`X`&&(gd.setFromEuler(kd.set(0,0,0)),r.quaternion.copy(t).multiply(gd),Math.abs(Ad.copy(Ld).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Y`&&(gd.setFromEuler(kd.set(0,0,Math.PI/2)),r.quaternion.copy(t).multiply(gd),Math.abs(Ad.copy(Rd).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Z`&&(gd.setFromEuler(kd.set(0,Math.PI/2,0)),r.quaternion.copy(t).multiply(gd),Math.abs(Ad.copy(zd).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`XYZE`&&(gd.setFromEuler(kd.set(0,Math.PI/2,0)),Ad.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(Md.lookAt(jd,Ad,Rd)),r.quaternion.multiply(gd),r.visible=this.dragging),this.axis===`E`&&(r.visible=!1)):r.name===`START`?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name===`END`?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name===`DELTA`?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),md.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),md.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(md),r.visible=this.dragging):(r.quaternion.copy(t),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}if(r.quaternion.copy(t),this.mode===`translate`||this.mode===`scale`){let e=.99,n=.2;r.name===`X`&&Math.abs(Ad.copy(Ld).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Y`&&Math.abs(Ad.copy(Rd).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Z`&&Math.abs(Ad.copy(zd).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XY`&&Math.abs(Ad.copy(zd).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`YZ`&&Math.abs(Ad.copy(Ld).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XZ`&&Math.abs(Ad.copy(Rd).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)}else this.mode===`rotate`&&(Nd.copy(t),Ad.copy(this.eye).applyQuaternion(gd.copy(t).invert()),r.name.search(`E`)!==-1&&r.quaternion.setFromRotationMatrix(Md.lookAt(this.eye,jd,Rd)),r.name===`X`&&(gd.setFromAxisAngle(Ld,Math.atan2(-Ad.y,Ad.z)),gd.multiplyQuaternions(Nd,gd),r.quaternion.copy(gd)),r.name===`Y`&&(gd.setFromAxisAngle(Rd,Math.atan2(Ad.x,Ad.z)),gd.multiplyQuaternions(Nd,gd),r.quaternion.copy(gd)),r.name===`Z`&&(gd.setFromAxisAngle(zd,Math.atan2(Ad.y,Ad.x)),gd.multiplyQuaternions(Nd,gd),r.quaternion.copy(gd)));r.visible=r.visible&&(r.name.indexOf(`X`)===-1||this.showX),r.visible=r.visible&&(r.name.indexOf(`Y`)===-1||this.showY),r.visible=r.visible&&(r.name.indexOf(`Z`)===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf(`E`)===-1||this.showX&&this.showY&&this.showZ),r.visible=r.visible&&(r.name.indexOf(`XY`)===-1||this.showXY),r.visible=r.visible&&(r.name.indexOf(`YZ`)===-1||this.showYZ),r.visible=r.visible&&(r.name.indexOf(`XZ`)===-1||this.showXZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split(``).some(function(e){return r.name===e}))&&(r.material.color.copy(this.materialLib.active.color),r.material.opacity=1)}super.updateMatrixWorld(e)}},Gd=class extends J{constructor(){super(new io(1e5,1e5,2,2),new Hr({visible:!1,wireframe:!0,side:2,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type=`TransformControlsPlane`}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode===`scale`&&(t=`local`),Bd.copy(Ld).applyQuaternion(t===`local`?this.worldQuaternion:Pd),Vd.copy(Rd).applyQuaternion(t===`local`?this.worldQuaternion:Pd),Hd.copy(zd).applyQuaternion(t===`local`?this.worldQuaternion:Pd),Ad.copy(Vd),this.mode){case`translate`:case`scale`:switch(this.axis){case`X`:Ad.copy(this.eye).cross(Bd),Fd.copy(Bd).cross(Ad);break;case`Y`:Ad.copy(this.eye).cross(Vd),Fd.copy(Vd).cross(Ad);break;case`Z`:Ad.copy(this.eye).cross(Hd),Fd.copy(Hd).cross(Ad);break;case`XY`:Fd.copy(Hd);break;case`YZ`:Fd.copy(Bd);break;case`XZ`:Ad.copy(Hd),Fd.copy(Vd);break;case`XYZ`:case`E`:Fd.set(0,0,0);break}break;default:Fd.set(0,0,0)}Fd.length()===0?this.quaternion.copy(this.cameraQuaternion):(Id.lookAt(md.set(0,0,0),Fd,Ad),this.quaternion.setFromRotationMatrix(Id)),super.updateMatrixWorld(e)}};function Kd(e){let t=new kn,n=new Li(e.tankDiameter/2,e.tankDiameter/2,e.tankHeight,32,1,!0),r=new bo({color:8965375,transparent:!0,opacity:.6,roughness:.1,transmission:.9,thickness:.01,side:2}),a=new J(n,r);a.position.y=e.tankHeight/2,t.add(a);let o=e.mirrorPlateType||`None`,s=e.tankDiameter/2,c=null,l=0;switch(o){case`FullHemisphere`:l=s,c=new ao(s,32,16,0,Math.PI*2,0,Math.PI/2);break;case`Dish`:l=s*.25,c=new ao(s,32,16,0,Math.PI*2,0,Math.PI/2),c.scale(1,.25,1);break;case`HalfEllipse`:l=s*.5,c=new ao(s,32,16,0,Math.PI*2,0,Math.PI/2),c.scale(1,.5,1);break;case`Cone`:l=e.tankHeight*.2,c=new Ri(s,l,32,1,!0),c.translate(0,l/2,0);break;default:l=0;let n=new J(new Li(s,s,.02,32),new bo({color:16777215,metalness:1,roughness:0,reflectivity:1,side:2}));n.position.y=0,t.add(n);break}if(c){c.computeVertexNormals();let e=new J(c,r);e.position.y=0,e.rotation.x=Math.PI,t.add(e)}let u=e.liquidHeight,d=u-l;d<0&&(d=0);let f=new bo({color:26367,transparent:!0,opacity:.35,roughness:.1,transmission:.3,depthWrite:!1});if(d>0){let e=new J(new Li(s*.99,s*.99,d,32,1,!0),f);e.position.y=d/2,t.add(e);let n=new J(new Ii(s*.99,32),f);if(n.position.y=d,n.rotation.x=-Math.PI/2,t.add(n),l===0){let e=new J(new Ii(s*.99,32),f);e.position.y=0,e.rotation.x=Math.PI/2,t.add(e)}}if(l>0&&u>0){let e=null,n=Math.min(u,l);if(o===`Cone`){let r=n/l*s;e=new Ri(r*.99,n*.99,32,1,!0),e.translate(0,n/2,0);let a=new J(e,f);if(a.rotation.x=Math.PI,a.position.y=-l+n,t.add(a),n<l){let e=new J(new Ii(r*.99,32),f);e.position.y=-l+n,e.rotation.x=-Math.PI/2,t.add(e)}}else if(o===`FullHemisphere`||o===`Dish`||o===`HalfEllipse`){let r=1;o===`Dish`&&(r=.25),o===`HalfEllipse`&&(r=.5);let a=n/r,c=Math.PI/2;if(n<l){let e=Math.max(-1,Math.min(1,1-a/s));c=Math.acos(e)}e=new ao(s*.99,32,16,0,Math.PI*2,0,c),e.scale(1,r,1);let u=new J(e,f);if(u.position.y=0,u.rotation.x=Math.PI,t.add(u),n<l){let e=new J(new Ii(s*Math.sin(c)*.99,32),f);e.position.y=-l+n,e.rotation.x=-Math.PI/2,t.add(e)}}}return t}function qd(e){let t=new kn;if(!e.coilEnabled)return t;let n=e.tankDiameter/2,r=e.mirrorPlateType||`None`,a=0;r===`FullHemisphere`?a=n:r===`Dish`?a=n*.25:r===`HalfEllipse`?a=n*.5:r===`Cone`&&(a=e.tankHeight*.2);let o=.05,s=Math.max(.15000000000000002,e.liquidHeight-a-.05)-o,c=new ma,l=e.coilRadius,u=e.coilTurns,d=100*u,f=[];for(let e=0;e<=d;e++){let t=e/d,n=t*Math.PI*2*u,r=l*Math.cos(n),a=-l*Math.sin(n),c=o+t*s;f.push(new K(r,c,a))}let p=new Yi(f);c.add(p);let m=new so(c,d,l*.05,8,!1),h=16755200;e.coilHeatSource===`Water`?h=3381759:e.coilHeatSource===`Steam`&&(h=16755200);let g=Math.min(Math.max((e.coilTemp-273)/227,0),1)*.8,_=new J(m,new yo({color:h,metalness:.3,roughness:.6,emissive:h,emissiveIntensity:g}));return t.add(_),t}function Jd(e){let t=new kn,n=e.impellerType,r=e.mirrorPlateType||`None`,a=e.tankDiameter/2,o=0;r===`FullHemisphere`?o=a:r===`Dish`?o=a*.25:r===`HalfEllipse`?o=a*.5:r===`Cone`&&(o=e.tankHeight*.2);let s=e.impellerClearance-o,c=s+e.bladeWidth/2,l=s;(n===`Anchor`||n===`Ribbon`)&&(l=e.tankHeight*.1);let u=e.tankHeight-l,d=(e.shaftDiameter||e.impellerDiameter*.12)/2,f=new Li(d,d,u,16),p=new yo({color:16737792,metalness:.5,roughness:.3}),m=new J(f,p);m.position.y=l+u/2,t.add(m);let h=d*1.6,g=new J(new Li(h,h,d*2.2,16),p);g.position.y=c,t.add(g);let _=new kn;_.position.y=c;let v=e.bladeCount,y=e.impellerDiameter/2,b=e.bladeWidth,x=e.bladeThickness||.01;if(n===`FlatPaddle`||n===`InclinedPaddle`)for(let t=0;t<v;t++){let r=t/v*Math.PI*2,a=new kn;a.rotation.y=-r;let o=new Fi(y,b,x);o.translate(y/2+.02,0,0);let s=new J(o,p);n===`InclinedPaddle`&&(s.rotation.x=e.bladeAngle*Math.PI/180),a.add(s),_.add(a)}else if(n===`FlatPropeller`){let e=Math.max(3,v);for(let t=0;t<e;t++){let n=t/e*Math.PI*2,r=new kn;r.rotation.y=-n;let a=new ga;a.absellipse(y*.5+.02,0,y*.45,b*.8,0,Math.PI*2,!1,0);let o=new eo(a,{depth:x,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002});o.translate(0,0,-x/2);let s=new J(o,p);s.rotation.x=45*Math.PI/180,r.add(s),_.add(r)}}else if(n===`Turbine`||n===`Rushton`){let e=y*.7,t=new J(new Li(e,e,x,32),p);_.add(t);let n=y*.35;for(let t=0;t<v;t++){let r=t/v*Math.PI*2,a=new kn;a.rotation.y=-r;let o=new Fi(n,b,x);o.translate(e,0,0);let s=new J(o,p);a.add(s),_.add(a)}}else if(n===`Pfaudler`){let t=(e.pfaudlerLiftAngle===void 0?25:e.pfaudlerLiftAngle)*Math.PI/180,n=y*.55,r=(e.pfaudlerSweepAngle===void 0?35:e.pfaudlerSweepAngle)*Math.PI/180,a=new ga;a.moveTo(-b/2,-x/2),a.lineTo(b/2,-x/2),a.lineTo(b/2,x/2),a.lineTo(-b/2,x/2),a.lineTo(-b/2,-x/2);for(let e=0;e<v;e++){let o=e/v*Math.PI*2,s=new kn;s.rotation.y=-o;let c=[];for(let e=0;e<=16;e++){let a=e/16,o=Math.max(a*y,.001),s=r*a*a,l=o<=n?0:(o-n)*Math.tan(t);c.push(new K(o*Math.cos(s),l,-o*Math.sin(s)))}let l=new J(new eo(a,{extrudePath:new Yi(c),steps:16,bevelEnabled:!1}),p);s.add(l),_.add(s)}}else if(n===`Anchor`){let t=Math.max(y*1.5,e.tankHeight*.3),n=Math.max(b,.05),r=new ga;r.moveTo(-y,t),r.lineTo(-y,0),r.absarc(0,0,y,Math.PI,0,!1),r.lineTo(y,t),r.lineTo(y-n,t),r.lineTo(y-n,0),r.absarc(0,0,y-n,0,Math.PI,!0),r.lineTo(-y+n,t),r.lineTo(-y,t);let a=new eo(r,{depth:x,bevelEnabled:!1});a.translate(0,-y*.2,-x/2);let o=new J(a,p);_.add(o);let s=new J(new Fi(y*2,n,x),p);s.position.y=t*.8-y*.2,_.add(s)}else if(n===`Ribbon`){class t extends Bi{constructor(e,t,n){super(),this.r=e,this.h=t,this.turns=n}getPoint(e,t=new K){let n=e*Math.PI*2*this.turns;return t.set(Math.cos(n)*this.r,e*this.h,Math.sin(n)*this.r)}}let n=e.tankHeight*.6,r=new t(y,n,2),a=new ga;a.moveTo(-b/2,-x/2),a.lineTo(b/2,-x/2),a.lineTo(b/2,x/2),a.lineTo(-b/2,x/2),a.lineTo(-b/2,-x/2);let o=new eo(a,{extrudePath:r,steps:150,bevelEnabled:!1}),s=new J(o,p);s.position.y=-n*.2,_.add(s);let c=new J(o,p);c.rotation.y=Math.PI,c.position.y=-n*.2,_.add(c);for(let e=0;e<3;e++){let t=new J(new Fi(y*2,x,b),p);t.position.y=n/2*e-n*.2,t.rotation.y=e*Math.PI/4,_.add(t)}}return t.add(_),t.userData.bladeGroup=_,t}var Yd=class e{constructor(e){this.nr=e.meshNr||20,this.ntheta=e.meshNtheta||36,this.ny=e.meshNy||30,this.blLayers=e.blLayers||3,this.blThickness=e.blThickness||.02,this.numCells=this.nr*this.ntheta*this.ny,this.radius=e.tankDiameter/2,this.tankHeight=e.tankHeight,this.meshHeight=e.liquidHeight,this.rMin=(e.tankDiameter||1)*.02,this.rNode=this.generate1DGrid(this.nr,this.radius-this.rMin,this.blLayers,this.blThickness,!0,e.blExpansionRatio,this.rMin),this.thetaNode=this.generateThetaGrid(this.ntheta,e.baffleCount,this.blLayers),this.etaNode=this.generate1DGrid(this.ny,1,this.blLayers,this.blThickness/this.meshHeight,!1,e.blExpansionRatio,0),this.flag=new Int8Array(this.numCells),this.mrf=new Int8Array(this.numCells),this.cx=new Float32Array(this.numCells),this.cy=new Float32Array(this.numCells),this.cz=new Float32Array(this.numCells),this.voxelize(e),this.buildNeighbors(e),this.injectOGrid(e);let t=this.rNode[1]-this.rNode[0],n=this.rNode[0]*(this.thetaNode[1]-this.thetaNode[0]),r=Math.max(t,n)/Math.min(t,n);r>20&&console.warn(`[CylindricalMesh] Innermost-cell aspect ratio = ${r.toFixed(1)} > 20. Consider increasing meshNtheta or axisRMin to reduce shear-rate blow-up in non-Newtonian simulations.`)}generate1DGrid(e,t,n,r,a,o,s=0){let c=new Float32Array(e+1);if(n<=0||r<=0||n>=e){for(let n=0;n<=e;n++)c[n]=s+n/e*t;return c}let l=e-n,u=t-r,d=u/l,f=o||1.3,p=r*(f-1)/(f**+n-1);Math.abs(f-1)<1e-6&&(p=r/n);let m=0;if(a){for(let e=0;e<=l;e++)c[e]=s+m,m+=d;m=u;for(let e=1;e<=n;e++)m+=p*f**+(n-e),c[l+e]=s+m}else{for(let e=0;e<=n;e++)c[e]=s+m,m+=p*f**+e;m=r;for(let e=1;e<=l;e++)m+=d,c[n+e]=s+m}return c[e]=s+t,c}generateThetaGrid(e,t,n){let r=new Float32Array(e+1);for(let a=0;a<=e;a++){let o=a/e;if(t>0&&n>0){let e=Math.min(.1,1/(2*Math.PI*t)*.8);o-=e*Math.sin(o*Math.PI*2*t)}r[a]=o*Math.PI*2}return r[e]=Math.PI*2,r}static getMirrorDepth(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2;return t===`FullHemisphere`?n:t===`Dish`?n*.25:t===`HalfEllipse`?n*.5:t===`Cone`?e.tankHeight*.2:0}static getImpellerHeight(e){return e.bladeWidth}static getClearanceRange(t){let n=e.getImpellerHeight(t);return{min:0,max:Math.max(0,t.liquidHeight-n)}}static getImpellerCenterY(t){let n=e.getMirrorDepth(t);return t.impellerClearance-n+t.bladeWidth/2}getBottomY(e,t){let n=0;return t.mirrorPlateType===`FullHemisphere`?n=-Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`Dish`?n=-.25*Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`HalfEllipse`?n=-.5*Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`Cone`&&(n=-(t.tankHeight*.2)*(1-e/this.radius)),n}getCellCenter(e,t,n,r){let a=(this.rNode[e]+this.rNode[e+1])/2,o=(this.thetaNode[t]+this.thetaNode[t+1])/2,s=(this.etaNode[n]+this.etaNode[n+1])/2,c=this.getBottomY(a,r),l=c+s*(this.getBottomY(0,r)+r.liquidHeight-c);return{x:a*Math.cos(o),y:l,z:a*Math.sin(o),r:a,theta:o,eta:s}}getCellCenterByIdx(e,t){if(e<this.nr*this.ntheta*this.ny){let n=e%this.nr,r=Math.floor(e/this.nr)%this.ntheta,a=Math.floor(e/(this.nr*this.ntheta));return this.getCellCenter(n,r,a,t)}else{let t=this.cx[e],n=this.cy[e],r=this.cz[e],a=Math.hypot(t,r),o=Math.atan2(-r,t);return o<0&&(o+=2*Math.PI),{x:t,y:n,z:r,r:a,theta:o}}}voxelize(t){let n=t.liquidHeight,r=t.baffleWidth,a=t.baffleThickness,o=t.baffleCount,s=t.baffleGap===void 0?this.radius*2/75:t.baffleGap,c=this.radius-r/2-s,l=t.impellerDiameter/2,u=e.getImpellerCenterY(t),d=t.bladeWidth;(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;let f=l*t.mrfRadialMargin,p=t.coilEnabled,m=t.coilRadius,h=t.coilTurns,g=m*.05,_=t.mirrorPlateType||`None`,v=0;_===`FullHemisphere`?v=this.radius:_===`Dish`?v=this.radius*.25:_===`HalfEllipse`?v=this.radius*.5:_===`Cone`&&(v=t.tankHeight*.2);let y=.05,b=Math.max(.15000000000000002,t.liquidHeight-v-.05),x=b-y,S=x/(2*Math.PI*h),C=u-d/2,w=u+d/2;if(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)C=t.tankHeight*.1,w=t.tankHeight*.9;else if(t.impellerType===`Pfaudler`){let e=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,n=(l-l*.55)*Math.tan(e);w=u+d/2+n}let T=C-t.mrfVerticalMarginBottom,E=w+t.mrfVerticalMarginTop,D=this.getBottomY(0,t)+n;for(let n=0;n<this.ny;n++)for(let s=0;s<this.ntheta;s++)for(let l=0;l<this.nr;l++){let u=l+this.nr*(s+this.ntheta*n),d=this.getCellCenter(l,s,n,t);if(d.y>D){this.flag[u]=2,this.mrf[u]=0;continue}this.flag[u]=0,this.cx[u]=d.x,this.cy[u]=d.y,this.cz[u]=d.z;let _=e.getImpellerCenterY(t)-t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(_=t.tankHeight*.1);let v=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;d.r<=v&&d.y>=_&&(this.flag[u]=5);let C=!1,w=t.impellerDiameter/2,O=t.bladeWidth,A=e.getImpellerCenterY(t),M=t.bladeThickness||.01,N=t.bladeCount||4,P=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,ee=d.y-A,F=d.r;if(F>P&&F<=w){if(t.impellerType===`FlatPaddle`||t.impellerType===`InclinedPaddle`){if(Math.abs(ee)<=O/2){let e=2*Math.PI/this.ntheta,n=Math.max(e*.95,M/2/Math.max(F,.01));for(let e=0;e<N;e++){let r=e/N*Math.PI*2,a=Math.abs(d.theta-r);if(a=Math.min(a,Math.PI*2-a),t.impellerType===`FlatPaddle`){if(a<=n){C=!0;break}}else{let e=(t.bladeAngle||45)*Math.PI/180,a=ee*Math.tan(e)/F,o=Math.abs(d.theta-(r+a));if(o=Math.min(o,Math.PI*2-o),o<=n){C=!0;break}}}}}else if(t.impellerType===`FlatPropeller`){if(Math.abs(ee)<=O/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,M/2/Math.max(F,.01)),n=Math.max(3,N);for(let e=0;e<n;e++){let r=e/n*Math.PI*2,a=ee/F,o=Math.abs(d.theta-(r+a));if(o=Math.min(o,Math.PI*2-o),o<=t){C=!0;break}}}}else if(t.impellerType===`Turbine`||t.impellerType===`Rushton`){let e=w*.7,t=M*1.5;if(F<=e&&Math.abs(ee)<=t/2&&(C=!0),F>=e*.9&&F<=w&&Math.abs(ee)<=O/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,M/2/Math.max(F,.01));for(let e=0;e<N;e++){let n=e/N*Math.PI*2,r=Math.abs(d.theta-n);if(r=Math.min(r,Math.PI*2-r),r<=t){C=!0;break}}}}else if(t.impellerType===`Pfaudler`){let e=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,n=w*.55,r=F<=n?0:(F-n)*Math.tan(e),a=(t.pfaudlerSweepAngle===void 0?35:t.pfaudlerSweepAngle)*Math.PI/180,o=Math.min(1,F/w),s=a*o*o;if(Math.abs(ee-r)<=O/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,M/2/Math.max(F,.01));for(let e=0;e<N;e++){let n=e/N*Math.PI*2,r=Math.abs(d.theta-(n+s));if(r=Math.min(r,Math.PI*2-r),r<=t){C=!0;break}}}}else if(t.impellerType===`Anchor`){let e=Math.max(w*1.5,t.tankHeight*.3),n=Math.max(O,.05),r=t.tankHeight*.1,a=d.y-r,o=2*Math.PI/this.ntheta,s=Math.max(o*.95,M/2/Math.max(F,.01));if(F>=w-n&&F<=w&&a>=0&&a<=e)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(d.theta-t);if(n=Math.min(n,Math.PI*2-n),n<=s){C=!0;break}}if(F<=w&&Math.abs(d.y-(r+e*.8))<=n/2)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(d.theta-t);if(n=Math.min(n,Math.PI*2-n),n<=s){C=!0;break}}let c=Math.sqrt(F*F+(d.y-r)**2);Math.abs(c-w)<=n/2&&d.y<=r&&(C=!0)}else if(t.impellerType===`Ribbon`){let e=t.tankHeight*.6,n=t.tankHeight*.1,r=d.y-n,a=2*Math.PI/this.ntheta,o=Math.max(a*.95,M/2/Math.max(F,.01));if(r>=0&&r<=e){if(F>=w-O/2&&F<=w+O/2){let t=r/e*Math.PI*2*2;for(let e=0;e<2;e++){let n=t+e*Math.PI,r=Math.abs(d.theta-n);if(r=Math.min(r,Math.PI*2-r),r<=o){C=!0;break}}}for(let t=0;t<3;t++){let n=e/2*t;if(Math.abs(r-n)<=O/2){let e=t*Math.PI/4,n=Math.abs(d.theta-e);n=Math.min(n,Math.PI*2-n);let r=Math.abs(d.theta-(e+Math.PI));if(r=Math.min(r,Math.PI*2-r),n<=o||r<=o){C=!0;break}}}}}}if(C&&(this.flag[u]=4),p&&d.y>=y&&d.y<=b){let e=((d.y-y)/x*2*Math.PI*h-d.theta)%(2*Math.PI);e<0&&(e+=2*Math.PI),e>Math.PI&&(e-=2*Math.PI);let t=e*S;Math.sqrt((d.r-m)**2+t**2)<=g&&(this.flag[u]=3)}if(t.showBaffle&&d.y>=0){let e=!1;for(let t=0;t<o;t++){let n=t/o*Math.PI*2,s=Math.cos(n)*c,l=Math.sin(n)*c,u=d.x-s,f=d.z-l,p=u*Math.cos(-n)-f*Math.sin(-n),m=u*Math.sin(-n)+f*Math.cos(-n);if(Math.abs(p)<=r/2&&Math.abs(m)<=a/2){e=!0;break}}e&&(this.flag[u]=6)}this.flag[u]===0&&d.r<=f&&d.y>=T&&d.y<=E&&(this.mrf[u]=1)}}buildNeighbors(e){this.neighbors=new Int32Array(this.numCells*6),this.neighbors.fill(-1),this.distE=new Float32Array(this.numCells),this.distW=new Float32Array(this.numCells),this.distN=new Float32Array(this.numCells),this.distS=new Float32Array(this.numCells),this.distT=new Float32Array(this.numCells),this.distB=new Float32Array(this.numCells),this.vol=new Float32Array(this.numCells),this.areaE=new Float32Array(this.numCells),this.areaW=new Float32Array(this.numCells),this.areaN=new Float32Array(this.numCells),this.areaS=new Float32Array(this.numCells),this.areaT=new Float32Array(this.numCells),this.areaB=new Float32Array(this.numCells),this.dCellR=new Float32Array(this.numCells),this.dCellTheta=new Float32Array(this.numCells),this.dCellY=new Float32Array(this.numCells);let t=this.nr,n=this.ntheta,r=this.ny;for(let a=0;a<r;a++)for(let o=0;o<n;o++)for(let s=0;s<t;s++){let c=s+t*(o+n*a),l=(this.rNode[s]+this.rNode[s+1])*.5,u=this.thetaNode[(o+1)%n]-this.thetaNode[o];u<0&&(u+=2*Math.PI);let d=this.thetaNode[o]-this.thetaNode[(o-1+n)%n];d<0&&(d+=2*Math.PI);let f=this.getBottomY(0,e)+e.liquidHeight,p=this.getBottomY(l,e),m=f-p,h=p+this.etaNode[a]*m,g=p+this.etaNode[a+1]*m-h,_=a<r-1?(this.etaNode[a+2]-this.etaNode[a+1])*m:g,v=a>0?(this.etaNode[a]-this.etaNode[a-1])*m:0,y=this.rNode[s+1]-this.rNode[s],b=s<t-1?this.rNode[s+2]-this.rNode[s+1]:y,x=s>0?this.rNode[s]-this.rNode[s-1]:y;this.distE[c]=s<t-1?y*.5+b*.5:1,this.distW[c]=s>0?y*.5+x*.5:y*.5;let S=(this.thetaNode[o]+this.thetaNode[o+1])*.5,C=this.thetaNode[(o+1)%n];C<this.thetaNode[o]&&(C+=2*Math.PI);let w=this.thetaNode[(o+2)%n];w<C&&(w+=2*Math.PI);let T=(C+w)*.5,E=this.thetaNode[(o-1+n)%n];E>this.thetaNode[o]&&(E-=2*Math.PI);let D=(E+this.thetaNode[o])*.5,O=T-S;O<0&&(O+=2*Math.PI);let A=S-D;A<0&&(A+=2*Math.PI),this.distN[c]=l*O,this.distS[c]=l*A,this.distT[c]=g*.5+_*.5,this.distB[c]=g*.5+v*.5;let M=this.rNode[s+1]-this.rNode[s],N=this.thetaNode[o+1]-this.thetaNode[o]<0?this.thetaNode[o+1]-this.thetaNode[o]+2*Math.PI:this.thetaNode[o+1]-this.thetaNode[o];this.vol[c]=l*M*N*g,this.areaE[c]=this.rNode[s+1]*N*g,this.areaW[c]=this.rNode[s]*N*g,this.areaN[c]=M*g,this.areaS[c]=M*g,this.areaT[c]=l*M*N,this.areaB[c]=l*M*N,this.dCellR[c]=M,this.dCellTheta[c]=Math.max(l*N,1e-9),this.dCellY[c]=Math.max(g,1e-9),s<t-1&&(this.neighbors[c*6+0]=c+1),s>0&&(this.neighbors[c*6+1]=c-1);let P=(o+1)%n;this.neighbors[c*6+2]=s+t*(P+n*a);let ee=(o-1+n)%n;if(this.neighbors[c*6+3]=s+t*(ee+n*a),a<r-1&&(this.neighbors[c*6+4]=c+t*n),a>0&&(this.neighbors[c*6+5]=c-t*n),s===0){let e=(o+Math.floor(n/2))%n;this.neighbors[c*6+1]=0+t*(e+n*a)}}}injectOGrid(t){if(this.ntheta%4!=0){console.warn(`ntheta must be a multiple of 4 for O-Grid. Skipping O-Grid injection.`);return}let n=this.ntheta/4,r=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,a=0;for(let e=0;e<this.nr&&this.rNode[e+1]<r;e++)a=e;let o=Math.max(0,Math.floor(this.nr/3)),s=0;for(;s<o&&a+2<this.nr&&!(2*this.rNode[a+1]/n>=(this.rNode[a+2]-this.rNode[a+1])*.5);)a++,s++;let c=this.rNode[a+1];{let e=2*c/n,t=this.rNode[Math.min(a+2,this.nr)]-this.rNode[a+1],r=t>0?t/e:1;(r>3||r>0&&r<1/3)&&console.warn(`[CylindricalMesh] O-Grid/Cylindrical cell-size ratio = ${r.toFixed(2)} (O-Grid cell size ${e.toExponential(2)} vs bordering cylindrical cell width ${t.toExponential(2)}). The O-Grid (M=ntheta/4=${n}) is still strongly mismatched with the cylindrical mesh at the interface. Consider lowering meshNtheta, raising meshNr, or increasing axisRMin/shaft clearance.`)}let l=this.ny;if(l===0)return;let u=Array(n+1).fill(0).map(()=>Array(n+1)),d=(this.ntheta-Math.floor(n/2))%this.ntheta;for(let e=0;e<=n;e++){let t=(d+e)%this.ntheta;u[n][e]={x:c*Math.cos(this.thetaNode[t]),z:c*Math.sin(this.thetaNode[t])}}for(let e=n;e>=0;e--){let t=(d+n+(n-e))%this.ntheta;u[e][n]={x:c*Math.cos(this.thetaNode[t]),z:c*Math.sin(this.thetaNode[t])}}for(let e=n;e>=0;e--){let t=(d+2*n+(n-e))%this.ntheta;u[0][e]={x:c*Math.cos(this.thetaNode[t]),z:c*Math.sin(this.thetaNode[t])}}for(let e=0;e<=n;e++){let t=(d+3*n+e)%this.ntheta;u[e][0]={x:c*Math.cos(this.thetaNode[t]),z:c*Math.sin(this.thetaNode[t])}}let f=new Float32Array(n+1),p=new Float32Array(n+1),m=d+3*n,h=this.thetaNode[m%this.ntheta],g=this.thetaNode[(m+n)%this.ntheta];g<=h&&(g+=2*Math.PI);for(let e=0;e<=n;e++){let t=this.thetaNode[(m+e)%this.ntheta];t<h&&(t+=2*Math.PI),f[e]=(t-h)/(g-h)}let _=d,v=this.thetaNode[_%this.ntheta],y=this.thetaNode[(_+n)%this.ntheta];y<=v&&(y+=2*Math.PI);for(let e=0;e<=n;e++){let t=this.thetaNode[(_+e)%this.ntheta];t<v&&(t+=2*Math.PI),p[e]=(t-v)/(y-v)}for(let e=1;e<n;e++)for(let t=1;t<n;t++){let r=f[e],a=p[t],o=(1-r)*u[0][t].x+r*u[n][t].x+(1-a)*u[e][0].x+a*u[e][n].x-(1-r)*(1-a)*u[0][0].x-r*(1-a)*u[n][0].x-(1-r)*a*u[0][n].x-r*a*u[n][n].x,s=(1-r)*u[0][t].z+r*u[n][t].z+(1-a)*u[e][0].z+a*u[e][n].z-(1-r)*(1-a)*u[0][0].z-r*(1-a)*u[n][0].z-(1-r)*a*u[0][n].z-r*a*u[n][n].z;u[e][t]={x:o,z:s}}let b=n*n,x=b*l,S=this.numCells+x,C=e=>{let t=new Float32Array(S);return t.set(e),t},w=e=>{let t=new Int32Array(S*6);return t.fill(-1),t.set(e),t},T=e=>{let t=new Int8Array(S);return t.set(e),t};this.vol=C(this.vol),this.areaE=C(this.areaE),this.areaW=C(this.areaW),this.areaN=C(this.areaN),this.areaS=C(this.areaS),this.areaT=C(this.areaT),this.areaB=C(this.areaB),this.distE=C(this.distE),this.distW=C(this.distW),this.distN=C(this.distN),this.distS=C(this.distS),this.distT=C(this.distT),this.distB=C(this.distB),this.dCellR=C(this.dCellR),this.dCellTheta=C(this.dCellTheta),this.dCellY=C(this.dCellY),this.cx=C(this.cx),this.cy=C(this.cy),this.cz=C(this.cz),this.flag=T(this.flag),this.mrf=T(this.mrf),this.neighbors=w(this.neighbors);for(let e=0;e<l;e++)for(let t=0;t<this.ntheta;t++){for(let n=0;n<=a;n++){let r=n+this.nr*(t+this.ntheta*e);this.flag[r]=8}let n=a+1+this.nr*(t+this.ntheta*e);if(this.neighbors[n*6+1]=-1,e===l-1)for(let e=0;e<=a;e++){let n=e+this.nr*(t+this.ntheta*l);this.neighbors[n*6+5]=-1}}let E=this.numCells,D=new Int32Array(l);for(let r=0;r<l;r++){D[r]=E;let o=this.getBottomY(0,t)+t.liquidHeight,s=[];for(let e=0;e<n;e++){s[e]=[];for(let t=0;t<n;t++){let n=u[t][e],r=u[t+1][e],a=u[t+1][e+1],o=u[t][e+1];s[e][t]={x:(n.x+r.x+a.x+o.x)/4,z:(n.z+r.z+a.z+o.z)/4}}}for(let a=0;a<n;a++)for(let c=0;c<n;c++){let d=E++,f=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,p=e.getImpellerCenterY(t)-t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(p=t.tankHeight*.1);let m=s[a][c].x,h=s[a][c].z,g=Math.hypot(m,h),_=this.getBottomY(g,t),v=o-_,y=_+(this.etaNode[r]+this.etaNode[r+1])*.5*v,x=g<=f&&y>=p;this.flag[d]=x?5:0,this.mrf[d]=0;let S=u[c][a],C=u[c+1][a],w=u[c+1][a+1],T=u[c][a+1],D=.5*Math.abs((C.x-S.x)*(w.z-S.z)-(C.z-S.z)*(w.x-S.x))+.5*Math.abs((w.x-S.x)*(T.z-S.z)-(w.z-S.z)*(T.x-S.x)),O=_+this.etaNode[r]*v,A=_+this.etaNode[r+1]*v-O;this.vol[d]=D*A,this.cx[d]=m,this.cy[d]=y,this.cz[d]=h;let M=Math.hypot(C.x-w.x,C.z-w.z),N=Math.hypot(S.x-T.x,S.z-T.z),P=Math.hypot(T.x-w.x,T.z-w.z),ee=Math.hypot(S.x-C.x,S.z-C.z);this.areaE[d]=M*A,this.areaW[d]=N*A,this.areaN[d]=P*A,this.areaS[d]=ee*A,this.areaT[d]=D,this.areaB[d]=D;let F=r<l-1?(this.etaNode[r+2]-this.etaNode[r+1])*v:A,te=r>0?(this.etaNode[r]-this.etaNode[r-1])*v:A;this.distT[d]=A*.5+F*.5,this.distB[d]=r>0?A*.5+te*.5:A*.5;let I=c<n-1?Math.hypot(s[a][c+1].x-m,s[a][c+1].z-h):Math.hypot((C.x+w.x)/2-m,(C.z+w.z)/2-h),L=c>0?Math.hypot(s[a][c-1].x-m,s[a][c-1].z-h):Math.hypot((S.x+T.x)/2-m,(S.z+T.z)/2-h),ne=a<n-1?Math.hypot(s[a+1][c].x-m,s[a+1][c].z-h):Math.hypot((w.x+T.x)/2-m,(w.z+T.z)/2-h),re=a>0?Math.hypot(s[a-1][c].x-m,s[a-1][c].z-h):Math.hypot((S.x+C.x)/2-m,(S.z+C.z)/2-h);this.distE[d]=Math.max(I,1e-12),this.distW[d]=Math.max(L,1e-12),this.distN[d]=Math.max(ne,1e-12),this.distS[d]=Math.max(re,1e-12),this.dCellR[d]=Math.sqrt(D),this.dCellTheta[d]=Math.sqrt(D),this.dCellY[d]=Math.max(A,1e-9);let ie=c<n-1?d+1:-1,ae=c>0?d-1:-1,R=a<n-1?d+n:-1,oe=a>0?d-n:-1,se=r<l-1?d+b:-1,ce=r>0?d-b:-1;this.neighbors[d*6+0]=ie,this.neighbors[d*6+1]=ae,this.neighbors[d*6+2]=R,this.neighbors[d*6+3]=oe,this.neighbors[d*6+4]=se,this.neighbors[d*6+5]=ce}let f=a+1,p=(this.rNode[f]+this.rNode[f+1])*.5,m=this.getBottomY(p,t),h=o-m,g=m+this.etaNode[r+1]*h-(m+this.etaNode[r]*h);for(let e=0;e<n;e++)for(let t=0;t<n;t++){let a=this.numCells+b*r+e*n+t,o=s[e][t].x,l=s[e][t].z,u=e=>{let t=(this.rNode[f]+this.rNode[f+1])*.5,n=(this.thetaNode[e]+this.thetaNode[(e+1)%this.ntheta])*.5;return{x:t*Math.cos(n),z:t*Math.sin(n)}},p=e=>{let t=this.thetaNode[(e+1)%this.ntheta]-this.thetaNode[e];return t<0&&(t+=2*Math.PI),c*t*g},m=(e,t)=>{let n=f+this.nr*(t+this.ntheta*r);if(this.flag[n]===8)return;this.neighbors[a*6+e]=n,this.neighbors[n*6+1]=a;let s=u(t),c=Math.max(Math.hypot(s.x-o,s.z-l),1e-12);e===0?this.distE[a]=c:e===1?this.distW[a]=c:e===2?this.distN[a]=c:e===3&&(this.distS[a]=c),this.distW[n]=c;let d=p(t);e===0?this.areaE[a]=d:e===1?this.areaW[a]=d:e===2?this.areaN[a]=d:e===3&&(this.areaS[a]=d),this.areaW[n]=d};t===n-1&&m(0,(d+e)%this.ntheta),t===0&&m(1,(d+2*n+(n-1-e))%this.ntheta),e===n-1&&m(2,(d+n+(n-1-t))%this.ntheta),e===0&&m(3,(d+3*n+t)%this.ntheta)}}if(l<this.ny){let e=D[l-1],r=this.getBottomY(0,t)+t.liquidHeight,a=new Map;for(let o=0;o<n;o++)for(let s=0;s<n;s++){let c=e+o*n+s,u=this.cx[c],d=this.cz[c],f=Math.hypot(u,d),p=Math.atan2(d,u);p<0&&(p+=2*Math.PI);let m=0;for(let e=0;e<this.nr;e++){if(f>=this.rNode[e]&&f<this.rNode[e+1]){m=e;break}e===this.nr-1&&(m=this.nr-1)}let h=0;for(let e=0;e<this.ntheta;e++){let t=this.thetaNode[e],n=this.thetaNode[e+1];if(p>=t&&p<n){h=e;break}}let g=m+this.nr*(h+this.ntheta*l);if(this.flag[g]===8)continue;let _=r-this.getBottomY(f,t),v=(this.etaNode[l]-this.etaNode[l-1])*_,y=l<this.ny-1?(this.etaNode[l+1]-this.etaNode[l])*_:v,b=Math.max(v*.5+y*.5,1e-12);this.neighbors[c*6+4]=g,this.distT[c]=b;let x=this.areaT[c],S=a.get(g);S?(S.area+=x,S.distAreaSum+=b*x):(a.set(g,{area:x,distAreaSum:b*x}),this.neighbors[g*6+5]=c)}for(let[e,t]of a)this.areaB[e]=t.area,this.distB[e]=Math.max(t.distAreaSum/t.area,1e-12)}this.numCells=S}},Xd,Zd,X,Qd,Z,$d,ef,tf,nf,rf=[],af=null,of=null,sf=[],cf=null,lf=null,uf=null,df=null,ff=null,pf=null,mf=null,hf=[],Q=null,gf=null;function _f(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2,r=0;return t===`FullHemisphere`?r=n:t===`Dish`?r=n*.25:t===`HalfEllipse`?r=n*.5:t===`Cone`&&(r=e.tankHeight*.2),(e.tankHeight-r)/2}function vf(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2,r=0;return t===`FullHemisphere`?r=n:t===`Dish`?r=n*.25:t===`HalfEllipse`?r=n*.5:t===`Cone`&&(r=e.tankHeight*.2),-r}function yf(e,t){let n=e.ntheta,r=2*Math.PI/n,a=t.crossSectionAngle===void 0?.125:t.crossSectionAngle,o=Math.round(a*2*Math.PI/r)%n;o<0&&(o+=n);let s=e.thetaNode[o]+(e.thetaNode[o+1]-e.thetaNode[o])/2;return{sliceTh1:o,baseTh:s,ntheta:n,dTheta:r}}function bf(e,t){let n=e.rNode[e.nr];return(t.crossSectionOffset||0)*n}function xf(e,t,n,r){let a=n;if(e<Math.abs(a))return null;let o=r*Math.sqrt(Math.max(e*e-a*a,0)),s=o*Math.cos(t)+a*Math.sin(t),c=-o*Math.sin(t)+a*Math.cos(t),l=Math.atan2(-c,s);return l<0&&(l+=2*Math.PI),{x:s,z:c,th:l}}function Sf(e,t,n,r,a,o){let s=xf(e,t,n,r);if(!s)return-1;let c=Math.floor(s.th/o)%a;return c<0&&(c+=a),c}function Cf(e,t){Q=t,Zd=new Rn,Zd.background=new In(1710618);let n=window.innerWidth/window.innerHeight,r=_f(t);if(t.usePerspective!==!1)X=new Zo(45,n,.01,100),X.position.set(0,r,3);else{let e=t.tankDiameter*2.5;X=new Qo(e*n/-2,e*n/2,e/2,e/-2,.01,100),X.position.set(0,r,3)}Xd=new Uu({antialias:!0}),Xd.setSize(window.innerWidth,window.innerHeight),Xd.setPixelRatio(window.devicePixelRatio),e.appendChild(Xd.domElement),Qd=new ed(X,Xd.domElement),Qd.enableDamping=!0,Qd.target.set(0,r,0),Qd.update(),Z=new kn,Zd.add(Z),$d=new Sd(X,Xd.domElement),$d.setSize(.8),Zd.add($d.getHelper()),$d.addEventListener(`dragging-changed`,function(e){Qd.enabled=!e.value});let a=new K(1,1,1);$d.addEventListener(`change`,function(){if(Q&&Q.gizmoMode===`Scale`){let e=Math.abs(Z.scale.x-a.x),t=Math.abs(Z.scale.y-a.y),n=Math.abs(Z.scale.z-a.z),r=Math.max(e,t,n),o=Z.scale.x;r===t&&(o=Z.scale.y),r===n&&(o=Z.scale.z),Z.scale.set(o,o,o),a.copy(Z.scale)}Xd.render(Zd,X)}),Xd.domElement.addEventListener(`pointerdown`,e=>{Q&&Q.gizmoMode!==`None`&&$d.axis===null&&(Q.gizmoMode=`None`,kf(`None`),window.dispatchEvent(new Event(`gizmo-deselected`)))});let o=new ts(16777215,.6);Zd.add(o);let s=new es(16777215,.8);s.position.set(5,10,7),Zd.add(s);let c=new Cs(1);return Z.add(c),wf(e,t),jf(t),window.addEventListener(`resize`,If),{scene:Zd,camera:X,renderer:Xd,controls:Qd}}function wf(e,t){let n=document.getElementById(`gizmo-overlay`);n&&n.remove();let r=document.createElement(`div`);r.id=`gizmo-overlay`,r.style.cssText=[`position:absolute`,`bottom:24px`,`left:50%`,`transform:translateX(-50%)`,`display:flex`,`gap:8px`,`z-index:200`,`pointer-events:auto`,`user-select:none`].join(`;`)+`;`;let a=[{mode:`None`,label:`✕`,title:`操作なし`,color:`#888`},{mode:`Translate`,label:`✥`,title:`移動 (オブジェクト)`,color:`#4a9eff`},{mode:`Rotate`,label:`↻`,title:`回転`,color:`#4ecb71`},{mode:`Scale`,label:`⊞`,title:`等方拡大縮小`,color:`#f5a623`}],o={};a.forEach(function({mode:e,label:n,title:a,color:s}){let c=document.createElement(`button`);c.title=a,c.dataset.mode=e,c.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid `+s,`background:rgba(20,20,20,0.75)`,`color:`+s,`font-size:20px`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`].join(`;`)+`;`,c.textContent=n,c.addEventListener(`mouseenter`,function(){t.gizmoMode!==e&&(c.style.background=`rgba(`+Ef(s)+`,0.25)`)}),c.addEventListener(`mouseleave`,function(){t.gizmoMode!==e&&(c.style.background=`rgba(20,20,20,0.75)`)}),c.addEventListener(`click`,function(){t.gizmoMode=e,kf(e),Tf(e),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}),o[e]=c,r.appendChild(c)});let s=document.createElement(`div`);s.id=`gizmo-overlay-label`,s.style.cssText=[`position:absolute`,`bottom:-20px`,`left:50%`,`transform:translateX(-50%)`,`color:rgba(255,255,255,0.5)`,`font-size:11px`,`white-space:nowrap`,`pointer-events:none`].join(`;`)+`;`,s.textContent=`ビュー操作`,r.appendChild(s),e.style.position=`relative`,e.appendChild(r),window._gizmoButtons=o,window._gizmoLabel=s,Tf(t.gizmoMode||`None`),window.addEventListener(`gizmo-deselected`,function(){Tf(`None`)})}function Tf(e){if(!window._gizmoButtons)return;let t={None:`ビュー操作`,Translate:`オブジェクト移動`,Rotate:`オブジェクト回転`,Scale:`等方拡大縮小`},n={None:`#888`,Translate:`#4a9eff`,Rotate:`#4ecb71`,Scale:`#f5a623`};Object.entries(window._gizmoButtons).forEach(function([t,r]){let a=n[t];t===e?(r.style.background=`rgba(`+Ef(a)+`,0.45)`,r.style.transform=`scale(1.15)`,r.style.boxShadow=`0 0 10px `+a+`88`):(r.style.background=`rgba(20,20,20,0.75)`,r.style.transform=`scale(1)`,r.style.boxShadow=`none`)}),window._gizmoLabel&&(window._gizmoLabel.textContent=t[e]||``)}function Ef(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return t+`,`+n+`,`+r}var Df=null,Of=null;new K;function kf(n){!$d||!Z||!Qd||(Qd.mouseButtons.LEFT=e.ROTATE,Qd.touches.ONE=t.ROTATE,Of&&=($d.removeEventListener(`change`,Of),null),Df&&=(Zd.remove(Df),null),n===`None`?$d.detach():n===`Translate`?($d.setMode(`translate`),$d.showX=!0,$d.showY=!0,$d.showZ=!0,$d.attach(Z)):n===`Rotate`?$d.detach():n===`Scale`&&($d.setMode(`scale`),$d.showX=!0,$d.showY=!0,$d.showZ=!0,$d.attach(Z)))}function Af(){if(Z&&(Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1)),X&&Qd&&Q){let e=_f(Q);X.position.set(0,e,3),Qd.target.set(0,e,0),Qd.update()}}function jf(e){if(Zd&&Zd.background.set(e.backgroundColor||`#1a1a1a`),X&&X.isOrthographicCamera){let t=window.innerWidth/window.innerHeight,n=e.tankDiameter*2.5;X.left=n*t/-2,X.right=n*t/2,X.top=n/2,X.bottom=n/-2,X.updateProjectionMatrix()}if(tf&&Z.remove(tf),nf&&Z.remove(nf),rf.forEach(e=>Z.remove(e)),rf=[],ef&&Z.remove(ef),af&&Z.remove(af),of&&Z.remove(of),cf&&=(Z.remove(cf),null),uf&&=(Z.remove(uf),null),df&&=(Z.remove(df),null),e.showTank&&(tf=Kd(e),tf.material?(tf.material.opacity=e.tankOpacity===void 0?.6:e.tankOpacity,tf.material.transparent=!0,tf.material.depthWrite=!1):tf.children&&tf.children.forEach(t=>{t.material&&(t.material.opacity=e.tankOpacity===void 0?.6:e.tankOpacity,t.material.transparent=!0,t.material.depthWrite=!1)}),Z.add(tf)),e.showImpeller&&(nf=Jd(e),Z.add(nf)),e.showBaffle){let t=new Fi(e.baffleWidth,e.tankHeight,e.baffleThickness),n=new yo({color:8947848,transparent:!0,opacity:.8,side:2});for(let r=0;r<e.baffleCount;r++){let a=new J(t,n),o=r/e.baffleCount*Math.PI*2,s=e.baffleGap===void 0?e.tankDiameter/75:e.baffleGap,c=e.tankDiameter/2-e.baffleWidth/2-s;a.position.x=Math.cos(o)*c,a.position.z=Math.sin(o)*c,a.position.y=e.tankHeight/2,a.rotation.y=-o,Z.add(a),rf.push(a)}}e.coilEnabled&&e.showCoil!==!1&&(ef=qd(e),Z.add(ef)),sf=[];let t=new Yd(e);t.voxelize(e);let n=yf(t,e),r=bf(t,e);for(let a=0;a<t.numCells;a++){let o=t.getCellCenterByIdx(a,e);if(e.crossSectionView)if(e.crossSectionType===`Vertical`)if(a>=t.nr*t.ntheta*t.ny){let e=o.x*Math.sin(n.baseTh)-o.z*Math.cos(n.baseTh);if(Math.abs(e-r)>(t.dCellR[a]||(t.rNode[1]-t.rNode[0])/2))continue}else{a%t.nr;let e=Math.floor(a/t.nr)%t.ntheta,s=o.r,c=Sf(s,n.baseTh,r,-1,n.ntheta,n.dTheta),l=Sf(s,n.baseTh,r,1,n.ntheta,n.dTheta);if(e!==c&&e!==l)continue}else{let n=a>=t.nr*t.ntheta*t.ny,r=-1;if(n){let n=t.getBottomY(o.r,e),a=n+e.liquidHeight,s=(o.y-n)/(a-n);for(let e=0;e<t.ny;e++)if(s>=t.etaNode[e]&&s<=t.etaNode[e+1]){r=e;break}}else r=Math.floor(a/(t.nr*t.ntheta));let s=Math.floor(e.crossSectionHeight*(t.ny-1));if(r!==s)continue}t.flag[a]===0&&sf.push(a)}if(e.showFluidMesh||e.showPressureMesh||e.showParticleConc||e.showViscosityRegion||e.showVelocityMesh)if(e.displayStyle===`Contour`&&e.crossSectionView){let a=[],o=[];for(let s=0;s<sf.length;s++){let c=sf[s];if(c>=t.nr*t.ntheta*t.ny){if(!e.crossSectionView)continue;let r=t.getCellCenterByIdx(c,e),s=t.dCellR[c]/2||(t.rNode[1]-t.rNode[0])/4,l=c-t.nr*t.ntheta*t.ny,u=t.ntheta/4,d=Math.floor(l/(u*u)),f=Math.hypot(r.x,r.z),p=t.getBottomY(f,e),m=t.getBottomY(0,e)+e.liquidHeight,h=p+t.etaNode[d]*(m-p),g=p+t.etaNode[d+1]*(m-p),_=a.length/3;if(e.crossSectionType===`Vertical`){let e=Math.cos(n.baseTh),t=Math.sin(n.baseTh),o=r.x-e*s,c=-(r.z-t*s),l=r.x+e*s,u=-(r.z+t*s),d=h,f=g;a.push(o,d,c),a.push(l,d,u),a.push(l,f,u),a.push(o,f,c)}else{let e=s,t=r.x-s,n=-(r.z-e),o=r.x+s,c=-(r.z+e),l=r.y;a.push(t,l,n),a.push(o,l,n),a.push(o,l,c),a.push(t,l,c)}o.push(_,_+1,_+2),o.push(_,_+2,_+3);continue}let l=c%t.nr,u=Math.floor(c/t.nr)%t.ntheta,d=Math.floor(c/(t.nr*t.ntheta)),f=t.rNode[l],p=t.rNode[l+1],m=t.getBottomY(f,e),h=t.getBottomY(p,e),g=a.length/3,_=t.getBottomY(0,e)+e.liquidHeight;if(!e.crossSectionView||e.crossSectionType===`Vertical`){let o=m+t.etaNode[d]*(_-m),s=m+t.etaNode[d+1]*(_-m),c=h+t.etaNode[d]*(_-h),l=h+t.etaNode[d+1]*(_-h),g,v,y,b;if(e.crossSectionView&&e.crossSectionType===`Vertical`){let e=u===Sf((f+p)/2,n.baseTh,r,-1,n.ntheta,n.dTheta)?-1:1,t=Math.abs(r),a=xf(Math.max(f,t),n.baseTh,r,e),o=xf(Math.max(p,t),n.baseTh,r,e);g=a.x,v=a.z,y=o.x,b=o.z}else{let e=t.thetaNode[u]+(t.thetaNode[u+1]-t.thetaNode[u])/2;g=f*Math.cos(e),v=-f*Math.sin(e),y=p*Math.cos(e),b=-p*Math.sin(e)}a.push(g,o,v),a.push(y,c,b),a.push(y,l,b),a.push(g,s,v)}else{let e=(t.etaNode[d]+t.etaNode[d+1])/2,n=m+e*(_-m),r=h+e*(_-h),o=t.thetaNode[u],s=t.thetaNode[u+1],c=f*Math.cos(o),l=-f*Math.sin(o),g=p*Math.cos(o),v=-p*Math.sin(o),y=p*Math.cos(s),b=-p*Math.sin(s),x=f*Math.cos(s),S=-f*Math.sin(s);a.push(c,n,l),a.push(g,r,v),a.push(y,r,b),a.push(x,n,S)}o.push(g,g+1,g+2),o.push(g,g+2,g+3)}let s=new jr;s.setAttribute(`position`,new q(a,3)),s.setIndex(o);let c=new Float32Array(a.length);s.setAttribute(`color`,new _r(c,3)),af=new J(s,new Hr({vertexColors:!0,side:2,transparent:!0,opacity:.9})),Z.add(af)}else{let a=[],o=[];for(let o=0;o<sf.length;o++){let s=sf[o],c=s>=t.nr*t.ntheta*t.ny;if(t.flag[s]===0){let o=t.getCellCenterByIdx(s,e);if(e.crossSectionView&&e.crossSectionType===`Vertical`&&!c){s%t.nr;let e=Math.floor(s/t.nr)%t.ntheta,a=Math.sqrt(o.x*o.x+o.z*o.z),c=e===Sf(a,n.baseTh,r,-1,n.ntheta,n.dTheta)?-1:1,l=xf(Math.max(a,Math.abs(r)),n.baseTh,r,c);o.x=l.x,o.z=l.z}else o.z=-o.z;a.push(o.x,o.y,o.z)}}for(let n=0;n<t.numCells;n++)if(t.flag[n]===3){let r=t.getCellCenterByIdx(n,e);o.push(r.x,r.y,-r.z)}let s=e.tankDiameter*.01,c=new jr;if(c.setAttribute(`position`,new q(a,3)),af=new ki(c,new wi({color:35071,size:s,transparent:!0,opacity:.6})),Z.add(af),o.length>0){let e=new jr;e.setAttribute(`position`,new q(o,3));let t=new ki(e,new wi({color:16755200,size:s*1.5,transparent:!0,opacity:1}));af.add(t)}}if(e.showMRFZone){let n=[];for(let r=0;r<t.numCells;r++)if(t.mrf[r]===1){let a=t.getCellCenterByIdx(r,e);n.push(a.x,a.y,-a.z)}let r=new jr;r.setAttribute(`position`,new q(n,3)),of=new ki(r,new wi({color:16729088,size:e.tankDiameter*.012,transparent:!0,opacity:.8})),Z.add(of)}gf&&(Mf(gf,e),Xd&&Zd&&X&&Xd.render(Zd,X))}function Mf(e,t){if(gf=e,!e)return;let n=e.mesh?yf(e.mesh,t):null,r=e.mesh?bf(e.mesh,t):0;if(sf&&sf.length>0&&e.T&&e.mu_app&&e.p&&e.ur&&e.utheta&&e.uy){let n=0,r=1/0,a=-1/0,o=0,s=1/0,c=-1/0,l=0,u=1/0,d=-1/0,f=0,p=1/0,m=-1/0;for(let t=0;t<sf.length;t++){let h=sf[t],g=e.T[h];g<r&&(r=g),g>a&&(a=g),n+=g;let _=e.mu_app[h];_<s&&(s=_),_>c&&(c=_),o+=_;let v=e.p[h];v<u&&(u=v),v>d&&(d=v),l+=v;let y=e.ur[h],b=e.utheta[h],x=e.uy[h],S=Math.sqrt(y*y+b*b+x*x);S<p&&(p=S),S>m&&(m=S),f+=S}let h=sf.length;t.currentAvgTemp=parseFloat((n/h).toFixed(2)),t.currentMinTemp=parseFloat(r.toFixed(2)),t.currentMaxTemp=parseFloat(a.toFixed(2)),t.currentAvgViscosity=o/h,t.currentMinViscosity=s,t.currentMaxViscosity=c,t.currentAvgPressure=parseFloat((l/h).toFixed(2)),t.currentMinPressure=parseFloat(u.toFixed(2)),t.currentMaxPressure=parseFloat(d.toFixed(2)),t.currentMinPress=t.currentMinPressure,t.currentMaxPress=t.currentMaxPressure,t.currentAvgVelocity=parseFloat((f/h).toFixed(3)),t.currentMinVelocity=parseFloat(p.toFixed(3)),t.currentMaxVelocity=parseFloat(m.toFixed(3)),t.currentMaxVel=t.currentMaxVelocity}if((t.showFluidMesh||t.showPressureMesh||t.showParticleConc||t.showViscosityRegion||t.showVelocityMesh)&&af){let n=t.showPressureMesh,r=t.showParticleConc,a=t.showViscosityRegion&&!n&&!r,o=t.showVelocityMesh&&!n&&!r&&!a;if(r){e.particleConc||=new Float32Array(e.mesh.numCells),e.particleConc.fill(0);let n=new Float32Array(e.mesh.numCells);if(t.dpmTrailMode===`Trail`&&t.crossSectionView&&hf&&hf.length>0){hf.forEach(r=>{for(let a=0;a<r.positions.length;a+=3){let o=r.positions[a],s=r.positions[a+1],c=r.positions[a+2],l=Math.sqrt(o*o+c*c),u=Math.atan2(-c,o);u<0&&(u+=Math.PI*2);let d=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(l/(t.tankDiameter/2)*e.mesh.nr))),f=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(u/(Math.PI*2)*e.mesh.ntheta))),p=e.mesh.getBottomY(l,t),m=e.mesh.getBottomY(0,t)+t.liquidHeight,h=(s-p)/(m-p||1),g=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(h*e.mesh.ny))),_=d+f*e.mesh.nr+g*e.mesh.nr*e.mesh.ntheta;_>=0&&_<e.mesh.numCells&&n[_]++}});for(let t=0;t<e.mesh.numCells;t++)if(e.mesh.flag[t]===0){let r=e.vol[t]*1e3;e.particleConc[t]=n[t]/(r||1e-6)}}else if(window.dpmParticles&&window.dpmParticles.length>0){window.dpmParticles.forEach(r=>{let a=Math.sqrt(r.x*r.x+r.z*r.z),o=Math.atan2(-r.z,r.x);o<0&&(o+=Math.PI*2);let s=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(a/(t.tankDiameter/2)*e.mesh.nr))),c=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(o/(Math.PI*2)*e.mesh.ntheta))),l=e.mesh.getBottomY(a,t),u=e.mesh.getBottomY(0,t)+t.liquidHeight,d=(r.y-l)/(u-l||1),f=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(d*e.mesh.ny))),p=s+c*e.mesh.nr+f*e.mesh.nr*e.mesh.ntheta;p>=0&&p<e.mesh.numCells&&n[p]++});for(let t=0;t<e.mesh.numCells;t++)if(e.mesh.flag[t]===0){let r=e.vol[t]*1e3;e.particleConc[t]=n[t]/(r||1e-6)}}}let s=[],c=n?-100:r?0:a?t.viscosity||.001:o?0:293.15,l=n?100:r?t.particleConcMaxLimit||10:a?Math.max((t.viscosity||.001)*10,1):o?1:t.jacketTemp||350,u=1/0,d=-1/0;for(let s=0;s<sf.length;s++){let c=sf[s],l;if(n)l=e.p[c];else if(r)l=e.particleConc[c];else if(a)l=e.mu_app[c];else if(o){let n=e.ur[c]||0,r=e.utheta[c]||0,a=e.uy[c]||0;switch(t.velocityComponent){case`ur`:l=n;break;case`utheta`:l=r;break;case`uy`:l=a;break;default:l=Math.sqrt(n*n+r*r+a*a);break}}else l=e.T[c];l<u&&(u=l),l>d&&(d=l)}t.colorScaleMode===`Relative`&&(c=u,l=d,l-c<1e-5&&(l=c+1e-5)),r?(t.currentMinConc=u===1/0?0:parseFloat(u.toFixed(1)),t.currentMaxConc=d===-1/0?0:parseFloat(d.toFixed(1))):a?(t.currentMinViscosity=u===1/0?t.viscosity||.001:u,t.currentMaxViscosity=d===-1/0?t.viscosity||.001:d):o?(t.currentMinVelocity=u===1/0?0:parseFloat(u.toFixed(3)),t.currentMaxVelocity=d===-1/0?0:parseFloat(d.toFixed(3)),t.currentMaxVel=t.currentMaxVelocity):n?(t.currentMinPress=u===1/0?0:parseFloat(u.toFixed(2)),t.currentMaxPress=d===-1/0?0:parseFloat(d.toFixed(2))):(t.currentMinTemp=u===1/0?293.15:parseFloat(u.toFixed(2)),t.currentMaxTemp=d===-1/0?293.15:parseFloat(d.toFixed(2)));for(let u=0;u<sf.length;u++){let d=sf[u],f=s=>{if(n)return e.p[s];if(r)return e.particleConc[s];if(a)return e.mu_app[s];if(o){let n=e.ur[s]||0,r=e.utheta[s]||0,a=e.uy[s]||0;switch(t.velocityComponent){case`ur`:return n;case`utheta`:return r;case`uy`:return a;default:return Math.sqrt(n*n+r*r+a*a)}}return e.T[s]},p=(n,r,a)=>{let o=0,s=0;if(t.crossSectionType===`Vertical`)for(let t=-1;t<=0;t++)for(let c=-1;c<=0;c++){let l=n+t,u=a+c;if(l>=0&&l<e.mesh.nr&&u>=0&&u<e.mesh.ny){let t=l+r*e.mesh.nr+u*e.mesh.nr*e.mesh.ntheta;e.mesh.flag[t]===0&&(o+=f(t),s++)}}else for(let t=-1;t<=0;t++)for(let c=-1;c<=0;c++){let l=n+t,u=r+c;if(l>=0&&l<e.mesh.nr){u<0&&(u=e.mesh.ntheta-1),u>=e.mesh.ntheta&&(u=0);let t=l+u*e.mesh.nr+a*e.mesh.nr*e.mesh.ntheta;e.mesh.flag[t]===0&&(o+=f(t),s++)}}return s===0?f(d):o/s},m=e=>{if(r&&e<(t.particleConcThreshold||0))return[.1,.1,.1];let n;if(a&&t.viscosityLogScale){let t=Math.log10(Math.max(e,1e-8)),r=Math.log10(Math.max(c,1e-8)),a=Math.log10(Math.max(l,1e-8));n=(t-r)/(a-r||1)}else n=(e-c)/(l-c||1);n=Math.max(0,Math.min(1,n));let o=0,s=0,u=0;return n<.25?(o=0,s=4*n,u=1):n<.5?(o=0,s=1,u=1-4*(n-.25)):n<.75?(o=4*(n-.5),s=1,u=0):(o=1,s=1-4*(n-.75),u=0),[o,s,u]};if(t.displayStyle===`Contour`&&t.crossSectionView)if(t.interpolateContour){let n=d%e.mesh.nr,r=Math.floor(d/e.mesh.nr)%e.mesh.ntheta,a=Math.floor(d/(e.mesh.nr*e.mesh.ntheta)),o,c,l,u;t.crossSectionType===`Vertical`?(o=p(n,r,a),c=p(n+1,r,a),l=p(n+1,r,a+1),u=p(n,r,a+1)):(o=p(n,r,a),c=p(n+1,r,a),l=p(n+1,r+1,a),u=p(n,r+1,a)),s.push(...m(o),...m(c),...m(l),...m(u))}else{let[e,t,n]=m(f(d));for(let r=0;r<4;r++)s.push(e,t,n)}else{let[e,t,n]=m(f(d));s.push(e,t,n)}}af.geometry.setAttribute(`color`,new q(s,3)),af.material.vertexColors=!0,af.material.color.setHex(16777215),af.material.needsUpdate=!0}if(t.showVelocityVector){let a=[],o=[],s=1e-6;for(let t=0;t<sf.length;t++){let n=sf[t],r=e.ur[n],a=e.utheta[n],o=e.uy[n],c=Math.sqrt(r*r+a*a+o*o);c>s&&(s=c)}t.currentMaxVel=parseFloat(s.toFixed(3));let c=t.vectorScale===void 0?1:t.vectorScale,l=s>1e-6?s:1e-6,u=t.tankDiameter*.1/l*c,d=t.crossSectionView?1:12;for(let s=0;s<sf.length;s+=d){let c=sf[s],d=e.ur[c],f=e.utheta[c],p=e.uy[c],m=Math.sqrt(d*d+f*f+p*p);c%e.mesh.nr;let h=c>=e.mesh.nr*e.mesh.ntheta*e.mesh.ny,g=h?0:Math.floor(c/e.mesh.nr)%e.mesh.ntheta;h||Math.floor(c/(e.mesh.nr*e.mesh.ntheta));let _=e.mesh.getCellCenterByIdx(c,t),v=_.theta,y=t.crossSectionView&&t.crossSectionType===`Vertical`,b,x;if(y&&n){let e=n.baseTh,t=Math.sqrt(_.x*_.x+_.z*_.z),a;a=h?_.x*Math.cos(e)+_.z*Math.sin(e)<0?-1:1:g===Sf(t,e,r,-1,n.ntheta,n.dTheta)?-1:1;let o=xf(Math.max(t,Math.abs(r)),e,r,a);_.x=o.x,_.z=o.z;let s=d*Math.cos(v)-f*Math.sin(v),c=-d*Math.sin(v)-f*Math.cos(v),l=s*Math.cos(e)-c*Math.sin(e);b=l*Math.cos(e),x=-l*Math.sin(e)}else _.z=-_.z,b=d*Math.cos(v)-f*Math.sin(v),x=-d*Math.sin(v)-f*Math.cos(v);let S=p;a.push(_.x,_.y,_.z),a.push(_.x+b*u,_.y+S*u,_.z+x*u);let C=m/l;C=Math.max(0,Math.min(1,C));let w=0,T=0,E=0;C<.25?(w=0,T=4*C,E=1):C<.5?(w=0,T=1,E=1-4*(C-.25)):C<.75?(w=4*(C-.5),T=1,E=0):(w=1,T=1-4*(C-.75),E=0),o.push(w,T,E),o.push(w,T,E)}if(cf&&=(Z.remove(cf),cf.geometry.dispose(),cf.material.dispose(),null),a.length>0){let e=new jr;e.setAttribute(`position`,new q(a,3)),e.setAttribute(`color`,new q(o,3)),cf=new Ci(e,new di({vertexColors:!0})),Z.add(cf)}}else cf&&=(Z.remove(cf),cf.geometry.dispose(),cf.material.dispose(),null);if(t.showStreamlines){let n=t.numStreamlines||100,r=[],a=(t.impellerDiameter||.4)/2,o=(t.impellerClearance||.3)+vf(t),s=t.impellerHeight||.1,c=t.streamlineOrigin||`impeller`,l=(t.tankDiameter||1)/2,u=vf(t),d=t.tankHeight||1,f=t.liquidHeight||d,p=[];for(let e=0;e<n;e++){let e,t,n;c===`impeller`?(e=a*(.8+.4*Math.random()),t=Math.random()*2*Math.PI,n=o+(Math.random()-.5)*s):(e=Math.sqrt(Math.random())*l,t=Math.random()*2*Math.PI,n=u+Math.random()*f),p.push({r:e,theta:t,y:n})}for(let t=0;t<n;t++){let n=p[t].r,a=p[t].theta,o=p[t].y,s=.01;for(let t=0;t<1e3;t++){let t=n*Math.cos(a),c=-n*Math.sin(a);r.push(t,o,c);let f=e.interpolateVelocityAt(n,a,o),p=Math.sqrt(f.ur*f.ur+f.utheta*f.utheta+f.uy*f.uy);if(p<1e-6){r.push(t,o,c);break}if(s=l*.01/p,n+=f.ur*s,a+=f.utheta/Math.max(n,1e-6)*s,o+=f.uy*s,n>l||n<0||o<u||o>d){let e=n*Math.cos(a),t=-n*Math.sin(a);r.push(e,o,t);break}let m=n*Math.cos(a),h=-n*Math.sin(a);r.push(m,o,h)}}if(pf&&=(Z.remove(pf),pf.geometry.dispose(),pf.material.dispose(),null),r.length>0){let e=new jr;e.setAttribute(`position`,new q(r,3)),pf=new Ci(e,new di({color:22015,opacity:.6,transparent:!0})),Z.add(pf)}}else pf&&=(Z.remove(pf),pf.geometry.dispose(),pf.material.dispose(),null);if(t.showHighTempRegion){let n=t.highTempLowerLimit||320,r=[],a=[],o=t.currentMinTemp,s=t.currentMaxTemp;t.colorScaleMode!==`Relative`&&(o=293.15,s=t.jacketTemp||350);for(let c=0;c<e.mesh.numCells;c++)if(e.mesh.flag[c]===0){let l=e.T[c];if(l>=n){c%e.mesh.nr,Math.floor(c/e.mesh.nr)%e.mesh.ntheta,Math.floor(c/(e.mesh.nr*e.mesh.ntheta));let n=e.mesh.getCellCenterByIdx(c,t);r.push(n.x,n.y,-n.z);let u=(l-o)/(s-o||1);u=Math.max(0,Math.min(1,u));let d=0,f=0,p=0;u<.25?(d=0,f=4*u,p=1):u<.5?(d=0,f=1,p=1-4*(u-.25)):u<.75?(d=4*(u-.5),f=1,p=0):(d=1,f=1-4*(u-.75),p=0),a.push(d,f,p)}}if(uf&&=(Z.remove(uf),uf.geometry.dispose(),uf.material.dispose(),null),r.length>0){let e=new jr;e.setAttribute(`position`,new q(r,3)),e.setAttribute(`color`,new q(a,3)),uf=new ki(e,new wi({size:t.tankDiameter*.015,vertexColors:!0,transparent:!0,opacity:.6})),Z.add(uf)}}else uf&&=(Z.remove(uf),uf.geometry.dispose(),uf.material.dispose(),null);if(t.showLowTempRegion){let n=t.lowTempUpperLimit||300,r=[],a=[],o=t.currentMinTemp,s=t.currentMaxTemp;t.colorScaleMode!==`Relative`&&(o=293.15,s=t.jacketTemp||350);for(let c=0;c<e.mesh.numCells;c++)if(e.mesh.flag[c]===0){let l=e.T[c];if(l<=n){c%e.mesh.nr,Math.floor(c/e.mesh.nr)%e.mesh.ntheta,Math.floor(c/(e.mesh.nr*e.mesh.ntheta));let n=e.mesh.getCellCenterByIdx(c,t);r.push(n.x,n.y,-n.z);let u=(l-o)/(s-o||1);u=Math.max(0,Math.min(1,u));let d=0,f=0,p=0;u<.25?(d=0,f=4*u,p=1):u<.5?(d=0,f=1,p=1-4*(u-.25)):u<.75?(d=4*(u-.5),f=1,p=0):(d=1,f=1-4*(u-.75),p=0),a.push(d,f,p)}}if(df&&=(Z.remove(df),df.geometry.dispose(),df.material.dispose(),null),r.length>0){let e=new jr;e.setAttribute(`position`,new q(r,3)),e.setAttribute(`color`,new q(a,3)),df=new ki(e,new wi({size:t.tankDiameter*.015,vertexColors:!0,transparent:!0,opacity:.6})),Z.add(df)}}else df&&=(Z.remove(df),df.geometry.dispose(),df.material.dispose(),null);if(t.showParticles){let a=t.particleCount||1e3;if(!window.dpmParticles||window.dpmParticles.length!==a){window.dpmParticles=[];let n=e.mesh.getBottomY(0,t)+t.liquidHeight,r=t.particlePlacementType||`Uniform`;if(r===`LowTemp`){let r=[],o=t.crystallizationTemp||300;for(let t=0;t<e.mesh.numCells;t++)e.mesh.flag[t]===0&&e.T[t]<=o&&r.push(t);if(r.length>0)for(let o=0;o<a;o++){let a=r[Math.floor(Math.random()*r.length)],o=a%e.mesh.nr,s=Math.floor(a/e.mesh.nr)%e.mesh.ntheta,c=Math.floor(a/(e.mesh.nr*e.mesh.ntheta)),l=e.mesh.rNode[o],u=e.mesh.rNode[o+1],d=l+Math.random()*(u-l),f=e.mesh.thetaNode[s],p=e.mesh.thetaNode[s+1],m=f+Math.random()*(p-f),h=e.mesh.getBottomY(d,t),g=e.mesh.etaNode[c],_=e.mesh.etaNode[c+1],v=h+(g+Math.random()*(_-g))*(n-h),y=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),a=Math.sqrt(Math.log(t/(e*e)+1)),o=0,s=0;for(;o===0;)o=Math.random();for(;s===0;)s=Math.random();let c=Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*s);y=Math.exp(r+a*c)}y=Math.max(.1,y)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();y=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}y=Math.max(.1,y)}window.dpmParticles.push({x:d*Math.cos(m),y:v,z:-d*Math.sin(m),vx:0,vy:0,vz:0,dp:y/1e6})}}else for(let o=0;o<a;o++){let a=Math.random()*(t.tankDiameter/2)*.9,o=Math.random()*Math.PI*2,s=e.mesh.getBottomY(a,t),c;c=r===`Floating`?s+Math.random()**.4*(n-s):r===`Sedimented`?s+Math.random()**2.5*(n-s):s+Math.random()*(n-s);let l=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),a=Math.sqrt(Math.log(t/(e*e)+1)),o=0,s=0;for(;o===0;)o=Math.random();for(;s===0;)s=Math.random();let c=Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*s);l=Math.exp(r+a*c)}l=Math.max(.1,l)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();l=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}l=Math.max(.1,l)}window.dpmParticles.push({x:a*Math.cos(o),y:c,z:-a*Math.sin(o),vx:0,vy:0,vz:0,dp:l/1e6})}}if(t.particlePlacementType===`LowTemp`&&window.dpmParticles.length<a){let n=t.crystallizationTemp||300,r=[];for(let t=0;t<e.mesh.numCells;t++)e.mesh.flag[t]===0&&e.T[t]<=n&&r.push(t);if(r.length>0){let n=e.mesh.getBottomY(0,t)+t.liquidHeight,o=Math.min(15,a-window.dpmParticles.length);for(let a=0;a<o;a++){let a=r[Math.floor(Math.random()*r.length)],o=a%e.mesh.nr,s=Math.floor(a/e.mesh.nr)%e.mesh.ntheta,c=Math.floor(a/(e.mesh.nr*e.mesh.ntheta)),l=e.mesh.rNode[o],u=e.mesh.rNode[o+1],d=l+Math.random()*(u-l),f=e.mesh.thetaNode[s],p=e.mesh.thetaNode[s+1],m=f+Math.random()*(p-f),h=e.mesh.getBottomY(d,t),g=e.mesh.etaNode[c],_=e.mesh.etaNode[c+1],v=h+(g+Math.random()*(_-g))*(n-h),y=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),a=Math.sqrt(Math.log(t/(e*e)+1)),o=0,s=0;for(;o===0;)o=Math.random();for(;s===0;)s=Math.random();let c=Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*s);y=Math.exp(r+a*c)}y=Math.max(.1,y)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();y=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}y=Math.max(.1,y)}window.dpmParticles.push({x:d*Math.cos(m),y:v,z:-d*Math.sin(m),vx:0,vy:0,vz:0,dp:y/1e6})}}}let o=.016,s=[],c=[],l=t.particleDensity||2500,u=(t.particleDiameter||100)/1e6,d=t.density||1e3;if(window.dpmParticles.forEach(n=>{let r=n.dp||(t.particleDiameter||100)/1e6,a=-9.81*(1-d/l),u=Math.sqrt(n.x*n.x+n.z*n.z),f=Math.atan2(-n.z,n.x);f<0&&(f+=Math.PI*2);let p=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(u/(t.tankDiameter/2)*e.mesh.nr))),m=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(f/(Math.PI*2)*e.mesh.ntheta))),h=e.mesh.getBottomY(u,t),g=e.mesh.getBottomY(0,t)+t.liquidHeight,_=(n.y-h)/(g-h||1),v=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(_*e.mesh.ny))),y=p+m*e.mesh.nr+v*e.mesh.nr*e.mesh.ntheta,b=0,x=0,S=0,C=t.viscosity||.001;if(e.mesh.flag[y]===0){let t=e.ur[y],n=e.utheta[y],r=e.uy[y];b=t*Math.cos(f)-n*Math.sin(f),S=-t*Math.sin(f)-n*Math.cos(f),x=r,e.mu_app&&e.mu_app[y]&&(C=e.mu_app[y])}let w=b-n.vx,T=x-n.vy,E=S-n.vz,D=Math.sqrt(w*w+T*T+E*E),O=Math.max(d*D*r/C,1e-10),A;A=O<1e3?1+.15*O**.687:.44*O/24;let M=l*r*r/(18*C),N=Math.min(A*o/M,1);n.vx+=N*w,n.vy+=N*T,n.vz+=N*E,n.vy+=a*o,n.x+=n.vx*o,n.y+=n.vy*o,n.z+=n.vz*o;let P=t.tankDiameter/2-.01,ee=Math.sqrt(n.x*n.x+n.z*n.z);if(ee>P){let e=P/ee;n.x*=e,n.z*=e;let t=(n.vx*n.x+n.vz*n.z)/P;t>0&&(n.vx-=1.5*t*(n.x/P),n.vz-=1.5*t*(n.z/P))}let F=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;if(ee<F){let e=t.impellerClearance+vf(t);if((t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(e=t.tankHeight*.1),n.y>=e){let e=F/(ee||1e-4);n.x*=e,n.z*=e;let t=(n.vx*n.x+n.vz*n.z)/F;t<0&&(n.vx-=1.5*t*(n.x/F),n.vz-=1.5*t*(n.z/F))}}if(t.showBaffle&&n.y>=0&&n.y<=t.tankHeight){let e=t.tankDiameter/2-t.baffleWidth/2;for(let r=0;r<t.baffleCount;r++){let a=r/t.baffleCount*Math.PI*2,o=Math.cos(a)*e,s=-Math.sin(a)*e,c=n.x-o,l=n.z-s,u=c*Math.cos(-a)-l*Math.sin(-a),d=c*Math.sin(-a)+l*Math.cos(-a);if(Math.abs(u)<=t.baffleWidth/2&&Math.abs(d)<=t.baffleThickness/2){let e=n.vx*Math.cos(-a)-n.vz*Math.sin(-a),r=n.vx*Math.sin(-a)+n.vz*Math.cos(-a),c=d>=0?1:-1,l=u>=0?1:-1;t.baffleWidth/2-Math.abs(u)>t.baffleThickness/2-Math.abs(d)?(d=c*(t.baffleThickness/2+.001),r*=-.5):(u=l*(t.baffleWidth/2+.001),e*=-.5);let f=u*Math.cos(a)-d*Math.sin(a),p=u*Math.sin(a)+d*Math.cos(a);n.x=o+f,n.z=s+p,n.vx=e*Math.cos(a)-r*Math.sin(a),n.vz=e*Math.sin(a)+r*Math.cos(a);break}}}let te=e.mesh.getBottomY(ee,t);n.y<te+.01&&(n.y=te+.01,n.vy=-n.vy*.3,n.vx*=.8,n.vz*=.8);let I=e.mesh.getBottomY(0,t)+t.liquidHeight;n.y>I&&(n.y=I,n.vy>0&&(n.vy=-n.vy*.5)),s.push(n.x,n.y,n.z);let L=Math.sqrt(n.vx*n.vx+n.vy*n.vy+n.vz*n.vz)/2;L=Math.max(0,Math.min(1,L));let ne=0,re=0,ie=0;L<.25?(ne=0,re=4*L,ie=1):L<.5?(ne=0,re=1,ie=1-4*(L-.25)):L<.75?(ne=4*(L-.5),re=1,ie=0):(ne=1,re=1-4*(L-.75),ie=0),c.push(ne,re,ie)}),ff&&=(Z.remove(ff),ff.geometry.dispose(),ff.material.dispose(),null),mf&&=(Z.remove(mf),mf.geometry.dispose(),mf.material.dispose(),null),t.dpmTrailMode===`Trail`){hf.push({positions:[...s],colors:[...c]});let e=Math.max(5,t.dpmMaxTrailLength||50);for(;hf.length>e;)hf.shift()}else hf=[];if(s.length>0&&(!t.crossSectionView||!t.showParticleConc)){let a=Math.max(.003,u*10),o=(a,o,s)=>{if(t.crossSectionView)if(t.crossSectionType===`Vertical`&&n){let e=n.baseTh,t=a*Math.cos(e)-s*Math.sin(e);return[t*Math.cos(e)+r*Math.sin(e),o,-t*Math.sin(e)+r*Math.cos(e)]}else{let n=Math.sqrt(a*a+s*s),r=e.mesh.getBottomY(n,t),o=e.mesh.getBottomY(0,t)+t.liquidHeight;return[a,r+t.crossSectionHeight*(o-r),s]}return[a,o,s]};if(t.dpmTrailMode===`Trail`){let e=[],t=[];hf.forEach((n,r)=>{let a=(r+1)/hf.length;for(let r=0;r<n.positions.length;r+=3){let s=o(n.positions[r],n.positions[r+1],n.positions[r+2]);e.push(s[0],s[1],s[2]),t.push(n.colors[r]*a,n.colors[r+1]*a,n.colors[r+2]*a)}});let n=new jr;n.setAttribute(`position`,new q(e,3)),n.setAttribute(`color`,new q(t,3)),mf=new ki(n,new wi({size:a*.7,vertexColors:!0,transparent:!0,opacity:.8})),Z.add(mf)}else{hf=[];let e=[];for(let t=0;t<s.length;t+=3){let n=o(s[t],s[t+1],s[t+2]);e.push(n[0],n[1],n[2])}let t=new jr;t.setAttribute(`position`,new q(e,3)),t.setAttribute(`color`,new q(c,3)),ff=new ki(t,new wi({size:a,vertexColors:!0,transparent:!0,opacity:.9})),Z.add(ff)}}}else ff&&=(Z.remove(ff),ff.geometry.dispose(),ff.material.dispose(),null),mf&&=(Z.remove(mf),mf.geometry.dispose(),mf.material.dispose(),null),hf=[],window.dpmParticles=[];if(lf&&=(Z.remove(lf),lf.geometry.dispose(),lf.material.dispose(),null),t.showGridMesh){let a=[],o=t.gridMeshStyle!==`Points`;for(let s=0;s<sf.length;s++){let c=sf[s],l=c>=e.mesh.nr*e.mesh.ntheta*e.mesh.ny,u=e.mesh.getCellCenterByIdx(c,t),d,f,p;if(l){let n=c-e.mesh.nr*e.mesh.ntheta*e.mesh.ny,r=e.mesh.ntheta/4,a=Math.floor(n/(r*r)),o=Math.hypot(u.x,u.z),s=e.mesh.getBottomY(o,t),l=e.mesh.getBottomY(0,t)+t.liquidHeight,m=s+e.mesh.etaNode[a]*(l-s),h=s+e.mesh.etaNode[a+1]*(l-s);d=e.mesh.dCellR[c]/2||(e.mesh.rNode[1]-e.mesh.rNode[0])/4,p=d,f=(h-m)/2,u.y=(m+h)/2}else{let n=c%e.mesh.nr,r=Math.floor(c/e.mesh.nr)%e.mesh.ntheta,a=Math.floor(c/(e.mesh.nr*e.mesh.ntheta)),o=e.mesh.rNode[n],s=e.mesh.rNode[n+1],l=e.mesh.thetaNode[r],m=e.mesh.thetaNode[r+1],h=e.mesh.getBottomY(o,t),g=e.mesh.getBottomY(s,t),_=h+t.liquidHeight;g+t.liquidHeight;let v=h+e.mesh.etaNode[a]*(_-h),y=h+e.mesh.etaNode[a+1]*(_-h);d=(s-o)/2,p=u.r*(m-l)/2,f=(y-v)/2}if(o)if(t.crossSectionView&&t.crossSectionType===`Vertical`)if(l){let e=Math.cos(n.baseTh),t=Math.sin(n.baseTh),r=u.x-e*d,o=-(u.z-t*d),s=u.x+e*d,c=-(u.z+t*d),l=u.y-f,p=u.y+f;a.push(r,l,o,s,l,c),a.push(s,l,c,s,p,c),a.push(s,p,c,r,p,o),a.push(r,p,o,r,l,o)}else{let o=c%e.mesh.nr,s=Math.floor(c/e.mesh.nr)%e.mesh.ntheta===Sf((e.mesh.rNode[o]+e.mesh.rNode[o+1])/2,n.baseTh,r,-1,n.ntheta,n.dTheta)?-1:1,l=Math.abs(r),u=xf(Math.max(e.mesh.rNode[o],l),n.baseTh,r,s),d=xf(Math.max(e.mesh.rNode[o+1],l),n.baseTh,r,s),f=u.x,p=u.z,m=d.x,h=d.z,g=e.mesh.getBottomY(e.mesh.rNode[o],t),_=e.mesh.getBottomY(e.mesh.rNode[o+1],t),v=Math.floor(c/(e.mesh.nr*e.mesh.ntheta)),y=g+e.mesh.etaNode[v]*t.liquidHeight,b=g+e.mesh.etaNode[v+1]*t.liquidHeight,x=_+e.mesh.etaNode[v]*t.liquidHeight,S=_+e.mesh.etaNode[v+1]*t.liquidHeight;a.push(f,y,p,m,x,h),a.push(m,x,h,m,S,h),a.push(m,S,h,f,b,p),a.push(f,b,p,f,y,p)}else if(t.crossSectionView&&t.crossSectionType===`Horizontal`)if(l){let e=u.x-d,t=-(u.z-p),n=u.x+d,r=-(u.z+p),o=u.y;a.push(e,o,t,n,o,t),a.push(n,o,t,n,o,r),a.push(n,o,r,e,o,r),a.push(e,o,r,e,o,t)}else{let t=c%e.mesh.nr,n=Math.floor(c/e.mesh.nr)%e.mesh.ntheta,r=e.mesh.rNode[t],o=e.mesh.rNode[t+1],s=e.mesh.thetaNode[n],l=e.mesh.thetaNode[n+1],d=r*Math.cos(s),f=-r*Math.sin(s),p=o*Math.cos(s),m=-o*Math.sin(s),h=o*Math.cos(l),g=-o*Math.sin(l),_=r*Math.cos(l),v=-r*Math.sin(l),y=u.y;a.push(d,y,f,p,y,m),a.push(p,y,m,h,y,g),a.push(h,y,g,_,y,v),a.push(_,y,v,d,y,f)}else l?(a.push(u.x-d,u.y,-u.z,u.x+d,u.y,-u.z),a.push(u.x,u.y-f,-u.z,u.x,u.y+f,-u.z),a.push(u.x,u.y,-(u.z-p),u.x,u.y,-(u.z+p))):a.push(u.x,u.y,-u.z,u.x+(e.mesh.rNode[1]-e.mesh.rNode[0]),u.y,-u.z);else a.push(u.x,u.y,-u.z)}let s=new jr;s.setAttribute(`position`,new q(a,3)),lf=o?new Ci(s,new di({color:4473924,transparent:!0,opacity:.5})):new ki(s,new wi({color:8947848,size:.015,transparent:!0,opacity:.8})),Z.add(lf)}}function Nf(){window.dpmParticles=[],hf=[],ff&&=(Z.remove(ff),ff.geometry.dispose(),ff.material.dispose(),null),mf&&=(Z.remove(mf),mf.geometry.dispose(),mf.material.dispose(),null)}function Pf(){if(!X||!Q)return;let e=X.isPerspectiveCamera,t=Q.usePerspective!==!1;if(e===t)return;let n=X.position.clone(),r=X.quaternion.clone(),a=_f(Q),o=Qd?Qd.target.clone():new K(0,a,0),s=X.zoom,c=window.innerWidth/window.innerHeight;if(t)X=new Zo(45,c,.01,100);else{let e=Q.tankDiameter*2.5;X=new Qo(e*c/-2,e*c/2,e/2,e/-2,.01,100)}X.position.copy(n),X.quaternion.copy(r),X.zoom=t?1:s,X.updateProjectionMatrix(),Qd&&(Qd.object=X,Qd.target.copy(o),Qd.update()),$d&&($d.camera=X)}function Ff(e,t,n){if(!X||!Xd||!Z)return null;Z.updateMatrixWorld();let r=new K(e,t,n);if(r.applyMatrix4(Z.matrixWorld),r.project(X),r.z>1)return null;let a=Xd.domElement.getBoundingClientRect();return{x:a.left+(r.x*.5+.5)*a.width,y:a.top+(1-(r.y*.5+.5))*a.height}}function If(){if(X&&X.isPerspectiveCamera)X.aspect=window.innerWidth/window.innerHeight;else if(X&&X.isOrthographicCamera){let e=window.innerWidth/window.innerHeight,t=Q?Q.tankDiameter*2.5:2.5;X.left=t*e/-2,X.right=t*e/2,X.top=t/2,X.bottom=t/-2}X.updateProjectionMatrix(),Xd.setSize(window.innerWidth,window.innerHeight)}function Lf(){if(requestAnimationFrame(Lf),window.syncFloatingPanel&&window.syncFloatingPanel(),Qd&&Qd.update(),Q&&Q.showDimensions&&window._updateDimensionOverlay&&window._updateDimensionOverlay(!0,Q),nf&&window.cfdRunning&&Q&&(nf.rotation.y-=Q.rpm*(2*Math.PI/60)*.016),Q){let e=document.getElementById(`color-bar-container`);if(e)if(Q.showColorBar||Q.showOperatingConditions){if(e.style.display=`block`,Q.showColorBar){let e=document.getElementById(`cb-temp-min`),t=document.getElementById(`cb-temp-max`);e&&(e.innerText=(Q.currentMinTemp||293.1).toFixed(1)),t&&(t.innerText=(Q.currentMaxTemp||293.1).toFixed(1));let n=document.getElementById(`cb-press-min`),r=document.getElementById(`cb-press-max`);n&&(n.innerText=(Q.currentMinPress===void 0?0:Q.currentMinPress).toFixed(1)),r&&(r.innerText=(Q.currentMaxPress===void 0?0:Q.currentMaxPress).toFixed(1));let a=document.getElementById(`cb-conc-min`),o=document.getElementById(`cb-conc-max`);a&&(a.innerText=(Q.currentMinConc===void 0?0:Q.currentMinConc).toFixed(1)),o&&(o.innerText=(Q.currentMaxConc===void 0?0:Q.currentMaxConc).toFixed(1));let s=document.getElementById(`cb-vel-max`);s&&(s.innerText=(Q.currentMaxVel||0).toFixed(3));let c=document.getElementById(`cb-visc-min`),l=document.getElementById(`cb-visc-max`);c&&(c.innerText=(Q.currentMinViscosity===void 0?Q.viscosity||.001:Q.currentMinViscosity).toExponential(2)),l&&(l.innerText=(Q.currentMaxViscosity===void 0?Q.viscosity||.001:Q.currentMaxViscosity).toExponential(2));let u=e=>e===void 0?`—`:Number(e).toPrecision(4);Q.currentMinViscosityDisp=u(Q.currentMinViscosity),Q.currentMaxViscosityDisp=u(Q.currentMaxViscosity);let d=!!Q.showFluidMesh,f=!!Q.showPressureMesh,p=!!Q.showParticleConc,m=!!Q.showViscosityRegion&&!f&&!p,h=!!Q.showVelocityVector||!!Q.showVelocityMesh||!!Q.showParticles&&(!Q.crossSectionView||!Q.showParticleConc),g=`padding:5px 6px; border-radius:6px; margin-bottom:8px; background:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.35); transition: all 0.3s;`,_=`padding:5px 6px; border-radius:6px; margin-bottom:8px; background:transparent; border:1px solid transparent; opacity:0.45; transition: all 0.3s;`,v=document.getElementById(`cb-temp-row`),y=document.getElementById(`cb-press-row`),b=document.getElementById(`cb-conc-row`),x=document.getElementById(`cb-vel-row`),S=document.getElementById(`cb-visc-row`),C=d||f||p||h||m;v&&(v.style.cssText=!C||d?g:_),y&&(y.style.cssText=!C||f?g:_),b&&(b.style.cssText=!C||p?g:_),x&&(x.style.cssText=!C||h?`padding:5px 6px; border-radius:6px; border:1px solid rgba(255,255,255,0.35); background:rgba(255,255,255,0.10); transition: all 0.3s;`:`padding:5px 6px; border-radius:6px; border:1px solid transparent; background:transparent; opacity:0.45; transition: all 0.3s;`),S&&(S.style.cssText=!C||m?g:_)}}else e.style.display=`none`;let t=document.getElementById(`cfd-monitor`);t&&(t.style.display=Q.showCFDMonitor===!1?`none`:`block`,t.style.zIndex=`99999`)}Xd&&Zd&&X&&Xd.render(Zd,X)}function Rf(e){if(!X||!Qd||!Q)return;let t=Q.tankDiameter*2.5,n=_f(Q),r=vf(Q),a=Z?Z.position.x:0,o=Z?Z.position.y:0,s=Z?Z.position.z:0;if(e===`VerticalTemp`||e===`VerticalVel`){let r=gf&&gf.mesh?gf.mesh.ntheta:Q.meshNtheta||24,c=2*Math.PI/r,l=Q.crossSectionAngle===void 0?.125:Q.crossSectionAngle,u=Math.round(l*2*Math.PI/c)%r;u<0&&(u+=r);let d;d=gf&&gf.mesh?gf.mesh.thetaNode[u]+(gf.mesh.thetaNode[u+1]-gf.mesh.thetaNode[u])/2:u*c+c/2;let f=(Q.crossSectionOffset||0)*(gf&&gf.mesh?gf.mesh.rNode[gf.mesh.nr]:Q.tankDiameter/2),p=a+f*Math.sin(d),m=s+f*Math.cos(d),h=e===`VerticalTemp`?d+Math.PI/2:d;X.position.set(p+t*Math.cos(h),o+n,m-t*Math.sin(h)),Qd.target.set(p,o+n,m)}else if(e===`Horizontal`){X.position.set(a,o+t+n,s);let e=Q.crossSectionType===`Horizontal`?r+Q.crossSectionHeight*Q.liquidHeight:n;Qd.target.set(a,o+e,s)}X.isOrthographicCamera&&(X.zoom=1,X.updateProjectionMatrix()),Qd.update()}var zf=class e{constructor(t,n,r,a,o=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(o),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(a),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},Bf=class extends zf{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Vf(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var Hf={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Vf,toHexString:Vf},Uf={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},Wf=[Hf,Uf,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=Uf.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let a=e*r<<16^t*r<<8^n*r<<0;return Uf.toHexString(a)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=Uf.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let a=e*r<<16^t*r<<8^n*r<<0;return Uf.toHexString(a)}}];function Gf(e){return Wf.find(t=>t.match(e))}var Kf=class extends zf{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Gf(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Vf(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},qf=class extends zf{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},Jf=class extends zf{constructor(e,t,n,r,a,o){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(a);let s=o!==void 0;this.step(s?o:this._getImplicitStep(),s),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},a=!1,o,s,c,l,u,d=e=>{o=e.clientX,s=c=e.clientY,a=!0,l=this.getValue(),u=0,window.addEventListener(`mousemove`,f),window.addEventListener(`mouseup`,p)},f=e=>{if(a){let t=e.clientX-o,n=e.clientY-s;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&p()}if(!a){let t=e.clientY-c;u-=t*this._step*this._arrowKeyMultiplier(e),l+u>this._max?u=this._max-l:l+u<this._min&&(u=this._min-l),this._snapClampSetValue(l+u)}c=e.clientY},p=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,f),window.removeEventListener(`mouseup`,p)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,d),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,a)=>(e-t)/(n-t)*(a-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,a)},r=e=>{t(e.clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,a)},o=!1,s,c,l=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),o=!1},u=e=>{e.touches.length>1||(this._hasScrollBar?(s=e.touches[0].clientX,c=e.touches[0].clientY,o=!0):l(e),window.addEventListener(`touchmove`,d,{passive:!1}),window.addEventListener(`touchend`,f))},d=e=>{if(o){let t=e.touches[0].clientX-s,n=e.touches[0].clientY-c;Math.abs(t)>Math.abs(n)?l(e):(window.removeEventListener(`touchmove`,d),window.removeEventListener(`touchend`,f))}else e.preventDefault(),t(e.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,d),window.removeEventListener(`touchend`,f)},p=this._callOnFinishChange.bind(this),m;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,u,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(m),m=setTimeout(p,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Yf=class extends zf{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Xf=class extends zf{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Zf=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Qf(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var $f=!1,ep=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:a=`Controls`,closeFolders:o=!1,injectStyles:s=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),c&&this.domElement.classList.add(`lil-allow-touch-styles`),!$f&&s&&(Qf(Zf),$f=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=o}add(e,t,n,r,a){if(Object(n)===n)return new Yf(this,e,t,n);let o=e[t];switch(typeof o){case`number`:return new Jf(this,e,t,n,r,a);case`boolean`:return new Bf(this,e,t);case`string`:return new Xf(this,e,t);case`function`:return new qf(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Kf(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof qf||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof qf)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};function tp(e,t){window.updateCameraProjection=Pf,window.appParams=e,e.crossSectionAngle===void 0&&(e.crossSectionAngle=.125),e.crossSectionOffset===void 0&&(e.crossSectionOffset=0);let n=new ep({title:`撹拌槽 CFD (Stirred Tank)`});window.appGui=n,n.domElement.style.position=`fixed`,n.domElement.style.top=`0px`,n.domElement.style.left=`36px`,n.domElement.style.right=`auto`,n.domElement.style.width=`300px`,n.domElement.style.zIndex=`120`,n.domElement.style.maxHeight=`100vh`,n.domElement.style.overflowY=`auto`;let r=new ep({title:`物性設定 (Fluid & Particle Properties)`});window.appGuiFluidProps=r,r.domElement.style.position=`fixed`,r.domElement.style.top=`0px`,r.domElement.style.left=`336px`,r.domElement.style.width=`280px`,r.domElement.style.right=`auto`,r.domElement.style.zIndex=`120`,r.domElement.style.maxHeight=`100vh`,r.domElement.style.overflowY=`auto`,r.domElement.style.display=`none`;let a=r.domElement,o=a.querySelector(`.title`);o&&window.makeCFDPanelDraggable&&window.makeCFDPanelDraggable(a,o),window.appGuiParticleProps=r;let s=new ep({title:`物性設定`});window.appGuiProperties=s,s.domElement.style.display=`none`;let c=()=>{},l=()=>{},u,d=()=>{},f,p;(()=>{if(document.getElementById(`computing-indicator`))return;if(!document.getElementById(`computing-indicator-style`)){let e=document.createElement(`style`);e.id=`computing-indicator-style`,e.textContent=`
        @keyframes _ci_spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes _ci_fadein {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        #computing-indicator {
          display: none;
          position: fixed;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: rgba(10, 12, 20, 0.88);
          border: 1px solid rgba(0, 210, 255, 0.55);
          border-radius: 20px;
          padding: 5px 16px 5px 10px;
          font-family: monospace;
          font-size: 12px;
          color: #00e5ff;
          gap: 8px;
          align-items: center;
          box-shadow: 0 0 14px rgba(0, 200, 255, 0.25);
          animation: _ci_fadein 0.15s ease;
          pointer-events: none;
          white-space: nowrap;
        }
        #computing-indicator.ci-visible {
          display: flex;
        }
        #computing-indicator .ci-spinner {
          width: 13px;
          height: 13px;
          border: 2px solid rgba(0, 210, 255, 0.25);
          border-top-color: #00e5ff;
          border-radius: 50%;
          animation: _ci_spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        #computing-indicator .ci-dots::after {
          content: '';
          animation: _ci_dots 1.2s steps(4, end) infinite;
        }
        @keyframes _ci_dots {
          0%   { content: ''; }
          25%  { content: '.'; }
          50%  { content: '..'; }
          75%  { content: '...'; }
          100% { content: ''; }
        }
      `,document.head.appendChild(e)}let e=document.createElement(`div`);e.id=`computing-indicator`,e.innerHTML=`<div class="ci-spinner"></div><span>計算中<span class="ci-dots"></span></span>`,document.body.appendChild(e)})();let m=null,h=0;window.showComputingIndicator=()=>{h++,clearTimeout(m);let e=document.getElementById(`computing-indicator`);e&&e.classList.add(`ci-visible`)},window.hideComputingIndicator=()=>{h=Math.max(0,h-1),!(h>0)&&(clearTimeout(m),m=setTimeout(()=>{let e=document.getElementById(`computing-indicator`);e&&e.classList.remove(`ci-visible`)},120))},window.notifyComputingDone=window.hideComputingIndicator;let g=e=>{window.showComputingIndicator(),setTimeout(()=>{try{let t=jf(e);t&&typeof t.then==`function`?t.then(()=>window.hideComputingIndicator()).catch(()=>window.hideComputingIndicator()):window.hideComputingIndicator()}catch(e){throw window.hideComputingIndicator(),e}},0)},_=()=>{g(e)},v=()=>{Nf(),g(e)},y=r.addFolder(`液体物性 (Fluid Properties)`);y.open(),y.add(e,`density`,500,2e3,10).name(`密度 (kg/m³)`).onChange(_);let b=y.add(e,`viscosity`,.001,100,.001).name(`粘度 (Pa・s)`).onChange(_),x=y.add(e,`powerLawK`,.001,100,.001).name(`一貫性係数 K`).onChange(_),S=y.add(e,`powerLawN`,.1,2,.05).name(`流動挙動指数 n`).onChange(_),C=y.add(e,`yieldStress`,0,100,1).name(`降伏応力 τ0 (Pa)`).onChange(_),w=y.add(e,`muMin`,1e-5,1,1e-5).name(`粘度下限 μ_min (Pa・s)`).onChange(_),T=y.add(e,`muMax`,.01,1e3,.01).name(`粘度上限 μ_max (Pa・s)`).onChange(_);y.add(e,`heatCapacity`,1e3,5e3,50).name(`比熱 (J/kg・K)`).onChange(_),y.add(e,`thermalConductivity`,.1,5,.1).name(`熱伝導率 (W/m・K)`).onChange(_);let E=y.add(e,`turbulenceIntensity`,0,.1,.001).name(`乱流強度 (Turbulence)`).onChange(_);e.tempDependence===void 0&&(e.tempDependence=!1),e.andradeT_ref===void 0&&(e.andradeT_ref=298.15),e.andradeEa1===void 0&&(e.andradeEa1=3e3),e.andradeEa2===void 0&&(e.andradeEa2=3e3);let D=y.addFolder(`🌡️ 温度依存性 (Andrade)`),O,A,M,N,P=()=>{let t=!!e.tempDependence;[O,A,M,N].forEach(e=>{e&&(t?e.enable():e.disable(),e.domElement.closest(`.row`)&&(e.domElement.closest(`.row`).style.opacity=t?`1`:`0.4`))})};D.add(e,`tempDependence`).name(`温度依存性 ON/OFF`).onChange(()=>{P(),_()}),M=D.add(e,`andradeT_ref`,273.15,373.15,.5).name(`基準温度 T_ref (K)`).onChange(_),O=D.add(e,`andradeEa1`,0,1e5,100).name(`Ea1 / R  降伏値項 (K)`).onChange(_),A=D.add(e,`andradeEa2`,0,1e5,100).name(`Ea2 / R  粘度項  (K)`).onChange(_),N=D.add({showArrhenius:()=>{let e=document.getElementById(`arrhenius-chart-modal`);e&&(e.style.display=`block`,typeof window.updateArrheniusCharts==`function`&&window.updateArrheniusCharts())}},`showArrhenius`).name(`📈 アレニウスプロットを表示`),P(),window.updateTempDepUI=P;let ee=null,F=null;l=()=>{let t=document.getElementById(`rheology-chart-modal`);if(!t||t.style.display!==`block`||typeof Chart>`u`)return;let n=e.fluidModel,r=e.viscosity,a=e.powerLawK,o=e.powerLawN,s=e.yieldStress,c=.01,l=[],u=[];for(let e=0;e<=60;e++){let t=e/60,d=10**(Math.log10(c)+t*(Math.log10(1e3)-Math.log10(c))),f,p;switch(n){case`Power-law`:f=a*d**+o,p=a*d**(o-1);break;case`Bingham`:f=s+r*d,p=r+s/d;break;case`Herschel-Bulkley`:f=s+a*d**+o,p=s/d+a*d**(o-1);break;default:f=r*d,p=r}l.push({x:d,y:Math.max(f,0)}),u.push({x:d,y:Math.max(p,1e-9)})}let d=document.getElementById(`rheology-model-info`);if(d){let e=``;switch(n){case`Newtonian`:e=`Newtonian:  τ = μ・γ̇   |   μ = ${r.toPrecision(4)} Pa・s`;break;case`Power-law`:e=`Power-law:  τ = K・γ̇ⁿ   |   K = ${a.toPrecision(4)},  n = ${o.toPrecision(3)}`;break;case`Bingham`:e=`Bingham:  τ = τ₀ + μp・γ̇   |   τ₀ = ${s.toPrecision(4)} Pa,  μp = ${r.toPrecision(4)} Pa・s`;break;case`Herschel-Bulkley`:e=`Herschel-Bulkley:  τ = τ₀ + K・γ̇ⁿ   |   τ₀ = ${s.toPrecision(4)} Pa,  K = ${a.toPrecision(4)},  n = ${o.toPrecision(3)}`;break}d.textContent=e}let f=`#ccc`,p=`rgba(255,255,255,0.1)`,m=document.getElementById(`rheology-flow-canvas`).getContext(`2d`);ee&&ee.destroy(),ee=new Chart(m,{type:`line`,data:{datasets:[{label:`せん断応力 τ (Pa)`,data:l,borderColor:`rgba(255, 99, 132, 1)`,backgroundColor:`rgba(255, 99, 132, 0.15)`,borderWidth:2,pointRadius:0,tension:.15,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`せん断速度 γ̇ (1/s)`,color:f},ticks:{color:f},grid:{color:p}},y:{type:`linear`,beginAtZero:!0,title:{display:!0,text:`せん断応力 τ (Pa)`,color:f},ticks:{color:f},grid:{color:p}}},plugins:{legend:{labels:{color:f}},title:{display:!0,text:`流動曲線 (Flow Curve)`,color:`#fff`}}}});let h=document.getElementById(`rheology-visc-canvas`).getContext(`2d`);F&&F.destroy(),F=new Chart(h,{type:`line`,data:{datasets:[{label:`見かけ粘度 μ_app (Pa・s)`,data:u,borderColor:`rgba(54, 162, 235, 1)`,backgroundColor:`rgba(54, 162, 235, 0.15)`,borderWidth:2,pointRadius:0,tension:.15,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`logarithmic`,title:{display:!0,text:`せん断速度 γ̇ (1/s)`,color:f},ticks:{color:f},grid:{color:p}},y:{type:`logarithmic`,title:{display:!0,text:`見かけ粘度 μ_app (Pa・s)`,color:f},ticks:{color:f},grid:{color:p}}},plugins:{legend:{labels:{color:f}},title:{display:!0,text:`粘性曲線 (Viscosity Curve)`,color:`#fff`}}}})},y.add({showRheologyChart:()=>{let e=document.getElementById(`rheology-chart-modal`);e&&(e.style.display=`block`,l())}},`showRheologyChart`).name(`📈 流動曲線・粘性曲線を表示`);let te=null,I=null;window.updateArrheniusCharts=()=>{let t=document.getElementById(`arrhenius-chart-modal`);if(!t||t.style.display!==`block`||typeof Chart>`u`)return;let n=e.andradeEa1||0,r=e.andradeEa2||0,a=e.andradeT_ref||298.15,o=e.yieldStress||10,s=e.powerLawK||1,c=273.15,l=[],u=[],d=[],f=[];for(let e=0;e<=50;e++){let t=c+(373.15-c)*e/50,p=1/t,m=o*Math.exp(n*(1/t-1/a)),h=s*Math.exp(r*(1/t-1/a));l.push({x:t,y:Math.max(m,1e-12)}),u.push({x:t,y:Math.max(h,1e-12)}),d.push({x:p*1e3,y:Math.log(Math.max(m,1e-12))}),f.push({x:p*1e3,y:Math.log(Math.max(h,1e-12))})}let p=`#ccc`,m=`rgba(255,255,255,0.1)`,h=document.getElementById(`arrhenius-tau0-canvas`);if(!h)return;te&&te.destroy(),te=new Chart(h.getContext(`2d`),{type:`line`,data:{datasets:[{label:`τ₀(T)  [Pa]`,data:l,borderColor:`rgba(255, 165, 0, 1)`,backgroundColor:`rgba(255, 165, 0, 0.1)`,borderWidth:2,pointRadius:0,tension:.1,yAxisID:`y`},{label:`ln τ₀  vs  1000/T`,data:d,borderColor:`rgba(255, 99, 132, 1)`,backgroundColor:`rgba(255, 99, 132, 0.0)`,borderWidth:2,pointRadius:0,tension:.1,borderDash:[5,3],yAxisID:`y2`,xAxisID:`x2`}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`温度 T (K)`,color:p},ticks:{color:p},grid:{color:m}},x2:{type:`linear`,position:`top`,title:{display:!0,text:`1000/T (K⁻¹)`,color:`rgba(255,99,132,0.8)`},ticks:{color:`rgba(255,99,132,0.8)`},grid:{display:!1}},y:{type:`linear`,title:{display:!0,text:`τ₀ (Pa)`,color:p},ticks:{color:p},grid:{color:m}},y2:{type:`linear`,position:`right`,title:{display:!0,text:`ln τ₀`,color:`rgba(255,99,132,0.8)`},ticks:{color:`rgba(255,99,132,0.8)`},grid:{display:!1}}},plugins:{legend:{labels:{color:p}},title:{display:!0,text:`降伏値 τ₀(T) アレニウスプロット  Ea1/R = ${n.toFixed(0)} K`,color:`#fff`}}}});let g=document.getElementById(`arrhenius-K-canvas`);if(!g)return;I&&I.destroy(),I=new Chart(g.getContext(`2d`),{type:`line`,data:{datasets:[{label:`K(T)  [Pa·sⁿ]`,data:u,borderColor:`rgba(54, 210, 210, 1)`,backgroundColor:`rgba(54, 210, 210, 0.1)`,borderWidth:2,pointRadius:0,tension:.1,yAxisID:`y`},{label:`ln K  vs  1000/T`,data:f,borderColor:`rgba(54, 162, 235, 1)`,backgroundColor:`rgba(54, 162, 235, 0.0)`,borderWidth:2,pointRadius:0,tension:.1,borderDash:[5,3],yAxisID:`y2`,xAxisID:`x2`}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`温度 T (K)`,color:p},ticks:{color:p},grid:{color:m}},x2:{type:`linear`,position:`top`,title:{display:!0,text:`1000/T (K⁻¹)`,color:`rgba(54,162,235,0.8)`},ticks:{color:`rgba(54,162,235,0.8)`},grid:{display:!1}},y:{type:`linear`,title:{display:!0,text:`K (Pa·sⁿ)`,color:p},ticks:{color:p},grid:{color:m}},y2:{type:`linear`,position:`right`,title:{display:!0,text:`ln K`,color:`rgba(54,162,235,0.8)`},ticks:{color:`rgba(54,162,235,0.8)`},grid:{display:!1}}},plugins:{legend:{labels:{color:p}},title:{display:!0,text:`粘度項 K(T) アレニウスプロット  Ea2/R = ${r.toFixed(0)} K`,color:`#fff`}}}});let _=document.getElementById(`arrhenius-model-info`);_&&(_.textContent=`τ = τ₀_ref·exp(Ea1/R·(1/T − 1/T_ref)) + [K_ref·exp(Ea2/R·(1/T − 1/T_ref))]·γ̇ⁿ   |   T_ref=${a.toFixed(2)} K,  Ea1/R=${n.toFixed(0)} K,  Ea2/R=${r.toFixed(0)} K`)};let L=r.addFolder(`粒子物性 (Particle Properties)`);L.open(),L.add(e,`showParticles`).name(`粒子追跡(DPM)の表示`).onChange(e=>{d(),_()}),L.add(e,`particleDensity`,500,5e3).name(`粒子密度 (kg/m³)`),L.add(e,`particleDiameter`,.1,1e3).name(`平均粒子径 (μm)`);let ne=L.addFolder(`DEM物理モデル (DEM Physics)`);ne.add(e,`demKn`,100,5e4).name(`法線ばね定数 kn`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.kn=e)}),ne.add(e,`demGn`,0,100).name(`法線減衰係数 gn`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.gn=e)}),ne.add(e,`demKt`,100,5e4).name(`接線ばね定数 kt`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.kt=e)}),ne.add(e,`demGt`,0,100).name(`接線減衰係数 gt`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.gt=e)}),ne.add(e,`demMu`,0,1).name(`摩擦係数 μ`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.mu=e)}),ne.add(e,`demSurfaceEnergy`,0,10,.01).name(`表面エネルギー (JKR γ)`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.surfaceEnergy=e)}),L.add(e,`particleDistributionType`,[`Uniform`,`Log-Normal`,`Normal`]).name(`粒度分布タイプ`).onChange(()=>{d(),Nf()}),u=L.add(e,`particleSizeStdDev`,0,500).name(`標準偏差 (μm)`).onChange(()=>{window.dpmParticles=[]});let re=null,ie=[],ae=[],R=(e,t,n)=>{let r=document.getElementById(`dpm-chart-canvas`).getContext(`2d`);re&&re.destroy();let a=e.concat(t),o=Math.max(.1,Math.min(...a)),s=Math.max(...a,o*1.1),c=e=>{let t=Array(20).fill(0);if(n===`linear`){let n=(s-o)/20||.1;e.forEach(e=>{let r=Math.floor((e-o)/n);r>=20&&(r=19),r<0&&(r=0),t[r]++})}else{let n=Math.log10(o),r=(Math.log10(s)-n)/20||.1;e.forEach(e=>{let a=Math.floor((Math.log10(Math.max(.1,e))-n)/r);a>=20&&(a=19),a<0&&(a=0),t[a]++})}return t},l=c(e),u=c(t),d;if(n===`linear`){let e=(s-o)/20||.1;d=l.map((t,n)=>{let r=o+n*e,a=o+(n+1)*e;return`${r.toFixed(1)} - ${a.toFixed(1)}`})}else{let e=Math.log10(o),t=(Math.log10(s)-e)/20||.1;d=l.map((n,r)=>{let a=10**(e+r*t),o=10**(e+(r+1)*t);return`${a.toFixed(1)} - ${o.toFixed(1)}`})}re=new Chart(r,{type:`bar`,data:{labels:d,datasets:[{label:`初期粒子 (Initial)`,data:l,backgroundColor:`rgba(200, 200, 200, 0.5)`,borderColor:`rgba(150, 150, 150, 1)`,borderWidth:1},{label:`現在（凝集後） (Current)`,data:u,backgroundColor:`rgba(54, 162, 235, 0.7)`,borderColor:`rgba(54, 162, 235, 1)`,borderWidth:1}]},options:{scales:{x:{title:{display:!0,text:`粒子径 / 凝集塊相当径 (μm)`}},y:{beginAtZero:!0,title:{display:!0,text:`頻度`}}}}})};document.querySelectorAll(`input[name="dpm-chart-xscale"]`).forEach(e=>{e.addEventListener(`change`,e=>{ie.length>0&&R(ie,ae,e.target.value)})}),L.add({showChart:()=>{let t=document.getElementById(`dpm-chart-modal`);if(!t)return;t.style.display=`block`;let n=[],r=e.particleCount||1e3;for(let t=0;t<r;t++){let t=e.particleDiameter||100;if(e.particleDistributionType===`Log-Normal`){let n=e.particleDiameter||100,r=e.particleSizeStdDev||20;if(r>0){let e=r*r,a=Math.log(n*n/Math.sqrt(e+n*n)),o=Math.sqrt(Math.log(e/(n*n)+1)),s=0,c=0;for(;s===0;)s=Math.random();for(;c===0;)c=Math.random();let l=Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*c);t=Math.exp(a+o*l)}t=Math.max(.1,t)}else if(e.particleDistributionType===`Normal`){let n=e.particleDiameter||100,r=e.particleSizeStdDev||20;if(r>0){let e=0,a=0;for(;e===0;)e=Math.random();for(;a===0;)a=Math.random();t=n+r*(Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*a))}t=Math.max(.1,t)}n.push(t)}let a=[];if(window.app&&window.app.demSolver&&window.app.demSolver.numParticles>0){let e=window.app.demSolver,t=e.numParticles,n=new Int32Array(t);for(let e=0;e<t;e++)n[e]=e;let r=e=>n[e]===e?e:(n[e]=r(n[e]),n[e]),o=(e,t)=>{let a=r(e),o=r(t);a!==o&&(n[a]=o)};for(let n=0;n<t;n++)for(let r=n+1;r<t;r++){let t=e.x[n]-e.x[r],a=e.y[n]-e.y[r],s=e.z[n]-e.z[r];t*t+a*a+s*s<((e.radius[n]+e.radius[r])*1.05)**2&&o(n,r)}let s=new Float32Array(t);for(let n=0;n<t;n++){let t=r(n),a=e.radius[n];s[t]+=4/3*Math.PI*a*a*a}for(let e=0;e<t;e++)if(s[e]>0){let t=2*(s[e]/(4/3*Math.PI))**(1/3);a.push(t*1e6)}}else a=[...n];ie=n,ae=a;let o=document.querySelector(`input[name="dpm-chart-xscale"]:checked`),s=o?o.value:`log`;n.concat(a),R(n,a,s);let c=e=>{if(!e||e.length===0)return{n:0,mean:0,median:0,std:0,min:0,max:0};let t=[...e].sort((e,t)=>e-t),n=t.length,r=t[0],a=t[n-1],o=n%2==0?(t[n/2-1]+t[n/2])/2:t[Math.floor(n/2)],s=0;for(let e=0;e<n;e++)s+=t[e];let c=s/n,l=0;for(let e=0;e<n;e++)l+=(t[e]-c)**2;return{n,mean:c,median:o,std:Math.sqrt(l/n),min:r,max:a}},l=c(n),u=c(a),d=document.getElementById(`dpm-stats-container`);d&&(d.innerHTML=`
        <table style="width:100%; border-collapse:collapse; text-align:right; font-size:12px; color:#ddd; background:#111; border-radius:6px; overflow:hidden;">
          <thead>
            <tr style="background:#333; color:#ffcc00;">
              <th style="padding:6px; text-align:left; border-bottom:1px solid #444;">項目</th>
              <th style="padding:6px; border-bottom:1px solid #444;">要素数 (個)</th>
              <th style="padding:6px; border-bottom:1px solid #444;">平均 (μm)</th>
              <th style="padding:6px; border-bottom:1px solid #444;">中央値 (μm)</th>
              <th style="padding:6px; border-bottom:1px solid #444;">標準偏差 (μm)</th>
              <th style="padding:6px; border-bottom:1px solid #444;">最小 (μm)</th>
              <th style="padding:6px; border-bottom:1px solid #444;">最大 (μm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:6px; text-align:left; color:#aaa; font-weight:bold; border-bottom:1px solid #222;">初期粒子 (Initial)</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.n}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.mean.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.median.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.std.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.min.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${l.max.toFixed(1)}</td>
            </tr>
            <tr style="background:rgba(54, 162, 235, 0.1);">
              <td style="padding:6px; text-align:left; color:#69c; font-weight:bold;">現在・凝集後 (Current)</td>
              <td style="padding:6px;">${u.n}</td>
              <td style="padding:6px; color:${u.mean>l.mean?`#ff6666`:`#ddd`}; font-weight:${u.mean>l.mean?`bold`:`normal`}">${u.mean.toFixed(1)}</td>
              <td style="padding:6px;">${u.median.toFixed(1)}</td>
              <td style="padding:6px;">${u.std.toFixed(1)}</td>
              <td style="padding:6px;">${u.min.toFixed(1)}</td>
              <td style="padding:6px; color:${u.max>l.max?`#ff6666`:`#ddd`}; font-weight:${u.max>l.max?`bold`:`normal`}">${u.max.toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:10.5px; color:#777; margin-top:6px; text-align:right;">
          ※ 現在（凝集後）の要素数は、凝集して1つのクラスターになったものを1個としてカウントしています。
        </div>
      `)}},`showChart`).name(`📊 粒度分布グラフを表示`),(()=>{let e=()=>{let e=n.domElement;if(!e||document.getElementById(`gui-preset-bar`))return;let t=[{value:``,label:`-- カスタム --`},{value:`large`,label:`🔵 ラージスケール (φ1.5m)`},{value:`pilot`,label:`🟢 パイロットスケール (φ50cm)`},{value:`bench`,label:`🟡 ベンチスケール (φ30cm)`},{value:`lab`,label:`🔴 ラボスケール (φ8cm)`}],r=document.createElement(`div`);r.id=`gui-preset-bar`,r.style.cssText=[`padding:6px 8px 5px`,`border-bottom:1px solid rgba(255,255,255,0.12)`,`background:rgba(0,0,0,0.25)`,`display:flex`,`flex-direction:column`,`gap:3px`].join(`;`);let a=document.createElement(`div`);a.style.cssText=`display:flex;align-items:center;gap:4px;`;let o=document.createElement(`span`);o.textContent=`🏭`,o.style.cssText=`font-size:13px;flex-shrink:0;`;let s=document.createElement(`select`);s.id=`preset-select`,s.style.cssText=[`flex:1`,`background:#2a2a2a`,`color:#ffcc00`,`border:1px solid rgba(255,204,0,0.35)`,`border-radius:4px`,`padding:3px 5px`,`font-size:10.5px`,`font-weight:bold`,`cursor:pointer`,`outline:none`,`font-family:monospace`].join(`;`),t.forEach(e=>{let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,s.appendChild(t)});let c=document.createElement(`button`);c.id=`btn-preset-edit`,c.textContent=`✏️`,c.title=`プリセット条件を編集`,c.style.cssText=[`background:rgba(255,255,255,0.07)`,`border:1px solid rgba(255,255,255,0.2)`,`color:#aaa`,`border-radius:4px`,`cursor:pointer`,`font-size:12px`,`padding:2px 6px`,`flex:0 0 auto`,`width:28px`,`height:24px`,`box-sizing:border-box`,`line-height:1`,`display:inline-flex`,`align-items:center`,`justify-content:center`].join(`;`),a.appendChild(o),a.appendChild(s),a.appendChild(c);let l=document.createElement(`div`);l.id=`preset-desc`,l.style.cssText=`font-size:9.5px;color:#888;padding:0 2px;min-height:12px;line-height:1.3;`,r.appendChild(a),r.appendChild(l);let u=e.querySelector(`.title`);u&&u.nextSibling?e.insertBefore(r,u.nextSibling):e.appendChild(r),s.addEventListener(`change`,e=>{let t=e.target.value;t&&window.applyReactorPreset&&window.applyReactorPreset(t),l.textContent=``,t&&window.reactorPresets&&window.reactorPresets[t]&&(l.textContent=window.reactorPresets[t].desc)}),c.addEventListener(`click`,()=>{let e=document.getElementById(`preset-edit-modal`);e&&(window._renderPresetEditModal&&window._renderPresetEditModal(),e.style.display=`block`)})};e();let t=setInterval(()=>{if(document.getElementById(`gui-preset-bar`)){clearInterval(t);return}e()},300)})();let oe=n.addFolder(`形状設定 (Geometry)`),se=oe.addFolder(`タンク (Tank)`),ce,le=()=>{let t=(Number(e.tankHeight)||0)+Number(Yd.getMirrorDepth(e));ce&&ce.max(t),e.liquidHeight>t&&(e.liquidHeight=t,ce&&ce.updateDisplay());let n=e.tankDiameter/2,r=e.liquidHeight,a=Number(Yd.getMirrorDepth(e)),o=0,s=Math.min(r,a);if(s>0){if(e.mirrorPlateType===`Cone`){let e=s/a*n;o+=1/3*Math.PI*e*e*s}else if(e.mirrorPlateType===`FullHemisphere`||e.mirrorPlateType===`Dish`||e.mirrorPlateType===`HalfEllipse`){let t=1;e.mirrorPlateType===`Dish`&&(t=.25),e.mirrorPlateType===`HalfEllipse`&&(t=.5);let r=s/t;o+=t*(Math.PI*r*r/3)*(3*n-r)}}if(r>a){let e=r-a;o+=Math.PI*n*n*e}e.liquidVolumeLiters=(o*1e3).toFixed(1),window.ctrlLiquidVolume&&window.ctrlLiquidVolume.updateDisplay()};se.add(e,`tankDiameter`,.1,5).name(`タンク直径`),se.add(e,`tankHeight`,.1,5).name(`タンク直胴部高さ`),ce=se.add(e,`liquidHeight`,.1,5).name(`液深 (総高さ)`),e.liquidVolumeLiters=e.liquidVolumeLiters||`0.0`,window.ctrlLiquidVolume=se.add(e,`liquidVolumeLiters`).name(`概算液量 (L)`).disable(),le();let ue=oe.addFolder(`鏡板 (Mirror Plate)`);ue.add(e,`mirrorPlateType`,[`FullHemisphere`,`Dish`,`HalfEllipse`,`Cone`,`None`]).name(`形状タイプ`);let de=oe.addFolder(`インペラ (Impeller)`),fe=()=>{let t=Yd.getClearanceRange(e);pe&&(pe.min(t.min).max(t.max),e.impellerClearance<t.min&&(e.impellerClearance=t.min),e.impellerClearance>t.max&&(e.impellerClearance=t.max),pe.updateDisplay())};de.add(e,`impellerType`,[`FlatPropeller`,`FlatPaddle`,`InclinedPaddle`,`Turbine`,`Pfaudler`,`Anchor`,`Ribbon`,`Rushton`]).name(`種類`).onChange(t=>{let n=Math.max(e.bladeWidth,.1);switch(t){case`FlatPropeller`:case`InclinedPaddle`:case`Pfaudler`:e.mrfRadialMargin=1.1,e.mrfVerticalMarginTop=n*.5,e.mrfVerticalMarginBottom=n*1.5;break;case`FlatPaddle`:case`Turbine`:case`Rushton`:e.mrfRadialMargin=1.35,e.mrfVerticalMarginTop=n*.2+.05,e.mrfVerticalMarginBottom=n*.2+.05;break;case`Anchor`:case`Ribbon`:e.mrfRadialMargin=1.05,e.mrfVerticalMarginTop=.05,e.mrfVerticalMarginBottom=.05;break}me&&(t===`Pfaudler`?me.show():me.hide()),he&&(t===`Pfaudler`?he.show():he.hide()),window.updateAllGuiDisplays&&window.updateAllGuiDisplays(),v()}),de.add(e,`impellerDiameter`,.05,4).name(`直径 (m)`).onChange(v);let pe=de.add(e,`impellerClearance`,.05,4).name(`クリアランス (m)`).onChange(v);de.add(e,`bladeCount`,2,12,1).name(`ブレード枚数`).onChange(v),de.add(e,`bladeWidth`,.01,1).name(`ブレード幅 (m)`).onChange(v),de.add(e,`bladeAngle`,0,90).name(`角度 (度)`).onChange(v),e.pfaudlerLiftAngle===void 0&&(e.pfaudlerLiftAngle=25),e.pfaudlerSweepAngle===void 0&&(e.pfaudlerSweepAngle=35);let me=de.add(e,`pfaudlerLiftAngle`,0,60).name(`翼跳ね上げ角 (度)`).onChange(v),he=de.add(e,`pfaudlerSweepAngle`,0,60).name(`翼反り角 (度・上面視)`).onChange(v);e.impellerType!==`Pfaudler`&&(me.hide(),he.hide());let ge=null,_e=()=>{e.mirrorPlateType===`None`?(e.jacketCoverage!==`ShellOnly`&&(e.jacketCoverage=`ShellOnly`),ge&&(ge.updateDisplay(),ge.disable())):ge&&ge.enable(),window._updateInterfaceBCUI&&window._updateInterfaceBCUI()};fe(),_e();let ve={get shaftDiameterMm(){return e.shaftDiameter===void 0?0:e.shaftDiameter*1e3},set shaftDiameterMm(t){e.shaftDiameter=t<=0?void 0:t/1e3,v()}},ye=de.add(ve,`shaftDiameterMm`,0,100,.1).name(`シャフト径 (mm, 0=自動)`).onChange(()=>{});Object.defineProperty(ve,"_ctrl",{value:ye}),window._shaftDiameterProxy=ve;let be=oe.addFolder(`壁条件 (Wall / ジャケット)`);be.add(e,`jacketType`,[`None`,`Single`,`Half pipe`]).name(`ジャケット種類`).onChange(v),ge=be.add(e,`jacketCoverage`,[`Full`,`ShellOnly`]).name(`ジャケット形式 (範囲)`).onChange(()=>{window._updateInterfaceBCUI&&window._updateInterfaceBCUI(),_()}),be.add(e,`jacketTemp`,273,500,1).name(`温度 (K)`).onChange(_),be.add(e,`ua`,0,5e3,50).name(`伝熱係数 (UA)`).onChange(_),_e();let xe=oe.addFolder(`邪魔板 (Baffle)`);xe.add(e,`baffleCount`,0,8,1).name(`設置枚数`).onChange(v),xe.add(e,`baffleWidth`,.01,.5).name(`幅`).onChange(v),e.baffleGap===void 0&&(e.baffleGap=e.tankDiameter/75);let Se=xe.add(e,`baffleGap`,0,.1,.001).name(`壁との隙間 (m)`).onChange(v),Ce=()=>{let t=e.tankDiameter/50;Se&&Se.max(t),e.baffleGap>t&&(e.baffleGap=t,Se&&Se.updateDisplay())};se.controllers.forEach(e=>e.onChange(()=>{le(),fe(),Ce(),v()})),ue.controllers.forEach(e=>e.onChange(()=>{le(),fe(),_e(),v()})),Ce(),e.coilUa===void 0&&(e.coilUa=500);let we=oe.addFolder(`伝熱コイル (Heat Coil)`);we.add(e,`coilEnabled`).name(`コイルの有効化`).onChange(v),we.add(e,`coilRadius`,.01,.5).name(`管半径`).onChange(v),we.add(e,`coilTurns`,1,20,1).name(`巻き数`).onChange(v),we.add(e,`coilHeatSource`,[`Steam`,`Water`]).name(`熱媒`),we.add(e,`coilTemp`,273,500).name(`熱媒温度 (K)`).onChange(_),we.add(e,`coilUa`,0,5e3,50).name(`総括伝熱係数 U (W/m²K)`).onChange(_);let Te=new ep({title:`表示・操作パネル`});window.appGuiLeft=Te,Te.domElement.style.position=`fixed`,Te.domElement.style.top=`0px`,Te.domElement.style.right=`336px`,Te.domElement.style.left=`auto`,Te.domElement.style.width=`300px`,Te.domElement.style.maxHeight=`100vh`,Te.domElement.style.overflowY=`auto`;let Ee=Te.addFolder(`表示 (Visualization)`),De,Oe,ke,z,Ae,je,Me,B,Ne,V,Pe,Fe,Ie,Le,Re=Ee.addFolder(`攪拌槽構造の表示`);Re.addColor(e,`backgroundColor`).name(`背景色`).onChange(_),Re.add(e,`showTank`).name(`タンクの表示`).onChange(_),Re.add(e,`tankOpacity`,0,1).name(`タンクの透明度`).onChange(_),Re.add(e,`showImpeller`).name(`インペラの表示`).onChange(_),Re.add(e,`showBaffle`).name(`邪魔板の表示`).onChange(_),Re.add(e,`showCoil`).name(`コイルの表示`).onChange(_),Re.add(e,`showMRFZone`).name(`MRFゾーンの表示`).onChange(e=>{p&&p.updateDisplay(),_()}),f=Re.controllers[Re.controllers.length-1],e.showDimensions===void 0&&(e.showDimensions=!1),Re.add(e,`showDimensions`).name(`寸法を表示`).onChange(t=>{$e(t,e)});let ze=Ee.addFolder(`可視化方法の設定`);ze.add(e,`showGridMesh`).name(`メッシュの表示`).onChange(_),ze.add(e,`gridMeshStyle`,[`Wireframe`,`Points`]).name(`メッシュ表示方法`).onChange(_),ze.add(e,`crossSectionView`).name(`断面／３D切替`).onChange(t=>{t?e.showParticles&&(e.showParticleConc=!0,e.showFluidMesh=!1,e.showPressureMesh=!1):e.showParticleConc=!1,ke&&ke.updateDisplay(),De&&De.updateDisplay(),Oe&&Oe.updateDisplay(),B&&B.updateDisplay(),_()}),ze.add(e,`crossSectionType`,[`Vertical`,`Horizontal`]).name(`断面の向き`).onChange(e=>{Qe(e),_()}),Fe=ze.add(e,`crossSectionHeight`,0,1).name(`水平断面の高さ`).onChange(_),Ie=ze.add(e,`crossSectionAngle`,0,1,.01).name(`垂直断面の切り出し角度`).onChange(_),Le=ze.add(e,`crossSectionOffset`,-1,1,.01).name(`垂直断面の切り出し位置`).onChange(_),ze.add(e,`displayStyle`,[`Points`,`Contour`]).name(`メッシュ描画形式`).onChange(_),e.showGridMesh===void 0&&(e.showGridMesh=!0),e.gridMeshStyle===void 0&&(e.gridMeshStyle=`Wireframe`),ze.add(e,`showGridMesh`).name(`メッシュの表示`).onChange(_),ze.add(e,`gridMeshStyle`,[`Points`,`Wireframe`]).name(`メッシュ表示方法`).onChange(_),ze.add(e,`interpolateContour`).name(`コンターの補間 (Smooth)`).onChange(_),ze.add(e,`colorScaleMode`,[`Absolute`,`Relative`]).name(`カラースケール基準`).onChange(_);let Be=Ee.addFolder(`温度・流動・圧力の表示`);De=Be.add(e,`showFluidMesh`).name(`温度分布の表示`).onChange(t=>{t&&(e.showPressureMesh=!1,Oe.updateDisplay(),e.showParticleConc=!1,ke.updateDisplay(),e.showViscosityRegion=!1,B.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),_()}),Oe=Be.add(e,`showPressureMesh`).name(`圧力分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,De.updateDisplay(),e.showParticleConc=!1,ke.updateDisplay(),e.showViscosityRegion=!1,B.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),_()}),Be.add(e,`showVelocityVector`).name(`速度ベクトルの表示`).onChange(e=>{Ne&&(e?Ne.show():Ne.hide()),_()}),e.vectorScale===void 0&&(e.vectorScale=1),Ne=Be.add(e,`vectorScale`,.2,10,.1).name(`ベクトル長さ倍率`).onChange(_),e.showStreamlines===void 0&&(e.showStreamlines=!1),e.numStreamlines===void 0&&(e.numStreamlines=100),e.streamlineOrigin===void 0&&(e.streamlineOrigin=`impeller`);let Ve={regenerate:()=>{_()}},He,Ue,We;Be.add(e,`showStreamlines`).name(`流線の表示`).onChange(e=>{He&&(e?He.show():He.hide()),Ue&&(e?Ue.show():Ue.hide()),We&&(e?We.show():We.hide()),_()}),He=Be.add(e,`numStreamlines`,10,1e3,10).name(`流線の数`).onChange(_),Ue=Be.add(e,`streamlineOrigin`,{インペラ付近:`impeller`,"全体（均一）":`uniform`}).name(`流線の起点`).onChange(_),We=Be.add(Ve,`regenerate`).name(`流線の再配置`),setTimeout(()=>{He&&!e.showStreamlines&&He.hide(),Ue&&!e.showStreamlines&&Ue.hide(),We&&!e.showStreamlines&&We.hide()},0),e.showVelocityMesh===void 0&&(e.showVelocityMesh=!1),e.velocityComponent===void 0&&(e.velocityComponent=`speed`);let Ge;Be.add(e,`showVelocityMesh`).name(`流速分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,De&&De.updateDisplay(),e.showPressureMesh=!1,Oe&&Oe.updateDisplay(),e.showViscosityRegion=!1,B&&B.updateDisplay(),e.showParticleConc=!1,ke&&ke.updateDisplay()),Ge&&(t?Ge.show():Ge.hide()),_()}),Ge=Be.add(e,`velocityComponent`,[`speed`,`ur`,`utheta`,`uy`]).name(`速度成分`).onChange(_),setTimeout(()=>{Ge&&!e.showVelocityMesh&&Ge.hide()},0),Be.add(e,`showHighTempRegion`).name(`高温領域の表示`).onChange(e=>{V&&(e?V.show():V.hide()),_()}),V=Be.add(e,`highTempLowerLimit`,293.15,350).name(`下限温度 (K)`).onChange(_),Be.add(e,`showLowTempRegion`).name(`低温領域の表示`).onChange(e=>{Pe&&(e?Pe.show():Pe.hide()),_()}),Pe=Be.add(e,`lowTempUpperLimit`,293.15,350).name(`上限温度 (K)`).onChange(_);let Ke=Ee.addFolder(`粘度分布表示`);B=Ke.add(e,`showViscosityRegion`).name(`粘度分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,De.updateDisplay(),e.showPressureMesh=!1,Oe.updateDisplay(),e.showParticleConc=!1,ke.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),_()}),Ke.add(e,`viscosityLogScale`).name(`粘度を対数スケール表示`).onChange(_),ke=Ke.add(e,`showParticleConc`).name(`粒子濃度の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,De.updateDisplay(),e.showPressureMesh=!1,Oe.updateDisplay(),e.showViscosityRegion=!1,B.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),_()}),z=Ke.add(e,`particleConcThreshold`,0,50,.1).name(`粒子濃度下限閾値 (個/L)`).onChange(_),Ae=Ke.add(e,`particleConcMaxLimit`,1,200,1).name(`粒子濃度最大スケール (個/L)`).onChange(_),je=Ke.add(e,`currentMinConc`).name(`現在の最低濃度 (個/L)`).listen().disable(),Me=Ke.add(e,`currentMaxConc`).name(`現在の最高濃度 (個/L)`).listen().disable();let qe=Ee.addFolder(`フロートパネル表示`);qe.add(e,`showCFDMonitor`).name(`CFD計算モニタの表示`).listen(),e.showHelpTooltips===void 0&&(e.showHelpTooltips=!1),qe.add(e,`showHelpTooltips`).name(`ヘルプチップの表示`).listen().onChange(e=>{e||ap()}),e.showOperatingConditions===void 0&&(e.showOperatingConditions=!0);let Je,Ye,Xe=!1,Ze=t=>{if(!Xe){Xe=!0;try{let n=document.getElementById(`color-bar-container`);t===`colorbar`?(e.showColorBar=!0,e.showOperatingConditions=!1,n&&(n.style.display=``),typeof window._switchCbTab==`function`&&window._switchCbTab(`colorbar`)):t===`opcond`?(e.showColorBar=!1,e.showOperatingConditions=!0,n&&(n.style.display=``),typeof window._switchCbTab==`function`&&window._switchCbTab(`opcond`)):(e.showColorBar=!1,e.showOperatingConditions=!1,n&&(n.style.display=`none`)),Je&&Je.updateDisplay(),Ye&&Ye.updateDisplay()}finally{Xe=!1}}};window._syncCbPanel=Ze,Je=qe.add(e,`showColorBar`).name(`カラーバーの表示`).listen().onChange(t=>{Ze(t?`colorbar`:e.showOperatingConditions?`opcond`:null)}),Ye=qe.add(e,`showOperatingConditions`).name(`操作条件を表示`).listen().onChange(t=>{Ze(t?`opcond`:e.showColorBar?`colorbar`:null)}),e.showColorBar?Ze(`colorbar`):e.showOperatingConditions?Ze(`opcond`):Ze(null),e.crossSectionAngle===void 0&&(e.crossSectionAngle=.125),e.crossSectionOffset===void 0&&(e.crossSectionOffset=0);let Qe=t=>{let n=(t||e.crossSectionType)===`Vertical`;Ie&&(n?Ie.show():Ie.hide()),Le&&(n?Le.show():Le.hide()),Fe&&(n?Fe.hide():Fe.show())};window.updateCrossSectionSliders=Qe,setTimeout(()=>{Qe(e.crossSectionType),Ne&&(e.showVelocityVector?Ne.show():Ne.hide()),V&&(e.showHighTempRegion?V.show():V.hide()),Pe&&(e.showLowTempRegion?Pe.show():Pe.hide())},50);function $e(e,t){let n=document.getElementById(`dimension-overlay`);if(!e){n&&(n.style.display=`none`);return}n||(n=document.createElement(`div`),n.id=`dimension-overlay`,n.style.cssText=[`position:fixed`,`top:0`,`left:0`,`width:100%`,`height:100%`,`pointer-events:none`,`z-index:90`,`overflow:hidden`].join(`;`),document.body.appendChild(n)),n.style.display=`block`,n.innerHTML=H(t)}window._updateDimensionOverlay=$e;function H(e){let t=window.innerWidth,n=window.innerHeight,r=(e.tankDiameter||1)/2,a=e.tankHeight||1,o=e.liquidHeight||1,s=e.impellerDiameter||.3,c=s/2,l=e.bladeWidth||.05,u=e.impellerClearance||.1,d=e.coilEnabled,f=e.coilTurns||3,p=(e.tankDiameter||1)*.75,m=-Yd.getMirrorDepth(e),h=Yd.getImpellerCenterY(e),g=`#00e5ff`,_=`#ffffff`,v=(e,t,n)=>{try{return Ff(e,t,n)}catch{return null}},y=(e,t,n,r=1,a=26)=>{let o=v(e[0],e[1],e[2]),s=v(t[0],t[1],t[2]);if(!o||!s)return``;let c=s.x-o.x,l=s.y-o.y,u=Math.hypot(c,l)||1,d=-l/u*r,f=c/u*r,p={x:o.x+d*a,y:o.y+f*a},m={x:s.x+d*a,y:s.y+f*a},h=(p.x+m.x)/2+d*10,y=(p.y+m.y)/2+f*10;return`<line x1="${o.x.toFixed(1)}" y1="${o.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="${g}" stroke-width="1" stroke-dasharray="3,3"/><line x1="${s.x.toFixed(1)}" y1="${s.y.toFixed(1)}" x2="${m.x.toFixed(1)}" y2="${m.y.toFixed(1)}" stroke="${g}" stroke-width="1" stroke-dasharray="3,3"/><line x1="${p.x.toFixed(1)}" y1="${p.y.toFixed(1)}" x2="${m.x.toFixed(1)}" y2="${m.y.toFixed(1)}" stroke="${g}" stroke-width="1.5" marker-start="url(#arr)" marker-end="url(#arr)"/><circle cx="${o.x.toFixed(1)}" cy="${o.y.toFixed(1)}" r="2.5" fill="${g}"/><circle cx="${s.x.toFixed(1)}" cy="${s.y.toFixed(1)}" r="2.5" fill="${g}"/><text x="${h.toFixed(1)}" y="${y.toFixed(1)}" fill="${_}" font-size="11" font-family="monospace" text-anchor="middle">${n}</text>`},b=(e,t,n=26,r=-10)=>{let a=v(e[0],e[1],e[2]);if(!a)return``;let o={x:a.x+n,y:a.y+r},s={x:o.x+5,y:o.y};return`<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${o.x.toFixed(1)}" y2="${o.y.toFixed(1)}" stroke="${g}" stroke-width="1" stroke-dasharray="4,3"/><line x1="${o.x.toFixed(1)}" y1="${o.y.toFixed(1)}" x2="${s.x.toFixed(1)}" y2="${s.y.toFixed(1)}" stroke="${g}" stroke-width="1"/><circle cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="2.5" fill="${g}"/><text x="${s.x.toFixed(1)}" y="${(s.y-4).toFixed(1)}" fill="${_}" font-size="11" font-family="monospace" text-anchor="start">${t}</text>`},x=e=>e.toFixed(3),S=[];S.push(y([-r,a,0],[r,a,0],`D=${x(e.tankDiameter||1)}m`,-1)),S.push(y([r,0,0],[r,a,0],`H=${x(a)}m`,1)),S.push(y([-r,0,0],[-r,o,0],`Liq=${x(o)}m`,-1)),S.push(y([-c,h,0],[c,h,0],`d=${x(s)}m`,1,36)),S.push(y([c,h-l/2,0],[c,h+l/2,0],`w=${x(l)}m`,1,20));let C=(c+r)/2;return S.push(y([C,m,0],[C,m+u,0],`C=${x(u)}m`,1,18)),d&&S.push(b([p/2,o/2,0],`coil φ${x(p)}m×${f}turns`)),`<svg width="${t}" height="${n}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="${g}" stroke-width="0.8"/>
    </marker>
  </defs>
  ${S.join(`
  `)}
</svg>`}function U(t){let n=document.getElementById(`operating-conditions-window`);if(!t){n&&(n.style.display=`none`);return}if(!n){n=document.createElement(`div`),n.id=`operating-conditions-window`,n.style.cssText=[`position:fixed`,`top:80px`,`right:310px`,`width:260px`,`background:rgba(15,15,20,0.92)`,`border:1px solid rgba(0,200,255,0.35)`,`border-radius:8px`,`box-shadow:0 4px 20px rgba(0,0,0,0.6)`,`z-index:200`,`font-family:monospace`,`font-size:11px`,`color:#ccc`,`user-select:none`].join(`;`);let t=document.createElement(`div`);t.style.cssText=[`background:rgba(0,180,255,0.18)`,`padding:5px 10px`,`border-radius:7px 7px 0 0`,`cursor:move`,`display:flex`,`align-items:center`,`justify-content:space-between`].join(`;`),t.innerHTML=`<span style="color:#00e5ff;font-weight:bold;font-size:11px;">⚙ 操作条件</span><button id="op-cond-close" style="background:none;border:none;color:#aaa;cursor:pointer;font-size:14px;padding:0 2px;">✕</button>`;let r=document.createElement(`div`);r.id=`op-cond-body`,r.style.cssText=`padding:8px 10px;line-height:1.7;`,n.appendChild(t),n.appendChild(r),document.body.appendChild(n),document.getElementById(`op-cond-close`).onclick=()=>{e.showOperatingConditions=!1,n.style.display=`none`,window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.makeCFDPanelDraggable?window.makeCFDPanelDraggable(n,t):t.addEventListener(`mousedown`,e=>{let t=e.clientX-n.offsetLeft,r=e.clientY-n.offsetTop,a=e=>{n.style.left=e.clientX-t+`px`,n.style.top=e.clientY-r+`px`,n.style.right=`auto`},o=()=>{document.removeEventListener(`mousemove`,a),document.removeEventListener(`mouseup`,o)};document.addEventListener(`mousemove`,a),document.addEventListener(`mouseup`,o)})}n.style.display=`block`,et()}window._toggleOperatingConditionsWindow=U;function et(){let t=document.getElementById(`color-bar-container`),n=document.getElementById(`cb-tab-opcond`),r=document.getElementById(`operating-conditions-window`),a=!!(t&&t.style.display!==`none`&&n&&n.style.display!==`none`),o=!!(r&&r.style.display!==`none`);if(!a&&!o)return;let s=document.getElementById(`op-cond-body`);if(!s)return;let c=e,l=(e,t=2)=>e!=null&&!isNaN(e)?Number(e).toFixed(t):`—`,u=e=>l(e,2)+` K`,d=c.currentAvgTemp===void 0?c.initialTemp:c.currentAvgTemp,f=c.currentMinTemp,p=c.currentMaxTemp,m=c.currentAvgViscosity===void 0?c.viscosity:c.currentAvgViscosity,h=c.currentMinViscosity,g=c.currentMaxViscosity,_=c.currentAvgVelocity,v=c.currentMaxVelocity,y=c.currentMinVelocity,b=c.currentAvgPressure,x=c.currentMaxPressure,S=c.currentMinPressure,C=(e,t,n=`#eee`)=>`<tr><td style="color:#89b;padding-right:8px;white-space:nowrap;">${e}</td><td style="color:${n};text-align:right;">${t}</td></tr>`,w=e=>`<tr><td colspan="2" style="color:#00e5ff;padding-top:5px;padding-bottom:1px;font-weight:bold;border-top:1px solid rgba(255,255,255,0.1);">${e}</td></tr>`;s.innerHTML=`<table style="width:100%;border-collapse:collapse;">
      ${w(`🌡 温度条件`)}
      ${C(`攪拌液初期温度`,u(c.initialTemp))}
      ${C(`ジャケット温度`,c.jacketType===`None`?`—`:u(c.jacketTemp))}
      ${C(`コイル温度`,c.coilEnabled?u(c.coilTemp):`—`)}
      ${w(`🔄 回転数`)}
      ${C(`目標回転数`,l(c.rpm,0)+` RPM`)}
      ${w(`🌡 現在の液温`)}
      ${C(`平均`,u(d),`#ffcc66`)}
      ${C(`最高`,typeof p==`number`?u(p):`—`,`#ff6666`)}
      ${C(`最低`,typeof f==`number`?u(f):`—`,`#66aaff`)}
      ${w(`💧 現在の粘度`)}
      ${C(`平均 (Pa·s)`,typeof m==`number`?l(m,4):`—`,`#ffcc66`)}
      ${C(`最大 (Pa·s)`,typeof g==`number`?l(g,4):`—`,`#ff6666`)}
      ${C(`最小 (Pa·s)`,typeof h==`number`?l(h,4):`—`,`#66aaff`)}
      ${w(`💨 現在の速度`)}
      ${C(`平均 (m/s)`,typeof _==`number`?l(_,3):`—`,`#ffcc66`)}
      ${C(`最大 (m/s)`,typeof v==`number`?l(v,3):`—`,`#ff6666`)}
      ${C(`最小 (m/s)`,typeof y==`number`?l(y,3):`—`,`#66aaff`)}
      ${w(`📊 現在の圧力`)}
      ${C(`平均 (Pa)`,typeof b==`number`?l(b,1):`—`,`#ffcc66`)}
      ${C(`最大 (Pa)`,typeof x==`number`?l(x,1):`—`,`#ff6666`)}
      ${C(`最小 (Pa)`,typeof S==`number`?l(S,1):`—`,`#66aaff`)}
    </table>`}window._refreshOperatingConditions=et,setInterval(()=>{e.showOperatingConditions&&et(),e.showDimensions&&$e(!0,e)},500);let tt=Te.addFolder(`視点操作 (Camera View)`);tt.add(e,`usePerspective`).name(`パース (遠近感)`).onChange(()=>{Pf()}),tt.add(e,`viewVerticalTemp`).name(`垂直断面を正面から見る`),tt.add(e,`viewHorizontalCross`).name(`水平断面を真上から見る`),tt.add({resetView:()=>{Af(),kf(`None`),e.gizmoMode=`None`,window.dispatchEvent(new Event(`gizmo-deselected`)),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}},`resetView`).name(`🔄 表示を初期化 (位置・スケールリセット)`),window.addEventListener(`gizmo-deselected`,()=>{window.updateAllGuiDisplays&&window.updateAllGuiDisplays()});let nt=L.addFolder(`粒子追跡 (DPM)`);nt.add(e,`dpmTrailMode`,[`CurrentOnly`,`Trail`]).name(`表示モード`).onChange(()=>{window.dpmParticles=[]}),nt.add(e,`dpmMaxTrailLength`,5,200,1).name(`軌跡の長さ (フレーム数)`);let rt=nt.add(e,`crystallizationTemp`,273.15,373.15,.1).name(`生成開始温度 (K)`).onChange(()=>{Nf()});d=function(){e.particleDistributionType===`Uniform`?u.hide():u.show(),e.particlePlacementType===`LowTemp`?rt.show():rt.hide(),e.showParticles?(ke&&ke.show(),z&&z.show(),Ae&&Ae.show(),je&&je.show(),Me&&Me.show(),e.crossSectionView&&(e.showParticleConc=!0,e.showFluidMesh=!1,e.showPressureMesh=!1,e.showViscosityRegion=!1,e.showVelocityMesh=!1,ke&&ke.updateDisplay(),De&&De.updateDisplay(),Oe&&Oe.updateDisplay(),B&&B.updateDisplay())):(ke&&ke.hide(),z&&z.hide(),Ae&&Ae.hide(),je&&je.hide(),Me&&Me.hide(),e.showParticleConc&&(e.showParticleConc=!1,ke&&ke.updateDisplay(),e.showFluidMesh=!0,De&&De.updateDisplay()))},nt.add(e,`particlePlacementType`,[`Uniform`,`Floating`,`Sedimented`,`LowTemp`]).name(`初期配置パターン`).onChange(()=>{d(),Nf()}),d(),window.updateDpmUI=d,nt.add(e,`particleCount`,100,5e3,100).name(`表示粒子数`).onChange(()=>{Nf()}),nt.add({reset:()=>{Nf()}},`reset`).name(`粒子を再配置`);let it=new ep({title:`計算条件設定`});window.appGuiConditions=it;let at=it.domElement;at.style.position=`fixed`,at.style.top=`0px`,at.style.right=`36px`,at.style.left=`auto`,at.style.width=`300px`,at.style.zIndex=`120`,at.style.maxHeight=`100vh`,at.style.overflowY=`auto`;let ot=at.querySelector(`.title`);ot&&window.makeCFDPanelDraggable&&window.makeCFDPanelDraggable(at,ot);let st=it.addFolder(`1. 物理モデル (Physical Models)`);st.add(e,`fluidModel`,[`Newtonian`,`Power-law`,`Bingham`,`Herschel-Bulkley`]).name(`流体モデル`).onChange(()=>{c(),_()}),st.add(e,`turbulenceModel`,[`Constant`,`MixingLength`,`k-epsilon`,`RNG k-epsilon`]).name(`乱流モデル`).onChange(()=>{c(),_()}),st.add(e,`energyEquation`).name(`伝熱・エネルギー`).disable(),st.add(e,`multiphaseModel`).name(`多相流 (Multiphase)`).disable(),st.add(e,`timeDependence`).name(`時間依存性`).disable(),c=()=>{let t=e.fluidModel;t===`Newtonian`||t===`Bingham`?b.show():b.hide(),t===`Bingham`?b.name(`塑性粘度 (Pa・s)`):b.name(`粘度 (Pa・s)`),t===`Power-law`||t===`Herschel-Bulkley`?x.show():x.hide(),t===`Power-law`||t===`Herschel-Bulkley`?S.show():S.hide(),t===`Bingham`||t===`Herschel-Bulkley`?C.show():C.hide(),t===`Power-law`||t===`Bingham`||t===`Herschel-Bulkley`?(w.show(),T.show()):(w.hide(),T.hide()),e.turbulenceModel===`Constant`?E.show():E.hide(),e.turbulenceModel===`RNG k-epsilon`?e._solverTurbModel=`RNG-k-epsilon`:e._solverTurbModel=e.turbulenceModel},c(),window.updateCondFlowUI=c;let ct=it.addFolder(`2. 境界条件 (Boundary Conditions)`),W=ct.addFolder(`MRF回転ゾーン (MRF Zone)`);p=W.add(e,`showMRFZone`).name(`MRFゾーンの表示`).onChange(e=>{f&&f.updateDisplay(),_()}),W.add(e,`mrfRadialMargin`,1,2,.01).name(`半径マージン`).onChange(v),W.add(e,`mrfVerticalMarginTop`,0,1,.01).name(`上部マージン`).onChange(v),W.add(e,`mrfVerticalMarginBottom`,0,1,.01).name(`下部マージン`).onChange(v);let lt=ct.addFolder(`圧力基準点 (Reference Pressure)`),ut,dt,ft,pt=()=>{let t=e.referencePressureType===`Custom`;ut&&(t?ut.show():ut.hide()),dt&&(t?dt.show():dt.hide()),ft&&(t?ft.show():ft.hide())};lt.add(e,`referencePressureType`,[`LiquidSurface`,`TopCenter`,`BottomCenter`,`Custom`]).name(`基準点タイプ`).onChange(()=>{pt(),_()}),lt.add(e,`referencePressureValue`,-1e5,1e5,1).name(`基準ゲージ圧 (Pa)`).onChange(_),ut=lt.add(e,`refPressCustomR`,0,2,.01).name(`半径 r (m)`).onChange(_),dt=lt.add(e,`refPressCustomTheta`,0,360,1).name(`角度 θ (deg)`).onChange(_),ft=lt.add(e,`refPressCustomY`,0,4,.01).name(`高さ y (m)`).onChange(_),pt(),window.updateRefPressUI=pt;let mt=ct.addFolder(`界面別境界条件 (Interfaces)`),ht=(t,n,r,a,o=`fixedFluxPressure`,s=293.15)=>{e[`bc_type_${t}`]===void 0&&(e[`bc_type_${t}`]=n),e[`bc_fluid_${t}`]===void 0&&(e[`bc_fluid_${t}`]=r),e[`bc_heat_${t}`]===void 0&&(e[`bc_heat_${t}`]=a),e[`bc_press_${t}`]===void 0&&(e[`bc_press_${t}`]=o),e[`${t}Press`]===void 0&&(e[`${t}Press`]=0),(t===`impeller`||t===`rod`||t===`baffle`||t===`surface`)&&(e[`${t}Temp`]===void 0&&(e[`${t}Temp`]=s),t===`surface`&&e.surfaceUa===void 0&&(e.surfaceUa=500))};ht(`jacket`,`wall`,`noSlip`,`externalWallHeatTransfer`,`fixedFluxPressure`),ht(`bottomHead`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ht(`coil`,`wall`,`noSlip`,`externalWallHeatTransfer`,`fixedFluxPressure`),ht(`impeller`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ht(`rod`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ht(`baffle`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ht(`surface`,`symmetry`,`slip`,`zeroGradient`,`totalPressure`);let gt=(t,n,r=!1)=>{let a=mt.addFolder(t);a.add(e,`bc_type_${n}`,[`patch`,`wall`,`symmetryPlane`,`symmetry`]).name(`境界タイプ`).onChange(()=>{p(),_()});let o=r?[`noSlip`,`movingWallVelocity`,`slip`,`fixedValue`,`zeroGradient`]:[`noSlip`,`slip`,`fixedValue`,`zeroGradient`],s=a.add(e,`bc_fluid_${n}`,o).name(`流体条件`).onChange(_),c=a.add(e,`bc_press_${n}`,[`fixedFluxPressure`,`totalPressure`,`fixedValue`,`zeroGradient`]).name(`圧力条件`).onChange(()=>{p(),_()}),l=a.add(e,`${n}Press`,-1e5,1e5,1).name(`固定圧力 (Pa)`).onChange(_),u=a.add(e,`bc_heat_${n}`,[`fixedValue`,`zeroGradient`,`externalWallHeatTransfer`]).name(`熱条件`).onChange(()=>{p(),_()}),d,f;n===`jacket`?(d=a.add(e,`jacketTemp`,273,500,1).name(`壁面温度 T (K)`).onChange(_),f=a.add(e,`ua`,0,5e3,50).name(`伝熱係数 UA (W/m²K)`).onChange(_)):n===`bottomHead`?(d=a.add(e,`bottomHeadTemp`,273,500,1).name(`壁面温度 T (K)`).onChange(_),f=a.add(e,`bottomHeadUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(_)):n===`coil`?(d=a.add(e,`coilTemp`,273,500,1).name(`コイル温度 T (K)`).onChange(_),f=a.add(e,`coilUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(_)):n===`surface`?(d=a.add(e,`surfaceTemp`,273.15,500,1).name(`壁面温度 T (K)`).onChange(_),f=a.add(e,`surfaceUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(_)):d=a.add(e,`${n}Temp`,273.15,500,1).name(`壁面温度 T (K)`).onChange(_);let p=()=>{let t=e[`bc_type_${n}`];t===`symmetryPlane`||t===`symmetry`?(e[`bc_fluid_${n}`]=`slip`,s.setValue(`slip`).disable(),e[`bc_heat_${n}`]=`zeroGradient`,u.setValue(`zeroGradient`).disable(),e[`bc_press_${n}`]=`zeroGradient`,c.setValue(`zeroGradient`).disable()):(s.enable(),u.enable(),c.enable());let r=e[`bc_press_${n}`];l&&((r===`fixedValue`||r===`totalPressure`)&&(t===`wall`||t===`patch`)?l.show():l.hide());let o=e[`bc_heat_${n}`],p=(o===`fixedValue`||o===`externalWallHeatTransfer`)&&(t===`wall`||t===`patch`),m=o===`externalWallHeatTransfer`&&(t===`wall`||t===`patch`);d&&(p?d.show():d.hide()),f&&(m?f.show():f.hide()),n===`bottomHead`&&((!e.mirrorPlateType||e.mirrorPlateType===`None`?`ShellOnly`:e.jacketCoverage||`Full`)===`ShellOnly`?a.show():a.hide())};return p(),a.close(),p},_t=[];_t.push(gt(`ジャケット (Jacket)`,`jacket`,!1)),_t.push(gt(`底部鏡板 (Bottom Head)`,`bottomHead`,!1)),_t.push(gt(`伝熱コイル (Coil)`,`coil`,!1)),_t.push(gt(`インペラ (Impeller)`,`impeller`,!0)),_t.push(gt(`シャフト (Rod / Shaft)`,`rod`,!0)),_t.push(gt(`邪魔板 (Baffle)`,`baffle`,!1)),_t.push(gt(`水面 (Water Surface)`,`surface`,!1)),window._updateInterfaceBCUI=()=>_t.forEach(e=>e&&e()),_e();let vt=it.addFolder(`3. 初期・運転条件 (Initial & Operating)`);vt.add(e,`initialTemp`,273.15,373.15,.1).name(`攪拌液初期温度 (K)`).onChange(_),vt.add(e,`rpm`,0,1e3,10).name(`MRF回転数 (RPM)`).onChange(_);let yt=it.addFolder(`4. ソルバー・計算条件 (Solver Settings)`),bt=yt.addFolder(`計算メッシュ (Mesh)`);bt.add(e,`meshNr`,10,150,1).name(`半径方向分割数 (r)`).onChange(v),bt.add(e,`meshNtheta`,12,180,4).name(`円周方向分割数 (θ)`).onChange(v),bt.add(e,`meshNy`,10,200,1).name(`高さ方向分割数 (y)`).onChange(v),bt.add(e,`blLayers`,0,10,1).name(`境界層の層数`).onChange(v),bt.add(e,`blThickness`,.001,.1,.001).name(`境界層全体の厚み (m)`).onChange(v),bt.add(e,`blExpansionRatio`,1.05,2,.05).name(`境界層の拡大率`).onChange(v),bt.add({applyMesh:()=>{let t=e.meshNr*e.meshNtheta*e.meshNy;if(t>1e6){let n=e.computationMode===`GPU (WebGPU)`?`GPU (WebGPU)`:`CPU`;if(!confirm(`メッシュ総セル数が ${t.toLocaleString()} と非常に大きいです。\n現在の計算モード: ${n}\n`+(n===`CPU`?`CPUモードでは1ステップに数分以上かかる可能性があります。続行しますか？`:`GPUモードでもメモリ・処理時間が大幅に増加します。続行しますか？`)))return}e.resetSimulation&&e.resetSimulation()}},`applyMesh`).name(`メッシュ適用 (リセット)`);let xt=yt.addFolder(`緩和係数 (Relaxation)`);xt.add(e,`relaxU`,.05,1,.05).name(`速度緩和係数 (relax U)`).onChange(_),xt.add(e,`relaxP`,.05,1,.05).name(`圧力緩和係数 (relax P)`).onChange(_),xt.add(e,`relaxT`,.05,1,.05).name(`温度緩和係数 (relax T)`).onChange(_),xt.add(e,`relaxK`,.05,1,.05).name(`乱流緩和係数 (relax k)`).onChange(_);let St=yt.addFolder(`数値スキーム (Schemes)`);St.add(e,`cfdScheme`).name(`計算スキーム`).disable(),St.add(e,`discretization`).name(`空間離散化手法`).disable(),yt.add({applyGeom:()=>{e.resetSimulation&&e.resetSimulation()}},`applyGeom`).name(`形状・計算条件適用 (リセット)`);let Ct=()=>{let t=document.getElementById(`cfd-monitor`);if(!t||document.getElementById(`cfd-monitor-extra`))return;let n=document.createElement(`div`);n.id=`cfd-monitor-extra`,n.style.cssText=`display:flex;gap:4px;flex-wrap:wrap;padding:6px 8px 4px;border-top:1px solid rgba(255,255,255,0.12);margin-top:4px;`;let r=`flex:1;min-width:0;padding:3px 6px;font-size:11px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#ccc;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,a=document.createElement(`button`);a.textContent=`📖 理論`,a.title=`理論式と数値解法の解説`,a.style.cssText=r,a.onclick=()=>{let e=document.getElementById(`theory-modal`);e&&(e.style.display=`block`)};let o=document.createElement(`button`);o.textContent=`💡 ヘルプ`,o.title=`UI設定項目のヘルプ`,o.style.cssText=r,o.onclick=()=>{let e=document.getElementById(`ui-help-modal`);e&&(e.style.display=`block`)};let s=document.createElement(`button`);s.textContent=`💾 保存`,s.title=`設定をJSONファイルに保存`,s.style.cssText=r,s.onclick=()=>{let t={};for(let n in e)typeof e[n]!=`function`&&(t[n]=e[n]);let n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),a=document.createElement(`a`);a.href=r,a.download=`stirred-tank-cfd_${new Date().toISOString().replace(/[:.]/g,`-`).slice(0,19)}.json`,a.click(),URL.revokeObjectURL(r)};let c=document.createElement(`button`);c.textContent=`📂 読込`,c.title=`設定ファイルを読み込む (.json)`,c.style.cssText=r,c.onclick=()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json,application/json`,t.onchange=t=>{let n=t.target.files[0];if(!n)return;let r=new FileReader;r.onload=t=>{try{let n=JSON.parse(t.target.result);for(let t in n)t in e&&typeof e[t]!=`function`&&(e[t]=n[t]);e.meshNtheta&&=Math.round(e.meshNtheta/4)*4;let r=Number(e.tankHeight||1)+Number(Yd.getMirrorDepth(e));e.liquidHeight>r&&(e.liquidHeight=r),Nf(),jf(e),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}catch(e){alert(`読み込み失敗: `+e.message)}},r.readAsText(n)},t.click()},n.appendChild(a),n.appendChild(o),n.appendChild(s),n.appendChild(c),t.appendChild(n)};Ct();let wt=setInterval(()=>{if(document.getElementById(`cfd-monitor-extra`)){clearInterval(wt);return}Ct()},500),Tt=()=>{try{let t={};for(let n in e)typeof e[n]!=`function`&&(t[n]=e[n]);localStorage.setItem(`stirredTankParams`,JSON.stringify(t))}catch{}rp(),l()};n.onChange(Tt),Te.onChange(Tt),it.onChange(Tt),r.onChange(Tt),np({gui:n,guiFluidProps:r,guiConditions:it,guiLeft:Te}),setTimeout(op,500)}function np({gui:e,guiFluidProps:t,guiConditions:n,guiLeft:r}){let a=(()=>{try{let e=parseInt(localStorage.getItem(`cfd_panel_width`),10);return!isNaN(e)&&e>=180&&e<=700?e:300}catch{return 300}})(),o=[{id:`geom`,label:`形状設定`,icon:`🔧`,panel:e.domElement},{id:`fluid`,label:`物性設定`,icon:`💧`,panel:t.domElement},{id:`cond`,label:`計算条件`,icon:`⚙️`,panel:n.domElement},{id:`vis`,label:`表示設定`,icon:`👁️`,panel:r.domElement}];if([`side-tab-bar-right`,`side-tab-bar-left`,`panel-resize-handle`].forEach(e=>{let t=document.getElementById(e);t&&t.remove()}),!document.getElementById(`side-tab-style`)){let e=document.createElement(`style`);e.id=`side-tab-style`,e.textContent=`
      .side-tab-btn {
        width:30px; height:76px; border:none; cursor:pointer;
        border-radius:6px; display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:4px;
        background:transparent; color:rgba(180,195,210,0.5);
        font-family:sans-serif; line-height:1.2;
        transition:background 0.15s, color 0.15s, box-shadow 0.15s;
        padding:4px 2px;
      }
      .side-tab-btn .tab-icon  { font-size:15px; line-height:1; }
      .side-tab-btn .tab-label {
        writing-mode:vertical-rl; text-orientation:mixed;
        font-size:8px; white-space:nowrap;
        max-height:44px; overflow:hidden;
      }
      .side-tab-btn:hover  { background:rgba(255,255,255,0.07); color:#c8ddf0; }
      .side-tab-btn.active {
        background:rgba(99,179,237,0.15); color:#90cdf4;
        box-shadow:inset 3px 0 0 #63b3ed;
      }
      #panel-resize-handle {
        position:fixed; top:0; bottom:0; width:6px;
        cursor:col-resize; z-index:300;
        background:transparent;
        transition:background 0.12s;
      }
      #panel-resize-handle:hover,
      #panel-resize-handle.dragging {
        background:rgba(0,210,255,0.28);
      }
      #panel-resize-handle::after {
        content:'';
        position:absolute; top:50%; left:50%;
        transform:translate(-50%,-50%);
        width:2px; height:40px; border-radius:2px;
        background:rgba(0,210,255,0.55);
        opacity:0; transition:opacity 0.12s;
      }
      #panel-resize-handle:hover::after,
      #panel-resize-handle.dragging::after { opacity:1; }
    `,document.head.appendChild(e)}function s(e){a=Math.round(Math.max(180,Math.min(700,e))),o.forEach(e=>{e.panel.style.width=a+`px`,e.panel.style.setProperty(`--width`,a+`px`)});let t=document.getElementById(`panel-resize-handle`);t&&(t.style.left=36+a-3+`px`);try{localStorage.setItem(`cfd_panel_width`,a)}catch{}}let c=document.createElement(`div`);c.id=`side-tab-bar-left`,c.style.cssText=[`position:fixed`,`top:0`,`left:0`,`bottom:0`,`width:36px`,`z-index:200`,`display:flex`,`flex-direction:column`,`align-items:center`,`padding-top:12px`,`gap:6px`,`background:rgba(18,18,26,0.94)`,`backdrop-filter:blur(8px)`,`border-right:1px solid rgba(255,255,255,0.07)`,`box-shadow:2px 0 16px rgba(0,0,0,0.5)`].join(`;`);let l=document.createElement(`div`);l.id=`panel-resize-handle`,l.style.display=`none`,l.addEventListener(`mousedown`,e=>{l.classList.add(`dragging`);let t=e.clientX,n=a,r=e=>{s(n+e.clientX-t)},o=()=>{l.classList.remove(`dragging`),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseup`,o)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,o),e.preventDefault()}),document.body.appendChild(l);let u=o[0].id,d=new Map;function f(){let e=!1;o.forEach(t=>{let n=t.id===u;t.panel.style.display=n?``:`none`,n&&(e=!0,t.panel.style.position=`fixed`,t.panel.style.left=`36px`,t.panel.style.right=`auto`,t.panel.style.top=`0px`,t.panel.style.width=a+`px`,t.panel.style.setProperty(`--width`,a+`px`));let r=d.get(t.id);r&&r.classList.toggle(`active`,n)}),l.style.display=e?`block`:`none`,l.style.left=36+a-3+`px`}o.forEach(e=>{let t=document.createElement(`button`);t.className=`side-tab-btn`+(e.id===u?` active`:``),t.title=e.label,t.innerHTML=`<span class="tab-icon">${e.icon}</span><span class="tab-label">${e.label}</span>`,t.addEventListener(`click`,()=>{u=u===e.id?null:e.id,f()}),d.set(e.id,t),c.appendChild(t)}),document.body.appendChild(c),s(a),f()}function rp(){let e=t=>{t&&(t.controllers.forEach(e=>e.updateDisplay()),t.folders.forEach(t=>e(t)))};if(window.appGui&&e(window.appGui),window.appGuiLeft&&e(window.appGuiLeft),window.appGuiConditions&&e(window.appGuiConditions),window.appGuiFluidProps&&e(window.appGuiFluidProps),typeof window.updateTempDepUI==`function`&&window.updateTempDepUI(),typeof window.updateCondFlowUI==`function`&&window.updateCondFlowUI(),typeof window.updateDpmUI==`function`&&window.updateDpmUI(),typeof window.updateRefPressUI==`function`&&window.updateRefPressUI(),typeof window.updateCrossSectionSliders==`function`&&window.updateCrossSectionSliders(),typeof window._updateInterfaceBCUI==`function`&&window._updateInterfaceBCUI(),window.appParams&&typeof window._syncCbPanel==`function`){let e=window.appParams;e.showColorBar?window._syncCbPanel(`colorbar`):e.showOperatingConditions?window._syncCbPanel(`opcond`):window._syncCbPanel(null)}typeof window._refreshOperatingConditions==`function`&&window._refreshOperatingConditions(),typeof window.updateCameraProjection==`function`&&window.updateCameraProjection()}window.updateAllGuiDisplays=rp;var ip={タンク直径:`攪拌槽の内径（横幅）を設定します。`,タンク直胴部高さ:`タンクの円筒部分（ストレート部）の高さです。`,タンク直胴高さ:`タンクの円筒部分（ストレート部）の高さです。`,タンク直線部高さ:`タンクの円筒部分（ストレート部）の高さです。`,"液深 (総高さ)":`タンク内に注入されている液体の初期高さです。`,"液深 (液高さ)":`タンク内に注入されている液体の初期高さです。`,"液深 (高さ)":`タンク内に注入されている液体の初期高さです。`,形状タイプ:`タンク底部の形状を選択します。`,種類:`使用する攪拌翼の種類を選択します。`,"直径 (m)":`攪拌翼の先端から先端までの外径です。`,"クリアランス (m)":`タンクの最底部から攪拌翼の下端までの距離（設置高さ）です。`,ブレード枚数:`攪拌翼の羽根の数です。`,"ブレード幅 (m)":`羽根1枚あたりの幅（高さ方向の寸法など）です。`,"角度 (度)":`羽根に傾き（ピッチ）がある場合の傾斜角度です。`,"シャフト径 (mm, 0=自動)":`翼を回す中心の軸（シャフト）の太さです。0 にすると自動で適切な太さに設定されます。`,ジャケット種類:`タンクの外側を覆う加熱・冷却用ジャケットの有無や形式を設定します。`,"ジャケット形式 (範囲)":`ジャケットの伝熱面積の範囲です。「Full」=フルジャケット(胴部+底部鏡板)、「ShellOnly」=胴ジャケット(胴部のみ)。底部鏡板形状が「None」(フラット底)の場合は鏡板自体が無いため自動的にShellOnlyになります。`,"温度 (K)":`ジャケット等の温度です。`,"伝熱係数 (UA)":`ジャケットからタンク内部への熱の伝わりやすさを表す総合伝熱値です。`,設置枚数:`液の共回りを防ぎ、上下攪拌を促すために壁面に設置する板（バッフル）の枚数です。`,幅:`邪魔板（バッフル）の幅です。`,コイルの有効化:`タンク内部に加熱・冷却用のチューブ（コイル）を設置するかどうかの切り替えです。`,管半径:`コイルに使用するパイプの半径です。`,巻き数:`コイルが何重に巻かれているかという回数です。`,熱媒:`コイル内に流す流体の種類です。`,"熱媒温度 (K)":`コイル内を流れる熱媒の温度です。`,"総括伝熱係数 U (W/m²K)":`コイルから液への熱の伝わりやすさを表す係数です。`,"密度 (kg/m³)":`液体の単位体積あたりの重さです（1000は水と同等）。`,"一貫性係数 K":`非ニュートン流体の粘性を決める係数（稠度係数）です。`,"流動挙動指数 n":`流体の性質を表す指数です。1でニュートン、1未満で擬塑性、1超でダイラタンシーになります。`,"比熱 (J/kg・K)":`液体の温まりにくさを表す熱容量です。`,"熱伝導率 (W/m・K)":`液体内部の熱の伝わりやすさです。`,"乱流強度 (Turbulence)":`乱流によって発生する見かけの粘性（乱れの強さ）の基準値です。`,"温度依存性 ON/OFF":`温度によって液体の粘度を変化させるかどうかの設定です。`,"基準温度 T_ref (K)":`粘度計算の基準となる温度です。`,"Ea1 / R  降伏値項 (K)":`温度変化に対してどれだけ降伏値が変化するかを決める係数です。`,"Ea2 / R  粘度項  (K)":`温度変化に対してどれだけ粘度が変化するかを決める係数です。`,"📈 アレニウスプロットを表示":`温度と粘度の関係をグラフで確認するためのボタンです。`,"📈 流動曲線・粘性曲線を表示":`せん断速度によって粘度がどう変わるかをグラフ表示するボタンです。`,"粒子密度 (kg/m³)":`固体粒子そのものの密度です。`,"平均粒子径 (μm)":`粒子の平均的な大きさです。`,"法線ばね定数 kn":`垂直に衝突したときの反発の硬さです。`,"法線減衰係数 gn":`垂直衝突時のエネルギー吸収量（クッション性）です。`,"接線ばね定数 kt":`横に擦れ合ったときのねじれ方向の硬さです。`,"接線減衰係数 gt":`横滑りするときのエネルギー吸収量です。`,"摩擦係数 μ":`粒子表面の滑りにくさです。`,"表面エネルギー (JKR γ)":`粒子同士がくっつく力（付着・凝縮力）の強さです。`,粒度分布タイプ:`粒子の大きさにバラつきを持たせるか設定します。`,"標準偏差 (μm)":`粒径のバラつきの幅（広がり具合）です。`,"📊 粒度分布グラフを表示":`設定した粒子のサイズ分布を確認するボタンです。`,表示モード:`画面上での粒子の見え方です（軌跡表示など）。`,"軌跡の長さ (フレーム数)":`粒子の後ろに表示される残像・軌跡の長さです。`,初期配置パターン:`計算開始時に粒子をどこに配置するかです。`,表示粒子数:`画面上に同時に描画・追跡する粒子の個数です。`,粒子を再配置:`粒子の位置を初期状態にリセットするボタンです。`,流体モデル:`非ニュートン流体の計算モデルです。`,乱流モデル:`流れの乱れをどう計算するかです。`,"伝熱・エネルギー":`熱の移動（温度変化）を計算に含めるかどうかのスイッチです。`,"多相流 (Multiphase)":`気泡や液滴など、他の相を考慮するかの設定です。`,時間依存性:`計算を時間ごとに追うか（Transient）、落ち着いた状態を出すか（Steady）の設定です。`,半径マージン:`攪拌翼の周りの回転領域のメッシュのゆとり（半径方向）を設定します。`,上部マージン:`回転領域の上部マージンです。`,下部マージン:`回転領域の下部マージンです。`,基準点タイプ:`計算の基準とする圧力の位置とタイプです。`,"流入・流出条件":`外部から液を出し入れする場合の設定です。`,"周期・対称条件":`ループするような特殊な境界を設定する場合に使用します。`,"攪拌液初期温度 (K)":`計算開始時の液体の温度です。`,"MRF回転数 (RPM)":`攪拌翼の回転速度（1分間の回転数）です。`,"半径方向分割数 (r)":`タンク内を半径方向にどれだけ細かく区切って計算するかを設定します。`,"円周方向分割数 (θ)":`円周方向の分割数です。`,"高さ方向分割数 (y)":`高さ方向の分割数です。`,境界層の層数:`壁付近の急激な流れの変化を正確に捉えるために配置する層数です。`,"境界層全体の厚み (m)":`境界層の全体の厚みです。`,境界層の拡大率:`壁から離れるにつれてメッシュを大きくする割合です。`,"メッシュ適用 (リセット)":`メッシュ設定を変更した後に反映させるボタンです。`,"速度緩和係数 (relax U)":`計算が急激に変化して発散しないよう、速度の計算結果をマイルドに引き継ぐ調整値です。`,"圧力緩和係数 (relax P)":`圧力の計算結果をマイルドに引き継ぐ調整値です。`,"温度緩和係数 (relax T)":`温度の計算結果をマイルドに引き継ぐ調整値です。`,"乱流緩和係数 (relax k)":`乱流パラメータの計算結果をマイルドに引き継ぐ調整値です。`,計算スキーム:`圧力と速度の連成アルゴリズムです。`,空間離散化手法:`メッシュ間で物理量を補間する計算精度の方程式です。`,"形状・計算条件適用 (リセット)":`すべての計算条件を確定・反映させるボタンです。`,背景色:`3Dビューの背景の色（カラーコード）です。`,タンクの表示:`攪拌槽の外壁を表示するかどうかの設定です。`,タンクの透明度:`中の流体や粒子を見えやすくするためのタンク壁の透明度です。`,インペラの表示:`攪拌翼を画面に映すかどうかのチェックです。`,邪魔板の表示:`バッフルを画面に映すかどうかのチェックです。`,コイルの表示:`伝熱コイルを画面に映すかどうかのチェックです。`,MRFゾーンの表示:`回転領域を画面に映すかどうかのチェックです。`,"断面／３D切替":`タンクを真っ二つに割った断面図にするか全体の3Dにするかの切り替えです。`,断面の向き:`断面を垂直に切るか水平に切るかの設定です。`,水平断面の高さ:`水平断面の位置（高さ）の設定です。`,メッシュ描画形式:`メッシュの線を表示する方法です。`,"コンターの補間 (Smooth)":`色グラデーションの滑らかさです。`,カラースケール基準:`色の変化を絶対値にするか、相対値にするかの設定です。`,"現在の最低温度 (K)":`計算中の領域内の温度の最小値です。`,"現在の最高温度 (K)":`計算中の領域内の温度の最大値です。`,"粒子濃度下限閾値 (個/L)":`画面に表示する粒子の濃度の足切りライン（下限）です。`,"粒子濃度最大スケール (個/L)":`粒子の濃度の最大スケール値です。`,濃度を対数スケール表示:`濃度の色の変化を対数で強調するかのチェックです。`,温度分布の表示:`画面中央の3Dグラフィックスに温度を色としてマッピングします。`,圧力分布の表示:`圧力を色としてマッピングします。`,粒子濃度の表示:`粒子濃度を色としてマッピングします。`,"粒子追跡(DPM)の表示":`粒子追跡を表示します。`,粘度分布の表示:`粘度の色分布を表示します。`,速度ベクトルの表示:`液体の流れる方向を矢印で表示します。`,ベクトル長さ倍率:`流速ベクトルの矢印の大きさの倍率です。`,流線の表示:`インペラ付近を起点とした定常流の流線を表示します。`,流線の数:`表示する流線の本数です。`,高温領域の表示:`指定した温度以上の領域だけを立体的な面（等温面）として表示します。`,"下限温度 (K)":`高温領域の下限温度です。`,低温領域の表示:`指定した温度以下の領域を表示します。`,"上限温度 (K)":`低温領域の上限温度です。`,カラーバーの表示:`画面に色の意味（凡例）を出すかどうかのチェックです。`,CFD計算モニタの表示:`計算の進捗や残差を表示するモニタパネルのON/OFFです。`,ヘルプチップの表示:`各設定項目にマウスを乗せた時に表示される説明チップのON/OFFです。`,垂直断面の縦割り位置:`垂直断面を切る角度位置（0=正面, 1=背面）を0〜1で指定します。スライダーで断面の縦割り場所をリアルタイムに変更できます。`,寸法を表示:`攪拌槽の主要寸法（タンク直径・高さ・インペラ径・幅・クリアランス・液高さ・コイル等）を引き出し線付きで3Dビュー上に重ねて表示します。`,操作条件を表示:`現在の攪拌条件（温度・粘度・速度・圧力の平均/最大/最小）をコンパクトなフロートウィンドウにリアルタイム表示します。ドラッグで移動できます。`,"パース (遠近感)":`3D表示に遠近感をつけるか、平行投影にするかです。`,垂直断面を正面から見る:`画面中央のような、タンクを真横から見た綺麗な断面構図にカメラを固定します。`,水平断面を真上から見る:`タンクを上から見下ろした（翼の回転方向がよく見える）構図にカメラを固定します。`,"🔄 表示を初期化 (位置・スケールリセット)":`カメラ視点や表示スケールを初期状態に戻します。`};function ap(){let e=document.getElementById(`gui-custom-tooltip`);e&&(e.style.display=`none`)}function op(){let e=document.getElementById(`gui-custom-tooltip`);e||(e=document.createElement(`div`),e.id=`gui-custom-tooltip`,e.style.cssText=[`position:fixed`,`z-index:99999`,`max-width:260px`,`padding:7px 10px`,`background:rgba(20,20,30,0.97)`,`color:#e8e8e8`,`font-size:12px`,`line-height:1.55`,`border:1px solid rgba(255,255,255,0.18)`,`border-radius:6px`,`box-shadow:0 4px 18px rgba(0,0,0,0.55)`,`pointer-events:none`,`display:none`,`white-space:pre-wrap`,`word-break:break-all`].join(`;`),document.body.appendChild(e));let t=null,n=(n,a)=>{window.appParams&&window.appParams.showHelpTooltips===!1||(clearTimeout(t),e.textContent=n,e.style.display=`block`,r(a))},r=t=>{let n=t.clientX+14,r=t.clientY+14,a=window.innerWidth,o=window.innerHeight,s=e.offsetWidth,c=e.offsetHeight;e.style.left=(n+s>a?n-s-28:n)+`px`,e.style.top=(r+c>o?r-c-28:r)+`px`},a=()=>{t=setTimeout(()=>{e.style.display=`none`},80)},o=()=>{document.querySelectorAll(`.lil-controller`).forEach(e=>{if(e.dataset.tipAttached)return;let t=e.querySelector(`.lil-name`);if(!t)return;let o=ip[t.textContent.trim()];o&&(e.dataset.tipAttached=`1`,e.style.cursor=`help`,e.addEventListener(`mouseenter`,e=>n(o,e)),e.addEventListener(`mousemove`,e=>r(e)),e.addEventListener(`mouseleave`,a))})};o();let s=new MutationObserver(o);document.querySelectorAll(`.lil-gui`).forEach(e=>{s.observe(e,{childList:!0,subtree:!0})})}var sp=class{constructor(e){this.mesh=e,this.device=null,this.pipeline=null,this.isSupported=!1,this.isReady=!1,this.packedArray=null,this.buffers={},this.bindGroups=[]}async init(){if(!navigator.gpu)return console.warn(`WebGPU is not supported on this browser.`),this.isSupported=!1,!1;try{let e=await navigator.gpu.requestAdapter();if(!e)return console.warn(`Failed to request WebGPU adapter.`),this.isSupported=!1,!1;this.device=await e.requestDevice({requiredLimits:{maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize}}),this.isSupported=!0;let t=this.device.createShaderModule({label:`Jacobi Solver Compute Shader`,code:`
          struct SolverParams {
            nr : u32,
            ntheta : u32,
            ny : u32,
            numCells : u32,
          };

          struct CellCoefficients {
            aE : f32,
            aW : f32,
            aN : f32,
            aS : f32,
            aT : f32,
            aB : f32,
            aP : f32,
            b  : f32,
          };

          @group(0) @binding(0) var<storage, read> coeffs : array<CellCoefficients>;
          @group(0) @binding(1) var<storage, read_write> phi_in  : array<f32>;
          @group(0) @binding(2) var<storage, read_write> phi_out : array<f32>;
          @group(0) @binding(3) var<uniform> params : SolverParams;
          @group(0) @binding(4) var<storage, read> nbrs : array<i32>;

          @compute @workgroup_size(256)
          fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {
            let idx = global_id.x;
            if (idx >= params.numCells) {
              return;
            }

            let c = coeffs[idx];
            if (c.aP == 0.0) {
              phi_out[idx] = phi_in[idx];
              return;
            }

            var sum : f32 = c.b;

            let idxE = nbrs[idx * 6u + 0u];
            if (idxE >= 0) { sum += c.aE * phi_in[u32(idxE)]; }

            let idxW = nbrs[idx * 6u + 1u];
            if (idxW >= 0) { sum += c.aW * phi_in[u32(idxW)]; }

            let idxN = nbrs[idx * 6u + 2u];
            if (idxN >= 0) { sum += c.aN * phi_in[u32(idxN)]; }

            let idxS = nbrs[idx * 6u + 3u];
            if (idxS >= 0) { sum += c.aS * phi_in[u32(idxS)]; }

            let idxT = nbrs[idx * 6u + 4u];
            if (idxT >= 0) { sum += c.aT * phi_in[u32(idxT)]; }

            let idxB = nbrs[idx * 6u + 5u];
            if (idxB >= 0) { sum += c.aB * phi_in[u32(idxB)]; }

            phi_out[idx] = sum / c.aP;
          }
        `}),n=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:`uniform`}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}}]}),r=this.device.createPipelineLayout({bindGroupLayouts:[n]});return this.pipeline=this.device.createComputePipeline({layout:r,compute:{module:t,entryPoint:`main`}}),this.isReady=!0,!0}catch(e){return console.error(`Failed to initialize WebGPU device / shaders:`,e),this.isSupported=!1,this.isReady=!1,!1}}prepareBuffers(e){if(this.buffers.numCells===e)return;for(let e in this.buffers)this.buffers[e]instanceof GPUBuffer&&this.buffers[e].destroy();let t=e*4,n=e*8*4;this.buffers.coeffs=this.device.createBuffer({size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.buffers.phi_in=this.device.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.buffers.phi_out=this.device.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.buffers.readback=this.device.createBuffer({size:t,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.buffers.params=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.buffers.nbrs=this.device.createBuffer({size:e*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.buffers.numCells=e,this.bindGroups=[this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.coeffs}},{binding:1,resource:{buffer:this.buffers.phi_in}},{binding:2,resource:{buffer:this.buffers.phi_out}},{binding:3,resource:{buffer:this.buffers.params}},{binding:4,resource:{buffer:this.buffers.nbrs}}]}),this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.coeffs}},{binding:1,resource:{buffer:this.buffers.phi_out}},{binding:2,resource:{buffer:this.buffers.phi_in}},{binding:3,resource:{buffer:this.buffers.params}},{binding:4,resource:{buffer:this.buffers.nbrs}}]})]}async solve(e,t,n,r,a,o,s,c,l,u){if(!this.isReady&&!await this.init())return!1;let d=e.length;this.prepareBuffers(d),(!this.packedArray||this.packedArray.length!==d*8)&&(this.packedArray=new Float32Array(d*8));let f=this.packedArray;for(let e=0;e<d;e++){let u=e*8;f[u]=t[e],f[u+1]=n[e],f[u+2]=r[e],f[u+3]=a[e],f[u+4]=o[e],f[u+5]=s[e],f[u+6]=c[e],f[u+7]=l[e]}let p=this.device.queue;p.writeBuffer(this.buffers.coeffs,0,f),p.writeBuffer(this.buffers.phi_in,0,e),p.writeBuffer(this.buffers.nbrs,0,this.mesh.neighbors);let m=new Uint32Array([this.mesh.nr,this.mesh.ntheta,this.mesh.ny,d]);p.writeBuffer(this.buffers.params,0,m);let h=Math.ceil(d/256);for(let e=0;e<u;e++){let t=this.device.createCommandEncoder(),n=t.beginComputePass();n.setPipeline(this.pipeline);let r=e%2;n.setBindGroup(0,this.bindGroups[r]),n.dispatchWorkgroups(h),n.end(),p.submit([t.finish()])}let g=u%2==1?this.buffers.phi_out:this.buffers.phi_in,_=this.device.createCommandEncoder();_.copyBufferToBuffer(g,0,this.buffers.readback,0,d*4),p.submit([_.finish()]),await this.buffers.readback.mapAsync(GPUMapMode.READ);let v=this.buffers.readback.getMappedRange(),y=new Float32Array(v);return e.set(y),this.buffers.readback.unmap(),!0}},cp=class{constructor(e,t){this.mesh=e,this.params=t,this.ur=new Float32Array(e.numCells),this.utheta=new Float32Array(e.numCells),this.uy=new Float32Array(e.numCells),this.p=new Float32Array(e.numCells),this.pCorr=new Float32Array(e.numCells),this.T=new Float32Array(e.numCells),this.k=new Float32Array(e.numCells),this.eps=new Float32Array(e.numCells),this.mut=new Float32Array(e.numCells),this.gamma_dot=new Float32Array(e.numCells),this.mu_app=new Float32Array(e.numCells),this.T.fill(t.initialTemp||293.15),this.k.fill(.01),this.eps.fill(.01),this.density=t.density||1e3,this.viscosity=t.viscosity||.001,this.mu_app.fill(this.viscosity),this.heatCap=t.heatCapacity||4180,this.thermCond=t.thermalConductivity||.6,this.relaxU=t.relaxU===void 0?.5:t.relaxU,this.relaxP=t.relaxP===void 0?.3:t.relaxP,this.relaxT=t.relaxT===void 0?.9:t.relaxT,this.relaxK=t.relaxK===void 0?.5:t.relaxK,this.vol=new Float32Array(e.numCells),this.aE=new Float32Array(e.numCells),this.aW=new Float32Array(e.numCells),this.aN=new Float32Array(e.numCells),this.aS=new Float32Array(e.numCells),this.aT=new Float32Array(e.numCells),this.aB=new Float32Array(e.numCells),this.aP=new Float32Array(e.numCells),this.b=new Float32Array(e.numCells),this.areaE=new Float32Array(e.numCells),this.areaW=new Float32Array(e.numCells),this.areaN=new Float32Array(e.numCells),this.areaS=new Float32Array(e.numCells),this.areaT=new Float32Array(e.numCells),this.areaB=new Float32Array(e.numCells),this.Gamma=new Float32Array(e.numCells),this.S_C=new Float32Array(e.numCells),this.S_P=new Float32Array(e.numCells),this.dCellR=new Float32Array(e.numCells),this.dCellTheta=new Float32Array(e.numCells),this.dCellY=new Float32Array(e.numCells),this.aP_ur=new Float32Array(e.numCells),this.aP_ut=new Float32Array(e.numCells),this.aP_uy=new Float32Array(e.numCells),this.gradP_r=new Float32Array(e.numCells),this.gradP_theta=new Float32Array(e.numCells),this.gradP_y=new Float32Array(e.numCells),this.Sp_ur=new Float32Array(e.numCells),this.Sp_ut=new Float32Array(e.numCells),this.Sp_uy=new Float32Array(e.numCells),this.residuals={U:0,P:0,T:0},this.iter=0,this.cfl=0,this.viscDiffNum=0,this.thermDiffNum=0,this.pseudo_dt=.005,this.currentRpm=0,this.rpmRampStep=.3,this.refPressValue=0,this.targetCFL=.5,this.maxCFL=.8,this.maxDiffNum=.5,this.targetDiffNum=.4,this.dtMin=1e-4;{let e=(t.tankDiameter||1)/2;this.dtMax=Math.min(.02,.02/Math.max(e,1))}this.dtGrowthRate=1.05,this.dtShrinkRate=.7,this.gpuSolver=new sp(e),this.computeGeometry();{let n=(t.rpm||100)*(2*Math.PI/60),r=(t.tankDiameter||1)/2,a=e&&e.ntheta?e.ntheta:180,o=2*Math.PI/a,s=Math.max(n*r,.001),c=this.targetCFL*(r*o)/s;this.pseudo_dt=Math.min(this.dtMax,Math.max(this.dtMin,c))}}computeGeometry(){this.vol=this.mesh.vol,this.areaE=this.mesh.areaE,this.areaW=this.mesh.areaW,this.areaN=this.mesh.areaN,this.areaS=this.mesh.areaS,this.areaT=this.mesh.areaT,this.areaB=this.mesh.areaB,this.dCellR=this.mesh.dCellR,this.dCellTheta=this.mesh.dCellTheta,this.dCellY=this.mesh.dCellY}clearParticleSources(){this.Sp_ur.fill(0),this.Sp_ut.fill(0),this.Sp_uy.fill(0)}addParticleDragSource(e,t,n,r,a,o){let s=this.mesh,c=0;for(let t=0;t<s.nr;t++)if(e>=s.rNode[t]&&e<=s.rNode[t+1]){c=t;break}let l=0;for(let e=0;e<s.ntheta;e++){let n=s.thetaNode[e],r=s.thetaNode[e+1];if(t>=n&&t<r){l=e;break}}let u=0,d=s.getBottomY(e,this.params),f=d+this.params.liquidHeight,p=(n-d)/(f-d);for(let e=0;e<s.ny;e++)if(p>=s.etaNode[e]&&p<=s.etaNode[e+1]){u=e;break}let m=c+s.nr*(l+s.ntheta*u),h=r*Math.cos(t)+o*Math.sin(t),g=-r*Math.sin(t)+o*Math.cos(t),_=a,v=this.vol[m];v>0&&s.flag[m]===0&&(this.Sp_ur[m]+=h/v,this.Sp_ut[m]+=g/v,this.Sp_uy[m]+=_/v)}interpolateVelocityAt(e,t,n){let r=this.mesh,a=-1;for(let t=0;t<r.nr;t++)if(e>=r.rNode[t]&&e<=r.rNode[t+1]){a=t;break}if(a===-1)return{ur:0,utheta:0,uy:0};let o=-1;for(let e=0;e<r.ntheta;e++){let n=r.thetaNode[e],a=r.thetaNode[e+1];if(t>=n&&t<a){o=e;break}}o===-1&&(o=0);let s=-1,c=r.getBottomY(e,this.params),l=c+this.params.liquidHeight,u=(n-c)/(l-c);for(let e=0;e<r.ny;e++)if(u>=r.etaNode[e]&&u<=r.etaNode[e+1]){s=e;break}if(s===-1)return{ur:0,utheta:0,uy:0};let d=a+r.nr*(o+r.ntheta*s);return r.flag[d]===0?{ur:this.ur[d],utheta:this.utheta[d],uy:this.uy[d]}:{ur:0,utheta:0,uy:0}}async step(){this.updateRpmRamp(),this.adaptTimeStep(),this.clearParticleSources(),this.updateProperties(),await this.solveMomentum(),await this.solvePressureCorrection(),this.params.turbulenceModel===`k-epsilon`&&await this.solveTurbulence(),await this.solveEnergy(),this.updateBoundaryConditions(),this.boundVariables(),this.computeCFL(),this.computeDiffusionNumbers(),this.iter++}updateRpmRamp(){let e=this.params.rpm||0,t=e-this.currentRpm;Math.abs(t)<=this.rpmRampStep?this.currentRpm=e:this.currentRpm+=Math.sign(t)*this.rpmRampStep}adaptTimeStep(){if(this.iter===0){let e=this.currentRpm*(2*Math.PI/60);if(e>1e-6){let t=(this.params.tankDiameter||1)/2,n=this.mesh.ntheta||180,r=2*Math.PI/n,a=Math.max(e*t,.001),o=this.targetCFL*(t*r)/a;this.pseudo_dt=Math.min(this.dtMax,Math.max(this.dtMin,o))}return}Math.max(this.viscDiffNum,this.thermDiffNum);let e=!1;if(this.cfl>this.maxCFL){let t=this.pseudo_dt*(this.targetCFL/Math.max(this.cfl,1e-6));this.pseudo_dt=Math.max(this.dtMin,t),e=!0}this.maxDiffNum,!e&&this.cfl<this.targetCFL&&this.cfl>0&&(this.pseudo_dt*=this.dtGrowthRate,this.pseudo_dt>this.dtMax&&(this.pseudo_dt=this.dtMax)),this.pseudo_dt<this.dtMin&&(this.pseudo_dt=this.dtMin)}computeCFL(){let e=this.mesh,t=e.flag,n=this.pseudo_dt,r=0,a=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let o=0;o<e.numCells;o++){if(t[o]!==0)continue;let e=this.dCellTheta[o],s;s=e<a?(Math.abs(this.ur[o])/this.dCellR[o]+Math.abs(this.uy[o])/this.dCellY[o])*n:(Math.abs(this.ur[o])/this.dCellR[o]+Math.abs(this.utheta[o])/e+Math.abs(this.uy[o])/this.dCellY[o])*n,s>r&&(r=s)}this.cfl=r}computeDiffusionNumbers(){let e=this.mesh,t=e.flag,n=this.pseudo_dt,r=this.density||1e3,a=this.thermCond/(r*(this.heatCap||4180)),o=0,s=0,c=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let l=0;l<e.numCells;l++){if(t[l]!==0)continue;let e=this.dCellR[l],u=this.dCellTheta[l],d=this.dCellY[l],f=u<c?1/(e*e)+1/(d*d):1/(e*e)+1/(u*u)+1/(d*d),p=(this.mu_app[l]||this.viscosity)/r*n*f,m=a*n*f;p>o&&(o=p),m>s&&(s=m)}this.viscDiffNum=o,this.thermDiffNum=s}boundVariables(){let e=this.mesh,t=e.numCells,n=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let e=0;e<t;e++){this.ur[e]>10&&(this.ur[e]=10),this.ur[e]<-10&&(this.ur[e]=-10),this.dCellTheta[e]<n?this.utheta[e]=0:(this.utheta[e]>20&&(this.utheta[e]=20),this.utheta[e]<-20&&(this.utheta[e]=-20)),this.uy[e]>10&&(this.uy[e]=10),this.uy[e]<-10&&(this.uy[e]=-10);{let t=this.params.liquidHeight||1,n=this.currentRpm*(2*Math.PI/60),r=(this.params.tankDiameter||1)/2,a=this.density*9.81*t,o=.5*this.density*(n*r)**2,s=Math.max(1e4,5*(a+o));this.p[e]>s&&(this.p[e]=s),this.p[e]<-s&&(this.p[e]=-s)}this.k[e]<1e-6&&(this.k[e]=1e-6),this.k[e]>100&&(this.k[e]=100),this.eps[e]<1e-6&&(this.eps[e]=1e-6),this.eps[e]>1e3&&(this.eps[e]=1e3),this.T[e]<273.15&&(this.T[e]=273.15),this.T[e]>1e3&&(this.T[e]=1e3)}}calculateApparentViscosity(){let e=this.mesh,t=e.numCells;this.mu_app||=new Float32Array(t);let n=!!this.params.tempDependence,r=this.params.andradeT_ref||298.15,a=this.params.andradeEa1||0,o=this.params.andradeEa2||0,s=(e,t)=>!n||e===0?1:Math.exp(e*(1/Math.max(t,200)-1/r));if(this.params.fluidModel===`Newtonian`){for(let n=0;n<t;n++){if(e.flag[n]!==0)continue;let t=s(o,this.T&&this.T[n]>0?this.T[n]:r),a=this.params.viscosity*t,c=this.params.muMin===void 0?1e-4:this.params.muMin,l=this.params.muMax===void 0?100:this.params.muMax;this.mu_app[n]=Math.max(c,Math.min(a,l))}return}let c=this.params.powerLawK||.1,l=this.params.powerLawN||.5,u=this.params.yieldStress||10,d=this.params.viscosity||.001,f=(e,t)=>{t=Math.max(t,.001),this.gamma_dot&&(this.gamma_dot[e]=t);let n=this.T&&this.T[e]>0?this.T[e]:r,f=s(a,n),p=s(o,n),m=c*p,h=u*f,g=d*p,_=g;this.params.fluidModel===`Power-law`?_=m*t**(l-1):this.params.fluidModel===`Bingham`?_=g+h/t*(1-Math.exp(-100*t)):this.params.fluidModel===`Herschel-Bulkley`&&(_=m*t**(l-1)+h/t*(1-Math.exp(-100*t)));let v=this.params.muMin===void 0?1e-4:this.params.muMin,y=this.params.muMax===void 0?100:this.params.muMax;_=Math.max(v,Math.min(_,y)),this.mu_app[e]=_};for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let a=r+e.nr*(n+e.ntheta*t);if(e.flag[a]!==0)continue;let o=e.getCellCenter(r,n,t,this.params).r,s=r<e.nr-1?a+1:a,c=r>0?a-1:a,l=e.rNode[r+1]-e.rNode[r],u=r<e.nr-1&&r>0?(this.ur[s]-this.ur[c])/(2*l):0,d=r<e.nr-1&&r>0?(this.utheta[s]-this.utheta[c])/(2*l):0,p=r<e.nr-1&&r>0?(this.uy[s]-this.uy[c])/(2*l):0,m=(n+1)%e.ntheta,h=(n-1+e.ntheta)%e.ntheta,g=r+e.nr*(m+e.ntheta*t),_=r+e.nr*(h+e.ntheta*t),v=e.thetaNode[n+1]-e.thetaNode[n],y=Math.max(o,1e-9)*v,b=(this.ur[g]-this.ur[_])/(2*y),x=(this.utheta[g]-this.utheta[_])/(2*y),S=(this.uy[g]-this.uy[_])/(2*y),C=t<e.ny-1?t+1:t,w=t>0?t-1:t,T=r+e.nr*(n+e.ntheta*C),E=r+e.nr*(n+e.ntheta*w),D=(e.etaNode[t+1]-e.etaNode[t])*this.params.liquidHeight,O=t<e.ny-1&&t>0?(this.ur[T]-this.ur[E])/(2*D):0,A=t<e.ny-1&&t>0?(this.utheta[T]-this.utheta[E])/(2*D):0,M=t<e.ny-1&&t>0?(this.uy[T]-this.uy[E])/(2*D):0,N=this.ur[a],P=this.utheta[a];f(a,Math.sqrt(2*u*u+2*(x+N/o)**2+2*M*M+(d-P/o+b)**2+(p+O)**2+(S+A)**2))}{let t=t=>{let n=e.getCellCenterByIdx(t,this.params),r=this.ur[t],a=this.utheta[t];return{ux:r*Math.cos(n.theta)-a*Math.sin(n.theta),uz:r*Math.sin(n.theta)+a*Math.cos(n.theta)}};for(let n=e.nr*e.ntheta*e.ny;n<e.numCells;n++){if(e.flag[n]!==0)continue;let r=e.neighbors[n*6+0],a=e.neighbors[n*6+1],o=e.neighbors[n*6+2],s=e.neighbors[n*6+3],c=e.neighbors[n*6+4],l=e.neighbors[n*6+5],u=t(n),d=r>=0?t(r):u,p=a>=0?t(a):u,m=o>=0?t(o):u,h=s>=0?t(s):u,g=c>=0?t(c):u,_=l>=0?t(l):u,v=c>=0?this.uy[c]:this.uy[n],y=l>=0?this.uy[l]:this.uy[n],b=Math.max(e.distE[n]+e.distW[n],1e-9),x=Math.max(e.distN[n]+e.distS[n],1e-9),S=Math.max(e.distT[n]+e.distB[n],1e-9),C=(d.ux-p.ux)/b,w=(d.uz-p.uz)/b,T=(m.ux-h.ux)/x,E=(m.uz-h.uz)/x,D=(g.ux-_.ux)/S,O=(g.uz-_.uz)/S,A=(this.uy[r>=0?r:n]-this.uy[a>=0?a:n])/b,M=(this.uy[o>=0?o:n]-this.uy[s>=0?s:n])/x,N=(v-y)/S,P=C,ee=E,F=N,te=.5*(T+w),I=.5*(D+A),L=.5*(O+M),ne=Math.sqrt(2*P*P+2*ee*ee+2*F*F+4*te*te+4*I*I+4*L*L);f(n,ne)}}}updateProperties(){this.calculateApparentViscosity();let e=this.mesh.numCells,t=this.params.turbulenceModel||`Constant`;if(t===`Constant`){let t=this.params.turbulenceIntensity===void 0?.01:this.params.turbulenceIntensity,n=.09*this.density*t*t/(t+1e-8);for(let t=0;t<e;t++)this.mut[t]=this.mesh.flag[t]===0?n:0}else if(t===`MixingLength`){let e=this.params.tankDiameter/2,t=(t,n)=>{let r=e-t,a=n-this.mesh.getBottomY(t,this.params),o=this.mesh.getBottomY(0,this.params)+this.params.liquidHeight-n,s=Math.min(r,Math.max(0,a),Math.max(0,o));return Math.min(.07*e,.41*s)};for(let e=0;e<this.mesh.ny;e++)for(let n=0;n<this.mesh.ntheta;n++)for(let r=0;r<this.mesh.nr;r++){let a=r+this.mesh.nr*(n+this.mesh.ntheta*e);if(this.mesh.flag[a]!==0){this.mut[a]=0;continue}let o=this.mesh.getCellCenter(r,n,e,this.params),s=t(o.r,o.y),c=this.gamma_dot?this.gamma_dot[a]:1,l=this.density*s*s*c;this.mut[a]=Math.max(1e-6,Math.min(10,l))}for(let e=this.mesh.nr*this.mesh.ntheta*this.mesh.ny;e<this.mesh.numCells;e++){if(this.mesh.flag[e]!==0){this.mut[e]=0;continue}let n=this.mesh.getCellCenterByIdx(e,this.params),r=t(n.r,n.y),a=this.gamma_dot?this.gamma_dot[e]:1,o=this.density*r*r*a;this.mut[e]=Math.max(1e-6,Math.min(10,o))}}else if(t===`k-epsilon`)for(let t=0;t<e;t++)if(this.mesh.flag[t]===0){let e=this.k[t],n=this.eps[t],r=.09*this.density*e*e/(n+1e-8);this.mut[t]=Math.max(1e-6,Math.min(10,r))}else this.mut[t]=0}getImpellerFactors(){let e=this.params.impellerType,t=.8,n=0,r=0;switch(e){case`FlatPropeller`:t=.5,n=1.2,r=.05;break;case`Pfaudler`:t=.6,n=.8,r=.1;break;case`InclinedPaddle`:case`PitchedBlade`:t=.7,n=.5,r=.3;break;case`FlatPaddle`:t=.8,n=.1,r=.5;break;case`Turbine`:case`Rushton`:t=.9,n=0,r=.6;break;case`Anchor`:case`Ribbon`:t=.9,n=0,r=.1;break}return{slipFactor:t,axialPumpFactor:n,radialPumpFactor:r}}async gaussSeidel(e,t,n,r,a,o,s,c,l,u=10,d=null){if(this.params.computationMode===`GPU (WebGPU)`&&this.gpuSolver&&d!==`P`&&d!==`T`){let f;f=d===`P`?u*20:d===`U`?u*5:u*2;let p=new Float32Array(e);if(await this.gpuSolver.solve(e,t,n,r,a,o,s,c,l,f)){let u=0;if(d===`P`){let d=this.mesh,f=d.nr,p=d.ntheta,m=d.ny;for(let h=0;h<m;h++)for(let g=0;g<p;g++)for(let _=0;_<f;_++){let v=_+f*(g+p*h);if(d.flag[v]!==0)continue;let y=(g+1)%p,b=_+f*(y+p*h),x=(g-1+p)%p,S=_+f*(x+p*h),C=c[v]*e[v];_<f-1&&(C-=t[v]*e[v+1]),_>0&&(C-=n[v]*e[v-1]),C-=r[v]*e[b],C-=a[v]*e[S],h<m-1&&(C-=o[v]*e[v+f*p]),h>0&&(C-=s[v]*e[v-f*p]);let w=Math.abs(l[v]-C);w>u&&(u=w)}}else for(let t=0;t<e.length;t++){let n=Math.abs(e[t]-p[t]);n>u&&(u=n)}d&&this.residuals&&(this.residuals[d]=u);return}}let f=this.mesh,p=f.nr,m=f.ntheta,h=f.ny,g=f.flag,_=0;for(let p=0;p<u;p++){_=0;let u=p%2==1;for(let p=0;p<f.numCells;p++){let m=u?f.numCells-1-p:p;if(g[m]!==0)continue;let h=l[m],v=f.neighbors,y=v[m*6+0];y>=0&&(h+=t[m]*e[y]);let b=v[m*6+1];b>=0&&(h+=n[m]*e[b]);let x=v[m*6+2];x>=0&&(h+=r[m]*e[x]);let S=v[m*6+3];S>=0&&(h+=a[m]*e[S]);let C=v[m*6+4];C>=0&&(h+=o[m]*e[C]);let w=v[m*6+5];if(w>=0&&(h+=s[m]*e[w]),c[m]!==0){let t=e[m];if(e[m]=h/c[m],Number.isNaN(e[m]))throw Error(`NaN detected at idx=${m}, k=${k}, j=${j}, i=${i}, resKey=${d}, sum=${h}, aP=${c[m]}, old=${t}, b=${l[m]}`);{let n=Math.abs(e[m]-t);n>_&&(_=n)}}}}if(d&&this.residuals)if(d===`P`){let u=0;for(let d=0;d<h;d++)for(let f=0;f<m;f++)for(let _=0;_<p;_++){let v=_+p*(f+m*d);if(g[v]!==0)continue;let y=(f+1)%m,b=_+p*(y+m*d),x=(f-1+m)%m,S=_+p*(x+m*d),C=c[v]*e[v];_<p-1&&(C-=t[v]*e[v+1]),_>0&&(C-=n[v]*e[v-1]),C-=r[v]*e[b],C-=a[v]*e[S],d<h-1&&(C-=o[v]*e[v+p*m]),d>0&&(C-=s[v]*e[v-p*m]);let w=Math.abs(l[v]-C);w>u&&(u=w)}this.residuals[d]=u}else this.residuals[d]=_}buildCoefficients(e,t,n,r,a,o,s,c,l,u,d,f,p){let m=this.mesh,h=this.params;m.nr,m.ntheta,m.ny;let g=m.flag,_=this.density;f.fill(0);let v=1/(this.heatCap||4180),y=e===this.ur||e===this.utheta||e===this.uy||e===this.k||e===this.eps,b=(!h.mirrorPlateType||h.mirrorPlateType===`None`?`ShellOnly`:h.jacketCoverage||`Full`)===`ShellOnly`?7:1,x=e=>{let t=`wall`,n=`wall`,r=293.15,a=500,o=!0;if(e===1){t=h.bc_fluid_jacket||`noSlip`,n=h.bc_heat_jacket||`externalWallHeatTransfer`,r=h.jacketTemp===void 0?293.15:h.jacketTemp,a=h.ua===void 0?500:h.ua,o=h.jacketType!==`None`;let e=h.bc_type_jacket||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_jacket||`zeroGradient`,n=h.bc_heat_jacket||`fixedValue`)}else if(e===7){t=h.bc_fluid_bottomHead||`noSlip`,n=h.bc_heat_bottomHead||`zeroGradient`,r=h.bottomHeadTemp===void 0?293.15:h.bottomHeadTemp,a=h.bottomHeadUa===void 0?500:h.bottomHeadUa,o=!0;let e=h.bc_type_bottomHead||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_bottomHead||`zeroGradient`,n=h.bc_heat_bottomHead||`fixedValue`)}else if(e===3){t=h.bc_fluid_coil||`noSlip`,n=h.bc_heat_coil||`externalWallHeatTransfer`,r=h.coilTemp===void 0?293.15:h.coilTemp,a=h.coilUa===void 0?500:h.coilUa,o=!!h.coilEnabled;let e=h.bc_type_coil||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_coil||`zeroGradient`,n=h.bc_heat_coil||`fixedValue`)}else if(e===4){t=h.bc_fluid_impeller||`noSlip`,n=h.bc_heat_impeller||`zeroGradient`,r=h.impellerTemp===void 0?293.15:h.impellerTemp,a=1e5,o=!0;let e=h.bc_type_impeller||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_impeller||`zeroGradient`,n=h.bc_heat_impeller||`fixedValue`)}else if(e===5){t=h.bc_fluid_rod||`noSlip`,n=h.bc_heat_rod||`zeroGradient`,r=h.rodTemp===void 0?293.15:h.rodTemp,a=1e5,o=!0;let e=h.bc_type_rod||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_rod||`zeroGradient`,n=h.bc_heat_rod||`fixedValue`)}else if(e===6){t=h.bc_fluid_baffle||`noSlip`,n=h.bc_heat_baffle||`zeroGradient`,r=h.baffleTemp===void 0?293.15:h.baffleTemp,a=1e5,o=!0;let e=h.bc_type_baffle||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_baffle||`zeroGradient`,n=h.bc_heat_baffle||`fixedValue`)}else if(e===2){t=h.bc_fluid_surface||`slip`,n=h.bc_heat_surface||`zeroGradient`,r=h.surfaceTemp===void 0?293.15:h.surfaceTemp,a=h.surfaceUa===void 0?500:h.surfaceUa,o=!0;let e=h.bc_type_surface||`symmetry`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=h.bc_fluid_surface||`zeroGradient`,n=h.bc_heat_surface||`fixedValue`)}return{bcTypeFluid:t,bcTypeHeat:n,T_bc:r,ua:a,isEnabled:o}},S=(t,n,r,a)=>{let o=x(r);if(e===this.T){let e=r===1?h.bc_type_jacket||`wall`:r===7?h.bc_type_bottomHead||`wall`:r===2?h.bc_type_surface||`symmetry`:r===3?h.bc_type_coil||`wall`:r===4?h.bc_type_impeller||`wall`:r===5?h.bc_type_rod||`wall`:r===6&&h.bc_type_baffle||`wall`;if(e===`symmetryPlane`||e===`symmetry`||o.bcTypeHeat===`zeroGradient`)return{aNb0:0,aP0_add:-t,b_add:0};if(o.bcTypeHeat===`externalWallHeatTransfer`)if(o.isEnabled){let e=o.ua*n*v;return{aNb0:0,aP0_add:e-t,b_add:e*o.T_bc}}else return{aNb0:0,aP0_add:-t,b_add:0};if(o.bcTypeHeat===`fixedValue`){let e=1e5*n*v;return{aNb0:0,aP0_add:e-t,b_add:e*o.T_bc}}return{aNb0:0,aP0_add:-t,b_add:0}}else if(y)return o.bcTypeFluid===`movingWallVelocity`?{aNb0:0,aP0_add:t,b_add:t*(a>=0?e[a]:0)}:o.bcTypeFluid===`noSlip`?{aNb0:0,aP0_add:t,b_add:0}:o.bcTypeFluid===`fixedValue`?{aNb0:0,aP0_add:t,b_add:t*(a>=0?e[a]:0)}:{aNb0:0,aP0_add:-t,b_add:0};else{let e=r===1?h.bc_type_jacket||`wall`:r===7?h.bc_type_bottomHead||`wall`:r===2?h.bc_type_surface||`symmetry`:r===3?h.bc_type_coil||`wall`:r===4?h.bc_type_impeller||`wall`:r===5?h.bc_type_rod||`wall`:r===6&&h.bc_type_baffle||`wall`,n=r===1?h.bc_press_jacket||`fixedFluxPressure`:r===7?h.bc_press_bottomHead||`fixedFluxPressure`:r===2?h.bc_press_surface||`totalPressure`:r===3?h.bc_press_coil||`fixedFluxPressure`:r===4?h.bc_press_impeller||`fixedFluxPressure`:r===5?h.bc_press_rod||`fixedFluxPressure`:r===6&&h.bc_press_baffle||`fixedFluxPressure`;return e===`symmetryPlane`||e===`symmetry`||n===`zeroGradient`||n===`fixedFluxPressure`?{aNb0:0,aP0_add:-t,b_add:0}:n===`fixedValue`||n===`totalPressure`?{aNb0:0,aP0_add:0,b_add:0}:{aNb0:0,aP0_add:-t,b_add:0}}};for(let v=0;v<m.numCells;v++){if(g[v]!==0)continue;let y=this.vol[v],x=m.neighbors,C=x[v*6+0],w=x[v*6+1],T=x[v*6+2],E=x[v*6+3],D=x[v*6+4],O=x[v*6+5],A=this.areaE[v],M=this.areaW[v],N=this.areaN[v],P=this.areaS[v],ee=this.areaT[v],F=this.areaB[v],te=0,I=0,L=0,ne=0,re=0,ie=0;if(v<m.nr*m.ntheta*m.ny)C>=0&&m.flag[C]===0&&(te=.5*(this.ur[v]+this.ur[C])),w>=0&&m.flag[w]===0&&(I=.5*(this.ur[v]+this.ur[w])),T>=0&&m.flag[T]===0&&(L=.5*(this.utheta[v]+this.utheta[T])),E>=0&&m.flag[E]===0&&(ne=.5*(this.utheta[v]+this.utheta[E]));else{let e=m.getCellCenterByIdx(v,this.params).theta,t=this.ur[v]*Math.cos(e)-this.utheta[v]*Math.sin(e),n=this.ur[v]*Math.sin(e)+this.utheta[v]*Math.cos(e);if(C>=0&&m.flag[C]===0){let e=m.getCellCenterByIdx(C,this.params).theta;te=.5*(t+(this.ur[C]*Math.cos(e)-this.utheta[C]*Math.sin(e)))}if(w>=0&&m.flag[w]===0){let e=m.getCellCenterByIdx(w,this.params).theta;I=.5*(t+(this.ur[w]*Math.cos(e)-this.utheta[w]*Math.sin(e)))}if(T>=0&&m.flag[T]===0){let e=m.getCellCenterByIdx(T,this.params).theta;L=.5*(n+(this.ur[T]*Math.sin(e)+this.utheta[T]*Math.cos(e)))}if(E>=0&&m.flag[E]===0){let e=m.getCellCenterByIdx(E,this.params).theta;ne=.5*(n+(this.ur[E]*Math.sin(e)+this.utheta[E]*Math.cos(e)))}}D>=0&&m.flag[D]===0&&(re=.5*(this.uy[v]+this.uy[D])),O>=0&&m.flag[O]===0&&(ie=.5*(this.uy[v]+this.uy[O]));let ae=_*te*A,R=_*I*M,oe=_*L*N,se=_*ne*P,ce=_*re*ee,le=_*ie*F,ue=t[v]*A/m.distE[v],de=t[v]*M/m.distW[v],fe=t[v]*N/m.distN[v],pe=t[v]*P/m.distS[v],me=t[v]*ee/m.distT[v],he=t[v]*F/m.distB[v],ge=ue+Math.max(-ae,0),_e=de+Math.max(R,0),ve=fe+Math.max(-oe,0),ye=pe+Math.max(se,0),be=me+Math.max(-ce,0),xe=he+Math.max(le,0),Se=ge+_e+ve+ye+be+xe-r[v]*y;if(1/(this.heatCap||4180),h.ua!==void 0&&h.ua,h.coilUa!==void 0&&h.coilUa,e===this.ur||e===this.utheta||e===this.uy||e===this.k||this.eps,C<0){let e=S(ge,A,1,-1);Se+=e.aP0_add,f[v]+=e.b_add,ge=e.aNb0}else if(g[C]>0){let e=S(ge,A,g[C],C);Se+=e.aP0_add,f[v]+=e.b_add,ge=e.aNb0}if(w<0){let e=S(_e,M,1,-1);Se+=e.aP0_add,f[v]+=e.b_add,_e=e.aNb0}else if(g[w]>0){let e=S(_e,M,g[w],w);Se+=e.aP0_add,f[v]+=e.b_add,_e=e.aNb0}if(T<0){let e=S(ve,N,1,-1);Se+=e.aP0_add,f[v]+=e.b_add,ve=e.aNb0}else if(g[T]>0){let e=S(ve,N,g[T],T);Se+=e.aP0_add,f[v]+=e.b_add,ve=e.aNb0}if(E<0){let e=S(ye,P,1,-1);Se+=e.aP0_add,f[v]+=e.b_add,ye=e.aNb0}else if(g[E]>0){let e=S(ye,P,g[E],E);Se+=e.aP0_add,f[v]+=e.b_add,ye=e.aNb0}if(D<0||g[D]===2){let e=S(be,ee,2,-1);Se+=e.aP0_add,f[v]+=e.b_add,be=e.aNb0}else if(g[D]>0){let e=S(be,ee,g[D],D);Se+=e.aP0_add,f[v]+=e.b_add,be=e.aNb0}if(O<0){let e=S(xe,F,b,-1);Se+=e.aP0_add,f[v]+=e.b_add,xe=e.aNb0}else if(g[O]>0){let e=S(xe,F,g[O],O);Se+=e.aP0_add,f[v]+=e.b_add,xe=e.aNb0}a[v]=ge,o[v]=_e,s[v]=ve,c[v]=ye,l[v]=be,u[v]=xe,d[v]=Se;let Ce=this.pseudo_dt,we=_*y/Ce;d[v]+=we,f[v]+=n[v]*y+we*e[v],d[v]=d[v]/p,f[v]=f[v]+(1-p)*d[v]*e[v]}}averageAxisSingularity(e){if(this.mesh.numCells>this.mesh.nr*this.mesh.ntheta*this.mesh.ny)return;let t=this.mesh,n=t.nr,r=t.ntheta,a=t.ny,o=t.flag;for(let t=0;t<a;t++){let a=0,s=0;for(let c=0;c<r;c++){let l=0+n*(c+r*t);o[l]===0&&(a+=e[l],s++)}if(s>0){let c=a/s;for(let a=0;a<r;a++){let s=0+n*(a+r*t);o[s]===0&&(e[s]=c)}}}}async solveMomentum(){let e=this.mesh,t=e.numCells,n=this.density,r=this.currentRpm*(2*Math.PI/60);for(let e=0;e<t;e++)this.Gamma[e]=(this.mu_app?this.mu_app[e]:this.viscosity)+this.mut[e];for(let t=0;t<e.ny;t++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*t);if(e.flag[s]!==0)continue;let c=e.getCellCenter(o,a,t,this.params).r,l=this.utheta[s],u=n*l*l/c,d=o<e.nr-1?this.p[s+1]:this.p[s],f=o>0?this.p[s-1]:this.p[s],p=(o<e.nr-1?.5*(e.rNode[o+1]+e.rNode[o+2]):.5*(e.rNode[o]+e.rNode[o+1]))-(o>0?.5*(e.rNode[o-1]+e.rNode[o]):.5*(e.rNode[o]+e.rNode[o+1])),m=(d-f)/(p||1e-5);u-=m,this.gradP_r[s]=m,e.mrf[s]===1&&(u+=n*(2*r*l+r*r*c)),u+=this.Sp_ur[s],this.S_C[s]=u,this.S_P[s]=-this.Gamma[s]/(c*c)}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let a=e.getCellCenterByIdx(t,this.params),o=a.r,s=a.theta,c=this.utheta[t],l=e.neighbors[t*6+0],u=e.neighbors[t*6+1],d=e.neighbors[t*6+2],f=e.neighbors[t*6+3],p=l>=0?this.p[l]:this.p[t],m=u>=0?this.p[u]:this.p[t],h=d>=0?this.p[d]:this.p[t],g=f>=0?this.p[f]:this.p[t],_=e.distE[t]+e.distW[t],v=e.distN[t]+e.distS[t],y=(p-m)/(_||1e-5),b=(h-g)/(v||1e-5),x=y*Math.cos(s)+b*Math.sin(s),S=n*c*c/o-x;this.gradP_r[t]=x,e.mrf[t]===1&&(S+=n*(2*r*c+r*r*o)),S+=this.Sp_ur[t],this.S_C[t]=S,this.S_P[t]=-this.Gamma[t]/(o*o)}this.buildCoefficients(this.ur,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_ur.set(this.aP),await this.gaussSeidel(this.ur,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`);for(let t=0;t<e.ny;t++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*t);if(e.flag[s]!==0)continue;let c=e.getCellCenter(o,a,t,this.params).r,l=this.ur[s],u=this.utheta[s],d=-this.Gamma[s]/(c*c);this.S_C[s]=0,l>0?d-=n*l/c:this.S_C[s]+=-n*l*u/c;let f=(a+1)%e.ntheta,p=(a-1+e.ntheta)%e.ntheta,m=this.p[o+e.nr*(f+e.ntheta*t)],h=this.p[o+e.nr*(p+e.ntheta*t)],g=e.thetaNode[f]-e.thetaNode[a];g<0&&(g+=2*Math.PI);let _=e.thetaNode[a]-e.thetaNode[p];_<0&&(_+=2*Math.PI);let v=(m-h)/(c*(g+_)||1e-5);this.S_C[s]-=v,this.gradP_theta[s]=v,e.mrf[s]===1&&(this.S_C[s]-=n*2*r*l),this.S_C[s]+=this.Sp_ut[s],this.S_P[s]=d}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let a=e.getCellCenterByIdx(t,this.params),o=a.r,s=a.theta,c=this.ur[t],l=this.utheta[t],u=e.neighbors[t*6+0],d=e.neighbors[t*6+1],f=e.neighbors[t*6+2],p=e.neighbors[t*6+3],m=u>=0?this.p[u]:this.p[t],h=d>=0?this.p[d]:this.p[t],g=f>=0?this.p[f]:this.p[t],_=p>=0?this.p[p]:this.p[t],v=e.distE[t]+e.distW[t],y=e.distN[t]+e.distS[t],b=(m-h)/(v||1e-5),x=(g-_)/(y||1e-5),S=-b*Math.sin(s)+x*Math.cos(s),C=-this.Gamma[t]/(o*o);this.S_C[t]=0,c>0?C-=n*c/o:this.S_C[t]+=-n*c*l/o,this.S_C[t]-=S,this.gradP_theta[t]=S,e.mrf[t]===1&&(this.S_C[t]+=n*(-2*r*c)),this.S_C[t]+=this.Sp_ut[t],this.S_P[t]=C}this.buildCoefficients(this.utheta,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_ut.set(this.aP);for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let a=r+e.nr*(n+e.ntheta*t);if(e.flag[a]!==0||e.mrf[a]!==1)continue;let o=[],s=(n+1)%e.ntheta,c=(n-1+e.ntheta)%e.ntheta,l=r<e.nr-1?a+1:-1,u=r>0?a-1:-1,d=r+e.nr*(s+e.ntheta*t),f=r+e.nr*(c+e.ntheta*t),p=t<e.ny-1?a+e.nr*e.ntheta:-1,m=t>0?a-e.nr*e.ntheta:-1;for(let t of[l,u,d,f,p,m])t!==-1&&e.flag[t]===0&&e.mrf[t]!==1&&this.aP_ut[t]>1&&o.push(this.aP_ut[t]);if(o.length>0){let e=o.reduce((e,t)=>e+t,0)/o.length;this.aP_ut[a]=e}}for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let a=r+e.nr*(n+e.ntheta*t);if(e.flag[a]!==0||e.mrf[a]!==1||this.aP_ut[a]!==1)continue;let o=(n+1)%e.ntheta,s=(n-1+e.ntheta)%e.ntheta,c=[r<e.nr-1?a+1:-1,r>0?a-1:-1,r+e.nr*(o+e.ntheta*t),r+e.nr*(s+e.ntheta*t),t<e.ny-1?a+e.nr*e.ntheta:-1,t>0?a-e.nr*e.ntheta:-1].filter(t=>t!==-1&&e.flag[t]===0&&this.aP_ut[t]>1).map(e=>this.aP_ut[e]);c.length>0&&(this.aP_ut[a]=c.reduce((e,t)=>e+t,0)/c.length)}await this.gaussSeidel(this.utheta,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`);for(let t=0;t<e.ny;t++)for(let r=0;r<e.ntheta;r++)for(let a=0;a<e.nr;a++){let o=a+e.nr*(r+e.ntheta*t);if(e.flag[o]!==0)continue;let s=t<e.ny-1?this.p[o+e.nr*e.ntheta]:this.p[o],c=t>0?this.p[o-e.nr*e.ntheta]:this.p[o],l=(e.etaNode[t+1]-e.etaNode[t])*this.params.liquidHeight,u=(s-c)/(2*l||1e-5);this.S_C[o]=-u,this.gradP_y[o]=u,this.S_C[o]+=n*9.81*2e-4*(this.T[o]-293.15),this.S_C[o]+=this.Sp_uy[o],this.S_P[o]=0}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let r=e.neighbors[t*6+4],a=e.neighbors[t*6+5],o=r>=0?this.p[r]:this.p[t],s=a>=0?this.p[a]:this.p[t],c=e.distT[t]+e.distB[t],l=(o-s)/(c||1e-5);this.S_C[t]=-l,this.gradP_y[t]=l,this.S_C[t]+=n*9.81*2e-4*(this.T[t]-293.15),this.S_C[t]+=this.Sp_uy[t],this.S_P[t]=0}this.buildCoefficients(this.uy,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_uy.set(this.aP),await this.gaussSeidel(this.uy,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`),this.averageAxisSingularity(this.uy)}async solvePressureCorrection(){let e=this.mesh,t=this.density,n=this.params,r=(!n.mirrorPlateType||n.mirrorPlateType===`None`?`ShellOnly`:n.jacketCoverage||`Full`)===`ShellOnly`?7:1;for(let a=0;a<e.ny;a++)for(let o=0;o<e.ntheta;o++)for(let s=0;s<e.nr;s++){let c=s+e.nr*(o+e.ntheta*a);if(e.flag[c]!==0)continue;let l=s+1<e.nr?c+1:-1,u=s-1>=0?c-1:-1,d=(o+1)%e.ntheta,f=s+e.nr*(d+e.ntheta*a),p=(o-1+e.ntheta)%e.ntheta,m=s+e.nr*(p+e.ntheta*a),h=a+1<e.ny?c+e.nr*e.ntheta:-1,g=a-1>=0?c-e.nr*e.ntheta:-1,_=l>=0?.5*(this.aP_ur[c]+this.aP_ur[l]):this.aP_ur[c],v=u>=0?.5*(this.aP_ur[c]+this.aP_ur[u]):this.aP_ur[c],y=.5*(this.aP_ut[c]+this.aP_ut[f]),b=.5*(this.aP_ut[c]+this.aP_ut[m]),x=h>=0?.5*(this.aP_uy[c]+this.aP_uy[h]):this.aP_uy[c],S=g>=0?.5*(this.aP_uy[c]+this.aP_uy[g]):this.aP_uy[c],C=this.areaE[c]/Math.max(_,1e-10),w=this.areaW[c]/Math.max(v,1e-10),T=this.areaN[c]/Math.max(y,1e-10),E=this.areaS[c]/Math.max(b,1e-10),D=this.areaT[c]/Math.max(x,1e-10),O=this.areaB[c]/Math.max(S,1e-10),A=0,M=0,N=0,P=0,ee=0,F=0;if(l>=0&&e.flag[l]===0){let e=Math.max(.5*(this.dCellR[c]+this.dCellR[l]),1e-9),t=this.p[l]-this.p[c],n=.5*(this.gradP_r[c]+this.gradP_r[l]);A=.5*(this.ur[c]+this.ur[l])+C*(n*e-t)}if(u>=0&&e.flag[u]===0){let e=Math.max(.5*(this.dCellR[c]+this.dCellR[u]),1e-9),t=this.p[c]-this.p[u],n=.5*(this.gradP_r[c]+this.gradP_r[u]);M=.5*(this.ur[c]+this.ur[u])+w*(n*e-t)}if(e.flag[f]===0){let e=Math.max(.5*(this.dCellTheta[c]+this.dCellTheta[f]),1e-9),t=this.p[f]-this.p[c],n=.5*(this.gradP_theta[c]+this.gradP_theta[f]);N=.5*(this.utheta[c]+this.utheta[f])+T*(n*e-t)}if(e.flag[m]===0){let e=Math.max(.5*(this.dCellTheta[c]+this.dCellTheta[m]),1e-9),t=this.p[c]-this.p[m],n=.5*(this.gradP_theta[c]+this.gradP_theta[m]);P=.5*(this.utheta[c]+this.utheta[m])+E*(n*e-t)}if(h>=0&&e.flag[h]===0){let e=Math.max(.5*(this.dCellY[c]+this.dCellY[h]),1e-9),t=this.p[h]-this.p[c],n=.5*(this.gradP_y[c]+this.gradP_y[h]);ee=.5*(this.uy[c]+this.uy[h])+D*(n*e-t)}if(g>=0&&e.flag[g]===0){let e=Math.max(.5*(this.dCellY[c]+this.dCellY[g]),1e-9),t=this.p[c]-this.p[g],n=.5*(this.gradP_y[c]+this.gradP_y[g]);F=.5*(this.uy[c]+this.uy[g])+O*(n*e-t)}let te=t*this.areaE[c]*C,I=t*this.areaW[c]*w,L=t*this.areaN[c]*T,ne=t*this.areaS[c]*E,re=t*this.areaT[c]*D,ie=t*this.areaB[c]*O,ae=t*A*this.areaE[c],R=t*M*this.areaW[c],oe=t*N*this.areaN[c],se=t*P*this.areaS[c],ce=t*ee*this.areaT[c],le=t*F*this.areaB[c];this.b[c]=R-ae+se-oe+le-ce,this.aE[c]=te,this.aW[c]=I,this.aN[c]=L,this.aS[c]=ne,this.aT[c]=re,this.aB[c]=ie;let ue=(t,r)=>{let a=t>=0?e.flag[t]:r;return a===1?n.bc_press_jacket||`fixedFluxPressure`:a===7?n.bc_press_bottomHead||`fixedFluxPressure`:a===2?n.bc_press_surface||`totalPressure`:a===3?n.bc_press_coil||`fixedFluxPressure`:a===4?n.bc_press_impeller||`fixedFluxPressure`:a===5?n.bc_press_rod||`fixedFluxPressure`:a===6&&n.bc_press_baffle||`fixedFluxPressure`},de=(e,t)=>{let n=ue(e,t);return n===`fixedValue`||n===`totalPressure`};(l<0||e.flag[l]!==0)&&(de(l,1)||(this.aE[c]=0)),(u<0||e.flag[u]!==0)&&(u>=0&&e.flag[u]===0||de(u,1)||(this.aW[c]=0)),e.flag[f]!==0&&(de(f,1)||(this.aN[c]=0)),e.flag[m]!==0&&(de(m,1)||(this.aS[c]=0)),(h<0||e.flag[h]!==0)&&(de(h,2)||(this.aT[c]=0)),(g<0||e.flag[g]!==0)&&(de(g,r)||(this.aB[c]=0)),this.aP[c]=this.aE[c]+this.aW[c]+this.aN[c]+this.aS[c]+this.aT[c]+this.aB[c],this.aP[c]===0&&(this.aP[c]=1,this.b[c]=0)}for(let n=e.nr*e.ntheta*e.ny;n<e.numCells;n++){if(e.flag[n]!==0)continue;let r=e.getCellCenterByIdx(n,this.params).theta,a=e.neighbors[n*6+0],o=e.neighbors[n*6+1],s=e.neighbors[n*6+2],c=e.neighbors[n*6+3],l=e.neighbors[n*6+4],u=e.neighbors[n*6+5],d=a>=0?.5*(this.aP_ur[n]+this.aP_ur[a]):this.aP_ur[n],f=o>=0?.5*(this.aP_ur[n]+this.aP_ur[o]):this.aP_ur[n],p=s>=0?.5*(this.aP_ur[n]+this.aP_ur[s]):this.aP_ur[n],m=c>=0?.5*(this.aP_ur[n]+this.aP_ur[c]):this.aP_ur[n],h=l>=0?.5*(this.aP_uy[n]+this.aP_uy[l]):this.aP_uy[n],g=u>=0?.5*(this.aP_uy[n]+this.aP_uy[u]):this.aP_uy[n],_=this.areaE[n]/Math.max(d,1e-10),v=this.areaW[n]/Math.max(f,1e-10),y=this.areaN[n]/Math.max(p,1e-10),b=this.areaS[n]/Math.max(m,1e-10),x=this.areaT[n]/Math.max(h,1e-10),S=this.areaB[n]/Math.max(g,1e-10),C=this.ur[n]*Math.cos(r)-this.utheta[n]*Math.sin(r),w=this.ur[n]*Math.sin(r)+this.utheta[n]*Math.cos(r),T=0,E=0,D=0,O=0,A=0,M=0;if(a>=0&&e.flag[a]===0){let t=e.getCellCenterByIdx(a,this.params).theta;T=.5*(C+(this.ur[a]*Math.cos(t)-this.utheta[a]*Math.sin(t)))}if(o>=0&&e.flag[o]===0){let t=e.getCellCenterByIdx(o,this.params).theta;E=.5*(C+(this.ur[o]*Math.cos(t)-this.utheta[o]*Math.sin(t)))}if(s>=0&&e.flag[s]===0){let t=e.getCellCenterByIdx(s,this.params).theta;D=.5*(w+(this.ur[s]*Math.sin(t)+this.utheta[s]*Math.cos(t)))}if(c>=0&&e.flag[c]===0){let t=e.getCellCenterByIdx(c,this.params).theta;O=.5*(w+(this.ur[c]*Math.sin(t)+this.utheta[c]*Math.cos(t)))}l>=0&&e.flag[l]===0&&(A=.5*(this.uy[n]+this.uy[l])),u>=0&&e.flag[u]===0&&(M=.5*(this.uy[n]+this.uy[u]));let N=a>=0?this.p[a]:this.p[n],P=o>=0?this.p[o]:this.p[n],ee=s>=0?this.p[s]:this.p[n],F=c>=0?this.p[c]:this.p[n],te=l>=0?this.p[l]:this.p[n],I=u>=0?this.p[u]:this.p[n],L=t*this.areaE[n]*(T-_*(N-this.p[n])),ne=t*this.areaW[n]*(E-v*(this.p[n]-P)),re=t*this.areaN[n]*(D-y*(ee-this.p[n])),ie=t*this.areaS[n]*(O-b*(this.p[n]-F)),ae=t*this.areaT[n]*(A-x*(te-this.p[n])),R=t*this.areaB[n]*(M-S*(this.p[n]-I));this.b[n]=ne-L+ie-re+R-ae,this.aE[n]=t*this.areaE[n]*_,this.aW[n]=t*this.areaW[n]*v,this.aN[n]=t*this.areaN[n]*y,this.aS[n]=t*this.areaS[n]*b,this.aT[n]=t*this.areaT[n]*x,this.aB[n]=t*this.areaB[n]*S,(a<0||e.flag[a]!==0)&&(this.aE[n]=0),(o<0||e.flag[o]!==0)&&(this.aW[n]=0),(s<0||e.flag[s]!==0)&&(this.aN[n]=0),(c<0||e.flag[c]!==0)&&(this.aS[n]=0),(l<0||e.flag[l]!==0)&&(this.aT[n]=0),(u<0||e.flag[u]!==0)&&(this.aB[n]=0),this.aP[n]=this.aE[n]+this.aW[n]+this.aN[n]+this.aS[n]+this.aT[n]+this.aB[n],this.aP[n]===0&&(this.aP[n]=1,this.b[n]=0)}let a=this.refPressIdx;if(a===void 0||e.flag[a]!==0){a=-1;for(let t=0;t<e.numCells;t++)if(e.flag[t]===0){a=t;break}}if(a>=0&&(this.aE[a]=0,this.aW[a]=0,this.aN[a]=0,this.aS[a]=0,this.aT[a]=0,this.aB[a]=0,this.aP[a]=1,this.b[a]=0),this.resolvedPinIdx=a,this.iter%50==0){let e=a>=0?this.p[a]:NaN;console.log(`[iter=${this.iter}] pinIdx=${a}, flag=${a>=0?this.mesh.flag[a]:`N/A`}, p[pin]=${e?.toFixed(2)}, pseudo_dt=${this.pseudo_dt.toExponential(3)}, CFL=${this.cfl.toFixed(3)}`)}this.pCorr.fill(0);let o=Math.min(200,Math.max(20,Math.ceil(Math.sqrt(e.nr*e.ny))));await this.gaussSeidel(this.pCorr,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,o,`P`);for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let a=r+e.nr*(n+e.ntheta*t);if(e.flag[a]!==0)continue;this.p[a]+=this.relaxP*this.pCorr[a];let o=r+1<e.nr?a+1:-1,s=r-1>=0?a-1:-1,c=(n+1)%e.ntheta,l=r+e.nr*(c+e.ntheta*t),u=(n-1+e.ntheta)%e.ntheta,d=r+e.nr*(u+e.ntheta*t),f=t+1<e.ny?a+e.nr*e.ntheta:-1,p=t-1>=0?a-e.nr*e.ntheta:-1,m=o>=0?.5*(this.aP_ur[a]+this.aP_ur[o]):this.aP_ur[a],h=s>=0?.5*(this.aP_ur[a]+this.aP_ur[s]):this.aP_ur[a],g=.5*(this.aP_ut[a]+this.aP_ut[l]),_=.5*(this.aP_ut[a]+this.aP_ut[d]),v=f>=0?.5*(this.aP_uy[a]+this.aP_uy[f]):this.aP_uy[a],y=p>=0?.5*(this.aP_uy[a]+this.aP_uy[p]):this.aP_uy[a],b=this.areaE[a]/Math.max(m,1e-10),x=this.areaW[a]/Math.max(h,1e-10),S=this.areaN[a]/Math.max(g,1e-10),C=this.areaS[a]/Math.max(_,1e-10),w=this.areaT[a]/Math.max(v,1e-10),T=this.areaB[a]/Math.max(y,1e-10);o>=0&&e.flag[o]===0&&(this.ur[a]-=b*(this.pCorr[o]-this.pCorr[a])),s>=0&&e.flag[s]===0&&(this.ur[a]-=x*(this.pCorr[a]-this.pCorr[s])),e.flag[l]===0&&(this.utheta[a]-=S*(this.pCorr[l]-this.pCorr[a])),e.flag[d]===0&&(this.utheta[a]-=C*(this.pCorr[a]-this.pCorr[d])),f>=0&&e.flag[f]===0&&(this.uy[a]-=w*(this.pCorr[f]-this.pCorr[a])),p>=0&&e.flag[p]===0&&(this.uy[a]-=T*(this.pCorr[a]-this.pCorr[p]))}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let n=e.getCellCenterByIdx(t,this.params).theta,r=e.neighbors[t*6+0],a=e.neighbors[t*6+1],o=e.neighbors[t*6+2],s=e.neighbors[t*6+3],c=e.neighbors[t*6+4],l=e.neighbors[t*6+5],u=r>=0?this.pCorr[r]:this.pCorr[t],d=a>=0?this.pCorr[a]:this.pCorr[t],f=o>=0?this.pCorr[o]:this.pCorr[t],p=s>=0?this.pCorr[s]:this.pCorr[t],m=c>=0?this.pCorr[c]:this.pCorr[t],h=l>=0?this.pCorr[l]:this.pCorr[t],g=e.distE[t]+e.distW[t],_=e.distN[t]+e.distS[t],v=(u-d)/(g||1e-5),y=(f-p)/(_||1e-5),b=v*Math.cos(n)+y*Math.sin(n),x=-v*Math.sin(n)+y*Math.cos(n),S=this.aP_ur[t],C=this.aP_ut[t],w=this.aP_uy[t],T=e.vol[t],E=T/Math.max(S,1e-10),D=T/Math.max(C,1e-10),O=T/Math.max(w,1e-10);this.ur[t]-=E*b,this.utheta[t]-=D*x;let A=e.distT[t]+e.distB[t],M=(m-h)/(A||1e-5);this.uy[t]-=O*M}let s=this.resolvedPinIdx;if(s>=0&&e.flag[s]===0){let t=this.refPressValue===void 0?0:this.refPressValue,n=this.p[s]-t;if(Math.abs(n)>1e-8)for(let t=0;t<e.numCells;t++)e.flag[t]===0&&(this.p[t]-=n)}this.averageAxisSingularity(this.p)}async solveTurbulence(){let e=this.mesh,t=this.density,n=this.viscosity,r=1.3,a=1.44;for(let r=0;r<e.ny;r++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*r);if(e.flag[s]!==0)continue;let c=(this.currentRpm*2*Math.PI/60)**2*.1,l=this.mut[s]*c,u=Math.max(this.k[s],1e-10),d=Math.max(this.eps[s],1e-10);this.Gamma[s]=n+this.mut[s]/1,this.S_C[s]=l,this.S_P[s]=-t*d/u}for(let r=e.nr*e.ntheta*e.ny;r<e.numCells;r++){if(e.flag[r]!==0)continue;let a=(this.currentRpm*2*Math.PI/60)**2*.1,o=this.mut[r]*a,s=Math.max(this.k[r],1e-10),c=Math.max(this.eps[r],1e-10);this.Gamma[r]=n+this.mut[r]/1,this.S_C[r]=o,this.S_P[r]=-t*c/s}this.buildCoefficients(this.k,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxK),await this.gaussSeidel(this.k,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5),this.averageAxisSingularity(this.k);for(let o=0;o<e.ny;o++)for(let s=0;s<e.ntheta;s++)for(let c=0;c<e.nr;c++){let l=c+e.nr*(s+e.ntheta*o);if(e.flag[l]!==0)continue;let u=(this.currentRpm*2*Math.PI/60)**2*.1,d=this.mut[l]*u,f=Math.max(this.k[l],1e-10),p=Math.max(this.eps[l],1e-10);this.Gamma[l]=n+this.mut[l]/r,this.S_C[l]=p/f*a*d,this.S_P[l]=-1.92*t*(p/f)}for(let o=e.nr*e.ntheta*e.ny;o<e.numCells;o++){if(e.flag[o]!==0)continue;let s=(this.currentRpm*2*Math.PI/60)**2*.1,c=this.mut[o]*s,l=Math.max(this.k[o],1e-10),u=Math.max(this.eps[o],1e-10);this.Gamma[o]=n+this.mut[o]/r,this.S_C[o]=u/l*a*c,this.S_P[o]=-1.92*t*(u/l)}this.buildCoefficients(this.eps,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxK),await this.gaussSeidel(this.eps,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5),this.averageAxisSingularity(this.eps)}async solveEnergy(){let e=this.mesh,t=this.heatCap,n=this.thermCond,r=.85;for(let a=0;a<e.ny;a++)for(let o=0;o<e.ntheta;o++)for(let s=0;s<e.nr;s++){let c=s+e.nr*(o+e.ntheta*a);e.flag[c]===0&&(this.Gamma[c]=(n+t*this.mut[c]/r)/t,this.S_C[c]=0,this.S_P[c]=0)}for(let a=e.nr*e.ntheta*e.ny;a<e.numCells;a++)e.flag[a]===0&&(this.Gamma[a]=(n+t*this.mut[a]/r)/t,this.S_C[a]=0,this.S_P[a]=0);this.buildCoefficients(this.T,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxT),await this.gaussSeidel(this.T,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`T`),this.averageAxisSingularity(this.T)}updateBoundaryConditions(){let e=this.mesh,t=this.params,n=this.currentRpm*(2*Math.PI/60);e.radius*.8-t.coilRadius*2;let r=t.impellerDiameter/2;t.impellerClearance,t.bladeWidth;let a=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,o=t.impellerClearance-t.bladeWidth/2,s=t.impellerClearance+t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(o=t.tankHeight*.1,s=t.tankHeight*.9);let c=r*t.mrfRadialMargin,l=o-t.mrfVerticalMarginBottom,u=s+t.mrfVerticalMarginTop;for(let r=0;r<e.numCells;r++){let s=e.flag[r];e.mrf[r];let d=e.getCellCenterByIdx(r,t),f=0,p=0,m=0;if(r<e.nr*e.ntheta*e.ny)m=Math.floor(r/(e.nr*e.ntheta)),p=Math.floor(r/e.nr)%e.ntheta,f=r%e.nr;else{let t=r-e.nr*e.ntheta*e.ny,n=e.ntheta/4;m=Math.floor(t/(n*n))}if(s===1||s===3||s===4||s===5||s===6){let p=s===5||d.r<=a&&d.y>=o,m=s===4||s===1&&d.r<=c&&d.y>=l&&d.y<=u;p||m?(this.ur[r]=0,this.utheta[r]=d.r*n,this.uy[r]=0):(this.ur[r]=0,this.utheta[r]=0,this.uy[r]=0,s===3?this.T[r]=t.coilTemp:s===1&&t.jacketType!==`None`&&f===e.nr-1?this.T[r]=t.jacketTemp:s===4?this.T[r]=t.impellerTemp===void 0?293.15:t.impellerTemp:s===5?this.T[r]=t.rodTemp===void 0?293.15:t.rodTemp:s===6&&(this.T[r]=t.baffleTemp===void 0?293.15:t.baffleTemp))}else if(s===2){this.ur[r]=0,this.utheta[r]=0,this.uy[r]=0;let n=t.bc_press_surface===`fixedValue`||t.bc_press_surface===`totalPressure`?t.surfacePress===void 0?0:t.surfacePress:0;if(this.p[r]=n,t.bc_heat_surface===`fixedValue`||t.bc_heat_surface===`externalWallHeatTransfer`)this.T[r]=t.surfaceTemp===void 0?293.15:t.surfaceTemp;else{let n;if(r<e.nr*e.ntheta*e.ny)n=r-e.nr*e.ntheta;else{let t=e.ntheta/4;n=r-t*t}m>0&&e.flag[n]===0?this.T[r]=this.T[n]:this.T[r]=t.initialTemp===void 0?293.15:t.initialTemp}}else if(s===0){let t=!1;if(m<e.ny-1){let n;if(r<e.nr*e.ntheta*e.ny)n=f+e.nr*(p+e.ntheta*(m+1));else{let t=e.ntheta/4;n=r+t*t}e.flag[n]===2&&(t=!0)}else m===e.ny-1&&(t=!0);t&&(this.uy[r]=0)}}}},lp=class{constructor(e){this.params=e,this.maxParticles=e.maxParticles||1e3,this.numParticles=0,this.x=new Float32Array(this.maxParticles),this.y=new Float32Array(this.maxParticles),this.z=new Float32Array(this.maxParticles),this.vx=new Float32Array(this.maxParticles),this.vy=new Float32Array(this.maxParticles),this.vz=new Float32Array(this.maxParticles),this.fx=new Float32Array(this.maxParticles),this.fy=new Float32Array(this.maxParticles),this.fz=new Float32Array(this.maxParticles),this.radius=new Float32Array(this.maxParticles),this.mass=new Float32Array(this.maxParticles),this.density=new Float32Array(this.maxParticles),this.kn=e.demKn===void 0?1e4:e.demKn,this.gn=e.demGn===void 0?10:e.demGn,this.kt=e.demKt===void 0?2e3:e.demKt,this.gt=e.demGt===void 0?5:e.demGt,this.mu=e.demMu===void 0?.3:e.demMu,this.surfaceEnergy=e.demSurfaceEnergy===void 0?0:e.demSurfaceEnergy,this.youngsModulus=e.youngsModulus||1e7,this.poissonRatio=e.poissonRatio||.3,this.gx=0,this.gy=-9.81,this.gz=0,this.R_tank=(e.tankDiameter||1)/2,this.H_tank=e.liquidHeight||1}addParticle(e,t,n,r,a,o=0,s=0,c=0){if(this.numParticles>=this.maxParticles)return!1;let l=this.numParticles;return this.x[l]=e,this.y[l]=t,this.z[l]=n,this.vx[l]=o,this.vy[l]=s,this.vz[l]=c,this.radius[l]=r,this.density[l]=a,this.mass[l]=4/3*Math.PI*r*r*r*a,this.numParticles++,!0}integrateStep1(e){for(let t=0;t<this.numParticles;t++){let n=this.fx[t]/this.mass[t],r=this.fy[t]/this.mass[t],a=this.fz[t]/this.mass[t];this.x[t]+=this.vx[t]*e+.5*n*e*e,this.y[t]+=this.vy[t]*e+.5*r*e*e,this.z[t]+=this.vz[t]*e+.5*a*e*e,this.vx[t]+=.5*n*e,this.vy[t]+=.5*r*e,this.vz[t]+=.5*a*e,this.fx[t]=this.mass[t]*this.gx,this.fy[t]=this.mass[t]*this.gy,this.fz[t]=this.mass[t]*this.gz}}integrateStep2(e){for(let t=0;t<this.numParticles;t++){let n=this.fx[t]/this.mass[t],r=this.fy[t]/this.mass[t],a=this.fz[t]/this.mass[t];this.vx[t]+=.5*n*e,this.vy[t]+=.5*r*e,this.vz[t]+=.5*a*e}}computeCollisions(){for(let e=0;e<this.numParticles;e++){let t=Math.sqrt(this.x[e]*this.x[e]+this.z[e]*this.z[e]),n=t+this.radius[e]-this.R_tank;if(n>0){let r=-this.x[e]/(t+1e-9),a=-this.z[e]/(t+1e-9),o=this.vx[e]*r+this.vy[e]*0+this.vz[e]*a,s=this.kn*n-this.gn*o;s>0&&(this.fx[e]+=s*r,this.fz[e]+=s*a)}let r=this.radius[e]-this.y[e];if(r>0){let t=-this.vy[e],n=this.kn*r-this.gn*t;n>0&&(this.fy[e]+=n)}let a=this.y[e]+this.radius[e]-this.H_tank;if(a>0){let t=this.vy[e],n=this.kn*a-this.gn*t;n>0&&(this.fy[e]-=n)}for(let t=e+1;t<this.numParticles;t++){let n=this.x[e]-this.x[t],r=this.y[e]-this.y[t],a=this.z[e]-this.z[t],o=n*n+r*r+a*a,s=this.radius[e]*this.radius[t]/(this.radius[e]+this.radius[t]),c=this.radius[e]+this.radius[t],l=c*1.05;if(o<l*l){let l=Math.sqrt(o),u=n/(l+1e-9),d=r/(l+1e-9),f=a/(l+1e-9),p=c-l,m=0;if(p>0){let n=this.vx[e]-this.vx[t],r=this.vy[e]-this.vy[t],a=this.vz[e]-this.vz[t],o=n*u+r*d+a*f,s=this.kn*p,c=-this.gn*o;m=Math.max(0,s+c)}if(this.surfaceEnergy>0){let e=1.5*Math.PI*this.surfaceEnergy*s;if(p>0)m-=e;else{let t=-p,n=e*Math.exp(-t/(.1*s));m-=n}}this.fx[e]+=m*u,this.fy[e]+=m*d,this.fz[e]+=m*f,this.fx[t]-=m*u,this.fy[t]-=m*d,this.fz[t]-=m*f}}}}computeFluidCoupling(e){let t=e.density,n=e.viscosity;for(let r=0;r<this.numParticles;r++){let a=Math.sqrt(this.x[r]*this.x[r]+this.z[r]*this.z[r]),o=Math.atan2(this.z[r],this.x[r]);o<0&&(o+=2*Math.PI);let s=this.y[r],c=e.interpolateVelocityAt(a,o,s);if(!c)continue;let l=c.ur*Math.cos(o)-c.utheta*Math.sin(o),u=c.ur*Math.sin(o)+c.utheta*Math.cos(o),d=c.uy,f=l-this.vx[r],p=d-this.vy[r],m=u-this.vz[r],h=Math.sqrt(f**2+p**2+m**2),g=2*this.radius[r],_=t*h*g/(n+1e-9),v=24/(_+1e-9);_>.1&&_<=1e3?v=24/_*(1+.15*_**.687):_>1e3&&(v=.44);let y=Math.PI*this.radius[r]*this.radius[r],b=.5*v*t*y*h*h;if(h>1e-6){let t=f/h*b,n=p/h*b,c=m/h*b;this.fx[r]+=t,this.fy[r]+=n,this.fz[r]+=c,e.addParticleDragSource(a,o,s,-t,-n,-c)}}}step(e,t){this.integrateStep1(e),this.computeCollisions(),t&&this.computeFluidCoupling(t),this.integrateStep2(e)}},$={params:{tankDiameter:1,tankHeight:1.2,liquidHeight:1,mirrorPlateType:`None`,impellerType:`Rushton`,impellerDiameter:.333,impellerClearance:.333,bladeCount:6,bladeWidth:.08,bladeThickness:.005,bladeAngle:90,shaftDiameter:void 0,mrfRadialMargin:1.15,mrfVerticalMarginTop:.05,mrfVerticalMarginBottom:.05,baffleCount:4,baffleWidth:.1,baffleThickness:.01,meshNr:150,meshNtheta:180,meshNy:200,blLayers:3,blThickness:.02,blExpansionRatio:1.3,rpm:100,initialTemp:293.15,fluidModel:`Newtonian`,density:1e3,viscosity:.001,powerLawK:.1,powerLawN:.5,yieldStress:10,muMin:1e-4,muMax:100,heatCapacity:4180,thermalConductivity:.6,bc_type_jacket:`wall`,bc_fluid_jacket:`noSlip`,bc_heat_jacket:`externalWallHeatTransfer`,bc_press_jacket:`fixedFluxPressure`,bc_type_bottomHead:`wall`,bc_fluid_bottomHead:`noSlip`,bc_heat_bottomHead:`zeroGradient`,bc_press_bottomHead:`fixedFluxPressure`,bc_type_coil:`wall`,bc_fluid_coil:`noSlip`,bc_heat_coil:`externalWallHeatTransfer`,bc_press_coil:`fixedFluxPressure`,bc_type_impeller:`wall`,bc_fluid_impeller:`noSlip`,bc_heat_impeller:`zeroGradient`,bc_press_impeller:`fixedFluxPressure`,impellerTemp:293.15,bc_type_rod:`wall`,bc_fluid_rod:`noSlip`,bc_heat_rod:`zeroGradient`,bc_press_rod:`fixedFluxPressure`,rodTemp:293.15,bc_type_baffle:`wall`,bc_fluid_baffle:`noSlip`,bc_heat_baffle:`zeroGradient`,bc_press_baffle:`fixedFluxPressure`,baffleTemp:293.15,bc_type_surface:`symmetry`,bc_fluid_surface:`slip`,bc_heat_surface:`zeroGradient`,bc_press_surface:`totalPressure`,surfaceTemp:293.15,surfaceUa:500,jacketPress:0,bottomHeadPress:0,coilPress:0,impellerPress:0,rodPress:0,bafflePress:0,surfacePress:0,jacketType:`Single`,jacketCoverage:`Full`,jacketTemp:350,coilTemp:300,ua:500,bottomHeadTemp:293.15,bottomHeadUa:500,coilEnabled:!1,coilRadius:.1,coilTurns:5,coilHeatSource:`Steam`,showTank:!0,tankOpacity:.3,showImpeller:!0,showBaffle:!0,showCoil:!0,showVelocityVector:!1,showHighTempRegion:!1,highTempLowerLimit:320,showLowTempRegion:!1,lowTempUpperLimit:300,showParticles:!1,particleDensity:2500,particleDiameter:1e3,particleDistributionType:`Uniform`,particleSizeStdDev:200,particleCount:1e3,particlePlacementType:`Uniform`,crystallizationTemp:300,demKn:1e4,demGn:10,demKt:2e3,demGt:5,demMu:.3,demSurfaceEnergy:0,dpmTrailMode:`CurrentOnly`,dpmMaxTrailLength:50,showFluidMesh:!0,showPressureMesh:!1,showMRFZone:!1,crossSectionView:!0,crossSectionType:`Vertical`,crossSectionHeight:.5,crossSectionAngle:.125,displayStyle:`Contour`,showGridMesh:!1,gridMeshStyle:`Wireframe`,interpolateContour:!1,colorScaleMode:`Relative`,currentMinTemp:293.15,currentMaxTemp:293.15,showParticleConc:!1,particleConcThreshold:0,particleConcMaxLimit:10,currentMinConc:0,currentMaxConc:0,showViscosityRegion:!1,viscosityLogScale:!1,currentMinViscosity:.001,currentMaxViscosity:.001,backgroundColor:`#1a1a1a`,turbulenceIntensity:.01,turbulenceModel:`Constant`,computationMode:`CPU`,gizmoMode:`None`,showColorBar:!0,showCFDMonitor:!0,usePerspective:!0,relaxU:.5,relaxP:.3,relaxT:.9,relaxK:.5,energyEquation:`On (温度・伝熱計算)`,multiphaseModel:`None (単相流)`,timeDependence:`Transient (非定常)`,inletOutletCond:`None (密閉容器)`,symmetryCond:`Periodic (周期境界)`,referencePressureType:`LiquidSurface`,referencePressureValue:0,refPressCustomR:0,refPressCustomTheta:0,refPressCustomY:1,cfdScheme:`SIMPLE (Pseudo-transient)`,discretization:`First-order Upwind`}};try{let e=localStorage.getItem(`stirredTankParams`);if(e){let t=JSON.parse(e);for(let e in t)$.params.hasOwnProperty(e)&&($.params[e]=t[e])}}catch{}Object.assign($.params,{viewVerticalTemp:()=>Rf(`VerticalTemp`),viewVerticalVel:()=>Rf(`VerticalVel`),viewHorizontalCross:()=>Rf(`Horizontal`),runSimulation:()=>{if(window.cfdRunning){window.cfdRunning=!1,console.log(`CFD Paused.`);return}if(console.log(`Starting CFD...`),window.cfdRunning=!0,!$.solver){let e=new Yd($.params);$.solver=new cp(e,$.params),$.demSolver=new lp($.params),dp($.demSolver,$.params),up($.solver,e,$.params)}let e=$.solver,t=async()=>{if(!window.cfdRunning)return;if($.solver!==e){console.log(`Aborting stale CFD loop.`);return}for(let t=0;t<5;t++){if($.solver!==e)return;if(await e.step(),$.demSolver){let t=e.pseudo_dt/10;for(let n=0;n<10;n++)$.demSolver.step(t,e)}}if($.solver!==e)return;document.getElementById(`cfd-iter`).innerText=e.iter,document.getElementById(`cfd-res-u`).innerText=e.residuals.U.toExponential(3),document.getElementById(`cfd-res-p`).innerText=e.residuals.P.toExponential(3),document.getElementById(`cfd-res-t`).innerText=e.residuals.T.toExponential(3);let n=document.getElementById(`cfd-cfl`);if(n){let t=e.cfl.toFixed(3)+` (dt=${e.pseudo_dt.toExponential(2)})`;Math.abs(e.currentRpm-$.params.rpm)>.5&&(t+=` [RPM ${e.currentRpm.toFixed(0)}→${$.params.rpm}]`),n.innerText=t,n.style.color=e.cfl>1?`#ff5555`:``}let r=document.getElementById(`cfd-diff-visc`);r&&(r.innerText=e.viscDiffNum.toFixed(3),r.style.color=``);let a=document.getElementById(`cfd-diff-therm`);a&&(a.innerText=e.thermDiffNum.toFixed(3),a.style.color=``),Mf(e,$.params),requestAnimationFrame(t)};t()},resetSimulation:()=>{window.cfdRunning=!1,$.params.currentMinTemp=$.params.initialTemp||293.15,$.params.currentMaxTemp=$.params.initialTemp||293.15,$.params.currentMinPress=0,$.params.currentMaxPress=0,$.params.currentMinConc=0,$.params.currentMaxConc=0,$.params.currentMaxVel=0,$.params.currentMinViscosity=$.params.viscosity||.001,$.params.currentMaxViscosity=$.params.viscosity||.001,$.params.currentMinViscosityDisp=($.params.viscosity||.001).toPrecision(4),$.params.currentMaxViscosityDisp=($.params.viscosity||.001).toPrecision(4);let e=new Yd($.params);$.solver=new cp(e,$.params),$.demSolver=new lp($.params),dp($.demSolver,$.params),up($.solver,e,$.params),document.getElementById(`cfd-iter`).innerText=`0`,document.getElementById(`cfd-res-u`).innerText=`0.000e+0`,document.getElementById(`cfd-res-p`).innerText=`0.000e+0`,document.getElementById(`cfd-res-t`).innerText=`0.000e+0`;let t=document.getElementById(`cfd-cfl`);t&&(t.innerText=`0.000`,t.style.color=``);let n=document.getElementById(`cfd-diff-visc`);n&&(n.innerText=`0.000`,n.style.color=``);let r=document.getElementById(`cfd-diff-therm`);r&&(r.innerText=`0.000`,r.style.color=``),Nf(),Mf($.solver,$.params),Af(),window.updateAllGuiDisplays&&window.updateAllGuiDisplays(),console.log(`CFD Reset.`)}});function up(e,t,n){if(!e||!t)return;let r=t.nr,a=t.ntheta,o=t.ny,s=(e,t,n)=>e+r*(t+a*n),c;switch(n.referencePressureType){case`TopCenter`:c=s(0,0,o-1);break;case`BottomCenter`:c=s(0,0,0);break;case`Custom`:{let e=n.tankDiameter/2,t=n.liquidHeight,l=e/r,u=2*Math.PI/a,d=t/o;c=s(Math.max(0,Math.min(r-1,Math.round(n.refPressCustomR/l))),Math.max(0,Math.min(a-1,Math.round(n.refPressCustomTheta*Math.PI/180/u))),Math.max(0,Math.min(o-1,Math.round(n.refPressCustomY/d))));break}default:c=s(Math.floor(r/2),0,o-1);break}e.refPressIdx=c,e.refPressValue=n.referencePressureValue??0,console.log(`[RefPress] type=${n.referencePressureType}, flatIdx=${c}, value=${e.refPressValue} Pa`)}function dp(e,t){let n=t.particleCount||1e3,r=t.particleDensity||2500,a=(t.tankDiameter||1)/2,o=t.liquidHeight||1,s=t.particleDiameter||100,c=t.particleSizeStdDev||20,l=t.particleDistributionType||`Uniform`;for(let t=0;t<n;t++){let t=s;if(l===`Log-Normal`&&c>0){let e=c*c,n=Math.log(s*s/Math.sqrt(e+s*s)),r=Math.sqrt(Math.log(e/(s*s)+1)),a=0,o=0;for(;a===0;)a=Math.random();for(;o===0;)o=Math.random();let l=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*o);t=Math.exp(n+r*l)}else if(l===`Normal`&&c>0){let e=0,n=0;for(;e===0;)e=Math.random();for(;n===0;)n=Math.random();t=s+c*(Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n))}t=Math.max(.1,t);let n=t*1e-6/2,u=a*Math.sqrt(Math.random())*.8,d=Math.random()*2*Math.PI,f=u*Math.cos(d),p=u*Math.sin(d),m=o*.8+Math.random()*.1;e.addParticle(f,m,p,n,r)}}async function fp(){let{scene:e,camera:t,renderer:n,controls:r}=Cf(document.getElementById(`app`),$.params);$.scene=e,window.updateCFDGeometry=()=>{Nf(),jf($.params),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.updateCFDOnly=()=>{jf($.params),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.makeCFDPanelDraggable=pp,tp($.params,e),document.getElementById(`btn-run`).addEventListener(`click`,$.params.runSimulation),document.getElementById(`btn-reset`).addEventListener(`click`,$.params.resetSimulation);let a=document.getElementById(`select-device`);a&&(a.value=$.params.computationMode||`CPU`,a.addEventListener(`change`,e=>{let t=e.target.value;t===`GPU (WebGPU)`&&!(`gpu`in navigator)?(alert(`お使いのブラウザはWebGPUをサポートしていません。CPUモードで実行します。`),a.value=`CPU`,$.params.computationMode=`CPU`):$.params.computationMode=t;try{let e=localStorage.getItem(`stirredTankParams`),t=e?JSON.parse(e):{};t.computationMode=$.params.computationMode,localStorage.setItem(`stirredTankParams`,JSON.stringify(t))}catch{}}));let o=document.getElementById(`cfd-monitor`),s=document.getElementById(`cfd-monitor-header`);o&&s&&pp(o,s),Lf(),window.appParams=$.params,window.app=$}function pp(e,t){let n=0,r=0,a=0,o=0;t?t.onmousedown=s:e.onmousedown=s;function s(e){e||=window.event,e.preventDefault(),a=e.clientX,o=e.clientY,document.onmouseup=l,document.onmousemove=c,t&&(t.style.cursor=`grabbing`)}function c(t){t||=window.event,t.preventDefault(),n=a-t.clientX,r=o-t.clientY,a=t.clientX,o=t.clientY;let s=e.getBoundingClientRect(),c=s.left-n,l=s.top-r,u=window.innerWidth-s.width-10,d=window.innerHeight-s.height-10;c<10&&(c=10),c>u&&(c=u),l<10&&(l=10),l>d&&(l=d),e.style.transform=`none`,e.style.bottom=`auto`,e.style.left=c+`px`,e.style.top=l+`px`}function l(){document.onmouseup=null,document.onmousemove=null,t&&(t.style.cursor=`grab`)}}fp();