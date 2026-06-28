(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,M=1031,N=1033,P=33776,F=33777,I=33778,L=33779,ee=35840,te=35841,ne=35842,R=35843,re=36196,ie=37492,z=37496,ae=37488,oe=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,B=36283,Ee=36284,De=36285,Oe=36286,V=2300,ke=2301,H=2302,Ae=2303,je=2400,Me=2401,Ne=2402,Pe=3200,Fe=`srgb`,Ie=`srgb-linear`,Le=`linear`,Re=`srgb`,ze=7680,Be=35044,Ve=2e3;function He(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ue(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function We(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ge(){let e=We(`canvas`);return e.style.display=`block`,e}var Ke={},qe=null;function Je(...e){let t=`THREE.`+e.shift();qe?qe(`log`,t,...e):console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=Ye(e);let t=`THREE.`+e.shift();if(qe)qe(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=Ye(e);let t=`THREE.`+e.shift();if(qe)qe(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in Ke||(Ke[t]=!0,U(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ct(e,t,n){return e===t?0:(n-e)/(t-e)}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t,n,r){return lt(e,t,1-Math.exp(-n*r))}function dt(e,t=1){return t-Math.abs(ot(e,t*2)-t)}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ht(e,t){return e+Math.random()*(t-e)}function gt(e){return e*(.5-Math.random())}function _t(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vt(e){return e*nt}function yt(e){return e*rt}function bt(e){return(e&e-1)==0&&e!==0}function xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function St(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ct(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:U(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Et={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:at,euclideanModulo:ot,mapLinear:st,inverseLerp:ct,lerp:lt,damp:ut,pingpong:dt,smoothstep:ft,smootherstep:pt,randInt:mt,randFloat:ht,randFloatSpread:gt,seededRandom:_t,degToRad:vt,radToDeg:yt,isPowerOfTwo:bt,ceilPowerOfTwo:xt,floorPowerOfTwo:St,setQuaternionFromProperEuler:Ct,normalize:Tt,denormalize:wt},G=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new K,kt=new Dt,At=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jt.makeScale(e,t)),this}rotate(e){return this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new At,Mt=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:Ie,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Le:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ie]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var Ft=Pt();function It(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Lt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Rt,zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rt===void 0&&(Rt=We(`canvas`)),Rt.width=e.width,Rt.height=e.height;let t=Rt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Rt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=We(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=It(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(It(t[e]/255)*255):t[e]=It(t[e]);return{data:t,width:e.width,height:e.height}}else return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Bt=0,Vt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ht(r[t].image)):e.push(Ht(r[t]))}else e=Ht(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ht(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Ut=0,Wt=new K,Gt=class e extends $e{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=it(),this.name=``,this.source=new Vt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wt).x}get height(){return this.source.getSize(Wt).y}get depth(){return this.source.getSize(Wt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null,Gt.DEFAULT_MAPPING=300,Gt.DEFAULT_ANISOTROPY=1;var Kt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];let r=new Gt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Vt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},Jt=class extends qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yt=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xt=class extends Gt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qt.setFromMatrixColumn(e,0).length(),i=1/Qt.setFromMatrixColumn(e,1).length(),a=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(en,e,tn)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),nn.crossVectors(n,an),nn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),nn.crossVectors(n,an)),nn.normalize(),rn.crossVectors(an,nn),r[0]=nn.x,r[4]=rn.x,r[8]=an.x,r[1]=nn.y,r[5]=rn.y,r[9]=an.y,r[2]=nn.z,r[6]=rn.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qt.set(r[0],r[1],r[2]).length(),o=Qt.set(r[4],r[5],r[6]).length(),s=Qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$t.copy(this);let c=1/a,l=1/o,u=1/s;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ve,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qt=new K,$t=new Zt,en=new K(0,0,0),tn=new K(1,1,1),nn=new K,rn=new K,an=new K,on=new Zt,sn=new Dt,cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return on.makeRotationFromQuaternion(e),this.setFromRotationMatrix(on,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sn.setFromEuler(this),this.setFromQuaternion(sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER=`XYZ`;var ln=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},un=0,dn=new K,fn=new Dt,pn=new Zt,mn=new K,hn=new K,gn=new K,_n=new Dt,vn=new K(1,0,0),yn=new K(0,1,0),bn=new K(0,0,1),xn={type:`added`},Sn={type:`removed`},Cn={type:`childadded`,child:null},wn={type:`childremoved`,child:null},Tn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:un++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new cn,r=new Dt,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new At}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(vn,e)}rotateY(e){return this.rotateOnAxis(yn,e)}rotateZ(e){return this.rotateOnAxis(bn,e)}translateOnAxis(e,t){return dn.copy(e).applyQuaternion(this.quaternion),this.position.add(dn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vn,e)}translateY(e){return this.translateOnAxis(yn,e)}translateZ(e){return this.translateOnAxis(bn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mn.copy(e):mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(hn,mn,this.up):pn.lookAt(mn,hn,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),fn.setFromRotationMatrix(pn),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,e,gn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,_n,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Tn.DEFAULT_UP=new K(0,1,0),Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Tn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Dn={type:`move`},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},jn={h:0,s:0,l:0};function Mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Nn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mn(i,r,e+1/3),this.g=Mn(i,r,e),this.b=Mn(i,r,e-1/3)}return Ft.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=kn[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}copyLinearToSRGB(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Ft.workingToColorSpace(Pn.copy(this),e),Math.round(at(Pn.r*255,0,255))*65536+Math.round(at(Pn.g*255,0,255))*256+Math.round(at(Pn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,r=Pn.g,i=Pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Fe){Ft.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,r=Pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(jn);let n=lt(An.h,jn.h,t),r=lt(An.s,jn.s,t),i=lt(An.l,jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Nn;Nn.NAMES=kn;var Fn=class extends Tn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new K,Ln=new K,Rn=new K,zn=new K,Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new Kt,qn=new Kt,Jn=new Kt,Yn=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){In.subVectors(r,t),Ln.subVectors(n,t),Rn.subVectors(e,t);let a=In.dot(In),o=In.dot(Ln),s=In.dot(Rn),c=Ln.dot(Ln),l=Ln.dot(Rn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,zn.x),s.addScaledVector(a,zn.y),s.addScaledVector(o,zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Kn.setScalar(0),qn.setScalar(0),Jn.setScalar(0),Kn.fromBufferAttribute(e,t),qn.fromBufferAttribute(e,n),Jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kn,i.x),a.addScaledVector(qn,i.y),a.addScaledVector(Jn,i.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Ln.subVectors(e,t),In.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),In.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Bn.subVectors(r,n),Vn.subVectors(i,n),Un.subVectors(e,n);let s=Bn.dot(Un),c=Vn.dot(Un);if(s<=0&&c<=0)return t.copy(n);Wn.subVectors(e,r);let l=Bn.dot(Wn),u=Vn.dot(Wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Bn,a);Gn.subVectors(e,i);let f=Bn.dot(Gn),p=Vn.dot(Gn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Hn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Hn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Bn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qn):Qn.fromBufferAttribute(r,t),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$n.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(e.matrixWorld),this.union($n)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),sr.subVectors(this.max,or),er.subVectors(e.a,or),tr.subVectors(e.b,or),nr.subVectors(e.c,or),rr.subVectors(tr,er),ir.subVectors(nr,tr),ar.subVectors(er,nr);let t=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-ar.z,ar.y,rr.z,0,-rr.x,ir.z,0,-ir.x,ar.z,0,-ar.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-ar.y,ar.x,0];return!ur(t,er,tr,nr,sr)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,er,tr,nr,sr))?!1:(cr.crossVectors(rr,ir),t=[cr.x,cr.y,cr.z],ur(t,er,tr,nr,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new K,new K,new K,new K,new K,new K,new K,new K],Qn=new K,$n=new Xn,er=new K,tr=new K,nr=new K,rr=new K,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K;function ur(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lr.fromArray(e,a);let o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),s=t.dot(lr),c=n.dot(lr),l=r.dot(lr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dr=new K,fr=new G,pr=0,mr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Be,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},hr=class extends mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gr=class extends mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},q=class extends mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Xn,vr=new K,yr=new K,br=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new Zt,Cr=new Tn,wr=new K,Tr=new Xn,Er=new Xn,Dr=new K,Or=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(He(e)?gr:hr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new At().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new q(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new mr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new G,f=new G,p=new G,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mr(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=0,Ar=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){U(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},jr=new K,Mr=new K,Nr=new K,Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mr.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Mr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Pr.dot(this.direction),s=-Pr.dot(Nr),c=Pr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mr).addScaledVector(Nr,d),f}intersectSphere(e,t){jr.subVectors(e.center,this.origin);let n=jr.dot(this.direction),r=jr.dot(jr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,n,r,i){Fr.subVectors(t,e),Ir.subVectors(n,e),Lr.crossVectors(Fr,Ir);let a=this.direction.dot(Lr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pr.subVectors(this.origin,e);let s=o*this.direction.dot(Ir.crossVectors(Pr,Ir));if(s<0)return null;let c=o*this.direction.dot(Fr.cross(Pr));if(c<0||s+c>a)return null;let l=-o*Pr.dot(Lr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zr=class extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Nn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new Zt,Vr=new Rr,Hr=new br,Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=new K,Jr=new K,Yr=new K,Xr=new K,J=class extends Tn{constructor(e=new Or,t=new zr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),!(Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2))&&(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function Qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Zr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new K;Yn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=Yn.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=Yn.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};Yn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var $r=class extends Gt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=new K,ti=new K,ni=new At,ri=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ei.subVectors(n,t).cross(ti.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ei),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ni.getNormalMatrix(e),r=this.coplanarPoint(ei).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new br,ai=new G(.5,.5),oi=new K,si=class{constructor(e=new ri,t=new ri,n=new ri,r=new ri,i=new ri,a=new ri){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ve,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476+ai.distanceTo(e.center),ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oi.x=r.normal.x>0?e.max.x:e.min.x,oi.y=r.normal.y>0?e.max.y:e.min.y,oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ci=class extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Nn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},li=new K,ui=new K,di=new Zt,fi=new Rr,pi=new br,mi=new K,hi=new K,gi=class extends Tn{constructor(e=new Or,t=new ci){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)li.fromBufferAttribute(t,e-1),ui.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=li.distanceTo(ui);e.setAttribute(`lineDistance`,new q(n,1))}else U(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere),pi.applyMatrix4(r),pi.radius+=i,e.ray.intersectsSphere(pi)===!1)return;di.copy(r).invert(),fi.copy(e.ray).applyMatrix4(di);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=_i(this,e,fi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=_i(this,e,fi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=_i(this,e,fi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=_i(this,e,fi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function _i(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(li.fromBufferAttribute(s,i),ui.fromBufferAttribute(s,a),n.distanceSqToSegment(li,ui,mi,hi)>r)return;mi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(mi);if(!(c<t.near||c>t.far))return{distance:c,point:hi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var vi=new K,yi=new K,bi=class extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)vi.fromBufferAttribute(t,e),yi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+vi.distanceTo(yi);e.setAttribute(`lineDistance`,new q(n,1))}else U(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},xi=class extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Nn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Si=new Zt,Ci=new Rr,wi=new br,Ti=new K,Ei=class extends Tn{constructor(e=new Or,t=new xi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere),wi.applyMatrix4(r),wi.radius+=i,e.ray.intersectsSphere(wi)===!1)return;Si.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Si);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ti.fromBufferAttribute(l,n),Di(Ti,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ti.fromBufferAttribute(l,a),Di(Ti,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Di(e,t,n,r,i,a,o){let s=Ci.distanceSqToPoint(e);if(s<n){let n=new K;Ci.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Oi=class extends Gt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ki=class extends Gt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ai=class extends ki{constructor(e,t=g,n=301,r,i,o=a,s=a,c,l=D){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ji=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ni=class e extends Or{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new q(a,3)),this.setAttribute(`normal`,new q(o,3)),this.setAttribute(`uv`,new q(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Pi=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fi=class e extends Pi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ii=class e extends Or{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new q(i,3)),this.setAttribute(`normal`,new q(i.slice(),3)),this.setAttribute(`uv`,new q(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Li=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new Zt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(at(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(at(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ri=class extends Li{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zi=class extends Ri{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Bi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Vi=new K,Hi=new K,Ui=new Bi,Wi=new Bi,Gi=new Bi,Ki=class extends Li{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Hi.subVectors(r[0],r[1]).add(r[0]),c=Hi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Vi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Vi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ui.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Wi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Gi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ui.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Wi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Gi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ui.calc(s),Wi.calc(s),Gi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ji(e,t){let n=1-e;return n*n*t}function Yi(e,t){return 2*(1-e)*e*t}function Xi(e,t){return e*e*t}function Zi(e,t,n,r){return Ji(e,t)+Yi(e,n)+Xi(e,r)}function Qi(e,t){let n=1-e;return n*n*n*t}function $i(e,t){let n=1-e;return 3*n*n*e*t}function ea(e,t){return 3*(1-e)*e*e*t}function ta(e,t){return e*e*e*t}function na(e,t,n,r,i){return Qi(e,t)+$i(e,n)+ea(e,r)+ta(e,i)}var ra=class extends Li{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(na(e,r.x,i.x,a.x,o.x),na(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends Li{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(na(e,r.x,i.x,a.x,o.x),na(e,r.y,i.y,a.y,o.y),na(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},aa=class extends Li{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Li{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Li{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Zi(e,r.x,i.x,a.x),Zi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Li{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Zi(e,r.x,i.x,a.x),Zi(e,r.y,i.y,a.y),Zi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(qi(o,s.x,c.x,l.x,u.x),qi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},ua=Object.freeze({__proto__:null,ArcCurve:zi,CatmullRomCurve3:Ki,CubicBezierCurve:ra,CubicBezierCurve3:ia,EllipseCurve:Ri,LineCurve:aa,LineCurve3:oa,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ca,SplineCurve:la}),da=class extends Li{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ua[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ua[n.type]().fromJSON(n))}return this}},fa=class extends da{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new aa(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new sa(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ra(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new la([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ri(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pa=class extends fa{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new fa().fromJSON(n))}return this}};function ma(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Sa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return _a(a,o,n,s,c,l,0),o}function ha(e,t,n,r,i){let a;if(i===Ka(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ua(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ua(i/r|0,e[i],e[i+1],a);return a&&Fa(a,a.next)&&(Wa(a),a=a.next),a}function ga(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Fa(n,n.next)||Pa(n.prev,n,n.next)===0)){if(Wa(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function _a(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Da(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ya(e,r,i,a):va(e)){t.push(c.i,e.i,l.i),Wa(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=ba(ga(e),t),_a(e,t,n,r,i,a,2)):o===2&&xa(e,t,n,r,i,a):_a(ga(e),t,n,r,i,a,1);break}}}function va(e){let t=e.prev,n=e,r=e.next;if(Pa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ma(i,s,a,c,o,l,m.x,m.y)&&Pa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ya(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Pa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ka(p,m,t,n,r),v=ka(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ma(s,u,c,d,l,f,y.x,y.y)&&Pa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ma(s,u,c,d,l,f,b.x,b.y)&&Pa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ma(s,u,c,d,l,f,y.x,y.y)&&Pa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ma(s,u,c,d,l,f,b.x,b.y)&&Pa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ba(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Fa(r,i)&&Ia(r,n,n.next,i)&&Ba(r,i)&&Ba(i,r)&&(t.push(r.i,n.i,i.i),Wa(n),Wa(n.next),n=e=i),n=n.next}while(n!==e);return ga(n)}function xa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Na(o,e)){let s=Ha(o,e);o=ga(o,o.next),s=ga(s,s.next),_a(o,t,n,r,i,a,0),_a(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Sa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Aa(o))}i.sort(Ca);for(let e=0;e<i.length;e++)n=wa(i[e],n);return n}function Ca(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function wa(e,t){let n=Ta(e,t);if(!n)return t;let r=Ha(n,e);return ga(r,r.next),ga(n,n.next)}function Ta(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Fa(e,n))return n;do{if(Fa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ja(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ba(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ea(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ea(e,t){return Pa(e.prev,e,t.prev)<0&&Pa(t.next,e,e.next)<0}function Da(e,t,n,r){let i=e;do i.z===0&&(i.z=ka(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Oa(i)}function Oa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ka(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Aa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ja(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ma(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&ja(e,t,n,r,i,a,o,s)}function Na(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!za(e,t)&&(Ba(e,t)&&Ba(t,e)&&Va(e,t)&&(Pa(e.prev,e,t.prev)||Pa(e,t.prev,t))||Fa(e,t)&&Pa(e.prev,e,e.next)>0&&Pa(t.prev,t,t.next)>0)}function Pa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Fa(e,t){return e.x===t.x&&e.y===t.y}function Ia(e,t,n,r){let i=Ra(Pa(e,t,n)),a=Ra(Pa(e,t,r)),o=Ra(Pa(n,r,e)),s=Ra(Pa(n,r,t));return!!(i!==a&&o!==s||i===0&&La(e,n,t)||a===0&&La(e,r,t)||o===0&&La(n,e,r)||s===0&&La(n,t,r))}function La(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ra(e){return e>0?1:e<0?-1:0}function za(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ia(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ba(e,t){return Pa(e.prev,e,e.next)<0?Pa(e,t,e.next)>=0&&Pa(e,e.prev,t)>=0:Pa(e,t,e.prev)<0||Pa(e,e.next,t)<0}function Va(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ha(e,t){let n=Ga(e.i,e.x,e.y),r=Ga(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ua(e,t,n,r){let i=Ga(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Wa(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ga(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ka(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var qa=class{static triangulate(e,t,n=2){return ma(e,t,n)}},Ja=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ya(e),Xa(n,e);let a=e.length;t.forEach(Ya);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Xa(n,t[e]);let o=qa.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ya(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Xa(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Za=class e extends Or{constructor(e=new pa([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new q(r,3)),this.setAttribute(`uv`,new q(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Qa:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ja.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ja.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||W(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Ja.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);R(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);R(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Ja.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),R(x.x,x.y,x.z)):R(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),R(x.x,x.y,x.z)):R(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);R(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?R(i.x,i.y+g[s-1].y,g[s-1].x+n):R(i.x,i.y,c+n)}}}ee(),te();function ee(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];re(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];re(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function te(){let e=r.length/3,t=0;ne(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ie(t+r+n,t+i+n,t+i+a,t+r+a)}}}function R(e,t,n){a.push(e),a.push(t),a.push(n)}function re(e,t,i){z(e),z(t),z(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ae(o[0]),ae(o[1]),ae(o[2])}function ie(e,t,i,a){z(e),z(t),z(a),z(t),z(i),z(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ae(s[0]),ae(s[1]),ae(s[3]),ae(s[1]),ae(s[2]),ae(s[3])}function z(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ae(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $a(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ua[i.type]().fromJSON(i)),new e(r,t.options)}},Qa={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function $a(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var eo=class e extends Ii{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},to=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new q(p,3)),this.setAttribute(`normal`,new q(m,3)),this.setAttribute(`uv`,new q(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ro=class e extends Or{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new q(c,3)),this.setAttribute(`normal`,new q(l,3)),this.setAttribute(`uv`,new q(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},io=class e extends Or{constructor(e=new ca(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new q(u,3)),this.setAttribute(`normal`,new q(d,3)),this.setAttribute(`uv`,new q(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ao(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(so(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(so(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function oo(e){let t={};for(let n=0;n<e.length;n++){let r=ao(e[n]);for(let e in r)t[e]=r[e]}return t}function so(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function co(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function lo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ft.workingColorSpace}var uo={clone:ao,merge:oo},fo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,po=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mo=class extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fo,this.fragmentShader=po,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=co(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ho=class extends mo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},go=class extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Nn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_o=class extends go{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nn(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nn(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nn(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},vo=class extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yo=class extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var xo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},So=class extends xo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:je,endingEnd:je}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Me:i=e,o=2*t-n;break;case Ne:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Me:a=e,s=2*n-t;break;case Ne:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Co=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},wo=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},To=class extends xo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Eo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new To(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case V:t=this.InterpolantFactoryMethodDiscrete;break;case ke:t=this.InterpolantFactoryMethodLinear;break;case H:t=this.InterpolantFactoryMethodSmooth;break;case Ae:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return V;case this.InterpolantFactoryMethodLinear:return ke;case this.InterpolantFactoryMethodSmooth:return H;case this.InterpolantFactoryMethodBezier:return Ae}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ue(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===H,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Eo.prototype.ValueTypeName=``,Eo.prototype.TimeBufferType=Float32Array,Eo.prototype.ValueBufferType=Float32Array,Eo.prototype.DefaultInterpolation=ke;var Do=class extends Eo{constructor(e,t,n){super(e,t,n)}};Do.prototype.ValueTypeName=`bool`,Do.prototype.ValueBufferType=Array,Do.prototype.DefaultInterpolation=V,Do.prototype.InterpolantFactoryMethodLinear=void 0,Do.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}};Oo.prototype.ValueTypeName=`color`;var ko=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}};ko.prototype.ValueTypeName=`number`;var Ao=class extends xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},jo=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};jo.prototype.ValueTypeName=`quaternion`,jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends Eo{constructor(e,t,n){super(e,t,n)}};Mo.prototype.ValueTypeName=`string`,Mo.prototype.ValueBufferType=Array,Mo.prototype.DefaultInterpolation=V,Mo.prototype.InterpolantFactoryMethodLinear=void 0,Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Eo{constructor(e,t,n,r){super(e,t,n,r)}};No.prototype.ValueTypeName=`vector`;var Po=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Fo=class{constructor(e){this.manager=e===void 0?Po:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Io=class extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Nn(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Lo=new Zt,Ro=new K,zo=new K,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vo=new K,Ho=new Dt,Uo=new K,Wo=class extends Tn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Ho,Uo),Uo.x===1&&Uo.y===1&&Uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Uo.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vo,Ho,Uo),Uo.x===1&&Uo.y===1&&Uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Uo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Go=new K,Ko=new G,qo=new G,Jo=class extends Wo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Go.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Go.x,Go.y).multiplyScalar(-e/Go.z),Go.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Go.x,Go.y).multiplyScalar(-e/Go.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,qo),t.subVectors(qo,Ko)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yo=class extends Wo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xo=class extends Bo{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zo=class extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new Xo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qo=class extends Io{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},$o=-90,es=1,ts=class extends Tn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jo($o,es,e,t);r.layers=this.layers,this.add(r);let i=new Jo($o,es,e,t);i.layers=this.layers,this.add(i);let a=new Jo($o,es,e,t);a.layers=this.layers,this.add(a);let o=new Jo($o,es,e,t);o.layers=this.layers,this.add(o);let s=new Jo($o,es,e,t);s.layers=this.layers,this.add(s);let c=new Jo($o,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ns=class extends Jo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},rs=`\\[\\]\\.:\\/`,is=RegExp(`[\\[\\]\\.:\\/]`,`g`),as=`[^\\[\\]\\.:\\/]`,os=`[^`+rs.replace(`\\.`,``)+`]`,ss=`((?:WC+[\\/:])*)`.replace(`WC`,as),cs=`(WCOD+)?`.replace(`WCOD`,os),ls=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,as),us=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,as),ds=RegExp(`^`+ss+cs+ls+us+`$`),fs=[`material`,`materials`,`bones`,`map`],ps=class{constructor(e,t,n){let r=n||ms.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ms=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(is,``)}static parseTrackName(e){let t=ds.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);fs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ms.Composite=ps,ms.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ms.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ms.prototype.GetterByBindingType=[ms.prototype._getValue_direct,ms.prototype._getValue_array,ms.prototype._getValue_arrayElement,ms.prototype._getValue_toArray],ms.prototype.SetterByBindingTypeAndVersioning=[[ms.prototype._setValue_direct,ms.prototype._setValue_direct_setNeedsUpdate,ms.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ms.prototype._setValue_array,ms.prototype._setValue_array_setNeedsUpdate,ms.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ms.prototype._setValue_arrayElement,ms.prototype._setValue_arrayElement_setNeedsUpdate,ms.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ms.prototype._setValue_fromArray,ms.prototype._setValue_fromArray_setNeedsUpdate,ms.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hs=new Zt,gs=class{constructor(e,t,n=0,r=1/0){this.ray=new Rr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ln,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return hs.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hs),this}intersectObject(e,t=!0,n=[]){return vs(e,this,n,t),n.sort(_s),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)vs(e[r],this,n,t);return n.sort(_s),n}};function _s(e,t){return e.distance-t.distance}function vs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)vs(r[e],t,n,!0)}}var ys=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=at(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var bs=class extends bi{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Or;r.setAttribute(`position`,new q(t,3)),r.setAttribute(`color`,new q(n,3));let i=new ci({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new Nn,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},xs=class extends $e{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){U(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ss(e,t,n,r){let i=Cs(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case M:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case N:return e*t*4/i.components*i.byteLength;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case I:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case R:return Math.max(e,16)*Math.max(t,8)/4;case ee:case ne:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case z:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case B:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Cs(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function ws(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ts(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Es={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Y={common:{diffuse:{value:new Nn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Nn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Nn(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ds={basic:{uniforms:oo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Es.meshbasic_vert,fragmentShader:Es.meshbasic_frag},lambert:{uniforms:oo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new Nn(0)},envMapIntensity:{value:1}}]),vertexShader:Es.meshlambert_vert,fragmentShader:Es.meshlambert_frag},phong:{uniforms:oo([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new Nn(0)},specular:{value:new Nn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Es.meshphong_vert,fragmentShader:Es.meshphong_frag},standard:{uniforms:oo([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new Nn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Es.meshphysical_vert,fragmentShader:Es.meshphysical_frag},toon:{uniforms:oo([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new Nn(0)}}]),vertexShader:Es.meshtoon_vert,fragmentShader:Es.meshtoon_frag},matcap:{uniforms:oo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Es.meshmatcap_vert,fragmentShader:Es.meshmatcap_frag},points:{uniforms:oo([Y.points,Y.fog]),vertexShader:Es.points_vert,fragmentShader:Es.points_frag},dashed:{uniforms:oo([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Es.linedashed_vert,fragmentShader:Es.linedashed_frag},depth:{uniforms:oo([Y.common,Y.displacementmap]),vertexShader:Es.depth_vert,fragmentShader:Es.depth_frag},normal:{uniforms:oo([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Es.meshnormal_vert,fragmentShader:Es.meshnormal_frag},sprite:{uniforms:oo([Y.sprite,Y.fog]),vertexShader:Es.sprite_vert,fragmentShader:Es.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Es.background_vert,fragmentShader:Es.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Es.backgroundCube_vert,fragmentShader:Es.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Es.cube_vert,fragmentShader:Es.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Es.equirect_vert,fragmentShader:Es.equirect_frag},distance:{uniforms:oo([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Es.distance_vert,fragmentShader:Es.distance_frag},shadow:{uniforms:oo([Y.lights,Y.fog,{color:{value:new Nn(0)},opacity:{value:1}}]),vertexShader:Es.shadow_vert,fragmentShader:Es.shadow_frag}};Ds.physical={uniforms:oo([Ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Nn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Nn(0)},specularColor:{value:new Nn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Es.meshphysical_vert,fragmentShader:Es.meshphysical_frag};var Os={r:0,b:0,g:0},ks=new Zt,As=new At;As.set(-1,0,0,0,1,0,0,0,1);function js(e,t,n,r,i,a){let o=new Nn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new Mi(1,1,1),new mo({name:`BackgroundCubeMaterial`,uniforms:ao(Ds.backgroundCube.uniforms),vertexShader:Ds.backgroundCube.vertexShader,fragmentShader:Ds.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ks.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(As),l.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Re,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new to(2,2),new mo({name:`BackgroundMaterial`,uniforms:ao(Ds.background.uniforms),vertexShader:Ds.background.vertexShader,fragmentShader:Ds.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ft.getTransfer(i.colorSpace)!==Re,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Os,lo(e)),n.buffers.color.setClear(Os.r,Os.g,Os.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ms(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ns(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ps(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ri,s=new At,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Is=4,Ls=[.125,.215,.35,.446,.526,.582],Rs=20,zs=256,Bs=new Yo,Vs=new Nn,Hs=null,Us=0,Ws=0,Gs=!1,Ks=new K,qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ks}=i;Hs=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Us,Ws),this._renderer.xr.enabled=Gs,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Us=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ie,depthBuffer:!1},r=Ys(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ys(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Js(r)),this._blurMaterial=Qs(r,e,t),this._ggxMaterial=Zs(r,e,t)}return r}_compileMaterial(e){let t=new J(new Or,e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,n,r,i){let a=new Jo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Vs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Mi,new zr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Vs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Xs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$s());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Xs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Bs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Is?n-d+Is:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Xs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Bs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Xs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Bs)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&W(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Rs;m>Rs&&U(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);let h=[],g=0;for(let e=0;e<Rs;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Xs(t,3*v*(r>_-Is?r-_+Is:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Bs)}};function Js(e){let t=[],n=[],r=[],i=e,a=e-Is+1+Ls.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Is?s=Ls[o-e+Is-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Or;h.setAttribute(`position`,new mr(f,3)),h.setAttribute(`uv`,new mr(p,2)),h.setAttribute(`faceIndex`,new mr(m,1)),r.push(new J(h,null)),i>Is&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ys(e,t,n){let r=new Jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Xs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Zs(e,t,n){return new mo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qs(e,t,n){let r=new Float32Array(Rs),i=new K(0,1,0);return new mo({name:`SphericalGaussianBlur`,defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:tc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $s(){return new mo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ec(){return new mo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}var nc=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mi(5,5,5),i=new mo({name:`CubemapFromEquirect`,uniforms:ao(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new ts(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function rc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new nc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ic(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ac(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?gr:hr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function oc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function cc(e,t,n){let r=new WeakMap,i=new Kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Yt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function lc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var uc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function dc(e,t,n,r,i){let a=new Jt(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new ki(t,n):void 0}),o=new Jt(t,n,{type:v,depthBuffer:!1,stencilBuffer:!1}),s=new Or;s.setAttribute(`position`,new q([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new q([0,2,0,0,2,0],2));let c=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new J(s,c),u=new Yo(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Ft.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=uc[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var fc=new Gt,pc=new ki(1,1),mc=new Yt,hc=new Xt,gc=new Oi,_c=[],vc=[],yc=new Float32Array(16),bc=new Float32Array(9),xc=new Float32Array(4);function Sc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=_c[i];if(a===void 0&&(a=new Float32Array(i),_c[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Cc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function wc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Tc(e,t){let n=vc[t];n===void 0&&(n=new Int32Array(t),vc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cc(n,t))return;e.uniform2fv(this.addr,t),wc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Cc(n,t))return;e.uniform3fv(this.addr,t),wc(n,t)}}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cc(n,t))return;e.uniform4fv(this.addr,t),wc(n,t)}}function Ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),wc(n,t)}else{if(Cc(n,r))return;xc.set(r),e.uniformMatrix2fv(this.addr,!1,xc),wc(n,r)}}function jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),wc(n,t)}else{if(Cc(n,r))return;bc.set(r),e.uniformMatrix3fv(this.addr,!1,bc),wc(n,r)}}function Mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Cc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),wc(n,t)}else{if(Cc(n,r))return;yc.set(r),e.uniformMatrix4fv(this.addr,!1,yc),wc(n,r)}}function Nc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cc(n,t))return;e.uniform2iv(this.addr,t),wc(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cc(n,t))return;e.uniform3iv(this.addr,t),wc(n,t)}}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cc(n,t))return;e.uniform4iv(this.addr,t),wc(n,t)}}function Lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Cc(n,t))return;e.uniform2uiv(this.addr,t),wc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Cc(n,t))return;e.uniform3uiv(this.addr,t),wc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Cc(n,t))return;e.uniform4uiv(this.addr,t),wc(n,t)}}function Vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(pc.compareFunction=n.isReversedDepthBuffer()?518:515,a=pc):a=fc,n.setTexture2D(t||a,i)}function Hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||hc,i)}function Uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||gc,i)}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||mc,i)}function Gc(e){switch(e){case 5126:return Ec;case 35664:return Dc;case 35665:return Oc;case 35666:return kc;case 35674:return Ac;case 35675:return jc;case 35676:return Mc;case 5124:case 35670:return Nc;case 35667:case 35671:return Pc;case 35668:case 35672:return Fc;case 35669:case 35673:return Ic;case 5125:return Lc;case 36294:return Rc;case 36295:return zc;case 36296:return Bc;case 35678:case 36198:case 36298:case 36306:case 35682:return Vc;case 35679:case 36299:case 36307:return Hc;case 35680:case 36300:case 36308:case 36293:return Uc;case 36289:case 36303:case 36311:case 36292:return Wc}}function Kc(e,t){e.uniform1fv(this.addr,t)}function qc(e,t){let n=Sc(t,this.size,2);e.uniform2fv(this.addr,n)}function Jc(e,t){let n=Sc(t,this.size,3);e.uniform3fv(this.addr,n)}function Yc(e,t){let n=Sc(t,this.size,4);e.uniform4fv(this.addr,n)}function Xc(e,t){let n=Sc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Zc(e,t){let n=Sc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qc(e,t){let n=Sc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $c(e,t){e.uniform1iv(this.addr,t)}function el(e,t){e.uniform2iv(this.addr,t)}function tl(e,t){e.uniform3iv(this.addr,t)}function nl(e,t){e.uniform4iv(this.addr,t)}function rl(e,t){e.uniform1uiv(this.addr,t)}function il(e,t){e.uniform2uiv(this.addr,t)}function al(e,t){e.uniform3uiv(this.addr,t)}function ol(e,t){e.uniform4uiv(this.addr,t)}function sl(e,t,n){let r=this.cache,i=t.length,a=Tc(n,i);Cc(r,a)||(e.uniform1iv(this.addr,a),wc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?pc:fc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cl(e,t,n){let r=this.cache,i=t.length,a=Tc(n,i);Cc(r,a)||(e.uniform1iv(this.addr,a),wc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||hc,a[e])}function ll(e,t,n){let r=this.cache,i=t.length,a=Tc(n,i);Cc(r,a)||(e.uniform1iv(this.addr,a),wc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||gc,a[e])}function ul(e,t,n){let r=this.cache,i=t.length,a=Tc(n,i);Cc(r,a)||(e.uniform1iv(this.addr,a),wc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||mc,a[e])}function dl(e){switch(e){case 5126:return Kc;case 35664:return qc;case 35665:return Jc;case 35666:return Yc;case 35674:return Xc;case 35675:return Zc;case 35676:return Qc;case 5124:case 35670:return $c;case 35667:case 35671:return el;case 35668:case 35672:return tl;case 35669:case 35673:return nl;case 5125:return rl;case 36294:return il;case 36295:return al;case 36296:return ol;case 35678:case 36198:case 36298:case 36306:case 35682:return sl;case 35679:case 36299:case 36307:return cl;case 35680:case 36300:case 36308:case 36293:return ll;case 36289:case 36303:case 36311:case 36292:return ul}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gc(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dl(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function gl(e,t){e.seq.push(t),e.map[t.id]=t}function _l(e,t,n){let r=e.name,i=r.length;for(hl.lastIndex=0;;){let a=hl.exec(r),o=hl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gl(n,l===void 0?new fl(s,e,t):new pl(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new ml(s),gl(n,e)),n=e}}}var vl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_l(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bl=37297,xl=0;function Sl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cl=new At;function wl(e){Ft._getMatrix(Cl,Ft.workingColorSpace,e);let t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(Ft.getTransfer(e)){case Le:return[t,`LinearTransferOETF`];case Re:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sl(e.getShaderSource(t),r)}else return i}function El(e,t){let n=wl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Dl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ol(e,t){let n=Dl[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kl=new K;function Al(){return Ft.getLuminanceCoefficients(kl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kl.x.toFixed(4)}, ${kl.y.toFixed(4)}, ${kl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pl).join(`
`)}function Ml(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pl(e){return e!==``}function Fl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Il(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ll=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(e){return e.replace(Ll,Bl)}var zl=new Map;function Bl(e,t){let n=Es[t];if(n===void 0){let e=zl.get(t);if(e!==void 0)n=Es[e],U(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Rl(n)}var Vl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(e){return e.replace(Vl,Ul)}function Ul(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Wl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var Gl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Kl(e){return Gl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ql={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Jl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ql[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Yl={302:`ENVMAP_MODE_REFRACTION`};function Xl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ql(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zl[e.combine]||`ENVMAP_BLENDING_NONE`}function $l(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function eu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Kl(n),l=Jl(n),u=Xl(n),d=Ql(n),f=$l(n),p=jl(n),m=Ml(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Pl).join(`
`),_.length>0&&(_+=`
`)):(g=[Wl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pl).join(`
`),_=[Wl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Es.tonemapping_pars_fragment,n.toneMapping===0?``:Ol(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Es.colorspace_pars_fragment,El(`linearToOutputTexel`,n.outputColorSpace),Al(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pl).join(`
`)),o=Rl(o),o=Fl(o,n),o=Il(o,n),s=Rl(s),s=Fl(s,n),s=Il(s,n),o=Hl(o),s=Hl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=yl(i,i.VERTEX_SHADER,y),S=yl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Tl(i,x,`vertex`),n=Tl(i,S,`fragment`);W(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new vl(i,h),T=Nl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,bl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var tu=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ru(e),t.set(e,n)),n}},ru=class{constructor(e){this.id=tu++,this.code=e,this.usedTimes=0}};function iu(e){return e===1030||e===37490||e===36285}function au(e,t,n,r,i,a){let o=new ln,s=new nu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ds[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,ee=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap,R=!!i.normalMap,re=!!i.displacementMap,ie=!!i.emissiveMap,z=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.iridescence>0,ue=i.sheen>0,de=i.transmission>0,fe=oe&&!!i.anisotropyMap,pe=se&&!!i.clearcoatMap,me=se&&!!i.clearcoatNormalMap,he=se&&!!i.clearcoatRoughnessMap,ge=le&&!!i.iridescenceMap,_e=le&&!!i.iridescenceThicknessMap,ve=ue&&!!i.sheenColorMap,ye=ue&&!!i.sheenRoughnessMap,be=!!i.specularMap,xe=!!i.specularColorMap,Se=!!i.specularIntensityMap,Ce=de&&!!i.transmissionMap,we=de&&!!i.thicknessMap,Te=!!i.gradientMap,B=!!i.alphaMap,Ee=i.alphaTest>0,De=!!i.alphaHash,Oe=!!i.extensions,V=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(V=e.toneMapping);let ke={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:te,bumpMap:ne,normalMap:R,displacementMap:re,emissiveMap:ie,normalMapObjectSpace:R&&i.normalMapType===1,normalMapTangentSpace:R&&i.normalMapType===0,packedNormalMap:R&&i.normalMapType===0&&iu(i.normalMap.format),metalnessMap:z,roughnessMap:ae,anisotropy:oe,anisotropyMap:fe,clearcoat:se,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:ce,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:ue,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:de,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:B,alphaTest:Ee,alphaHash:De,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ee&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:R&&m(i.normalMap.channel),displacementMapUv:re&&m(i.displacementMap.channel),emissiveMapUv:ie&&m(i.emissiveMap.channel),metalnessMapUv:z&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ye&&m(i.sheenRoughnessMap.channel),specularMapUv:be&&m(i.specularMap.channel),specularColorMapUv:xe&&m(i.specularColorMap.channel),specularIntensityMapUv:Se&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:we&&m(i.thicknessMap.channel),alphaMapUv:B&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(R||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||B),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&R===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:V,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Ft.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ie&&i.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Oe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Oe&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ds[t];n=uo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new eu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||su),r.length>1&&r.sort(t||cu),i.length>1&&i.sort(t||cu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lu,e.set(t,[i])):n>=r.length?(i=new lu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new Nn};break;case`SpotLight`:n={position:new K,direction:new K,color:new Nn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Nn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Nn,groundColor:new Nn};break;case`RectAreaLight`:n={color:new Nn,position:new K,halfWidth:new K,halfHeight:new K};break}return e[t.id]=n,n}}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var pu=0;function mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hu(e){let t=new du,n=fu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new Zt,o=new Zt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(mu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function gu(e){let t=new hu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function _u(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gu(e),t.set(n,[a])):r>=i.length?(a=new gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
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
}`,bu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],xu=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Su=new Zt,Cu=new K,wu=new K;function Tu(e,t,n){let r=new si,i=new G,o=new G,s=new Kt,l=new vo,u=new yo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new mo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:vu,fragmentShader:yu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){U(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let y=p.getFrameExtents();i.multiply(y),o.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(o.x=Math.floor(f/y.x),i.x=o.x*y.x,p.mapSize.x=o.x),i.y>f&&(o.y=Math.floor(f/y.y),i.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Jt(i.x,i.y,{format:j,type:v,minFilter:c,magFilter:c,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ki(i.x,i.y,_),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=D,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a}else d.isPointLight?(p.map=new nc(i.x),p.map.depthTexture=new Ai(i.x,g)):(p.map=new Jt(i.x,i.y),p.map.depthTexture=new ki(i.x,i.y,g)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=D,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=c,p.map.depthTexture.magFilter=c):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=a,p.map.depthTexture.magFilter=a);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Cu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Cu),wu.copy(e.position),wu.add(bu[t]),e.up.copy(xu[t]),e.lookAt(wu),e.updateMatrixWorld(),n.makeTranslation(-Cu.x,-Cu.y,-Cu.z),Su.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Su,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Jt(i.x,i.y,{format:j,type:v})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Eu(e,t){function n(){let t=!1,n=new Kt,r=null,i=new Kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Nn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new Kt().fromArray(ee),R=new Kt().fromArray(te);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ie={};ie[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),ie[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ie[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),z(e.DEPTH_TEST),o.setFunc(3),pe(!1),me(1),z(e.CULL_FACE),de(0);function z(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function de(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ae(e.BLEND),g=!1);return}if(g===!1&&(z(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function fe(t,n){t.side===2?ae(e.CULL_FACE):z(e.CULL_FACE);let r=t.side===1;n&&(r=!r),pe(r),t.blending===1&&t.transparent===!1?de(0):de(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?z(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function pe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(z(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?z(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function ye(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ie[t]),i.type=t,i.texture=n)}function be(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function V(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function H(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ae(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function je(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function Me(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ne(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Pe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Nn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:z,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:de,setMaterial:fe,setFlipSided:pe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:Oe,texImage3D:V,pixelStorei:H,getParameter:ke,updateUBOMapping:Me,uniformBlockBinding:Ne,texStorage2D:Ee,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:B,scissor:Ae,viewport:je,reset:Pe}}function Du(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new G,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):We(`canvas`)}function T(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Le:Ft.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),L(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function L(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ee=0;function te(){ee=0}function ne(){return ee}function R(e){ee=e}function re(){let e=ee;return e>=p.maxTextures&&U(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ee+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(t,n){let r=f.get(t);if(t.isVideoTexture&&Oe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ae(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){he(r,t,n);return}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function oe(t,n){let r=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){he(r,t,n);return}d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){ge(r,t,n);return}d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ce={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},le={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},ue={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function de(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ce[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ce[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ce[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,le[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,le[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ue[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function fe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ie(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&I(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function pe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function me(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=pe(r.start,n.width,4),c=pe(t.start,n.width,4);r.start<=i+1&&s===c&&pe(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function he(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=fe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Ft.getPrimaries(Ft.workingColorSpace),r=n.colorSpace===``?null:Ft.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=V(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);de(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=j(n.format===O,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&me(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data);else if(n.isCompressedTexture)if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023)if(c!==null)if(g){if(v)if(n.layerUpdates.size>0){let t=Ss(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0);else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data)}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}else if(n.isDataArrayTexture)if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v)if(n.layerUpdates.size>0){let r=Ss(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_)if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}let i=e.RGBA,a=e.RGBA,o=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,i,a,o,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ke(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=ke(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&D(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ge(t,n,r){if(n.image.length!==6)return;let i=fe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Ft.getPrimaries(Ft.workingColorSpace),s=n.colorSpace===``?null:Ft.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=V(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);de(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=ke(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&D(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Ee(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);De(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,(!a.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,N)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),de(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else z(n.depthTexture,0);let o=a.__webglTexture,s=Ee(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)De(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`Unknown depthTexture format`)}function be(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer)if(r)for(let e=0;e<6;e++)ye(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(n.__webglFramebuffer[0],t,0):ye(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ve(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){let i=f.get(t);n!==void 0&&_e(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&be(t)}function Se(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,P);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&De(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=Ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),de(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)_e(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else _e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&D(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),de(s,i),_e(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&D(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),de(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)_e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else _e(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&D(a),d.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),D(t),d.unbindTexture()}}}let we=[],Te=[];function B(t){if(t.samples>0){if(De(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(we.push(o),Te.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ee(e){return Math.min(p.maxSamples,e.samples)}function De(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Oe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function V(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ft.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=re,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=R,this.setTexture2D=z,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Ou(e,t){function n(n,r=``){let i,a=Ft.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ku=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Au=`
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

}`,ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ji(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mo({vertexShader:ku,fragmentShader:Au,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mu=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new ju,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new G,k=null,A=new Jo;A.viewport=new Kt;let j=new Jo;j.viewport=new Kt;let M=[A,j],N=new ns,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new On,C[e]=t),t.getHandSpace()};function I(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function L(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,L),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,L),r.addEventListener(`inputsourceschange`,ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Jt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new ki(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Jt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let te=new K,ne=new K;function R(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=A.near=t,N.far=j.far=A.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,A.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;re(N,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?R(N,A,j):N.projectionMatrix.copy(A.projectionMatrix),ie(e,N,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let z=null;function ae(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new Jo,o.layers.enable(n),o.viewport=new Kt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ji,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}z&&z(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let oe=new ws;oe.setAnimationLoop(ae),this.setAnimationLoop=function(e){z=e},this.dispose=function(){}}},Nu=new Zt,Pu=new At;Pu.set(-1,0,0,0,1,0,0,0,1);function Fu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,lo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Nu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Pu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Iu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Lu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ru=null;function zu(){return Ru===null&&(Ru=new $r(Lu,16,16,j,v),Ru.name=`DFG_LUT`,Ru.minFilter=c,Ru.magFilter=c,Ru.wrapS=r,Ru.wrapT=r,Ru.generateMipmaps=!1,Ru.needsUpdate=!0),Ru}var Bu=class{constructor(e={}){let{canvas:t=Ge(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:h=d}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let S=h,C=new Set([N,M,A]),w=new Set([d,g,m,x,y,b]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,k=null,j=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,ee=null;this._outputColorSpace=Fe;let te=0,ne=0,R=null,re=-1,ie=null,z=new Kt,ae=new Kt,oe=null,se=new Nn(0),ce=0,le=t.width,ue=t.height,de=1,fe=null,pe=null,me=new Kt(0,0,le,ue),he=new Kt(0,0,le,ue),ge=!1,_e=new si,ve=!1,ye=!1,be=new Zt,xe=new K,Se=new Kt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Te(){return R===null?de:1}let B=n;function Ee(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,tt,!1),t.addEventListener(`webglcontextrestored`,nt,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),B===null){let t=`webgl2`;if(B=Ee(t,e),B===null)throw Ee(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw W(`WebGLRenderer: `+e.message),e}let De,Oe,V,ke,H,Ae,je,Me,Ne,Pe,Ie,Le,Re,ze,Be,He,Ue,We,Ke,qe,Ye,Xe,Qe;function $e(){De=new ic(B),De.init(),Ye=new Ou(B,De),Oe=new Ps(B,De,e,Ye),V=new Eu(B,De),Oe.reversedDepthBuffer&&p&&V.buffers.depth.setReversed(!0),ke=new sc(B),H=new ou,Ae=new Du(B,De,V,H,Oe,Ye,ke),je=new rc(I),Me=new Ts(B),Xe=new Ms(B,Me),Ne=new ac(B,Me,ke,Xe),Pe=new lc(B,Ne,Me,Xe,ke),We=new cc(B,Oe,Ae),Be=new Fs(H),Ie=new au(I,je,De,Oe,Xe,Be),Le=new Fu(I,H),Re=new uu,ze=new _u(De),Ue=new js(I,je,V,Pe,_,s),He=new Tu(I,Pe,Oe),Qe=new Iu(B,ke,Oe,V),Ke=new Ns(B,De,ke),qe=new oc(B,De,ke),ke.programs=Ie.programs,I.capabilities=Oe,I.extensions=De,I.properties=H,I.renderLists=Re,I.shadowMap=He,I.state=V,I.info=ke}$e(),S!==1009&&(F=new dc(S,t.width,t.height,r,i));let et=new Mu(I,B);this.xr=et,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=De.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=De.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(e){e!==void 0&&(de=e,this.setSize(le,ue,!1))},this.getSize=function(e){return e.set(le,ue)},this.setSize=function(e,n,r=!0){if(et.isPresenting){U(`WebGLRenderer: Can't change size while VR device is presenting.`);return}le=e,ue=n,t.width=Math.floor(e*de),t.height=Math.floor(n*de),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(le*de,ue*de).floor()},this.setDrawingBufferSize=function(e,n,r){le=e,ue=n,de=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){W(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(z)},this.getViewport=function(e){return e.copy(me)},this.setViewport=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),V.viewport(z.copy(me).multiplyScalar(de).round())},this.getScissor=function(e){return e.copy(he)},this.setScissor=function(e,t,n,r){e.isVector4?he.set(e.x,e.y,e.z,e.w):he.set(e,t,n,r),V.scissor(ae.copy(he).multiplyScalar(de).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(e){V.setScissorTest(ge=e)},this.setOpaqueSort=function(e){fe=e},this.setTransparentSort=function(e){pe=e},this.getClearColor=function(e){return e.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=C.has(t)}if(e){let e=R.texture.type,t=w.has(e),n=Ue.getClearColor(),r=Ue.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ee=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,nt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),Ue.dispose(),Re.dispose(),ze.dispose(),H.dispose(),je.dispose(),Pe.dispose(),Xe.dispose(),Qe.dispose(),Ie.dispose(),et.dispose(),et.removeEventListener(`sessionstart`,ut),et.removeEventListener(`sessionend`,dt),ft.stop()};function tt(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),L=!0}function nt(){Je(`WebGLRenderer: Context Restored.`),L=!1;let e=ke.autoReset,t=He.enabled,n=He.autoUpdate,r=He.needsUpdate,i=He.type;$e(),ke.autoReset=e,He.enabled=t,He.autoUpdate=n,He.needsUpdate=r,He.type=i}function rt(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){ot(e),H.remove(e)}function ot(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ce);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=St(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ne.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Me.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Te()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Te()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh)if(De.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Me.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function st(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,vt(e,t,n),e.side=0,e.needsUpdate=!0,vt(e,t,n),e.side=2):vt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=ze.get(n),k.init(t),P.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];st(a,n,e),r.add(a)}else st(t,n,e),r.add(t)}),k=P.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}De.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new ws;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,et.setAnimationLoop(e),e===null?ft.stop():ft.start()},et.addEventListener(`sessionstart`,ut),et.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;ee!==null&&ee.renderStart(e,t);let n=et.enabled===!0&&et.isPresenting===!0,r=F!==null&&(R===null||n)&&F.begin(I,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(t),t=et.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,R),k=ze.get(e,P.length),k.init(t),k.state.textureUnits=Ae.getTextureUnits(),P.push(k),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),_e.setFromProjectionMatrix(be,Ve,t.reversedDepth),ye=this.localClippingEnabled,ve=Be.init(this.clippingPlanes,ye),O=Re.get(e,j.length),O.init(),j.push(O),et.enabled===!0&&et.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,I.sortObjects)}pt(e,t,0,I.sortObjects),O.finish(),I.sortObjects===!0&&O.sort(fe,pe),we=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,we&&Ue.addToRenderList(O,e),this.info.render.frame++,ve===!0&&Be.beginShadows();let i=k.state.shadowsArray;if(He.render(i,e,t),ve===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&F.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ht(n,r,e,a)}we&&Ue.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];mt(O,e,n,n.viewport)}}else r.length>0&&ht(n,r,e,t),we&&Ue.render(e),mt(O,e,t)}R!==null&&ne===0&&(Ae.updateMultisampleRenderTarget(R),Ae.updateRenderTargetMipmap(R)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),Xe.resetDefaultState(),re=-1,ie=null,P.pop(),P.length>0?(k=P[P.length-1],Ae.setTextureUnits(k.state.textureUnits),ve===!0&&Be.setGlobalState(I.clippingPlanes,k.state.camera)):k=null,j.pop(),O=j.length>0?j[j.length-1]:null,ee!==null&&ee.renderEnd()};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||_e.intersectsSprite(e)){r&&Se.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=Pe.update(e),i=e.material;i.visible&&O.push(e,t,i,n,Se.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||_e.intersectsObject(e))){let t=Pe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Se.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Se.copy(e.boundingSphere.center)),Se.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,Se.z,o)}}else i.visible&&O.push(e,t,i,n,Se.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function mt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),ve===!0&&Be.setGlobalState(I.clippingPlanes,n),r&&V.viewport(z.copy(r)),i.length>0&&gt(i,t,n),a.length>0&&gt(a,t,n),o.length>0&&gt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function ht(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=De.has(`EXT_color_buffer_half_float`)||De.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Jt(1,1,{generateMipmaps:!0,type:e?v:d,minFilter:u,samples:Math.max(4,Oe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||z;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(se),ce=I.getClearAlpha(),ce<1&&I.setClearColor(16777215,.5),I.clear(),we&&Ue.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),ve===!0&&Be.setGlobalState(I.clippingPlanes,r),gt(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),De.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,_t(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(se,ce),p!==void 0&&(r.viewport=p),I.toneMapping=f}function gt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&_t(o,t,n,s,l,c)}}function _t(e,t,n,r,i,a){e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function vt(e,t,n){t.isScene!==!0&&(t=Ce);let r=H.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=je.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return bt(e,s),d}else s.uniforms=Ie.getUniforms(e),ee!==null&&e.isNodeMaterial&&ee.build(e,n,s),e.onBeforeCompile(s,I),d=Ie.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Be.uniform),bt(e,s),r.needsLights=wt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function yt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function bt(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function xt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function St(e,t,n,r,i){t.isScene!==!0&&(t=Ce),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?I.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ft.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=je.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=k.state.lights;if(ve===!0&&(ye===!0||e!==ie)){let t=e===ie&&r.id===re;Be.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Be.numPlanes||v.numIntersection!==Be.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=vt(r,t,i),ee&&r.isNodeMaterial&&ee.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==re&&(re=r.id,C=!0),v.needsLights){let e=xt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ie!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,xe.setFromMatrixPosition(e.matrixWorld)),Oe.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),ie!==e&&(ie=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Ae),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Ae),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Ae)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,Ae),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,Ae),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,Ae));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&We.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=zu()),C){if(T.setValue(B,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Ct(E,w),a&&r.fog===!0&&Le.refreshFogUniforms(E,a),Le.refreshMaterialUniforms(E,r,de,ue,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}vl.upload(B,yt(v),E,Ae)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vl.upload(B,yt(v),E,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Qe.update(n,x),Qe.bind(n,x)}}return x}function Ct(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function wt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Tt=B.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){R=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),z.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest,V.viewport(z),V.scissor(ae),V.setScissorTest(oe),re=-1;return}else if(o.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(o.__hasExternalTextures)Ae.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ae.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,z.copy(e.viewport),ae.copy(e.scissor),oe=e.scissorTest}else z.copy(me).multiplyScalar(de).floor(),ae.copy(he).multiplyScalar(de).floor(),oe=ge;if(n!==0&&(r=Tt),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(z),V.scissor(ae),V.setScissorTest(oe),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}re=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!Oe.textureFormatReadable(c)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Oe.textureTypeReadable(l)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Ye.convert(c),Ye.convert(l),a)}finally{let e=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s),!Oe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Oe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Ye.convert(l),Ye.convert(u),0);let f=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,f);let p=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ze(B,p,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,d),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.deleteBuffer(d),B.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()};let Et=B.createFramebuffer(),G=B.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ye.convert(t.format),_=Ye.convert(t.type),v;t.isData3DTexture?(Ae.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,Et),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){te=0,ne=0,R=null,V.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}},Vu={type:`change`},Hu={type:`start`},Uu={type:`end`},Wu=new Rr,Gu=new ri,Ku=Math.cos(70*Et.DEG2RAD),qu=new K,Ju=2*Math.PI,Yu={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xu=1e-6,Zu=class extends xs{constructor(n,r=null){super(n,r),this.state=Yu.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Dt,this._lastTargetPosition=new K,this._quat=new Dt().setFromUnitVectors(n.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new K,this._rotateStart=new G,this._rotateEnd=new G,this._rotateDelta=new G,this._panStart=new G,this._panEnd=new G,this._panDelta=new G,this._dollyStart=new G,this._dollyEnd=new G,this._dollyDelta=new G,this._dollyDirection=new K,this._mouse=new G,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$u.bind(this),this._onPointerDown=Qu.bind(this),this._onPointerUp=ed.bind(this),this._onContextMenu=sd.bind(this),this._onMouseWheel=rd.bind(this),this._onKeyDown=id.bind(this),this._onTouchStart=ad.bind(this),this._onTouchMove=od.bind(this),this._onMouseDown=td.bind(this),this._onMouseMove=nd.bind(this),this._interceptControlDown=cd.bind(this),this._interceptControlUp=ld.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=Yu.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qu.copy(t).sub(this.target),qu.applyQuaternion(this._quat),this._spherical.setFromVector3(qu),this.autoRotate&&this.state===Yu.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ju:n>Math.PI&&(n-=Ju),r<-Math.PI?r+=Ju:r>Math.PI&&(r-=Ju),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(qu.setFromSpherical(this._spherical),qu.applyQuaternion(this._quatInverse),t.copy(this.target).add(qu),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=qu.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new K(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new K(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=qu.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Wu.origin.copy(this.object.position),Wu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wu.direction))<Ku?this.object.lookAt(this.target):(Gu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wu.intersectPlane(Gu,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Xu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xu||this._lastTargetPosition.distanceToSquared(this.target)>Xu?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Ju/60/60*this.autoRotateSpeed:Ju/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qu.setFromMatrixColumn(t,0),qu.multiplyScalar(-e),this._panOffset.add(qu)}_panUp(e,t){this.screenSpacePanning===!0?qu.setFromMatrixColumn(t,1):(qu.setFromMatrixColumn(t,0),qu.crossVectors(this.object.up,qu)),qu.multiplyScalar(e),this._panOffset.add(qu)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;qu.copy(r).sub(this.target);let i=qu.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ju*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ju*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ju*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ju*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ju*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ju*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ju*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ju*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new G,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Qu(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function $u(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function ed(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(Uu),this.state=Yu.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function td(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Yu.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Yu.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Yu.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Yu.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Yu.PAN}break;default:this.state=Yu.NONE}this.state!==Yu.NONE&&this.dispatchEvent(Hu)}function nd(e){switch(this.state){case Yu.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Yu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Yu.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function rd(e){this.enabled===!1||this.enableZoom===!1||this.state!==Yu.NONE||(e.preventDefault(),this.dispatchEvent(Hu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Uu))}function id(e){this.enabled!==!1&&this._handleKeyDown(e)}function ad(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Yu.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Yu.TOUCH_PAN;break;default:this.state=Yu.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Yu.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Yu.TOUCH_DOLLY_ROTATE;break;default:this.state=Yu.NONE}break;default:this.state=Yu.NONE}this.state!==Yu.NONE&&this.dispatchEvent(Hu)}function od(e){switch(this._trackPointer(e),this.state){case Yu.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Yu.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Yu.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Yu.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Yu.NONE}}function sd(e){this.enabled!==!1&&e.preventDefault()}function cd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ld(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var ud=new gs,dd=new K,fd=new K,pd=new Dt,md={X:new K(1,0,0),Y:new K(0,1,0),Z:new K(0,0,1)},hd={type:`change`},gd={type:`mouseDown`,mode:null},_d={type:`mouseUp`,mode:null},vd={type:`objectChange`},yd=class extends xs{constructor(e,t=null){super(void 0,t);let n=new Bd(this);this._root=n;let r=new Vd;this._gizmo=r,n.add(r);let i=new Hd;this._plane=i,n.add(i);let a=this;function o(e,t){let n=t;Object.defineProperty(a,e,{get:function(){return n===void 0?t:n},set:function(t){n!==t&&(n=t,i[e]=t,r[e]=t,a.dispatchEvent({type:e+`-changed`,value:t}),a.dispatchEvent(hd))}}),a[e]=t,i[e]=t,r[e]=t}o(`camera`,e),o(`object`,void 0),o(`enabled`,!0),o(`axis`,null),o(`mode`,`translate`),o(`translationSnap`,null),o(`rotationSnap`,null),o(`scaleSnap`,null),o(`space`,`world`),o(`size`,1),o(`dragging`,!1),o(`showX`,!0),o(`showY`,!0),o(`showZ`,!0),o(`showXY`,!0),o(`showYZ`,!0),o(`showXZ`,!0),o(`minX`,-1/0),o(`maxX`,1/0),o(`minY`,-1/0),o(`maxY`,1/0),o(`minZ`,-1/0),o(`maxZ`,1/0);let s=new K,c=new K,l=new Dt,u=new Dt,d=new K,f=new Dt,p=new K,m=new K,h=new K,g=new K;o(`worldPosition`,s),o(`worldPositionStart`,c),o(`worldQuaternion`,l),o(`worldQuaternionStart`,u),o(`cameraPosition`,d),o(`cameraQuaternion`,f),o(`pointStart`,p),o(`pointEnd`,m),o(`rotationAxis`,h),o(`rotationAngle`,0),o(`eye`,g),this._offset=new K,this._startNorm=new K,this._endNorm=new K,this._cameraScale=new K,this._parentPosition=new K,this._parentQuaternion=new Dt,this._parentQuaternionInv=new Dt,this._parentScale=new K,this._worldScaleStart=new K,this._worldQuaternionInv=new Dt,this._worldScale=new K,this._positionStart=new K,this._quaternionStart=new Dt,this._scaleStart=new K,this._getPointer=bd.bind(this),this._onPointerDown=Sd.bind(this),this._onPointerHover=xd.bind(this),this._onPointerMove=Cd.bind(this),this._onPointerUp=wd.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointermove`,this._onPointerHover),this.domElement.addEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerHover),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.style.touchAction=``}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ud.setFromCamera(e,this.camera);let t=Td(this._gizmo.picker[this.mode],ud);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ud.setFromCamera(e,this.camera);let t=Td(this._plane,ud,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,gd.mode=this.mode,this.dispatchEvent(gd)}}pointerMove(e){let t=this.axis,n=this.mode,r=this.object,i=this.space;if(n===`scale`?i=`local`:(t===`E`||t===`XYZE`||t===`XYZ`)&&(i=`world`),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ud.setFromCamera(e,this.camera);let a=Td(this._plane,ud,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n===`translate`)this._offset.copy(this.pointEnd).sub(this.pointStart),i===`local`&&t!==`XYZ`&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf(`X`)===-1&&(this._offset.x=0),t.indexOf(`Y`)===-1&&(this._offset.y=0),t.indexOf(`Z`)===-1&&(this._offset.z=0),i===`local`&&t!==`XYZ`?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(i===`local`&&(r.position.applyQuaternion(pd.copy(this._quaternionStart).invert()),t.search(`X`)!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),i===`world`&&(r.parent&&r.position.add(dd.setFromMatrixPosition(r.parent.matrixWorld)),t.search(`X`)!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search(`Y`)!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search(`Z`)!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(dd.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(n===`scale`){if(t.search(`XYZ`)!==-1){let e=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(e*=-1),fd.set(e,e,e)}else dd.copy(this.pointStart),fd.copy(this.pointEnd),dd.applyQuaternion(this._worldQuaternionInv),fd.applyQuaternion(this._worldQuaternionInv),fd.divide(dd),t.search(`X`)===-1&&(fd.x=1),t.search(`Y`)===-1&&(fd.y=1),t.search(`Z`)===-1&&(fd.z=1);r.scale.copy(this._scaleStart).multiply(fd),this.scaleSnap&&(t.search(`X`)!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Y`)!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search(`Z`)!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n===`rotate`){this._offset.copy(this.pointEnd).sub(this.pointStart);let e=20/this.worldPosition.distanceTo(dd.setFromMatrixPosition(this.camera.matrixWorld)),n=!1;t===`XYZE`?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(dd.copy(this.rotationAxis).cross(this.eye))*e):(t===`X`||t===`Y`||t===`Z`)&&(this.rotationAxis.copy(md[t]),dd.copy(md[t]),i===`local`&&dd.applyQuaternion(this.worldQuaternion),dd.cross(this.eye),dd.length()===0?n=!0:this.rotationAngle=this._offset.dot(dd.normalize())*e),(t===`E`||n)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),i===`local`&&t!==`E`&&t!==`XYZE`?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(pd.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(pd.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(hd),this.dispatchEvent(vd)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(_d.mode=this.mode,this.dispatchEvent(_d)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(hd),this.dispatchEvent(vd),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ud}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,r){let i=this._gizmo.materialLib;i.xAxis.color.set(e),i.yAxis.color.set(t),i.zAxis.color.set(n),i.active.color.set(r),i.xAxisTransparent.color.set(e),i.yAxisTransparent.color.set(t),i.zAxisTransparent.color.set(n),i.activeTransparent.color.set(r),i.xAxis._color&&i.xAxis._color.set(e),i.yAxis._color&&i.yAxis._color.set(t),i.zAxis._color&&i.zAxis._color.set(n),i.active._color&&i.active._color.set(r),i.xAxisTransparent._color&&i.xAxisTransparent._color.set(e),i.yAxisTransparent._color&&i.yAxisTransparent._color.set(t),i.zAxisTransparent._color&&i.zAxisTransparent._color.set(n),i.activeTransparent._color&&i.activeTransparent._color.set(r)}};function bd(e){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:e.button};{let t=this.domElement.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*2-1,y:-(e.clientY-t.top)/t.height*2+1,button:e.button}}}function xd(e){if(this.enabled)switch(e.pointerType){case`mouse`:case`pen`:this.pointerHover(this._getPointer(e));break}}function Sd(e){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.pointerHover(this._getPointer(e)),this.pointerDown(this._getPointer(e)))}function Cd(e){this.enabled&&this.pointerMove(this._getPointer(e))}function wd(e){this.enabled&&(this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.pointerUp(this._getPointer(e)))}function Td(e,t,n){let r=t.intersectObject(e,!0);for(let e=0;e<r.length;e++)if(r[e].object.visible||n)return r[e];return!1}var Ed=new cn,Dd=new K(0,1,0),Od=new K(0,0,0),kd=new Zt,Ad=new Dt,jd=new Dt,Md=new K,Nd=new Zt,Pd=new K(1,0,0),Fd=new K(0,1,0),Id=new K(0,0,1),Ld=new K,Rd=new K,zd=new K,Bd=class extends Tn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error(`TransformControls: The attached 3D object must be a part of the scene graph.`):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}},Vd=class extends Tn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type=`TransformControlsGizmo`;let e=new zr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ci({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let r=t.clone();r.opacity=.5;let i=e.clone();i.color.setHex(16711680);let a=e.clone();a.color.setHex(65280);let o=e.clone();o.color.setHex(255);let s=e.clone();s.color.setHex(16711680),s.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let l=e.clone();l.color.setHex(255),l.opacity=.5;let u=e.clone();u.opacity=.25;let d=e.clone();d.color.setHex(16776960),d.opacity=.25;let f=e.clone();f.color.setHex(16776960);let p=e.clone();p.color.setHex(7895160),this.materialLib={xAxis:i,yAxis:a,zAxis:o,active:f,xAxisTransparent:s,yAxisTransparent:c,zAxisTransparent:l,activeTransparent:d};let m=new Pi(0,.04,.1,12);m.translate(0,.05,0);let h=new Mi(.08,.08,.08);h.translate(0,.04,0);let g=new Or;g.setAttribute(`position`,new q([0,0,0,1,0,0],3));let _=new Pi(.0075,.0075,.5,3);_.translate(0,.25,0);function v(e,t){let n=new ro(e,.0075,3,64,t*Math.PI*2);return n.rotateY(Math.PI/2),n.rotateX(Math.PI/2),n}function y(){let e=new Or;return e.setAttribute(`position`,new q([0,0,0,1,1,1],3)),e}let b={X:[[new J(m,i),[.5,0,0],[0,0,-Math.PI/2]],[new J(m,i),[-.5,0,0],[0,0,Math.PI/2]],[new J(_,i),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new J(m,a),[0,.5,0]],[new J(m,a),[0,-.5,0],[Math.PI,0,0]],[new J(_,a)]],Z:[[new J(m,o),[0,0,.5],[Math.PI/2,0,0]],[new J(m,o),[0,0,-.5],[-Math.PI/2,0,0]],[new J(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new J(new eo(.1,0),u),[0,0,0]]],XY:[[new J(new Mi(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new J(new Mi(.15,.15,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Mi(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},x={X:[[new J(new Pi(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Pi(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Pi(.2,0,.6,4),n),[0,.3,0]],[new J(new Pi(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Pi(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Pi(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new J(new eo(.2,0),n)]],XY:[[new J(new Mi(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Mi(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Mi(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},S={START:[[new J(new eo(.01,2),r),null,null,null,`helper`]],END:[[new J(new eo(.01,2),r),null,null,null,`helper`]],DELTA:[[new gi(y(),r),null,null,null,`helper`]],X:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new gi(g,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new gi(g,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]},C={XYZE:[[new J(v(.5,1),p),null,[0,Math.PI/2,0]]],X:[[new J(v(.5,.5),i)]],Y:[[new J(v(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new J(v(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new J(v(.75,1),d),null,[0,Math.PI/2,0]]]},w={AXIS:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]]},T={XYZE:[[new J(new no(.25,10,8),n)]],X:[[new J(new ro(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new J(new ro(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new J(new ro(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new J(new ro(.75,.1,2,24),n)]]},E={X:[[new J(h,i),[.5,0,0],[0,0,-Math.PI/2]],[new J(_,i),[0,0,0],[0,0,-Math.PI/2]],[new J(h,i),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new J(h,a),[0,.5,0]],[new J(_,a)],[new J(h,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new J(h,o),[0,0,.5],[Math.PI/2,0,0]],[new J(_,o),[0,0,0],[Math.PI/2,0,0]],[new J(h,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new J(new Mi(.15,.15,.01),l),[.15,.15,0]]],YZ:[[new J(new Mi(.15,.15,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Mi(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Mi(.1,.1,.1),u)]]},D={X:[[new J(new Pi(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Pi(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Pi(.2,0,.6,4),n),[0,.3,0]],[new J(new Pi(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Pi(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Pi(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new J(new Mi(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new Mi(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new Mi(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new Mi(.2,.2,.2),n),[0,0,0]]]},O={X:[[new gi(g,r),[-1e3,0,0],null,[1e6,1,1],`helper`]],Y:[[new gi(g,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],`helper`]],Z:[[new gi(g,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],`helper`]]};function k(e){let t=new Tn;for(let n in e)for(let r=e[n].length;r--;){let i=e[n][r][0].clone(),a=e[n][r][1],o=e[n][r][2],s=e[n][r][3],c=e[n][r][4];i.name=n,i.tag=c,a&&i.position.set(a[0],a[1],a[2]),o&&i.rotation.set(o[0],o[1],o[2]),s&&i.scale.set(s[0],s[1],s[2]),i.updateMatrix();let l=i.geometry.clone();l.applyMatrix4(i.matrix),i.geometry=l,i.renderOrder=1/0,i.position.set(0,0,0),i.rotation.set(0,0,0),i.scale.set(1,1,1),t.add(i)}return t}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=k(b)),this.add(this.gizmo.rotate=k(C)),this.add(this.gizmo.scale=k(E)),this.add(this.picker.translate=k(x)),this.add(this.picker.rotate=k(T)),this.add(this.picker.scale=k(D)),this.add(this.helper.translate=k(S)),this.add(this.helper.rotate=k(w)),this.add(this.helper.scale=k(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let t=(this.mode===`scale`?`local`:this.space)===`local`?this.worldQuaternion:jd;this.gizmo.translate.visible=this.mode===`translate`,this.gizmo.rotate.visible=this.mode===`rotate`,this.gizmo.scale.visible=this.mode===`scale`,this.helper.translate.visible=this.mode===`translate`,this.helper.rotate.visible=this.mode===`rotate`,this.helper.scale.visible=this.mode===`scale`;let n=[];n=n.concat(this.picker[this.mode].children),n=n.concat(this.gizmo[this.mode].children),n=n.concat(this.helper[this.mode].children);for(let e=0;e<n.length;e++){let r=n[e];r.visible=!0,r.rotation.set(0,0,0),r.position.copy(this.worldPosition);let i;if(i=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),r.scale.set(1,1,1).multiplyScalar(i*this.size/4),r.tag===`helper`){r.visible=!1,r.name===`AXIS`?(r.visible=!!this.axis,this.axis===`X`&&(pd.setFromEuler(Ed.set(0,0,0)),r.quaternion.copy(t).multiply(pd),Math.abs(Dd.copy(Pd).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Y`&&(pd.setFromEuler(Ed.set(0,0,Math.PI/2)),r.quaternion.copy(t).multiply(pd),Math.abs(Dd.copy(Fd).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`Z`&&(pd.setFromEuler(Ed.set(0,Math.PI/2,0)),r.quaternion.copy(t).multiply(pd),Math.abs(Dd.copy(Id).applyQuaternion(t).dot(this.eye))>.9&&(r.visible=!1)),this.axis===`XYZE`&&(pd.setFromEuler(Ed.set(0,Math.PI/2,0)),Dd.copy(this.rotationAxis),r.quaternion.setFromRotationMatrix(kd.lookAt(Od,Dd,Fd)),r.quaternion.multiply(pd),r.visible=this.dragging),this.axis===`E`&&(r.visible=!1)):r.name===`START`?(r.position.copy(this.worldPositionStart),r.visible=this.dragging):r.name===`END`?(r.position.copy(this.worldPosition),r.visible=this.dragging):r.name===`DELTA`?(r.position.copy(this.worldPositionStart),r.quaternion.copy(this.worldQuaternionStart),dd.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),dd.applyQuaternion(this.worldQuaternionStart.clone().invert()),r.scale.copy(dd),r.visible=this.dragging):(r.quaternion.copy(t),this.dragging?r.position.copy(this.worldPositionStart):r.position.copy(this.worldPosition),this.axis&&(r.visible=this.axis.search(r.name)!==-1));continue}if(r.quaternion.copy(t),this.mode===`translate`||this.mode===`scale`){let e=.99,n=.2;r.name===`X`&&Math.abs(Dd.copy(Pd).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Y`&&Math.abs(Dd.copy(Fd).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`Z`&&Math.abs(Dd.copy(Id).applyQuaternion(t).dot(this.eye))>e&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XY`&&Math.abs(Dd.copy(Id).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`YZ`&&Math.abs(Dd.copy(Pd).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1),r.name===`XZ`&&Math.abs(Dd.copy(Fd).applyQuaternion(t).dot(this.eye))<n&&(r.scale.set(1e-10,1e-10,1e-10),r.visible=!1)}else this.mode===`rotate`&&(Ad.copy(t),Dd.copy(this.eye).applyQuaternion(pd.copy(t).invert()),r.name.search(`E`)!==-1&&r.quaternion.setFromRotationMatrix(kd.lookAt(this.eye,Od,Fd)),r.name===`X`&&(pd.setFromAxisAngle(Pd,Math.atan2(-Dd.y,Dd.z)),pd.multiplyQuaternions(Ad,pd),r.quaternion.copy(pd)),r.name===`Y`&&(pd.setFromAxisAngle(Fd,Math.atan2(Dd.x,Dd.z)),pd.multiplyQuaternions(Ad,pd),r.quaternion.copy(pd)),r.name===`Z`&&(pd.setFromAxisAngle(Id,Math.atan2(Dd.y,Dd.x)),pd.multiplyQuaternions(Ad,pd),r.quaternion.copy(pd)));r.visible=r.visible&&(r.name.indexOf(`X`)===-1||this.showX),r.visible=r.visible&&(r.name.indexOf(`Y`)===-1||this.showY),r.visible=r.visible&&(r.name.indexOf(`Z`)===-1||this.showZ),r.visible=r.visible&&(r.name.indexOf(`E`)===-1||this.showX&&this.showY&&this.showZ),r.visible=r.visible&&(r.name.indexOf(`XY`)===-1||this.showXY),r.visible=r.visible&&(r.name.indexOf(`YZ`)===-1||this.showYZ),r.visible=r.visible&&(r.name.indexOf(`XZ`)===-1||this.showXZ),r.material._color=r.material._color||r.material.color.clone(),r.material._opacity=r.material._opacity||r.material.opacity,r.material.color.copy(r.material._color),r.material.opacity=r.material._opacity,this.enabled&&this.axis&&(r.name===this.axis||this.axis.split(``).some(function(e){return r.name===e}))&&(r.material.color.copy(this.materialLib.active.color),r.material.opacity=1)}super.updateMatrixWorld(e)}},Hd=class extends J{constructor(){super(new to(1e5,1e5,2,2),new zr({visible:!1,wireframe:!0,side:2,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type=`TransformControlsPlane`}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode===`scale`&&(t=`local`),Ld.copy(Pd).applyQuaternion(t===`local`?this.worldQuaternion:jd),Rd.copy(Fd).applyQuaternion(t===`local`?this.worldQuaternion:jd),zd.copy(Id).applyQuaternion(t===`local`?this.worldQuaternion:jd),Dd.copy(Rd),this.mode){case`translate`:case`scale`:switch(this.axis){case`X`:Dd.copy(this.eye).cross(Ld),Md.copy(Ld).cross(Dd);break;case`Y`:Dd.copy(this.eye).cross(Rd),Md.copy(Rd).cross(Dd);break;case`Z`:Dd.copy(this.eye).cross(zd),Md.copy(zd).cross(Dd);break;case`XY`:Md.copy(zd);break;case`YZ`:Md.copy(Ld);break;case`XZ`:Dd.copy(zd),Md.copy(Rd);break;case`XYZ`:case`E`:Md.set(0,0,0);break}break;default:Md.set(0,0,0)}Md.length()===0?this.quaternion.copy(this.cameraQuaternion):(Nd.lookAt(dd.set(0,0,0),Md,Dd),this.quaternion.setFromRotationMatrix(Nd)),super.updateMatrixWorld(e)}};function Ud(e){let t=new En,n=new Pi(e.tankDiameter/2,e.tankDiameter/2,e.tankHeight,32,1,!0),r=new _o({color:8965375,transparent:!0,opacity:.6,roughness:.1,transmission:.9,thickness:.01,side:2}),i=new J(n,r);i.position.y=e.tankHeight/2,t.add(i);let a=e.mirrorPlateType||`None`,o=e.tankDiameter/2,s=null,c=0;switch(a){case`FullHemisphere`:c=o,s=new no(o,32,16,0,Math.PI*2,0,Math.PI/2);break;case`Dish`:c=o*.25,s=new no(o,32,16,0,Math.PI*2,0,Math.PI/2),s.scale(1,.25,1);break;case`HalfEllipse`:c=o*.5,s=new no(o,32,16,0,Math.PI*2,0,Math.PI/2),s.scale(1,.5,1);break;case`Cone`:c=e.tankHeight*.2,s=new Fi(o,c,32,1,!0),s.translate(0,c/2,0);break;default:c=0;let n=new J(new Pi(o,o,.02,32),new _o({color:16777215,metalness:1,roughness:0,reflectivity:1,side:2}));n.position.y=0,t.add(n);break}if(s){s.computeVertexNormals();let e=new J(s,r);e.position.y=0,e.rotation.x=Math.PI,t.add(e)}let l=e.liquidHeight,u=l-c;u<0&&(u=0);let d=new _o({color:26367,transparent:!0,opacity:.35,roughness:.1,transmission:.3,depthWrite:!1});if(u>0){let e=new J(new Pi(o*.99,o*.99,u,32,1,!0),d);e.position.y=u/2,t.add(e);let n=new J(new Ni(o*.99,32),d);if(n.position.y=u,n.rotation.x=-Math.PI/2,t.add(n),c===0){let e=new J(new Ni(o*.99,32),d);e.position.y=0,e.rotation.x=Math.PI/2,t.add(e)}}if(c>0&&l>0){let e=null,n=Math.min(l,c);if(a===`Cone`){let r=n/c*o;e=new Fi(r*.99,n*.99,32,1,!0),e.translate(0,n/2,0);let i=new J(e,d);if(i.rotation.x=Math.PI,i.position.y=-c+n,t.add(i),n<c){let e=new J(new Ni(r*.99,32),d);e.position.y=-c+n,e.rotation.x=-Math.PI/2,t.add(e)}}else if(a===`FullHemisphere`||a===`Dish`||a===`HalfEllipse`){let r=1;a===`Dish`&&(r=.25),a===`HalfEllipse`&&(r=.5);let i=n/r,s=Math.PI/2;if(n<c){let e=Math.max(-1,Math.min(1,1-i/o));s=Math.acos(e)}e=new no(o*.99,32,16,0,Math.PI*2,0,s),e.scale(1,r,1);let l=new J(e,d);if(l.position.y=0,l.rotation.x=Math.PI,t.add(l),n<c){let e=new J(new Ni(o*Math.sin(s)*.99,32),d);e.position.y=-c+n,e.rotation.x=-Math.PI/2,t.add(e)}}}return t}function Wd(e){let t=new En;if(!e.coilEnabled)return t;let n=e.tankDiameter/2,r=e.mirrorPlateType||`None`,i=0;r===`FullHemisphere`?i=n:r===`Dish`?i=n*.25:r===`HalfEllipse`?i=n*.5:r===`Cone`&&(i=e.tankHeight*.2);let a=.05,o=Math.max(.15000000000000002,e.liquidHeight-i-.05)-a,s=new da,c=e.coilRadius,l=e.coilTurns,u=100*l,d=[];for(let e=0;e<=u;e++){let t=e/u,n=t*Math.PI*2*l,r=c*Math.cos(n),i=-c*Math.sin(n),s=a+t*o;d.push(new K(r,s,i))}let f=new Ki(d);s.add(f);let p=new io(s,u,c*.05,8,!1),m=16755200;e.coilHeatSource===`Water`?m=3381759:e.coilHeatSource===`Steam`&&(m=16755200);let h=Math.min(Math.max((e.coilTemp-273)/227,0),1)*.8,g=new J(p,new go({color:m,metalness:.3,roughness:.6,emissive:m,emissiveIntensity:h}));return t.add(g),t}function Gd(e){let t=new En,n=e.impellerType,r=e.mirrorPlateType||`None`,i=e.tankDiameter/2,a=0;r===`FullHemisphere`?a=i:r===`Dish`?a=i*.25:r===`HalfEllipse`?a=i*.5:r===`Cone`&&(a=e.tankHeight*.2);let o=e.impellerClearance-a,s=o+e.bladeWidth/2,c=o;(n===`Anchor`||n===`Ribbon`)&&(c=e.tankHeight*.1);let l=e.tankHeight-c,u=(e.shaftDiameter||e.impellerDiameter*.12)/2,d=new Pi(u,u,l,16),f=new go({color:16737792,metalness:.5,roughness:.3}),p=new J(d,f);p.position.y=c+l/2,t.add(p);let m=u*1.6,h=new J(new Pi(m,m,u*2.2,16),f);h.position.y=s,t.add(h);let g=new En;g.position.y=s;let _=e.bladeCount,v=e.impellerDiameter/2,y=e.bladeWidth,b=e.bladeThickness||.01;if(n===`FlatPaddle`||n===`InclinedPaddle`)for(let t=0;t<_;t++){let r=t/_*Math.PI*2,i=new En;i.rotation.y=-r;let a=new Mi(v,y,b);a.translate(v/2+.02,0,0);let o=new J(a,f);n===`InclinedPaddle`&&(o.rotation.x=e.bladeAngle*Math.PI/180),i.add(o),g.add(i)}else if(n===`FlatPropeller`){let e=Math.max(3,_);for(let t=0;t<e;t++){let n=t/e*Math.PI*2,r=new En;r.rotation.y=-n;let i=new pa;i.absellipse(v*.5+.02,0,v*.45,y*.8,0,Math.PI*2,!1,0);let a=new Za(i,{depth:b,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002});a.translate(0,0,-b/2);let o=new J(a,f);o.rotation.x=45*Math.PI/180,r.add(o),g.add(r)}}else if(n===`Turbine`||n===`Rushton`){let e=v*.7,t=new J(new Pi(e,e,b,32),f);g.add(t);let n=v*.35;for(let t=0;t<_;t++){let r=t/_*Math.PI*2,i=new En;i.rotation.y=-r;let a=new Mi(n,y,b);a.translate(e,0,0);let o=new J(a,f);i.add(o),g.add(i)}}else if(n===`Pfaudler`){let t=(e.pfaudlerLiftAngle===void 0?25:e.pfaudlerLiftAngle)*Math.PI/180,n=v*.55,r=(e.pfaudlerSweepAngle===void 0?35:e.pfaudlerSweepAngle)*Math.PI/180,i=(e.bladeAngle||0)*Math.PI/180,a=Math.cos(i),o=Math.sin(i),s=(e,t)=>({x:e*a-t*o,y:e*o+t*a}),c=s(-b/2,-y/2),l=s(b/2,-y/2),u=s(b/2,y/2),d=s(-b/2,y/2),p=new pa;p.moveTo(c.x,c.y),p.lineTo(l.x,l.y),p.lineTo(u.x,u.y),p.lineTo(d.x,d.y),p.lineTo(c.x,c.y);for(let e=0;e<_;e++){let i=e/_*Math.PI*2,a=new En;a.rotation.y=-i;let o=[];for(let e=0;e<=16;e++){let i=e/16,a=Math.max(i*v,.001),s=r*i*i,c=a<=n?0:(a-n)*Math.tan(t);o.push(new K(a*Math.cos(s),c,-a*Math.sin(s)))}let s=new J(new Za(p,{extrudePath:new Ki(o),steps:16,bevelEnabled:!1}),f);a.add(s),g.add(a)}}else if(n===`Anchor`){let t=Math.max(v*1.5,e.tankHeight*.3),n=Math.max(y,.05),r=new pa;r.moveTo(-v,t),r.lineTo(-v,0),r.absarc(0,0,v,Math.PI,0,!1),r.lineTo(v,t),r.lineTo(v-n,t),r.lineTo(v-n,0),r.absarc(0,0,v-n,0,Math.PI,!0),r.lineTo(-v+n,t),r.lineTo(-v,t);let i=new Za(r,{depth:b,bevelEnabled:!1});i.translate(0,-v*.2,-b/2);let a=new J(i,f);g.add(a);let o=new J(new Mi(v*2,n,b),f);o.position.y=t*.8-v*.2,g.add(o)}else if(n===`Ribbon`){class t extends Li{constructor(e,t,n){super(),this.r=e,this.h=t,this.turns=n}getPoint(e,t=new K){let n=e*Math.PI*2*this.turns;return t.set(Math.cos(n)*this.r,e*this.h,Math.sin(n)*this.r)}}let n=e.tankHeight*.6,r=new t(v,n,2),i=new pa;i.moveTo(-y/2,-b/2),i.lineTo(y/2,-b/2),i.lineTo(y/2,b/2),i.lineTo(-y/2,b/2),i.lineTo(-y/2,-b/2);let a=new Za(i,{extrudePath:r,steps:150,bevelEnabled:!1}),o=new J(a,f);o.position.y=-n*.2,g.add(o);let s=new J(a,f);s.rotation.y=Math.PI,s.position.y=-n*.2,g.add(s);for(let e=0;e<3;e++){let t=new J(new Mi(v*2,b,y),f);t.position.y=n/2*e-n*.2,t.rotation.y=e*Math.PI/4,g.add(t)}}return t.add(g),t.userData.bladeGroup=g,t}var Kd=class e{constructor(e){this.nr=e.meshNr||20,this.ntheta=e.meshNtheta||36,this.ny=e.meshNy||30,this.radius=e.tankDiameter/2,this.tankHeight=e.tankHeight,this.meshHeight=e.liquidHeight,this.blLayers=4,this.blThickness=1.5*(this.radius/this.nr);let t=1.25;this.numCells=this.nr*this.ntheta*this.ny,this.rNode=this.generate1DGrid(this.nr,this.radius,this.blLayers,this.blThickness,!0,t,0),this.thetaNode=this.generateThetaGrid(this.ntheta,e.baffleCount,this.blLayers),this.etaNode=this.generate1DGrid(this.ny,1,this.blLayers,this.blThickness/this.meshHeight,!1,t,0),this.flag=new Int8Array(this.numCells),this.mrf=new Int8Array(this.numCells),this.cx=new Float32Array(this.numCells),this.cy=new Float32Array(this.numCells),this.cz=new Float32Array(this.numCells),this.voxelize(e),this.buildNeighbors(e),e.enableOGrid!==!1&&this.injectOGrid(e),this.snap(e),this.layer(e),this.qualityCheck(e),this.buildFaces(e);let n=this.rNode[1]-this.rNode[0],r=(this.rNode[0]+this.rNode[1])*.5*(this.thetaNode[1]-this.thetaNode[0]);if(Math.min(n,r)>1e-12){let e=Math.max(n,r)/Math.min(n,r);e>20&&console.warn(`[CylindricalMesh] Innermost-cell aspect ratio = ${e.toFixed(1)} > 20. Consider increasing meshNtheta or reducing the shaft/O-Grid radius to reduce shear-rate blow-up in non-Newtonian simulations.`)}}generate1DGrid(e,t,n,r,i,a,o=0){let s=new Float32Array(e+1);if(n<=0||r<=0||n>=e){for(let n=0;n<=e;n++)s[n]=o+n/e*t;return s}let c=e-n,l=t-r,u=l/c,d=a||1.3,f=r*(d-1)/(d**+n-1);Math.abs(d-1)<1e-6&&(f=r/n);let p=0;if(i){for(let e=0;e<=c;e++)s[e]=o+p,p+=u;p=l;for(let e=1;e<=n;e++)p+=f*d**+(n-e),s[c+e]=o+p}else{for(let e=0;e<=n;e++)s[e]=o+p,p+=f*d**+e;p=r;for(let e=1;e<=c;e++)p+=u,s[n+e]=o+p}return s[e]=o+t,s}generateThetaGrid(e,t,n){let r=new Float32Array(e+1);for(let i=0;i<=e;i++){let a=i/e;if(t>0&&n>0){let e=1/(2*Math.PI*t),n=Math.min(e*.9,e*.5);a-=n*Math.sin(a*Math.PI*2*t)}r[i]=a*Math.PI*2}return r[e]=Math.PI*2,r}static getMirrorDepth(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2;return t===`FullHemisphere`?n:t===`Dish`?n*.25:t===`HalfEllipse`?n*.5:t===`Cone`?e.tankHeight*.2:0}static getImpellerHeight(e){return e.bladeWidth}static getClearanceRange(t){let n=e.getImpellerHeight(t);return{min:0,max:Math.max(0,t.liquidHeight-n)}}static getImpellerCenterY(t){let n=e.getMirrorDepth(t);return t.impellerClearance-n+t.bladeWidth/2}getBottomY(e,t){let n=0;return t.mirrorPlateType===`FullHemisphere`?n=-Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`Dish`?n=-.25*Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`HalfEllipse`?n=-.5*Math.sqrt(Math.max(0,this.radius*this.radius-e*e)):t.mirrorPlateType===`Cone`&&(n=-(t.tankHeight*.2)*(1-e/this.radius)),n}getMirrorNormal(e,t){let n=this.radius,r=1e-9;if(t.mirrorPlateType===`FullHemisphere`){let t=e/Math.max(Math.sqrt(n*n-e*e),r),i=Math.sqrt(t*t+1);return{nr:-t/i,ny:1/i}}if(t.mirrorPlateType===`Dish`){let t=.25*e/Math.max(Math.sqrt(n*n-e*e),r),i=Math.sqrt(t*t+1);return{nr:-t/i,ny:1/i}}if(t.mirrorPlateType===`HalfEllipse`){let t=.5*e/Math.max(Math.sqrt(n*n-e*e),r),i=Math.sqrt(t*t+1);return{nr:-t/i,ny:1/i}}if(t.mirrorPlateType===`Cone`){let e=t.tankHeight*.2/n,r=Math.sqrt(e*e+1);return{nr:-e/r,ny:1/r}}return{nr:0,ny:1}}getCellCenter(e,t,n,r){let i=(this.rNode[e]+this.rNode[e+1])/2,a=(this.thetaNode[t]+this.thetaNode[t+1])/2,o=(this.etaNode[n]+this.etaNode[n+1])/2,s=this.getBottomY(0,r),c=s+o*(s+r.liquidHeight-s);return{x:i*Math.cos(a),y:c,z:i*Math.sin(a),r:i,theta:a,eta:o}}getCellCenterByIdx(e,t){if(e<this.nr*this.ntheta*this.ny){let n=e%this.nr,r=Math.floor(e/this.nr)%this.ntheta,i=Math.floor(e/(this.nr*this.ntheta));return this.getCellCenter(n,r,i,t)}else{let t=this.cx[e],n=this.cy[e],r=this.cz[e],i=Math.hypot(t,r),a=Math.atan2(r,t);return a<0&&(a+=2*Math.PI),{x:t,y:n,z:r,r:i,theta:a}}}voxelize(t){let n=t.liquidHeight,r=t.baffleWidth,i=t.baffleThickness,a=t.baffleCount,o=t.baffleGap===void 0?this.radius*2/75:t.baffleGap,s=this.radius-r/2-o,c=t.impellerDiameter/2,l=e.getImpellerCenterY(t),u=t.bladeWidth;(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;let d=t.mrfRadialMargin??1.2,f=Math.max(d,1.05);f>d&&console.warn(`[CylindricalMesh] mrfRadialMargin=${d} <= 1.0 — MRF zone would not contain the impeller tip (r=${c.toExponential(3)}). Clamped to 1.05.`);let p=c*f,m=t.coilEnabled,h=t.coilRadius,g=t.coilTurns,_=h*.05,v=t.mirrorPlateType||`None`,y=0;v===`FullHemisphere`?y=this.radius:v===`Dish`?y=this.radius*.25:v===`HalfEllipse`?y=this.radius*.5:v===`Cone`&&(y=t.tankHeight*.2);let b=.05,x=Math.max(.15000000000000002,t.liquidHeight-y-.05),S=x-b,C=S/(2*Math.PI*g),w=l-u/2,T=l+u/2;if(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)w=t.tankHeight*.1,T=t.tankHeight*.9;else if(t.impellerType===`Pfaudler`){let e=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,n=(c-c*.55)*Math.tan(e);T=l+u/2+n}let E=t.mrfVerticalMarginBottom??.1,D=t.mrfVerticalMarginTop??.1,O=w-E,k=T+D,A=this.getBottomY(0,t)+n;for(let n=0;n<this.ny;n++)for(let o=0;o<this.ntheta;o++)for(let c=0;c<this.nr;c++){let l=c+this.nr*(o+this.ntheta*n),u=this.getCellCenter(c,o,n,t);if(u.y>A){this.flag[l]=2,this.mrf[l]=0;continue}if(this.flag[l]=0,this.cx[l]=u.x,this.cy[l]=u.y,this.cz[l]=u.z,t.mirrorPlateType&&t.mirrorPlateType!==`None`){let e=this.getBottomY(u.r,t);if(u.y<e){this.flag[l]=7,this.mrf[l]=0;continue}}let d=e.getImpellerCenterY(t)-t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(d=t.tankHeight*.1);let f=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,v=Math.max(f*.5,this.meshHeight/this.ny),y=d-v,w=u.r<=f&&u.y>=d,T=u.r<=f&&u.y>=y&&u.y<d;(w||T)&&(this.flag[l]=5);let E=!1,D=t.impellerDiameter/2,j=t.bladeWidth,M=e.getImpellerCenterY(t),N=t.bladeThickness||.01,P=t.bladeCount||4,F=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,I=u.y-M,L=u.r;if(L>F&&L<=D){if(t.impellerType===`FlatPaddle`||t.impellerType===`InclinedPaddle`){if(Math.abs(I)<=j/2){let e=2*Math.PI/this.ntheta,n=Math.max(e*.95,N/2/Math.max(L,.01));for(let e=0;e<P;e++){let r=e/P*Math.PI*2,i=Math.abs(u.theta-r);if(i=Math.min(i,Math.PI*2-i),t.impellerType===`FlatPaddle`){if(i<=n){E=!0;break}}else{let e=(t.bladeAngle||45)*Math.PI/180,i=I*Math.tan(e)/L,a=Math.abs(u.theta-(r-i));if(a=Math.min(a,Math.PI*2-a),a<=n){E=!0;break}}}}}else if(t.impellerType===`FlatPropeller`){if(Math.abs(I)<=j/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,N/2/Math.max(L,.01)),n=Math.max(3,P);for(let e=0;e<n;e++){let r=e/n*Math.PI*2,i=I/L,a=Math.abs(u.theta-(r-i));if(a=Math.min(a,Math.PI*2-a),a<=t){E=!0;break}}}}else if(t.impellerType===`Turbine`||t.impellerType===`Rushton`){let e=D*.7,t=N*1.5;if(L<=e&&Math.abs(I)<=t/2&&(E=!0),L>=e*.9&&L<=D&&Math.abs(I)<=j/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,N/2/Math.max(L,.01));for(let e=0;e<P;e++){let n=e/P*Math.PI*2,r=Math.abs(u.theta-n);if(r=Math.min(r,Math.PI*2-r),r<=t){E=!0;break}}}}else if(t.impellerType===`Pfaudler`){let e=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,n=D*.55,r=L<=n?0:(L-n)*Math.tan(e),i=(t.pfaudlerSweepAngle===void 0?35:t.pfaudlerSweepAngle)*Math.PI/180,a=Math.min(1,L/D),o=i*a*a,s=(t.bladeAngle||0)*Math.PI/180,c=I-r,l=c*Math.tan(s)/L;if(Math.abs(c)<=j/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,N/2/Math.max(L,.01));for(let e=0;e<P;e++){let n=e/P*Math.PI*2,r=Math.abs(u.theta-(n-o-l));if(r=Math.min(r,Math.PI*2-r),r<=t){E=!0;break}}}}else if(t.impellerType===`Anchor`){let e=Math.max(D*1.5,t.tankHeight*.3),n=Math.max(j,.05),r=t.tankHeight*.1,i=u.y-r,a=2*Math.PI/this.ntheta,o=Math.max(a*.95,N/2/Math.max(L,.01));if(L>=D-n&&L<=D&&i>=0&&i<=e)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(u.theta-t);if(n=Math.min(n,Math.PI*2-n),n<=o){E=!0;break}}if(L<=D&&Math.abs(u.y-(r+e*.8))<=n/2)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(u.theta-t);if(n=Math.min(n,Math.PI*2-n),n<=o){E=!0;break}}let s=Math.sqrt(L*L+(u.y-r)**2);Math.abs(s-D)<=n/2&&u.y<=r&&(E=!0)}else if(t.impellerType===`Ribbon`){let e=t.tankHeight*.6,n=t.tankHeight*.1,r=u.y-n,i=2*Math.PI/this.ntheta,a=Math.max(i*.95,N/2/Math.max(L,.01));if(r>=0&&r<=e){if(L>=D-j/2&&L<=D+j/2){let t=r/e*Math.PI*2*2;for(let e=0;e<2;e++){let n=t+e*Math.PI,r=Math.abs(u.theta-n);if(r=Math.min(r,Math.PI*2-r),r<=a){E=!0;break}}}for(let t=0;t<3;t++){let n=e/2*t;if(Math.abs(r-n)<=j/2){let e=t*Math.PI/4,n=Math.abs(u.theta-e);n=Math.min(n,Math.PI*2-n);let r=Math.abs(u.theta-(e+Math.PI));if(r=Math.min(r,Math.PI*2-r),n<=a||r<=a){E=!0;break}}}}}}if(E&&(this.flag[l]=4),m&&u.y>=b&&u.y<=x){let e=((u.y-b)/S*2*Math.PI*g-u.theta)%(2*Math.PI);e<0&&(e+=2*Math.PI),e>Math.PI&&(e-=2*Math.PI);let t=e*C;Math.sqrt((u.r-h)**2+t**2)<=_&&(this.flag[l]=3)}if(t.showBaffle&&u.y>=0){let e=!1;for(let t=0;t<a;t++){let n=t/a*Math.PI*2,o=Math.cos(n)*s,c=Math.sin(n)*s,l=u.x-o,d=u.z-c,f=l*Math.cos(-n)-d*Math.sin(-n),p=l*Math.sin(-n)+d*Math.cos(-n);if(Math.abs(f)<=r/2&&Math.abs(p)<=i/2){e=!0;break}}e&&(this.flag[l]=6)}this.flag[l]===0&&u.r<=p&&u.y>=O&&u.y<=k&&(this.mrf[l]=1)}}buildNeighbors(e){this.neighbors=new Int32Array(this.numCells*6),this.neighbors.fill(-1),this.distE=new Float32Array(this.numCells),this.distW=new Float32Array(this.numCells),this.distN=new Float32Array(this.numCells),this.distS=new Float32Array(this.numCells),this.distT=new Float32Array(this.numCells),this.distB=new Float32Array(this.numCells),this.vol=new Float32Array(this.numCells),this.areaE=new Float32Array(this.numCells),this.areaW=new Float32Array(this.numCells),this.areaN=new Float32Array(this.numCells),this.areaS=new Float32Array(this.numCells),this.areaT=new Float32Array(this.numCells),this.areaB=new Float32Array(this.numCells),this.dCellR=new Float32Array(this.numCells),this.dCellTheta=new Float32Array(this.numCells),this.dCellY=new Float32Array(this.numCells);let t=this.nr,n=this.ntheta,r=this.ny;for(let i=0;i<r;i++)for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=o+t*(a+n*i),c=(this.rNode[o]+this.rNode[o+1])*.5,l=this.thetaNode[(a+1)%n]-this.thetaNode[a];l<0&&(l+=2*Math.PI);let u=this.thetaNode[a]-this.thetaNode[(a-1+n)%n];u<0&&(u+=2*Math.PI);let d=this.getBottomY(0,e),f=d+e.liquidHeight-d,p=d+this.etaNode[i]*f,m=d+this.etaNode[i+1]*f-p,h=i<r-1?(this.etaNode[i+2]-this.etaNode[i+1])*f:0,g=i>0?(this.etaNode[i]-this.etaNode[i-1])*f:0,_=this.rNode[o+1]-this.rNode[o],v=o<t-1?this.rNode[o+2]-this.rNode[o+1]:_,y=o>0?this.rNode[o]-this.rNode[o-1]:_;this.distE[s]=o<t-1?_*.5+v*.5:_*.5,this.distW[s]=o>0?_*.5+y*.5:_*.5;let b=(this.thetaNode[a]+this.thetaNode[a+1])*.5,x=this.thetaNode[(a+1)%n];x<this.thetaNode[a]&&(x+=2*Math.PI);let S=this.thetaNode[(a+2)%n];S<x&&(S+=2*Math.PI);let C=(x+S)*.5,w=this.thetaNode[(a-1+n)%n];w>this.thetaNode[a]&&(w-=2*Math.PI);let T=(w+this.thetaNode[a])*.5,E=C-b;E<0&&(E+=2*Math.PI);let D=b-T;D<0&&(D+=2*Math.PI),this.distN[s]=c*E,this.distS[s]=c*D,this.distT[s]=m*.5+h*.5,this.distB[s]=m*.5+g*.5;let O=this.rNode[o+1]-this.rNode[o],k=this.thetaNode[a+1]-this.thetaNode[a]<0?this.thetaNode[a+1]-this.thetaNode[a]+2*Math.PI:this.thetaNode[a+1]-this.thetaNode[a];this.vol[s]=c*O*k*m,this.areaE[s]=this.rNode[o+1]*k*m,this.areaW[s]=this.rNode[o]*k*m,this.areaN[s]=O*m,this.areaS[s]=O*m,this.areaT[s]=c*O*k,this.areaB[s]=c*O*k,this.dCellR[s]=O,this.dCellTheta[s]=Math.max(c*k,1e-9),this.dCellY[s]=Math.max(m,1e-9),o<t-1&&(this.neighbors[s*6+0]=s+1),o>0&&(this.neighbors[s*6+1]=s-1);let A=(a+1)%n;this.neighbors[s*6+2]=o+t*(A+n*i);let j=(a-1+n)%n;if(this.neighbors[s*6+3]=o+t*(j+n*i),i<r-1&&(this.neighbors[s*6+4]=s+t*n),i>0&&(this.neighbors[s*6+5]=s-t*n),o===0){let e=(a+Math.floor(n/2))%n;this.neighbors[s*6+1]=0+t*(e+n*i)}}{let i=e.liquidHeight;for(let e=0;e<r;e++){let r=(this.etaNode[e+1]-this.etaNode[e])*i;for(let i=0;i<n;i++)for(let a=0;a<t;a++){let o=a+t*(i+n*e);if(this.flag[o]!==0)continue;let s=this.neighbors[o*6+0];if(s>=0&&this.flag[s]!==0&&(this.distE[o]=(this.rNode[a+1]-this.rNode[a])*.5),a>0){let e=this.neighbors[o*6+1];e>=0&&this.flag[e]!==0&&(this.distW[o]=(this.rNode[a+1]-this.rNode[a])*.5)}let c=this.neighbors[o*6+2];if(c>=0&&this.flag[c]!==0){let e=(this.rNode[a]+this.rNode[a+1])*.5,t=this.thetaNode[(i+1)%n]-this.thetaNode[i];t<0&&(t+=2*Math.PI),this.distN[o]=e*t*.5}let l=this.neighbors[o*6+3];if(l>=0&&this.flag[l]!==0){let e=(this.rNode[a]+this.rNode[a+1])*.5,t=this.thetaNode[i]-this.thetaNode[(i-1+n)%n];t<0&&(t+=2*Math.PI),this.distS[o]=e*t*.5}let u=this.neighbors[o*6+4];u>=0&&this.flag[u]!==0&&(this.distT[o]=r*.5);let d=this.neighbors[o*6+5];d>=0&&this.flag[d]!==0&&(this.distB[o]=r*.5)}}}}injectOGrid(t){if(this.ntheta%4!=0){console.warn(`ntheta must be a multiple of 4 for O-Grid. Skipping O-Grid injection.`);return}let n=this.ntheta/4,r=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,i=0;for(let e=0;e<this.nr&&this.rNode[e+1]<r;e++)i=e;if(i+2<this.nr){let e=2*this.rNode[i+1]/n,t=this.rNode[i+2]-this.rNode[i+1];t>0&&e<t*.5&&i++}let a=this.rNode[i+1];{let e=2*a/n,t=this.rNode[Math.min(i+2,this.nr)]-this.rNode[i+1],r=t>0?t/e:1;console.info(`[CylindricalMesh] O-Grid radius Rc=${a.toExponential(3)} (shaft clearance mode, i_shaft=${i}). Interface cell-size ratio (cyl/ogrid)=${r.toFixed(2)}.`),r>3?console.warn(`[CylindricalMesh] O-Grid/Cylindrical cell-size ratio = ${r.toFixed(2)} (O-Grid cell size ${e.toExponential(2)} vs bordering cylindrical cell width ${t.toExponential(2)}). The O-Grid (M=ntheta/4=${n}) is too FINE relative to the cylindrical mesh at the interface. Consider lowering meshNtheta or raising meshNr.`):r>0&&r<1/3&&console.warn(`[CylindricalMesh] O-Grid/Cylindrical cell-size ratio = ${r.toFixed(2)} (O-Grid cell size ${e.toExponential(2)} vs bordering cylindrical cell width ${t.toExponential(2)}). The O-Grid (M=ntheta/4=${n}) is too COARSE relative to the cylindrical mesh at the interface. Consider raising meshNtheta (increases M) or lowering meshNr.`)}let o=this.ny;if(o===0)return;let s=Array(n+1).fill(0).map(()=>Array(n+1)),c=(this.ntheta-Math.floor(n/2))%this.ntheta;for(let e=0;e<=n;e++){let t=(c+e)%this.ntheta;s[n][e]={x:a*Math.cos(this.thetaNode[t]),z:a*Math.sin(this.thetaNode[t])}}for(let e=n;e>=0;e--){let t=(c+n+(n-e))%this.ntheta;s[e][n]={x:a*Math.cos(this.thetaNode[t]),z:a*Math.sin(this.thetaNode[t])}}for(let e=n;e>=0;e--){let t=(c+2*n+(n-e))%this.ntheta;s[0][e]={x:a*Math.cos(this.thetaNode[t]),z:a*Math.sin(this.thetaNode[t])}}for(let e=0;e<=n;e++){let t=(c+3*n+e)%this.ntheta;s[e][0]={x:a*Math.cos(this.thetaNode[t]),z:a*Math.sin(this.thetaNode[t])}}let l=new Float32Array(n+1),u=new Float32Array(n+1);for(let e=0;e<=n;e++)l[e]=e/n;for(let e=0;e<=n;e++)u[e]=e/n;for(let e=1;e<n;e++)for(let t=1;t<n;t++){let r=l[e],i=u[t],a=(1-r)*s[0][t].x+r*s[n][t].x+(1-i)*s[e][0].x+i*s[e][n].x-(1-r)*(1-i)*s[0][0].x-r*(1-i)*s[n][0].x-(1-r)*i*s[0][n].x-r*i*s[n][n].x,o=(1-r)*s[0][t].z+r*s[n][t].z+(1-i)*s[e][0].z+i*s[e][n].z-(1-r)*(1-i)*s[0][0].z-r*(1-i)*s[n][0].z-(1-r)*i*s[0][n].z-r*i*s[n][n].z;s[e][t]={x:a,z:o}}for(let e=0;e<20;e++)for(let e=1;e<n;e++)for(let t=1;t<n;t++)s[e][t]={x:(s[e-1][t].x+s[e+1][t].x+s[e][t-1].x+s[e][t+1].x)*.25,z:(s[e-1][t].z+s[e+1][t].z+s[e][t-1].z+s[e][t+1].z)*.25};this.ogridNodes=new Float32Array((n+1)*(n+1)*2),this.ogridM=n;for(let e=0;e<=n;e++)for(let t=0;t<=n;t++){let r=(e*(n+1)+t)*2;this.ogridNodes[r]=s[t][e].x,this.ogridNodes[r+1]=s[t][e].z}let d=n*n,f=d*o;this.numCellsOgrid=f;let p=this.numCells+f,m=e=>{let t=new Float32Array(p);return t.set(e),t},h=e=>{let t=new Int32Array(p*6);return t.fill(-1),t.set(e),t},g=e=>{let t=new Int8Array(p);return t.set(e),t};this.vol=m(this.vol),this.areaE=m(this.areaE),this.areaW=m(this.areaW),this.areaN=m(this.areaN),this.areaS=m(this.areaS),this.areaT=m(this.areaT),this.areaB=m(this.areaB),this.distE=m(this.distE),this.distW=m(this.distW),this.distN=m(this.distN),this.distS=m(this.distS),this.distT=m(this.distT),this.distB=m(this.distB),this.dCellR=m(this.dCellR),this.dCellTheta=m(this.dCellTheta),this.dCellY=m(this.dCellY),this.cx=m(this.cx),this.cy=m(this.cy),this.cz=m(this.cz),this.flag=g(this.flag),this.mrf=g(this.mrf),this.neighbors=h(this.neighbors);for(let e=0;e<o;e++)for(let t=0;t<this.ntheta;t++){for(let n=0;n<=i;n++){let r=n+this.nr*(t+this.ntheta*e);this.flag[r]=8}let n=i+1+this.nr*(t+this.ntheta*e);if(this.neighbors[n*6+1]=-1,e===o-1)for(let e=0;e<=i;e++){let n=e+this.nr*(t+this.ntheta*o);this.neighbors[n*6+5]=-1}}let _=this.numCells,v=new Int32Array(o);for(let r=0;r<o;r++){v[r]=_;let a=this.getBottomY(0,t),l=a+t.liquidHeight-a,u=[];for(let e=0;e<n;e++){u[e]=[];for(let t=0;t<n;t++){let n=s[t][e],r=s[t+1][e],i=s[t+1][e+1],a=s[t][e+1];u[e][t]={x:(n.x+r.x+i.x+a.x)/4,z:(n.z+r.z+i.z+a.z)/4}}}for(let i=0;i<n;i++)for(let c=0;c<n;c++){let f=_++,p=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,m=e.getImpellerCenterY(t)-t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(m=t.tankHeight*.1);let h=u[i][c].x,g=u[i][c].z,v=Math.hypot(h,g),y=a+(this.etaNode[r]+this.etaNode[r+1])*.5*l,b=Math.max(p*.5,this.meshHeight/this.ny),x=m-b,S=v<=p&&y>=m,C=v<=p&&y>=x&&y<m;if(this.flag[f]=S||C?5:0,!S&&!C&&t.mirrorPlateType&&t.mirrorPlateType!==`None`&&y<this.getBottomY(v,t)&&(this.flag[f]=7,this.mrf[f]=0),!S&&!C&&this.flag[f]===0){let n=t.impellerDiameter/2,r=t.bladeWidth,i=e.getImpellerCenterY(t),a=t.bladeThickness||.01,o=t.bladeCount||4,s=y-i,c=Math.atan2(g,h);c<0&&(c+=2*Math.PI);let l=!1;if(v>p&&v<=n){if(t.impellerType===`FlatPaddle`||t.impellerType===`InclinedPaddle`){if(Math.abs(s)<=r/2){let e=2*Math.PI/this.ntheta,n=Math.max(e*.95,a/2/Math.max(v,.01));for(let e=0;e<o;e++){let r=e/o*Math.PI*2;if(t.impellerType===`FlatPaddle`){let e=Math.abs(c-r);if(e=Math.min(e,Math.PI*2-e),e<=n){l=!0;break}}else{let e=(t.bladeAngle||45)*Math.PI/180,i=s*Math.tan(e)/v,a=Math.abs(c-(r-i));if(a=Math.min(a,Math.PI*2-a),a<=n){l=!0;break}}}}}else if(t.impellerType===`FlatPropeller`){if(Math.abs(s)<=r/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,a/2/Math.max(v,.01)),n=Math.max(3,o);for(let e=0;e<n;e++){let r=e/n*Math.PI*2,i=s/v,a=Math.abs(c-(r-i));if(a=Math.min(a,Math.PI*2-a),a<=t){l=!0;break}}}}else if(t.impellerType===`Turbine`||t.impellerType===`Rushton`){let e=n*.7,t=a*1.5;if(v<=e&&Math.abs(s)<=t/2&&(l=!0),!l&&v>=e*.9&&v<=n&&Math.abs(s)<=r/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,a/2/Math.max(v,.01));for(let e=0;e<o;e++){let n=e/o*Math.PI*2,r=Math.abs(c-n);if(r=Math.min(r,Math.PI*2-r),r<=t){l=!0;break}}}}else if(t.impellerType===`Pfaudler`){let e=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,i=n*.55,u=v<=i?0:(v-i)*Math.tan(e),d=(t.pfaudlerSweepAngle===void 0?35:t.pfaudlerSweepAngle)*Math.PI/180,f=Math.min(1,v/n),p=d*f*f,m=(t.bladeAngle||0)*Math.PI/180,h=s-u,g=h*Math.tan(m)/v;if(Math.abs(h)<=r/2){let e=2*Math.PI/this.ntheta,t=Math.max(e*.95,a/2/Math.max(v,.01));for(let e=0;e<o;e++){let n=e/o*Math.PI*2,r=Math.abs(c-(n-p-g));if(r=Math.min(r,Math.PI*2-r),r<=t){l=!0;break}}}}else if(t.impellerType===`Anchor`){let e=Math.max(n*1.5,t.tankHeight*.3),i=Math.max(r,.05),o=t.tankHeight*.1,s=y-o,u=2*Math.PI/this.ntheta,d=Math.max(u*.95,a/2/Math.max(v,.01));if(v>=n-i&&v<=n&&s>=0&&s<=e)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(c-t);if(n=Math.min(n,Math.PI*2-n),n<=d){l=!0;break}}if(!l&&v<=n&&Math.abs(y-(o+e*.8))<=i/2)for(let e=0;e<2;e++){let t=e*Math.PI,n=Math.abs(c-t);if(n=Math.min(n,Math.PI*2-n),n<=d){l=!0;break}}if(!l){let e=Math.sqrt(v*v+(y-o)**2);Math.abs(e-n)<=i/2&&y<=o&&(l=!0)}}else if(t.impellerType===`Ribbon`){let e=t.tankHeight*.6,i=y-t.tankHeight*.1,o=2*Math.PI/this.ntheta,s=Math.max(o*.95,a/2/Math.max(v,.01));if(i>=0&&i<=e){if(v>=n-r/2&&v<=n+r/2){let t=i/e*Math.PI*2*2;for(let e=0;e<2;e++){let n=t+e*Math.PI,r=Math.abs(c-n);if(r=Math.min(r,Math.PI*2-r),r<=s){l=!0;break}}}if(!l)for(let t=0;t<3;t++){let n=e/2*t;if(Math.abs(i-n)<=r/2){let e=t*Math.PI/4,n=Math.abs(c-e);n=Math.min(n,Math.PI*2-n);let r=Math.abs(c-(e+Math.PI));if(r=Math.min(r,Math.PI*2-r),n<=s||r<=s){l=!0;break}}}}}}if(l&&(this.flag[f]=4),!l&&t.coilEnabled){let n=t.coilRadius,r=t.coilTurns,i=n*.05,a=e.getMirrorDepth(t),o=.05,s=Math.max(.15000000000000002,t.liquidHeight-a-.05),l=s-o,u=l/(2*Math.PI*r);if(y>=o&&y<=s){let e=((y-o)/l*2*Math.PI*r-c)%(2*Math.PI);e<0&&(e+=2*Math.PI),e>Math.PI&&(e-=2*Math.PI),Math.sqrt((v-n)**2+(e*u)**2)<=i&&(this.flag[f]=3)}}if(this.flag[f]===0&&t.showBaffle&&y>=0){let e=t.baffleWidth,n=t.baffleThickness,r=t.baffleCount,i=t.baffleGap===void 0?this.radius*2/75:t.baffleGap,a=this.radius-e/2-i;for(let t=0;t<r;t++){let i=t/r*Math.PI*2,o=Math.cos(i)*a,s=Math.sin(i)*a,c=h-o,l=g-s,u=c*Math.cos(-i)-l*Math.sin(-i),d=c*Math.sin(-i)+l*Math.cos(-i);if(Math.abs(u)<=e/2&&Math.abs(d)<=n/2){this.flag[f]=6;break}}}}{let n=t.impellerDiameter/2*Math.max(t.mrfRadialMargin??1.2,1.05),r=e.getImpellerCenterY(t)-t.bladeWidth/2,i=e.getImpellerCenterY(t)+t.bladeWidth/2;if(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)r=t.tankHeight*.1,i=t.tankHeight*.9;else if(t.impellerType===`Pfaudler`){let n=(t.pfaudlerLiftAngle===void 0?25:t.pfaudlerLiftAngle)*Math.PI/180,r=t.impellerDiameter/2*.55,a=(t.impellerDiameter/2-r)*Math.tan(n);i=e.getImpellerCenterY(t)+t.bladeWidth/2+a}let a=t.mrfVerticalMarginBottom??.1,o=t.mrfVerticalMarginTop??.1,s=r-a,c=i+o;this.mrf[f]=+(this.flag[f]===0&&!S&&!C&&v<=n&&y>=s&&y<=c)}let w=s[c][i],T=s[c+1][i],E=s[c+1][i+1],D=s[c][i+1],O=.5*Math.abs((T.x-w.x)*(E.z-w.z)-(T.z-w.z)*(E.x-w.x))+.5*Math.abs((E.x-w.x)*(D.z-w.z)-(E.z-w.z)*(D.x-w.x)),k=a+this.etaNode[r]*l,A=a+this.etaNode[r+1]*l-k;this.vol[f]=O*A,this.cx[f]=h,this.cy[f]=y,this.cz[f]=g;let j=Math.hypot(T.x-E.x,T.z-E.z),M=Math.hypot(w.x-D.x,w.z-D.z),N=Math.hypot(D.x-E.x,D.z-E.z),P=Math.hypot(w.x-T.x,w.z-T.z);this.areaE[f]=j*A,this.areaW[f]=M*A,this.areaN[f]=N*A,this.areaS[f]=P*A,this.areaT[f]=O,this.areaB[f]=O;let F=r<o-1?(this.etaNode[r+2]-this.etaNode[r+1])*l:0,I=r>0?(this.etaNode[r]-this.etaNode[r-1])*l:0;this.distT[f]=A*.5+F*.5,this.distB[f]=A*.5+I*.5;let L={x:(T.x+E.x)/2,z:(T.z+E.z)/2},ee={x:(w.x+D.x)/2,z:(w.z+D.z)/2},te={x:(D.x+E.x)/2,z:(D.z+E.z)/2},ne={x:(w.x+T.x)/2,z:(w.z+T.z)/2},R=c<n-1?Math.hypot(u[i][c+1].x-h,u[i][c+1].z-g):Math.hypot(L.x-h,L.z-g),re=c>0?Math.hypot(u[i][c-1].x-h,u[i][c-1].z-g):Math.hypot(ee.x-h,ee.z-g),ie=i<n-1?Math.hypot(u[i+1][c].x-h,u[i+1][c].z-g):Math.hypot(te.x-h,te.z-g),z=i>0?Math.hypot(u[i-1][c].x-h,u[i-1][c].z-g):Math.hypot(ne.x-h,ne.z-g);this.distE[f]=Math.max(R,1e-12),this.distW[f]=Math.max(re,1e-12),this.distN[f]=Math.max(ie,1e-12),this.distS[f]=Math.max(z,1e-12),this.dCellR[f]=Math.sqrt(O),this.dCellTheta[f]=Math.sqrt(O),this.dCellY[f]=Math.max(A,1e-9);let ae=c<n-1?f+1:-1,oe=c>0?f-1:-1,se=i<n-1?f+n:-1,ce=i>0?f-n:-1,le=r<o-1?f+d:-1,ue=r>0?f-d:-1;this.neighbors[f*6+0]=ae,this.neighbors[f*6+1]=oe,this.neighbors[f*6+2]=se,this.neighbors[f*6+3]=ce,this.neighbors[f*6+4]=le,this.neighbors[f*6+5]=ue}let f=i+1;(this.rNode[f]+this.rNode[f+1])*.5,(this.etaNode[r+1]-this.etaNode[r])*l;let p=new Map,m=new Map;for(let e=0;e<n;e++)for(let t=0;t<n;t++){let i=this.numCells+d*r+e*n+t,a=u[e][t].x,o=u[e][t].z,s=e=>{let t=(this.rNode[f]+this.rNode[f+1])*.5,n=(this.thetaNode[e]+this.thetaNode[(e+1)%this.ntheta])*.5;return{x:t*Math.cos(n),z:t*Math.sin(n)}},l=(e,t)=>{let n=f+this.nr*(t+this.ntheta*r);if(this.flag[n]===8)return;let c=this.flag[n]===5||this.flag[n]===4||this.flag[n]===3||this.flag[n]===6||this.flag[n]===7;if(this.neighbors[i*6+e]=n,c||(this.neighbors[n*6+1]=i),c)return;let l;l=e===0?this.areaE[i]:e===1?this.areaW[i]:e===2?this.areaN[i]:this.areaS[i];let u=m.get(n);u?m.set(n,u+l):m.set(n,l);let d=s(t),h=Math.max(Math.hypot(d.x-a,d.z-o),1e-12);e===0?this.distE[i]=h:e===1?this.distW[i]=h:e===2?this.distN[i]=h:e===3&&(this.distS[i]=h);let g=p.get(n);g?(g.distAreaSum+=h*l,g.totalArea+=l):p.set(n,{distAreaSum:h*l,totalArea:l})};t===n-1&&l(0,(c+e)%this.ntheta),t===0&&l(1,(c+2*n+(n-1-e))%this.ntheta),e===n-1&&l(2,(c+n+(n-1-t))%this.ntheta),e===0&&l(3,(c+3*n+t)%this.ntheta)}for(let[e,t]of p){let n=Math.max(t.distAreaSum/t.totalArea,1e-12);this.distW[e]=n,this.distE[e]=n}for(let[e,t]of m)this.areaW[e]=t,this.areaE[e]=t}{this.getBottomY(0,t);let e=t.liquidHeight;for(let t=0;t<o;t++){let r=(this.etaNode[t+1]-this.etaNode[t])*e;for(let e=0;e<n;e++)for(let i=0;i<n;i++){let a=v[t]+e*n+i;if(this.flag[a]===0)for(let t=0;t<6;t++){let o=this.neighbors[a*6+t];if(!(o<0)&&this.flag[o]!==0)if(this.neighbors[a*6+t]=-1,t===4||t===5)t===4?this.distT[a]=r*.5:this.distB[a]=r*.5;else{let r=i,o=e,s=this.ogridNodes[(o*(n+1)+r)*2],c=this.ogridNodes[(o*(n+1)+r)*2+1],l=this.ogridNodes[(o*(n+1)+r+1)*2],u=this.ogridNodes[(o*(n+1)+r+1)*2+1],d=this.ogridNodes[((o+1)*(n+1)+r+1)*2],f=this.ogridNodes[((o+1)*(n+1)+r+1)*2+1],p=this.ogridNodes[((o+1)*(n+1)+r)*2],m=this.ogridNodes[((o+1)*(n+1)+r)*2+1],h=this.cx[a],g=this.cz[a];t===0?this.distE[a]=Math.max(Math.hypot((l+d)/2-h,(u+f)/2-g),1e-12):t===1?this.distW[a]=Math.max(Math.hypot((s+p)/2-h,(c+m)/2-g),1e-12):t===2?this.distN[a]=Math.max(Math.hypot((p+d)/2-h,(m+f)/2-g),1e-12):this.distS[a]=Math.max(Math.hypot((s+l)/2-h,(c+u)/2-g),1e-12)}}}}}if(o<this.ny){let e=v[o-1],r=this.getBottomY(0,t),i=r+t.liquidHeight-r,a=new Map;for(let t=0;t<n;t++)for(let r=0;r<n;r++){let s=e+t*n+r,c=this.cx[s],l=this.cz[s],u=Math.hypot(c,l),d=Math.atan2(l,c);d<0&&(d+=2*Math.PI);let f=0;for(let e=0;e<this.nr;e++){if(u>=this.rNode[e]&&u<this.rNode[e+1]){f=e;break}e===this.nr-1&&(f=this.nr-1)}let p=0;for(let e=0;e<this.ntheta;e++){let t=this.thetaNode[e],n=this.thetaNode[e+1];if(d>=t&&d<n){p=e;break}}let m=f+this.nr*(p+this.ntheta*o);if(this.flag[m]===8)continue;let h=(this.etaNode[o]-this.etaNode[o-1])*i,g=o<this.ny-1?(this.etaNode[o+1]-this.etaNode[o])*i:h,_=Math.max(h*.5+g*.5,1e-12);this.neighbors[s*6+4]=m,this.distT[s]=_;let v=this.areaT[s],y=a.get(m);y?(y.area+=v,y.distAreaSum+=_*v):(a.set(m,{area:v,distAreaSum:_*v}),this.neighbors[m*6+5]=s)}for(let[e,t]of a)this.areaB[e]=t.area,this.distB[e]=Math.max(t.distAreaSum/t.area,1e-12)}this.numCells=p,this.ogridM=n,this.ogridRc=a,this.ogridIShaft=i,this.ogridKLayers=o,this.ogridLayerBase=v}injectMirrorMesh(e){}layer(e){if(this.blLayers>0){if(e.mirrorPlateType&&e.mirrorPlateType!==`None`){let t=this.getBottomY(0,e),n=this.getBottomY(this.radius,e),r=0;for(let e=0;e<this.ny&&t+this.etaNode[e+1]*this.meshHeight<=n+1e-5;e++)r=e+1;this.mirrorMeshKMirror=r}else this.mirrorMeshKMirror=0;this.injectFullMirrorBL(e),this.injectOGridMirrorBL(e),this.injectCylindricalWallBL(e),e.baffleCount>0&&this.injectBaffleBL(e),e.coilEnabled&&this.injectCoilBL(e)}}injectOGridMirrorBL(e){if((e.mirrorPlateType||`None`)===`None`||!this.ogridM||!this.ogridNodes)return;let t=this.nr*this.ntheta*this.ny,n=this.ogridM*this.ogridM*this.ny,r=Math.max(2,Math.min(8,e.fmbLayers||this.blLayers||3)),i=e.fmbThickness||this.blThickness||.02,a=e.fmbExpansionRatio||e.blExpansionRatio||1.3,o=[],s=new Map;for(let e=t;e<t+n;e++){if(this.flag[e]!==0)continue;let t=this.neighbors[e*6+5];(t<0||this.flag[t]===7)&&(o.push(e),s.set(e,o.length-1))}if(o.length===0)return;let c=o.length*r,l=this.numCells,u=l+c,d=l,f=e=>{let t=new Float32Array(u);return t.set(e),t},p=e=>{let t=new Int32Array(u*6);return t.fill(-1),t.set(e),t},m=e=>{let t=new Int8Array(u);return t.set(e),t};this.vol=f(this.vol),this.areaE=f(this.areaE),this.areaW=f(this.areaW),this.areaN=f(this.areaN),this.areaS=f(this.areaS),this.areaT=f(this.areaT),this.areaB=f(this.areaB),this.distE=f(this.distE),this.distW=f(this.distW),this.distN=f(this.distN),this.distS=f(this.distS),this.distT=f(this.distT),this.distB=f(this.distB),this.dCellR=f(this.dCellR),this.dCellTheta=f(this.dCellTheta),this.dCellY=f(this.dCellY),this.cx=f(this.cx),this.cy=f(this.cy),this.cz=f(this.cz),this.flag=m(this.flag),this.mrf=m(this.mrf),this.neighbors=p(this.neighbors);for(let t=0;t<o.length;t++){let n=o[t],c=Math.sqrt(this.cx[n]*this.cx[n]+this.cz[n]*this.cz[n]),l=this.getBottomY(c,e),u=this.getMirrorNormal(c,e),f=this.dCellR[n],p=this.dCellTheta[n],m=this.dCellY[n],h=Math.max(Math.abs(u.ny),1e-6),g=i;m<=i/h*1.05&&(g=m*.9*h);let _=new Float32Array(r+1);_[0]=0;let v=Math.abs(a-1)<1e-6?g/r:g*(a-1)/(a**+r-1);for(let e=0;e<r;e++)_[e+1]=_[e]+v*a**+e;_[r]=g;for(let e=0;e<r;e++){let i=d+t*r+e,a=(_[e]+_[e+1])*.5,o=_[e+1]-_[e],c=Math.max(Math.abs(u.ny),1e-6),m=l+a/c;this.cx[i]=this.cx[n],this.cy[i]=m,this.cz[i]=this.cz[n],this.flag[i]=0,this.mrf[i]=0,f*p;let h=o/c,g=Math.max(this.areaT[n],1e-12);this.vol[i]=g*h,this.areaT[i]=g,this.areaB[i]=g;let v=h/Math.max(this.dCellY[n],1e-12);this.areaE[i]=this.areaE[n]*v,this.areaW[i]=this.areaW[n]*v,this.areaN[i]=this.areaN[n]*v,this.areaS[i]=this.areaS[n]*v,this.dCellR[i]=this.dCellR[n],this.dCellTheta[i]=this.dCellTheta[n],this.dCellY[i]=h;let y=Math.max(Math.abs(u.ny),1e-6);this.distT[i]=e<r-1?((_[e+2]-_[e+1])*.5+o*.5)/y:h*.5,this.distB[i]=e>0?((_[e]-_[e-1])*.5+o*.5)/y:h*.5,this.distE[i]=this.distE[n],this.distW[i]=this.distW[n],this.distN[i]=this.distN[n],this.distS[i]=this.distS[n],this.neighbors[i*6+4]=e<r-1?d+t*r+e+1:-1,this.neighbors[i*6+5]=e>0?d+t*r+e-1:-1;for(let t=0;t<4;t++){let a=this.neighbors[n*6+t];if(a>=0){if(s.has(a))this.neighbors[i*6+t]=d+s.get(a)*r+e;else if(this.fmbParentToFmb&&this.fmbParentToFmb.has(a+`_`+e)){let n=this.fmbParentToFmb.get(a+`_`+e);this.neighbors[i*6+t]=n,this.neighbors[n*6+1]=i}}}}let y=d+t*r+r-1;this.neighbors[n*6+5]=y,this.neighbors[y*6+4]=n;let b=g/h;this.dCellY[n]-=b,this.cy[n]+=b/2,this.vol[n]=Math.max(this.areaT[n],1e-12)*this.dCellY[n];let x=this.dCellY[n]*.5+(_[r]-_[r-1])/h*.5;this.distB[n]=x,this.distT[y]=x}for(let e=0;e<o.length;e++){let t=o[e];for(let n=0;n<4;n++){let i=this.neighbors[t*6+n];if(i>=0&&s.has(i)){let t=s.get(i);for(let i=0;i<r;i++){let a=d+e*r+i,o=d+t*r+i;this.neighbors[a*6+n]=o}}}}this.numCellsOgrid+=c,this.ogridMirrorBLBase=d,this.ogridMirrorBLNum=c,this.numCells=u}updateSlidingMesh(e,t){if(!this.numCellsOgrid)return;let n=this.nr*this.ntheta*this.ny,r=this.numCells,i=this.ogridM||Math.floor(this.ntheta/4),a=this.ogridRc,o=this.k_ogrid,s=i*i,c=this.i_shaft+1,l=Math.cos(e),u=Math.sin(e);for(let e=n;e<r;e++){let t=this.cx[e],n=this.cz[e];this.cx[e]=t*l-n*u,this.cz[e]=t*u+n*l}for(let e=0;e<this.ny;e++)for(let t=0;t<this.ntheta;t++){let n=c+this.nr*(t+this.ntheta*e);this.flag[n]===0&&(this.neighbors[n*6+1]=-1)}if(o<this.ny)for(let e=0;e<this.ntheta;e++)for(let t=0;t<=this.i_shaft;t++){let n=t+this.nr*(e+this.ntheta*o);this.neighbors[n*6+5]=-1}let d=this.getBottomY(0,t),f=d+t.liquidHeight-d;for(let e=0;e<o;e++){let t=(this.etaNode[e+1]-this.etaNode[e])*f,r=new Map,o=new Map;for(let l=0;l<i;l++)for(let u=0;u<i;u++){let d=n+s*e+l*i+u,f=this.cx[d],p=this.cz[d],m=e=>{let t=(this.rNode[c]+this.rNode[c+1])*.5,n=(this.thetaNode[e]+this.thetaNode[(e+1)%this.ntheta])*.5;return{x:t*Math.cos(n),z:t*Math.sin(n)}},h=e=>{let n=this.thetaNode[(e+1)%this.ntheta]-this.thetaNode[e];return n<0&&(n+=2*Math.PI),a*n*t},g=(t,n)=>{let i=c+this.nr*(n+this.ntheta*e);if(this.flag[i]===8)return;let a=this.flag[i]===5||this.flag[i]===4||this.flag[i]===3||this.flag[i]===6||this.flag[i]===7;if(this.neighbors[d*6+t]=i,a||(this.neighbors[i*6+1]=d),a)return;let s;s=t===0?this.areaE[d]:t===1?this.areaW[d]:t===2?this.areaN[d]:this.areaS[d];let l=o.get(i)||0;o.set(i,l+s);let u=m(n),g=Math.hypot(f-u.x,p-u.z),_=r.get(i);_||(_={distAreaSum:0,totalArea:0},r.set(i,_)),_.distAreaSum+=g*s,_.totalArea+=s,this.distE[d]=g,h(n)>0&&(this.distW[d]=g)},_=Math.atan2(p,f);_<0&&(_+=2*Math.PI);let v=0;for(let e=0;e<this.ntheta;e++){let t=this.thetaNode[e],n=this.thetaNode[e+1];if(_>=t&&_<n){v=e;break}}u===0&&g(1,v),u===i-1&&g(0,v),l===0&&g(3,v),l===i-1&&g(2,v)}for(let[e,t]of r.entries())t.totalArea>0&&(this.distW[e]=t.distAreaSum/t.totalArea);for(let[e,t]of o.entries())this.areaW[e]=t}if(o<this.ny){let e=n+s*(o-1),t=new Map;for(let n=0;n<i;n++)for(let r=0;r<i;r++){let a=e+n*i+r,s=this.cx[a],c=this.cz[a],l=Math.hypot(s,c),u=Math.atan2(c,s);u<0&&(u+=2*Math.PI);let d=0;for(let e=0;e<this.nr;e++){if(l>=this.rNode[e]&&l<this.rNode[e+1]){d=e;break}e===this.nr-1&&(d=this.nr-1)}let f=0;for(let e=0;e<this.ntheta;e++){let t=this.thetaNode[e],n=this.thetaNode[e+1];if(u>=t&&u<n){f=e;break}}let p=d+this.nr*(f+this.ntheta*o);if(this.flag[p]===8)continue;this.neighbors[a*6+4]=p,this.neighbors[p*6+5]===-1&&(this.neighbors[p*6+5]=a);let m=this.dCellY[a]*.5+this.dCellY[p]*.5,h=this.areaT[a],g=t.get(p);g||(g={distAreaSum:0,totalArea:0},t.set(p,g)),g.distAreaSum+=m*h,g.totalArea+=h,this.distT[a]=m,this.distB[p]=m}for(let[e,n]of t.entries())n.totalArea>0&&(this.distB[e]=n.distAreaSum/n.totalArea,this.areaB[e]=n.totalArea)}}injectFullMirrorBL(e){if((e.mirrorPlateType||`None`)===`None`)return;let t=this.nr,n=this.ntheta,r=this.ny;this.radius;let i=Math.max(2,Math.min(8,e.fmbLayers||this.blLayers||3)),a=e.fmbThickness||this.blThickness||.02,o=e.fmbExpansionRatio||e.blExpansionRatio||1.3,s=new Float32Array(i+1);s[0]=0;let c=Math.abs(o-1)<1e-6?a/i:a*(o-1)/(o**+i-1);for(let e=0;e<i;e++)s[e+1]=s[e]+c*o**+e;let l=this.getBottomY(0,e),u=e.liquidHeight,d=[];for(let e=0;e<t;e++)d.push([]);let f=new Map;for(let e=0;e<t;e++){let i=-1;for(let r=0;r<n;r++){let a=e+t*(r+n*0);if(this.flag[a]===0){i=r;break}}if(i<0){d[e].sort((e,t)=>e-t);continue}for(let a=0;a<r;a++){let r=e+t*(i+n*a);if(this.flag[r]!==0)continue;let o=this.neighbors[r*6+5],s=o>=0?this.flag[o]:-1;(s===7||s===8||o<0)&&(d[e].includes(a)||d[e].push(a))}d[e].sort((e,t)=>e-t)}let p=0,m=new Int32Array(t);for(let e=0;e<t;e++)m[e]=p,p+=d[e].length*n*i;if(this.numCylBL=p,p===0){console.warn(`[CylindricalMesh] injectFullMirrorBL: no target cells found. Skipping.`);return}let h=this.numCells,g=h+p,_=h,v=e=>{let t=new Float32Array(g);return t.set(e),t},y=e=>{let t=new Int32Array(g*6);return t.fill(-1),t.set(e),t},b=e=>{let t=new Int8Array(g);return t.set(e),t};this.vol=v(this.vol),this.areaE=v(this.areaE),this.areaW=v(this.areaW),this.areaN=v(this.areaN),this.areaS=v(this.areaS),this.areaT=v(this.areaT),this.areaB=v(this.areaB),this.distE=v(this.distE),this.distW=v(this.distW),this.distN=v(this.distN),this.distS=v(this.distS),this.distT=v(this.distT),this.distB=v(this.distB),this.dCellR=v(this.dCellR),this.dCellTheta=v(this.dCellTheta),this.dCellY=v(this.dCellY),this.cx=v(this.cx),this.cy=v(this.cy),this.cz=v(this.cz),this.flag=b(this.flag),this.mrf=b(this.mrf),this.neighbors=y(this.neighbors);for(let s=0;s<t;s++){let c=d[s],p=c.length;if(p===0)continue;let h=(this.rNode[s]+this.rNode[s+1])*.5,g=this.rNode[s+1]-this.rNode[s],v=this.getBottomY(h,e),y=this.getMirrorNormal(h,e);for(let e=0;e<p;e++){let d=c[e],b=s+t*(0+n*d),x=this.dCellY[b],S=Math.max(Math.abs(y.ny),1e-6),C=a;x<=a/S*1.05&&(C=x*.9*S);let w=new Float32Array(i+1);w[0]=0;let T=Math.abs(o-1)<1e-6?C/i:C*(o-1)/(o**+i-1);for(let e=0;e<i;e++)w[e+1]=w[e]+T*o**+e;w[i]=C;let E=l+this.etaNode[d]*u,D=l+this.etaNode[d+1]*u-E,O=d<r-1?(this.etaNode[d+2]-this.etaNode[d+1])*u:0,k=d>0?(this.etaNode[d]-this.etaNode[d-1])*u:0;for(let a=0;a<n;a++){s+t*(a+n*d);let o=this.thetaNode[a+1]-this.thetaNode[a];o<0&&(o+=2*Math.PI);let c=(this.thetaNode[a]+this.thetaNode[(a+1)%n])*.5;for(let l=0;l<i;l++){let u=_+m[s]+p*n*l+e*n+a,b=(w[l]+w[l+1])*.5,x=w[l+1]-w[l],S=Math.max(Math.abs(y.ny),1e-6),C=h,T=v+b/S;this.cx[u]=C*Math.cos(c),this.cy[u]=T,this.cz[u]=C*Math.sin(c);let E=s+t*(a+n*d);this.flag[u]=this.flag[E],this.mrf[u]=0,f.set(E+`_`+l,u);let A=x/S,j=C*o;this.vol[u]=j*x*A,this.areaT[u]=j*A,this.areaB[u]=j*A,this.areaN[u]=x*A,this.areaS[u]=x*A,this.areaE[u]=j*x,this.areaW[u]=j*x,this.dCellR[u]=g,this.dCellTheta[u]=Math.max(h*o,1e-9),this.dCellY[u]=A;let M=l<i-1?(w[l+2]-w[l+1])*.5+x*.5:x*.5,N=l>0?(w[l]-w[l-1])*.5+x*.5:x*.5;this.distT[u]=M/S,this.distB[u]=N/S;let P=this.thetaNode[(a+1)%n];P<this.thetaNode[a]&&(P+=2*Math.PI);let F=this.thetaNode[(a+2)%n];F<P&&(F+=2*Math.PI);let I=(P+F)*.5,L=this.thetaNode[(a-1+n)%n];L>this.thetaNode[a]&&(L-=2*Math.PI);let ee=(L+this.thetaNode[a])*.5,te=I-c;te<0&&(te+=2*Math.PI);let ne=c-ee;ne<0&&(ne+=2*Math.PI),this.distN[u]=C*te,this.distS[u]=C*ne,this.distE[u]=d<r-1?D*.5+O*.5:D*.5,this.distW[u]=d>0?D*.5+k*.5:D*.5,this.neighbors[u*6+4]=l<i-1?_+m[s]+(l+1)*(p*n)+e*n+a:-1,this.neighbors[u*6+5]=l>0?_+m[s]+(l-1)*(p*n)+e*n+a:-1;let R=(a+1)%n;this.neighbors[u*6+2]=_+m[s]+p*n*l+e*n+R;let re=(a-1+n)%n;this.neighbors[u*6+3]=_+m[s]+p*n*l+e*n+re,this.neighbors[u*6+0]=e<p-1?_+m[s]+p*n*l+(e+1)*n+a:-1,this.neighbors[u*6+1]=e>0?_+m[s]+p*n*l+(e-1)*n+a:-1}}}}for(let r=0;r<t;r++){let s=d[r],c=s.length;if(c===0)continue;let l=(this.rNode[r]+this.rNode[r+1])*.5;this.rNode[r+1]-this.rNode[r];let u=this.getMirrorNormal(l,e),f=Math.max(Math.abs(u.ny),1e-6);for(let e=0;e<c;e++){let u=s[e],d=r+t*(0+n*u),p=this.dCellY[d],h=a;p<=a/f*1.05&&(h=p*.9*f);let g=new Float32Array(i+1);g[0]=0;let v=Math.abs(o-1)<1e-6?h/i:h*(o-1)/(o**+i-1);for(let e=0;e<i;e++)g[e+1]=g[e]+v*o**+e;g[i]=h;for(let a=0;a<n;a++){let o=r+t*(a+n*u),s=_+m[r]+(i-1)*(c*n)+e*n+a;this.neighbors[o*6+5]=s;let d=h/f;this.dCellY[o]-=d,this.cy[o]+=d/2,this.vol[o]=Math.max(this.areaT[o],1e-12)*this.dCellY[o];let p=this.thetaNode[a+1]-this.thetaNode[a];p<0&&(p+=2*Math.PI);let v=l*p*this.dCellY[o];this.areaB[o]=v;let y=g[i]-g[i-1],b=this.dCellY[o]*.5+y*.5/f;this.distB[o]=b,this.neighbors[s*6+4]=o,this.distT[s]=b,this.areaT[s]=v}}}if(this.mirrorMeshBase!==void 0&&this.mirrorMeshKMirror!==void 0){let e=t-2,r=this.mirrorMeshKMirror,i=this.mirrorMeshNs;for(let a=0;a<r;a++)for(let o=0;o<n;o++){let s=e+t*(o+n*a);if(this.flag[s]!==0)continue;let c=this.neighbors[s*6+0];if(c<0||this.flag[c]!==8)continue;let l=this.mirrorMeshBase+(i-1)*(r*n)+a*n+o;this.neighbors[s*6+0]=l,this.neighbors[l*6+4]=s;let u=(this.rNode[t-1]-this.rNode[t-2])*.5;this.distE[s]=u+this.distT[l],this.distT[l]=u+this.distT[l];let d=this.rNode[t-1],f=this.thetaNode[o+1]-this.thetaNode[o];f<0&&(f+=2*Math.PI);let p=d*f*this.dCellY[s];this.areaE[s]=p,this.areaT[l]=p}console.info(`[CylindricalMesh] injectFullMirrorBL Pass4: 径方向境界を i=${e} から MirrorMesh(s=${i-1}) へ相互接続`)}for(let e=0;e<t;e++){let r=d[e],a=r.length;if(a!==0)for(let o=0;o<a;o++){let s=r[o];for(let r=0;r<n;r++){let c=e+t*(r+n*s),l=this.neighbors[c*6+0],u=this.neighbors[c*6+1];for(let t=0;t<i;t++){let i=_+m[e]+a*n*t+o*n+r;l>=0&&f.has(l+`_`+t)?this.neighbors[i*6+0]=f.get(l+`_`+t):this.neighbors[i*6+0]=-1,u>=0&&f.has(u+`_`+t)?this.neighbors[i*6+1]=f.get(u+`_`+t):this.neighbors[i*6+1]=-1}}}}this.numCells=g,this.fmbBase=_,this.fmbNs=i,this.fmbBlockOff=m,this.fmbIRings=d,this.fmbSNodePerRing=s,this.fmbParentToFmb=f,console.info(`[CylindricalMesh] injectFullMirrorBL complete: ns=${i}, cells=${p}, total=${g}`)}injectOGridShaftBL(t){if(!this.ogridLayerBase){console.warn(`[CylindricalMesh] injectOGridShaftBL: O-Grid not injected. Skipping.`);return}let n=this.ogridM,r=this.ogridKLayers,i=this.ogridLayerBase,a=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;if(a<1e-6){console.info(`[CylindricalMesh] injectOGridShaftBL: shaft radius ≈ 0. Skipping.`);return}let o=Math.max(2,Math.min(8,t.sblLayers||this.blLayers||3)),s=t.sblThickness||this.blThickness||.02,c=t.sblExpansionRatio||t.blExpansionRatio||1.3,l=new Float32Array(o+1);l[0]=0;let u;u=Math.abs(c-1)<1e-6?s/o:s*(c-1)/(c**+o-1);for(let e=0;e<o;e++)l[e+1]=l[e]+u*c**+e;l[o]=s;let d=this.getBottomY(0,t),f=t.liquidHeight,p=[],m=-1;for(let n=0;n<r;n++){let r=d+(this.etaNode[n]+this.etaNode[n+1])*.5*f,i=e.getImpellerCenterY(t)-t.bladeWidth/2;if((t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(i=t.tankHeight*.1),r>=i){m=n;break}}if(m<0){console.info(`[CylindricalMesh] injectOGridShaftBL: shaft height band not found in O-Grid. Skipping.`);return}let h=this.ogridNodes;for(let e=0;e<n;e++)for(let t=0;t<n;t++){let r=i[m]+e*n+t;if(this.flag[r]===0)for(let{dir:a,du:o,dv:s}of[{dir:0,du:1,dv:0},{dir:1,du:-1,dv:0},{dir:2,du:0,dv:1},{dir:3,du:0,dv:-1}]){let c=t+o,l=e+s;if(c<0||c>=n||l<0||l>=n)continue;let u=i[m]+l*n+c;if(this.flag[u]!==5)continue;let d=this.cx[r],f=this.cz[r],h=Math.hypot(d,f),g=d/Math.max(h,1e-12),_=f/Math.max(h,1e-12);p.push({u:t,v:e,dir:a,nx:g,nz:_});break}}if(p.length===0){console.info(`[CylindricalMesh] injectOGridShaftBL: no shaft-adjacent O-Grid cells found. Skipping.`);return}p.sort((e,t)=>{let r=i[m]+e.v*n+e.u,a=i[m]+t.v*n+t.u,o=Math.atan2(this.cz[r],this.cx[r]),s=Math.atan2(this.cz[a],this.cx[a]);return o<0&&(o+=2*Math.PI),s<0&&(s+=2*Math.PI),o-s});let g=p.length*r*o;this.numShaftBL=g;let _=this.numCells,v=_+g,y=_,b=e=>{let t=new Float32Array(v);return t.set(e),t},x=e=>{let t=new Int32Array(v*6);return t.fill(-1),t.set(e),t},S=e=>{let t=new Int8Array(v);return t.set(e),t};this.vol=b(this.vol),this.areaE=b(this.areaE),this.areaW=b(this.areaW),this.areaN=b(this.areaN),this.areaS=b(this.areaS),this.areaT=b(this.areaT),this.areaB=b(this.areaB),this.distE=b(this.distE),this.distW=b(this.distW),this.distN=b(this.distN),this.distS=b(this.distS),this.distT=b(this.distT),this.distB=b(this.distB),this.dCellR=b(this.dCellR),this.dCellTheta=b(this.dCellTheta),this.dCellY=b(this.dCellY),this.cx=b(this.cx),this.cy=b(this.cy),this.cz=b(this.cz),this.flag=S(this.flag),this.mrf=S(this.mrf),this.neighbors=x(this.neighbors);for(let e=0;e<p.length;e++){let{u:t,v:s,dir:c,nx:u,nz:m}=p[e];for(let g=0;g<r;g++){let _=i[g]+s*n+t,v=d+this.etaNode[g]*f,b=d+this.etaNode[g+1]*f,x=b-v,S=(v+b)*.5,C=g<r-1?(this.etaNode[g+2]-this.etaNode[g+1])*f:0,w=g>0?(this.etaNode[g]-this.etaNode[g-1])*f:0,T=this.cx[_],E=this.cz[_],D=Math.max(Math.hypot(T,E)-a,1e-6),O=h[(s*(n+1)+t)*2],k=h[(s*(n+1)+t)*2+1],A=h[(s*(n+1)+t+1)*2],j=h[(s*(n+1)+t+1)*2+1],M=h[((s+1)*(n+1)+t+1)*2],N=h[((s+1)*(n+1)+t+1)*2+1],P=h[((s+1)*(n+1)+t)*2],F=h[((s+1)*(n+1)+t)*2+1],I;I=c===0?Math.hypot(A-M,j-N):c===1?Math.hypot(O-P,k-F):c===2?Math.hypot(P-M,F-N):Math.hypot(O-A,k-j),I=Math.max(I,1e-6);for(let t=0;t<o;t++){let n=y+r*o*e+g*o+t,i=(l[t]+l[t+1])*.5,s=l[t+1]-l[t];T-u*(D-i-s*.5),E-m*(D-i-s*.5);let c=u*a,d=m*a,f=c+u*i,h=d+m*i;this.cx[n]=f,this.cy[n]=S,this.cz[n]=h,this.flag[n]=0,this.mrf[n]=0,this.vol[n]=I*s*x,this.areaT[n]=I*x,this.areaB[n]=I*x,this.areaN[n]=s*x,this.areaS[n]=s*x,this.areaE[n]=I*s,this.areaW[n]=I*s,this.dCellR[n]=s,this.dCellTheta[n]=Math.max(I,1e-9),this.dCellY[n]=Math.max(x,1e-9);let _=t<o-1?(l[t+2]-l[t+1])*.5+s*.5:s*.5,v=t>0?(l[t]-l[t-1])*.5+s*.5:s*.5;this.distT[n]=_,this.distB[n]=v,this.distN[n]=I*.5,this.distS[n]=I*.5,this.distE[n]=g<r-1?x*.5+C*.5:x*.5,this.distW[n]=g>0?x*.5+w*.5:x*.5,this.neighbors[n*6+4]=t<o-1?y+r*o*e+g*o+(t+1):-1,this.neighbors[n*6+5]=t>0?y+r*o*e+g*o+(t-1):-1,this.neighbors[n*6+0]=g<r-1?y+r*o*e+(g+1)*o+t:-1,this.neighbors[n*6+1]=g>0?y+r*o*e+(g-1)*o+t:-1;let b=(e+1)%p.length,O=(e-1+p.length)%p.length;this.neighbors[n*6+2]=y+r*o*b+g*o+t,this.neighbors[n*6+3]=y+r*o*O+g*o+t}}}for(let e=0;e<p.length;e++){let{u:t,v:s,dir:c}=p[e];for(let u=0;u<r;u++){let p=i[u]+s*n+t,m=this.neighbors[p*6+c];if(m>=0&&this.flag[m]!==5)continue;let h=y+r*o*e+u*o+(o-1);this.neighbors[p*6+c]=h,this.neighbors[h*6+4]=p;let g=Math.max(Math.hypot(this.cx[p],this.cz[p])-a,1e-6),_=l[o]-l[o-1],v=g*.5+_*.5;c===0?this.distE[p]=v:c===1?this.distW[p]=v:c===2?this.distN[p]=v:this.distS[p]=v,this.distT[h]=v;let b=d+this.etaNode[u]*f;d+this.etaNode[u+1]*f-b;let x=this.areaT[h];c===0?this.areaE[p]=x:c===1?this.areaW[p]=x:c===2?this.areaN[p]=x:this.areaS[p]=x,this.areaT[h]=x}}this.numCells=v,this.sblBase=y,this.sblNs=o,this.sblEntries=p,this.sblSNode=l,console.info(`[CylindricalMesh] injectOGridShaftBL complete: entries=${p.length}, ns=${o}, k_ogrid=${r}, cells=${g}, total=${v}`)}injectCylindricalWallBL(e){let t=this.nr,n=this.ntheta,r=this.ny,i=this.radius,a=Math.max(2,Math.min(8,e.wblLayers||this.blLayers||3)),o=e.wblThickness||this.blThickness||.02,s=e.wblExpansionRatio||e.blExpansionRatio||1.3,c=this.mirrorMeshKMirror===void 0?0:this.mirrorMeshKMirror,l=r-c;if(l<=0){console.warn(`[CylindricalWallBL] No k-layers available for wall BL. Skipping.`);return}let u=new Float32Array(a+1);u[0]=0;let d;d=Math.abs(s-1)<1e-6?o/a:o*(s-1)/(s**+a-1);for(let e=0;e<a;e++)u[e+1]=u[e]+d*s**+e;u[a]=o;let f=a*l*n,p=this.numCells,m=p+f,h=p,g=e=>{let t=new Float32Array(m);return t.set(e),t},_=e=>{let t=new Int32Array(m*6);return t.fill(-1),t.set(e),t},v=e=>{let t=new Int8Array(m);return t.set(e),t};this.vol=g(this.vol),this.areaE=g(this.areaE),this.areaW=g(this.areaW),this.areaN=g(this.areaN),this.areaS=g(this.areaS),this.areaT=g(this.areaT),this.areaB=g(this.areaB),this.distE=g(this.distE),this.distW=g(this.distW),this.distN=g(this.distN),this.distS=g(this.distS),this.distT=g(this.distT),this.distB=g(this.distB),this.dCellR=g(this.dCellR),this.dCellTheta=g(this.dCellTheta),this.dCellY=g(this.dCellY),this.cx=g(this.cx),this.cy=g(this.cy),this.cz=g(this.cz),this.flag=v(this.flag),this.mrf=v(this.mrf),this.neighbors=_(this.neighbors);let y=this.getBottomY(0,e),b=e.liquidHeight,x=t-1;for(let o=0;o<l;o++){let s=c+o,d=0;for(let e=0;e<n;e++){let r=x+t*(e+n*s);if(this.flag[r]===0){d=e;break}}let f=x+t*(d+n*s),p=this.flag[f]===0?this.dCellY[f]||0:(this.etaNode[s+1]-this.etaNode[s])*b,m=this.flag[f]===0?this.cy[f]||0:y+(this.etaNode[s]+this.etaNode[s+1])*.5*b,g=s<r-1?x+t*(d+n*(s+1)):-1,_=s>0?x+t*(d+n*(s-1)):-1,v=g>=0&&this.flag[g]===0?this.dCellY[g]:s<r-1?(this.etaNode[s+2]-this.etaNode[s+1])*b:0,S=_>=0&&this.flag[_]===0?this.dCellY[_]:s>0?(this.etaNode[s]-this.etaNode[s-1])*b:0;for(let t=0;t<n;t++){let c=this.thetaNode[t+1]-this.thetaNode[t];c<0&&(c+=2*Math.PI);let d=(this.thetaNode[t]+this.thetaNode[(t+1)%n])*.5;for(let f=0;f<a;f++){let g=h+l*n*f+o*n+t,_=(u[f]+u[f+1])*.5,y=u[f+1]-u[f],b=i-_;this.cx[g]=b*Math.cos(d),this.cy[g]=o===0&&e.mirrorPlateType&&e.mirrorPlateType!==`None`?this.getBottomY(b,e)+p/2:m,this.cz[g]=b*Math.sin(d),this.flag[g]=0,this.mrf[g]=0;let x=b*c;this.vol[g]=x*y*p,this.areaT[g]=x*p,this.areaB[g]=x*p,this.areaN[g]=y*p,this.areaS[g]=y*p,this.areaE[g]=x*y,this.areaW[g]=x*y,this.dCellR[g]=y,this.dCellTheta[g]=Math.max(x,1e-9),this.dCellY[g]=Math.max(p,1e-9);let C=f<a-1?(u[f+2]-u[f+1])*.5+y*.5:y*.5,w=f>0?(u[f]-u[f-1])*.5+y*.5:y*.5;this.distT[g]=C,this.distB[g]=w;let T=this.thetaNode[(t+1)%n];T<this.thetaNode[t]&&(T+=2*Math.PI);let E=this.thetaNode[(t+2)%n];E<T&&(E+=2*Math.PI);let D=(T+E)*.5,O=this.thetaNode[(t-1+n)%n];O>this.thetaNode[t]&&(O-=2*Math.PI);let k=(O+this.thetaNode[t])*.5,A=D-d;A<0&&(A+=2*Math.PI);let j=d-k;j<0&&(j+=2*Math.PI),this.distN[g]=b*A,this.distS[g]=b*j,this.distE[g]=s<r-1?p*.5+v*.5:p*.5,this.distW[g]=s>0?p*.5+S*.5:p*.5,this.neighbors[g*6+4]=f<a-1?h+(f+1)*(l*n)+o*n+t:-1,this.neighbors[g*6+5]=f>0?h+(f-1)*(l*n)+o*n+t:-1;let M=(t+1)%n;this.neighbors[g*6+2]=h+l*n*f+o*n+M;let N=(t-1+n)%n;this.neighbors[g*6+3]=h+l*n*f+o*n+N,this.neighbors[g*6+0]=o<l-1?h+l*n*f+(o+1)*n+t:-1,this.neighbors[g*6+1]=o>0?h+l*n*f+(o-1)*n+t:-1}}}for(let e=0;e<l;e++){let r=c+e;for(let o=0;o<n;o++){let s=x+t*(o+n*r),c=h+(a-1)*(l*n)+e*n+o;if(this.flag[s]===7||this.flag[s]===8)continue;this.neighbors[s*6+0]=c;let d=this.thetaNode[o+1]-this.thetaNode[o];d<0&&(d+=2*Math.PI);let f=this.dCellY[s];this.areaE[s]=i*d*f;let p=this.rNode[x+1]-this.rNode[x],m=(u[a-1]+u[a])*.5,g=p*.5+m;this.distE[s]=g,this.neighbors[c*6+4]=s,this.distT[c]=g;let _=i-m;this.areaT[c]=_*d*f}}if(this.mirrorMeshBase!==void 0&&c>0){let e=this.mirrorMeshNs,t=this.mirrorMeshKMirror,r=this.mirrorMeshBase;for(let i=0;i<n;i++)for(let o=0;o<a;o++){let s=h+l*n*o+0*n+i,u=o;a!==e&&(u=Math.round(o/(a-1)*(e-1)));let d=r+t*n*u+(t-1)*n+i;this.neighbors[s*6+1]=d;let f=y+this.etaNode[c]*b,p=(y+this.etaNode[c+1]*b-f)*.5,m=this.mirrorMeshSNode,g=p+(m?m[u+1]-m[u]:0)*.5;this.distW[s]=Math.max(g,1e-12),this.neighbors[d*6+0]=s,this.distE[d]=Math.max(g,1e-12)}}this.numCells=m,this.wblBase=h,this.wblNs=a,this.wblNkWbl=l,this.wblKStart=c,this.wblSNode=u,console.info(`[CylindricalMesh] injectCylindricalWallBL complete: ns=${a}, nk=${l}, ntheta=${n}, cells=${f}, total=${m}`)}getMrfThetaCorrection(e,t,n){let r=this.mrf[e],i=this.mrf[t];if(r===i)return 0;let a;if(t<this.nr*this.ntheta*this.ny){let e=t%this.nr;a=(this.rNode[e]+this.rNode[e+1])*.5}else a=Math.hypot(this.cx[t],this.cz[t]);let o=n*a;return r===0&&i===1?o:-o}isMrfInterface(e,t){return this.mrf[e]!==this.mrf[t]}_injectInternalSolidBL(e,t,n,r,i,a){this.nr,this.ntheta,this.ny;let o=new Float32Array(t+1);o[0]=0;let s;s=Math.abs(r-1)<1e-6?n/t:n*(r-1)/(r**+t-1);for(let e=0;e<t;e++)o[e+1]=o[e]+s*r**+e;o[t]=n,this.getBottomY(0,a),a.liquidHeight;let c=new Set,l=[],u=this.ogridM?this.ogridM*this.ogridM*this.ny:0,d=(this.numCyl||0)+u;for(let t=0;t<d;t++)if(this.flag[t]===0)for(let n=0;n<6;n++){let r=this.neighbors[t*6+n];if(r<0||this.flag[r]!==e)continue;let i=t*6+n;if(c.has(i))continue;c.add(i);let a,o,s,u,d=[this.areaE[t],this.areaW[t],this.areaN[t],this.areaS[t],this.areaT[t],this.areaB[t]],f=[this.distE[t],this.distW[t],this.distN[t],this.distS[t],this.distT[t],this.distB[t]];a=d[n],o=f[n];let p=this.dCellY[t];n===4||n===5?(s=Math.sqrt(Math.max(a,1e-12)),u=s):(s=p,u=Math.max(a/Math.max(p,1e-9),1e-9)),a=Math.max(a,1e-12),o=Math.max(o,1e-12),s=Math.max(s,1e-9),u=Math.max(u,1e-9),l.push({fIdx:t,dir:n,A_face:a,edgeLen1:s,edgeLen2:u,wallDist:o,solidIdx:r})}if(l.length===0){let t=0;for(let n=0;n<this.numCells;n++)this.flag[n]===e&&t++;t===0?console.info(`[CylindricalMesh] _injectInternalSolidBL(flag=${e}): no solid cells with this flag found. Structure absent or mesh too coarse to voxelize.`):console.warn(`[CylindricalMesh] _injectInternalSolidBL(flag=${e}): ${t} solid cells exist but no fluid-adjacent cells were detected. Fluid→solid pointers may have been severed by O-Grid post-processing. BL skipped.`);return}let f=l.length*t,p=this.numCells,m=p+f,h=p,g=e=>{let t=new Float32Array(m);return t.set(e),t},_=e=>{let t=new Int32Array(m*6);return t.fill(-1),t.set(e),t},v=e=>{let t=new Int8Array(m);return t.set(e),t};this.vol=g(this.vol),this.areaE=g(this.areaE),this.areaW=g(this.areaW),this.areaN=g(this.areaN),this.areaS=g(this.areaS),this.areaT=g(this.areaT),this.areaB=g(this.areaB),this.distE=g(this.distE),this.distW=g(this.distW),this.distN=g(this.distN),this.distS=g(this.distS),this.distT=g(this.distT),this.distB=g(this.distB),this.dCellR=g(this.dCellR),this.dCellTheta=g(this.dCellTheta),this.dCellY=g(this.dCellY),this.cx=g(this.cx),this.cy=g(this.cy),this.cz=g(this.cz),this.flag=v(this.flag),this.mrf=v(this.mrf),this.neighbors=_(this.neighbors);for(let e=0;e<l.length;e++){let{fIdx:n,dir:r,A_face:i,edgeLen1:a,edgeLen2:s,wallDist:c,solidIdx:u}=l[e],d=this.cy[n],f=Math.atan2(this.cz[n],this.cx[n]),p=r%2==0?r+1:r-1;for(let l=0;l<t;l++){let m=h+e*t+l,g=(o[l]+o[l+1])*.5,_=o[l+1]-o[l],v=c-g;r===0?(this.cx[m]=this.cx[n]+v*Math.cos(f),this.cz[m]=this.cz[n]+v*Math.sin(f),this.cy[m]=d):r===1?(this.cx[m]=this.cx[n]-v*Math.cos(f),this.cz[m]=this.cz[n]-v*Math.sin(f),this.cy[m]=d):r===2?(this.cx[m]=this.cx[n]-v*Math.sin(f),this.cz[m]=this.cz[n]+v*Math.cos(f),this.cy[m]=d):r===3?(this.cx[m]=this.cx[n]+v*Math.sin(f),this.cz[m]=this.cz[n]-v*Math.cos(f),this.cy[m]=d):r===4?(this.cx[m]=this.cx[n],this.cz[m]=this.cz[n],this.cy[m]=d+v):r===5&&(this.cx[m]=this.cx[n],this.cz[m]=this.cz[n],this.cy[m]=d-v),this.flag[m]=0,this.mrf[m]=0;let y=s*_,b=a*_;r===0||r===1?(this.areaE[m]=i,this.areaW[m]=i,this.areaN[m]=b,this.areaS[m]=b,this.areaT[m]=y,this.areaB[m]=y):r===2||r===3?(this.areaN[m]=i,this.areaS[m]=i,this.areaE[m]=b,this.areaW[m]=b,this.areaT[m]=y,this.areaB[m]=y):(this.areaT[m]=i,this.areaB[m]=i,this.areaE[m]=y,this.areaW[m]=y,this.areaN[m]=b,this.areaS[m]=b),this.vol[m]=i*_,r===0||r===1?(this.dCellR[m]=_,this.dCellTheta[m]=Math.max(s,1e-9),this.dCellY[m]=Math.max(a,1e-9)):r===2||r===3?(this.dCellTheta[m]=_,this.dCellR[m]=Math.max(s,1e-9),this.dCellY[m]=Math.max(a,1e-9)):(this.dCellY[m]=_,this.dCellR[m]=Math.max(a,1e-9),this.dCellTheta[m]=Math.max(s,1e-9));let x=l<t-1?(o[l+2]-o[l+1])*.5+_*.5:_*.5,S=l>0?(o[l]-o[l-1])*.5+_*.5:_*.5,C=[`distE`,`distW`,`distN`,`distS`,`distT`,`distB`];this[C[r]][m]=S,this[C[p]][m]=x,r===0||r===1?(this.distN[m]=Math.max(s*.5,1e-9),this.distS[m]=Math.max(s*.5,1e-9),this.distT[m]=Math.max(a*.5,1e-9),this.distB[m]=Math.max(a*.5,1e-9)):r===2||r===3?(this.distE[m]=Math.max(s*.5,1e-9),this.distW[m]=Math.max(s*.5,1e-9),this.distT[m]=Math.max(a*.5,1e-9),this.distB[m]=Math.max(a*.5,1e-9)):(this.distE[m]=Math.max(a*.5,1e-9),this.distW[m]=Math.max(a*.5,1e-9),this.distN[m]=Math.max(s*.5,1e-9),this.distS[m]=Math.max(s*.5,1e-9)),this.neighbors[m*6+0]=-1,this.neighbors[m*6+1]=-1,this.neighbors[m*6+2]=-1,this.neighbors[m*6+3]=-1,this.neighbors[m*6+4]=-1,this.neighbors[m*6+5]=-1,this.neighbors[m*6+p]=l<t-1?h+e*t+(l+1):-1,this.neighbors[m*6+r]=l>0?h+e*t+(l-1):u}}for(let e=0;e<l.length;e++){let{fIdx:n,dir:r,A_face:i,wallDist:a}=l[e],s=h+e*t+(t-1),c=r%2==0?r+1:r-1;this.neighbors[n*6+r]=s,this.neighbors[s*6+c]=n;let u=(o[t-1]+o[t])*.5,d=Math.max(a+u,1e-12),f=[`distE`,`distW`,`distN`,`distS`,`distT`,`distB`];this[f[r]][n]=d,this[f[c]][s]=d;let p=[`areaE`,`areaW`,`areaN`,`areaS`,`areaT`,`areaB`];this[p[r]][n]=i,this[p[c]][s]=i}let y=new Map;for(let e=0;e<l.length;e++)y.set(l[e].fIdx+`_`+l[e].dir,e);for(let e=0;e<l.length;e++){let{fIdx:n,dir:r}=l[e],i=r%2==0?r+1:r-1;for(let a=0;a<6;a++){if(a===r||a===i)continue;let o=this.neighbors[n*6+a];if(o>=0){let n=o+`_`+r;if(y.has(n)){let r=y.get(n);for(let n=0;n<t;n++){let i=h+e*t+n,o=h+r*t+n;this.neighbors[i*6+a]=o}}}}}this.numCells=m,this[i+`Base`]=h,this[i+`Ns`]=t,this[i+`SNode`]=o,this[i+`Entries`]=l,console.info(`[CylindricalMesh] _injectInternalSolidBL(${i}, flag=${e}) complete: ns=${t}, entries=${l.length}, cells=${f}, total=${m}`)}injectImpellerBL(e){let t=Math.max(2,Math.min(8,e.iblLayers||this.blLayers||3)),n=e.iblThickness||this.blThickness||.02,r=e.iblExpansionRatio||e.blExpansionRatio||1.3,i=e.bladeWidth||.1;if(n>i*.1&&console.warn(`[CylindricalMesh] injectImpellerBL: iblThickness=${n.toExponential(2)} > bladeWidth*0.1=${(i*.1).toExponential(2)}. Consider reducing iblThickness to avoid overlapping BL cells.`),e.impellerType&&e.impellerType!==`None`){let t=0;for(let e=0;e<this.numCells;e++)this.flag[e]===4&&t++;t===0&&console.warn(`[CylindricalMesh] injectImpellerBL: impellerType="${e.impellerType}" but no flag=4 (impeller) cells found. Increase meshNr/meshNtheta/meshNy for blade voxelization.`)}this._injectInternalSolidBL(4,t,n,r,`ibl`,e)}injectBaffleBL(e){if(!e.showBaffle||e.baffleCount===0){console.info(`[CylindricalMesh] injectBaffleBL: no baffles in this configuration. Skipping.`);return}let t=Math.max(2,Math.min(8,e.bblLayers||this.blLayers||3)),n=e.bblThickness||this.blThickness||.02,r=e.bblExpansionRatio||e.blExpansionRatio||1.3,i=e.baffleThickness||.02;n>i*.5&&console.warn(`[CylindricalMesh] injectBaffleBL: bblThickness=${n.toExponential(2)} > baffleThickness*0.5=${(i*.5).toExponential(2)}. Consider reducing bblThickness.`);{let e=0;for(let t=0;t<this.numCells;t++)this.flag[t]===6&&e++;e===0&&console.warn(`[CylindricalMesh] injectBaffleBL: showBaffle=true but no flag=6 (baffle) cells found. baffleThickness=${i.toExponential(2)} may be smaller than mesh cell size. Increase meshNtheta or baffleThickness to resolve baffles in the mesh.`)}this._injectInternalSolidBL(6,t,n,r,`bbl`,e)}injectCoilBL(e){if(!e.coilEnabled){console.info(`[CylindricalMesh] injectCoilBL: coil not enabled. Skipping.`);return}let t=Math.max(2,Math.min(8,e.cblLayers||this.blLayers||3)),n=e.cblThickness||this.blThickness||.02,r=e.cblExpansionRatio||e.blExpansionRatio||1.3,i=(e.coilRadius||.3)*.05;n>i*.25&&console.warn(`[CylindricalMesh] injectCoilBL: cblThickness=${n.toExponential(2)} > tubeRadius*0.25=${(i*.25).toExponential(2)}. Consider reducing cblThickness.`),this._injectInternalSolidBL(3,t,n,r,`cbl`,e)}snap(e){if(!e.mirrorPlateType||e.mirrorPlateType===`None`)return;let t=this.numCells+(this.numCellsOgrid||0);this.meshHeight,this.getBottomY(0,e);for(let n=0;n<t;n++){if(this.flag[n]===7||this.flag[n]===8)continue;let t=this.neighbors[n*6+5];if(t<0||this.flag[t]===7){let t=this.getCellCenterByIdx(n,e).r,r=this.getBottomY(t,e),i=this.cy[n]+this.dCellY[n]/2;if(r<i){let a=i-r,o=r+a/2;this.cy[n]=o,this.dCellY[n]=a,this.distB[n]=a/2;let s=this.areaB[n];this.vol[n]=s*a;let c=this.getMirrorNormal(t,e);c&&c.ny>0&&(this.areaB[n]=s/c.ny)}}}}qualityCheck(e){let t=this.numCells+(this.numCellsOgrid||0),n=0,r=1/0,i=0,a=0,o=0;for(let e=0;e<t;e++){if(this.flag[e]!==0){o++;continue}a++;let t=this.dCellR[e],s=this.dCellTheta[e],c=this.dCellY[e],l=Math.min(t,s,c),u=Math.max(t,s,c);if(l>1e-12){let e=u/l;e>n&&(n=e)}let d=this.vol[e];d<r&&(r=d),d>i&&(i=d)}if(typeof document<`u`){let e=document.getElementById(`mesh-info-cells`);e&&(e.innerHTML=`
          総セル数: ${t}<br>
          流体セル: ${a}<br>
          固体セル: ${o}
        `);let i=document.getElementById(`mesh-info-quality`);if(i){let e=n>10?`#ff4444`:n>5?`#ffaa00`:`#44ff44`,t=r<=0?`#ff4444`:`#44ff44`;i.innerHTML=`
          最大アスペクト比: <span style="color:${e}">${n.toFixed(2)}</span> (目標<5, 許容<10)<br>
          最小体積: <span style="color:${t}">${r.toExponential(2)}</span> m³
        `}}console.log(`[Mesh Quality] Max Aspect Ratio = ${n.toFixed(2)}, Min Vol = ${r.toExponential(2)}`)}buildFaces(e){let t=this.numCells+(this.numCellsOgrid||0);this.faceOwner=[],this.faceNeighbour=[],this.faceArea=[],this.faceDist=[],this.faceNx=[],this.faceNy=[],this.faceNz=[],this.faceBcType=[];let n=(e,t,n,r,i,a,o,s)=>{this.faceOwner.push(e),this.faceNeighbour.push(t),this.faceArea.push(n),this.faceDist.push(r),this.faceNx.push(i),this.faceNy.push(a),this.faceNz.push(o),this.faceBcType.push(s)},r=(t,n)=>{let r=0,i=0,a=0,o=0,s=0,c=this.getCellCenterByIdx(t,e);return n===0?(r=this.areaE[t],i=this.distE[t],a=Math.cos(c.theta),s=Math.sin(c.theta)):n===1?(r=this.areaW[t],i=this.distW[t],a=-Math.cos(c.theta),s=-Math.sin(c.theta)):n===2?(r=this.areaN[t],i=this.distN[t],a=-Math.sin(c.theta),s=Math.cos(c.theta)):n===3?(r=this.areaS[t],i=this.distS[t],a=Math.sin(c.theta),s=-Math.cos(c.theta)):n===4?(r=this.areaT[t],i=this.distT[t],o=1):n===5&&(r=this.areaB[t],i=this.distB[t],o=-1),{area:r,dist:i,nx:a,ny:o,nz:s}};for(let e=0;e<t;e++)if(!(this.flag[e]>0))for(let t=0;t<6;t++){let i=this.neighbors[e*6+t];if(i<0||this.flag[i]>0){let a=r(e,t),o=1;i>=0&&this.flag[i]>0?o=this.flag[i]:i<0&&(t===4?o=2:t===5&&(o=7)),n(e,-1,a.area,a.dist,a.nx,a.ny,a.nz,o)}else if(e<i){let a=r(e,t);n(e,i,a.area,a.dist,a.nx,a.ny,a.nz,0)}}}},qd,Jd,X,Yd,Z,Xd,Zd,Qd,$d,ef=[],tf=null,nf=null,rf=[],af=null,of=null,sf=null,cf=null,lf=null,uf=null,df=null,ff=[],Q=null,pf=null;function mf(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2,r=0;return t===`FullHemisphere`?r=n:t===`Dish`?r=n*.25:t===`HalfEllipse`?r=n*.5:t===`Cone`&&(r=e.tankHeight*.2),(e.tankHeight-r)/2}function hf(e){let t=e.mirrorPlateType||`None`,n=e.tankDiameter/2,r=0;return t===`FullHemisphere`?r=n:t===`Dish`?r=n*.25:t===`HalfEllipse`?r=n*.5:t===`Cone`&&(r=e.tankHeight*.2),-r}function gf(e,t){let n=e.ntheta,r=2*Math.PI/n,i=t.crossSectionAngle===void 0?.125:t.crossSectionAngle,a=Math.round(i*2*Math.PI/r)%n;a<0&&(a+=n);let o=e.thetaNode[a]+(e.thetaNode[a+1]-e.thetaNode[a])/2;return{sliceTh1:a,baseTh:o,ntheta:n,dTheta:r}}function _f(e,t){let n=e.rNode[e.nr];return(t.crossSectionOffset||0)*n}function vf(e,t,n,r){let i=n;if(e<Math.abs(i))return null;let a=r*Math.sqrt(Math.max(e*e-i*i,0)),o=a*Math.cos(t)+i*Math.sin(t),s=-a*Math.sin(t)+i*Math.cos(t),c=Math.atan2(-s,o);return c<0&&(c+=2*Math.PI),{x:o,z:s,th:c}}function yf(e,t,n,r,i,a){let o=vf(e,t,n,r);if(!o)return-1;let s=Math.floor(o.th/a)%i;return s<0&&(s+=i),s}function bf(e,t){Q=t,Jd=new Fn,Jd.background=new Nn(1710618);let n=window.innerWidth/window.innerHeight,r=mf(t);if(t.usePerspective!==!1)X=new Jo(45,n,.01,100),X.position.set(2,r+2,2);else{let e=t.tankDiameter*2.5;X=new Yo(e*n/-2,e*n/2,e/2,e/-2,.01,100),X.position.set(2,r+2,2)}qd=new Bu({antialias:!0}),qd.setSize(window.innerWidth,window.innerHeight),qd.setPixelRatio(window.devicePixelRatio),e.appendChild(qd.domElement),Yd=new Zu(X,qd.domElement),Yd.enableDamping=!0,Yd.target.set(0,r,0),Yd.update(),Z=new En,Jd.add(Z),Xd=new yd(X,qd.domElement),Xd.setSize(.8),Jd.add(Xd.getHelper()),Xd.addEventListener(`dragging-changed`,function(e){Yd.enabled=!e.value});let i=new K(1,1,1);Xd.addEventListener(`change`,function(){if(Q&&Q.gizmoMode===`Scale`){let e=Math.abs(Z.scale.x-i.x),t=Math.abs(Z.scale.y-i.y),n=Math.abs(Z.scale.z-i.z),r=Math.max(e,t,n),a=Z.scale.x;r===t&&(a=Z.scale.y),r===n&&(a=Z.scale.z),Z.scale.set(a,a,a),i.copy(Z.scale)}qd.render(Jd,X)}),qd.domElement.addEventListener(`pointerdown`,e=>{Q&&Q.gizmoMode!==`None`&&Xd.axis===null&&(Q.gizmoMode=`None`,Ef(`None`),window.dispatchEvent(new Event(`gizmo-deselected`)))});let a=new Qo(16777215,.6);Jd.add(a);let o=new Zo(16777215,.8);o.position.set(5,10,7),Jd.add(o);let s=new bs(1);return Z.add(s),xf(e,t),Of(t),window.addEventListener(`resize`,Nf),{scene:Jd,camera:X,renderer:qd,controls:Yd}}function xf(e,t){let n=document.getElementById(`gizmo-overlay`);n&&n.remove();let r=document.createElement(`div`);r.id=`gizmo-overlay`,r.style.cssText=[`position:absolute`,`bottom:24px`,`left:50%`,`transform:translateX(-50%)`,`display:flex`,`gap:8px`,`z-index:200`,`pointer-events:auto`,`user-select:none`].join(`;`)+`;`;let i=[{mode:`None`,label:`✕`,title:`操作なし`,color:`#888`},{mode:`Translate`,label:`✥`,title:`移動 (オブジェクト)`,color:`#4a9eff`},{mode:`Rotate`,label:`↻`,title:`回転`,color:`#4ecb71`},{mode:`Scale`,label:`⊞`,title:`等方拡大縮小`,color:`#f5a623`}],a={};i.forEach(function({mode:e,label:n,title:i,color:o}){let s=document.createElement(`button`);s.title=i,s.dataset.mode=e,s.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid `+o,`background:rgba(20,20,20,0.75)`,`color:`+o,`font-size:20px`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`].join(`;`)+`;`,s.textContent=n,s.addEventListener(`mouseenter`,function(){t.gizmoMode!==e&&(s.style.background=`rgba(`+Cf(o)+`,0.25)`)}),s.addEventListener(`mouseleave`,function(){t.gizmoMode!==e&&(s.style.background=`rgba(20,20,20,0.75)`)}),s.addEventListener(`click`,function(){t.gizmoMode=e,Ef(e),Sf(e),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}),a[e]=s,r.appendChild(s)});let o=document.createElement(`button`);o.title=`インペラ中心を基準に画面を最大化`,o.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid #a855f7`,`background:rgba(20,20,20,0.75)`,`color:#a855f7`,`font-size:20px`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`].join(`;`)+`;`,o.textContent=`⛶`,o.addEventListener(`mouseenter`,function(){o.style.background=`rgba(168,85,247,0.25)`}),o.addEventListener(`mouseleave`,function(){o.style.background=`rgba(20,20,20,0.75)`}),o.addEventListener(`click`,function(){If()}),r.appendChild(o);let s=document.createElement(`button`);s.id=`view-mode-toggle-btn`,s.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid #06b6d4`,`background:rgba(20,20,20,0.75)`,`color:#06b6d4`,`font-size:16px`,`font-weight:bold`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`,`font-family:sans-serif`].join(`;`)+`;`,s.addEventListener(`mouseenter`,function(){s.style.background=`rgba(6,182,212,0.25)`}),s.addEventListener(`mouseleave`,function(){s.style.background=`rgba(20,20,20,0.75)`}),s.addEventListener(`click`,function(){typeof window.toggleCrossSectionView==`function`&&window.toggleCrossSectionView()}),r.appendChild(s);let c=document.createElement(`button`);c.title=`断面表示の切替（上面⇔下面 / 正面⇔裏面）`,c.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid #06b6d4`,`background:rgba(20,20,20,0.75)`,`color:#06b6d4`,`font-size:20px`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`].join(`;`)+`;`,c.textContent=`⇄`,c.addEventListener(`mouseenter`,function(){c.style.background=`rgba(6,182,212,0.25)`}),c.addEventListener(`mouseleave`,function(){c.style.background=`rgba(20,20,20,0.75)`}),c.addEventListener(`click`,function(){Lf()}),r.appendChild(c);let l=document.createElement(`button`);l.id=`persp-toggle-btn`,l.style.cssText=[`width:44px`,`height:44px`,`border-radius:50%`,`border:2px solid #06b6d4`,`background:rgba(20,20,20,0.75)`,`color:#06b6d4`,`font-size:12px`,`font-weight:bold`,`cursor:pointer`,`display:flex`,`align-items:center`,`justify-content:center`,`transition:background 0.15s,transform 0.1s`,`backdrop-filter:blur(4px)`,`font-family:sans-serif`].join(`;`)+`;`,l.addEventListener(`mouseenter`,function(){l.style.background=`rgba(6,182,212,0.25)`}),l.addEventListener(`mouseleave`,function(){l.style.background=`rgba(20,20,20,0.75)`}),l.addEventListener(`click`,function(){Q&&(Q.usePerspective=!Q.usePerspective,typeof jf==`function`&&jf(),window.updateAllGuiDisplays&&window.updateAllGuiDisplays())}),r.appendChild(l),window._updatePerspBtnText=function(){l.textContent=t.usePerspective?`Prsp`:`Orth`,l.title=t.usePerspective?`クリックして平行投影に切り替え`:`クリックしてバース表示に切り替え`},window._updatePerspBtnText(),window._updateViewModeBtnText=function(){s.textContent=t.crossSectionView?`2D`:`3D`,s.title=t.crossSectionView?`クリックして3D表示に切り替え`:`クリックして2D断面表示に切り替え`},window._updateViewModeBtnText();let u=document.createElement(`div`);u.id=`gizmo-overlay-label`,u.style.cssText=[`position:absolute`,`bottom:-20px`,`left:50%`,`transform:translateX(-50%)`,`color:rgba(255,255,255,0.5)`,`font-size:11px`,`white-space:nowrap`,`pointer-events:none`].join(`;`)+`;`,u.textContent=`ビュー操作`,r.appendChild(u),e.style.position=`relative`,e.appendChild(r),window._gizmoButtons=a,window._gizmoLabel=u,Sf(t.gizmoMode||`None`),window.addEventListener(`gizmo-deselected`,function(){Sf(`None`)})}function Sf(e){if(!window._gizmoButtons)return;let t={None:`ビュー操作`,Translate:`オブジェクト移動`,Rotate:`オブジェクト回転`,Scale:`等方拡大縮小`},n={None:`#888`,Translate:`#4a9eff`,Rotate:`#4ecb71`,Scale:`#f5a623`};Object.entries(window._gizmoButtons).forEach(function([t,r]){let i=n[t];t===e?(r.style.background=`rgba(`+Cf(i)+`,0.45)`,r.style.transform=`scale(1.15)`,r.style.boxShadow=`0 0 10px `+i+`88`):(r.style.background=`rgba(20,20,20,0.75)`,r.style.transform=`scale(1)`,r.style.boxShadow=`none`)}),window._gizmoLabel&&(window._gizmoLabel.textContent=t[e]||``)}function Cf(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);return t+`,`+n+`,`+r}var wf=null,Tf=null;new K;function Ef(n){!Xd||!Z||!Yd||(Yd.mouseButtons.LEFT=e.ROTATE,Yd.touches.ONE=t.ROTATE,Tf&&=(Xd.removeEventListener(`change`,Tf),null),wf&&=(Jd.remove(wf),null),n===`None`?Xd.detach():n===`Translate`?(Xd.setMode(`translate`),Xd.showX=!0,Xd.showY=!0,Xd.showZ=!0,Xd.attach(Z)):n===`Rotate`?Xd.detach():n===`Scale`&&(Xd.setMode(`scale`),Xd.showX=!0,Xd.showY=!0,Xd.showZ=!0,Xd.attach(Z)))}function Df(){if(Z&&(Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1)),X&&Yd&&Q){let e=mf(Q);X.position.set(2,e+2,2),Yd.target.set(0,e,0),Yd.update()}}function Of(e){if(Jd&&Jd.background.set(e.backgroundColor||`#1a1a1a`),X&&X.isOrthographicCamera){let t=window.innerWidth/window.innerHeight,n=e.tankDiameter*2.5;X.left=n*t/-2,X.right=n*t/2,X.top=n/2,X.bottom=n/-2,X.updateProjectionMatrix()}if(Qd&&Z.remove(Qd),$d&&Z.remove($d),ef.forEach(e=>Z.remove(e)),ef=[],Zd&&Z.remove(Zd),tf&&Z.remove(tf),nf&&Z.remove(nf),af&&=(Z.remove(af),null),sf&&=(Z.remove(sf),null),cf&&=(Z.remove(cf),null),e.showTank&&(Qd=Ud(e),Qd.material?(Qd.material.opacity=e.tankOpacity===void 0?.6:e.tankOpacity,Qd.material.transparent=!0,Qd.material.depthWrite=!1):Qd.children&&Qd.children.forEach(t=>{t.material&&(t.material.opacity=e.tankOpacity===void 0?.6:e.tankOpacity,t.material.transparent=!0,t.material.depthWrite=!1)}),Z.add(Qd)),e.showImpeller&&($d=Gd(e),Z.add($d)),e.showBaffle){let t=new Mi(e.baffleWidth,e.tankHeight,e.baffleThickness),n=new go({color:8947848,transparent:!0,opacity:.8,side:2});for(let r=0;r<e.baffleCount;r++){let i=new J(t,n),a=r/e.baffleCount*Math.PI*2,o=e.baffleGap===void 0?e.tankDiameter/75:e.baffleGap,s=e.tankDiameter/2-e.baffleWidth/2-o;i.position.x=Math.cos(a)*s,i.position.z=Math.sin(a)*s,i.position.y=e.tankHeight/2,i.rotation.y=-a,Z.add(i),ef.push(i)}}e.coilEnabled&&e.showCoil!==!1&&(Zd=Wd(e),Z.add(Zd)),rf=[];let t=pf&&pf.mesh?pf.mesh:new Kd(e),n=gf(t,e),r=_f(t,e);for(let i=0;i<t.numCells;i++){let a=t.getCellCenterByIdx(i,e);if(e.crossSectionView){let o=t.nr*t.ntheta*t.ny,s=t.ogridM&&t.ogridNodes?t.ogridM*t.ogridM*t.ny:0;t.numCylBL,(t.numCellsOgrid||0)-s,t.numShaftBL;let c=i>=o&&i<o+s||t.ogridMirrorBLBase!==void 0&&i>=t.ogridMirrorBLBase&&i<t.ogridMirrorBLBase+(t.ogridMirrorBLNum||0);if(e.crossSectionType===`Vertical`)if(c){let e=a.x*Math.sin(n.baseTh)-a.z*Math.cos(n.baseTh);if(Math.abs(e-r)>(t.dCellR[i]/2||t.ogridRc/(t.ogridM||24)*1.5||.02))continue}else{let e=a.r,s=yf(e,n.baseTh,r,-1,n.ntheta,n.dTheta),l=yf(e,n.baseTh,r,1,n.ntheta,n.dTheta);if(i<o){let e=Math.floor(i/t.nr)%t.ntheta;if(e!==s&&e!==l)continue}else if(c||t.ogridMirrorBLBase!==void 0&&i>=t.ogridMirrorBLBase&&i<t.ogridMirrorBLBase+t.ogridMirrorBLNum){let e=Math.sin(n.baseTh),i=Math.cos(n.baseTh),o=Math.abs(a.x*e+-a.z*i-r),s=t.ogridM||6;if(o>2*(t.ogridRc||.05)/s*.55)continue}else{let e=2*Math.PI/n.ntheta,t=a.theta;t<0&&(t+=2*Math.PI);let r=Math.floor(t/e)%n.ntheta;if(r!==s&&r!==l)continue}}else{let n=t.nr*t.ntheta,r=-1;if(c||i>=n+s){let n=t.getBottomY(0,e),i=n+e.liquidHeight,o=(a.y-n)/(i-n);for(let e=0;e<t.ny;e++)if(o>=t.etaNode[e]&&o<=t.etaNode[e+1]){r=e;break}}else r=Math.floor(i/(t.nr*t.ntheta));let o=Math.floor(e.crossSectionHeight*(t.ny-1));if(r!==o)continue}}t.flag[i]===0&&rf.push(i)}if(e.showFluidMesh||e.showPressureMesh||e.showParticleConc||e.showViscosityRegion||e.showVelocityMesh||e.showTurbViscosity)if(e.displayStyle===`Contour`&&e.crossSectionView){let i=[],a=[],o=e.fmbThickness||e.blThickness||.02,s=Math.max(2,Math.min(8,e.fmbLayers||e.blLayers||3)),c=e.fmbExpansionRatio||e.blExpansionRatio||1.3,l=new Float32Array(s+1);l[0]=0;let u;u=Math.abs(c-1)<1e-6?o/s:o*(1-c)/(1-c**+s);let d=0;for(let e=0;e<s;e++)d+=u*c**+e,l[e+1]=d;function f(n,r,i,a,o,s,c){let l=t.getBottomY(0,e)+e.liquidHeight;return Math.min(l,t.cy[n]+(s?1:-1)*(t.dCellY[n]/2))}let p=t.numCylBL||0;for(let o=0;o<rf.length;o++){let s=rf[o],c=t.nr*t.ntheta*t.ny,l=t.ogridM&&t.ogridNodes?t.ogridM*t.ogridM*t.ny:0;(t.numCellsOgrid||0)-l;let u=t.ogridMirrorBLBase===void 0?-1:t.ogridMirrorBLBase,d=t.ogridMirrorBLNum||0,m=!1,h=!1,g=0,_=0;if(s<c)m=!1,h=!1,_=Math.floor(s/(t.nr*t.ntheta));else if(s<c+l)m=!0,h=!1,_=Math.floor((s-c)/(t.ogridM*t.ogridM));else if(s<c+l+p){m=!1,h=!0;let e=s-(c+l);if(g=0,t.fmbIRings&&t.fmbNs)for(let n=0;n<t.nr;n++){if(!t.fmbIRings[n]||t.fmbIRings[n].length===0)continue;let r=t.fmbIRings[n].length*t.ntheta*t.fmbNs;if(e<r){g=Math.floor(e/(t.fmbIRings[n].length*t.ntheta));break}e-=r}}else u>=0&&s>=u&&s<u+d?(m=!0,h=!0,g=(s-u)%(t.fmbNs||1)):(m=!1,h=!1,_=0);let v=m,y=t.getCellCenterByIdx(s,e),b=Math.sqrt(y.x*y.x+y.z*y.z),x=i.length/3;if(v){let o=c,l=t.ogridM,u,d,p,v,b,S,C,w,T=!1;if(l&&t.ogridNodes){let e=s-o,n=l*l,r=Math.floor(e/n),i=e%n,a=i%l,c=Math.floor(i/l);if(r>=0&&r<t.ny&&a<l&&c<l){let e=(c*(l+1)+a)*2,n=(c*(l+1)+a+1)*2,i=((c+1)*(l+1)+a+1)*2,o=((c+1)*(l+1)+a)*2;u=t.ogridNodes[e],d=t.ogridNodes[e+1],p=t.ogridNodes[n],v=t.ogridNodes[n+1],b=t.ogridNodes[i],S=t.ogridNodes[i+1],C=t.ogridNodes[o],w=t.ogridNodes[o+1],T=!0,_=r}}if(!T){let e=t.dCellR[s]/2||(t.rNode[1]-t.rNode[0])/4;u=y.x-e,d=y.z-e,p=y.x+e,v=y.z-e,b=y.x+e,S=y.z+e,C=y.x-e,w=y.z+e}let E=-d,D=-v,O=-S,k=-w;if(e.crossSectionType===`Vertical`){let e=Math.cos(n.baseTh),t=Math.sin(n.baseTh),a=u*e-E*t,o=p*e-D*t,c=b*e-O*t,l=C*e-k*t,d=Math.min(a,o,c,l),v=Math.max(a,o,c,l),y=d*e+r*t,x=-d*t+r*e,S=v*e+r*t,w=-v*t+r*e,T=Math.sqrt(y*y+x*x),A=Math.sqrt(S*S+w*w);i.push(y,f(s,T,_,h,g,!1,m),x),i.push(S,f(s,A,_,h,g,!1,m),w),i.push(S,f(s,A,_,h,g,!0,m),w),i.push(y,f(s,T,_,h,g,!0,m),x)}else{let e=Math.sqrt(u*u+E*E),t=Math.sqrt(p*p+D*D),n=Math.sqrt(b*b+O*O),r=Math.sqrt(C*C+k*k);i.push(u,f(s,e,_,h,g,!1,m),E),i.push(p,f(s,t,_,h,g,!1,m),D),i.push(b,f(s,n,_,h,g,!1,m),O),i.push(C,f(s,r,_,h,g,!1,m),k)}a.push(x,x+1,x+2),a.push(x,x+2,x+3);continue}let S,C,w,T;if(s<c){let e=s%t.nr,n=Math.floor(s/t.nr)%t.ntheta;S=t.rNode[e],C=t.rNode[e+1],w=t.thetaNode[n],T=t.thetaNode[n+1];let r=t.neighbors[s*6+0];if(r>=0&&t.flag[r]===0&&r>=c+l){let e=t.cx[r],n=t.cz[r],i=Math.sqrt(e*e+n*n)-t.dCellR[r]/2;C=Math.min(C,i)}}else S=Math.max(0,b-t.dCellR[s]/2),C=b+t.dCellR[s]/2,w=y.theta-t.dCellTheta[s]/(2*Math.max(b,1e-9)),T=y.theta+t.dCellTheta[s]/(2*Math.max(b,1e-9));if(e.crossSectionType===`Vertical`){let e=n.baseTh+Math.PI/2,t=r*Math.cos(e),a=-r*Math.sin(e),o=Math.cos(n.baseTh),c=-Math.sin(n.baseTh),l=(y.x-t)*o+(y.z-a)*c>=0?1:-1,u=Math.abs(r),d=vf(Math.max(S,u),n.baseTh,r,l),p=vf(Math.max(C,u),n.baseTh,r,l),v=d.x,b=d.z,x=p.x,w=p.z,T=Math.sqrt(v*v+b*b),E=Math.sqrt(x*x+w*w);i.push(v,f(s,T,_,h,g,!1,m),b),i.push(x,f(s,E,_,h,g,!1,m),w),i.push(x,f(s,E,_,h,g,!0,m),w),i.push(v,f(s,T,_,h,g,!0,m),b)}else{let e=S*Math.cos(w),t=-S*Math.sin(w),n=C*Math.cos(w),r=-C*Math.sin(w),a=C*Math.cos(T),o=-C*Math.sin(T),c=S*Math.cos(T),l=-S*Math.sin(T);i.push(e,f(s,S,_,h,g,!1,m),t),i.push(n,f(s,C,_,h,g,!1,m),r),i.push(a,f(s,C,_,h,g,!1,m),o),i.push(c,f(s,S,_,h,g,!1,m),l)}a.push(x,x+1,x+2),a.push(x,x+2,x+3)}let m=new Or;m.setAttribute(`position`,new q(i,3)),m.setIndex(a);let h=new Float32Array(i.length);m.setAttribute(`color`,new mr(h,3)),tf=new J(m,new zr({vertexColors:!0,side:2,transparent:!0,opacity:.9,depthWrite:!1})),Z.add(tf)}else{let i=[],a=[];for(let a=0;a<rf.length;a++){let o=rf[a],s=t.nr*t.ntheta*t.ny,c=t.ogridM&&t.ogridNodes?t.ogridM*t.ogridM*t.ny:0,l=t.numCells-s-(t.numCellsOgrid||0),u=o>=s&&o<s+c||o>=s+c+l;if(t.flag[o]===0){let a=t.getCellCenterByIdx(o,e);if(e.crossSectionView&&e.crossSectionType===`Vertical`&&!u){o%t.nr;let e=Math.floor(o/t.nr)%t.ntheta,i=Math.sqrt(a.x*a.x+a.z*a.z),s=e===yf(i,n.baseTh,r,-1,n.ntheta,n.dTheta)?-1:1,c=vf(Math.max(i,Math.abs(r)),n.baseTh,r,s);a.x=c.x,a.z=c.z}else a.z=-a.z;i.push(a.x,a.y,a.z)}}for(let n=0;n<t.numCells;n++)if(t.flag[n]===3){let r=t.getCellCenterByIdx(n,e);a.push(r.x,r.y,-r.z)}}if(e.showMRFZone){let n=[],r=e.impellerDiameter/2,i=r*Math.max(e.mrfRadialMargin??1.2,1.05),a=Kd.getImpellerCenterY(e),o=a-e.bladeWidth/2,s=a+e.bladeWidth/2;if(e.impellerType===`Anchor`||e.impellerType===`Ribbon`)o=e.tankHeight*.1,s=e.tankHeight*.9;else if(e.impellerType===`Pfaudler`){let t=(e.pfaudlerLiftAngle===void 0?25:e.pfaudlerLiftAngle)*Math.PI/180,n=(r-r*.55)*Math.tan(t);s=a+e.bladeWidth/2+n}let c=e.mrfVerticalMarginBottom??.1,l=e.mrfVerticalMarginTop??.1,u=o-c,d=s+l;for(let r=0;r<t.numCells;r++){if(t.mrf[r]!==1)continue;let a=t.getCellCenterByIdx(r,e);Math.sqrt(a.x*a.x+a.z*a.z)>i*1.05||a.y<u-.01||a.y>d+.01||n.push(a.x,a.y,-a.z)}let f=new Or;f.setAttribute(`position`,new q(n,3)),nf=new Ei(f,new xi({color:16729088,size:e.tankDiameter*.012,transparent:!0,opacity:.8})),Z.add(nf)}pf&&(kf(pf,e),qd&&Jd&&X&&qd.render(Jd,X))}function kf(e,t){if(pf=e,!e)return;let n=e.mesh,r=e.mesh?gf(e.mesh,t):null,i=e.mesh?_f(e.mesh,t):0;if(rf&&rf.length>0&&e.T&&e.mu_app&&e.p&&e.ur&&e.utheta&&e.uy){let n=0,r=1/0,i=-1/0,a=0,o=1/0,s=-1/0,c=0,l=1/0,u=-1/0,d=0,f=1/0,p=-1/0;for(let t=0;t<rf.length;t++){let m=rf[t],h=e.T[m];h<r&&(r=h),h>i&&(i=h),n+=h;let g=e.mu_app[m];g<o&&(o=g),g>s&&(s=g),a+=g;let _=e.p[m];_<l&&(l=_),_>u&&(u=_),c+=_;let v=e.ur[m],y=e.utheta[m],b=e.uy[m],x=Math.sqrt(v*v+y*y+b*b);x<f&&(f=x),x>p&&(p=x),d+=x}let m=rf.length;t.currentAvgTemp=parseFloat((n/m).toFixed(2)),t.currentMinTemp=parseFloat(r.toFixed(2)),t.currentMaxTemp=parseFloat(i.toFixed(2)),t.currentAvgViscosity=a/m,t.currentMinViscosity=o,t.currentMaxViscosity=s,t.currentAvgPressure=parseFloat((c/m).toFixed(2)),t.currentMinPressure=parseFloat(l.toFixed(2)),t.currentMaxPressure=parseFloat(u.toFixed(2)),t.currentMinPress=t.currentMinPressure,t.currentMaxPress=t.currentMaxPressure,t.currentAvgVelocity=parseFloat((d/m).toFixed(3)),t.currentMinVelocity=parseFloat(f.toFixed(3)),t.currentMaxVelocity=parseFloat(p.toFixed(3)),t.currentMaxVel=t.currentMaxVelocity}if((t.showFluidMesh||t.showPressureMesh||t.showParticleConc||t.showViscosityRegion||t.showVelocityMesh||t.showTurbViscosity)&&tf){let n=t.showPressureMesh,r=t.showParticleConc,i=t.showViscosityRegion&&!n&&!r,a=t.showTurbViscosity&&!n&&!r&&!i,o=t.showVelocityMesh&&!n&&!r&&!i&&!a;if(r){e.particleConc||=new Float32Array(e.mesh.numCells),e.particleConc.fill(0);let n=new Float32Array(e.mesh.numCells);if(t.dpmTrailMode===`Trail`&&t.crossSectionView&&ff&&ff.length>0){ff.forEach(r=>{for(let i=0;i<r.positions.length;i+=3){let a=r.positions[i],o=r.positions[i+1],s=r.positions[i+2],c=Math.sqrt(a*a+s*s),l=Math.atan2(-s,a);l<0&&(l+=Math.PI*2);let u=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(c/(t.tankDiameter/2)*e.mesh.nr))),d=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(l/(Math.PI*2)*e.mesh.ntheta))),f=e.mesh.getBottomY(0,t),p=f+t.liquidHeight,m=(o-f)/(p-f||1),h=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(m*e.mesh.ny))),g=u+d*e.mesh.nr+h*e.mesh.nr*e.mesh.ntheta;g>=0&&g<e.mesh.numCells&&n[g]++}});for(let t=0;t<e.mesh.numCells;t++)if(e.mesh.flag[t]===0){let r=e.vol[t]*1e3;e.particleConc[t]=n[t]/(r||1)}}else if(window.dpmParticles&&window.dpmParticles.length>0){window.dpmParticles.forEach(r=>{let i=Math.sqrt(r.x*r.x+r.z*r.z),a=Math.atan2(-r.z,r.x);a<0&&(a+=Math.PI*2);let o=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(i/(t.tankDiameter/2)*e.mesh.nr))),s=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(a/(Math.PI*2)*e.mesh.ntheta))),c=e.mesh.getBottomY(0,t),l=c+t.liquidHeight,u=(r.y-c)/(l-c||1),d=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(u*e.mesh.ny))),f=o+s*e.mesh.nr+d*e.mesh.nr*e.mesh.ntheta;f>=0&&f<e.mesh.numCells&&n[f]++});for(let t=0;t<e.mesh.numCells;t++)if(e.mesh.flag[t]===0){let r=e.vol[t]*1e3;e.particleConc[t]=n[t]/(r||1e-6)}}}let s=[],c=1/0,l=-1/0;for(let s=0;s<rf.length;s++){let u=rf[s],d;if(n)d=e.p[u];else if(r)d=e.particleConc[u];else if(i)d=e.mu_app[u];else if(a)d=e.mut[u];else if(o){let n=e.ur[u]||0,r=e.utheta[u]||0,i=e.uy[u]||0;switch(t.velocityComponent){case`ur`:d=n;break;case`utheta`:d=r;break;case`uy`:d=i;break;default:d=Math.sqrt(n*n+r*r+i*i);break}}else d=e.T[u];d<c&&(c=d),d>l&&(l=d)}let u=Math.min(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:1/0),d=Math.max(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:-1/0),f,p;t.colorScaleMode===`Relative`?(f=c===1/0?0:c,p=l===-1/0?1:l,p-f<1e-5&&(p=f+1e-5)):n?(f=c===1/0?-100:c,p=l===-1/0?100:l):r?(f=0,p=t.particleConcMaxLimit||10):i?(f=t.viscosity||.001,p=Math.max((t.viscosity||.001)*10,1)):a?(f=0,p=Math.max((t.viscosity||.001)*100,l>0?l:.001)):o?(f=0,p=Math.max(t.currentMaxVelocity||1,.001)):(f=u===1/0?273.15:u,p=d===-1/0?373.15:d,p-f<.1&&(p=f+.1)),r?(t.currentMinConc=c===1/0?0:parseFloat(c.toFixed(1)),t.currentMaxConc=l===-1/0?0:parseFloat(l.toFixed(1))):i?(t.currentMinViscosity=c===1/0?t.viscosity||.001:c,t.currentMaxViscosity=l===-1/0?t.viscosity||.001:l):a?(t.currentMinTurbVisc=c===1/0?0:c,t.currentMaxTurbVisc=l===-1/0?0:l):o?(t.currentMinVelocity=c===1/0?0:parseFloat(c.toFixed(3)),t.currentMaxVelocity=l===-1/0?0:parseFloat(l.toFixed(3)),t.currentMaxVel=t.currentMaxVelocity):n?(t.currentMinPress=parseFloat(f.toFixed(2)),t.currentMaxPress=parseFloat(p.toFixed(2))):(t.currentMinTemp=parseFloat(f.toFixed(2)),t.currentMaxTemp=parseFloat(p.toFixed(2)));for(let c=0;c<rf.length;c++){let l=rf[c],u=s=>{if(n)return e.p[s];if(r)return e.particleConc[s];if(i)return e.mu_app[s];if(a)return e.mut?e.mut[s]:0;if(o){let n=e.ur[s]||0,r=e.utheta[s]||0,i=e.uy[s]||0;switch(t.velocityComponent){case`ur`:return n;case`utheta`:return r;case`uy`:return i;default:return Math.sqrt(n*n+r*r+i*i)}}return e.T[s]},d=t=>{let n=0,r=0,i=t*6;for(let t=0;t<6;t++){let a=e.mesh.neighbors[i+t];a>=0&&e.mesh.flag[a]===0&&(n+=u(a),r++)}return r>0?n/r:u(t)},m=e=>u(e),h=(n,r,i)=>{let a=0,o=0;if(t.crossSectionType===`Vertical`)for(let t=-1;t<=0;t++)for(let s=-1;s<=0;s++)for(let c=-1;c<=0;c++){let l=n+t,d=i+s,f=r+c;if(f<0&&(f+=e.mesh.ntheta),f>=e.mesh.ntheta&&(f-=e.mesh.ntheta),l>=0&&l<e.mesh.nr&&d>=0&&d<e.mesh.ny){let t=l+f*e.mesh.nr+d*e.mesh.nr*e.mesh.ntheta;t>=0&&t<e.mesh.numCells&&e.mesh.flag[t]===0&&(a+=u(t),o++)}}else for(let t=-1;t<=0;t++)for(let s=-1;s<=0;s++){let c=n+t,l=r+s;if(c>=0&&c<e.mesh.nr){l<0&&(l=e.mesh.ntheta-1),l>=e.mesh.ntheta&&(l=0);let t=c+l*e.mesh.nr+i*e.mesh.nr*e.mesh.ntheta;t>=0&&t<e.mesh.numCells&&e.mesh.flag[t]===0&&(a+=u(t),o++)}}return o===0?d(l):a/o},g=n=>{if(e&&e.iter===0)return[.85,.85,.85];if(r&&n<(t.particleConcThreshold||0))return[.1,.1,.1];let a;if(i&&t.viscosityLogScale){let e=Math.log10(Math.max(n,1e-8)),t=Math.log10(Math.max(f,1e-8)),r=Math.log10(Math.max(p,1e-8));a=(e-t)/(r-t||1)}else a=(n-f)/(p-f||1);a=Math.max(0,Math.min(1,a));let o=0,s=0,c=0;return a<.25?(o=0,s=4*a,c=1):a<.5?(o=0,s=1,c=1-4*(a-.25)):a<.75?(o=4*(a-.5),s=1,c=0):(o=1,s=1-4*(a-.75),c=0),[o,s,c]},_=l>=e.mesh.nr*e.mesh.ntheta*e.mesh.ny;if(t.displayStyle===`Contour`&&t.crossSectionView)if(t.interpolateContour&&!_){let n=l%e.mesh.nr,r=Math.floor(l/e.mesh.nr)%e.mesh.ntheta,i=Math.floor(l/(e.mesh.nr*e.mesh.ntheta)),a,o,c,u;t.crossSectionType===`Vertical`?(a=h(n,r,i),o=h(n+1,r,i),c=h(n+1,r,i+1),u=h(n,r,i+1)):(a=h(n,r,i),o=h(n+1,r,i),c=h(n+1,r+1,i),u=h(n,r+1,i)),s.push(...g(a),...g(o),...g(c),...g(u))}else{let[e,t,n]=g(_?d(l):m(l));for(let r=0;r<4;r++)s.push(e,t,n)}else{let[e,t,n]=g(_?d(l):m(l));s.push(e,t,n)}}tf.geometry.setAttribute(`color`,new q(s,3)),tf.material.vertexColors=!0,tf.material.color.setHex(16777215),tf.material.needsUpdate=!0}if(t.showStreamlines){let n=t.numStreamlines||100,r=[],i=(t.impellerDiameter||.4)/2,a=(t.impellerClearance||.3)+hf(t),o=t.impellerHeight||.1,s=t.streamlineOrigin||`impeller`,c=(t.tankDiameter||1)/2,l=hf(t),u=t.tankHeight||1,d=t.liquidHeight||u,f=[];for(let e=0;e<n;e++){let e,t,n;s===`impeller`?(e=i*(.8+.4*Math.random()),t=Math.random()*2*Math.PI,n=a+(Math.random()-.5)*o):(e=Math.sqrt(Math.random())*c,t=Math.random()*2*Math.PI,n=l+Math.random()*d),f.push({r:e,theta:t,y:n})}for(let t=0;t<n;t++){let n=f[t].r,i=f[t].theta,a=f[t].y;for(let t=0;t<1e3;t++){let t=n*Math.cos(i),o=-n*Math.sin(i),s=e.interpolateVelocityAt(n,i,a);if(!s)break;let d=Math.sqrt(s.ur*s.ur+s.utheta*s.utheta+s.uy*s.uy);if(d<1e-6)break;let f=c*.01/d,p=n+s.ur*f,m=i+s.utheta/Math.max(n,1e-6)*f,h=a+s.uy*f,g=p*Math.cos(m),_=-p*Math.sin(m);if(r.push(t,a,o,g,h,_),n=p,i=m,a=h,n>c||n<0||a<l||a>u)break}}if(uf&&=(Z.remove(uf),uf.geometry.dispose(),uf.material.dispose(),null),r.length>0){let e=new Or;e.setAttribute(`position`,new q(r,3)),uf=new bi(e,new ci({color:22015,opacity:.6,transparent:!0})),Z.add(uf)}}else uf&&=(Z.remove(uf),uf.geometry.dispose(),uf.material.dispose(),null);if(t.showVelocityVector&&n&&e.ur&&e.utheta&&e.uy){af&&=(Z.remove(af),af.children?af.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}):(af.geometry&&af.geometry.dispose(),af.material&&af.material.dispose()),null);let a=[],o=[],s=Math.max(1,Math.round(t.vectorSkip||3)),c=t.vectorScale===void 0?1:t.vectorScale,l=(t.rpm===void 0?100:t.rpm)*(2*Math.PI/60)*((t.impellerDiameter||.333)/2),u=l>.001?l:Math.max(t.currentMaxVel||1,.001),d=n.rNode[n.nr]*.15,f=n.nr*n.ntheta*n.ny,p=!!t.crossSectionView,m=p&&t.crossSectionType===`Vertical`,h=p&&t.crossSectionType===`Horizontal`,g=h?Math.floor((t.crossSectionHeight||0)*(n.ny-1)):-1,_=0;for(let l=0;l<n.numCells;l++){if(n.flag[l]!==0)continue;let v=l>=f,y=n.getCellCenterByIdx(l,t);if(p)if(v){let e=y.x*Math.sin(r.baseTh)-y.z*Math.cos(r.baseTh);if(Math.abs(e-i)>(n.dCellR[l]/2||n.ogridRc/(n.ogridM||24)*1.5||.02))continue}else{let e=Math.floor(l/(n.nr*n.ntheta));l%n.nr;let t=Math.floor(l/n.nr)%n.ntheta;if(m&&r){let e=y.r,a=yf(e,r.baseTh,i,-1,n.ntheta,r.dTheta),o=yf(e,r.baseTh,i,1,n.ntheta,r.dTheta);if(t!==a&&t!==o)continue}else if(h&&e!==g)continue}if(_++,(_-1)%s!=0)continue;let b=v?y.x:y.r*Math.cos(y.theta),x=v?y.z:-y.r*Math.sin(y.theta),S=y.y,C=e.ur[l],w=e.utheta[l],T=e.uy[l],E=Math.sqrt(C*C+w*w+T*T),D=0,O=0;v?(D=C,O=w):(D=C*Math.cos(y.theta)-w*Math.sin(y.theta),O=-(C*Math.sin(y.theta)+w*Math.cos(y.theta)));let k=0,A=0,j=0;if(c>0&&E>1e-9){let e=c*d*(E/u);k=D/E*e,A=T/E*e,j=O/E*e}let M=Math.min(E/u,1),N=Math.min(1,M*2),P=Math.min(1,M<.5?M*2:(1-M)*2),F=Math.max(0,1-M*2);a.push(b,S,x,b+k,S+A,x+j),o.push(N,P,F,N,P,F)}if(a.length>0){let e=new En,t=new Or;if(t.setAttribute(`position`,new q(a,3)),t.setAttribute(`color`,new q(o,3)),e.add(new bi(t,new ci({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}))),c===0){let t=[],n=[];for(let e=0;e<a.length;e+=6){t.push(a[e],a[e+1],a[e+2]);let r=Math.floor(e/3);n.push(o[r],o[r+1],o[r+2])}let r=new Or;r.setAttribute(`position`,new q(t,3)),r.setAttribute(`color`,new q(n,3)),e.add(new Ei(r,new xi({vertexColors:!0,size:.008})))}af=e,Z.add(af)}}else af&&=(Z.remove(af),af.children&&af.children.forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}),null);if(t.showHighTempRegion){let n=t.highTempLowerLimit||320,r=[],i=[],a=t.currentMinTemp,o=t.currentMaxTemp;t.colorScaleMode!==`Relative`&&(a=Math.min(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:1/0),o=Math.max(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:-1/0),o-a<.1&&(o=a+.1));for(let s=0;s<e.mesh.numCells;s++)if(e.mesh.flag[s]===0){let c=e.T[s];if(c>=n){s%e.mesh.nr,Math.floor(s/e.mesh.nr)%e.mesh.ntheta,Math.floor(s/(e.mesh.nr*e.mesh.ntheta));let n=e.mesh.getCellCenterByIdx(s,t);r.push(n.x,n.y,-n.z);let l=(c-a)/(o-a||1);l=Math.max(0,Math.min(1,l));let u=0,d=0,f=0;l<.25?(u=0,d=4*l,f=1):l<.5?(u=0,d=1,f=1-4*(l-.25)):l<.75?(u=4*(l-.5),d=1,f=0):(u=1,d=1-4*(l-.75),f=0),i.push(u,d,f)}}if(sf&&=(Z.remove(sf),sf.geometry.dispose(),sf.material.dispose(),null),r.length>0){let e=new Or;e.setAttribute(`position`,new q(r,3)),e.setAttribute(`color`,new q(i,3)),sf=new Ei(e,new xi({size:t.tankDiameter*.015,vertexColors:!0,transparent:!0,opacity:.6})),Z.add(sf)}}else sf&&=(Z.remove(sf),sf.geometry.dispose(),sf.material.dispose(),null);if(t.showLowTempRegion){let n=t.lowTempUpperLimit||300,r=[],i=[],a=t.currentMinTemp,o=t.currentMaxTemp;t.colorScaleMode!==`Relative`&&(a=Math.min(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:1/0),o=Math.max(t.initialTemp===void 0?293.15:t.initialTemp,t.jacketTemp===void 0?293.15:t.jacketTemp,t.coilTemp!==void 0&&t.coilEnabled?t.coilTemp:-1/0),o-a<.1&&(o=a+.1));for(let s=0;s<e.mesh.numCells;s++)if(e.mesh.flag[s]===0){let c=e.T[s];if(c<=n){s%e.mesh.nr,Math.floor(s/e.mesh.nr)%e.mesh.ntheta,Math.floor(s/(e.mesh.nr*e.mesh.ntheta));let n=e.mesh.getCellCenterByIdx(s,t);r.push(n.x,n.y,-n.z);let l=(c-a)/(o-a||1);l=Math.max(0,Math.min(1,l));let u=0,d=0,f=0;l<.25?(u=0,d=4*l,f=1):l<.5?(u=0,d=1,f=1-4*(l-.25)):l<.75?(u=4*(l-.5),d=1,f=0):(u=1,d=1-4*(l-.75),f=0),i.push(u,d,f)}}if(cf&&=(Z.remove(cf),cf.geometry.dispose(),cf.material.dispose(),null),r.length>0){let e=new Or;e.setAttribute(`position`,new q(r,3)),e.setAttribute(`color`,new q(i,3)),cf=new Ei(e,new xi({size:t.tankDiameter*.015,vertexColors:!0,transparent:!0,opacity:.6})),Z.add(cf)}}else cf&&=(Z.remove(cf),cf.geometry.dispose(),cf.material.dispose(),null);if(t.showParticles){let n=t.particleCount||1e3;if(!window.dpmParticles||window.dpmParticles.length!==n){window.dpmParticles=[];let r=e.mesh.getBottomY(0,t)+t.liquidHeight,i=t.particlePlacementType||`Uniform`;if(i===`LowTemp`){let i=[],a=t.crystallizationTemp||300;for(let t=0;t<e.mesh.numCells;t++)e.mesh.flag[t]===0&&e.T[t]<=a&&i.push(t);if(i.length>0)for(let a=0;a<n;a++){let n=i[Math.floor(Math.random()*i.length)],a=n%e.mesh.nr,o=Math.floor(n/e.mesh.nr)%e.mesh.ntheta,s=Math.floor(n/(e.mesh.nr*e.mesh.ntheta)),c=e.mesh.rNode[a],l=e.mesh.rNode[a+1],u=c+Math.random()*(l-c),d=e.mesh.thetaNode[o],f=e.mesh.thetaNode[o+1],p=d+Math.random()*(f-d),m=e.mesh.getBottomY(0,t),h=e.mesh.etaNode[s],g=e.mesh.etaNode[s+1],_=m+(h+Math.random()*(g-h))*(r-m),v=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),i=Math.sqrt(Math.log(t/(e*e)+1)),a=0,o=0;for(;a===0;)a=Math.random();for(;o===0;)o=Math.random();let s=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*o);v=Math.exp(r+i*s)}v=Math.max(.1,v)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();v=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}v=Math.max(.1,v)}window.dpmParticles.push({x:u*Math.cos(p),y:_,z:-u*Math.sin(p),vx:0,vy:0,vz:0,dp:v/1e6})}}else for(let a=0;a<n;a++){let n=Math.random()*(t.tankDiameter/2)*.9,a=Math.random()*Math.PI*2,o=e.mesh.getBottomY(0,t),s;s=i===`Floating`?o+Math.random()**.4*(r-o):i===`Sedimented`?o+Math.random()**2.5*(r-o):o+Math.random()*(r-o);let c=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),i=Math.sqrt(Math.log(t/(e*e)+1)),a=0,o=0;for(;a===0;)a=Math.random();for(;o===0;)o=Math.random();let s=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*o);c=Math.exp(r+i*s)}c=Math.max(.1,c)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();c=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}c=Math.max(.1,c)}window.dpmParticles.push({x:n*Math.cos(a),y:s,z:-n*Math.sin(a),vx:0,vy:0,vz:0,dp:c/1e6})}}if(t.particlePlacementType===`LowTemp`&&window.dpmParticles.length<n){let r=t.crystallizationTemp||300,i=[];for(let t=0;t<e.mesh.numCells;t++)e.mesh.flag[t]===0&&e.T[t]<=r&&i.push(t);if(i.length>0){let r=e.mesh.getBottomY(0,t)+t.liquidHeight,a=Math.min(15,n-window.dpmParticles.length);for(let n=0;n<a;n++){let n=i[Math.floor(Math.random()*i.length)],a=n%e.mesh.nr,o=Math.floor(n/e.mesh.nr)%e.mesh.ntheta,s=Math.floor(n/(e.mesh.nr*e.mesh.ntheta)),c=e.mesh.rNode[a],l=e.mesh.rNode[a+1],u=c+Math.random()*(l-c),d=e.mesh.thetaNode[o],f=e.mesh.thetaNode[o+1],p=d+Math.random()*(f-d),m=e.mesh.getBottomY(0,t),h=e.mesh.etaNode[s],g=e.mesh.etaNode[s+1],_=m+(h+Math.random()*(g-h))*(r-m),v=t.particleDiameter||100;if(t.particleDistributionType===`Log-Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=n*n,r=Math.log(e*e/Math.sqrt(t+e*e)),i=Math.sqrt(Math.log(t/(e*e)+1)),a=0,o=0;for(;a===0;)a=Math.random();for(;o===0;)o=Math.random();let s=Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*o);v=Math.exp(r+i*s)}v=Math.max(.1,v)}else if(t.particleDistributionType===`Normal`){let e=t.particleDiameter||100,n=t.particleSizeStdDev||20;if(n>0){let t=0,r=0;for(;t===0;)t=Math.random();for(;r===0;)r=Math.random();v=e+n*(Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*r))}v=Math.max(.1,v)}window.dpmParticles.push({x:u*Math.cos(p),y:_,z:-u*Math.sin(p),vx:0,vy:0,vz:0,dp:v/1e6})}}}let a=.016,o=[],s=[],c=t.particleDensity||2500,l=(t.particleDiameter||100)/1e6,u=t.density||1e3;if(window.dpmParticles.forEach(n=>{let r=n.dp||(t.particleDiameter||100)/1e6,i=-9.81*(1-u/c),l=Math.sqrt(n.x*n.x+n.z*n.z),d=Math.atan2(-n.z,n.x);d<0&&(d+=Math.PI*2);let f=Math.max(0,Math.min(e.mesh.nr-1,Math.floor(l/(t.tankDiameter/2)*e.mesh.nr))),p=Math.max(0,Math.min(e.mesh.ntheta-1,Math.floor(d/(Math.PI*2)*e.mesh.ntheta))),m=e.mesh.getBottomY(0,t),h=m+t.liquidHeight,g=(n.y-m)/(h-m||1),_=Math.max(0,Math.min(e.mesh.ny-1,Math.floor(g*e.mesh.ny))),v=f+p*e.mesh.nr+_*e.mesh.nr*e.mesh.ntheta,y=0,b=0,x=0,S=t.viscosity||.001;if(e.mesh.flag[v]===0){let t=e.ur[v],n=e.utheta[v],r=e.uy[v];y=t*Math.cos(d)-n*Math.sin(d),x=-t*Math.sin(d)-n*Math.cos(d),b=r,e.mu_app&&e.mu_app[v]&&(S=e.mu_app[v])}let C=y-n.vx,w=b-n.vy,T=x-n.vz,E=Math.sqrt(C*C+w*w+T*T),D=Math.max(u*E*r/S,1e-10),O;O=D<1e3?1+.15*D**.687:.44*D/24;let k=c*r*r/(18*S),A=Math.min(O*a/k,1);n.vx+=A*C,n.vy+=A*w,n.vz+=A*T,n.vy+=i*a,n.x+=n.vx*a,n.y+=n.vy*a,n.z+=n.vz*a;let j=t.tankDiameter/2-.01,M=Math.sqrt(n.x*n.x+n.z*n.z);if(M>j){let e=j/M;n.x*=e,n.z*=e;let t=(n.vx*n.x+n.vz*n.z)/j;t>0&&(n.vx-=1.5*t*(n.x/j),n.vz-=1.5*t*(n.z/j))}let N=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05;if(M<N){let e=t.impellerClearance+hf(t);if((t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(e=t.tankHeight*.1),n.y>=e){let e=N/(M||1e-4);n.x*=e,n.z*=e;let t=(n.vx*n.x+n.vz*n.z)/N;t<0&&(n.vx-=1.5*t*(n.x/N),n.vz-=1.5*t*(n.z/N))}}if(t.showBaffle&&n.y>=0&&n.y<=t.tankHeight){let e=t.tankDiameter/2-t.baffleWidth/2;for(let r=0;r<t.baffleCount;r++){let i=r/t.baffleCount*Math.PI*2,a=Math.cos(i)*e,o=-Math.sin(i)*e,s=n.x-a,c=n.z-o,l=s*Math.cos(-i)-c*Math.sin(-i),u=s*Math.sin(-i)+c*Math.cos(-i);if(Math.abs(l)<=t.baffleWidth/2&&Math.abs(u)<=t.baffleThickness/2){let e=n.vx*Math.cos(-i)-n.vz*Math.sin(-i),r=n.vx*Math.sin(-i)+n.vz*Math.cos(-i),s=u>=0?1:-1,c=l>=0?1:-1;t.baffleWidth/2-Math.abs(l)>t.baffleThickness/2-Math.abs(u)?(u=s*(t.baffleThickness/2+.001),r*=-.5):(l=c*(t.baffleWidth/2+.001),e*=-.5);let d=l*Math.cos(i)-u*Math.sin(i),f=l*Math.sin(i)+u*Math.cos(i);n.x=a+d,n.z=o+f,n.vx=e*Math.cos(i)-r*Math.sin(i),n.vz=e*Math.sin(i)+r*Math.cos(i);break}}}let P=e.mesh.getBottomY(M,t);n.y<P+.01&&(n.y=P+.01,n.vy=-n.vy*.3,n.vx*=.8,n.vz*=.8);let F=e.mesh.getBottomY(0,t)+t.liquidHeight;n.y>F&&(n.y=F,n.vy>0&&(n.vy=-n.vy*.5)),o.push(n.x,n.y,n.z);let I=Math.sqrt(n.vx*n.vx+n.vy*n.vy+n.vz*n.vz)/2;I=Math.max(0,Math.min(1,I));let L=0,ee=0,te=0;I<.25?(L=0,ee=4*I,te=1):I<.5?(L=0,ee=1,te=1-4*(I-.25)):I<.75?(L=4*(I-.5),ee=1,te=0):(L=1,ee=1-4*(I-.75),te=0),s.push(L,ee,te)}),lf&&=(Z.remove(lf),lf.geometry.dispose(),lf.material.dispose(),null),df&&=(Z.remove(df),df.geometry.dispose(),df.material.dispose(),null),t.dpmTrailMode===`Trail`){ff.push({positions:[...o],colors:[...s]});let e=Math.max(5,t.dpmMaxTrailLength||50);for(;ff.length>e;)ff.shift()}else ff=[];if(o.length>0&&(!t.crossSectionView||!t.showParticleConc)){let n=Math.max(.003,l*10),a=(n,a,o)=>{if(t.crossSectionView)if(t.crossSectionType===`Vertical`&&r){let e=r.baseTh,t=n*Math.cos(e)-o*Math.sin(e);return[t*Math.cos(e)+i*Math.sin(e),a,-t*Math.sin(e)+i*Math.cos(e)]}else{let r=e.mesh.getBottomY(0,t),i=r+t.liquidHeight;return[n,r+t.crossSectionHeight*(i-r),o]}return[n,a,o]};if(t.dpmTrailMode===`Trail`){let e=[],t=[];ff.forEach((n,r)=>{let i=(r+1)/ff.length;for(let r=0;r<n.positions.length;r+=3){let o=a(n.positions[r],n.positions[r+1],n.positions[r+2]);e.push(o[0],o[1],o[2]),t.push(n.colors[r]*i,n.colors[r+1]*i,n.colors[r+2]*i)}});let r=new Or;r.setAttribute(`position`,new q(e,3)),r.setAttribute(`color`,new q(t,3)),df=new Ei(r,new xi({size:n*.7,vertexColors:!0,transparent:!0,opacity:.8})),Z.add(df)}else{ff=[];let e=[];for(let t=0;t<o.length;t+=3){let n=a(o[t],o[t+1],o[t+2]);e.push(n[0],n[1],n[2])}let t=new Or;t.setAttribute(`position`,new q(e,3)),t.setAttribute(`color`,new q(s,3)),lf=new Ei(t,new xi({size:n,vertexColors:!0,transparent:!0,opacity:.9})),Z.add(lf)}}}else lf&&=(Z.remove(lf),lf.geometry.dispose(),lf.material.dispose(),null),df&&=(Z.remove(df),df.geometry.dispose(),df.material.dispose(),null),ff=[],window.dpmParticles=[];if(of&&=(Z.remove(of),of.geometry.dispose(),of.material.dispose(),null),t.showGridMesh){let n=[],r=t.gridMeshStyle!==`Points`,i=e.mesh.ogridNodes&&e.mesh.ogridM,a=t=>{let n=t-e.mesh.nr*e.mesh.ntheta*e.mesh.ny,r=e.mesh.ogridM,i=r*r,a=Math.floor(n/i),o=n%i,s=o%r,c=Math.floor(o/r),l=r+1,u=(c*l+s)*2,d=(c*l+(s+1))*2,f=((c+1)*l+(s+1))*2,p=((c+1)*l+s)*2,m=e.mesh.ogridNodes;return{u:s,v:c,kLayer:a,x0:m[u],z0:m[u+1],x1:m[d],z1:m[d+1],x2:m[f],z2:m[f+1],x3:m[p],z3:m[p+1]}},o=t.fmbThickness||t.blThickness||.02,s=(n,r,i,a)=>{let s=e.mesh.getBottomY(a,t);if(i<=s+o*5+.001){let a=Math.sqrt(n*n+r*r);return e.mesh.getBottomY(a,t)+(i-s)}return i},c=[],l=new Nn(35071),u=new Nn(16711850),d=(e,t,r,i,a,o,d,f)=>{n.push(e,s(e,r,t,d),r,i,s(i,o,a,d),o);let p=f?u:l;c.push(p.r,p.g,p.b,p.r,p.g,p.b)};for(let o=0;o<rf.length;o++){let s=rf[o],f=e.mesh.nr*e.mesh.ntheta*e.mesh.ny,p=e.mesh.ogridM&&e.mesh.ogridNodes?e.mesh.ogridM*e.mesh.ogridM*e.mesh.ny:0,m=s>=f&&s<f+p,h=e.mesh.ogridMirrorBLBase!==void 0&&s>=e.mesh.ogridMirrorBLBase&&s<e.mesh.ogridMirrorBLBase+e.mesh.ogridMirrorBLNum,g=m||h,_=s>=f+p,v=e.mesh.getCellCenterByIdx(s,t),y=Math.sqrt(v.x*v.x+v.z*v.z);if(r){let n,r,o,c,l,u,m,b;if(g)if(i){let t=s;if(h){let n=s;for(;n>=0;){if(n>=f&&n<f+p){t=n;break}n=e.mesh.neighbors[n*6+4]}}let i=a(t);n=i.x0,r=-i.z0,o=i.x1,c=-i.z1,l=i.x2,u=-i.z2,m=i.x3,b=-i.z3}else{let t=e.mesh.dCellR[s]/2||(e.mesh.rNode[1]-e.mesh.rNode[0])/4,i=t;n=v.x-t,r=-(v.z-i),o=v.x+t,c=-(v.z-i),l=v.x+t,u=-(v.z+i),m=v.x-t,b=-(v.z+i)}else{let t,i,a,d;if(s<f){let n=s%e.mesh.nr,r=Math.floor(s/e.mesh.nr)%e.mesh.ntheta;t=e.mesh.rNode[n],i=e.mesh.rNode[n+1],a=e.mesh.thetaNode[r],d=e.mesh.thetaNode[r+1];let o=e.mesh.neighbors[s*6+0];if(o>=0&&e.mesh.flag[o]===0&&o>=f+p){let t=e.mesh.cx[o],n=e.mesh.cz[o],r=Math.sqrt(t*t+n*n)-e.mesh.dCellR[o]/2;i=Math.min(i,r)}}else t=Math.max(0,y-e.mesh.dCellR[s]/2),i=y+e.mesh.dCellR[s]/2,a=v.theta-e.mesh.dCellTheta[s]/(2*Math.max(y,1e-9)),d=v.theta+e.mesh.dCellTheta[s]/(2*Math.max(y,1e-9));n=t*Math.cos(a),r=-t*Math.sin(a),o=i*Math.cos(a),c=-i*Math.sin(a),l=i*Math.cos(d),u=-i*Math.sin(d),m=t*Math.cos(d),b=-t*Math.sin(d)}let x=e.mesh.cy[s]-e.mesh.dCellY[s]/2,S=e.mesh.cy[s]+e.mesh.dCellY[s]/2,C=e.mesh.neighbors[s*6+5];if(C>=0&&e.mesh.flag[C]===0&&C>=f+p){let t=e.mesh.cy[C]+e.mesh.dCellY[C]/2;x=Math.max(x,t),S=Math.max(S,x)}if(t.crossSectionView&&t.crossSectionType===`Vertical`){let n,r,i,a,o=gf(e.mesh,t),c=_f(e.mesh,t);if(g){let t=Math.cos(o.baseTh),l=Math.sin(o.baseTh),u=v.x*t+v.z*l,d=e.mesh.dCellR[s]/2||(e.mesh.rNode[1]-e.mesh.rNode[0])/4;n=(u-d)*t+c*l,r=-((u-d)*l-c*t),i=(u+d)*t+c*l,a=-((u+d)*l-c*t)}else{let t,l;if(s<f){let n=s%e.mesh.nr;t=e.mesh.rNode[n],l=e.mesh.rNode[n+1]}else t=Math.max(0,y-e.mesh.dCellR[s]/2),l=y+e.mesh.dCellR[s]/2;let u=o.baseTh+Math.PI/2,d=c*Math.cos(u),p=-c*Math.sin(u),m=Math.cos(o.baseTh),h=-Math.sin(o.baseTh),g=(v.x-d)*m+(v.z-p)*h>=0?1:-1,_=Math.abs(c),b=vf(Math.max(t,_),o.baseTh,c,g),x=vf(Math.max(l,_),o.baseTh,c,g);n=b?b.x:0,r=b?b.z:0,i=x?x.x:0,a=x?x.z:0}d(n,x,r,i,x,a,y,_),d(n,S,r,i,S,a,y,_),d(n,x,r,n,S,r,y,_),d(i,x,a,i,S,a,y,_)}else t.crossSectionView&&t.crossSectionType===`Horizontal`?(d(n,x,r,o,x,c,y,_),d(o,x,c,l,x,u,y,_),d(l,x,u,m,x,b,y,_),d(m,x,b,n,x,r,y,_)):(d(n,x,r,o,x,c,y,_),d(o,x,c,l,x,u,y,_),d(l,x,u,m,x,b,y,_),d(m,x,b,n,x,r,y,_),d(n,S,r,o,S,c,y,_),d(o,S,c,l,S,u,y,_),d(l,S,u,m,S,b,y,_),d(m,S,b,n,S,r,y,_),d(n,x,r,n,S,r,y,_),d(o,x,c,o,S,c,y,_),d(l,x,u,l,S,u,y,_),d(m,x,b,m,S,b,y,_))}else{n.push(v.x,v.y,-v.z);let e=_?u:l;c.push(e.r,e.g,e.b)}}let f=new Or;f.setAttribute(`position`,new q(n,3)),f.setAttribute(`color`,new q(c,3)),of=r?new bi(f,new ci({vertexColors:!0,transparent:!0,opacity:1})):new Ei(f,new xi({vertexColors:!0,size:.015,transparent:!0,opacity:.8})),Z.add(of)}}function Af(){window.dpmParticles=[],ff=[],lf&&=(Z.remove(lf),lf.geometry.dispose(),lf.material.dispose(),null),df&&=(Z.remove(df),df.geometry.dispose(),df.material.dispose(),null)}function jf(){if(!X||!Q)return;let e=X.isPerspectiveCamera,t=Q.usePerspective!==!1;if(e===t)return;let n=X.position.clone(),r=X.quaternion.clone(),i=mf(Q),a=Yd?Yd.target.clone():new K(0,i,0),o=X.zoom,s=window.innerWidth/window.innerHeight;if(t)X=new Jo(45,s,.01,100);else{let e=Q.tankDiameter*2.5;X=new Yo(e*s/-2,e*s/2,e/2,e/-2,.01,100)}X.position.copy(n),X.quaternion.copy(r),X.zoom=t?1:o,X.updateProjectionMatrix(),Yd&&(Yd.object=X,Yd.target.copy(a),Yd.update()),Xd&&(Xd.camera=X)}function Mf(e,t,n){if(!X||!qd||!Z)return null;Z.updateMatrixWorld();let r=new K(e,t,n);if(r.applyMatrix4(Z.matrixWorld),r.project(X),r.z>1)return null;let i=qd.domElement.getBoundingClientRect();return{x:i.left+(r.x*.5+.5)*i.width,y:i.top+(1-(r.y*.5+.5))*i.height}}function Nf(){if(X&&X.isPerspectiveCamera)X.aspect=window.innerWidth/window.innerHeight;else if(X&&X.isOrthographicCamera){let e=window.innerWidth/window.innerHeight,t=Q?Q.tankDiameter*2.5:2.5;X.left=t*e/-2,X.right=t*e/2,X.top=t/2,X.bottom=t/-2}X.updateProjectionMatrix(),qd.setSize(window.innerWidth,window.innerHeight)}function Pf(){if(requestAnimationFrame(Pf),window.syncFloatingPanel&&window.syncFloatingPanel(),Yd&&Yd.update(),Q&&Q.showDimensions&&window._updateDimensionOverlay&&window._updateDimensionOverlay(!0,Q),$d&&window.cfdRunning&&Q&&((Q.rotationModel||`MRF`)===`SlidingMesh`?pf&&($d.rotation.y=-(pf.rotorAngle||0)):$d.rotation.y-=Q.rpm*(2*Math.PI/60)*.016),Q){let e=document.getElementById(`color-bar-container`);if(e)if(Q.showColorBar||Q.showOperatingConditions){if(e.style.display=`block`,Q.showColorBar){let e=document.getElementById(`cb-temp-min`),t=document.getElementById(`cb-temp-max`);e&&(e.innerText=(Q.currentMinTemp||293.1).toFixed(1)),t&&(t.innerText=(Q.currentMaxTemp||293.1).toFixed(1));let n=document.getElementById(`cb-press-min`),r=document.getElementById(`cb-press-max`);n&&(n.innerText=(Q.currentMinPress===void 0?0:Q.currentMinPress).toFixed(1)),r&&(r.innerText=(Q.currentMaxPress===void 0?0:Q.currentMaxPress).toFixed(1));let i=document.getElementById(`cb-conc-min`),a=document.getElementById(`cb-conc-max`);i&&(i.innerText=(Q.currentMinConc===void 0?0:Q.currentMinConc).toFixed(1)),a&&(a.innerText=(Q.currentMaxConc===void 0?0:Q.currentMaxConc).toFixed(1));let o=document.getElementById(`cb-vel-max`);o&&(o.innerText=(Q.currentMaxVel||0).toFixed(3));let s=document.getElementById(`cb-visc-min`),c=document.getElementById(`cb-visc-max`);s&&(s.innerText=(Q.currentMinViscosity===void 0?Q.viscosity||.001:Q.currentMinViscosity).toExponential(2)),c&&(c.innerText=(Q.currentMaxViscosity===void 0?Q.viscosity||.001:Q.currentMaxViscosity).toExponential(2));let l=document.getElementById(`cb-turbvisc-min`),u=document.getElementById(`cb-turbvisc-max`);l&&(l.innerText=(Q.currentMinTurbVisc===void 0?0:Q.currentMinTurbVisc).toExponential(2)),u&&(u.innerText=(Q.currentMaxTurbVisc===void 0?0:Q.currentMaxTurbVisc).toExponential(2));let d=e=>e!==void 0&&Number.isFinite(e)?Number(e).toPrecision(4):`--`;Q.currentMinViscosityDisp=d(Q.currentMinViscosity),Q.currentMaxViscosityDisp=d(Q.currentMaxViscosity);let f=!!Q.showFluidMesh,p=!!Q.showPressureMesh,m=!!Q.showParticleConc,h=!!Q.showViscosityRegion&&!p&&!m,g=!!Q.showTurbViscosity&&!p&&!m&&!h,_=!!Q.showVelocityVector||!!Q.showVelocityMesh||!!Q.showParticles&&(!Q.crossSectionView||!Q.showParticleConc),v=`padding:5px 6px; border-radius:6px; margin-bottom:8px; background:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.35); transition: all 0.3s;`,y=`padding:5px 6px; border-radius:6px; margin-bottom:8px; background:transparent; border:1px solid transparent; opacity:0.45; transition: all 0.3s;`,b=document.getElementById(`cb-temp-row`),x=document.getElementById(`cb-press-row`),S=document.getElementById(`cb-conc-row`),C=document.getElementById(`cb-vel-row`),w=document.getElementById(`cb-visc-row`),T=document.getElementById(`cb-turbvisc-row`),E=f||p||m||_||h||g;b&&(b.style.cssText=!E||f?v:y),x&&(x.style.cssText=!E||p?v:y),S&&(S.style.cssText=!E||m?v:y),C&&(C.style.cssText=!E||_?`padding:5px 6px; border-radius:6px; border:1px solid rgba(255,255,255,0.35); background:rgba(255,255,255,0.10); transition: all 0.3s;`:`padding:5px 6px; border-radius:6px; border:1px solid transparent; background:transparent; opacity:0.45; transition: all 0.3s;`),w&&(w.style.cssText=!E||h?v:y),T&&(T.style.cssText=!E||g?v:y)}}else e.style.display=`none`;let t=document.getElementById(`cfd-monitor`);t&&(t.style.display=Q.showCFDMonitor===!1?`none`:`block`,t.style.zIndex=`99999`)}qd&&Jd&&X&&qd.render(Jd,X)}function Ff(e){if(!X||!Yd||!Q)return;let t=Q.tankDiameter*2.5,n=mf(Q),r=hf(Q),i=Z?Z.position.x:0,a=Z?Z.position.y:0,o=Z?Z.position.z:0;if(e===`VerticalTemp`||e===`VerticalVel`){let r=pf&&pf.mesh?pf.mesh.ntheta:Q.meshNtheta||24,s=2*Math.PI/r,c=Q.crossSectionAngle===void 0?.125:Q.crossSectionAngle,l=Math.round(c*2*Math.PI/s)%r;l<0&&(l+=r);let u;u=pf&&pf.mesh?pf.mesh.thetaNode[l]+(pf.mesh.thetaNode[l+1]-pf.mesh.thetaNode[l])/2:l*s+s/2;let d=(Q.crossSectionOffset||0)*(pf&&pf.mesh?pf.mesh.rNode[pf.mesh.nr]:Q.tankDiameter/2),f=i+d*Math.sin(u),p=o+d*Math.cos(u),m=e===`VerticalTemp`?u+Math.PI/2:u;X.position.set(f+t*Math.cos(m),a+n,p-t*Math.sin(m)),Yd.target.set(f,a+n,p)}else if(e===`Horizontal`){X.position.set(i,a+t+n,o);let e=Q.crossSectionType===`Horizontal`?r+Q.crossSectionHeight*Q.liquidHeight:n;Yd.target.set(i,a+e,o)}X.isOrthographicCamera&&(X.zoom=1,X.updateProjectionMatrix()),Yd.update()}function If(){if(!X||!Yd||!Q||!Z)return;let e=new K(0,mf(Q),0),t=new K;X.getWorldDirection(t);let n=(Q.tankDiameter||1)/2,r=Kd!==void 0&&Kd.getMirrorDepth?Kd.getMirrorDepth(Q):0,i=(Q.tankHeight||1)+r,a=Math.max(n,i/2)*1.1;if(X.isOrthographicCamera){X.aspect||window.innerWidth/window.innerHeight;let n=X.right-X.left,r=(X.top-X.bottom)/2,i=n/2,o=r/a,s=i/a;X.zoom=Math.min(s,o),X.updateProjectionMatrix();let c=Q.tankDiameter*2.5;X.position.copy(e).addScaledVector(t,-c)}else{let n=X.fov,r=X.aspect||window.innerWidth/window.innerHeight,i=n*Math.PI/360,o=a/Math.sin(i);if(r<1){let e=Math.atan(Math.tan(i)*r),t=a/Math.sin(e);o=Math.max(o,t)}X.position.copy(e).addScaledVector(t,-o)}Yd.target.copy(e),Yd.update()}function Lf(){if(!X||!Yd||!Q)return;let e=Q.crossSectionType||`Vertical`,t=Q.tankDiameter*2.5,n=mf(Q),r=hf(Q),i=Z?Z.position.x:0,a=Z?Z.position.y:0,o=Z?Z.position.z:0;if(e===`Horizontal`){let e=a+(r+Q.crossSectionHeight*Q.liquidHeight);X.position.y>e?X.position.set(i+1e-5,a-t+n,o+1e-5):X.position.set(i,a+t+n,o),Yd.target.set(i,e,o)}else{let e=pf&&pf.mesh?pf.mesh.ntheta:Q.meshNtheta||24,r=2*Math.PI/e,s=Q.crossSectionAngle===void 0?.125:Q.crossSectionAngle,c=Math.round(s*2*Math.PI/r)%e;c<0&&(c+=e);let l;l=pf&&pf.mesh?pf.mesh.thetaNode[c]+(pf.mesh.thetaNode[c+1]-pf.mesh.thetaNode[c])/2:c*r+r/2;let u=(Q.crossSectionOffset||0)*(pf&&pf.mesh?pf.mesh.rNode[pf.mesh.nr]:Q.tankDiameter/2),d=i+u*Math.sin(l),f=o+u*Math.cos(l),p=a+n,m=l+Math.PI/2,h=X.position.x-d,g=X.position.z-f,_=Math.cos(m),v=-Math.sin(m);if(h*_+g*v>0){let e=m+Math.PI;X.position.set(d+t*Math.cos(e),p,f-t*Math.sin(e))}else X.position.set(d+t*Math.cos(m),p,f-t*Math.sin(m));Yd.target.set(d,p,f)}X.isOrthographicCamera&&(X.zoom=1,X.updateProjectionMatrix()),Yd.update()}var Rf=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},zf=class extends Rf{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function Bf(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var Vf={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:Bf,toHexString:Bf},Hf={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},Uf=[Vf,Hf,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=Hf.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return Hf.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=Hf.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return Hf.toHexString(i)}}];function Wf(e){return Uf.find(t=>t.match(e))}var Gf=class extends Rf{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Wf(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=Bf(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Kf=class extends Rf{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},qf=class extends Rf{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},Jf=class extends Rf{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},Yf=class extends Rf{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Xf=`.lil-gui {
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
}`;function Zf(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var Qf=!1,$f=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!Qf&&o&&(Zf(Xf),Qf=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new Jf(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new qf(this,e,t,n,r,i);case`boolean`:return new zf(this,e,t);case`string`:return new Yf(this,e,t);case`function`:return new Kf(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Gf(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof Kf||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof Kf)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};function ep(e,t){window.updateCameraProjection=jf,window.appParams=e,e.crossSectionAngle===void 0&&(e.crossSectionAngle=.125),e.crossSectionOffset===void 0&&(e.crossSectionOffset=0);let n=new $f({title:`撹拌槽 CFD (Stirred Tank)`});window.appGui=n,n.domElement.style.position=`fixed`,n.domElement.style.top=`0px`,n.domElement.style.left=`36px`,n.domElement.style.right=`auto`,n.domElement.style.width=`300px`,n.domElement.style.zIndex=`120`,n.domElement.style.maxHeight=`100vh`,n.domElement.style.overflowY=`auto`;let r=new $f({title:`物性設定 (Fluid & Particle Properties)`});window.appGuiFluidProps=r,r.domElement.style.position=`fixed`,r.domElement.style.top=`0px`,r.domElement.style.left=`336px`,r.domElement.style.width=`280px`,r.domElement.style.right=`auto`,r.domElement.style.zIndex=`120`,r.domElement.style.maxHeight=`100vh`,r.domElement.style.overflowY=`auto`,r.domElement.style.display=`none`;let i=r.domElement,a=i.querySelector(`.title`);a&&window.makeCFDPanelDraggable&&window.makeCFDPanelDraggable(i,a),window.appGuiParticleProps=r;let o=new $f({title:`物性設定`});window.appGuiProperties=o,o.domElement.style.display=`none`;let s=()=>{},c=()=>{},l,u=()=>{},d,f;(()=>{if(document.getElementById(`computing-indicator`))return;if(!document.getElementById(`computing-indicator-style`)){let e=document.createElement(`style`);e.id=`computing-indicator-style`,e.textContent=`
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
      `,document.head.appendChild(e)}let e=document.createElement(`div`);e.id=`computing-indicator`,e.innerHTML=`<div class="ci-spinner"></div><span>計算中<span class="ci-dots"></span></span>`,document.body.appendChild(e)})();let p=null,m=0;window.showComputingIndicator=()=>{m++,clearTimeout(p);let e=document.getElementById(`computing-indicator`);e&&e.classList.add(`ci-visible`)},window.hideComputingIndicator=()=>{m=Math.max(0,m-1),!(m>0)&&(clearTimeout(p),p=setTimeout(()=>{let e=document.getElementById(`computing-indicator`);e&&e.classList.remove(`ci-visible`)},120))},window.notifyComputingDone=window.hideComputingIndicator;let h=e=>{window.showComputingIndicator(),setTimeout(()=>{try{let t=Of(e);t&&typeof t.then==`function`?t.then(()=>window.hideComputingIndicator()).catch(()=>window.hideComputingIndicator()):window.hideComputingIndicator()}catch(e){throw window.hideComputingIndicator(),e}},0)},g=()=>{h(e)},_=()=>{Af(),h(e)},v=r.addFolder(`液体物性 (Fluid Properties)`);v.open(),v.add(e,`density`,500,2e3,10).name(`密度 (kg/m³)`).onChange(g);let y=v.add(e,`viscosity`,.001,100,.001).name(`粘度 (Pa・s)`).onChange(g),b=v.add(e,`powerLawK`,.001,100,.001).name(`一貫性係数 K`).onChange(g),x=v.add(e,`powerLawN`,.1,2,.05).name(`流動挙動指数 n`).onChange(g),S=v.add(e,`yieldStress`,0,100,1).name(`降伏応力 τ0 (Pa)`).onChange(g),C=v.add(e,`muMin`,1e-5,1,1e-5).name(`粘度下限 μ_min (Pa・s)`).onChange(g),w=v.add(e,`muMax`,.01,1e3,.01).name(`粘度上限 μ_max (Pa・s)`).onChange(g);v.add(e,`heatCapacity`,1e3,5e3,50).name(`比熱 (J/kg・K)`).onChange(g),v.add(e,`thermalConductivity`,.1,5,.1).name(`熱伝導率 (W/m・K)`).onChange(g);let T=v.add(e,`turbulenceIntensity`,0,.1,.001).name(`乱流強度 (Turbulence)`).onChange(g);e.tempDependence===void 0&&(e.tempDependence=!1),e.andradeT_ref===void 0&&(e.andradeT_ref=298.15),e.andradeEa1===void 0&&(e.andradeEa1=3e3),e.andradeEa2===void 0&&(e.andradeEa2=3e3);let E=v.addFolder(`🌡️ 温度依存性 (Andrade)`),D,O,k,A,j=()=>{let t=!!e.tempDependence;[D,O,k,A].forEach(e=>{e&&(t?e.enable():e.disable(),e.domElement.closest(`.row`)&&(e.domElement.closest(`.row`).style.opacity=t?`1`:`0.4`))})};E.add(e,`tempDependence`).name(`温度依存性 ON/OFF`).onChange(()=>{j(),g()}),k=E.add(e,`andradeT_ref`,273.15,373.15,.5).name(`基準温度 T_ref (K)`).onChange(g),D=E.add(e,`andradeEa1`,0,1e5,100).name(`Ea1 / R  降伏値項 (K)`).onChange(g),O=E.add(e,`andradeEa2`,0,1e5,100).name(`Ea2 / R  粘度項  (K)`).onChange(g),A=E.add({showArrhenius:()=>{let e=document.getElementById(`arrhenius-chart-modal`);e&&(e.style.display=`block`,typeof window.updateArrheniusCharts==`function`&&window.updateArrheniusCharts())}},`showArrhenius`).name(`📈 アレニウスプロットを表示`),j(),window.updateTempDepUI=j;let M=null,N=null;c=()=>{let t=document.getElementById(`rheology-chart-modal`);if(!t||t.style.display!==`block`||typeof Chart>`u`)return;let n=e.fluidModel,r=e.viscosity,i=e.powerLawK,a=e.powerLawN,o=e.yieldStress,s=.01,c=[],l=[];for(let e=0;e<=60;e++){let t=e/60,u=10**(Math.log10(s)+t*(Math.log10(1e3)-Math.log10(s))),d,f;switch(n){case`Power-law`:d=i*u**+a,f=i*u**(a-1);break;case`Bingham`:d=o+r*u,f=r+o/u;break;case`Herschel-Bulkley`:d=o+i*u**+a,f=o/u+i*u**(a-1);break;default:d=r*u,f=r}c.push({x:u,y:Math.max(d,0)}),l.push({x:u,y:Math.max(f,1e-9)})}let u=document.getElementById(`rheology-model-info`);if(u){let e=``;switch(n){case`Newtonian`:e=`Newtonian:  τ = μ・γ̇   |   μ = ${r.toPrecision(4)} Pa・s`;break;case`Power-law`:e=`Power-law:  τ = K・γ̇ⁿ   |   K = ${i.toPrecision(4)},  n = ${a.toPrecision(3)}`;break;case`Bingham`:e=`Bingham:  τ = τ₀ + μp・γ̇   |   τ₀ = ${o.toPrecision(4)} Pa,  μp = ${r.toPrecision(4)} Pa・s`;break;case`Herschel-Bulkley`:e=`Herschel-Bulkley:  τ = τ₀ + K・γ̇ⁿ   |   τ₀ = ${o.toPrecision(4)} Pa,  K = ${i.toPrecision(4)},  n = ${a.toPrecision(3)}`;break}u.textContent=e}let d=`#ccc`,f=`rgba(255,255,255,0.1)`,p=document.getElementById(`rheology-flow-canvas`).getContext(`2d`);M&&M.destroy(),M=new Chart(p,{type:`line`,data:{datasets:[{label:`せん断応力 τ (Pa)`,data:c,borderColor:`rgba(255, 99, 132, 1)`,backgroundColor:`rgba(255, 99, 132, 0.15)`,borderWidth:2,pointRadius:0,tension:.15,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`せん断速度 γ̇ (1/s)`,color:d},ticks:{color:d},grid:{color:f}},y:{type:`linear`,beginAtZero:!0,title:{display:!0,text:`せん断応力 τ (Pa)`,color:d},ticks:{color:d},grid:{color:f}}},plugins:{legend:{labels:{color:d}},title:{display:!0,text:`流動曲線 (Flow Curve)`,color:`#fff`}}}});let m=document.getElementById(`rheology-visc-canvas`).getContext(`2d`);N&&N.destroy(),N=new Chart(m,{type:`line`,data:{datasets:[{label:`見かけ粘度 μ_app (Pa・s)`,data:l,borderColor:`rgba(54, 162, 235, 1)`,backgroundColor:`rgba(54, 162, 235, 0.15)`,borderWidth:2,pointRadius:0,tension:.15,fill:!1}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`logarithmic`,title:{display:!0,text:`せん断速度 γ̇ (1/s)`,color:d},ticks:{color:d},grid:{color:f}},y:{type:`logarithmic`,title:{display:!0,text:`見かけ粘度 μ_app (Pa・s)`,color:d},ticks:{color:d},grid:{color:f}}},plugins:{legend:{labels:{color:d}},title:{display:!0,text:`粘性曲線 (Viscosity Curve)`,color:`#fff`}}}})},v.add({showRheologyChart:()=>{let e=document.getElementById(`rheology-chart-modal`);e&&(e.style.display=`block`,c())}},`showRheologyChart`).name(`📈 流動曲線・粘性曲線を表示`);let P=null,F=null;window.updateArrheniusCharts=()=>{let t=document.getElementById(`arrhenius-chart-modal`);if(!t||t.style.display!==`block`||typeof Chart>`u`)return;let n=e.andradeEa1||0,r=e.andradeEa2||0,i=e.andradeT_ref||298.15,a=e.yieldStress||10,o=e.powerLawK||1,s=273.15,c=[],l=[],u=[],d=[];for(let e=0;e<=50;e++){let t=s+(373.15-s)*e/50,f=1/t,p=a*Math.exp(n*(1/t-1/i)),m=o*Math.exp(r*(1/t-1/i));c.push({x:t,y:Math.max(p,1e-12)}),l.push({x:t,y:Math.max(m,1e-12)}),u.push({x:f*1e3,y:Math.log(Math.max(p,1e-12))}),d.push({x:f*1e3,y:Math.log(Math.max(m,1e-12))})}let f=`#ccc`,p=`rgba(255,255,255,0.1)`,m=document.getElementById(`arrhenius-tau0-canvas`);if(!m)return;P&&P.destroy(),P=new Chart(m.getContext(`2d`),{type:`line`,data:{datasets:[{label:`τ₀(T)  [Pa]`,data:c,borderColor:`rgba(255, 165, 0, 1)`,backgroundColor:`rgba(255, 165, 0, 0.1)`,borderWidth:2,pointRadius:0,tension:.1,yAxisID:`y`},{label:`ln τ₀  vs  1000/T`,data:u,borderColor:`rgba(255, 99, 132, 1)`,backgroundColor:`rgba(255, 99, 132, 0.0)`,borderWidth:2,pointRadius:0,tension:.1,borderDash:[5,3],yAxisID:`y2`,xAxisID:`x2`}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`温度 T (K)`,color:f},ticks:{color:f},grid:{color:p}},x2:{type:`linear`,position:`top`,title:{display:!0,text:`1000/T (K⁻¹)`,color:`rgba(255,99,132,0.8)`},ticks:{color:`rgba(255,99,132,0.8)`},grid:{display:!1}},y:{type:`linear`,title:{display:!0,text:`τ₀ (Pa)`,color:f},ticks:{color:f},grid:{color:p}},y2:{type:`linear`,position:`right`,title:{display:!0,text:`ln τ₀`,color:`rgba(255,99,132,0.8)`},ticks:{color:`rgba(255,99,132,0.8)`},grid:{display:!1}}},plugins:{legend:{labels:{color:f}},title:{display:!0,text:`降伏値 τ₀(T) アレニウスプロット  Ea1/R = ${n.toFixed(0)} K`,color:`#fff`}}}});let h=document.getElementById(`arrhenius-K-canvas`);if(!h)return;F&&F.destroy(),F=new Chart(h.getContext(`2d`),{type:`line`,data:{datasets:[{label:`K(T)  [Pa·sⁿ]`,data:l,borderColor:`rgba(54, 210, 210, 1)`,backgroundColor:`rgba(54, 210, 210, 0.1)`,borderWidth:2,pointRadius:0,tension:.1,yAxisID:`y`},{label:`ln K  vs  1000/T`,data:d,borderColor:`rgba(54, 162, 235, 1)`,backgroundColor:`rgba(54, 162, 235, 0.0)`,borderWidth:2,pointRadius:0,tension:.1,borderDash:[5,3],yAxisID:`y2`,xAxisID:`x2`}]},options:{responsive:!0,maintainAspectRatio:!1,animation:!1,scales:{x:{type:`linear`,title:{display:!0,text:`温度 T (K)`,color:f},ticks:{color:f},grid:{color:p}},x2:{type:`linear`,position:`top`,title:{display:!0,text:`1000/T (K⁻¹)`,color:`rgba(54,162,235,0.8)`},ticks:{color:`rgba(54,162,235,0.8)`},grid:{display:!1}},y:{type:`linear`,title:{display:!0,text:`K (Pa·sⁿ)`,color:f},ticks:{color:f},grid:{color:p}},y2:{type:`linear`,position:`right`,title:{display:!0,text:`ln K`,color:`rgba(54,162,235,0.8)`},ticks:{color:`rgba(54,162,235,0.8)`},grid:{display:!1}}},plugins:{legend:{labels:{color:f}},title:{display:!0,text:`粘度項 K(T) アレニウスプロット  Ea2/R = ${r.toFixed(0)} K`,color:`#fff`}}}});let g=document.getElementById(`arrhenius-model-info`);g&&(g.textContent=`τ = τ₀_ref·exp(Ea1/R·(1/T − 1/T_ref)) + [K_ref·exp(Ea2/R·(1/T − 1/T_ref))]·γ̇ⁿ   |   T_ref=${i.toFixed(2)} K,  Ea1/R=${n.toFixed(0)} K,  Ea2/R=${r.toFixed(0)} K`)};let I=r.addFolder(`粒子物性 (Particle Properties)`);I.open(),I.add(e,`showParticles`).name(`粒子追跡(DPM)の表示`).onChange(e=>{u(),g()}),I.add(e,`particleDensity`,500,5e3).name(`粒子密度 (kg/m³)`),I.add(e,`particleDiameter`,.1,1e3).name(`平均粒子径 (μm)`);let L=I.addFolder(`DEM物理モデル (DEM Physics)`);L.add(e,`demKn`,100,5e4).name(`法線ばね定数 kn`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.kn=e)}),L.add(e,`demGn`,0,100).name(`法線減衰係数 gn`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.gn=e)}),L.add(e,`demKt`,100,5e4).name(`接線ばね定数 kt`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.kt=e)}),L.add(e,`demGt`,0,100).name(`接線減衰係数 gt`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.gt=e)}),L.add(e,`demMu`,0,1).name(`摩擦係数 μ`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.mu=e)}),L.add(e,`demSurfaceEnergy`,0,10,.01).name(`表面エネルギー (JKR γ)`).onChange(e=>{window.app?.demSolver&&(window.app.demSolver.surfaceEnergy=e)}),I.add(e,`particleDistributionType`,[`Uniform`,`Log-Normal`,`Normal`]).name(`粒度分布タイプ`).onChange(()=>{u(),Af()}),l=I.add(e,`particleSizeStdDev`,0,500).name(`標準偏差 (μm)`).onChange(()=>{window.dpmParticles=[]});let ee=null,te=[],ne=[],R=(e,t,n)=>{let r=document.getElementById(`dpm-chart-canvas`).getContext(`2d`);ee&&ee.destroy();let i=e.concat(t),a=Math.max(.1,Math.min(...i)),o=Math.max(...i,a*1.1),s=e=>{let t=Array(20).fill(0);if(n===`linear`){let n=(o-a)/20||.1;e.forEach(e=>{let r=Math.floor((e-a)/n);r>=20&&(r=19),r<0&&(r=0),t[r]++})}else{let n=Math.log10(a),r=(Math.log10(o)-n)/20||.1;e.forEach(e=>{let i=Math.floor((Math.log10(Math.max(.1,e))-n)/r);i>=20&&(i=19),i<0&&(i=0),t[i]++})}return t},c=s(e),l=s(t),u;if(n===`linear`){let e=(o-a)/20||.1;u=c.map((t,n)=>{let r=a+n*e,i=a+(n+1)*e;return`${r.toFixed(1)} - ${i.toFixed(1)}`})}else{let e=Math.log10(a),t=(Math.log10(o)-e)/20||.1;u=c.map((n,r)=>{let i=10**(e+r*t),a=10**(e+(r+1)*t);return`${i.toFixed(1)} - ${a.toFixed(1)}`})}ee=new Chart(r,{type:`bar`,data:{labels:u,datasets:[{label:`初期粒子 (Initial)`,data:c,backgroundColor:`rgba(200, 200, 200, 0.5)`,borderColor:`rgba(150, 150, 150, 1)`,borderWidth:1},{label:`現在（凝集後） (Current)`,data:l,backgroundColor:`rgba(54, 162, 235, 0.7)`,borderColor:`rgba(54, 162, 235, 1)`,borderWidth:1}]},options:{scales:{x:{title:{display:!0,text:`粒子径 / 凝集塊相当径 (μm)`}},y:{beginAtZero:!0,title:{display:!0,text:`頻度`}}}}})};document.querySelectorAll(`input[name="dpm-chart-xscale"]`).forEach(e=>{e.addEventListener(`change`,e=>{te.length>0&&R(te,ne,e.target.value)})}),I.add({showChart:()=>{let t=document.getElementById(`dpm-chart-modal`);if(!t)return;t.style.display=`block`;let n=[],r=e.particleCount||1e3;for(let t=0;t<r;t++){let t=e.particleDiameter||100;if(e.particleDistributionType===`Log-Normal`){let n=e.particleDiameter||100,r=e.particleSizeStdDev||20;if(r>0){let e=r*r,i=Math.log(n*n/Math.sqrt(e+n*n)),a=Math.sqrt(Math.log(e/(n*n)+1)),o=0,s=0;for(;o===0;)o=Math.random();for(;s===0;)s=Math.random();let c=Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*s);t=Math.exp(i+a*c)}t=Math.max(.1,t)}else if(e.particleDistributionType===`Normal`){let n=e.particleDiameter||100,r=e.particleSizeStdDev||20;if(r>0){let e=0,i=0;for(;e===0;)e=Math.random();for(;i===0;)i=Math.random();t=n+r*(Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*i))}t=Math.max(.1,t)}n.push(t)}let i=[];if(window.app&&window.app.demSolver&&window.app.demSolver.numParticles>0){let e=window.app.demSolver,t=e.numParticles,n=new Int32Array(t);for(let e=0;e<t;e++)n[e]=e;let r=e=>n[e]===e?e:(n[e]=r(n[e]),n[e]),a=(e,t)=>{let i=r(e),a=r(t);i!==a&&(n[i]=a)};for(let n=0;n<t;n++)for(let r=n+1;r<t;r++){let t=e.x[n]-e.x[r],i=e.y[n]-e.y[r],o=e.z[n]-e.z[r];t*t+i*i+o*o<((e.radius[n]+e.radius[r])*1.05)**2&&a(n,r)}let o=new Float32Array(t);for(let n=0;n<t;n++){let t=r(n),i=e.radius[n];o[t]+=4/3*Math.PI*i*i*i}for(let e=0;e<t;e++)if(o[e]>0){let t=2*(o[e]/(4/3*Math.PI))**(1/3);i.push(t*1e6)}}else i=[...n];te=n,ne=i;let a=document.querySelector(`input[name="dpm-chart-xscale"]:checked`),o=a?a.value:`log`;n.concat(i),R(n,i,o);let s=e=>{if(!e||e.length===0)return{n:0,mean:0,median:0,std:0,min:0,max:0};let t=[...e].sort((e,t)=>e-t),n=t.length,r=t[0],i=t[n-1],a=n%2==0?(t[n/2-1]+t[n/2])/2:t[Math.floor(n/2)],o=0;for(let e=0;e<n;e++)o+=t[e];let s=o/n,c=0;for(let e=0;e<n;e++)c+=(t[e]-s)**2;return{n,mean:s,median:a,std:Math.sqrt(c/n),min:r,max:i}},c=s(n),l=s(i),u=document.getElementById(`dpm-stats-container`);u&&(u.innerHTML=`
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
              <td style="padding:6px; border-bottom:1px solid #222;">${c.n}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${c.mean.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${c.median.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${c.std.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${c.min.toFixed(1)}</td>
              <td style="padding:6px; border-bottom:1px solid #222;">${c.max.toFixed(1)}</td>
            </tr>
            <tr style="background:rgba(54, 162, 235, 0.1);">
              <td style="padding:6px; text-align:left; color:#69c; font-weight:bold;">現在・凝集後 (Current)</td>
              <td style="padding:6px;">${l.n}</td>
              <td style="padding:6px; color:${l.mean>c.mean?`#ff6666`:`#ddd`}; font-weight:${l.mean>c.mean?`bold`:`normal`}">${l.mean.toFixed(1)}</td>
              <td style="padding:6px;">${l.median.toFixed(1)}</td>
              <td style="padding:6px;">${l.std.toFixed(1)}</td>
              <td style="padding:6px;">${l.min.toFixed(1)}</td>
              <td style="padding:6px; color:${l.max>c.max?`#ff6666`:`#ddd`}; font-weight:${l.max>c.max?`bold`:`normal`}">${l.max.toFixed(1)}</td>
            </tr>
          </tbody>
        </table>
        <div style="font-size:10.5px; color:#777; margin-top:6px; text-align:right;">
          ※ 現在（凝集後）の要素数は、凝集して1つのクラスターになったものを1個としてカウントしています。
        </div>
      `)}},`showChart`).name(`📊 粒度分布グラフを表示`),(()=>{let e=()=>{let e=n.domElement;if(!e||document.getElementById(`gui-preset-bar`))return;let t=[{value:``,label:`-- カスタム --`},{value:`large`,label:`🔵 ラージスケール (φ1.5m)`},{value:`pilot`,label:`🟢 パイロットスケール (φ50cm)`},{value:`bench`,label:`🟡 ベンチスケール (φ30cm)`},{value:`lab`,label:`🔴 ラボスケール (φ8cm)`}],r=document.createElement(`div`);r.id=`gui-preset-bar`,r.style.cssText=[`padding:6px 8px 5px`,`border-bottom:1px solid rgba(255,255,255,0.12)`,`background:rgba(0,0,0,0.25)`,`display:flex`,`flex-direction:column`,`gap:3px`].join(`;`);let i=document.createElement(`div`);i.style.cssText=`display:flex;align-items:center;gap:4px;`;let a=document.createElement(`span`);a.textContent=`🏭`,a.style.cssText=`font-size:13px;flex-shrink:0;`;let o=document.createElement(`select`);o.id=`preset-select`,o.style.cssText=[`flex:1`,`background:#2a2a2a`,`color:#ffcc00`,`border:1px solid rgba(255,204,0,0.35)`,`border-radius:4px`,`padding:3px 5px`,`font-size:10.5px`,`font-weight:bold`,`cursor:pointer`,`outline:none`,`font-family:monospace`].join(`;`),t.forEach(e=>{let t=document.createElement(`option`);t.value=e.value,t.textContent=e.label,o.appendChild(t)});let s=document.createElement(`button`);s.id=`btn-preset-edit`,s.textContent=`✏️`,s.title=`プリセット条件を編集`,s.style.cssText=[`background:rgba(255,255,255,0.07)`,`border:1px solid rgba(255,255,255,0.2)`,`color:#aaa`,`border-radius:4px`,`cursor:pointer`,`font-size:12px`,`padding:2px 6px`,`flex:0 0 auto`,`width:28px`,`height:24px`,`box-sizing:border-box`,`line-height:1`,`display:inline-flex`,`align-items:center`,`justify-content:center`].join(`;`),i.appendChild(a),i.appendChild(o),i.appendChild(s);let c=document.createElement(`div`);c.id=`preset-desc`,c.style.cssText=`font-size:9.5px;color:#888;padding:0 2px;min-height:12px;line-height:1.3;`,r.appendChild(i),r.appendChild(c);let l=e.querySelector(`.title`);l&&l.nextSibling?e.insertBefore(r,l.nextSibling):e.appendChild(r),o.addEventListener(`change`,e=>{let t=e.target.value;t&&window.applyReactorPreset&&window.applyReactorPreset(t),c.textContent=``,t&&window.reactorPresets&&window.reactorPresets[t]&&(c.textContent=window.reactorPresets[t].desc)}),s.addEventListener(`click`,()=>{let e=document.getElementById(`preset-edit-modal`);e&&(window._renderPresetEditModal&&window._renderPresetEditModal(),e.style.display=`block`)})};e();let t=setInterval(()=>{if(document.getElementById(`gui-preset-bar`)){clearInterval(t);return}e()},300)})();let re=n.addFolder(`形状設定 (Geometry)`),ie=re.addFolder(`タンク (Tank)`),z,ae=()=>{let t=(Number(e.tankHeight)||0)+Number(Kd.getMirrorDepth(e));z&&z.max(t),e.liquidHeight>t&&(e.liquidHeight=t,z&&z.updateDisplay());let n=e.tankDiameter/2,r=e.liquidHeight,i=Number(Kd.getMirrorDepth(e)),a=0,o=Math.min(r,i);if(o>0){if(e.mirrorPlateType===`Cone`){let e=o/i*n;a+=1/3*Math.PI*e*e*o}else if(e.mirrorPlateType===`FullHemisphere`||e.mirrorPlateType===`Dish`||e.mirrorPlateType===`HalfEllipse`){let t=1;e.mirrorPlateType===`Dish`&&(t=.25),e.mirrorPlateType===`HalfEllipse`&&(t=.5);let r=o/t;a+=t*(Math.PI*r*r/3)*(3*n-r)}}if(r>i){let e=r-i;a+=Math.PI*n*n*e}e.liquidVolumeLiters=(a*1e3).toFixed(1),window.ctrlLiquidVolume&&window.ctrlLiquidVolume.updateDisplay()};ie.add(e,`tankDiameter`,.1,5).name(`タンク直径`),ie.add(e,`tankHeight`,.1,5).name(`タンク直胴部高さ`),z=ie.add(e,`liquidHeight`,.1,5).name(`液深 (総高さ)`),e.liquidVolumeLiters=e.liquidVolumeLiters||`0.0`,window.ctrlLiquidVolume=ie.add(e,`liquidVolumeLiters`).name(`概算液量 (L)`).disable(),ae();let oe=re.addFolder(`鏡板 (Mirror Plate)`);oe.add(e,`mirrorPlateType`,[`FullHemisphere`,`Dish`,`HalfEllipse`,`Cone`,`None`]).name(`形状タイプ`);let se=re.addFolder(`インペラ (Impeller)`),ce=()=>{let t=Kd.getClearanceRange(e);le&&(le.min(t.min).max(t.max),e.impellerClearance<t.min&&(e.impellerClearance=t.min),e.impellerClearance>t.max&&(e.impellerClearance=t.max),le.updateDisplay())};se.add(e,`impellerType`,[`FlatPropeller`,`FlatPaddle`,`InclinedPaddle`,`Turbine`,`Pfaudler`,`Anchor`,`Ribbon`,`Rushton`]).name(`種類`).onChange(t=>{let n=Math.max(e.bladeWidth,.1);switch(t){case`FlatPropeller`:case`InclinedPaddle`:case`Pfaudler`:e.mrfRadialMargin=1.1,e.mrfVerticalMarginTop=n*.5,e.mrfVerticalMarginBottom=n*1.5;break;case`FlatPaddle`:case`Turbine`:case`Rushton`:e.mrfRadialMargin=1.35,e.mrfVerticalMarginTop=n*.2+.05,e.mrfVerticalMarginBottom=n*.2+.05;break;case`Anchor`:case`Ribbon`:e.mrfRadialMargin=1.05,e.mrfVerticalMarginTop=.05,e.mrfVerticalMarginBottom=.05;break}ue&&(t===`Pfaudler`?ue.show():ue.hide()),de&&(t===`Pfaudler`?de.show():de.hide()),window.updateAllGuiDisplays&&window.updateAllGuiDisplays(),_()}),se.add(e,`impellerDiameter`,.05,4).name(`直径 (m)`).onChange(_);let le=se.add(e,`impellerClearance`,.05,4).name(`クリアランス (m)`).onChange(_);se.add(e,`bladeCount`,2,12,1).name(`ブレード枚数`).onChange(_),se.add(e,`bladeWidth`,.01,1).name(`ブレード幅 (m)`).onChange(_),se.add(e,`bladeAngle`,0,90).name(`角度 (度)`).onChange(_),e.pfaudlerLiftAngle===void 0&&(e.pfaudlerLiftAngle=25),e.pfaudlerSweepAngle===void 0&&(e.pfaudlerSweepAngle=35);let ue=se.add(e,`pfaudlerLiftAngle`,0,60).name(`翼跳ね上げ角 (度)`).onChange(_),de=se.add(e,`pfaudlerSweepAngle`,0,60).name(`翼反り角 (度・上面視)`).onChange(_);e.impellerType!==`Pfaudler`&&(ue.hide(),de.hide());let fe=null,pe=()=>{e.mirrorPlateType===`None`?(e.jacketCoverage!==`ShellOnly`&&(e.jacketCoverage=`ShellOnly`),fe&&(fe.updateDisplay(),fe.disable())):fe&&fe.enable(),window._updateInterfaceBCUI&&window._updateInterfaceBCUI()};ce(),pe();let me={get shaftDiameterMm(){return e.shaftDiameter===void 0?0:e.shaftDiameter*1e3},set shaftDiameterMm(t){e.shaftDiameter=t<=0?void 0:t/1e3,_()}},he=se.add(me,`shaftDiameterMm`,0,100,.1).name(`シャフト径 (mm, 0=自動)`).onChange(()=>{});Object.defineProperty(me,"_ctrl",{value:he}),window._shaftDiameterProxy=me;let ge=re.addFolder(`壁条件 (Wall / ジャケット)`);ge.add(e,`jacketType`,[`None`,`Single`,`Half pipe`]).name(`ジャケット種類`).onChange(_),fe=ge.add(e,`jacketCoverage`,[`Full`,`ShellOnly`]).name(`ジャケット形式 (範囲)`).onChange(()=>{window._updateInterfaceBCUI&&window._updateInterfaceBCUI(),g()}),ge.add(e,`jacketTemp`,273,500,1).name(`温度 (K)`).onChange(g),ge.add(e,`ua`,0,5e3,50).name(`伝熱係数 (UA)`).onChange(g),pe();let _e=re.addFolder(`邪魔板 (Baffle)`);_e.add(e,`baffleCount`,0,8,1).name(`設置枚数`).onChange(_),_e.add(e,`baffleWidth`,.01,.5).name(`幅`).onChange(_),e.baffleGap===void 0&&(e.baffleGap=e.tankDiameter/75);let ve=_e.add(e,`baffleGap`,0,.1,.001).name(`壁との隙間 (m)`).onChange(_),ye=()=>{let t=e.tankDiameter/50;ve&&ve.max(t),e.baffleGap>t&&(e.baffleGap=t,ve&&ve.updateDisplay())};ie.controllers.forEach(e=>e.onChange(()=>{ae(),ce(),ye(),_()})),oe.controllers.forEach(e=>e.onChange(()=>{ae(),ce(),pe(),_()})),ye(),e.coilUa===void 0&&(e.coilUa=500);let be=re.addFolder(`伝熱コイル (Heat Coil)`);be.add(e,`coilEnabled`).name(`コイルの有効化`).onChange(_),be.add(e,`coilRadius`,.01,.5).name(`管半径`).onChange(_),be.add(e,`coilTurns`,1,20,1).name(`巻き数`).onChange(_),be.add(e,`coilHeatSource`,[`Steam`,`Water`]).name(`熱媒`),be.add(e,`coilTemp`,273,500).name(`熱媒温度 (K)`).onChange(g),be.add(e,`coilUa`,0,5e3,50).name(`総括伝熱係数 U (W/m²K)`).onChange(g);let xe=new $f({title:`表示・操作パネル`});window.appGuiLeft=xe,xe.domElement.style.position=`fixed`,xe.domElement.style.top=`0px`,xe.domElement.style.right=`336px`,xe.domElement.style.left=`auto`,xe.domElement.style.width=`300px`,xe.domElement.style.maxHeight=`100vh`,xe.domElement.style.overflowY=`auto`;let Se=xe.addFolder(`表示 (Visualization)`),Ce,we,Te,B,Ee,De,Oe,V,ke,H,Ae,je,Me,Ne,Pe;e.showTurbViscosity===void 0&&(e.showTurbViscosity=!1),e.currentMinTurbVisc===void 0&&(e.currentMinTurbVisc=0),e.currentMaxTurbVisc===void 0&&(e.currentMaxTurbVisc=0),window.toggleCrossSectionView=()=>{e.crossSectionView=!e.crossSectionView;let t=e.crossSectionView;return t?e.showParticles&&(e.showParticleConc=!0,e.showFluidMesh=!1,e.showPressureMesh=!1):e.showParticleConc=!1,Te&&Te.updateDisplay(),Ce&&Ce.updateDisplay(),we&&we.updateDisplay(),V&&V.updateDisplay(),ke&&ke.updateDisplay(),window.updateAllGuiDisplays&&window.updateAllGuiDisplays(),g(),t};let Fe=Se.addFolder(`攪拌槽構造の表示`);Fe.addColor(e,`backgroundColor`).name(`背景色`).onChange(g),Fe.add(e,`showTank`).name(`タンクの表示`).onChange(g),Fe.add(e,`tankOpacity`,0,1).name(`タンクの透明度`).onChange(g),Fe.add(e,`showImpeller`).name(`インペラの表示`).onChange(g),Fe.add(e,`showBaffle`).name(`邪魔板の表示`).onChange(g),Fe.add(e,`showCoil`).name(`コイルの表示`).onChange(g),Fe.add(e,`showMRFZone`).name(`MRFゾーンの表示`).onChange(e=>{f&&f.updateDisplay(),g()}),d=Fe.controllers[Fe.controllers.length-1],e.showDimensions===void 0&&(e.showDimensions=!1),Fe.add(e,`showDimensions`).name(`寸法を表示`).onChange(t=>{W(t,e)});let Ie=Se.addFolder(`可視化方法の設定`);Ie.add(e,`showGridMesh`).name(`メッシュの表示`).onChange(g),Ie.add(e,`gridMeshStyle`,[`Wireframe`,`Points`]).name(`メッシュ表示方法`).onChange(g),Ie.add(e,`crossSectionType`,[`Vertical`,`Horizontal`]).name(`断面の向き`).onChange(e=>{U(e),g()}),Me=Ie.add(e,`crossSectionHeight`,0,1).name(`水平断面の高さ`).onChange(g),Ne=Ie.add(e,`crossSectionAngle`,0,1,.01).name(`垂直断面の切り出し角度`).onChange(g),Pe=Ie.add(e,`crossSectionOffset`,-1,1,.01).name(`垂直断面の切り出し位置`).onChange(g),Ie.add(e,`displayStyle`,[`Points`,`Contour`]).name(`メッシュ描画形式`).onChange(g),e.showGridMesh===void 0&&(e.showGridMesh=!0),e.gridMeshStyle===void 0&&(e.gridMeshStyle=`Wireframe`),Ie.add(e,`interpolateContour`).name(`コンターの補間 (Smooth)`).onChange(g),Ie.add(e,`colorScaleMode`,[`Absolute`,`Relative`]).name(`カラースケール基準`).onChange(g),e.colorLogScale===void 0&&(e.colorLogScale=!1),Ie.add(e,`colorLogScale`).name(`カラースケールを対数表示`).onChange(g),Ie.add(e,`viscosityLogScale`).name(`粘度を対数スケール表示`).onChange(g);let Le=Se.addFolder(`温度・流動・圧力の表示`);Ce=Le.add(e,`showFluidMesh`).name(`温度分布の表示`).onChange(t=>{t&&(e.showPressureMesh=!1,we.updateDisplay(),e.showParticleConc=!1,Te.updateDisplay(),e.showViscosityRegion=!1,V&&V.updateDisplay(),e.showTurbViscosity=!1,ke&&ke.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),g()}),we=Le.add(e,`showPressureMesh`).name(`圧力分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,Ce.updateDisplay(),e.showParticleConc=!1,Te.updateDisplay(),e.showViscosityRegion=!1,V&&V.updateDisplay(),e.showTurbViscosity=!1,ke&&ke.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),g()}),Le.add(e,`showVelocityVector`).name(`速度ベクトルの表示`).onChange(e=>{H&&(e?H.show():H.hide()),g()}),e.vectorScale===void 0&&(e.vectorScale=1),H=Le.add(e,`vectorScale`,.2,10,.1).name(`ベクトル長さ倍率`).onChange(g),e.showStreamlines===void 0&&(e.showStreamlines=!1),e.numStreamlines===void 0&&(e.numStreamlines=100),e.streamlineOrigin===void 0&&(e.streamlineOrigin=`impeller`);let Re={regenerate:()=>{g()}},ze,Be,Ve;Le.add(e,`showStreamlines`).name(`流線の表示`).onChange(e=>{ze&&(e?ze.show():ze.hide()),Be&&(e?Be.show():Be.hide()),Ve&&(e?Ve.show():Ve.hide()),g()}),ze=Le.add(e,`numStreamlines`,10,1e3,10).name(`流線の数`).onChange(g),Be=Le.add(e,`streamlineOrigin`,{インペラ付近:`impeller`,"全体（均一）":`uniform`}).name(`流線の起点`).onChange(g),Ve=Le.add(Re,`regenerate`).name(`流線の再配置`),setTimeout(()=>{ze&&!e.showStreamlines&&ze.hide(),Be&&!e.showStreamlines&&Be.hide(),Ve&&!e.showStreamlines&&Ve.hide()},0),e.showVelocityMesh===void 0&&(e.showVelocityMesh=!1),e.velocityComponent===void 0&&(e.velocityComponent=`speed`);let He;Le.add(e,`showVelocityMesh`).name(`流速分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,Ce&&Ce.updateDisplay(),e.showPressureMesh=!1,we&&we.updateDisplay(),e.showViscosityRegion=!1,V&&V.updateDisplay(),e.showTurbViscosity=!1,ke&&ke.updateDisplay(),e.showParticleConc=!1,Te&&Te.updateDisplay()),He&&(t?He.show():He.hide()),g()}),He=Le.add(e,`velocityComponent`,[`speed`,`ur`,`utheta`,`uy`]).name(`速度成分`).onChange(g),setTimeout(()=>{He&&!e.showVelocityMesh&&He.hide()},0),Le.add(e,`showHighTempRegion`).name(`高温領域の表示`).onChange(e=>{Ae&&(e?Ae.show():Ae.hide()),g()}),Ae=Le.add(e,`highTempLowerLimit`,293.15,350).name(`下限温度 (K)`).onChange(g),Le.add(e,`showLowTempRegion`).name(`低温領域の表示`).onChange(e=>{je&&(e?je.show():je.hide()),g()}),je=Le.add(e,`lowTempUpperLimit`,293.15,350).name(`上限温度 (K)`).onChange(g),V=Le.add(e,`showViscosityRegion`).name(`粘度分布の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,Ce.updateDisplay(),e.showPressureMesh=!1,we.updateDisplay(),e.showParticleConc=!1,Te&&Te.updateDisplay(),e.showTurbViscosity=!1,ke&&ke.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),g()}),ke=Le.add(e,`showTurbViscosity`).name(`乱流粘度の表示`).onChange(t=>{if(t&&(e.showFluidMesh=!1,Ce.updateDisplay(),e.showPressureMesh=!1,we.updateDisplay(),e.showParticleConc=!1,Te&&Te.updateDisplay(),e.showViscosityRegion=!1,V&&V.updateDisplay(),e.showVelocityMesh=!1,window.appGuiLeft)){let e=window.appGuiLeft.controllersRecursive().find(e=>e.property===`showVelocityMesh`);e&&e.updateDisplay()}g()});let Ue=Se.addFolder(`粒子濃度表示`);Te=Ue.add(e,`showParticleConc`).name(`粒子濃度の表示`).onChange(t=>{t&&(e.showFluidMesh=!1,Ce.updateDisplay(),e.showPressureMesh=!1,we.updateDisplay(),e.showViscosityRegion=!1,V.updateDisplay(),e.showTurbViscosity=!1,ke&&ke.updateDisplay(),e.showVelocityMesh=!1,window.appGui&&window.appGui.controllersRecursive().find(e=>e.property===`showVelocityMesh`)?.updateDisplay()),g()}),B=Ue.add(e,`particleConcThreshold`,0,50,.1).name(`粒子濃度下限閾値 (個/L)`).onChange(g),Ee=Ue.add(e,`particleConcMaxLimit`,1,200,1).name(`粒子濃度最大スケール (個/L)`).onChange(g),De=Ue.add(e,`currentMinConc`).name(`現在の最低濃度 (個/L)`).listen().disable(),Oe=Ue.add(e,`currentMaxConc`).name(`現在の最高濃度 (個/L)`).listen().disable();let We=Se.addFolder(`フロートパネル表示`);We.add(e,`showCFDMonitor`).name(`CFD計算モニタの表示`).listen(),e.showHelpTooltips===void 0&&(e.showHelpTooltips=!1),We.add(e,`showHelpTooltips`).name(`ヘルプチップの表示`).listen().onChange(e=>{e||ip()}),e.showOperatingConditions===void 0&&(e.showOperatingConditions=!0),e.showMeshTab===void 0&&(e.showMeshTab=!1);let Ge,Ke,qe,Je=!1,Ye=t=>{if(!Je){Je=!0;try{let n=document.getElementById(`color-bar-container`);t===`colorbar`?(e.showColorBar=!0,e.showOperatingConditions=!1,e.showMeshTab=!1,n&&(n.style.display=``),typeof window._switchCbTab==`function`&&window._switchCbTab(`colorbar`)):t===`opcond`?(e.showColorBar=!1,e.showOperatingConditions=!0,e.showMeshTab=!1,n&&(n.style.display=``),typeof window._switchCbTab==`function`&&window._switchCbTab(`opcond`)):t===`mesh`?(e.showColorBar=!1,e.showOperatingConditions=!1,e.showMeshTab=!0,n&&(n.style.display=``),typeof window._switchCbTab==`function`&&window._switchCbTab(`mesh`)):(e.showColorBar=!1,e.showOperatingConditions=!1,e.showMeshTab=!1,n&&(n.style.display=`none`)),Ge&&Ge.updateDisplay(),Ke&&Ke.updateDisplay(),qe&&qe.updateDisplay()}finally{Je=!1}}};window._syncCbPanel=Ye,Ge=We.add(e,`showColorBar`).name(`カラーバーの表示`).listen().onChange(t=>{Ye(t?`colorbar`:e.showOperatingConditions?`opcond`:e.showMeshTab?`mesh`:null)}),Ke=We.add(e,`showOperatingConditions`).name(`操作条件を表示`).listen().onChange(t=>{Ye(t?`opcond`:e.showColorBar?`colorbar`:e.showMeshTab?`mesh`:null)}),qe=We.add(e,`showMeshTab`).name(`メッシュ情報を表示`).listen().onChange(t=>{Ye(t?`mesh`:e.showColorBar?`colorbar`:e.showOperatingConditions?`opcond`:null)}),e.showColorBar?Ye(`colorbar`):e.showOperatingConditions?Ye(`opcond`):e.showMeshTab?Ye(`mesh`):Ye(null),e.crossSectionAngle===void 0&&(e.crossSectionAngle=.125),e.crossSectionOffset===void 0&&(e.crossSectionOffset=0);let U=t=>{let n=(t||e.crossSectionType)===`Vertical`;Ne&&(n?Ne.show():Ne.hide()),Pe&&(n?Pe.show():Pe.hide()),Me&&(n?Me.hide():Me.show())};window.updateCrossSectionSliders=U,setTimeout(()=>{U(e.crossSectionType),H&&(e.showVelocityVector?H.show():H.hide()),Ae&&(e.showHighTempRegion?Ae.show():Ae.hide()),je&&(e.showLowTempRegion?je.show():je.hide())},50);function W(e,t){let n=document.getElementById(`dimension-overlay`);if(!e){n&&(n.style.display=`none`);return}n||(n=document.createElement(`div`),n.id=`dimension-overlay`,n.style.cssText=[`position:fixed`,`top:0`,`left:0`,`width:100%`,`height:100%`,`pointer-events:none`,`z-index:90`,`overflow:hidden`].join(`;`),document.body.appendChild(n)),n.style.display=`block`,n.innerHTML=Xe(t)}window._updateDimensionOverlay=W;function Xe(e){let t=window.innerWidth,n=window.innerHeight,r=(e.tankDiameter||1)/2,i=e.tankHeight||1,a=e.liquidHeight||1,o=e.impellerDiameter||.3,s=o/2,c=e.bladeWidth||.05,l=e.impellerClearance||.1,u=e.coilEnabled,d=e.coilTurns||3,f=(e.tankDiameter||1)*.75,p=-Kd.getMirrorDepth(e),m=Kd.getImpellerCenterY(e),h=`#00e5ff`,g=`#ffffff`,_=(e,t,n)=>{try{return Mf(e,t,n)}catch{return null}},v=(e,t,n,r=1,i=26)=>{let a=_(e[0],e[1],e[2]),o=_(t[0],t[1],t[2]);if(!a||!o)return``;let s=o.x-a.x,c=o.y-a.y,l=Math.hypot(s,c)||1,u=-c/l*r,d=s/l*r,f={x:a.x+u*i,y:a.y+d*i},p={x:o.x+u*i,y:o.y+d*i},m=(f.x+p.x)/2+u*10,v=(f.y+p.y)/2+d*10;return`<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${f.x.toFixed(1)}" y2="${f.y.toFixed(1)}" stroke="${h}" stroke-width="1" stroke-dasharray="3,3"/><line x1="${o.x.toFixed(1)}" y1="${o.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="${h}" stroke-width="1" stroke-dasharray="3,3"/><line x1="${f.x.toFixed(1)}" y1="${f.y.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="${h}" stroke-width="1.5" marker-start="url(#arr)" marker-end="url(#arr)"/><circle cx="${a.x.toFixed(1)}" cy="${a.y.toFixed(1)}" r="2.5" fill="${h}"/><circle cx="${o.x.toFixed(1)}" cy="${o.y.toFixed(1)}" r="2.5" fill="${h}"/><text x="${m.toFixed(1)}" y="${v.toFixed(1)}" fill="${g}" font-size="11" font-family="monospace" text-anchor="middle">${n}</text>`},y=(e,t,n=26,r=-10)=>{let i=_(e[0],e[1],e[2]);if(!i)return``;let a={x:i.x+n,y:i.y+r},o={x:a.x+5,y:a.y};return`<line x1="${i.x.toFixed(1)}" y1="${i.y.toFixed(1)}" x2="${a.x.toFixed(1)}" y2="${a.y.toFixed(1)}" stroke="${h}" stroke-width="1" stroke-dasharray="4,3"/><line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${o.x.toFixed(1)}" y2="${o.y.toFixed(1)}" stroke="${h}" stroke-width="1"/><circle cx="${i.x.toFixed(1)}" cy="${i.y.toFixed(1)}" r="2.5" fill="${h}"/><text x="${o.x.toFixed(1)}" y="${(o.y-4).toFixed(1)}" fill="${g}" font-size="11" font-family="monospace" text-anchor="start">${t}</text>`},b=e=>e.toFixed(3),x=[];x.push(v([-r,i,0],[r,i,0],`D=${b(e.tankDiameter||1)}m`,-1)),x.push(v([r,0,0],[r,i,0],`H=${b(i)}m`,1)),x.push(v([-r,0,0],[-r,a,0],`Liq=${b(a)}m`,-1)),x.push(v([-s,m,0],[s,m,0],`d=${b(o)}m`,1,36)),x.push(v([s,m-c/2,0],[s,m+c/2,0],`w=${b(c)}m`,1,20));let S=(s+r)/2;return x.push(v([S,p,0],[S,p+l,0],`C=${b(l)}m`,1,18)),u&&x.push(y([f/2,a/2,0],`coil φ${b(f)}m×${d}turns`)),`<svg width="${t}" height="${n}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="${h}" stroke-width="0.8"/>
    </marker>
  </defs>
  ${x.join(`
  `)}
</svg>`}function Ze(t){let n=document.getElementById(`operating-conditions-window`);if(!t){n&&(n.style.display=`none`);return}if(!n){n=document.createElement(`div`),n.id=`operating-conditions-window`,n.style.cssText=[`position:fixed`,`top:80px`,`right:310px`,`width:260px`,`background:rgba(15,15,20,0.92)`,`border:1px solid rgba(0,200,255,0.35)`,`border-radius:8px`,`box-shadow:0 4px 20px rgba(0,0,0,0.6)`,`z-index:200`,`font-family:monospace`,`font-size:11px`,`color:#ccc`,`user-select:none`].join(`;`);let t=document.createElement(`div`);t.style.cssText=[`background:rgba(0,180,255,0.18)`,`padding:5px 10px`,`border-radius:7px 7px 0 0`,`cursor:move`,`display:flex`,`align-items:center`,`justify-content:space-between`].join(`;`),t.innerHTML=`<span style="color:#00e5ff;font-weight:bold;font-size:11px;">⚙ 操作条件</span><button id="op-cond-close" style="background:none;border:none;color:#aaa;cursor:pointer;font-size:14px;padding:0 2px;">✕</button>`;let r=document.createElement(`div`);r.id=`op-cond-body`,r.style.cssText=`padding:8px 10px;line-height:1.7;`,n.appendChild(t),n.appendChild(r),document.body.appendChild(n),document.getElementById(`op-cond-close`).onclick=()=>{e.showOperatingConditions=!1,n.style.display=`none`,window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.makeCFDPanelDraggable?window.makeCFDPanelDraggable(n,t):t.addEventListener(`mousedown`,e=>{let t=e.clientX-n.offsetLeft,r=e.clientY-n.offsetTop,i=e=>{n.style.left=e.clientX-t+`px`,n.style.top=e.clientY-r+`px`,n.style.right=`auto`},a=()=>{document.removeEventListener(`mousemove`,i),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,i),document.addEventListener(`mouseup`,a)})}n.style.display=`block`,Qe()}window._toggleOperatingConditionsWindow=Ze;function Qe(){let t=document.getElementById(`color-bar-container`),n=document.getElementById(`cb-tab-opcond`),r=document.getElementById(`operating-conditions-window`),i=!!(t&&t.style.display!==`none`&&n&&n.style.display!==`none`),a=!!(r&&r.style.display!==`none`);if(!i&&!a)return;let o=document.getElementById(`op-cond-body`);if(!o)return;let s=e,c=(e,t=2)=>e!=null&&!isNaN(e)?Number(e).toFixed(t):`—`,l=e=>c(e,2)+` K`,u=s.currentAvgTemp===void 0?s.initialTemp:s.currentAvgTemp,d=s.currentMinTemp,f=s.currentMaxTemp,p=s.currentAvgViscosity===void 0?s.viscosity:s.currentAvgViscosity,m=s.currentMinViscosity,h=s.currentMaxViscosity,g=s.currentAvgVelocity,_=s.currentMaxVelocity,v=s.currentMinVelocity,y=s.currentAvgPressure,b=s.currentMaxPressure,x=s.currentMinPressure,S=(e,t,n=`#eee`)=>`<tr><td style="color:#89b;padding-right:8px;white-space:nowrap;">${e}</td><td style="color:${n};text-align:right;">${t}</td></tr>`,C=e=>`<tr><td colspan="2" style="color:#00e5ff;padding-top:5px;padding-bottom:1px;font-weight:bold;border-top:1px solid rgba(255,255,255,0.1);">${e}</td></tr>`;o.innerHTML=`<table style="width:100%;border-collapse:collapse;">
      ${C(`🌡 温度条件`)}
      ${S(`攪拌液初期温度`,l(s.initialTemp))}
      ${S(`ジャケット温度`,s.jacketType===`None`?`—`:l(s.jacketTemp))}
      ${S(`コイル温度`,s.coilEnabled?l(s.coilTemp):`—`)}
      ${C(`🔄 回転数`)}
      ${S(`目標回転数`,c(s.rpm,0)+` RPM`)}
      ${C(`🌡 現在の液温`)}
      ${S(`平均`,l(u),`#ffcc66`)}
      ${S(`最高`,typeof f==`number`?l(f):`—`,`#ff6666`)}
      ${S(`最低`,typeof d==`number`?l(d):`—`,`#66aaff`)}
      ${C(`💧 現在の粘度`)}
      ${S(`平均 (Pa·s)`,typeof p==`number`?c(p,4):`—`,`#ffcc66`)}
      ${S(`最大 (Pa·s)`,typeof h==`number`?c(h,4):`—`,`#ff6666`)}
      ${S(`最小 (Pa·s)`,typeof m==`number`?c(m,4):`—`,`#66aaff`)}
      ${C(`💨 現在の速度`)}
      ${S(`平均 (m/s)`,typeof g==`number`?c(g,3):`—`,`#ffcc66`)}
      ${S(`最大 (m/s)`,typeof _==`number`?c(_,3):`—`,`#ff6666`)}
      ${S(`最小 (m/s)`,typeof v==`number`?c(v,3):`—`,`#66aaff`)}
      ${C(`📊 現在の圧力`)}
      ${S(`平均 (Pa)`,typeof y==`number`?c(y,1):`—`,`#ffcc66`)}
      ${S(`最大 (Pa)`,typeof b==`number`?c(b,1):`—`,`#ff6666`)}
      ${S(`最小 (Pa)`,typeof x==`number`?c(x,1):`—`,`#66aaff`)}
    </table>`}window._refreshOperatingConditions=Qe,setInterval(()=>{e.showOperatingConditions&&Qe(),e.showDimensions&&W(!0,e)},500),xe.addFolder(`視点操作 (Camera View)`).add({resetView:()=>{Df(),Ef(`None`),e.gizmoMode=`None`,window.dispatchEvent(new Event(`gizmo-deselected`)),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}},`resetView`).name(`🔄 表示を初期化 (位置・スケールリセット)`),window.addEventListener(`gizmo-deselected`,()=>{window.updateAllGuiDisplays&&window.updateAllGuiDisplays()});let $e=I.addFolder(`粒子追跡 (DPM)`);$e.add(e,`dpmTrailMode`,[`CurrentOnly`,`Trail`]).name(`表示モード`).onChange(()=>{window.dpmParticles=[]}),$e.add(e,`dpmMaxTrailLength`,5,200,1).name(`軌跡の長さ (フレーム数)`);let et=$e.add(e,`crystallizationTemp`,273.15,373.15,.1).name(`生成開始温度 (K)`).onChange(()=>{Af()});u=function(){e.particleDistributionType===`Uniform`?l.hide():l.show(),e.particlePlacementType===`LowTemp`?et.show():et.hide(),e.showParticles?(Te&&Te.show(),B&&B.show(),Ee&&Ee.show(),De&&De.show(),Oe&&Oe.show(),e.crossSectionView&&(e.showParticleConc=!0,e.showFluidMesh=!1,e.showPressureMesh=!1,e.showViscosityRegion=!1,e.showTurbViscosity=!1,e.showVelocityMesh=!1,Te&&Te.updateDisplay(),Ce&&Ce.updateDisplay(),we&&we.updateDisplay(),V&&V.updateDisplay(),ke&&ke.updateDisplay())):(Te&&Te.hide(),B&&B.hide(),Ee&&Ee.hide(),De&&De.hide(),Oe&&Oe.hide(),e.showParticleConc&&(e.showParticleConc=!1,Te&&Te.updateDisplay(),e.showFluidMesh=!0,Ce&&Ce.updateDisplay()))},$e.add(e,`particlePlacementType`,[`Uniform`,`Floating`,`Sedimented`,`LowTemp`]).name(`初期配置パターン`).onChange(()=>{u(),Af()}),u(),window.updateDpmUI=u,$e.add(e,`particleCount`,100,5e3,100).name(`表示粒子数`).onChange(()=>{Af()}),$e.add({reset:()=>{Af()}},`reset`).name(`粒子を再配置`);let tt=new $f({title:`計算条件設定`});window.appGuiConditions=tt;let nt=tt.domElement;nt.style.position=`fixed`,nt.style.top=`0px`,nt.style.right=`36px`,nt.style.left=`auto`,nt.style.width=`300px`,nt.style.zIndex=`120`,nt.style.maxHeight=`100vh`,nt.style.overflowY=`auto`;let rt=nt.querySelector(`.title`);rt&&window.makeCFDPanelDraggable&&window.makeCFDPanelDraggable(nt,rt);let it=tt.addFolder(`1. 物理モデル (Physical Models)`);it.add(e,`fluidModel`,[`Newtonian`,`Power-law`,`Bingham`,`Herschel-Bulkley`]).name(`流体モデル`).onChange(()=>{s(),g()}),it.add(e,`turbulenceModel`,[`Constant`,`MixingLength`,`k-epsilon`,`RNG k-epsilon`]).name(`乱流モデル`).onChange(()=>{s(),g()}),it.add(e,`energyEquation`).name(`伝熱・エネルギー`).disable(),it.add(e,`multiphaseModel`).name(`多相流 (Multiphase)`).disable(),it.add(e,`timeDependence`).name(`時間依存性`).disable(),s=()=>{let t=e.fluidModel;t===`Newtonian`||t===`Bingham`?y.show():y.hide(),t===`Bingham`?y.name(`塑性粘度 (Pa・s)`):y.name(`粘度 (Pa・s)`),t===`Power-law`||t===`Herschel-Bulkley`?b.show():b.hide(),t===`Power-law`||t===`Herschel-Bulkley`?x.show():x.hide(),t===`Bingham`||t===`Herschel-Bulkley`?S.show():S.hide(),t===`Power-law`||t===`Bingham`||t===`Herschel-Bulkley`?(C.show(),w.show()):(C.hide(),w.hide()),e.turbulenceModel===`Constant`?T.show():T.hide(),e.turbulenceModel===`RNG k-epsilon`?e._solverTurbModel=`RNG-k-epsilon`:e._solverTurbModel=e.turbulenceModel},s(),window.updateCondFlowUI=s;let at=tt.addFolder(`2. Boundary Conditions`),ot=at.addFolder(`圧力基準点 (Reference Pressure)`),st,ct,lt,ut=()=>{let t=e.referencePressureType===`Custom`;st&&(t?st.show():st.hide()),ct&&(t?ct.show():ct.hide()),lt&&(t?lt.show():lt.hide())};ot.add(e,`referencePressureType`,[`LiquidSurface`,`TopCenter`,`BottomCenter`,`Custom`]).name(`基準点タイプ`).onChange(()=>{ut(),g()}),ot.add(e,`referencePressureValue`,-1e5,1e5,1).name(`基準ゲージ圧 (Pa)`).onChange(g),st=ot.add(e,`refPressCustomR`,0,2,.01).name(`半径 r (m)`).onChange(g),ct=ot.add(e,`refPressCustomTheta`,0,360,1).name(`角度 θ (deg)`).onChange(g),lt=ot.add(e,`refPressCustomY`,0,4,.01).name(`高さ y (m)`).onChange(g),ut(),window.updateRefPressUI=ut;let dt=at.addFolder(`界面別境界条件 (Interfaces)`),ft=(t,n,r,i,a=`fixedFluxPressure`,o=293.15)=>{e[`bc_type_${t}`]===void 0&&(e[`bc_type_${t}`]=n),e[`bc_fluid_${t}`]===void 0&&(e[`bc_fluid_${t}`]=r),e[`bc_heat_${t}`]===void 0&&(e[`bc_heat_${t}`]=i),e[`bc_press_${t}`]===void 0&&(e[`bc_press_${t}`]=a),e[`${t}Press`]===void 0&&(e[`${t}Press`]=0),(t===`impeller`||t===`rod`||t===`baffle`||t===`surface`)&&(e[`${t}Temp`]===void 0&&(e[`${t}Temp`]=o),t===`surface`&&e.surfaceUa===void 0&&(e.surfaceUa=500))};ft(`jacket`,`wall`,`noSlip`,`externalWallHeatTransfer`,`fixedFluxPressure`),ft(`bottomHead`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ft(`coil`,`wall`,`noSlip`,`externalWallHeatTransfer`,`fixedFluxPressure`),ft(`impeller`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ft(`rod`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ft(`baffle`,`wall`,`noSlip`,`zeroGradient`,`fixedFluxPressure`),ft(`surface`,`symmetry`,`slip`,`zeroGradient`,`totalPressure`);let pt=(t,n,r=!1)=>{let i=dt.addFolder(t);i.add(e,`bc_type_${n}`,[`patch`,`wall`,`symmetryPlane`,`symmetry`]).name(`境界タイプ`).onChange(()=>{f(),g()});let a=r?[`noSlip`,`movingWallVelocity`,`slip`,`fixedValue`,`zeroGradient`]:[`noSlip`,`slip`,`fixedValue`,`zeroGradient`],o=i.add(e,`bc_fluid_${n}`,a).name(`流体条件`).onChange(g),s=i.add(e,`bc_press_${n}`,[`fixedFluxPressure`,`totalPressure`,`fixedValue`,`zeroGradient`]).name(`圧力条件`).onChange(()=>{f(),g()}),c=i.add(e,`${n}Press`,-1e5,1e5,1).name(`固定圧力 (Pa)`).onChange(g),l=i.add(e,`bc_heat_${n}`,[`fixedValue`,`zeroGradient`,`externalWallHeatTransfer`]).name(`熱条件`).onChange(()=>{f(),g()}),u,d;n===`jacket`?(u=i.add(e,`jacketTemp`,273,500,1).name(`壁面温度 T (K)`).onChange(g),d=i.add(e,`ua`,0,5e3,50).name(`伝熱係数 UA (W/m²K)`).onChange(g)):n===`bottomHead`?(u=i.add(e,`bottomHeadTemp`,273,500,1).name(`壁面温度 T (K)`).onChange(g),d=i.add(e,`bottomHeadUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(g)):n===`coil`?(u=i.add(e,`coilTemp`,273,500,1).name(`コイル温度 T (K)`).onChange(g),d=i.add(e,`coilUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(g)):n===`surface`?(u=i.add(e,`surfaceTemp`,273.15,500,1).name(`壁面温度 T (K)`).onChange(g),d=i.add(e,`surfaceUa`,0,5e3,50).name(`伝熱係数 U (W/m²K)`).onChange(g)):u=i.add(e,`${n}Temp`,273.15,500,1).name(`壁面温度 T (K)`).onChange(g);let f=()=>{let t=e[`bc_type_${n}`];t===`symmetryPlane`||t===`symmetry`?(e[`bc_fluid_${n}`]=`slip`,o.setValue(`slip`).disable(),e[`bc_heat_${n}`]=`zeroGradient`,l.setValue(`zeroGradient`).disable(),e[`bc_press_${n}`]=`zeroGradient`,s.setValue(`zeroGradient`).disable()):(o.enable(),l.enable(),s.enable());let r=e[`bc_press_${n}`];c&&((r===`fixedValue`||r===`totalPressure`)&&(t===`wall`||t===`patch`)?c.show():c.hide());let a=e[`bc_heat_${n}`],f=(a===`fixedValue`||a===`externalWallHeatTransfer`)&&(t===`wall`||t===`patch`),p=a===`externalWallHeatTransfer`&&(t===`wall`||t===`patch`);u&&(f?u.show():u.hide()),d&&(p?d.show():d.hide()),n===`bottomHead`&&((!e.mirrorPlateType||e.mirrorPlateType===`None`?`ShellOnly`:e.jacketCoverage||`Full`)===`ShellOnly`?i.show():i.hide())};return f(),i.close(),f},mt=[];mt.push(pt(`ジャケット (Jacket)`,`jacket`,!1)),mt.push(pt(`底部鏡板 (Bottom Head)`,`bottomHead`,!1)),mt.push(pt(`伝熱コイル (Coil)`,`coil`,!1)),mt.push(pt(`インペラ (Impeller)`,`impeller`,!0)),mt.push(pt(`シャフト (Rod / Shaft)`,`rod`,!0)),mt.push(pt(`邪魔板 (Baffle)`,`baffle`,!1)),mt.push(pt(`水面 (Water Surface)`,`surface`,!1)),window._updateInterfaceBCUI=()=>mt.forEach(e=>e&&e()),pe();let ht=tt.addFolder(`3. 初期・運転条件 (Initial & Operating)`);ht.add(e,`initialTemp`,273.15,373.15,.1).name(`攪拌液初期温度 (K)`).onChange(g),ht.add(e,`rpm`,0,1e3,10).name(`回転速度 (RPM)`).onChange(g),ht.add(e,`rotationModel`,{"MRF (疑似回転座標系)":`MRF`,"Sliding Mesh (スライディングメッシュ)":`SlidingMesh`}).name(`回転体表現形式`).onChange(g);let gt=tt.addFolder(`回転ゾーン設定 (Rotor Zone)`);f=gt.add(e,`showMRFZone`).name(`回転ゾーンの表示`).onChange(e=>{d&&d.updateDisplay(),g()}),gt.add(e,`mrfRadialMargin`,1,2,.01).name(`半径マージン`).onChange(_),gt.add(e,`mrfVerticalMarginTop`,0,1,.01).name(`上部マージン`).onChange(_),gt.add(e,`mrfVerticalMarginBottom`,0,1,.01).name(`下部マージン`).onChange(_);let _t=tt.addFolder(`4. ソルバー・計算条件 (Solver Settings)`),vt=_t.addFolder(`計算メッシュ (Mesh)`);vt.add(e,`meshNr`,10,150,1).name(`半径方向分割数 (r)`).onChange(_),vt.add(e,`meshNtheta`,12,180,4).name(`円周方向分割数 (θ)`).onChange(_),vt.add(e,`meshNy`,10,200,1).name(`高さ方向分割数 (y)`).onChange(_),vt.add(e,`blLayers`,0,10,1).name(`境界層の層数`).onChange(_),vt.add(e,`blThickness`,.001,.1,.001).name(`境界層全体の厚み (m)`).onChange(_),vt.add(e,`blExpansionRatio`,1.05,2,.05).name(`境界層の拡大率`).onChange(_),vt.add({applyMesh:()=>{let t=e.meshNr*e.meshNtheta*e.meshNy;if(t>1e6){let n=e.computationMode===`GPU (WebGPU)`?`GPU (WebGPU)`:`CPU`;if(!confirm(`メッシュ総セル数が ${t.toLocaleString()} と非常に大きいです。\n現在の計算モード: ${n}\n`+(n===`CPU`?`CPUモードでは1ステップに数分以上かかる可能性があります。続行しますか？`:`GPUモードでもメモリ・処理時間が大幅に増加します。続行しますか？`)))return}e.resetSimulation&&e.resetSimulation()}},`applyMesh`).name(`メッシュ適用 (リセット)`);let yt=_t.addFolder(`緩和係数 (Relaxation)`);yt.add(e,`relaxU`,.05,1,.05).name(`速度緩和係数 (relax U)`).onChange(g),yt.add(e,`relaxP`,.05,1,.05).name(`圧力緩和係数 (relax P)`).onChange(g),yt.add(e,`relaxT`,.05,1,.05).name(`温度緩和係数 (relax T)`).onChange(g),yt.add(e,`relaxK`,.05,1,.05).name(`乱流緩和係数 (relax k)`).onChange(g);let bt=_t.addFolder(`数値スキーム (Schemes)`);bt.add(e,`cfdScheme`).name(`計算スキーム`).disable(),bt.add(e,`discretization`).name(`空間離散化手法`).disable(),_t.add({applyGeom:()=>{e.resetSimulation&&e.resetSimulation()}},`applyGeom`).name(`形状・計算条件適用 (リセット)`);let xt=()=>{let t=document.getElementById(`cfd-monitor`);if(!t||document.getElementById(`cfd-monitor-extra`))return;let n=document.createElement(`div`);n.id=`cfd-monitor-extra`,n.style.cssText=`display:flex;gap:4px;flex-wrap:wrap;padding:6px 8px 4px;border-top:1px solid rgba(255,255,255,0.12);margin-top:4px;`;let r=`flex:1;min-width:0;padding:3px 6px;font-size:11px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);border-radius:4px;color:#ccc;cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`,i=document.createElement(`button`);i.textContent=`📖 理論`,i.title=`理論式と数値解法の解説`,i.style.cssText=r,i.onclick=()=>{let e=document.getElementById(`theory-modal`);e&&(e.style.display=`block`)};let a=document.createElement(`button`);a.textContent=`💡 ヘルプ`,a.title=`UI設定項目のヘルプ`,a.style.cssText=r,a.onclick=()=>{let e=document.getElementById(`ui-help-modal`);e&&(e.style.display=`block`)};let o=document.createElement(`button`);o.textContent=`💾 保存`,o.title=`設定をJSONファイルに保存`,o.style.cssText=r,o.onclick=()=>{let t={};for(let n in e)typeof e[n]!=`function`&&(t[n]=e[n]);let n=new Blob([JSON.stringify(t,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`stirred-tank-cfd_${new Date().toISOString().replace(/[:.]/g,`-`).slice(0,19)}.json`,i.click(),URL.revokeObjectURL(r)};let s=document.createElement(`button`);s.textContent=`📂 読込`,s.title=`設定ファイルを読み込む (.json)`,s.style.cssText=r,s.onclick=()=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`.json,application/json`,t.onchange=t=>{let n=t.target.files[0];if(!n)return;let r=new FileReader;r.onload=t=>{try{let n=JSON.parse(t.target.result);for(let t in n)t in e&&typeof e[t]!=`function`&&(e[t]=n[t]);e.meshNtheta&&=Math.round(e.meshNtheta/4)*4;let r=Number(e.tankHeight||1)+Number(Kd.getMirrorDepth(e));e.liquidHeight>r&&(e.liquidHeight=r),Af(),Of(e),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()}catch(e){alert(`読み込み失敗: `+e.message)}},r.readAsText(n)},t.click()},n.appendChild(i),n.appendChild(a),n.appendChild(o),n.appendChild(s),t.appendChild(n)};xt();let St=setInterval(()=>{if(document.getElementById(`cfd-monitor-extra`)){clearInterval(St);return}xt()},500),Ct=()=>{try{let t={};for(let n in e)typeof e[n]!=`function`&&(t[n]=e[n]);localStorage.setItem(`stirredTankParams`,JSON.stringify(t))}catch{}np(),c()};n.onChange(Ct),xe.onChange(Ct),tt.onChange(Ct),r.onChange(Ct),tp({gui:n,guiFluidProps:r,guiConditions:tt,guiLeft:xe}),setTimeout(ap,500)}function tp({gui:e,guiFluidProps:t,guiConditions:n,guiLeft:r}){let i=(()=>{try{let e=parseInt(localStorage.getItem(`cfd_panel_width`),10);return!isNaN(e)&&e>=180&&e<=700?e:300}catch{return 300}})(),a=[{id:`geom`,label:`形状設定`,icon:`🔧`,panel:e.domElement},{id:`fluid`,label:`物性設定`,icon:`💧`,panel:t.domElement},{id:`cond`,label:`計算条件`,icon:`⚙️`,panel:n.domElement},{id:`vis`,label:`表示設定`,icon:`👁️`,panel:r.domElement}];if([`side-tab-bar-right`,`side-tab-bar-left`,`panel-resize-handle`].forEach(e=>{let t=document.getElementById(e);t&&t.remove()}),!document.getElementById(`side-tab-style`)){let e=document.createElement(`style`);e.id=`side-tab-style`,e.textContent=`
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
    `,document.head.appendChild(e)}function o(e){i=Math.round(Math.max(180,Math.min(700,e))),a.forEach(e=>{e.panel.style.width=i+`px`,e.panel.style.setProperty(`--width`,i+`px`)});let t=document.getElementById(`panel-resize-handle`);t&&(t.style.left=36+i-3+`px`);try{localStorage.setItem(`cfd_panel_width`,i)}catch{}}let s=document.createElement(`div`);s.id=`side-tab-bar-left`,s.style.cssText=[`position:fixed`,`top:0`,`left:0`,`bottom:0`,`width:36px`,`z-index:200`,`display:flex`,`flex-direction:column`,`align-items:center`,`padding-top:12px`,`gap:6px`,`background:rgba(18,18,26,0.94)`,`backdrop-filter:blur(8px)`,`border-right:1px solid rgba(255,255,255,0.07)`,`box-shadow:2px 0 16px rgba(0,0,0,0.5)`].join(`;`);let c=document.createElement(`div`);c.id=`panel-resize-handle`,c.style.display=`none`,c.addEventListener(`mousedown`,e=>{c.classList.add(`dragging`);let t=e.clientX,n=i,r=e=>{o(n+e.clientX-t)},a=()=>{c.classList.remove(`dragging`),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseup`,a)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,a),e.preventDefault()}),document.body.appendChild(c);let l=a[0].id,u=new Map;function d(){let e=!1;a.forEach(t=>{let n=t.id===l;t.panel.style.display=n?``:`none`,n&&(e=!0,t.panel.style.position=`fixed`,t.panel.style.left=`36px`,t.panel.style.right=`auto`,t.panel.style.top=`0px`,t.panel.style.width=i+`px`,t.panel.style.setProperty(`--width`,i+`px`));let r=u.get(t.id);r&&r.classList.toggle(`active`,n)}),c.style.display=e?`block`:`none`,c.style.left=36+i-3+`px`}a.forEach(e=>{let t=document.createElement(`button`);t.className=`side-tab-btn`+(e.id===l?` active`:``),t.title=e.label,t.innerHTML=`<span class="tab-icon">${e.icon}</span><span class="tab-label">${e.label}</span>`,t.addEventListener(`click`,()=>{l=l===e.id?null:e.id,d()}),u.set(e.id,t),s.appendChild(t)}),document.body.appendChild(s),o(i),d()}function np(){let e=t=>{t&&(t.controllers.forEach(e=>e.updateDisplay()),t.folders.forEach(t=>e(t)))};if(window.appGui&&e(window.appGui),window.appGuiLeft&&e(window.appGuiLeft),window.appGuiConditions&&e(window.appGuiConditions),window.appGuiFluidProps&&e(window.appGuiFluidProps),typeof window.updateTempDepUI==`function`&&window.updateTempDepUI(),typeof window.updateCondFlowUI==`function`&&window.updateCondFlowUI(),typeof window.updateDpmUI==`function`&&window.updateDpmUI(),typeof window.updateRefPressUI==`function`&&window.updateRefPressUI(),typeof window.updateCrossSectionSliders==`function`&&window.updateCrossSectionSliders(),typeof window._updateInterfaceBCUI==`function`&&window._updateInterfaceBCUI(),window.appParams&&typeof window._syncCbPanel==`function`){let e=window.appParams;e.showColorBar?window._syncCbPanel(`colorbar`):e.showOperatingConditions?window._syncCbPanel(`opcond`):e.showMeshTab?window._syncCbPanel(`mesh`):window._syncCbPanel(null)}typeof window._refreshOperatingConditions==`function`&&window._refreshOperatingConditions(),typeof window.updateCameraProjection==`function`&&window.updateCameraProjection(),typeof window._updateViewModeBtnText==`function`&&window._updateViewModeBtnText()}window.updateAllGuiDisplays=np;var rp={タンク直径:`攪拌槽の内径（横幅）を設定します。`,タンク直胴部高さ:`タンクの円筒部分（ストレート部）の高さです。`,タンク直胴高さ:`タンクの円筒部分（ストレート部）の高さです。`,タンク直線部高さ:`タンクの円筒部分（ストレート部）の高さです。`,"液深 (総高さ)":`タンク内に注入されている液体の初期高さです。`,"液深 (液高さ)":`タンク内に注入されている液体の初期高さです。`,"液深 (高さ)":`タンク内に注入されている液体の初期高さです。`,形状タイプ:`タンク底部の形状を選択します。`,種類:`使用する攪拌翼の種類を選択します。`,"直径 (m)":`攪拌翼の先端から先端までの外径です。`,"クリアランス (m)":`タンクの最底部から攪拌翼の下端までの距離（設置高さ）です。`,ブレード枚数:`攪拌翼の羽根の数です。`,"ブレード幅 (m)":`羽根1枚あたりの幅（高さ方向の寸法など）です。`,"角度 (度)":`羽根に傾き（ピッチ）がある場合の傾斜角度です。`,"シャフト径 (mm, 0=自動)":`翼を回す中心の軸（シャフト）の太さです。0 にすると自動で適切な太さに設定されます。`,ジャケット種類:`タンクの外側を覆う加熱・冷却用ジャケットの有無や形式を設定します。`,"ジャケット形式 (範囲)":`ジャケットの伝熱面積の範囲です。「Full」=フルジャケット(胴部+底部鏡板)、「ShellOnly」=胴ジャケット(胴部のみ)。底部鏡板形状が「None」(フラット底)の場合は鏡板自体が無いため自動的にShellOnlyになります。`,"温度 (K)":`ジャケット等の温度です。`,"伝熱係数 (UA)":`ジャケットからタンク内部への熱の伝わりやすさを表す総合伝熱値です。`,設置枚数:`液の共回りを防ぎ、上下攪拌を促すために壁面に設置する板（バッフル）の枚数です。`,幅:`邪魔板（バッフル）の幅です。`,コイルの有効化:`タンク内部に加熱・冷却用のチューブ（コイル）を設置するかどうかの切り替えです。`,管半径:`コイルに使用するパイプの半径です。`,巻き数:`コイルが何重に巻かれているかという回数です。`,熱媒:`コイル内に流す流体の種類です。`,"熱媒温度 (K)":`コイル内を流れる熱媒の温度です。`,"総括伝熱係数 U (W/m²K)":`コイルから液への熱の伝わりやすさを表す係数です。`,"密度 (kg/m³)":`液体の単位体積あたりの重さです（1000は水と同等）。`,"一貫性係数 K":`非ニュートン流体の粘性を決める係数（稠度係数）です。`,"流動挙動指数 n":`流体の性質を表す指数です。1でニュートン、1未満で擬塑性、1超でダイラタンシーになります。`,"比熱 (J/kg・K)":`液体の温まりにくさを表す熱容量です。`,"熱伝導率 (W/m・K)":`液体内部の熱の伝わりやすさです。`,"乱流強度 (Turbulence)":`乱流によって発生する見かけの粘性（乱れの強さ）の基準値です。`,"温度依存性 ON/OFF":`温度によって液体の粘度を変化させるかどうかの設定です。`,"基準温度 T_ref (K)":`粘度計算の基準となる温度です。`,"Ea1 / R  降伏値項 (K)":`温度変化に対してどれだけ降伏値が変化するかを決める係数です。`,"Ea2 / R  粘度項  (K)":`温度変化に対してどれだけ粘度が変化するかを決める係数です。`,"📈 アレニウスプロットを表示":`温度と粘度の関係をグラフで確認するためのボタンです。`,"📈 流動曲線・粘性曲線を表示":`せん断速度によって粘度がどう変わるかをグラフ表示するボタンです。`,"粒子密度 (kg/m³)":`固体粒子そのものの密度です。`,"平均粒子径 (μm)":`粒子の平均的な大きさです。`,"法線ばね定数 kn":`垂直に衝突したときの反発の硬さです。`,"法線減衰係数 gn":`垂直衝突時のエネルギー吸収量（クッション性）です。`,"接線ばね定数 kt":`横に擦れ合ったときのねじれ方向の硬さです。`,"接線減衰係数 gt":`横滑りするときのエネルギー吸収量です。`,"摩擦係数 μ":`粒子表面の滑りにくさです。`,"表面エネルギー (JKR γ)":`粒子同士がくっつく力（付着・凝縮力）の強さです。`,粒度分布タイプ:`粒子の大きさにバラつきを持たせるか設定します。`,"標準偏差 (μm)":`粒径のバラつきの幅（広がり具合）です。`,"📊 粒度分布グラフを表示":`設定した粒子のサイズ分布を確認するボタンです。`,表示モード:`画面上での粒子の見え方です（軌跡表示など）。`,"軌跡の長さ (フレーム数)":`粒子の後ろに表示される残像・軌跡の長さです。`,初期配置パターン:`計算開始時に粒子をどこに配置するかです。`,表示粒子数:`画面上に同時に描画・追跡する粒子の個数です。`,粒子を再配置:`粒子の位置を初期状態にリセットするボタンです。`,流体モデル:`非ニュートン流体の計算モデルです。`,乱流モデル:`流れの乱れをどう計算するかです。`,"伝熱・エネルギー":`熱の移動（温度変化）を計算に含めるかどうかのスイッチです。`,"多相流 (Multiphase)":`気泡や液滴など、他の相を考慮するかの設定です。`,時間依存性:`計算を時間ごとに追うか（Transient）、落ち着いた状態を出すか（Steady）の設定です。`,半径マージン:`攪拌翼の周りの回転領域のメッシュのゆとり（半径方向）を設定します。`,上部マージン:`回転領域の上部マージンです。`,下部マージン:`回転領域の下部マージンです。`,基準点タイプ:`計算の基準とする圧力の位置とタイプです。`,"流入・流出条件":`外部から液を出し入れする場合の設定です。`,"周期・対称条件":`ループするような特殊な境界を設定する場合に使用します。`,"攪拌液初期温度 (K)":`計算開始時の液体の温度です。`,"MRF回転数 (RPM)":`攪拌翼の回転速度（1分間の回転数）です。`,"半径方向分割数 (r)":`タンク内を半径方向にどれだけ細かく区切って計算するかを設定します。`,"円周方向分割数 (θ)":`円周方向の分割数です。`,"高さ方向分割数 (y)":`高さ方向の分割数です。`,境界層の層数:`壁付近の急激な流れの変化を正確に捉えるために配置する層数です。`,"境界層全体の厚み (m)":`境界層の全体の厚みです。`,境界層の拡大率:`壁から離れるにつれてメッシュを大きくする割合です。`,"メッシュ適用 (リセット)":`メッシュ設定を変更した後に反映させるボタンです。`,"速度緩和係数 (relax U)":`計算が急激に変化して発散しないよう、速度の計算結果をマイルドに引き継ぐ調整値です。`,"圧力緩和係数 (relax P)":`圧力の計算結果をマイルドに引き継ぐ調整値です。`,"温度緩和係数 (relax T)":`温度の計算結果をマイルドに引き継ぐ調整値です。`,"乱流緩和係数 (relax k)":`乱流パラメータの計算結果をマイルドに引き継ぐ調整値です。`,計算スキーム:`圧力と速度の連成アルゴリズムです。`,空間離散化手法:`メッシュ間で物理量を補間する計算精度の方程式です。`,"形状・計算条件適用 (リセット)":`すべての計算条件を確定・反映させるボタンです。`,背景色:`3Dビューの背景の色（カラーコード）です。`,タンクの表示:`攪拌槽の外壁を表示するかどうかの設定です。`,タンクの透明度:`中の流体や粒子を見えやすくするためのタンク壁の透明度です。`,インペラの表示:`攪拌翼を画面に映すかどうかのチェックです。`,邪魔板の表示:`バッフルを画面に映すかどうかのチェックです。`,コイルの表示:`伝熱コイルを画面に映すかどうかのチェックです。`,MRFゾーンの表示:`回転領域を画面に映すかどうかのチェックです。`,"断面／３D切替":`タンクを真っ二つに割った断面図にするか全体の3Dにするかの切り替えです。`,断面の向き:`断面を垂直に切るか水平に切るかの設定です。`,水平断面の高さ:`水平断面の位置（高さ）の設定です。`,メッシュ描画形式:`メッシュの線を表示する方法です。`,"コンターの補間 (Smooth)":`色グラデーションの滑らかさです。`,カラースケール基準:`色の変化を絶対値にするか、相対値にするかの設定です。`,カラースケールを対数表示:`温度・圧力・速度などすべてのカラースケールを対数軸で表示します。わずかな値の差を強調したいときに有効です。`,粘度を対数スケール表示:`粘度のカラースケールを対数軸で表示します。非ニュートン流体で粘度が桁違いに変化する場合に有効です。`,"現在の最低温度 (K)":`計算中の領域内の温度の最小値です。`,"現在の最高温度 (K)":`計算中の領域内の温度の最大値です。`,"粒子濃度下限閾値 (個/L)":`画面に表示する粒子の濃度の足切りライン（下限）です。`,"粒子濃度最大スケール (個/L)":`粒子の濃度の最大スケール値です。`,濃度を対数スケール表示:`濃度の色の変化を対数で強調するかのチェックです。`,温度分布の表示:`画面中央の3Dグラフィックスに温度を色としてマッピングします。`,圧力分布の表示:`圧力を色としてマッピングします。`,粒子濃度の表示:`粒子濃度を色としてマッピングします。`,"粒子追跡(DPM)の表示":`粒子追跡を表示します。`,粘度分布の表示:`粘度の色分布を表示します。`,乱流粘度の表示:`k-εモデルで計算された乱流（渦）粘度 μₜ の分布を断面コンターで表示します。高い値はインペラ周辺など乱流混合が活発な領域を示します。`,速度ベクトルの表示:`液体の流れる方向を矢印で表示します。`,ベクトル長さ倍率:`流速ベクトルの矢印の大きさの倍率です。`,流線の表示:`インペラ付近を起点とした定常流の流線を表示します。`,流線の数:`表示する流線の本数です。`,高温領域の表示:`指定した温度以上の領域だけを立体的な面（等温面）として表示します。`,"下限温度 (K)":`高温領域の下限温度です。`,低温領域の表示:`指定した温度以下の領域を表示します。`,"上限温度 (K)":`低温領域の上限温度です。`,カラーバーの表示:`画面に色の意味（凡例）を出すかどうかのチェックです。`,CFD計算モニタの表示:`計算の進捗や残差を表示するモニタパネルのON/OFFです。`,ヘルプチップの表示:`各設定項目にマウスを乗せた時に表示される説明チップのON/OFFです。`,垂直断面の縦割り位置:`垂直断面を切る角度位置（0=正面, 1=背面）を0〜1で指定します。スライダーで断面の縦割り場所をリアルタイムに変更できます。`,寸法を表示:`攪拌槽の主要寸法（タンク直径・高さ・インペラ径・幅・クリアランス・液高さ・コイル等）を引き出し線付きで3Dビュー上に重ねて表示します。`,操作条件を表示:`現在の攪拌条件（温度・粘度・速度・圧力の平均/最大/最小）をコンパクトなフロートウィンドウにリアルタイム表示します。ドラッグで移動できます。`,"パース (遠近感)":`3D表示に遠近感をつけるか、平行投影にするかです。`,"🔄 表示を初期化 (位置・スケールリセット)":`カメラ視点や表示スケールを初期状態に戻します。`,垂直断面を正面から見る:`画面中央のような、タンクを真横から見た綺麗な断面構図にカメラを固定します。`,水平断面を真上から見る:`タンクを上から見下ろした（翼の回転方向がよく見える）構図にカメラを固定します。`};function ip(){let e=document.getElementById(`gui-custom-tooltip`);e&&(e.style.display=`none`)}function ap(){let e=document.getElementById(`gui-custom-tooltip`);e||(e=document.createElement(`div`),e.id=`gui-custom-tooltip`,e.style.cssText=[`position:fixed`,`z-index:99999`,`max-width:260px`,`padding:7px 10px`,`background:rgba(20,20,30,0.97)`,`color:#e8e8e8`,`font-size:12px`,`line-height:1.55`,`border:1px solid rgba(255,255,255,0.18)`,`border-radius:6px`,`box-shadow:0 4px 18px rgba(0,0,0,0.55)`,`pointer-events:none`,`display:none`,`white-space:pre-wrap`,`word-break:break-all`].join(`;`),document.body.appendChild(e));let t=null,n=(n,i)=>{window.appParams&&window.appParams.showHelpTooltips===!1||(clearTimeout(t),e.textContent=n,e.style.display=`block`,r(i))},r=t=>{let n=t.clientX+14,r=t.clientY+14,i=window.innerWidth,a=window.innerHeight,o=e.offsetWidth,s=e.offsetHeight;e.style.left=(n+o>i?n-o-28:n)+`px`,e.style.top=(r+s>a?r-s-28:r)+`px`},i=()=>{t=setTimeout(()=>{e.style.display=`none`},80)},a=()=>{document.querySelectorAll(`.lil-controller`).forEach(e=>{if(e.dataset.tipAttached)return;let t=e.querySelector(`.lil-name`);if(!t)return;let a=rp[t.textContent.trim()];a&&(e.dataset.tipAttached=`1`,e.style.cursor=`help`,e.addEventListener(`mouseenter`,e=>n(a,e)),e.addEventListener(`mousemove`,e=>r(e)),e.addEventListener(`mouseleave`,i))})};a();let o=new MutationObserver(a);document.querySelectorAll(`.lil-gui`).forEach(e=>{o.observe(e,{childList:!0,subtree:!0})})}var op=class{constructor(e){this.mesh=e,this.device=null,this.pipeline=null,this.isSupported=!1,this.isReady=!1,this.packedArray=null,this.buffers={},this.bindGroups=[]}async init(){if(!navigator.gpu)return console.warn(`WebGPU is not supported on this browser.`),this.isSupported=!1,!1;try{let e=await navigator.gpu.requestAdapter();if(!e)return console.warn(`Failed to request WebGPU adapter.`),this.isSupported=!1,!1;this.device=await e.requestDevice({requiredLimits:{maxStorageBufferBindingSize:e.limits.maxStorageBufferBindingSize,maxBufferSize:e.limits.maxBufferSize}}),this.isSupported=!0;let t=this.device.createShaderModule({label:`Jacobi Solver Compute Shader`,code:`
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
        `}),n=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:`storage`}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:`uniform`}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:`read-only-storage`}}]}),r=this.device.createPipelineLayout({bindGroupLayouts:[n]});return this.pipeline=this.device.createComputePipeline({layout:r,compute:{module:t,entryPoint:`main`}}),this.isReady=!0,!0}catch(e){return console.error(`Failed to initialize WebGPU device / shaders:`,e),this.isSupported=!1,this.isReady=!1,!1}}prepareBuffers(e){if(this.buffers.numCells===e)return;for(let e in this.buffers)this.buffers[e]instanceof GPUBuffer&&this.buffers[e].destroy();let t=e*4,n=e*8*4;this.buffers.coeffs=this.device.createBuffer({size:n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.buffers.phi_in=this.device.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.buffers.phi_out=this.device.createBuffer({size:t,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.buffers.readback=this.device.createBuffer({size:t,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.buffers.params=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.buffers.nbrs=this.device.createBuffer({size:e*6*4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.buffers.numCells=e,this.bindGroups=[this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.coeffs}},{binding:1,resource:{buffer:this.buffers.phi_in}},{binding:2,resource:{buffer:this.buffers.phi_out}},{binding:3,resource:{buffer:this.buffers.params}},{binding:4,resource:{buffer:this.buffers.nbrs}}]}),this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.buffers.coeffs}},{binding:1,resource:{buffer:this.buffers.phi_out}},{binding:2,resource:{buffer:this.buffers.phi_in}},{binding:3,resource:{buffer:this.buffers.params}},{binding:4,resource:{buffer:this.buffers.nbrs}}]})]}async solve(e,t,n,r,i,a,o,s,c,l){if(!this.isReady&&!await this.init())return!1;let u=e.length;this.prepareBuffers(u),(!this.packedArray||this.packedArray.length!==u*8)&&(this.packedArray=new Float32Array(u*8));let d=this.packedArray;for(let e=0;e<u;e++){let l=e*8;d[l]=t[e],d[l+1]=n[e],d[l+2]=r[e],d[l+3]=i[e],d[l+4]=a[e],d[l+5]=o[e],d[l+6]=s[e],d[l+7]=c[e]}let f=this.device.queue;f.writeBuffer(this.buffers.coeffs,0,d),f.writeBuffer(this.buffers.phi_in,0,e),f.writeBuffer(this.buffers.nbrs,0,this.mesh.neighbors);let p=new Uint32Array([this.mesh.nr,this.mesh.ntheta,this.mesh.ny,u]);f.writeBuffer(this.buffers.params,0,p);let m=Math.ceil(u/256);for(let e=0;e<l;e++){let t=this.device.createCommandEncoder(),n=t.beginComputePass();n.setPipeline(this.pipeline);let r=e%2;n.setBindGroup(0,this.bindGroups[r]),n.dispatchWorkgroups(m),n.end(),f.submit([t.finish()])}let h=l%2==1?this.buffers.phi_out:this.buffers.phi_in,g=this.device.createCommandEncoder();g.copyBufferToBuffer(h,0,this.buffers.readback,0,u*4),f.submit([g.finish()]),await this.buffers.readback.mapAsync(GPUMapMode.READ);let _=this.buffers.readback.getMappedRange(),v=new Float32Array(_);return e.set(v),this.buffers.readback.unmap(),!0}},sp=class{constructor(e,t){this.mesh=e,this.params=t,this.ur=new Float32Array(e.numCells),this.utheta=new Float32Array(e.numCells),this.uy=new Float32Array(e.numCells),this.p=new Float32Array(e.numCells),this.pCorr=new Float32Array(e.numCells),this.T=new Float32Array(e.numCells),this.k=new Float32Array(e.numCells),this.eps=new Float32Array(e.numCells),this.mut=new Float32Array(e.numCells),this.gamma_dot=new Float32Array(e.numCells),this.mu_app=new Float32Array(e.numCells),this.T.fill(t.initialTemp||293.15),this.k.fill(.01),this.eps.fill(.01),this.density=t.density||1e3,this.viscosity=t.viscosity||.001,this.mu_app.fill(this.viscosity),this.heatCap=t.heatCapacity||4180,this.thermCond=t.thermalConductivity||.6,this.relaxU=t.relaxU===void 0?.5:t.relaxU,this.relaxP=t.relaxP===void 0?.3:t.relaxP,this.relaxT=t.relaxT===void 0?.9:t.relaxT,this.relaxK=t.relaxK===void 0?.5:t.relaxK,this.vol=new Float32Array(e.numCells),this.aE=new Float32Array(e.numCells),this.aW=new Float32Array(e.numCells),this.aN=new Float32Array(e.numCells),this.aS=new Float32Array(e.numCells),this.aT=new Float32Array(e.numCells),this.aB=new Float32Array(e.numCells),this.aP=new Float32Array(e.numCells),this.b=new Float32Array(e.numCells),this.areaE=new Float32Array(e.numCells),this.areaW=new Float32Array(e.numCells),this.areaN=new Float32Array(e.numCells),this.areaS=new Float32Array(e.numCells),this.areaT=new Float32Array(e.numCells),this.areaB=new Float32Array(e.numCells),this.Gamma=new Float32Array(e.numCells),this.S_C=new Float32Array(e.numCells),this.S_P=new Float32Array(e.numCells),this.dCellR=new Float32Array(e.numCells),this.dCellTheta=new Float32Array(e.numCells),this.dCellY=new Float32Array(e.numCells),this.aP_ur=new Float32Array(e.numCells),this.aP_ut=new Float32Array(e.numCells),this.aP_uy=new Float32Array(e.numCells),this.gradP_r=new Float32Array(e.numCells),this.gradP_theta=new Float32Array(e.numCells),this.gradP_y=new Float32Array(e.numCells),this.Sp_ur=new Float32Array(e.numCells),this.Sp_ut=new Float32Array(e.numCells),this.Sp_uy=new Float32Array(e.numCells),this.residuals={U:0,P:0,T:0},this.iter=0,this.cfl=0,this.viscDiffNum=0,this.thermDiffNum=0,this.pseudo_dt=.005,this.currentRpm=0,this.rpmRampStep=.3,this.refPressValue=0,this.targetCFL=.5,this.maxCFL=.8,this.maxDiffNum=.5,this.targetDiffNum=.4,this.dtMin=1e-4;{let e=(t.tankDiameter||1)/2;this.dtMax=Math.min(.02,.02/Math.max(e,1))}this.dtGrowthRate=1.05,this.dtShrinkRate=.7,this.gpuSolver=new op(e),this.computeGeometry();{let n=(t.rpm||100)*(2*Math.PI/60),r=(t.tankDiameter||1)/2,i=e&&e.ntheta?e.ntheta:180,a=2*Math.PI/i,o=Math.max(n*r,.001),s=this.targetCFL*(r*a)/o;this.pseudo_dt=Math.min(this.dtMax,Math.max(this.dtMin,s))}this.updateProperties(),this.rotorAngle=0}computeGeometry(){this.vol=this.mesh.vol,this.areaE=this.mesh.areaE,this.areaW=this.mesh.areaW,this.areaN=this.mesh.areaN,this.areaS=this.mesh.areaS,this.areaT=this.mesh.areaT,this.areaB=this.mesh.areaB,this.dCellR=this.mesh.dCellR,this.dCellTheta=this.mesh.dCellTheta,this.dCellY=this.mesh.dCellY}clearParticleSources(){this.Sp_ur.fill(0),this.Sp_ut.fill(0),this.Sp_uy.fill(0)}addParticleDragSource(e,t,n,r,i,a){let o=this.mesh,s=0;for(let t=0;t<o.nr;t++)if(e>=o.rNode[t]&&e<=o.rNode[t+1]){s=t;break}let c=0;for(let e=0;e<o.ntheta;e++){let n=o.thetaNode[e],r=o.thetaNode[e+1];if(t>=n&&t<r){c=e;break}}let l=0,u=o.getBottomY(e,this.params),d=u+this.params.liquidHeight,f=(n-u)/(d-u);for(let e=0;e<o.ny;e++)if(f>=o.etaNode[e]&&f<=o.etaNode[e+1]){l=e;break}let p=s+o.nr*(c+o.ntheta*l),m=r*Math.cos(t)+a*Math.sin(t),h=-r*Math.sin(t)+a*Math.cos(t),g=i,_=this.vol[p];_>0&&o.flag[p]===0&&(this.Sp_ur[p]+=m/_,this.Sp_ut[p]+=h/_,this.Sp_uy[p]+=g/_)}interpolateVelocityAt(e,t,n){let r=this.mesh,i=-1;for(let t=0;t<r.nr;t++)if(e>=r.rNode[t]&&e<=r.rNode[t+1]){i=t;break}if(i===-1)return{ur:0,utheta:0,uy:0};let a=-1;for(let e=0;e<r.ntheta;e++){let n=r.thetaNode[e],i=r.thetaNode[e+1];if(t>=n&&t<i){a=e;break}}a===-1&&(a=0);let o=-1,s=r.getBottomY(e,this.params),c=s+this.params.liquidHeight,l=(n-s)/(c-s);for(let e=0;e<r.ny;e++)if(l>=r.etaNode[e]&&l<=r.etaNode[e+1]){o=e;break}if(o===-1)return{ur:0,utheta:0,uy:0};let u=i+r.nr*(a+r.ntheta*o);return r.flag[u]===0?{ur:this.ur[u],utheta:this.utheta[u],uy:this.uy[u]}:{ur:0,utheta:0,uy:0}}async step(){if(this.updateRpmRamp(),this.adaptTimeStep(),(this.params.rotationModel||`MRF`)===`SlidingMesh`){let e=this.currentRpm*(2*Math.PI/60)*this.pseudo_dt;this.rotorAngle=(this.rotorAngle||0)+e,this.mesh.updateSlidingMesh(e,this.params)}this.clearParticleSources(),this.updateProperties(),this.updateBoundaryConditions(),await this.solveMomentum(),await this.solvePressureCorrection(),this.params.turbulenceModel===`k-epsilon`&&await this.solveTurbulence(),await this.solveEnergy(),this.boundVariables(),this.computeCFL(),this.computeDiffusionNumbers(),this.iter++}updateRpmRamp(){let e=this.params.rpm||0,t=e-this.currentRpm;Math.abs(t)<=this.rpmRampStep?this.currentRpm=e:this.currentRpm+=Math.sign(t)*this.rpmRampStep}adaptTimeStep(){if(this.iter===0){let e=this.currentRpm*(2*Math.PI/60);if(e>1e-6){let t=(this.params.tankDiameter||1)/2,n=this.mesh.ntheta||180,r=2*Math.PI/n,i=Math.max(e*t,.001),a=this.targetCFL*(t*r)/i;this.pseudo_dt=Math.min(this.dtMax,Math.max(this.dtMin,a))}return}Math.max(this.viscDiffNum,this.thermDiffNum);let e=!1;if(this.cfl>this.maxCFL){let t=this.pseudo_dt*(this.targetCFL/Math.max(this.cfl,1e-6));this.pseudo_dt=Math.max(this.dtMin,t),e=!0}this.maxDiffNum,!e&&this.cfl<this.targetCFL&&this.cfl>0&&(this.pseudo_dt*=this.dtGrowthRate,this.pseudo_dt>this.dtMax&&(this.pseudo_dt=this.dtMax)),this.pseudo_dt<this.dtMin&&(this.pseudo_dt=this.dtMin)}computeCFL(){let e=this.mesh,t=e.flag,n=this.pseudo_dt,r=0,i=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let a=0;a<e.numCells;a++){if(t[a]!==0)continue;let e=this.dCellTheta[a],o;o=e<i?(Math.abs(this.ur[a])/this.dCellR[a]+Math.abs(this.uy[a])/this.dCellY[a])*n:(Math.abs(this.ur[a])/this.dCellR[a]+Math.abs(this.utheta[a])/e+Math.abs(this.uy[a])/this.dCellY[a])*n,o>r&&(r=o)}this.cfl=r}computeDiffusionNumbers(){let e=this.mesh,t=e.flag,n=this.pseudo_dt,r=this.density||1e3,i=this.thermCond/(r*(this.heatCap||4180)),a=0,o=0,s=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let c=0;c<e.numCells;c++){if(t[c]!==0)continue;let e=this.dCellR[c],l=this.dCellTheta[c],u=this.dCellY[c],d=l<s?1/(e*e)+1/(u*u):1/(e*e)+1/(l*l)+1/(u*u),f=(this.mu_app[c]||this.viscosity)/r*n*d,p=i*n*d;f>a&&(a=f),p>o&&(o=p)}this.viscDiffNum=a,this.thermDiffNum=o}boundVariables(){let e=this.mesh,t=e.numCells,n=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let e=0;e<t;e++){this.ur[e]>10&&(this.ur[e]=10),this.ur[e]<-10&&(this.ur[e]=-10),this.dCellTheta[e]<n?this.utheta[e]=0:(this.utheta[e]>20&&(this.utheta[e]=20),this.utheta[e]<-20&&(this.utheta[e]=-20)),this.uy[e]>10&&(this.uy[e]=10),this.uy[e]<-10&&(this.uy[e]=-10);{let t=this.params.liquidHeight||1,n=this.currentRpm*(2*Math.PI/60),r=(this.params.tankDiameter||1)/2,i=this.density*9.81*t,a=.5*this.density*(n*r)**2,o=Math.max(1e4,5*(i+a));this.p[e]>o&&(this.p[e]=o),this.p[e]<-o&&(this.p[e]=-o)}this.k[e]<1e-6&&(this.k[e]=1e-6),this.k[e]>100&&(this.k[e]=100),this.eps[e]<1e-6&&(this.eps[e]=1e-6),this.eps[e]>1e3&&(this.eps[e]=1e3),this.T[e]<273.15&&(this.T[e]=273.15),this.T[e]>1e3&&(this.T[e]=1e3)}}calculateApparentViscosity(){let e=this.mesh,t=e.numCells;this.mu_app||=new Float32Array(t);let n=!!this.params.tempDependence,r=this.params.andradeT_ref||298.15,i=this.params.andradeEa1||0,a=this.params.andradeEa2||0,o=(e,t)=>!n||e===0?1:Math.exp(e*(1/Math.max(t,200)-1/r));if(this.params.fluidModel===`Newtonian`){for(let n=0;n<t;n++){if(e.flag[n]!==0)continue;let t=o(a,this.T&&this.T[n]>0?this.T[n]:r),i=this.params.viscosity*t,s=this.params.muMin===void 0?1e-4:this.params.muMin,c=this.params.muMax===void 0?100:this.params.muMax;this.mu_app[n]=Math.max(s,Math.min(i,c))}return}let s=this.params.powerLawK||.1,c=this.params.powerLawN||.5,l=this.params.yieldStress||10,u=this.params.viscosity||.001,d=(e,t)=>{t=Math.max(t,.001),this.gamma_dot&&(this.gamma_dot[e]=t);let n=this.T&&this.T[e]>0?this.T[e]:r,d=o(i,n),f=o(a,n),p=s*f,m=l*d,h=u*f,g=h;this.params.fluidModel===`Power-law`?g=p*t**(c-1):this.params.fluidModel===`Bingham`?g=h+m/t*(1-Math.exp(-100*t)):this.params.fluidModel===`Herschel-Bulkley`&&(g=p*t**(c-1)+m/t*(1-Math.exp(-100*t)));let _=this.params.muMin===void 0?1e-4:this.params.muMin,v=this.params.muMax===void 0?100:this.params.muMax;g=Math.max(_,Math.min(g,v)),this.mu_app[e]=g};for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let i=r+e.nr*(n+e.ntheta*t);if(e.flag[i]!==0)continue;let a=e.getCellCenter(r,n,t,this.params).r,o=r<e.nr-1?i+1:i,s=r>0?i-1:i,c=e.rNode[r+1]-e.rNode[r],l=r<e.nr-1&&r>0?(this.ur[o]-this.ur[s])/(2*c):0,u=r<e.nr-1&&r>0?(this.utheta[o]-this.utheta[s])/(2*c):0,f=r<e.nr-1&&r>0?(this.uy[o]-this.uy[s])/(2*c):0,p=(n+1)%e.ntheta,m=(n-1+e.ntheta)%e.ntheta,h=r+e.nr*(p+e.ntheta*t),g=r+e.nr*(m+e.ntheta*t),_=e.thetaNode[n+1]-e.thetaNode[n],v=Math.max(a,1e-9)*_,y=(this.ur[h]-this.ur[g])/(2*v),b=(this.utheta[h]-this.utheta[g])/(2*v),x=(this.uy[h]-this.uy[g])/(2*v),S=t<e.ny-1?t+1:t,C=t>0?t-1:t,w=r+e.nr*(n+e.ntheta*S),T=r+e.nr*(n+e.ntheta*C),E=Math.max(e.distT[i]+e.distB[i],1e-9),D=t<e.ny-1&&t>0?(this.ur[w]-this.ur[T])/E:0,O=t<e.ny-1&&t>0?(this.utheta[w]-this.utheta[T])/E:0,k=t<e.ny-1&&t>0?(this.uy[w]-this.uy[T])/E:0,A=this.ur[i],j=this.utheta[i];d(i,Math.sqrt(2*l*l+2*(b+A/a)**2+2*k*k+(u-j/a+y)**2+(f+D)**2+(x+O)**2))}{let t=e.nr*e.ntheta*e.ny,n=n=>{let r=this.ur[n],i=this.utheta[n];if(n>=t)return{ux:r,uz:i};{let t=e.getCellCenterByIdx(n,this.params);return{ux:r*Math.cos(t.theta)-i*Math.sin(t.theta),uz:r*Math.sin(t.theta)+i*Math.cos(t.theta)}}};for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let r=e.neighbors[t*6+0],i=e.neighbors[t*6+1],a=e.neighbors[t*6+2],o=e.neighbors[t*6+3],s=e.neighbors[t*6+4],c=e.neighbors[t*6+5],l=n(t),u=r>=0?n(r):l,f=i>=0?n(i):l,p=a>=0?n(a):l,m=o>=0?n(o):l,h=s>=0?n(s):l,g=c>=0?n(c):l,_=s>=0?this.uy[s]:this.uy[t],v=c>=0?this.uy[c]:this.uy[t],y=Math.max(e.distE[t]+e.distW[t],1e-9),b=Math.max(e.distN[t]+e.distS[t],1e-9),x=Math.max(e.distT[t]+e.distB[t],1e-9),S=(u.ux-f.ux)/y,C=(u.uz-f.uz)/y,w=(p.ux-m.ux)/b,T=(p.uz-m.uz)/b,E=(h.ux-g.ux)/x,D=(h.uz-g.uz)/x,O=(this.uy[r>=0?r:t]-this.uy[i>=0?i:t])/y,k=(this.uy[a>=0?a:t]-this.uy[o>=0?o:t])/b,A=(_-v)/x,j=S,M=T,N=A,P=.5*(w+C),F=.5*(E+O),I=.5*(D+k),L=Math.sqrt(2*j*j+2*M*M+2*N*N+4*P*P+4*F*F+4*I*I);d(t,L)}}}updateProperties(){this.calculateApparentViscosity();let e=this.mesh.numCells,t=this.params.turbulenceModel||`Constant`;if(t===`Constant`){let t=this.params.turbulenceIntensity===void 0?.01:this.params.turbulenceIntensity,n=.09*this.density*t*t/(t+1e-8);for(let t=0;t<e;t++)this.mut[t]=this.mesh.flag[t]===0?n:0}else if(t===`MixingLength`){let e=this.params.tankDiameter/2,t=(t,n)=>{let r=e-t,i=n-this.mesh.getBottomY(t,this.params),a=this.mesh.getBottomY(0,this.params)+this.params.liquidHeight-n,o=Math.min(r,Math.max(0,i),Math.max(0,a));return Math.min(.07*e,.41*o)};for(let e=0;e<this.mesh.ny;e++)for(let n=0;n<this.mesh.ntheta;n++)for(let r=0;r<this.mesh.nr;r++){let i=r+this.mesh.nr*(n+this.mesh.ntheta*e);if(this.mesh.flag[i]!==0){this.mut[i]=0;continue}let a=this.mesh.getCellCenter(r,n,e,this.params),o=t(a.r,a.y),s=this.gamma_dot?this.gamma_dot[i]:1,c=this.density*o*o*s;this.mut[i]=Math.max(1e-6,Math.min(10,c))}for(let e=this.mesh.nr*this.mesh.ntheta*this.mesh.ny;e<this.mesh.numCells;e++){if(this.mesh.flag[e]!==0){this.mut[e]=0;continue}let n=this.mesh.getCellCenterByIdx(e,this.params),r=t(n.r,n.y),i=this.gamma_dot?this.gamma_dot[e]:1,a=this.density*r*r*i;this.mut[e]=Math.max(1e-6,Math.min(10,a))}}else if(t===`k-epsilon`)for(let t=0;t<e;t++)if(this.mesh.flag[t]===0){let e=this.k[t],n=this.eps[t],r=.09*this.density*e*e/(n+1e-8);this.mut[t]=Math.max(1e-6,Math.min(10,r))}else this.mut[t]=0}getImpellerFactors(){let e=this.params.impellerType,t=.8,n=0,r=0;switch(e){case`FlatPropeller`:t=.5,n=1.2,r=.05;break;case`Pfaudler`:t=.6,n=.8,r=.1;break;case`InclinedPaddle`:case`PitchedBlade`:t=.7,n=.5,r=.3;break;case`FlatPaddle`:t=.8,n=.1,r=.5;break;case`Turbine`:case`Rushton`:t=.9,n=0,r=.6;break;case`Anchor`:case`Ribbon`:t=.9,n=0,r=.1;break}return{slipFactor:t,axialPumpFactor:n,radialPumpFactor:r}}async gaussSeidel(e,t,n,r,i,a,o,s,c,l=10,u=null){if(this.params.computationMode===`GPU (WebGPU)`&&this.gpuSolver&&u!==`P`&&u!==`T`){let d;d=u===`P`?l*20:u===`U`?l*5:l*2;let f=new Float32Array(e);if(await this.gpuSolver.solve(e,t,n,r,i,a,o,s,c,d)){let l=0;if(u===`P`){let u=this.mesh,d=u.nr,f=u.ntheta,p=u.ny;for(let m=0;m<p;m++)for(let h=0;h<f;h++)for(let g=0;g<d;g++){let _=g+d*(h+f*m);if(u.flag[_]!==0)continue;let v=(h+1)%f,y=g+d*(v+f*m),b=(h-1+f)%f,x=g+d*(b+f*m),S=s[_]*e[_];g<d-1&&(S-=t[_]*e[_+1]),g>0&&(S-=n[_]*e[_-1]),S-=r[_]*e[y],S-=i[_]*e[x],m<p-1&&(S-=a[_]*e[_+d*f]),m>0&&(S-=o[_]*e[_-d*f]);let C=Math.abs(c[_]-S);C>l&&(l=C)}}else for(let t=0;t<e.length;t++){let n=Math.abs(e[t]-f[t]);n>l&&(l=n)}u&&this.residuals&&(this.residuals[u]=l);return}}let d=this.mesh,f=d.nr,p=d.ntheta,m=d.ny,h=d.flag,g=0;for(let _=0;_<l;_++){g=0;let l=_%2==1;for(let _=0;_<d.numCells;_++){let v=l?d.numCells-1-_:_;if(h[v]!==0)continue;let y=c[v],b=d.neighbors,x=b[v*6+0];x>=0&&(y+=t[v]*e[x]);let S=b[v*6+1];S>=0&&(y+=n[v]*e[S]);let C=b[v*6+2];C>=0&&(y+=r[v]*e[C]);let w=b[v*6+3];w>=0&&(y+=i[v]*e[w]);let T=b[v*6+4];T>=0&&(y+=a[v]*e[T]);let E=b[v*6+5];if(E>=0&&(y+=o[v]*e[E]),s[v]!==0){let t=e[v];if(e[v]=y/s[v],Number.isNaN(e[v])){let e=-1,n=-1,r=-1;throw v<f*p*m&&(r=Math.floor(v/(f*p)),n=Math.floor(v/f)%p,e=v%f),Error(`NaN detected at idx=${v}, k=${r}, j=${n}, i=${e}, resKey=${u}, sum=${y}, aP=${s[v]}, old=${t}, b=${c[v]}`)}else{let n=Math.abs(e[v]-t);n>g&&(g=n)}}}}if(u&&this.residuals)if(u===`P`){let l=0;for(let u=0;u<m;u++)for(let d=0;d<p;d++)for(let g=0;g<f;g++){let _=g+f*(d+p*u);if(h[_]!==0)continue;let v=(d+1)%p,y=g+f*(v+p*u),b=(d-1+p)%p,x=g+f*(b+p*u),S=s[_]*e[_];g<f-1&&(S-=t[_]*e[_+1]),g>0&&(S-=n[_]*e[_-1]),S-=r[_]*e[y],S-=i[_]*e[x],u<m-1&&(S-=a[_]*e[_+f*p]),u>0&&(S-=o[_]*e[_-f*p]);let C=Math.abs(c[_]-S);C>l&&(l=C)}this.residuals[u]=l}else this.residuals[u]=g}buildCoefficients(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=this.mesh,m=this.params;p.nr,p.ntheta,p.ny;let h=p.flag,g=this.density;d.fill(0);let _=1/(this.heatCap||4180),v=e===this.ur||e===this.utheta||e===this.uy||e===this.k||e===this.eps,y=(!m.mirrorPlateType||m.mirrorPlateType===`None`?`ShellOnly`:m.jacketCoverage||`Full`)===`ShellOnly`?7:1,b=e=>{let t=`wall`,n=`wall`,r=293.15,i=500,a=!0;if(e===1){t=m.bc_fluid_jacket||`noSlip`,n=m.bc_heat_jacket||`externalWallHeatTransfer`,r=m.jacketTemp===void 0?293.15:m.jacketTemp,i=m.ua===void 0?500:m.ua,a=m.jacketType!==`None`;let e=m.bc_type_jacket||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_jacket||`zeroGradient`,n=m.bc_heat_jacket||`fixedValue`)}else if(e===7){t=m.bc_fluid_bottomHead||`noSlip`,n=m.bc_heat_bottomHead||`zeroGradient`,r=m.bottomHeadTemp===void 0?293.15:m.bottomHeadTemp,i=m.bottomHeadUa===void 0?500:m.bottomHeadUa,a=!0;let e=m.bc_type_bottomHead||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_bottomHead||`zeroGradient`,n=m.bc_heat_bottomHead||`fixedValue`)}else if(e===3){t=m.bc_fluid_coil||`noSlip`,n=m.bc_heat_coil||`externalWallHeatTransfer`,r=m.coilTemp===void 0?293.15:m.coilTemp,i=m.coilUa===void 0?500:m.coilUa,a=!!m.coilEnabled;let e=m.bc_type_coil||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_coil||`zeroGradient`,n=m.bc_heat_coil||`fixedValue`)}else if(e===4){t=m.bc_fluid_impeller||`noSlip`,n=m.bc_heat_impeller||`zeroGradient`,r=m.impellerTemp===void 0?293.15:m.impellerTemp,i=1e5,a=!0;let e=m.bc_type_impeller||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_impeller||`zeroGradient`,n=m.bc_heat_impeller||`fixedValue`)}else if(e===5){t=m.bc_fluid_rod||`noSlip`,n=m.bc_heat_rod||`zeroGradient`,r=m.rodTemp===void 0?293.15:m.rodTemp,i=1e5,a=!0;let e=m.bc_type_rod||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_rod||`zeroGradient`,n=m.bc_heat_rod||`fixedValue`)}else if(e===6){t=m.bc_fluid_baffle||`noSlip`,n=m.bc_heat_baffle||`zeroGradient`,r=m.baffleTemp===void 0?293.15:m.baffleTemp,i=1e5,a=!0;let e=m.bc_type_baffle||`wall`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_baffle||`zeroGradient`,n=m.bc_heat_baffle||`fixedValue`)}else if(e===2){t=m.bc_fluid_surface||`slip`,n=m.bc_heat_surface||`zeroGradient`,r=m.surfaceTemp===void 0?293.15:m.surfaceTemp,i=m.surfaceUa===void 0?500:m.surfaceUa,a=!0;let e=m.bc_type_surface||`symmetry`;e===`symmetryPlane`||e===`symmetry`?(t=`slip`,n=`zeroGradient`):e===`patch`&&(t=m.bc_fluid_surface||`zeroGradient`,n=m.bc_heat_surface||`fixedValue`)}return{bcTypeFluid:t,bcTypeHeat:n,T_bc:r,ua:i,isEnabled:a}},x=(t,n,r,i)=>{let a=b(r);if(e===this.T){let e=r===1?m.bc_type_jacket||`wall`:r===7?m.bc_type_bottomHead||`wall`:r===2?m.bc_type_surface||`symmetry`:r===3?m.bc_type_coil||`wall`:r===4?m.bc_type_impeller||`wall`:r===5?m.bc_type_rod||`wall`:r===6&&m.bc_type_baffle||`wall`;if(e===`symmetryPlane`||e===`symmetry`||a.bcTypeHeat===`zeroGradient`)return{aNb0:0,aP0_add:-t,b_add:0};if(a.bcTypeHeat===`externalWallHeatTransfer`)if(a.isEnabled){let e=a.ua*n*_;return{aNb0:0,aP0_add:e-t,b_add:e*a.T_bc}}else return{aNb0:0,aP0_add:-t,b_add:0};if(a.bcTypeHeat===`fixedValue`){let e=1e5*n*_;return{aNb0:0,aP0_add:e-t,b_add:e*a.T_bc}}return{aNb0:0,aP0_add:-t,b_add:0}}else if(v)return a.bcTypeFluid===`movingWallVelocity`?{aNb0:0,aP0_add:t,b_add:t*(i>=0?e[i]:0)}:a.bcTypeFluid===`noSlip`?{aNb0:0,aP0_add:t,b_add:0}:a.bcTypeFluid===`fixedValue`?{aNb0:0,aP0_add:t,b_add:t*(i>=0?e[i]:0)}:{aNb0:0,aP0_add:-t,b_add:0};else{let e=r===1?m.bc_type_jacket||`wall`:r===7?m.bc_type_bottomHead||`wall`:r===2?m.bc_type_surface||`symmetry`:r===3?m.bc_type_coil||`wall`:r===4?m.bc_type_impeller||`wall`:r===5?m.bc_type_rod||`wall`:r===6&&m.bc_type_baffle||`wall`,n=r===1?m.bc_press_jacket||`fixedFluxPressure`:r===7?m.bc_press_bottomHead||`fixedFluxPressure`:r===2?m.bc_press_surface||`totalPressure`:r===3?m.bc_press_coil||`fixedFluxPressure`:r===4?m.bc_press_impeller||`fixedFluxPressure`:r===5?m.bc_press_rod||`fixedFluxPressure`:r===6&&m.bc_press_baffle||`fixedFluxPressure`;return e===`symmetryPlane`||e===`symmetry`||n===`zeroGradient`||n===`fixedFluxPressure`?{aNb0:0,aP0_add:-t,b_add:0}:n===`fixedValue`||n===`totalPressure`?{aNb0:0,aP0_add:0,b_add:0}:{aNb0:0,aP0_add:-t,b_add:0}}};for(let _=0;_<p.numCells;_++){if(h[_]!==0)continue;let v=this.vol[_],b=p.neighbors,S=b[_*6+0],C=b[_*6+1],w=b[_*6+2],T=b[_*6+3],E=b[_*6+4],D=b[_*6+5],O=this.areaE[_],k=this.areaW[_],A=this.areaN[_],j=this.areaS[_],M=this.areaT[_],N=this.areaB[_],P=0,F=0,I=0,L=0,ee=0,te=0,ne=p.nr*p.ntheta*p.ny;if(_<ne){if(S>=0&&p.flag[S]===0)if(S>=ne){let e=p.getCellCenterByIdx(S,this.params),t=this.ur[S]*Math.cos(e.theta)+this.utheta[S]*Math.sin(e.theta);P=.5*(this.ur[_]+t)}else P=.5*(this.ur[_]+this.ur[S]);if(C>=0&&p.flag[C]===0)if(C>=ne){let e=p.getCellCenterByIdx(C,this.params),t=this.ur[C]*Math.cos(e.theta)+this.utheta[C]*Math.sin(e.theta);F=.5*(this.ur[_]+t)}else F=.5*(this.ur[_]+this.ur[C]);w>=0&&p.flag[w]===0&&(I=.5*(this.utheta[_]+this.utheta[w])),T>=0&&p.flag[T]===0&&(L=.5*(this.utheta[_]+this.utheta[T]))}else{let e=this.ur[_],t=this.utheta[_];if(S>=0&&p.flag[S]===0)if(S>=ne)P=.5*(e+this.ur[S]);else{let t=p.getCellCenterByIdx(S,this.params).theta;P=.5*(e+(this.ur[S]*Math.cos(t)-this.utheta[S]*Math.sin(t)))}if(C>=0&&p.flag[C]===0)if(C>=ne)F=.5*(e+this.ur[C]);else{let t=p.getCellCenterByIdx(C,this.params).theta;F=.5*(e+(this.ur[C]*Math.cos(t)-this.utheta[C]*Math.sin(t)))}if(w>=0&&p.flag[w]===0)if(w>=ne)I=.5*(t+this.utheta[w]);else{let e=p.getCellCenterByIdx(w,this.params).theta;I=.5*(t+(this.ur[w]*Math.sin(e)+this.utheta[w]*Math.cos(e)))}if(T>=0&&p.flag[T]===0)if(T>=ne)L=.5*(t+this.utheta[T]);else{let e=p.getCellCenterByIdx(T,this.params).theta;L=.5*(t+(this.ur[T]*Math.sin(e)+this.utheta[T]*Math.cos(e)))}}E>=0&&p.flag[E]===0&&(ee=.5*(this.uy[_]+this.uy[E])),D>=0&&p.flag[D]===0&&(te=.5*(this.uy[_]+this.uy[D]));let R=g*P*O,re=g*F*k,ie=g*I*A,z=g*L*j,ae=g*ee*M,oe=g*te*N,se=t[_]*O/p.distE[_],ce=t[_]*k/p.distW[_],le=t[_]*A/p.distN[_],ue=t[_]*j/p.distS[_],de=t[_]*M/p.distT[_],fe=t[_]*N/p.distB[_],pe=se+Math.max(-R,0),me=ce+Math.max(re,0),he=le+Math.max(-ie,0),ge=ue+Math.max(z,0),_e=de+Math.max(-ae,0),ve=fe+Math.max(oe,0),ye=pe+me+he+ge+_e+ve-r[_]*v;if(1/(this.heatCap||4180),m.ua!==void 0&&m.ua,m.coilUa!==void 0&&m.coilUa,e===this.ur||e===this.utheta||e===this.uy||e===this.k||this.eps,S<0){let e=x(pe,O,1,-1);ye+=e.aP0_add,d[_]+=e.b_add,pe=e.aNb0}else if(h[S]>0){let e=x(pe,O,h[S],S);ye+=e.aP0_add,d[_]+=e.b_add,pe=e.aNb0}if(C<0){let e=x(me,k,1,-1);ye+=e.aP0_add,d[_]+=e.b_add,me=e.aNb0}else if(h[C]>0){let e=x(me,k,h[C],C);ye+=e.aP0_add,d[_]+=e.b_add,me=e.aNb0}if(w<0){let e=x(he,A,1,-1);ye+=e.aP0_add,d[_]+=e.b_add,he=e.aNb0}else if(h[w]>0){let e=x(he,A,h[w],w);ye+=e.aP0_add,d[_]+=e.b_add,he=e.aNb0}if(T<0){let e=x(ge,j,1,-1);ye+=e.aP0_add,d[_]+=e.b_add,ge=e.aNb0}else if(h[T]>0){let e=x(ge,j,h[T],T);ye+=e.aP0_add,d[_]+=e.b_add,ge=e.aNb0}if(E<0||h[E]===2){let e=x(_e,M,2,-1);ye+=e.aP0_add,d[_]+=e.b_add,_e=e.aNb0}else if(h[E]>0){let e=x(_e,M,h[E],E);ye+=e.aP0_add,d[_]+=e.b_add,_e=e.aNb0}if(D<0){let e=x(ve,N,y,-1);ye+=e.aP0_add,d[_]+=e.b_add,ve=e.aNb0}else if(h[D]>0){let e=x(ve,N,h[D],D);ye+=e.aP0_add,d[_]+=e.b_add,ve=e.aNb0}i[_]=pe,a[_]=me,o[_]=he,s[_]=ge,c[_]=_e,l[_]=ve,u[_]=ye;let be=this.pseudo_dt,xe=g*v/be;u[_]+=xe,d[_]+=n[_]*v+xe*e[_],u[_]=u[_]/f,d[_]=d[_]+(1-f)*u[_]*e[_]}}averageAxisSingularity(e){let t=this.mesh,n=t.nr,r=t.ntheta,i=t.ny,a=t.flag;for(let t=0;t<i;t++){let i=0,o=0;for(let s=0;s<r;s++){let c=0+n*(s+r*t);a[c]===0&&(i+=e[c],o++)}if(o>0){let s=i/o;for(let i=0;i<r;i++){let o=0+n*(i+r*t);a[o]===0&&(e[o]=s)}}}}async solveMomentum(){let e=this.mesh,t=e.numCells,n=this.density,r=this.currentRpm*(2*Math.PI/60),i=(this.params.rotationModel||`MRF`)===`MRF`,a=!!(this.params.energyEquation&&String(this.params.energyEquation).startsWith(`On`)),o=t=>{let n=e.neighbors[t*6+0],r=e.neighbors[t*6+1],i=n>=0&&e.flag[n]===0,a=r>=0&&e.flag[r]===0;return i&&a?e.distE[t]+e.distW[n]+(e.distW[t]+e.distE[r]):i?e.distE[t]+e.distW[n]:a?e.distW[t]+e.distE[r]:e.distE[t]+e.distW[t]},s=t=>{let n=e.neighbors[t*6+2],r=e.neighbors[t*6+3],i=n>=0&&e.flag[n]===0,a=r>=0&&e.flag[r]===0;return i&&a?e.distN[t]+e.distS[n]+(e.distS[t]+e.distN[r]):i?e.distN[t]+e.distS[n]:a?e.distS[t]+e.distN[r]:e.distN[t]+e.distS[t]};for(let e=0;e<t;e++)this.Gamma[e]=(this.mu_app?this.mu_app[e]:this.viscosity)+this.mut[e];for(let t=0;t<e.ny;t++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*t);if(e.flag[s]!==0)continue;let c=e.getCellCenter(o,a,t,this.params).r,l=this.utheta[s],u=n*l*l/c,d=e.neighbors[s*6+1],f=d>=0&&e.flag[d]===0,p=o<e.nr-1?this.p[s+1]:this.p[s],m=f?this.p[d]:this.p[s],h=(o<e.nr-1?.5*(e.rNode[o+1]+e.rNode[o+2]):.5*(e.rNode[o]+e.rNode[o+1]))-(f?e.getCellCenterByIdx(d,this.params).r:.5*(e.rNode[o]+e.rNode[o+1])),g=(p-m)/(h||1e-5);u-=g,this.gradP_r[s]=g,i&&e.mrf[s]===1&&(u+=n*(2*r*l+r*r*c)),u+=this.Sp_ur[s],this.S_C[s]=u,this.S_P[s]=-this.Gamma[s]/(c*c)}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let a=e.getCellCenterByIdx(t,this.params).x,s=e.neighbors[t*6+0],c=e.neighbors[t*6+1],l=s>=0?this.p[s]:this.p[t],u=c>=0?this.p[c]:this.p[t],d=o(t),f=(l-u)/(d||1e-5),p=-f;i&&e.mrf[t]===1&&(p+=n*(-2*r*this.utheta[t]+r*r*a)),p+=this.Sp_ur[t],this.S_C[t]=p,this.gradP_r[t]=f,this.S_P[t]=0}this.buildCoefficients(this.ur,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_ur.set(this.aP),await this.gaussSeidel(this.ur,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`),this.averageAxisSingularity(this.ur);let c=(e.rNode&&e.rNode.length>1?e.rNode[1]-e.rNode[0]:.01)*.5;for(let t=0;t<e.ny;t++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*t);if(e.flag[s]!==0)continue;let l=e.getCellCenter(o,a,t,this.params).r,u=this.ur[s],d=this.utheta[s],f=l<c,p=f?0:-this.Gamma[s]/(l*l);this.S_C[s]=0,f||(u>0?p-=n*u/l:this.S_C[s]+=-n*u*d/l);let m=(a+1)%e.ntheta,h=(a-1+e.ntheta)%e.ntheta,g=this.p[o+e.nr*(m+e.ntheta*t)],_=this.p[o+e.nr*(h+e.ntheta*t)],v=e.thetaNode[m]-e.thetaNode[a];v<0&&(v+=2*Math.PI);let y=e.thetaNode[a]-e.thetaNode[h];y<0&&(y+=2*Math.PI);let b=f?0:(g-_)/(l*(v+y)||1e-5);this.S_C[s]-=b,this.gradP_theta[s]=b,i&&e.mrf[s]===1&&(this.S_C[s]-=n*2*r*u),this.S_C[s]+=this.Sp_ut[s],this.S_P[s]=p}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let a=e.getCellCenterByIdx(t,this.params).z,o=e.neighbors[t*6+2],c=e.neighbors[t*6+3],l=o>=0?this.p[o]:this.p[t],u=c>=0?this.p[c]:this.p[t],d=s(t),f=(l-u)/(d||1e-5),p=-f;i&&e.mrf[t]===1&&(p+=n*(2*r*this.ur[t]+r*r*a)),this.S_C[t]=p+this.Sp_ut[t],this.gradP_theta[t]=f,this.S_P[t]=0}this.buildCoefficients(this.utheta,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_ut.set(this.aP);for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let i=r+e.nr*(n+e.ntheta*t);if(e.flag[i]!==0||e.mrf[i]!==1)continue;let a=[];(n+1)%e.ntheta,(n-1+e.ntheta)%e.ntheta;let o=e.neighbors[i*6+0],s=e.neighbors[i*6+1],c=e.neighbors[i*6+2],l=e.neighbors[i*6+3],u=e.neighbors[i*6+4],d=e.neighbors[i*6+5];for(let t of[o,s,c,l,u,d])t!==-1&&e.flag[t]===0&&e.mrf[t]!==1&&this.aP_ut[t]>1&&a.push(this.aP_ut[t]);if(a.length>0){let e=a.reduce((e,t)=>e+t,0)/a.length;this.aP_ut[i]=e}}for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let i=r+e.nr*(n+e.ntheta*t);if(e.flag[i]!==0||e.mrf[i]!==1||this.aP_ut[i]!==1)continue;let a=(n+1)%e.ntheta,o=(n-1+e.ntheta)%e.ntheta,s=[r<e.nr-1?i+1:-1,r>0?i-1:-1,r+e.nr*(a+e.ntheta*t),r+e.nr*(o+e.ntheta*t),t<e.ny-1?i+e.nr*e.ntheta:-1,t>0?i-e.nr*e.ntheta:-1].filter(t=>t!==-1&&e.flag[t]===0&&this.aP_ut[t]>1).map(e=>this.aP_ut[e]);s.length>0&&(this.aP_ut[i]=s.reduce((e,t)=>e+t,0)/s.length)}await this.gaussSeidel(this.utheta,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`);for(let t=0;t<e.ny;t++)for(let r=0;r<e.ntheta;r++)for(let i=0;i<e.nr;i++){let o=i+e.nr*(r+e.ntheta*t);if(e.flag[o]!==0)continue;let s=t<e.ny-1?this.p[o+e.nr*e.ntheta]:this.p[o],c=t>0?this.p[o-e.nr*e.ntheta]:this.p[o],l=e.distT[o]+e.distB[o],u=(s-c)/(l||1e-5);this.S_C[o]=-u,this.gradP_y[o]=u,a&&(this.S_C[o]+=n*9.81*2e-4*(this.T[o]-293.15)),this.S_C[o]+=this.Sp_uy[o],this.S_P[o]=0}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;let r=e.neighbors[t*6+4],i=e.neighbors[t*6+5],o=r>=0?this.p[r]:this.p[t],s=i>=0?this.p[i]:this.p[t],c=e.distT[t]+e.distB[t],l=(o-s)/(c||1e-5);this.S_C[t]=-l,this.gradP_y[t]=l,a&&(this.S_C[t]+=n*9.81*2e-4*(this.T[t]-293.15)),this.S_C[t]+=this.Sp_uy[t],this.S_P[t]=0}this.buildCoefficients(this.uy,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxU),this.aP_uy.set(this.aP),await this.gaussSeidel(this.uy,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`U`),this.averageAxisSingularity(this.uy)}async solvePressureCorrection(){let e=this.mesh,t=this.density,n=this.params,r=(e,t)=>e+t>1e-30?2*e*t/(e+t):e,i=new Float32Array(e.numCells),a=t=>t<0?!1:t<e.nr*e.ntheta*e.ny?!0:e.getCellCenterByIdx(t,n).r>=(e.ogridRc||.1)-1e-5,o=(!n.mirrorPlateType||n.mirrorPlateType===`None`?`ShellOnly`:n.jacketCoverage||`Full`)===`ShellOnly`?7:1;for(let r=0;r<e.ny;r++)for(let a=0;a<e.ntheta;a++)for(let s=0;s<e.nr;s++){let c=s+e.nr*(a+e.ntheta*r);if(e.flag[c]!==0)continue;let l=e.neighbors[c*6+0],u=e.neighbors[c*6+1],d=e.neighbors[c*6+2],f=e.neighbors[c*6+3],p=e.neighbors[c*6+4],m=e.neighbors[c*6+5],h=l>=0?.5*(this.aP_ur[c]+this.aP_ur[l]):this.aP_ur[c],g=u>=0?.5*(this.aP_ur[c]+this.aP_ur[u]):this.aP_ur[c],_=.5*(this.aP_ut[c]+this.aP_ut[d]),v=.5*(this.aP_ut[c]+this.aP_ut[f]),y=p>=0?.5*(this.aP_uy[c]+this.aP_uy[p]):this.aP_uy[c],b=m>=0?.5*(this.aP_uy[c]+this.aP_uy[m]):this.aP_uy[c],x=this.areaE[c]/Math.max(h,1e-10),S=this.areaW[c]/Math.max(g,1e-10),C=this.areaN[c]/Math.max(_,1e-10),w=this.areaS[c]/Math.max(v,1e-10),T=this.areaT[c]/Math.max(y,1e-10),E=this.areaB[c]/Math.max(b,1e-10),D=0,O=0,k=0,A=0,j=0,M=0,N=e.nr*e.ntheta*e.ny;if(l>=0&&e.flag[l]===0){let t=Math.max(.5*(this.dCellR[c]+this.dCellR[l]),1e-9),n=this.p[l]-this.p[c],r=.5*(this.gradP_r[c]+this.gradP_r[l]),i=this.ur[l];if(l>=N){let t=e.getCellCenterByIdx(l,this.params);i=this.ur[l]*Math.cos(t.theta)+this.utheta[l]*Math.sin(t.theta)}D=.5*(this.ur[c]+i)+x*(r*t-n)}if(u>=0&&e.flag[u]===0){let t=Math.max(.5*(this.dCellR[c]+this.dCellR[u]),1e-9),n=this.p[c]-this.p[u],r=.5*(this.gradP_r[c]+this.gradP_r[u]),i=this.ur[u];if(u>=N){let t=e.getCellCenterByIdx(u,this.params);i=this.ur[u]*Math.cos(t.theta)+this.utheta[u]*Math.sin(t.theta)}O=.5*(this.ur[c]+i)+S*(r*t-n)}if(e.flag[d]===0){let e=Math.max(.5*(this.dCellTheta[c]+this.dCellTheta[d]),1e-9),t=this.p[d]-this.p[c],n=.5*(this.gradP_theta[c]+this.gradP_theta[d]);k=.5*(this.utheta[c]+this.utheta[d])+C*(n*e-t)}if(e.flag[f]===0){let e=Math.max(.5*(this.dCellTheta[c]+this.dCellTheta[f]),1e-9),t=this.p[c]-this.p[f],n=.5*(this.gradP_theta[c]+this.gradP_theta[f]);A=.5*(this.utheta[c]+this.utheta[f])+w*(n*e-t)}if(p>=0&&e.flag[p]===0){let e=Math.max(.5*(this.dCellY[c]+this.dCellY[p]),1e-9),t=this.p[p]-this.p[c],n=.5*(this.gradP_y[c]+this.gradP_y[p]);j=.5*(this.uy[c]+this.uy[p])+T*(n*e-t)}if(m>=0&&e.flag[m]===0){let e=Math.max(.5*(this.dCellY[c]+this.dCellY[m]),1e-9),t=this.p[c]-this.p[m],n=.5*(this.gradP_y[c]+this.gradP_y[m]);M=.5*(this.uy[c]+this.uy[m])+E*(n*e-t)}let P=t*this.areaE[c]*x,F=t*this.areaW[c]*S,I=t*this.areaN[c]*C,L=t*this.areaS[c]*w,ee=t*this.areaT[c]*T,te=t*this.areaB[c]*E,ne=t*D*this.areaE[c],R=t*O*this.areaW[c],re=t*k*this.areaN[c],ie=t*A*this.areaS[c],z=t*j*this.areaT[c],ae=t*M*this.areaB[c];s===0&&(i[c]=R),this.b[c]=R-ne+ie-re+ae-z,this.aE[c]=P,this.aW[c]=F,this.aN[c]=I,this.aS[c]=L,this.aT[c]=ee,this.aB[c]=te;let oe=(t,r)=>{let i=t>=0?e.flag[t]:r;return i===1?n.bc_press_jacket||`fixedFluxPressure`:i===7?n.bc_press_bottomHead||`fixedFluxPressure`:i===2?n.bc_press_surface||`totalPressure`:i===3?n.bc_press_coil||`fixedFluxPressure`:i===4?n.bc_press_impeller||`fixedFluxPressure`:i===5?n.bc_press_rod||`fixedFluxPressure`:i===6&&n.bc_press_baffle||`fixedFluxPressure`},se=(e,t)=>{let n=oe(e,t);return n===`fixedValue`||n===`totalPressure`};(l<0||e.flag[l]!==0)&&(se(l,1)||(this.aE[c]=0)),(u<0||e.flag[u]!==0)&&(u>=0&&e.flag[u]===0||se(u,1)||(this.aW[c]=0)),e.flag[d]!==0&&(se(d,1)||(this.aN[c]=0)),e.flag[f]!==0&&(se(f,1)||(this.aS[c]=0)),(p<0||e.flag[p]!==0)&&(se(p,2)||(this.aT[c]=0)),(m<0||e.flag[m]!==0)&&(se(m,o)||(this.aB[c]=0)),this.aP[c]=this.aE[c]+this.aW[c]+this.aN[c]+this.aS[c]+this.aT[c]+this.aB[c],this.aP[c]===0&&(this.aP[c]=1,this.b[c]=0)}for(let n=e.nr*e.ntheta*e.ny;n<e.numCells;n++){if(e.flag[n]!==0)continue;e.getCellCenterByIdx(n,this.params).theta;let o=e.neighbors[n*6+0],s=e.neighbors[n*6+1],c=e.neighbors[n*6+2],l=e.neighbors[n*6+3],u=e.neighbors[n*6+4],d=e.neighbors[n*6+5],f=o>=0?.5*(this.aP_ur[n]+this.aP_ur[o]):this.aP_ur[n],p=s>=0?.5*(this.aP_ur[n]+this.aP_ur[s]):this.aP_ur[n],m=c>=0?.5*(this.aP_ut[n]+this.aP_ut[c]):this.aP_ut[n],h=l>=0?.5*(this.aP_ut[n]+this.aP_ut[l]):this.aP_ut[n],g=u>=0?.5*(this.aP_uy[n]+this.aP_uy[u]):this.aP_uy[n],_=d>=0?.5*(this.aP_uy[n]+this.aP_uy[d]):this.aP_uy[n],v=this.areaE[n]/Math.max(f,1e-10),y=this.areaW[n]/Math.max(p,1e-10),b=this.areaN[n]/Math.max(m,1e-10),x=this.areaS[n]/Math.max(h,1e-10),S=this.areaT[n]/Math.max(g,1e-10),C=this.areaB[n]/Math.max(_,1e-10),w=e.nr*e.ntheta*e.ny,T=this.ur[n],E=this.utheta[n],D=0,O=0,k=0,A=0,j=0,M=0;if(o>=0&&e.flag[o]===0){let t=this.ur[o];if(o<w){let n=e.getCellCenterByIdx(o,this.params).theta;t=this.ur[o]*Math.cos(n)-this.utheta[o]*Math.sin(n)}D=.5*(T+t)}if(s>=0&&e.flag[s]===0){let t=this.ur[s];if(s<w){let n=e.getCellCenterByIdx(s,this.params).theta;t=this.ur[s]*Math.cos(n)-this.utheta[s]*Math.sin(n)}O=.5*(T+t)}if(c>=0&&e.flag[c]===0){let t=this.utheta[c];if(c<w){let n=e.getCellCenterByIdx(c,this.params).theta;t=this.ur[c]*Math.sin(n)+this.utheta[c]*Math.cos(n)}k=.5*(E+t)}if(l>=0&&e.flag[l]===0){let t=this.utheta[l];if(l<w){let n=e.getCellCenterByIdx(l,this.params).theta;t=this.ur[l]*Math.sin(n)+this.utheta[l]*Math.cos(n)}A=.5*(E+t)}u>=0&&e.flag[u]===0&&(j=.5*(this.uy[n]+this.uy[u])),d>=0&&e.flag[d]===0&&(M=.5*(this.uy[n]+this.uy[d]));let N=o>=0?this.p[o]:this.p[n],P=s>=0?this.p[s]:this.p[n],F=c>=0?this.p[c]:this.p[n],I=l>=0?this.p[l]:this.p[n],L=u>=0?this.p[u]:this.p[n],ee=d>=0?this.p[d]:this.p[n],te=o>=0&&!a(n)&&a(o),ne=s>=0&&!a(n)&&a(s),R=c>=0&&!a(n)&&a(c),re=l>=0&&!a(n)&&a(l),ie=te?i[o]*(this.areaE[n]/Math.max(e.areaW[o],1e-10)):t*this.areaE[n]*(D-v*(N-this.p[n])),z=ne?-i[s]*(this.areaW[n]/Math.max(e.areaW[s],1e-10)):t*this.areaW[n]*(O-y*(this.p[n]-P));a(n)&&s>=0&&!a(s)&&(i[n]=z);let ae=R?i[c]*(this.areaN[n]/Math.max(e.areaW[c],1e-10)):t*this.areaN[n]*(k-b*(F-this.p[n])),oe=re?-i[l]*(this.areaS[n]/Math.max(e.areaW[l],1e-10)):t*this.areaS[n]*(A-x*(this.p[n]-I)),se=t*this.areaT[n]*(j-S*(L-this.p[n])),ce=t*this.areaB[n]*(M-C*(this.p[n]-ee));this.b[n]=z-ie+oe-ae+ce-se;let le=this.aP_ur[n],ue=this.aP_ut[n],de=this.aP_uy[n],fe=0,pe=0,me=0,he=0,ge=0,_e=0;if(o>=0&&e.flag[o]===0){let e=r(le,this.aP_ur[o]);fe=t*this.areaE[n]*(this.areaE[n]/Math.max(e,1e-10))}if(s>=0&&e.flag[s]===0){let e=r(le,this.aP_ur[s]);pe=t*this.areaW[n]*(this.areaW[n]/Math.max(e,1e-10))}if(c>=0&&e.flag[c]===0){let e=r(ue,this.aP_ut[c]);me=t*this.areaN[n]*(this.areaN[n]/Math.max(e,1e-10))}if(l>=0&&e.flag[l]===0){let e=r(ue,this.aP_ut[l]);he=t*this.areaS[n]*(this.areaS[n]/Math.max(e,1e-10))}if(u>=0&&e.flag[u]===0){let e=r(de,this.aP_uy[u]);ge=t*this.areaT[n]*(this.areaT[n]/Math.max(e,1e-10))}if(d>=0&&e.flag[d]===0){let e=r(de,this.aP_uy[d]);_e=t*this.areaB[n]*(this.areaB[n]/Math.max(e,1e-10))}this.aE[n]=te?this.aW[o]:fe,this.aW[n]=ne?this.aW[s]:pe,this.aN[n]=R?this.aW[c]:me,this.aS[n]=re?this.aW[l]:he,this.aT[n]=ge,this.aB[n]=_e,(o<0||e.flag[o]!==0)&&(this.aE[n]=0),(s<0||e.flag[s]!==0)&&(this.aW[n]=0),(c<0||e.flag[c]!==0)&&(this.aN[n]=0),(l<0||e.flag[l]!==0)&&(this.aS[n]=0),(u<0||e.flag[u]!==0)&&(this.aT[n]=0),(d<0||e.flag[d]!==0)&&(this.aB[n]=0),this.aP[n]=this.aE[n]+this.aW[n]+this.aN[n]+this.aS[n]+this.aT[n]+this.aB[n],this.aP[n]===0&&(this.aP[n]=1,this.b[n]=0)}let s=this.refPressIdx;if(s===void 0||e.flag[s]!==0){s=-1;for(let t=0;t<e.numCells;t++)if(e.flag[t]===0){s=t;break}}if(s>=0&&(this.aE[s]=0,this.aW[s]=0,this.aN[s]=0,this.aS[s]=0,this.aT[s]=0,this.aB[s]=0,this.aP[s]=1,this.b[s]=0),this.resolvedPinIdx=s,this.iter%50==0){let e=s>=0?this.p[s]:NaN;console.log(`[iter=${this.iter}] pinIdx=${s}, flag=${s>=0?this.mesh.flag[s]:`N/A`}, p[pin]=${e?.toFixed(2)}, pseudo_dt=${this.pseudo_dt.toExponential(3)}, CFL=${this.cfl.toFixed(3)}`)}this.pCorr.fill(0);let c=Math.min(200,Math.max(20,Math.ceil(Math.sqrt(e.nr*e.ny))));await this.gaussSeidel(this.pCorr,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,c,`P`);{let t=this.currentRpm*(Math.PI/30)*((this.params.impellerDiameter||.333)/2),n=.5*this.density*t*t,r=this.pressClampMax===void 0?Math.max(1e4,50*n):this.pressClampMax;for(let t=0;t<e.numCells;t++)e.flag[t]===0&&(this.pCorr[t]>r&&(this.pCorr[t]=r),this.pCorr[t]<-r&&(this.pCorr[t]=-r))}for(let t=0;t<e.ny;t++)for(let n=0;n<e.ntheta;n++)for(let r=0;r<e.nr;r++){let i=r+e.nr*(n+e.ntheta*t);if(e.flag[i]!==0)continue;this.p[i]+=this.relaxP*this.pCorr[i];let a=e.neighbors[i*6+0],o=e.neighbors[i*6+1],s=e.neighbors[i*6+2],c=e.neighbors[i*6+3],l=e.neighbors[i*6+4],u=e.neighbors[i*6+5],d=a>=0?.5*(this.aP_ur[i]+this.aP_ur[a]):this.aP_ur[i],f=o>=0?.5*(this.aP_ur[i]+this.aP_ur[o]):this.aP_ur[i],p=.5*(this.aP_ut[i]+this.aP_ut[s]),m=.5*(this.aP_ut[i]+this.aP_ut[c]),h=l>=0?.5*(this.aP_uy[i]+this.aP_uy[l]):this.aP_uy[i],g=u>=0?.5*(this.aP_uy[i]+this.aP_uy[u]):this.aP_uy[i],_=this.areaE[i]/Math.max(d,1e-10),v=this.areaW[i]/Math.max(f,1e-10),y=this.areaN[i]/Math.max(p,1e-10),b=this.areaS[i]/Math.max(m,1e-10),x=this.areaT[i]/Math.max(h,1e-10),S=this.areaB[i]/Math.max(g,1e-10);a>=0&&e.flag[a]===0&&(this.ur[i]-=_*(this.pCorr[a]-this.pCorr[i])),o>=0&&e.flag[o]===0&&(this.ur[i]-=v*(this.pCorr[i]-this.pCorr[o])),e.flag[s]===0&&(this.utheta[i]-=y*(this.pCorr[s]-this.pCorr[i])),e.flag[c]===0&&(this.utheta[i]-=b*(this.pCorr[i]-this.pCorr[c])),l>=0&&e.flag[l]===0&&(this.uy[i]-=x*(this.pCorr[l]-this.pCorr[i])),u>=0&&e.flag[u]===0&&(this.uy[i]-=S*(this.pCorr[i]-this.pCorr[u]))}for(let t=e.nr*e.ntheta*e.ny;t<e.numCells;t++){if(e.flag[t]!==0)continue;this.p[t]+=this.relaxP*this.pCorr[t],e.getCellCenterByIdx(t,this.params).theta;let n=e.neighbors[t*6+0],r=e.neighbors[t*6+1],i=e.neighbors[t*6+2],a=e.neighbors[t*6+3],o=e.neighbors[t*6+4],s=e.neighbors[t*6+5],c=n>=0?this.pCorr[n]:this.pCorr[t],l=r>=0?this.pCorr[r]:this.pCorr[t],u=i>=0?this.pCorr[i]:this.pCorr[t],d=a>=0?this.pCorr[a]:this.pCorr[t],f=o>=0?this.pCorr[o]:this.pCorr[t],p=s>=0?this.pCorr[s]:this.pCorr[t],m=e.distE[t]+e.distW[t],h=e.distN[t]+e.distS[t],g=(c-l)/(m||1e-5),_=(u-d)/(h||1e-5),v=this.aP_ur[t],y=this.aP_ut[t],b=this.aP_uy[t],x=e.vol[t],S=x/Math.max(v,1e-10),C=x/Math.max(y,1e-10),w=x/Math.max(b,1e-10);this.ur[t]-=S*g,this.utheta[t]-=C*_;let T=e.distT[t]+e.distB[t],E=(f-p)/(T||1e-5);this.uy[t]-=w*E}let l=this.resolvedPinIdx;if(l>=0&&e.flag[l]===0){let t=this.refPressValue===void 0?0:this.refPressValue,n=this.p[l]-t;if(Math.abs(n)>1e-8)for(let t=0;t<e.numCells;t++)e.flag[t]===0&&(this.p[t]-=n)}this.averageAxisSingularity(this.p)}async solveTurbulence(){let e=this.mesh,t=this.density,n=this.viscosity,r=1.3,i=1.44;for(let r=0;r<e.ny;r++)for(let i=0;i<e.ntheta;i++)for(let a=0;a<e.nr;a++){let o=a+e.nr*(i+e.ntheta*r);if(e.flag[o]!==0)continue;let s=this.gamma_dot?this.gamma_dot[o]:0,c=this.mut[o]*s*s,l=Math.max(this.k[o],1e-10),u=Math.max(this.eps[o],1e-10);this.Gamma[o]=n+this.mut[o]/1,this.S_C[o]=c,this.S_P[o]=-t*u/l}for(let r=e.nr*e.ntheta*e.ny;r<e.numCells;r++){if(e.flag[r]!==0)continue;let i=this.gamma_dot?this.gamma_dot[r]:0,a=this.mut[r]*i*i,o=Math.max(this.k[r],1e-10),s=Math.max(this.eps[r],1e-10);this.Gamma[r]=n+this.mut[r]/1,this.S_C[r]=a,this.S_P[r]=-t*s/o}this.buildCoefficients(this.k,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxK),await this.gaussSeidel(this.k,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5),this.averageAxisSingularity(this.k);for(let a=0;a<e.ny;a++)for(let o=0;o<e.ntheta;o++)for(let s=0;s<e.nr;s++){let c=s+e.nr*(o+e.ntheta*a);if(e.flag[c]!==0)continue;let l=this.gamma_dot?this.gamma_dot[c]:0,u=this.mut[c]*l*l,d=Math.max(this.k[c],1e-10),f=Math.max(this.eps[c],1e-10);this.Gamma[c]=n+this.mut[c]/r,this.S_C[c]=f/d*i*u,this.S_P[c]=-1.92*t*(f/d)}for(let a=e.nr*e.ntheta*e.ny;a<e.numCells;a++){if(e.flag[a]!==0)continue;let o=this.gamma_dot?this.gamma_dot[a]:0,s=this.mut[a]*o*o,c=Math.max(this.k[a],1e-10),l=Math.max(this.eps[a],1e-10);this.Gamma[a]=n+this.mut[a]/r,this.S_C[a]=l/c*i*s,this.S_P[a]=-1.92*t*(l/c)}this.buildCoefficients(this.eps,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxK),await this.gaussSeidel(this.eps,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5),this.averageAxisSingularity(this.eps)}async solveEnergy(){let e=this.mesh,t=this.heatCap,n=this.thermCond,r=.85;for(let i=0;i<e.ny;i++)for(let a=0;a<e.ntheta;a++)for(let o=0;o<e.nr;o++){let s=o+e.nr*(a+e.ntheta*i);e.flag[s]===0&&(this.Gamma[s]=(n+t*this.mut[s]/r)/t,this.S_C[s]=0,this.S_P[s]=0)}for(let i=e.nr*e.ntheta*e.ny;i<e.numCells;i++)e.flag[i]===0&&(this.Gamma[i]=(n+t*this.mut[i]/r)/t,this.S_C[i]=0,this.S_P[i]=0);this.buildCoefficients(this.T,this.Gamma,this.S_C,this.S_P,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,this.relaxT),await this.gaussSeidel(this.T,this.aE,this.aW,this.aN,this.aS,this.aT,this.aB,this.aP,this.b,5,`T`),this.averageAxisSingularity(this.T)}updateBoundaryConditions(){let e=this.mesh,t=this.params,n=e.nr*e.ntheta*e.ny,r=this.currentRpm*(2*Math.PI/60);e.radius*.8-t.coilRadius*2;let i=t.impellerDiameter/2;t.impellerClearance,t.bladeWidth;let a=(t.shaftDiameter===void 0?t.impellerDiameter*.12:t.shaftDiameter/2)*1.05,o=t.impellerClearance-t.bladeWidth/2,s=t.impellerClearance+t.bladeWidth/2;(t.impellerType===`Anchor`||t.impellerType===`Ribbon`)&&(o=t.tankHeight*.1,s=t.tankHeight*.9);let c=i*t.mrfRadialMargin,l=o-t.mrfVerticalMarginBottom,u=s+t.mrfVerticalMarginTop;for(let i=0;i<e.numCells;i++){let s=e.flag[i];e.mrf[i];let d=e.getCellCenterByIdx(i,t),f=0,p=0,m=0;if(i<e.nr*e.ntheta*e.ny)m=Math.floor(i/(e.nr*e.ntheta)),p=Math.floor(i/e.nr)%e.ntheta,f=i%e.nr;else{let t=i-e.nr*e.ntheta*e.ny,n=e.ntheta/4;m=Math.floor(t/(n*n))}if(s===1||s===3||s===4||s===5||s===6){let p=s===5||d.r<=a&&d.y>=o,m=s===4||s===1&&d.r<=c&&d.y>=l&&d.y<=u;p||m?(this.params.rotationModel||`MRF`)===`MRF`&&e.mrf[i]===1?(this.ur[i]=0,this.utheta[i]=0,this.uy[i]=0):i<n?(this.ur[i]=0,this.utheta[i]=d.r*r,this.uy[i]=0):(this.ur[i]=-r*d.z,this.utheta[i]=r*d.x,this.uy[i]=0):(this.ur[i]=0,this.utheta[i]=0,this.uy[i]=0,s===3?this.T[i]=t.coilTemp:s===1&&t.jacketType!==`None`&&f===e.nr-1?this.T[i]=t.jacketTemp:s===4?this.T[i]=t.impellerTemp===void 0?293.15:t.impellerTemp:s===5?this.T[i]=t.rodTemp===void 0?293.15:t.rodTemp:s===6&&(this.T[i]=t.baffleTemp===void 0?293.15:t.baffleTemp))}else if(s===2){this.ur[i]=0,this.utheta[i]=0,this.uy[i]=0;let n=t.bc_press_surface===`fixedValue`||t.bc_press_surface===`totalPressure`?t.surfacePress===void 0?0:t.surfacePress:0;if(this.p[i]=n,t.bc_heat_surface===`fixedValue`||t.bc_heat_surface===`externalWallHeatTransfer`)this.T[i]=t.surfaceTemp===void 0?293.15:t.surfaceTemp;else{let n;if(i<e.nr*e.ntheta*e.ny)n=i-e.nr*e.ntheta;else{let t=e.ntheta/4;n=i-t*t}m>0&&e.flag[n]===0?this.T[i]=this.T[n]:this.T[i]=t.initialTemp===void 0?293.15:t.initialTemp}}else if(s===0){let t=!1;if(m<e.ny-1){let n;if(i<e.nr*e.ntheta*e.ny)n=f+e.nr*(p+e.ntheta*(m+1));else{let t=e.ntheta/4;n=i+t*t}e.flag[n]===2&&(t=!0)}else m===e.ny-1&&(t=!0);t&&(this.uy[i]=0)}}}},cp=class{constructor(e){this.params=e,this.maxParticles=e.maxParticles||1e3,this.numParticles=0,this.x=new Float32Array(this.maxParticles),this.y=new Float32Array(this.maxParticles),this.z=new Float32Array(this.maxParticles),this.vx=new Float32Array(this.maxParticles),this.vy=new Float32Array(this.maxParticles),this.vz=new Float32Array(this.maxParticles),this.fx=new Float32Array(this.maxParticles),this.fy=new Float32Array(this.maxParticles),this.fz=new Float32Array(this.maxParticles),this.radius=new Float32Array(this.maxParticles),this.mass=new Float32Array(this.maxParticles),this.density=new Float32Array(this.maxParticles),this.kn=e.demKn===void 0?1e4:e.demKn,this.gn=e.demGn===void 0?10:e.demGn,this.kt=e.demKt===void 0?2e3:e.demKt,this.gt=e.demGt===void 0?5:e.demGt,this.mu=e.demMu===void 0?.3:e.demMu,this.surfaceEnergy=e.demSurfaceEnergy===void 0?0:e.demSurfaceEnergy,this.youngsModulus=e.youngsModulus||1e7,this.poissonRatio=e.poissonRatio||.3,this.gx=0,this.gy=-9.81,this.gz=0,this.R_tank=(e.tankDiameter||1)/2,this.H_tank=e.liquidHeight||1}addParticle(e,t,n,r,i,a=0,o=0,s=0){if(this.numParticles>=this.maxParticles)return!1;let c=this.numParticles;return this.x[c]=e,this.y[c]=t,this.z[c]=n,this.vx[c]=a,this.vy[c]=o,this.vz[c]=s,this.radius[c]=r,this.density[c]=i,this.mass[c]=4/3*Math.PI*r*r*r*i,this.numParticles++,!0}integrateStep1(e){for(let t=0;t<this.numParticles;t++){let n=this.fx[t]/this.mass[t],r=this.fy[t]/this.mass[t],i=this.fz[t]/this.mass[t];this.x[t]+=this.vx[t]*e+.5*n*e*e,this.y[t]+=this.vy[t]*e+.5*r*e*e,this.z[t]+=this.vz[t]*e+.5*i*e*e,this.vx[t]+=.5*n*e,this.vy[t]+=.5*r*e,this.vz[t]+=.5*i*e,this.fx[t]=this.mass[t]*this.gx,this.fy[t]=this.mass[t]*this.gy,this.fz[t]=this.mass[t]*this.gz}}integrateStep2(e){for(let t=0;t<this.numParticles;t++){let n=this.fx[t]/this.mass[t],r=this.fy[t]/this.mass[t],i=this.fz[t]/this.mass[t];this.vx[t]+=.5*n*e,this.vy[t]+=.5*r*e,this.vz[t]+=.5*i*e}}computeCollisions(){for(let e=0;e<this.numParticles;e++){let t=Math.sqrt(this.x[e]*this.x[e]+this.z[e]*this.z[e]),n=t+this.radius[e]-this.R_tank;if(n>0){let r=-this.x[e]/(t+1e-9),i=-this.z[e]/(t+1e-9),a=this.vx[e]*r+this.vy[e]*0+this.vz[e]*i,o=this.kn*n-this.gn*a;o>0&&(this.fx[e]+=o*r,this.fz[e]+=o*i)}let r=this.radius[e]-this.y[e];if(r>0){let t=-this.vy[e],n=this.kn*r-this.gn*t;n>0&&(this.fy[e]+=n)}let i=this.y[e]+this.radius[e]-this.H_tank;if(i>0){let t=this.vy[e],n=this.kn*i-this.gn*t;n>0&&(this.fy[e]-=n)}for(let t=e+1;t<this.numParticles;t++){let n=this.x[e]-this.x[t],r=this.y[e]-this.y[t],i=this.z[e]-this.z[t],a=n*n+r*r+i*i,o=this.radius[e]*this.radius[t]/(this.radius[e]+this.radius[t]),s=this.radius[e]+this.radius[t],c=s*1.05;if(a<c*c){let c=Math.sqrt(a),l=n/(c+1e-9),u=r/(c+1e-9),d=i/(c+1e-9),f=s-c,p=0;if(f>0){let n=this.vx[e]-this.vx[t],r=this.vy[e]-this.vy[t],i=this.vz[e]-this.vz[t],a=n*l+r*u+i*d,o=this.kn*f,s=-this.gn*a;p=Math.max(0,o+s)}if(this.surfaceEnergy>0){let e=1.5*Math.PI*this.surfaceEnergy*o;if(f>0)p-=e;else{let t=-f,n=e*Math.exp(-t/(.1*o));p-=n}}this.fx[e]+=p*l,this.fy[e]+=p*u,this.fz[e]+=p*d,this.fx[t]-=p*l,this.fy[t]-=p*u,this.fz[t]-=p*d}}}}computeFluidCoupling(e){let t=e.density,n=e.viscosity;for(let r=0;r<this.numParticles;r++){let i=Math.sqrt(this.x[r]*this.x[r]+this.z[r]*this.z[r]),a=Math.atan2(this.z[r],this.x[r]);a<0&&(a+=2*Math.PI);let o=this.y[r],s=e.interpolateVelocityAt(i,a,o);if(!s)continue;let c=s.ur*Math.cos(a)-s.utheta*Math.sin(a),l=s.ur*Math.sin(a)+s.utheta*Math.cos(a),u=s.uy,d=c-this.vx[r],f=u-this.vy[r],p=l-this.vz[r],m=Math.sqrt(d**2+f**2+p**2),h=2*this.radius[r],g=t*m*h/(n+1e-9),_=24/(g+1e-9);g>.1&&g<=1e3?_=24/g*(1+.15*g**.687):g>1e3&&(_=.44);let v=Math.PI*this.radius[r]*this.radius[r],y=.5*_*t*v*m*m;if(m>1e-6){let t=d/m*y,n=f/m*y,s=p/m*y;this.fx[r]+=t,this.fy[r]+=n,this.fz[r]+=s,e.addParticleDragSource(i,a,o,-t,-n,-s)}}}step(e,t){this.integrateStep1(e),this.computeCollisions(),t&&this.computeFluidCoupling(t),this.integrateStep2(e)}},$={params:{tankDiameter:1,tankHeight:1.2,liquidHeight:1,mirrorPlateType:`None`,impellerType:`Rushton`,impellerDiameter:.333,impellerClearance:.333,bladeCount:6,bladeWidth:.08,bladeThickness:.005,bladeAngle:90,shaftDiameter:void 0,mrfRadialMargin:1.15,mrfVerticalMarginTop:.01,mrfVerticalMarginBottom:.01,baffleCount:4,baffleWidth:.1,baffleThickness:.01,meshNr:150,meshNtheta:180,meshNy:200,blLayers:3,blThickness:.02,blExpansionRatio:1.3,rpm:100,initialTemp:293.15,fluidModel:`Newtonian`,density:1e3,viscosity:.001,powerLawK:.1,powerLawN:.5,yieldStress:10,muMin:1e-4,muMax:100,heatCapacity:4180,thermalConductivity:.6,bc_type_jacket:`wall`,bc_fluid_jacket:`noSlip`,bc_heat_jacket:`externalWallHeatTransfer`,bc_press_jacket:`fixedFluxPressure`,bc_type_bottomHead:`wall`,bc_fluid_bottomHead:`noSlip`,bc_heat_bottomHead:`zeroGradient`,bc_press_bottomHead:`fixedFluxPressure`,bc_type_coil:`wall`,bc_fluid_coil:`noSlip`,bc_heat_coil:`externalWallHeatTransfer`,bc_press_coil:`fixedFluxPressure`,bc_type_impeller:`wall`,bc_fluid_impeller:`noSlip`,bc_heat_impeller:`zeroGradient`,bc_press_impeller:`fixedFluxPressure`,impellerTemp:293.15,bc_type_rod:`wall`,bc_fluid_rod:`noSlip`,bc_heat_rod:`zeroGradient`,bc_press_rod:`fixedFluxPressure`,rodTemp:293.15,bc_type_baffle:`wall`,bc_fluid_baffle:`noSlip`,bc_heat_baffle:`zeroGradient`,bc_press_baffle:`fixedFluxPressure`,baffleTemp:293.15,bc_type_surface:`symmetry`,bc_fluid_surface:`slip`,bc_heat_surface:`zeroGradient`,bc_press_surface:`totalPressure`,surfaceTemp:293.15,surfaceUa:500,jacketPress:0,bottomHeadPress:0,coilPress:0,impellerPress:0,rodPress:0,bafflePress:0,surfacePress:0,jacketType:`Single`,jacketCoverage:`Full`,jacketTemp:350,coilTemp:300,ua:500,bottomHeadTemp:293.15,bottomHeadUa:500,coilEnabled:!1,coilRadius:.1,coilTurns:5,coilHeatSource:`Steam`,showTank:!0,tankOpacity:.3,showImpeller:!0,showBaffle:!0,showCoil:!0,showVelocityVector:!1,showHighTempRegion:!1,highTempLowerLimit:320,showLowTempRegion:!1,lowTempUpperLimit:300,showParticles:!1,showHelpTooltips:!1,showOperatingConditions:!0,particleDensity:2500,particleDiameter:1e3,particleDistributionType:`Uniform`,particleSizeStdDev:200,particleCount:1e3,particlePlacementType:`Uniform`,crystallizationTemp:300,demKn:1e4,demGn:10,demKt:2e3,demGt:5,demMu:.3,demSurfaceEnergy:0,dpmTrailMode:`CurrentOnly`,dpmMaxTrailLength:50,showFluidMesh:!0,showPressureMesh:!1,showMRFZone:!1,crossSectionView:!0,crossSectionType:`Vertical`,crossSectionHeight:.5,crossSectionAngle:.125,displayStyle:`Contour`,showGridMesh:!1,gridMeshStyle:`Wireframe`,interpolateContour:!1,colorScaleMode:`Relative`,currentMinTemp:293.15,currentMaxTemp:293.15,showParticleConc:!1,particleConcThreshold:0,particleConcMaxLimit:10,currentMinConc:0,currentMaxConc:0,showViscosityRegion:!1,viscosityLogScale:!1,currentMinViscosity:.001,currentMaxViscosity:.001,backgroundColor:`#1a1a1a`,turbulenceIntensity:.01,turbulenceModel:`Constant`,rotationModel:`MRF`,computationMode:`CPU`,gizmoMode:`None`,showColorBar:!0,showMeshTab:!1,showCFDMonitor:!0,usePerspective:!0,relaxU:.5,relaxP:.3,relaxT:.9,relaxK:.5,energyEquation:`On (温度・伝熱計算)`,multiphaseModel:`None (単相流)`,timeDependence:`Transient (非定常)`,inletOutletCond:`None (密閉容器)`,symmetryCond:`Periodic (周期境界)`,referencePressureType:`LiquidSurface`,referencePressureValue:0,refPressCustomR:0,refPressCustomTheta:0,refPressCustomY:1,cfdScheme:`SIMPLE (Pseudo-transient)`,discretization:`First-order Upwind`}};try{let e=localStorage.getItem(`stirredTankParams`);if(e){let t=JSON.parse(e);for(let e in t)$.params.hasOwnProperty(e)&&($.params[e]=t[e])}}catch{}Object.assign($.params,{viewVerticalTemp:()=>Ff(`VerticalTemp`),viewVerticalVel:()=>Ff(`VerticalVel`),viewHorizontalCross:()=>Ff(`Horizontal`),runSimulation:()=>{if(window.cfdRunning){window.cfdRunning=!1,console.log(`CFD Paused.`);return}if(console.log(`Starting CFD...`),window.cfdRunning=!0,!$.solver){let e=new Kd($.params);$.solver=new sp(e,$.params),$.demSolver=new cp($.params),up($.demSolver,$.params),lp($.solver,e,$.params)}let e=$.solver,t=async()=>{if(!window.cfdRunning)return;if($.solver!==e){console.log(`Aborting stale CFD loop.`);return}lp(e,e.mesh,$.params);for(let t=0;t<5;t++){if($.solver!==e)return;if(await e.step(),$.demSolver){let t=e.pseudo_dt/10;for(let n=0;n<10;n++)$.demSolver.step(t,e)}}if($.solver!==e)return;document.getElementById(`cfd-iter`).innerText=e.iter,document.getElementById(`cfd-res-u`).innerText=e.residuals.U.toExponential(3),document.getElementById(`cfd-res-p`).innerText=e.residuals.P.toExponential(3),document.getElementById(`cfd-res-t`).innerText=e.residuals.T.toExponential(3);let n=document.getElementById(`cfd-cfl`);if(n){let t=e.cfl.toFixed(3)+` (dt=${e.pseudo_dt.toExponential(2)})`;Math.abs(e.currentRpm-$.params.rpm)>.5&&(t+=` [RPM ${e.currentRpm.toFixed(0)}→${$.params.rpm}]`),n.innerText=t,n.style.color=e.cfl>1?`#ff5555`:``}let r=document.getElementById(`cfd-diff-visc`);r&&(r.innerText=e.viscDiffNum.toFixed(3),r.style.color=``);let i=document.getElementById(`cfd-diff-therm`);i&&(i.innerText=e.thermDiffNum.toFixed(3),i.style.color=``),kf(e,$.params),requestAnimationFrame(t)};t()},resetSimulation:()=>{window.cfdRunning=!1,$.params.currentMinTemp=$.params.initialTemp||293.15,$.params.currentMaxTemp=$.params.initialTemp||293.15,$.params.currentMinPress=0,$.params.currentMaxPress=0,$.params.currentMinConc=0,$.params.currentMaxConc=0,$.params.currentMaxVel=0,$.params.currentMinViscosity=$.params.viscosity||.001,$.params.currentMaxViscosity=$.params.viscosity||.001,$.params.currentMinViscosityDisp=($.params.viscosity||.001).toPrecision(4),$.params.currentMaxViscosityDisp=($.params.viscosity||.001).toPrecision(4);let e=new Kd($.params);$.solver=new sp(e,$.params),$.demSolver=new cp($.params),up($.demSolver,$.params),lp($.solver,e,$.params),document.getElementById(`cfd-iter`).innerText=`0`,document.getElementById(`cfd-res-u`).innerText=`0.000e+0`,document.getElementById(`cfd-res-p`).innerText=`0.000e+0`,document.getElementById(`cfd-res-t`).innerText=`0.000e+0`;let t=document.getElementById(`cfd-cfl`);t&&(t.innerText=`0.000`,t.style.color=``);let n=document.getElementById(`cfd-diff-visc`);n&&(n.innerText=`0.000`,n.style.color=``);let r=document.getElementById(`cfd-diff-therm`);r&&(r.innerText=`0.000`,r.style.color=``),Af(),kf($.solver,$.params),Df(),window.updateAllGuiDisplays&&window.updateAllGuiDisplays(),console.log(`CFD Reset.`)}});function lp(e,t,n){if(!e||!t)return;let r=t.nr,i=t.ntheta,a=t.ny,o=(e,t,n)=>e+r*(t+i*n),s;switch(n.referencePressureType){case`TopCenter`:s=o(0,0,a-1);break;case`BottomCenter`:s=o(0,0,0);break;case`Custom`:{let e=n.tankDiameter/2,t=n.liquidHeight,c=e/r,l=2*Math.PI/i,u=t/a;s=o(Math.max(0,Math.min(r-1,Math.round(n.refPressCustomR/c))),Math.max(0,Math.min(i-1,Math.round(n.refPressCustomTheta*Math.PI/180/l))),Math.max(0,Math.min(a-1,Math.round(n.refPressCustomY/u))));break}default:s=o(Math.floor(r/2),0,a-1);break}e.refPressIdx=s,e.refPressValue=n.referencePressureValue??0,console.log(`[RefPress] type=${n.referencePressureType}, flatIdx=${s}, value=${e.refPressValue} Pa`)}function up(e,t){let n=t.particleCount||1e3,r=t.particleDensity||2500,i=(t.tankDiameter||1)/2,a=t.liquidHeight||1,o=t.particleDiameter||100,s=t.particleSizeStdDev||20,c=t.particleDistributionType||`Uniform`;for(let t=0;t<n;t++){let t=o;if(c===`Log-Normal`&&s>0){let e=s*s,n=Math.log(o*o/Math.sqrt(e+o*o)),r=Math.sqrt(Math.log(e/(o*o)+1)),i=0,a=0;for(;i===0;)i=Math.random();for(;a===0;)a=Math.random();let c=Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*a);t=Math.exp(n+r*c)}else if(c===`Normal`&&s>0){let e=0,n=0;for(;e===0;)e=Math.random();for(;n===0;)n=Math.random();t=o+s*(Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*n))}t=Math.max(.1,t);let n=t*1e-6/2,l=i*Math.sqrt(Math.random())*.8,u=Math.random()*2*Math.PI,d=l*Math.cos(u),f=l*Math.sin(u),p=a*.8+Math.random()*.1;e.addParticle(d,p,f,n,r)}}async function dp(){let{scene:e,camera:t,renderer:n,controls:r}=bf(document.getElementById(`app`),$.params);$.scene=e,Ff(`VerticalTemp`),window.updateCFDGeometry=()=>{Af(),Of($.params),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.updateCFDOnly=()=>{Of($.params),window.updateAllGuiDisplays&&window.updateAllGuiDisplays()},window.makeCFDPanelDraggable=fp,ep($.params,e),document.getElementById(`btn-run`).addEventListener(`click`,$.params.runSimulation),document.getElementById(`btn-reset`).addEventListener(`click`,$.params.resetSimulation);let i=document.getElementById(`select-device`);i&&(i.value=$.params.computationMode||`CPU`,i.addEventListener(`change`,e=>{let t=e.target.value;t===`GPU (WebGPU)`&&!(`gpu`in navigator)?(alert(`お使いのブラウザはWebGPUをサポートしていません。CPUモードで実行します。`),i.value=`CPU`,$.params.computationMode=`CPU`):$.params.computationMode=t;try{let e=localStorage.getItem(`stirredTankParams`),t=e?JSON.parse(e):{};t.computationMode=$.params.computationMode,localStorage.setItem(`stirredTankParams`,JSON.stringify(t))}catch{}}));let a=document.getElementById(`cfd-monitor`),o=document.getElementById(`cfd-monitor-header`);a&&o&&fp(a,o),Pf(),window.appParams=$.params,window.app=$}function fp(e,t){let n=0,r=0,i=0,a=0;t?t.onmousedown=o:e.onmousedown=o;function o(e){e||=window.event,e.preventDefault(),i=e.clientX,a=e.clientY,document.onmouseup=c,document.onmousemove=s,t&&(t.style.cursor=`grabbing`)}function s(t){t||=window.event,t.preventDefault(),n=i-t.clientX,r=a-t.clientY,i=t.clientX,a=t.clientY;let o=e.getBoundingClientRect(),s=o.left-n,c=o.top-r,l=window.innerWidth-o.width-10,u=window.innerHeight-o.height-10;s<10&&(s=10),s>l&&(s=l),c<10&&(c=10),c>u&&(c=u),e.style.transform=`none`,e.style.bottom=`auto`,e.style.left=s+`px`,e.style.top=c+`px`}function c(){document.onmouseup=null,document.onmousemove=null,t&&(t.style.cursor=`grab`)}}dp();