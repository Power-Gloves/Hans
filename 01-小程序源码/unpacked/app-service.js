	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
	/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'delete']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'MsgCount']],[[2,'>'],[[7],[3,'MsgCount']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container tabs-cmn'])
Z([[2,'&&'],[[7],[3,'raceList']],[[2,'>'],[[6],[[7],[3,'raceList']],[3,'length']],[1,0]]])
Z([3,'list-calendar'])
Z([a,[3,'padding-top:'],[[7],[3,'marginTop']],[3,';']])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'dataList']],[[6],[[7],[3,'dataList']],[3,'items']]],[[2,'>'],[[6],[[6],[[7],[3,'dataList']],[3,'items']],[3,'length']],[1,0]]])
Z([[6],[[7],[3,'dataList']],[3,'items']])
Z([3,'id'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'ritems']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'ritems']],[3,'length']],[1,0]]])
Z([[7],[3,'noticeMsgCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'noticeMsgCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataItem']])
Z([3,'group'])
Z([[6],[[7],[3,'dataItem']],[3,'d_content']])
Z([[6],[[7],[3,'dataItem']],[3,'d_pic']])
Z([[6],[[7],[3,'dataItem']],[3,'d_file']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'station']])
Z([[6],[[7],[3,'station']],[3,'contacts']])
Z([3,'id'])
Z([3,'tabCitem'])
Z([3,'citem'])
Z([[6],[[7],[3,'item']],[3,'pagePath']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'pagePath']],[1,'#map#']])
Z(z[7])
Z([[6],[[7],[3,'station']],[3,'pics']])
Z([[6],[[7],[3,'station']],[3,'contents']])
Z([[7],[3,'noticeMsgCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataItem']])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'dataItem']],[3,'m_type']],[1,2]],[[2,'=='],[[6],[[7],[3,'dataItem']],[3,'m_type']],[1,3]]],[[6],[[7],[3,'dataItem']],[3,'m_rid']]],[[2,'>'],[[6],[[7],[3,'dataItem']],[3,'m_rid']],[1,0]]])
Z([3,'tapView'])
Z([3,'btnx'])
Z([[6],[[7],[3,'dataItem']],[3,'m_rid']])
Z([[6],[[7],[3,'dataItem']],[3,'m_type']])
Z([[2,'=='],[[6],[[7],[3,'dataItem']],[3,'m_type']],[1,3]])
Z([[2,'=='],[[6],[[7],[3,'dataItem']],[3,'m_type']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'dataList']],[[2,'>'],[[6],[[7],[3,'dataList']],[3,'recordCount']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataItem']])
Z([[2,'&&'],[[6],[[7],[3,'dataItem']],[3,'m_rid']],[[2,'>'],[[6],[[7],[3,'dataItem']],[3,'m_rid']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'result']])
Z([[2,'&&'],[[7],[3,'statGroupList']],[[2,'>'],[[6],[[7],[3,'statGroupList']],[3,'length']],[1,0]]])
Z([[2,'&&'],[[7],[3,'raceList']],[[2,'>'],[[6],[[7],[3,'raceList']],[3,'length']],[1,0]]])
Z([3,'list-calendar'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'dataResults']],[[6],[[7],[3,'dataResults']],[3,'items']]],[[2,'>'],[[6],[[6],[[7],[3,'dataResults']],[3,'items']],[3,'length']],[1,0]]])
Z([[6],[[7],[3,'dataResults']],[3,'items']])
Z([3,'id'])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'ritems']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'ritems']],[3,'length']],[1,0]]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'top']])
Z(z[2])
Z([[2,'&&'],[[7],[3,'raceTopList']],[[2,'>'],[[6],[[7],[3,'raceTopList']],[3,'length']],[1,0]]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'realtime']])
Z([3,'list-realtime'])
Z([[7],[3,'dataRealTime']])
Z([[6],[[7],[3,'dataRealTime']],[3,'raceItem']])
Z([3,'table table-bordered'])
Z([3,'currentTabRT \x3e\x3d 1 \x26\x26 currentTabRT \x3c\x3d 4'])
Z([[6],[[7],[3,'dataRealTime']],[3,'items']])
Z(z[7])
Z([[2,'=='],[[7],[3,'currentTabRT']],[1,1]])
Z([[2,'=='],[[7],[3,'currentTabRT']],[1,2]])
Z([[2,'=='],[[7],[3,'currentTabRT']],[1,3]])
Z([3,'tapItem'])
Z([a,[3,'row '],[[2,'?:'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'teamInfo']],[[2,'!='],[[6],[[7],[3,'item']],[3,'teamInfo']],[1,'']]],[1,'psitem'],[1,'']],[3,' ritem'],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'id']],[[7],[3,'currItemId']]],[1,' isActive'],[1,'']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isBest']],[1,' isBest'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'teamInfo']],[[2,'!='],[[6],[[7],[3,'item']],[3,'teamInfo']],[1,'']]])
Z([[2,'=='],[[7],[3,'currentTabRT']],[1,4]])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'lapItems']],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'lapItems']],[3,'length']],[1,0]]])
Z([[2,'=='],[[7],[3,'currentTabRT']],[1,5]])
Z([[6],[[7],[3,'dataRealTime']],[3,'controlTop']])
Z([[7],[3,'dlgRealTime']])
Z([[7],[3,'noticeMsgCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'&&'],[[7],[3,'dataList']],[[6],[[7],[3,'dataList']],[3,'round']]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'result']])
Z([[2,'&&'],[[7],[3,'dataList']],[[6],[[7],[3,'dataList']],[3,'items']]])
Z([[6],[[7],[3,'dataList']],[3,'items']])
Z([3,'id'])
Z([3,'tapItem'])
Z([a,[3,'row '],[[2,'?:'],[[2,'&&'],[[6],[[7],[3,'item']],[3,'teamInfo']],[[2,'!='],[[6],[[7],[3,'item']],[3,'teamInfo']],[1,'']]],[1,'psitem'],[1,'']],[3,' ritem'],[[2,'?:'],[[2,'=='],[[7],[3,'currItemId']],[[6],[[7],[3,'item']],[3,'id']]],[1,' isActive'],[1,'']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'userid']],[[7],[3,'userID']]],[1,' isCurr'],[1,'']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isBest']],[1,' isBest'],[1,'']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[2,'&&'],[[6],[[7],[3,'item']],[3,'teamInfo']],[[2,'!='],[[6],[[7],[3,'item']],[3,'teamInfo']],[1,'']]])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'currItemId']],[[6],[[7],[3,'item']],[3,'id']]],[[7],[3,'dataResultItems']]],[[2,'>'],[[6],[[7],[3,'dataResultItems']],[3,'length']],[1,0]]])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'group']])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[10])
Z([[2,'=='],[[7],[3,'currentTab']],[1,'control']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'typeList']],[[2,'>'],[[6],[[7],[3,'typeList']],[3,'length']],[1,0]]])
Z([3,'tabChange'])
Z([3,'navbar'])
Z([[7],[3,'currentMenu']])
Z([[7],[3,'mainMenu']])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'currentMenu']],[1,1]])
Z([[2,'=='],[[7],[3,'currentMenu']],[1,2]])
Z([3,'list-realtime'])
Z([[7],[3,'dataRealTime']])
Z([[6],[[7],[3,'dataRealTime']],[3,'raceItem']])
Z([[6],[[7],[3,'dataRealTime']],[3,'items']])
Z([3,'id'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[7],[3,'currItemId']],[[6],[[7],[3,'item']],[3,'id']]],[[6],[[7],[3,'item']],[3,'lapItems']]],[[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'lapItems']],[3,'length']],[1,0]]])
Z([3,'container'])
Z([[7],[3,'station']])
Z([[6],[[7],[3,'station']],[3,'contents']])
Z([[2,'||'],[[7],[3,'showMarkedX']],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'station']],[3,'isMarked']]],[[7],[3,'showMarked']]]])
Z([3,'tabChange'])
Z([3,'navbar'])
Z([[7],[3,'currentMenu']])
Z([[7],[3,'mainMenu']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataItem']])
Z([[6],[[7],[3,'dataItem']],[3,'statInfo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'!'],[[7],[3,'dataList']]],[[2,'=='],[[6],[[7],[3,'dataList']],[3,'length']],[1,0]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'=='],[[7],[3,'requestSuccess']],[1,1]])
Z([[7],[3,'dataItem']])
Z([[2,'>'],[[7],[3,'currRoundID']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'=='],[[7],[3,'currentTab']],[1,2]])
Z([3,'status-box'])
Z([[2,'&&'],[[7],[3,'signStatus']],[[2,'>='],[[7],[3,'signStatus']],[1,1]]])
Z([[2,'=='],[[7],[3,'safeStatus']],[1,1]])
Z([3,'qrcode'])
Z([[2,'=='],[[7],[3,'isAgree']],[1,1]])
Z(z[2])
Z(z[3])
Z(z[4])
Z([[2,'=='],[[7],[3,'isAgree']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'noticeMsgCount']])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataItem']])
Z([[7],[3,'isChanged']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isAgree']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./utils/common.wxs":np_0,};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./pages/back/ecard.wxml']={};
f_['./pages/back/ecard.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/back/ecard.wxml']['common']();

f_['./pages/calendar/index.wxml']={};
f_['./pages/calendar/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/calendar/index.wxml']['common']();

f_['./pages/calendar/view.wxml']={};
f_['./pages/calendar/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/calendar/view.wxml']['common']();

f_['./pages/docs/index.wxml']={};
f_['./pages/docs/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/docs/index.wxml']['common']();

f_['./pages/docs/search.wxml']={};
f_['./pages/docs/search.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/docs/search.wxml']['common']();

f_['./pages/docs/view.wxml']={};
f_['./pages/docs/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/docs/view.wxml']['common']();

f_['./pages/index/index.wxml']={};
f_['./pages/index/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/index/index.wxml']['common']();

f_['./pages/login/index.wxml']={};
f_['./pages/login/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/login/index.wxml']['common']();

f_['./pages/order/view.wxml']={};
f_['./pages/order/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/order/view.wxml']['common']();

f_['./pages/point/view.wxml']={};
f_['./pages/point/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/point/view.wxml']['common']();

f_['./pages/results/index.wxml']={};
f_['./pages/results/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/results/index.wxml']['common']();

f_['./pages/results/view.wxml']={};
f_['./pages/results/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/results/view.wxml']['common']();

f_['./pages/station/index.wxml']={};
f_['./pages/station/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/station/index.wxml']['common']();

f_['./pages/station/view.wxml']={};
f_['./pages/station/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/station/view.wxml']['common']();

f_['./pages/store/buy.wxml']={};
f_['./pages/store/buy.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/store/buy.wxml']['common']();

f_['./pages/store/index.wxml']={};
f_['./pages/store/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/store/index.wxml']['common']();

f_['./pages/store/view.wxml']={};
f_['./pages/store/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/store/view.wxml']['common']();

f_['./pages/ticket/index.wxml']={};
f_['./pages/ticket/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/ticket/index.wxml']['common']();

f_['./pages/ticket/request.wxml']={};
f_['./pages/ticket/request.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/ticket/request.wxml']['common']();

f_['./pages/ticket/view.wxml']={};
f_['./pages/ticket/view.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/ticket/view.wxml']['common']();

f_['./pages/user/ecard.wxml']={};
f_['./pages/user/ecard.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/user/ecard.wxml']['common']();

f_['./pages/user/index.wxml']={};
f_['./pages/user/index.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/user/index.wxml']['common']();

f_['./pages/user/station.wxml']={};
f_['./pages/user/station.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/user/station.wxml']['common']();

f_['./pages/user/userinfo.wxml']={};
f_['./pages/user/userinfo.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/user/userinfo.wxml']['common']();

f_['./pages/user/userphoto.wxml']={};
f_['./pages/user/userphoto.wxml']['common'] =f_['./utils/common.wxs'] || nv_require("p_./utils/common.wxs");
f_['./pages/user/userphoto.wxml']['common']();

f_['./utils/common.wxs'] = nv_require("p_./utils/common.wxs");
function np_0(){var nv_module={nv_exports:{}};nv_formatTime = (function (nv_date){var nv_year = nv_date.nv_getFullYear();var nv_month = nv_date.nv_getMonth() + 1;var nv_day = nv_date.nv_getDate();var nv_hour = nv_date.nv_getHours();var nv_minute = nv_date.nv_getMinutes();var nv_second = nv_date.nv_getSeconds();return([nv_year,nv_month,nv_day].nv_map(nv_formatNumber).nv_join('/') + ' ' + [nv_hour,nv_minute,nv_second].nv_map(nv_formatNumber).nv_join(':'))});nv_formatDateTime = (function (nv_date,nv_fmt){if (!nv_date){return("")};var nv_d = nv_getDate(nv_date);var nv_year = nv_d.nv_getFullYear();var nv_month = nv_d.nv_getMonth() + 1;var nv_day = nv_d.nv_getDate();var nv_hour = nv_d.nv_getHours();var nv_minute = nv_d.nv_getMinutes();var nv_second = nv_d.nv_getSeconds();var nv_str = nv_fmt.nv_replace("yyyy",nv_year);nv_str = nv_str.nv_replace("MM",nv_formatNumber(nv_month));nv_str = nv_str.nv_replace("dd",nv_formatNumber(nv_day));nv_str = nv_str.nv_replace("HH",nv_formatNumber(nv_hour));nv_str = nv_str.nv_replace("hh",nv_formatNumber(nv_hour));nv_str = nv_str.nv_replace("mm",nv_formatNumber(nv_minute));nv_str = nv_str.nv_replace("ss",nv_formatNumber(nv_second));return(nv_str)});nv_formatNumber = (function (nv_n){nv_n = nv_n.nv_toString();return(nv_n[(1)] ? nv_n:'0' + nv_n)});nv_formatPrice = (function (nv_price,nv_n){if (!nv_n || nv_n < 0){nv_n = 2};return(nv_parseFloat(nv_price).nv_toFixed(nv_n))});nv_formatSecTimer = (function (nv_n){if (nv_isNaN(nv_n) || nv_parseInt(nv_n) <= 0){return("-")};var nv_ss = nv_n % 60;var nv_nn = (nv_n - nv_ss) / 60;return(nv_nn + ":" + nv_formatNumber(nv_ss))});nv_formatDiff = (function (nv_n){if (nv_isNaN(nv_n) || nv_n == 0){return("-")};if (nv_n < 0){return("+" + Math.nv_abs(nv_n) + "Laps")};return("+" + nv_formatMSTimer(nv_n))});nv_formatMSTimer = (function (nv_n){if (nv_isNaN(nv_n) || nv_parseInt(nv_n) <= 0){return("-")};nv_n = nv_parseInt(nv_n);var nv_fff = nv_n % 1000;var nv_s = (nv_n - nv_fff) / 1000;var nv_ss = nv_s % 60;var nv_nn = (nv_s - nv_ss) / 60 % 60;var nv_hh = (nv_s - nv_ss - nv_nn * 60) / 3600;var nv_str = "";if (nv_hh > 0){nv_str += nv_hh + ":" + nv_formatNumber(nv_nn) + ":"} else if (nv_nn > 0){nv_str += nv_nn + ":"};if (nv_hh > 0 || nv_nn > 0){nv_str += nv_formatNumber(nv_ss)} else {nv_str += nv_ss};if (nv_fff == 0){nv_str += ".000"} else if (nv_fff < 10){nv_str += ".00" + nv_fff} else if (nv_fff < 100){nv_str += ".0" + nv_fff} else {nv_str += "." + nv_fff};return(nv_str)});nv_formatPos = (function (nv_p){if (!nv_p || nv_p == 999 || nv_p == 9900){return("-")} else if (nv_p == -9991 || nv_p == 9991){return("DNF")} else if (nv_p == -9992 || nv_p == 9992){return("DNS")} else if (nv_p == -9993 || nv_p == 9993){return("DQ")};return(nv_p)});nv_padLeft = (function (nv_p,nv_len,nv_c){var nv_str = "";var nv_z = nv_c || "0";var nv_s = nv_p || "";var nv_m = nv_len - nv_s.nv_toString().nv_length;if (nv_m > 0){for(var nv_i = 0;nv_i < nv_m;nv_i++){nv_str += nv_z}};nv_str += nv_s;return(nv_str)});nv_formatRank = (function (nv_p){return(nv_padLeft(nv_p,3,'0'))});nv_formatLaps = (function (nv_p){if (!nv_p || nv_p <= 0){return("-")};return(nv_p)});nv_formatPath = (function (nv_path){var nv_s = nv_path;if (!nv_s || nv_s == ""){nv_s = "/images/no-pic.png"};if (nv_s.nv_indexOf("://") == -1){nv_s = "https://kart.xkarting.com/" + nv_s};return(nv_s)});function nv_formatRaceType(nv_t){switch(nv_t){case 1:return("Practice");case 2:return("Qualifying");case 3:return("Race");};return("-")};nv_formatLevelCss = (function (nv_s){if (!nv_s || nv_s == "" || nv_s.nv_length <= 5){return("")};return("2")});nv_module.nv_exports = ({nv_formatTime:nv_formatTime,nv_formatRaceType:nv_formatRaceType,nv_formatDateTime:nv_formatDateTime,nv_formatNumber:nv_formatNumber,nv_formatPrice:nv_formatPrice,nv_formatSecTimer:nv_formatSecTimer,nv_formatMSTimer:nv_formatMSTimer,nv_formatDiff:nv_formatDiff,nv_formatPos:nv_formatPos,nv_formatLaps:nv_formatLaps,nv_formatPath:nv_formatPath,nv_formatRank:nv_formatRank,nv_padLeft:nv_padLeft,nv_formatLevelCss:nv_formatLevelCss,});return nv_module.nv_exports;}

var x=['./components/badge/badge.wxml','./components/gallery/gallery.wxml','./components/loading/loading.wxml','./components/notice/notice.wxml','./components/tabbar/tabbar.wxml','./pages/back/ecard.wxml','./pages/calendar/index.wxml','./pages/calendar/view.wxml','./pages/docs/index.wxml','./pages/docs/search.wxml','./pages/docs/view.wxml','./pages/index/go.wxml','./pages/index/index.wxml','./pages/index/map.wxml','./pages/login/index.wxml','./pages/logs/logs.wxml','./pages/message/index.wxml','./pages/message/view.wxml','./pages/message_/index.wxml','./pages/message_/view.wxml','./pages/order/index.wxml','./pages/order/view.wxml','./pages/point/index.wxml','./pages/point/view.wxml','./pages/results/index.wxml','./pages/results/view.wxml','./pages/station/index.wxml','./pages/station/view.wxml','./pages/store/buy.wxml','./pages/store/index.wxml','./pages/store/view.wxml','./pages/ticket/index.wxml','./pages/ticket/request.wxml','./pages/ticket/view.wxml','./pages/user/ecard.wxml','./pages/user/index.wxml','./pages/user/station.wxml','./pages/user/userinfo.wxml','./pages/user/userphoto.wxml','./pages/web/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
}
xC.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,1,e,s,gg)){lK.wxVkey=1
}
var aL=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,4,e,s,gg)){tM.wxVkey=1
var eN=_v()
_(tM,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
if(_oz(z,7,xQ,oP,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
return oR
}
eN.wxXCkey=2
_2z(z,5,bO,e,s,gg,eN,'item','index','id')
}
else{tM.wxVkey=2
}
tM.wxXCkey=1
_(oJ,aL)
lK.wxXCkey=1
_(r,oJ)
var hU=_n('noticebar')
_rz(z,hU,'MsgCount',8,e,s,gg)
_(r,hU)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oX=_n('noticebar')
_rz(z,oX,'MsgCount',0,e,s,gg)
_(r,oX)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var t1=_n('view')
_rz(z,t1,'class',0,e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,1,e,s,gg)){e2.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',2,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,3,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,4,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(b3,o6)
if(_oz(z,5,e,s,gg)){o6.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
_(e2,b3)
}
else{e2.wxVkey=2
}
e2.wxXCkey=1
_(r,t1)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h9=_n('view')
_rz(z,h9,'class',0,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,1,e,s,gg)){o0.wxVkey=1
var lCB=_v()
_(o0,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var oJB=_mz(z,'view',['bindtap',4,'class',1,'data-url',2],[],eFB,tEB,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,7,eFB,tEB,gg)){fKB.wxVkey=1
}
fKB.wxXCkey=1
_(bGB,oJB)
var xIB=_v()
_(bGB,xIB)
if(_oz(z,8,eFB,tEB,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
return bGB
}
lCB.wxXCkey=2
_2z(z,2,aDB,e,s,gg,lCB,'item','index','id')
var cAB=_v()
_(o0,cAB)
if(_oz(z,9,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,10,e,s,gg)){oBB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
}
else{o0.wxVkey=2
}
o0.wxXCkey=1
_(r,h9)
var cLB=_n('noticebar')
_rz(z,cLB,'MsgCount',11,e,s,gg)
_(r,cLB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var aRB=_n('view')
_rz(z,aRB,'class',0,e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,1,e,s,gg)){tSB.wxVkey=1
var eTB=_v()
_(tSB,eTB)
if(_oz(z,2,e,s,gg)){eTB.wxVkey=1
var bUB=_mz(z,'view',['bindtap',3,'class',1,'data-id',2,'data-type',3],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,7,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(bUB,xWB)
if(_oz(z,8,e,s,gg)){xWB.wxVkey=1
}
oVB.wxXCkey=1
xWB.wxXCkey=1
_(eTB,bUB)
}
eTB.wxXCkey=1
}
else{tSB.wxVkey=2
}
tSB.wxXCkey=1
_(r,aRB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var fYB=_v()
_(r,fYB)
if(_oz(z,0,e,s,gg)){fYB.wxVkey=1
}
fYB.wxXCkey=1
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
var c3B=_v()
_(o2B,c3B)
if(_oz(z,2,e,s,gg)){c3B.wxVkey=1
}
c3B.wxXCkey=1
}
else{o2B.wxVkey=2
}
o2B.wxXCkey=1
_(r,h1B)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var b9B=_n('view')
_rz(z,b9B,'class',0,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,1,e,s,gg)){o0B.wxVkey=1
var fCC=_v()
_(o0B,fCC)
if(_oz(z,2,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(o0B,cDC)
if(_oz(z,3,e,s,gg)){cDC.wxVkey=1
}
var hEC=_n('view')
_rz(z,hEC,'class',4,e,s,gg)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,5,e,s,gg)){oFC.wxVkey=1
var cGC=_v()
_(oFC,cGC)
var oHC=function(aJC,lIC,tKC,gg){
var bMC=_v()
_(tKC,bMC)
if(_oz(z,8,aJC,lIC,gg)){bMC.wxVkey=1
}
bMC.wxXCkey=1
return tKC
}
cGC.wxXCkey=2
_2z(z,6,oHC,e,s,gg,cGC,'item','index','id')
}
else{oFC.wxVkey=2
}
oFC.wxXCkey=1
_(o0B,hEC)
fCC.wxXCkey=1
cDC.wxXCkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,9,e,s,gg)){xAC.wxVkey=1
var oNC=_v()
_(xAC,oNC)
if(_oz(z,10,e,s,gg)){oNC.wxVkey=1
}
var xOC=_v()
_(xAC,xOC)
if(_oz(z,11,e,s,gg)){xOC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
}
var oBC=_v()
_(b9B,oBC)
if(_oz(z,12,e,s,gg)){oBC.wxVkey=1
var fQC=_n('view')
_rz(z,fQC,'class',13,e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,14,e,s,gg)){cRC.wxVkey=1
var hSC=_v()
_(cRC,hSC)
if(_oz(z,15,e,s,gg)){hSC.wxVkey=1
}
var cUC=_n('view')
_rz(z,cUC,'class',16,e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,17,e,s,gg)){oVC.wxVkey=1
var aXC=_v()
_(oVC,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_v()
_(o2C,o4C)
if(_oz(z,20,b1C,eZC,gg)){o4C.wxVkey=1
}
else if(_oz(z,21,b1C,eZC,gg)){o4C.wxVkey=2
}
else if(_oz(z,22,b1C,eZC,gg)){o4C.wxVkey=3
var c6C=_mz(z,'view',['bindtap',23,'class',1,'data-id',2],[],b1C,eZC,gg)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,26,b1C,eZC,gg)){h7C.wxVkey=1
}
h7C.wxXCkey=1
_(o4C,c6C)
}
else if(_oz(z,27,b1C,eZC,gg)){o4C.wxVkey=4
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,28,b1C,eZC,gg)){f5C.wxVkey=1
}
o4C.wxXCkey=1
f5C.wxXCkey=1
return o2C
}
aXC.wxXCkey=2
_2z(z,18,tYC,e,s,gg,aXC,'item','index','id')
}
var lWC=_v()
_(cUC,lWC)
if(_oz(z,29,e,s,gg)){lWC.wxVkey=1
}
oVC.wxXCkey=1
lWC.wxXCkey=1
_(cRC,cUC)
var oTC=_v()
_(cRC,oTC)
if(_oz(z,30,e,s,gg)){oTC.wxVkey=1
}
hSC.wxXCkey=1
oTC.wxXCkey=1
}
else{cRC.wxVkey=2
}
cRC.wxXCkey=1
_(oBC,fQC)
var oPC=_v()
_(oBC,oPC)
if(_oz(z,31,e,s,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
}
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
_(r,b9B)
var o8C=_n('noticebar')
_rz(z,o8C,'MsgCount',32,e,s,gg)
_(r,o8C)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_v()
_(o0C,lAD)
if(_oz(z,1,e,s,gg)){lAD.wxVkey=1
}
var aBD=_v()
_(o0C,aBD)
if(_oz(z,2,e,s,gg)){aBD.wxVkey=1
var tCD=_v()
_(aBD,tCD)
if(_oz(z,3,e,s,gg)){tCD.wxVkey=1
var eDD=_v()
_(tCD,eDD)
var bED=function(xGD,oFD,oHD,gg){
var hKD=_mz(z,'view',['bindtap',6,'class',1,'data-id',2],[],xGD,oFD,gg)
var oLD=_v()
_(hKD,oLD)
if(_oz(z,9,xGD,oFD,gg)){oLD.wxVkey=1
}
oLD.wxXCkey=1
_(oHD,hKD)
var cJD=_v()
_(oHD,cJD)
if(_oz(z,10,xGD,oFD,gg)){cJD.wxVkey=1
}
cJD.wxXCkey=1
return oHD
}
eDD.wxXCkey=2
_2z(z,4,bED,e,s,gg,eDD,'item','index','id')
}
else{tCD.wxVkey=2
}
tCD.wxXCkey=1
}
else if(_oz(z,11,e,s,gg)){aBD.wxVkey=2
var cMD=_v()
_(aBD,cMD)
if(_oz(z,12,e,s,gg)){cMD.wxVkey=1
var oND=_v()
_(cMD,oND)
var lOD=function(tQD,aPD,eRD,gg){
var oTD=_v()
_(eRD,oTD)
if(_oz(z,15,tQD,aPD,gg)){oTD.wxVkey=1
}
oTD.wxXCkey=1
return eRD
}
oND.wxXCkey=2
_2z(z,13,lOD,e,s,gg,oND,'item','index','id')
}
else{cMD.wxVkey=2
}
cMD.wxXCkey=1
}
else if(_oz(z,16,e,s,gg)){aBD.wxVkey=3
}
lAD.wxXCkey=1
aBD.wxXCkey=1
_(r,o0C)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oVD=_v()
_(r,oVD)
if(_oz(z,0,e,s,gg)){oVD.wxVkey=1
}
var fWD=_mz(z,'navbar',['bindchange',1,'class',1,'current',2,'list',3],[],e,s,gg)
_(r,fWD)
oVD.wxXCkey=1
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var hYD=_v()
_(r,hYD)
if(_oz(z,0,e,s,gg)){hYD.wxVkey=1
}
else if(_oz(z,1,e,s,gg)){hYD.wxVkey=2
var oZD=_n('view')
_rz(z,oZD,'class',2,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,3,e,s,gg)){c1D.wxVkey=1
var o2D=_v()
_(c1D,o2D)
if(_oz(z,4,e,s,gg)){o2D.wxVkey=1
}
var l3D=_v()
_(c1D,l3D)
var a4D=function(e6D,t5D,b7D,gg){
var x9D=_v()
_(b7D,x9D)
if(_oz(z,7,e6D,t5D,gg)){x9D.wxVkey=1
}
x9D.wxXCkey=1
return b7D
}
l3D.wxXCkey=2
_2z(z,5,a4D,e,s,gg,l3D,'item','index','id')
o2D.wxXCkey=1
}
else{c1D.wxVkey=2
}
c1D.wxXCkey=1
_(hYD,oZD)
}
else{hYD.wxVkey=3
var o0D=_n('view')
_rz(z,o0D,'class',8,e,s,gg)
var fAE=_v()
_(o0D,fAE)
if(_oz(z,9,e,s,gg)){fAE.wxVkey=1
var cBE=_v()
_(fAE,cBE)
if(_oz(z,10,e,s,gg)){cBE.wxVkey=1
}
var hCE=_v()
_(fAE,hCE)
if(_oz(z,11,e,s,gg)){hCE.wxVkey=1
}
cBE.wxXCkey=1
hCE.wxXCkey=1
}
else{fAE.wxVkey=2
}
fAE.wxXCkey=1
_(hYD,o0D)
}
var oDE=_mz(z,'navbar',['bindchange',12,'class',1,'current',2,'list',3],[],e,s,gg)
_(r,oDE)
hYD.wxXCkey=1
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var aHE=_n('view')
_rz(z,aHE,'class',0,e,s,gg)
var tIE=_v()
_(aHE,tIE)
if(_oz(z,1,e,s,gg)){tIE.wxVkey=1
var eJE=_v()
_(tIE,eJE)
if(_oz(z,2,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
}
else{tIE.wxVkey=2
}
tIE.wxXCkey=1
_(r,aHE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var oLE=_v()
_(r,oLE)
if(_oz(z,0,e,s,gg)){oLE.wxVkey=1
}
oLE.wxXCkey=1
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,1,e,s,gg)){fOE.wxVkey=1
}
else{fOE.wxVkey=2
var cPE=_v()
_(fOE,cPE)
if(_oz(z,2,e,s,gg)){cPE.wxVkey=1
var hQE=_v()
_(cPE,hQE)
if(_oz(z,3,e,s,gg)){hQE.wxVkey=1
}
hQE.wxXCkey=1
}
else{cPE.wxVkey=2
}
cPE.wxXCkey=1
}
fOE.wxXCkey=1
_(r,oNE)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oTE=_n('view')
_rz(z,oTE,'class',0,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,1,e,s,gg)){lUE.wxVkey=1
var aVE=_n('view')
_rz(z,aVE,'class',2,e,s,gg)
var tWE=_v()
_(aVE,tWE)
if(_oz(z,3,e,s,gg)){tWE.wxVkey=1
}
var eXE=_v()
_(aVE,eXE)
if(_oz(z,4,e,s,gg)){eXE.wxVkey=1
}
tWE.wxXCkey=1
eXE.wxXCkey=1
_(lUE,aVE)
}
else{lUE.wxVkey=2
var bYE=_n('view')
_rz(z,bYE,'class',5,e,s,gg)
var oZE=_v()
_(bYE,oZE)
if(_oz(z,6,e,s,gg)){oZE.wxVkey=1
var x1E=_n('view')
_rz(z,x1E,'class',7,e,s,gg)
var o2E=_v()
_(x1E,o2E)
if(_oz(z,8,e,s,gg)){o2E.wxVkey=1
}
var f3E=_v()
_(x1E,f3E)
if(_oz(z,9,e,s,gg)){f3E.wxVkey=1
}
o2E.wxXCkey=1
f3E.wxXCkey=1
_(oZE,x1E)
}
else if(_oz(z,10,e,s,gg)){oZE.wxVkey=2
}
oZE.wxXCkey=1
_(lUE,bYE)
}
lUE.wxXCkey=1
_(r,oTE)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var h5E=_n('noticebar')
_rz(z,h5E,'MsgCount',0,e,s,gg)
_(r,h5E)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var o8E=_n('view')
_rz(z,o8E,'class',0,e,s,gg)
var l9E=_v()
_(o8E,l9E)
if(_oz(z,1,e,s,gg)){l9E.wxVkey=1
var a0E=_v()
_(l9E,a0E)
if(_oz(z,2,e,s,gg)){a0E.wxVkey=1
}
a0E.wxXCkey=1
}
else{l9E.wxVkey=2
}
l9E.wxXCkey=1
_(r,o8E)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var eBF=_v()
_(r,eBF)
if(_oz(z,0,e,s,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['app.json'] = {"pages":["pages/index/index","pages/login/index","pages/logs/logs","pages/results/index","pages/results/view","pages/docs/index","pages/docs/view","pages/docs/search","pages/user/index","pages/calendar/index","pages/calendar/view","pages/ticket/index","pages/ticket/view","pages/user/userinfo","pages/message/index","pages/message/view","pages/web/index","pages/user/station","pages/user/ecard","pages/order/view","pages/order/index","pages/station/index","pages/station/view","pages/ticket/request","pages/user/userphoto","pages/index/go","pages/index/map","pages/point/index","pages/point/view"],"window":{"backgroundColor":"#000","backgroundTextStyle":"dark","navigationBarBackgroundColor":"#102030","navigationBarTitleText":"","navigationBarTextStyle":"white","enablePullDownRefresh":true,"onReachBottomDistance":50},"sitemapLocation":"sitemap.json","tabBar":{"backgroundColor":"#102030","color":"#999","selectedColor":"#ffa500","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/assets/icons/icon-home.png","selectedIconPath":"/assets/icons/icon-home-on.png"},{"pagePath":"pages/calendar/index","text":"日程","iconPath":"/assets/icons/icon-calendar.png","selectedIconPath":"/assets/icons/icon-calendar-on.png"},{"pagePath":"pages/docs/index","text":"文件","iconPath":"/assets/icons/icon-docs.png","selectedIconPath":"/assets/icons/icon-docs-on.png"},{"pagePath":"pages/results/index","text":"成绩","iconPath":"/assets/icons/icon-results.png","selectedIconPath":"/assets/icons/icon-results-on.png"},{"pagePath":"pages/user/index","text":"我的","iconPath":"/assets/icons/icon-user.png","selectedIconPath":"/assets/icons/icon-user-on.png"}]},"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['app.wxml'] = [$gwx, './app.wxml'];else __wxAppCode__['app.wxml'] = $gwx( './app.wxml' );
		__wxAppCode__['components/badge/badge.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/badge/badge.wxml'] = [$gwx, './components/badge/badge.wxml'];else __wxAppCode__['components/badge/badge.wxml'] = $gwx( './components/badge/badge.wxml' );
		__wxAppCode__['components/gallery/gallery.json'] = {"component":true,"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/gallery/gallery.wxml'] = [$gwx, './components/gallery/gallery.wxml'];else __wxAppCode__['components/gallery/gallery.wxml'] = $gwx( './components/gallery/gallery.wxml' );
		__wxAppCode__['components/loading/loading.json'] = {"component":true,"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/loading/loading.wxml'] = [$gwx, './components/loading/loading.wxml'];else __wxAppCode__['components/loading/loading.wxml'] = $gwx( './components/loading/loading.wxml' );
		__wxAppCode__['components/notice/notice.json'] = {"component":true,"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/notice/notice.wxml'] = [$gwx, './components/notice/notice.wxml'];else __wxAppCode__['components/notice/notice.wxml'] = $gwx( './components/notice/notice.wxml' );
		__wxAppCode__['components/tabbar/tabbar.json'] = {"component":true,"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tabbar/tabbar.wxml'] = [$gwx, './components/tabbar/tabbar.wxml'];else __wxAppCode__['components/tabbar/tabbar.wxml'] = $gwx( './components/tabbar/tabbar.wxml' );
		__wxAppCode__['pages/back/ecard.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/back/ecard.wxml'] = [$gwx, './pages/back/ecard.wxml'];else __wxAppCode__['pages/back/ecard.wxml'] = $gwx( './pages/back/ecard.wxml' );
		__wxAppCode__['pages/calendar/index.json'] = {"usingComponents":{"noticebar":"/components/notice/notice","navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/calendar/index.wxml'] = [$gwx, './pages/calendar/index.wxml'];else __wxAppCode__['pages/calendar/index.wxml'] = $gwx( './pages/calendar/index.wxml' );
		__wxAppCode__['pages/calendar/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/calendar/view.wxml'] = [$gwx, './pages/calendar/view.wxml'];else __wxAppCode__['pages/calendar/view.wxml'] = $gwx( './pages/calendar/view.wxml' );
		__wxAppCode__['pages/docs/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar","noticebar":"/components/notice/notice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/docs/index.wxml'] = [$gwx, './pages/docs/index.wxml'];else __wxAppCode__['pages/docs/index.wxml'] = $gwx( './pages/docs/index.wxml' );
		__wxAppCode__['pages/docs/search.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/docs/search.wxml'] = [$gwx, './pages/docs/search.wxml'];else __wxAppCode__['pages/docs/search.wxml'] = $gwx( './pages/docs/search.wxml' );
		__wxAppCode__['pages/docs/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/docs/view.wxml'] = [$gwx, './pages/docs/view.wxml'];else __wxAppCode__['pages/docs/view.wxml'] = $gwx( './pages/docs/view.wxml' );
		__wxAppCode__['pages/index/go.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/go.wxml'] = [$gwx, './pages/index/go.wxml'];else __wxAppCode__['pages/index/go.wxml'] = $gwx( './pages/index/go.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar","noticebar":"/components/notice/notice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/index/map.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/map.wxml'] = [$gwx, './pages/index/map.wxml'];else __wxAppCode__['pages/index/map.wxml'] = $gwx( './pages/index/map.wxml' );
		__wxAppCode__['pages/login/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/index.wxml'] = [$gwx, './pages/login/index.wxml'];else __wxAppCode__['pages/login/index.wxml'] = $gwx( './pages/login/index.wxml' );
		__wxAppCode__['pages/logs/logs.json'] = {"navigationBarTitleText":"查看启动日志","usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/logs/logs.wxml'] = [$gwx, './pages/logs/logs.wxml'];else __wxAppCode__['pages/logs/logs.wxml'] = $gwx( './pages/logs/logs.wxml' );
		__wxAppCode__['pages/message/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message/index.wxml'] = [$gwx, './pages/message/index.wxml'];else __wxAppCode__['pages/message/index.wxml'] = $gwx( './pages/message/index.wxml' );
		__wxAppCode__['pages/message/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message/view.wxml'] = [$gwx, './pages/message/view.wxml'];else __wxAppCode__['pages/message/view.wxml'] = $gwx( './pages/message/view.wxml' );
		__wxAppCode__['pages/message_/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message_/index.wxml'] = [$gwx, './pages/message_/index.wxml'];else __wxAppCode__['pages/message_/index.wxml'] = $gwx( './pages/message_/index.wxml' );
		__wxAppCode__['pages/message_/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/message_/view.wxml'] = [$gwx, './pages/message_/view.wxml'];else __wxAppCode__['pages/message_/view.wxml'] = $gwx( './pages/message_/view.wxml' );
		__wxAppCode__['pages/order/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/index.wxml'] = [$gwx, './pages/order/index.wxml'];else __wxAppCode__['pages/order/index.wxml'] = $gwx( './pages/order/index.wxml' );
		__wxAppCode__['pages/order/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/order/view.wxml'] = [$gwx, './pages/order/view.wxml'];else __wxAppCode__['pages/order/view.wxml'] = $gwx( './pages/order/view.wxml' );
		__wxAppCode__['pages/point/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/point/index.wxml'] = [$gwx, './pages/point/index.wxml'];else __wxAppCode__['pages/point/index.wxml'] = $gwx( './pages/point/index.wxml' );
		__wxAppCode__['pages/point/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/point/view.wxml'] = [$gwx, './pages/point/view.wxml'];else __wxAppCode__['pages/point/view.wxml'] = $gwx( './pages/point/view.wxml' );
		__wxAppCode__['pages/results/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar","noticebar":"/components/notice/notice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/results/index.wxml'] = [$gwx, './pages/results/index.wxml'];else __wxAppCode__['pages/results/index.wxml'] = $gwx( './pages/results/index.wxml' );
		__wxAppCode__['pages/results/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/results/view.wxml'] = [$gwx, './pages/results/view.wxml'];else __wxAppCode__['pages/results/view.wxml'] = $gwx( './pages/results/view.wxml' );
		__wxAppCode__['pages/station/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/station/index.wxml'] = [$gwx, './pages/station/index.wxml'];else __wxAppCode__['pages/station/index.wxml'] = $gwx( './pages/station/index.wxml' );
		__wxAppCode__['pages/station/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/station/view.wxml'] = [$gwx, './pages/station/view.wxml'];else __wxAppCode__['pages/station/view.wxml'] = $gwx( './pages/station/view.wxml' );
		__wxAppCode__['pages/store/buy.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/store/buy.wxml'] = [$gwx, './pages/store/buy.wxml'];else __wxAppCode__['pages/store/buy.wxml'] = $gwx( './pages/store/buy.wxml' );
		__wxAppCode__['pages/store/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/store/index.wxml'] = [$gwx, './pages/store/index.wxml'];else __wxAppCode__['pages/store/index.wxml'] = $gwx( './pages/store/index.wxml' );
		__wxAppCode__['pages/store/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/store/view.wxml'] = [$gwx, './pages/store/view.wxml'];else __wxAppCode__['pages/store/view.wxml'] = $gwx( './pages/store/view.wxml' );
		__wxAppCode__['pages/ticket/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ticket/index.wxml'] = [$gwx, './pages/ticket/index.wxml'];else __wxAppCode__['pages/ticket/index.wxml'] = $gwx( './pages/ticket/index.wxml' );
		__wxAppCode__['pages/ticket/request.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ticket/request.wxml'] = [$gwx, './pages/ticket/request.wxml'];else __wxAppCode__['pages/ticket/request.wxml'] = $gwx( './pages/ticket/request.wxml' );
		__wxAppCode__['pages/ticket/view.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/ticket/view.wxml'] = [$gwx, './pages/ticket/view.wxml'];else __wxAppCode__['pages/ticket/view.wxml'] = $gwx( './pages/ticket/view.wxml' );
		__wxAppCode__['pages/user/ecard.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/ecard.wxml'] = [$gwx, './pages/user/ecard.wxml'];else __wxAppCode__['pages/user/ecard.wxml'] = $gwx( './pages/user/ecard.wxml' );
		__wxAppCode__['pages/user/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar","noticebar":"/components/notice/notice"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/index.wxml'] = [$gwx, './pages/user/index.wxml'];else __wxAppCode__['pages/user/index.wxml'] = $gwx( './pages/user/index.wxml' );
		__wxAppCode__['pages/user/station.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/station.wxml'] = [$gwx, './pages/user/station.wxml'];else __wxAppCode__['pages/user/station.wxml'] = $gwx( './pages/user/station.wxml' );
		__wxAppCode__['pages/user/userinfo.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/userinfo.wxml'] = [$gwx, './pages/user/userinfo.wxml'];else __wxAppCode__['pages/user/userinfo.wxml'] = $gwx( './pages/user/userinfo.wxml' );
		__wxAppCode__['pages/user/userphoto.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/userphoto.wxml'] = [$gwx, './pages/user/userphoto.wxml'];else __wxAppCode__['pages/user/userphoto.wxml'] = $gwx( './pages/user/userphoto.wxml' );
		__wxAppCode__['pages/web/index.json'] = {"usingComponents":{"navbar":"/components/tabbar/tabbar"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/web/index.wxml'] = [$gwx, './pages/web/index.wxml'];else __wxAppCode__['pages/web/index.wxml'] = $gwx( './pages/web/index.wxml' );
		__wxAppCode__['project.config.json'] = {"miniprogramRoot":"","__compileDebugInfo__":{"from":"devtools","useNewCompileModule":true,"devtoolsVersion":"1.05.2107090","compileSetting":{"urlCheck":true,"es6":true,"enhance":false,"postcss":true,"preloadBackgroundData":false,"minified":true,"newFeature":true,"coverView":true,"nodeModules":false,"autoAudits":false,"showShadowRootInWxmlPanel":true,"scopeDataCheck":false,"uglifyFileName":false,"checkInvalidKey":true,"checkSiteMap":true,"uploadWithSourceMap":true,"compileHotReLoad":false,"useMultiFrameRuntime":true,"useApiHook":true,"useApiHostProcess":true,"babelSetting":{"ignore":[],"disablePlugins":[],"outputPath":""},"scriptsEnable":false,"useIsolateContext":true,"userConfirmedBundleSwitch":false,"packNpmManually":false,"packNpmRelationList":[],"minifyWXSS":true,"showES6CompileOption":false},"ciVersion":"1.4.6"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config.wxml'] = [$gwx, './project.config.wxml'];else __wxAppCode__['project.config.wxml'] = $gwx( './project.config.wxml' );
		__wxAppCode__['sitemap.json'] = {"desc":"关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html","rules":[{"action":"allow","page":"*"}]};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap.wxml'] = [$gwx, './sitemap.wxml'];else __wxAppCode__['sitemap.wxml'] = $gwx( './sitemap.wxml' );
	
	define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("utils/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r,n){var t=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(t>>16)<<16|65535&t}function n(n,t,e,u,o,c){return r((f=r(r(t,n),r(u,c)))<<(a=o)|f>>>32-a,e);var f,a}function t(r,t,e,u,o,c,f){return n(t&e|~t&u,r,t,o,c,f)}function e(r,t,e,u,o,c,f){return n(t&u|e&~u,r,t,o,c,f)}function u(r,t,e,u,o,c,f){return n(t^e^u,r,t,o,c,f)}function o(r,t,e,u,o,c,f){return n(e^(t|~u),r,t,o,c,f)}function c(n){for(var c=1732584193,f=-271733879,a=-1732584194,i=271733878,h=0;h<n.length;h+=16){var l=c,v=f,g=a,d=i;c=t(c,f,a,i,n[h+0],7,-680876936),i=t(i,c,f,a,n[h+1],12,-389564586),a=t(a,i,c,f,n[h+2],17,606105819),f=t(f,a,i,c,n[h+3],22,-1044525330),c=t(c,f,a,i,n[h+4],7,-176418897),i=t(i,c,f,a,n[h+5],12,1200080426),a=t(a,i,c,f,n[h+6],17,-1473231341),f=t(f,a,i,c,n[h+7],22,-45705983),c=t(c,f,a,i,n[h+8],7,1770035416),i=t(i,c,f,a,n[h+9],12,-1958414417),a=t(a,i,c,f,n[h+10],17,-42063),f=t(f,a,i,c,n[h+11],22,-1990404162),c=t(c,f,a,i,n[h+12],7,1804603682),i=t(i,c,f,a,n[h+13],12,-40341101),a=t(a,i,c,f,n[h+14],17,-1502002290),c=e(c,f=t(f,a,i,c,n[h+15],22,1236535329),a,i,n[h+1],5,-165796510),i=e(i,c,f,a,n[h+6],9,-1069501632),a=e(a,i,c,f,n[h+11],14,643717713),f=e(f,a,i,c,n[h+0],20,-373897302),c=e(c,f,a,i,n[h+5],5,-701558691),i=e(i,c,f,a,n[h+10],9,38016083),a=e(a,i,c,f,n[h+15],14,-660478335),f=e(f,a,i,c,n[h+4],20,-405537848),c=e(c,f,a,i,n[h+9],5,568446438),i=e(i,c,f,a,n[h+14],9,-1019803690),a=e(a,i,c,f,n[h+3],14,-187363961),f=e(f,a,i,c,n[h+8],20,1163531501),c=e(c,f,a,i,n[h+13],5,-1444681467),i=e(i,c,f,a,n[h+2],9,-51403784),a=e(a,i,c,f,n[h+7],14,1735328473),c=u(c,f=e(f,a,i,c,n[h+12],20,-1926607734),a,i,n[h+5],4,-378558),i=u(i,c,f,a,n[h+8],11,-2022574463),a=u(a,i,c,f,n[h+11],16,1839030562),f=u(f,a,i,c,n[h+14],23,-35309556),c=u(c,f,a,i,n[h+1],4,-1530992060),i=u(i,c,f,a,n[h+4],11,1272893353),a=u(a,i,c,f,n[h+7],16,-155497632),f=u(f,a,i,c,n[h+10],23,-1094730640),c=u(c,f,a,i,n[h+13],4,681279174),i=u(i,c,f,a,n[h+0],11,-358537222),a=u(a,i,c,f,n[h+3],16,-722521979),f=u(f,a,i,c,n[h+6],23,76029189),c=u(c,f,a,i,n[h+9],4,-640364487),i=u(i,c,f,a,n[h+12],11,-421815835),a=u(a,i,c,f,n[h+15],16,530742520),c=o(c,f=u(f,a,i,c,n[h+2],23,-995338651),a,i,n[h+0],6,-198630844),i=o(i,c,f,a,n[h+7],10,1126891415),a=o(a,i,c,f,n[h+14],15,-1416354905),f=o(f,a,i,c,n[h+5],21,-57434055),c=o(c,f,a,i,n[h+12],6,1700485571),i=o(i,c,f,a,n[h+3],10,-1894986606),a=o(a,i,c,f,n[h+10],15,-1051523),f=o(f,a,i,c,n[h+1],21,-2054922799),c=o(c,f,a,i,n[h+8],6,1873313359),i=o(i,c,f,a,n[h+15],10,-30611744),a=o(a,i,c,f,n[h+6],15,-1560198380),f=o(f,a,i,c,n[h+13],21,1309151649),c=o(c,f,a,i,n[h+4],6,-145523070),i=o(i,c,f,a,n[h+11],10,-1120210379),a=o(a,i,c,f,n[h+2],15,718787259),f=o(f,a,i,c,n[h+9],21,-343485551),c=r(c,l),f=r(f,v),a=r(a,g),i=r(i,d)}return[c,f,a,i]}function f(r){for(var n="",t=0;t<4*r.length;t++)n+="0123456789abcdef".charAt(r[t>>2]>>t%4*8+4&15)+"0123456789abcdef".charAt(r[t>>2]>>t%4*8&15);return n}function a(r){for(var n=1+(r.length+8>>6),t=new Array(16*n),e=0;e<16*n;e++)t[e]=0;for(e=0;e<r.length;e++)t[e>>2]|=(255&r.charCodeAt(e))<<e%4*8;return t[e>>2]|=128<<e%4*8,t[16*n-2]=8*r.length,t}module.exports={MD5:function(r){return f(c(a(r)))}}; 
 			}); 
		define("utils/rpx2px.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t){return e*t};var e=wx.getSystemInfoSync().windowWidth/750; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var r=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours(),u=e.getMinutes(),a=e.getSeconds();return[r,n,o].map(t).join("/")+" "+[i,u,a].map(t).join(":")},formatPrice:function(t,e){return(!e||e<0)&&(e=2),parseFloat(t).toFixed(e)},formatSecTimer:function(e){var r=e%60;return(e-r)/60+":"+t(r)},formatMSTimer:function(e){var r=e%1e3,n=(e-r)/1e3,o=n%60,i=(n-o)%60,u=(n-o-60*i)/60,a="";return u>0?a+=u+":"+t(i)+":":i>0&&(a+=i+":"),a+=u>0||i>0?t(o):o,a+="."+r}}; 
 			}); 
		define("utils/weapp-qrcode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t;!function(){function e(t,e){for(var r=1,o=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),n=0,a=D.length;n<=a;n++){var s=0;switch(e){case i.L:s=D[n][0];break;case i.M:s=D[n][1];break;case i.Q:s=D[n][2];break;case i.H:s=D[n][3]}if(o<=s)break;r++}if(r>D.length)throw new Error("Too long data");return r}function r(t){this.mode=n.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function o(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},o.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=o.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=d.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++){o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=d.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){i=!t&&1==(o>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var h=!1;i<t.length&&(h=1==(t[i]>>>n&1)),d.getMask(e,o,a-s)&&(h=!h),this.modules[o][a-s]=h,-1==--n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},o.PAD0=236,o.PAD1=17,o.createData=function(t,e,r){for(var n=C.getRSBlocks(t,e),i=new L,a=0;a<r.length;a++){var s=r[a];i.put(s.mode,4),i.put(s.getLength(),d.getLengthInBits(s.mode,t)),s.write(i)}var h=0;for(a=0;a<n.length;a++)h+=n[a].dataCount;if(i.getLengthInBits()>8*h)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*h+")");for(i.getLengthInBits()+4<=8*h&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*h||(i.put(o.PAD0,8),i.getLengthInBits()>=8*h));)i.put(o.PAD1,8);return o.createBytes(i,n)},o.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,u=e[s].totalCount-h;o=Math.max(o,h),n=Math.max(n,u),i[s]=new Array(h);for(var l=0;l<i[s].length;l++)i[s][l]=255&t.buffer[l+r];r+=h;var g=d.getErrorCorrectPolynomial(u),f=new v(i[s],g.getLength()-1).mod(g);a[s]=new Array(g.getLength()-1);for(l=0;l<a[s].length;l++){var c=l+f.getLength()-a[s].length;a[s][l]=c>=0?f.get(c):0}}var m=0;for(l=0;l<e.length;l++)m+=e[l].totalCount;var p=new Array(m),C=0;for(l=0;l<o;l++)for(s=0;s<e.length;s++)l<i[s].length&&(p[C++]=i[s][l]);for(l=0;l<n;l++)for(s=0;s<e.length;s++)l<a[s].length&&(p[C++]=a[s][l]);return p};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a=0,s=1,h=2,u=3,l=4,g=5,f=6,c=7,d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a:return(e+r)%2==0;case s:return e%2==0;case h:return r%3==0;case u:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case g:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new v([1],0),r=0;r<t;r++)e=e.multiply(new v([1,m.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(o+s,n+h)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var u=0;t.isDark(o,n)&&u++,t.isDark(o+1,n)&&u++,t.isDark(o,n+1)&&u++,t.isDark(o+1,n+1)&&u++,0!=u&&4!=u||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var l=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&l++;return r+=10*(Math.abs(100*l/e/e-50)/5)}},m={glog:function(t){if(t<1)throw new Error("glog("+t+")");return m.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return m.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)m.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)m.EXP_TABLE[p]=m.EXP_TABLE[p-4]^m.EXP_TABLE[p-5]^m.EXP_TABLE[p-6]^m.EXP_TABLE[p-8];for(p=0;p<255;p++)m.LOG_TABLE[m.EXP_TABLE[p]]=p;function v(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function C(t,e){this.totalCount=t,this.dataCount=e}function L(){this.buffer=[],this.length=0}v.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=m.gexp(m.glog(this.get(r))+m.glog(t.get(o)));return new v(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=m.glog(this.get(0))-m.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=m.gexp(m.glog(t.get(o))+e);return new v(r,0).mod(t)}},C.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],C.getRSBlocks=function(t,e){var r=C.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=[],i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],h=r[3*i+2],u=0;u<a;u++)n.push(new C(s,h));return n},C.getRsBlockTable=function(t,e){switch(e){case i.L:return C.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return C.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return C.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return C.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},L.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var D=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];(t=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];this._oQRCode=null,this.canvasId=t,this._htOption.text&&this.canvasId&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t,r){this._oQRCode=new o(e(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this.makeImage(r)},t.prototype.makeImage=function(t){var e;e=this._htOption.usingIn?wx.createCanvasContext(this.canvasId,this._htOption.usingIn):wx.createCanvasContext(this.canvasId);var r=this._htOption,o=this._oQRCode,n=o.getModuleCount(),i=r.width/n,a=r.height/n,s=Math.round(i),h=Math.round(a);r.image&&""!=r.image&&e.drawImage(r.image,0,0,r.width,r.height);for(var u=0;u<n;u++)for(var l=0;l<n;l++){var g=o.isDark(u,l),f=l*i,c=u*a;e.setStrokeStyle(g?r.colorDark:r.colorLight),e.setLineWidth(1),e.setFillStyle(g?r.colorDark:r.colorLight),e.fillRect(f,c,i,a),e.strokeRect(Math.floor(f)+.5,Math.floor(c)+.5,s,h),e.strokeRect(Math.ceil(f)-.5,Math.ceil(c)-.5,s,h)}e.draw(!1,t)},t.prototype.exportImage=function(t){t&&wx.canvasToTempFilePath({x:0,y:0,width:this._htOption.width,height:this._htOption.height,destWidth:this._htOption.width,destHeight:this._htOption.height,canvasId:this.canvasId,success:function(e){t(e.tempFilePath)},fail:function(t){console.log(t)}})},t.CorrectLevel=i}(),module.exports=t; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("utils/md5.js");App({onLaunch:function(){var t=this;setInterval(function(){this.RefreshMsgNotice()}.bind(this),1e4);this.getSSID();wx.getSetting({success:function(a){console.log("getSetting",a),a.authSetting["scope.userInfo"]&&wx.getUserInfo({lang:"zh_CN",success:function(a){console.log(a),t.globalData.userInfo=a.userInfo,t.globalData.hasUserInfo=!0,t.userInfoReadyCallback&&t.userInfoReadyCallback(a)}})}})},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t},formatDateTime:function(t,a){if(!t)return"";var e=new Date(t),o=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),i=e.getHours(),r=e.getMinutes(),u=e.getSeconds(),l=a.replace("yyyy",o);return l=(l=(l=(l=(l=(l=l.replace("MM",this.formatNumber(n))).replace("dd",this.formatNumber(s))).replace("HH",this.formatNumber(i))).replace("hh",this.formatNumber(i))).replace("mm",this.formatNumber(r))).replace("ss",this.formatNumber(u))},RefreshMsgNotice:function(){var t="get-user-msg-count",a=this.getUserID(),e=(new Date).getTime(),o=this.getSSID(),n=this.createSysKey(t,e,a);wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:t,timeStamp:e,userID:a,ssid:o,syskey:n},success:function(t){var a=0;if(t&&t.data){var e=t.data;1==e.flag&&e.MsgCount&&e.MsgCount>=0&&(a=e.MsgCount)}this.globalData.msgCount=a}.bind(this)})},userInfoReadyCallback:function(t){var a=this.getUID(),e=this.getUserID();this.updateUserInfoAuto(a,e,t.userInfo)},updateUserInfoAuto:function(t,a,e,o){var n="update-userinfo-auto",s=(new Date).getTime(),i=this.createSysKey(n,s,t,a),r=e.nickName||"",u=e.gender||1,l=e.avatarUrl||"",c=e.country||"",g=e.province||"",h=e.city||"";wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:s,uid:t,userID:a,nicname:r,photo:l,gender:u,country:c,province:g,city:h,syskey:i},success:function(t){console.log(t),o&&"function"==typeof o&&o(t)}.bind(this)})},updateUserInfo:function(t,a,e,o){var n="update-userinfo",s=(new Date).getTime(),i=this.createSysKey(n,s,t,a),r=e.nickName||"",u=e.gender||1,l=e.avatarUrl||"",c=e.country||"",g=e.province||"",h=e.city||"";wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:s,uid:t,userID:a,nicname:r,photo:l,gender:u,country:c,province:g,city:h,syskey:i},success:function(t){console.log(t),o&&"function"==typeof o&&o(t)}.bind(this)})},updateUserPhotoAndNicname:function(t,a,e,o,n){var s="update-userinfo-photo-and-nicname",i=(new Date).getTime(),r=this.createSysKey(s,i,t,a),u=o||"",l=e||"";wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,timeStamp:i,uid:t,userID:a,nicname:u,photo:l,syskey:r},success:function(t){console.log(t),n&&"function"==typeof n&&n(t)}.bind(this)})},wxLogin:function(t,a,e,o){var n=this,s=this;wx.login({success:function(i){console.log("wx.login",i),i.code&&(a&&wx.showLoading({title:"\u6b63\u5728\u767b\u5f55",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"wx-login-race",ssid:t,wxcode:i.code},success:function(t){console.log("wx-login-race",t);var o=t.data;if(a&&wx.hideLoading(),1==o.flag&&o.UserInfo){var n=0,i="";o.StatInfo&&o.StatInfo.id&&(n=o.StatInfo.id),o.UserInfo.SSID&&(n=o.UserInfo.SSID),o.StatInfo&&o.StatInfo.name&&(i=o.StatInfo.name),s.globalData.userData=o.UserInfo,s.globalData.hasUserData=!0,s.globalData.SSID=n,s.globalData.statName=i}e&&"function"==typeof e&&e(t)}.bind(n),fail:function(t){a&&wx.hideLoading(),o&&"function"==typeof o&&o(t)}}))}})},ajaxRequest:function(t,a,e){wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:t,success:function(t){console.log(t.data),a&&"function"==typeof a&&a(t.data)}.bind(this),fail:function(t){e&&"function"==typeof e&&e(t.data)}})},globalData:{basePath:"https://kart.xkarting.com/",statName:"",userData:null,hasUserData:!1,userInfo:null,hasUserInfo:!1,tempID:"",tempFlag:"",tempData:"",SSID:0,isNotices:0,msgCount:0},getMsgCount:function(){return this.globalData&&this.globalData.msgCount?this.globalData.msgCount:0},getUserID:function(){return this.globalData.userData&&this.globalData.userData.UserID?this.globalData.userData.UserID:0},getUserName:function(){return this.globalData.userData&&this.globalData.userData.Name?this.globalData.userData.Name:""},getNickName:function(){return this.globalData.userData&&this.globalData.userData.NicName?this.globalData.userData.NicName:""},getUID:function(){return this.globalData.userData&&this.globalData.userData.UID?this.globalData.userData.UID:0},getSSID:function(){return this.globalData.SSID&&parseInt(this.globalData.SSID)>0?this.globalData.SSID:0},getStatName:function(){return this.globalData.statName?this.globalData.statName:"\u7231\u5361\u4e01\u4ff1\u4e50\u90e8"},createSysKey:function(){for(var a=this.globalData.userData?this.globalData.userData.Token:"",e=0;e<arguments.length;e++)a+="@"+arguments[e];var o=t.MD5(a);return o},userLogout:function(){this.globalData.SSID=0,this.globalData.hasUserData=!1,this.globalData.userData=null,wx.showLoading({title:"\u6b63\u5728\u9000\u51fa"}),setTimeout((function(){wx.hideLoading(),wx.switchTab({url:"/pages/index/index"})}),1e3)}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/badge/badge';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/badge/badge.js';	define("components/badge/badge.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/typeof");module.exports=function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===e(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var u in t)n.d(o,u,function(e){return t[e]}.bind(null,u));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}({10:function(e,t,r){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},content:{type:String,value:""}}})}}); 
 			}); 	require("components/badge/badge.js");
 		__wxRoute = 'components/gallery/gallery';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/gallery/gallery.js';	define("components/gallery/gallery.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/typeof");module.exports=function(t){var r={};function n(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===e(t)&&t&&t.__esModule)return t;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)n.d(u,i,function(e){return t[e]}.bind(null,i));return u},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}({15:function(e,t,r){Component({options:{addGlobalClass:!0},properties:{imgUrls:{type:Array,value:[],observer:function(e,t,r){this.setData({currentImgs:e})}},delete:{type:Boolean,value:!0},show:{type:Boolean,value:!0},current:{type:Number,value:0},hideOnClick:{type:Boolean,value:!0},extClass:{type:Boolean,value:""}},data:{currentImgs:[]},ready:function(){var e=this.data;this.setData({currentImgs:e.imgUrls})},methods:{change:function(e){this.setData({current:e.detail.current}),this.triggerEvent("change",{current:e.detail.current},{})},deleteImg:function(){var e=this.data,t=e.currentImgs,r=t.splice(e.current,1);this.triggerEvent("delete",{url:r[0],index:e.current},{}),0!==t.length?this.setData({current:0,currentImgs:t}):this.hideGallery()},hideGallery:function(){this.data.hideOnClick&&(this.setData({show:!1}),this.triggerEvent("hide",{},{}))}}})}}); 
 			}); 	require("components/gallery/gallery.js");
 		__wxRoute = 'components/loading/loading';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/loading/loading.js';	define("components/loading/loading.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/typeof");module.exports=function(e){var n={};function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===t(e)&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=9)}({9:function(t,e,n){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},show:{type:Boolean,value:!0,observer:function(t){this._computedStyle(t,this.data.animated)}},animated:{type:Boolean,value:!1,observer:function(t){this._computedStyle(this.data.show,t)}},duration:{type:Number,value:350},type:{type:String,value:"dot-gray"},tips:{type:String,value:"\u52a0\u8f7d\u4e2d"}},data:{animationData:{},animationInstance:{},displayStyle:"none"},methods:{_computedStyle:function(t,e){t?this.setData({displayStyle:""}):e?this._startAnimation():this.setData({displayStyle:"none"})},_startAnimation:function(){var t=this;setTimeout((function(){var e=t.data.animationInstance;e.height(0).step(),t.setData({animationData:e.export()})}),0)}},lifetimes:{attached:function(){var t=this.data,e=wx.createAnimation({duration:t.duration,timingFunction:"ease"});this.setData({animationInstance:e}),this._computedStyle(this.data.show,this.data.animated)}}})}}); 
 			}); 	require("components/loading/loading.js");
 		__wxRoute = 'components/notice/notice';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/notice/notice.js';	define("components/notice/notice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{MsgCount:{type:Number,value:0}},data:{},methods:{tabNotice:function(){wx.navigateTo({url:"/pages/message/index"})}}}); 
 			}); 	require("components/notice/notice.js");
 		__wxRoute = 'components/tabbar/tabbar';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/tabbar/tabbar.js';	define("components/tabbar/tabbar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/typeof");module.exports=function(t){var r={};function n(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===e(t)&&t&&t.__esModule)return t;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(u,o,function(e){return t[e]}.bind(null,o));return u},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}({11:function(e,t,r){Component({options:{addGlobalClass:!0},properties:{extClass:{type:String,value:""},list:{type:Array,value:[]},current:{type:Number,value:0}},methods:{tabChange:function(e){var t=e.currentTarget.dataset.index,r=e.currentTarget.dataset.name;t===this.data.current&&"\u6211\u7684"!=r||(this.setData({current:t}),this.triggerEvent("change",{index:t,item:this.data.list[t]}))}}})}}); 
 			}); 	require("components/tabbar/tabbar.js");
 		__wxRoute = 'pages/back/ecard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/back/ecard.js';	define("pages/back/ecard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../utils/weapp-qrcode.js");var e=getApp();Page({data:{basePath:e.globalData.basePath,statName:e.globalData.statName,currentTab:1,tipsInfo:"",pathDriverQRCode:"",pathSafeQRCode:"",uid:e.getUID(),isAgree:0,canIUseGetUserProfile:!1},onLoad:function(t){wx.getUserProfile?this.setData({canIUseGetUserProfile:!0,uid:e.getUID()}):this.setData({uid:e.getUID()})},onReady:function(){},onShow:function(){this.initData()},initData:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u8f66\u624b\u5361"}),this.data.uid=e.getUID(),this.setData({uid:e.getUID()}),2==this.data.currentTab?this.createSafeQRCode():this.createDriverQRCode()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:e.getStatName(),path:"pages/index/go?cmd=user&id="+e.getSSID()}},tapItem:function(e){var t=e.currentTarget.dataset.id;this.setData({currentTab:t}),2==t?this.createSafeQRCode():this.createDriverQRCode()},initUserInfo:function(){var e=this;wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.getSetting({success:function(t){t.authSetting["scope.userInfo"]?e.setData({isAgree:1}):e.setData({isAgree:2}),wx.hideLoading()},fail:function(t){e.setData({isAgree:2}),wx.hideLoading()}})},getUserProfile:function(t){var a=this;wx.getUserProfile({desc:"\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599",success:function(t){var i=e.getUID(),n=e.getUserID(),o=t.userInfo;console.log(o),e.updateUserInfo(i,n,o,(function(e){1==e.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),a.initData())}))}})},bindGetUserInfo:function(t){var a=t.detail.userInfo;if(a){var i=e.getUID(),n=e.getUserID(),o=this;e.updateUserInfo(i,n,a,(function(e){1==e.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),o.initData())}))}},createDriverQRCode:function(){var t=e.getUID(),a=(new Date).getTime(),i="create-member-qrcode",n=e.createSysKey(i,a,t),o=this;wx.showLoading({title:"\u6b63\u5728\u521b\u5efa"}),e.ajaxRequest({flag:i,timeStamp:a,uid:t,is_test:1,sysKey:n},(function(e){wx.hideLoading();var t=e.msg||"\u521b\u5efa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5!";1==e.flag?o.setData({isAgree:1,pathDriverQRCode:e.path}):2==e.flag?o.setData({isAgree:2,pathDriverQRCode:""}):(o.setData({isAgree:2,pathDriverQRCode:""}),wx.showToast({icon:"none",title:t,duration:3e3}))}),(function(e){wx.hideLoading()}))},createSafeQRCode:function(){var t=e.getUID(),a=(new Date).getTime(),i="create-member-qrcode-safe",n=e.createSysKey(i,a,t),o=this;wx.showLoading({title:"\u6b63\u5728\u521b\u5efa"}),e.ajaxRequest({flag:i,timeStamp:a,uid:t,is_test:1,sysKey:n},(function(e){wx.hideLoading(),console.log(e);var t=e.msg||"\u521b\u5efa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5!";1==e.flag?o.setData({pathSafeQRCode:e.path}):2==e.flag?o.setData({pathSafeQRCode:"",isAgree:2}):(o.setData({pathSafeQRCode:""}),wx.showToast({icon:"none",title:t,duration:3e3}))}),(function(e){wx.hideLoading()}))}}); 
 			}); 	require("pages/back/ecard.js");
 		__wxRoute = 'pages/message_/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/message_/index.js';	define("pages/message_/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!1;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,statusID:-1,statusList:[{id:-1,name:"\u5168\u90e8"},{id:0,name:"\u672a\u8bfb"},{id:1,name:"\u5df2\u8bfb"}],pageIndex:1,pullDown:!0,dataList:[]},onLoad:function(t){},onReady:function(){var a=t.getUserID(),e=t.getSSID(),s=this.data.statusID,n=this.data.pageIndex;this.loadData(e,a,s,n)},onShow:function(){wx.setNavigationBarTitle({title:"\u7cfb\u7edf\u901a\u77e5"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(!a&&this.data.pullDown){var e=t.getUserID(),s=t.getSSID(),n=this.data.statusID,i=this.data.pageIndex+1;this.loadData(s,e,n,i)}},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabStatus:function(a){var e=a.currentTarget.dataset.id;this.setData({statusID:e,pullDown:!0,dataList:[],pageIndex:1});var s=t.getUserID(),n=t.getSSID();this.loadData(n,s,e,1)},tapView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/message/view?id="+a})},loadData:function(e,s,n,i){var o=(new Date).getTime(),d=t.createSysKey("get-msg-list",o,s);a=!0,wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"get-msg-list",timeStamp:o,ssid:e,userId:s,status:n,pn:i,syskey:d},success:function(t){var e=t.data,s=[];i>1&&(s=this.data.dataList),a=!1,console.log(e),wx.hideLoading(),1==e.flag?(s.push(e),this.setData({dataList:s,pullDown:!0,pageIndex:i})):this.setData({pullDown:!1,pageIndex:i})}.bind(this),fail:function(t){a=!1,wx.hideLoading()}})}}); 
 			}); 	require("pages/message_/index.js");
 		__wxRoute = 'pages/message_/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/message_/view.js';	define("pages/message_/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=this.data.id,e=t.getUserID();this.loadData(e,a)},onShow:function(){wx.setNavigationBarTitle({title:"\u7cfb\u7edf\u901a\u77e5"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tapView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/results/view?id="+a})},loadData:function(a,e){var i="get-msg-by-id",n=(new Date).getTime(),o=t.createSysKey(i,n,a,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:n,userId:a,id:e,syskey:o},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataItem:a.dataItem}):this.setData({dataItem:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/message_/view.js");
 		__wxRoute = 'pages/store/buy';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/store/buy.js';	define("pages/store/buy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,orderQty:1,orderPrice:0,orderAmount:0,orderTotal:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=t.getSSID(),e=t.getUserID(),o=this.data.id;this.loadData(a,e,o)},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=shop&id="+t.getSSID()}},tapMinus:function(t){var a=this.data.orderQty;a>1&&a--;var e=this.data.orderPrice;this.setData({orderQty:a,orderAmount:e*a,orderTotal:e*a})},tapPlus:function(t){var a=this.data.orderQty+1,e=this.data.orderPrice;this.setData({orderQty:a,orderAmount:e*a,orderTotal:e*a})},loadData:function(a,e,o){var r="get-goods-buy",n=(new Date).getTime(),d=t.createSysKey(r,n,e,o);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:r,timeStamp:n,ssid:a,userId:e,id:o,syskey:d},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataItem:a,orderPrice:a.prodInfo.p_price,orderAmount:a.prodInfo.p_price,orderTotal:a.prodInfo.p_price}):this.setData({dataItem:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/store/buy.js");
 		__wxRoute = 'pages/store/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/store/index.js';	define("pages/store/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,current:1,typeID:0,pageIndex:1,dataList:null},onLoad:function(a){this.setData({statName:t.globalData.statName})},onReady:function(){},onShow:function(){this.setData({statName:t.globalData.statName}),wx.setNavigationBarTitle({title:"\u65e5\u7a0b"});var a=t.getSSID(),e=t.getUserID(),n=this.data.typeID,i=this.data.pageIndex;this.loadData(a,e,n,i)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=shop&id="+t.getSSID()}},tabChange:function(a){t.NavTo(a),this.setData({current:a.detail.index})},tapView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/store/view?id="+a})},loadData:function(a,e,n,i){var s="get-calender-list",o=(new Date).getTime(),d=t.createSysKey(s,o,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,timeStamp:o,ssid:a,userId:e,tid:n,pn:i,syskey:d},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a,pageIndex:i}):this.setData({dataList:null,pageIndex:i})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/store/index.js");
 		__wxRoute = 'pages/store/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/store/view.js';	define("pages/store/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,indicatorDots:!0,vertical:!1,autoplay:!1,interval:2e3,duration:500,id:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=t.getSSID(),e=t.getUserID(),i=this.data.id;this.loadData(a,e,i)},onShow:function(){wx.setNavigationBarTitle({title:"\u5546\u54c1\u8be6\u60c5"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=shop&id="+t.getSSID()}},changeIndicatorDots:function(){this.setData({indicatorDots:!this.data.indicatorDots})},changeAutoplay:function(){this.setData({autoplay:!this.data.autoplay})},intervalChange:function(t){this.setData({interval:t.detail.value})},durationChange:function(t){this.setData({duration:t.detail.value})},tapBuy:function(t){var a=t.currentTarget.dataset.id;a&&a>0&&wx.navigateTo({url:"/pages/store/buy?id="+a})},loadData:function(a,e,i){var n="get-goods-by-id",o=(new Date).getTime(),s=t.createSysKey(n,o,e,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:o,ssid:a,userId:e,id:i,syskey:s},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataItem:a}):this.setData({dataItem:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/store/view.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=0;Page({data:{current:0,SSID:0,station:null,indicatorDots:!0,vertical:!1,autoplay:!1,interval:2e3,duration:500,tryCount:0,noticeMsgCount:0},onLoad:function(n){a=setInterval(function(){this.setData({noticeMsgCount:t.getMsgCount()})}.bind(this),5e3)},onUnload:function(){clearInterval(a)},onReady:function(t){},doLogin:function(a){var n=this;t.wxLogin(a,!0,(function(t){var o=a,i=t.data;1==i.flag&&i.StatInfo&&i.StatInfo.id>0&&(o=i.StatInfo.id),o>0?n.loadStationInfo(o):wx.redirectTo({url:"/pages/station/index"})}),(function(t){n.data.tryCount++,n.data.tryCount<5&&n.doLogin(a)}))},onShow:function(){wx.setNavigationBarTitle({title:"\u9996\u9875"});var a=t.getSSID(),n=t.getUID(),o=t.getUserID();n<=0||o<=0?this.doLogin(a):this.loadStationInfo(a)},onPullDownRefresh:function(){var a=t.getSSID();wx.showNavigationBarLoading(),this.loadStationInfo(a,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))},onShareAppMessage:function(){return{title:this.data.station?this.data.station.name:"\u7231\u5361\u4e01\u4ff1\u4e50\u90e8",path:"pages/index/go?cmd=home&id="+t.getSSID()}},changeIndicatorDots:function(){this.setData({indicatorDots:!this.data.indicatorDots})},changeAutoplay:function(){this.setData({autoplay:!this.data.autoplay})},intervalChange:function(t){this.setData({interval:t.detail.value})},durationChange:function(t){this.setData({duration:t.detail.value})},tabCitem:function(t){var a=t.currentTarget.dataset.url;a&&-1!=a.indexOf("#map#")&&wx.navigateTo({url:"/pages/index/map"})},tabNavMap:function(t){var a=parseFloat(t.currentTarget.dataset.lat),n=parseFloat(t.currentTarget.dataset.lng),o=t.currentTarget.dataset.name;wx.openLocation({latitude:a,longitude:n,scale:16,name:o})},loadStationInfo:function(a,n){var o="get-station-by-id",i=(new Date).getTime(),e=t.getUID(),s=t.createSysKey(o,i,e,a);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,uid:e,id:a,timestamp:i,syskey:s},success:function(t){console.log(t.data),wx.hideLoading(),1==t.data.flag?this.setData({station:t.data}):this.setData({station:null})}.bind(this),fail:function(t){wx.hideLoading()},complete:function(){n&&"function"==typeof n&&n()}})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/login/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/login/index.js';	define("pages/login/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{currentTab:"wxlogin",logo:"/images/logo.png",basePath:a.globalData.basePath,statName:a.globalData.statName},onLoad:function(a){},onReady:function(){},onShow:function(){var a=this.data.currentTab,t="\u767b\u5f55";"reg"==a?t="\u4f1a\u5458\u6ce8\u518c":"login"==a&&(t="\u4f1a\u5458\u767b\u5f55"),wx.setNavigationBarTitle({title:t})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.getStatName(),path:"pages/index/go?id="+a.getSSID()}},bindGetUserInfo:function(a){},tapLoginForm:function(a){this.setData({currentTab:"login"})},tapLogin:function(a){},tapWXLogin:function(t){var o=a.getSSID();wx.login({success:function(t){wx.showLoading({title:"\u6b63\u5728\u767b\u5f55",mask:!0}),t.code?wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"wx-login",ssid:o,wxcode:t.code},success:function(t){var n=t.data;if(console.log(n),wx.hideLoading(),1==n.flag){var e=n.UserInfo.SSID||o;a.globalData.userData=n.UserInfo,a.globalData.hasUserData=!0,a.globalData.SSID=e,wx.showToast({title:"\u767b\u5f55\u6210\u529f",duration:3e3,success:function(){wx.switchTab({url:"/pages/index/index"})}})}else{var i=n.msg||"\u767b\u5f55\u5931\u8d25";wx.showToast({icon:"none",title:i,duration:3e3})}}.bind(this),fail:function(a){wx.hideLoading()}}):console.log("\u767b\u5f55\u5931\u8d25\uff01"+t.errMsg)}})}}); 
 			}); 	require("pages/login/index.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/logs/logs.js';	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map((function(a){return t.formatTime(new Date(a))}))})}}); 
 			}); 	require("pages/logs/logs.js");
 		__wxRoute = 'pages/results/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/results/index.js';	define("pages/results/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=0,a=0,i=0;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,SSID:t.getSSID(),current:3,currItemId:0,currentTab:"realtime",currentTabRT:3,rtRaceTime:0,rtLeftTime:0,isPause:"0",rtLocalTime:"",list:t.globalData.navList,dlgStat:!1,typeID:2,teamID:0,dateYear:2019,dateYearMin:2019,dateYearMax:2019,dateMonthYear:2019,dateMonth:11,dateWeekYear:2019,dateWeek:42,dateDay:"2019-11-11",dateDayStart:"2019-01-01",dateDayEnd:"2025-12-31",dlgRealTime:!1,currentRaceId:0,tempRaceId:0,raceRealTimeList:[],raceRealTimeCount:0,statId:t.globalData.SSID,statTempId:0,pageIndex:1,pageDown:!0,station:"",statList:null,teamList:null,typeList:[{id:5,name:"\u65e5\u699c"},{id:1,name:"\u5468\u699c"},{id:2,name:"\u6708\u699c"},{id:3,name:"\u5e74\u699c"},{id:4,name:"\u603b\u699c"}],currentRaceIndex:0,raceList:[],currentRoundIndex:0,roundList:[],currentRaceTopIndex:0,raceTopList:[],currentRoundTopIndex:0,roundTopList:[],currentGroupTopIndex:0,groupTopList:[],dataTops:[],dataResults:[],dataRealTime:[],animType:1,statGroupList:[],currentStatGroupIndex:0,currentOpenId:0,currentStatGroupTopIndex:0,noticeMsgCount:0},onLoad:function(e){console.log(e),wx.setNavigationBarTitle({title:"\u8d5b\u4e8b\u6210\u7ee9"});var a=new Date,r=a.getFullYear(),s=new Date(r,0,1),n=(a.getTime()-s.getTime())/1e3,o=Math.ceil(n/86400),d=a.getMonth()+1,u=Math.ceil((o-7+s.getDay())/7)+1;this.setData({dateYear:r,dateYearMin:2019,dateYearMax:r,dateMonthYear:r,dateMonth:d,dateWeekYear:r,dateWeek:u,dateDay:t.formatDateTime(a,"yyyy-MM-dd"),dateDayStart:"2019-01-01",dateDayEnd:t.formatDateTime(a,"yyyy-MM-dd")}),i=setInterval(function(){this.setData({noticeMsgCount:t.getMsgCount()})}.bind(this),5e3)},onReady:function(){this.initData();var t=this.data.currentTab;"result"!=t&&this.loadResult(t)},onShow:function(){e=setInterval(function(){this.RefreshRealTime()}.bind(this),1e3);var a=t.getSSID(),i=a!=this.data.SSID;this.data.SSID=a,this.setData({statName:t.globalData.statName,SSID:a});var r=this.data.currentTab,s="\u8d5b\u4e8b\u6210\u7ee9";if("result"==r?s="\u6210\u7ee9\u67e5\u8be2":"realtime"==r?s="\u5b9e\u65f6\u6210\u7ee9":"top"==r&&(s="\u5708\u901f\u6392\u884c"),wx.setNavigationBarTitle({title:s}),"result"==t.globalData.tempID){t.globalData.tempID="";t.getUserID(),this.getCurrentRoundID();this.setData({pageIndex:1,currentTab:"result",pullDown:!0,dataResults:[]}),this.initData()}else i&&(console.log("###isChanged###",t.getSSID(),this.data.SSID),this.setData({dlgRealTime:!1,currentRaceId:0,tempRaceId:0,raceRealTimeList:[],raceRealTimeCount:0,statTempId:0,pageIndex:1,pageDown:!0,statList:[],teamList:[],currentRaceIndex:0,raceList:[],currentRoundIndex:0,roundList:[],currentRaceTopIndex:0,raceTopList:[],currentRoundTopIndex:0,roundTopList:[],currentGroupTopIndex:0,groupTopList:[],dataTops:[],dataResults:[],dataRealTime:[],animType:1,statGroupList:[],currentStatGroupIndex:0,currentStatGroupTopIndex:0}),this.initData(function(){"result"!=r&&this.loadResult(r)}.bind(this)))},initData:function(e){var a=t.getUID(),i=t.getSSID(),r=this.getCurrentRoundID(),s="get-race-result-init",n=(new Date).getTime(),o=t.createSysKey(s,n,a,i,r);wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,timeStamp:n,sysKey:o,uid:a,ssid:i,rid:r},success:function(t){var e=t.data;if(console.log(e),1==e.flag){e.statGroupList;this.setData({raceList:e.raceList,roundList:e.roundList,dataResults:[],currentRaceIndex:e.raceIndex,currentRoundIndex:e.roundIndex,raceTopList:e.raceList,roundTopList:e.roundList,currentRaceTopIndex:e.raceIndex,currentRoundTopIndex:e.roundIndex,statGroupList:e.statGroupList,currentStatGroupIndex:e.statGroupIndex,currentStatGroupTopIndex:e.statGroupIndex}),"result"==this.data.currentTab&&this.loadResult("result")}}.bind(this),fail:function(t){},complete:function(){e&&"function"==typeof e&&e()}})},onHide:function(){clearInterval(e)},onUnload:function(){clearInterval(i)},onPullDownRefresh:function(){var e=this.data.currentTab,a=t.getSSID(),i=(t.getUserID(),this.getCurrentRoundID(),this.data.currItemId),r=this.data.currentRaceId;"result"==e?(wx.showNavigationBarLoading(),this.initData((function(t){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}))):"realtime"==e&&(wx.showNavigationBarLoading(),this.loadResultRealTime(a,r,i,!1,(function(t){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()})))},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=result&id="+t.getSSID()}},RefreshRealTime:function(){var e="1"==this.data.isPause,i=this.data.rtRaceTime,r=this.data.rtLeftTime;if(e||(i+=1,r-=1),"realtime"==this.data.currentTab&&(this.setData({rtRaceTime:i,rtLeftTime:r,rtLocalTime:this.getLocalTime()}),++a%5==0)){var s=t.getSSID(),n=this.data.currItemId,o=this.data.currentRaceId;this.loadResultRealTime(s,o,n,!1)}},getLocalTime:function(){var t=new Date,e=t.getHours(),a=t.getMinutes(),i=t.getSeconds();return e+":"+(a<10?"0":"")+a+":"+(i<10?"0":"")+i},tapModal:function(t){this.setData({dlgStat:!1})},tapModalRT:function(t){this.setData({animType:2}),setTimeout(function(){this.setData({dlgRealTime:!1})}.bind(this),500)},tapSearch:function(){this.setData({dlgStat:!0})},tapSelect:function(t){var e=t.currentTarget.dataset.id;this.setData({statTempId:e})},tapSelectRT:function(t){var e=t.currentTarget.dataset.id;this.setData({tempRaceId:e})},tapSelectBtn:function(e){var a=t.getUserID(),i=this.data.statTempId,r=this.getCurrentRoundID();this.setData({statId:i,dlgStat:!1,pageIndex:1,pullDown:!0,dataResults:[]}),this.loadResultList(i,a,r)},tapSelectBtnRT:function(e){t.getUserID();var a=this.data.tempRaceId,i=(this.getCurrentRoundID(),this.data.SSID);this.setData({currentRaceId:a,animType:2}),setTimeout(function(){this.setData({dlgRealTime:!1})}.bind(this),500),this.loadResultRealTime(i,a,0,!1)},tapView:function(t){var e=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/results/view?id="+e})},tapItem:function(e){var a=e.currentTarget.dataset.id,i=this.data.currentRaceId;this.data.currItemId==a&&(a=0),this.setData({currItemId:a});var r=t.getSSID();this.loadResultRealTime(r,i,a,!1)},toggleTab:function(t){var e=t.currentTarget.dataset.index;this.data.raceRealTimeCount>1&&this.setData({animType:1,dlgRealTime:!0}),this.loadResult(e)},toggleTabItem:function(t){var e=t.currentTarget.dataset.id;this.setData({currentTabRT:e}),this.loadResult("realtime")},getCurrentRaceID:function(){var t=this.data.raceList,e=this.data.currentRaceIndex;return t&&t.length>0&&e>=0&&e<t.length?t[e].id:0},getCurrentRaceTopID:function(){var t=this.data.raceTopList,e=this.data.currentRaceTopIndex;return t&&t.length>0&&e>=0&&e<t.length?t[e].id:0},getCurrentRoundID:function(){var t=this.data.roundList,e=this.data.currentRoundIndex;return t&&t.length>0&&e>=0&&e<t.length?t[e].id:0},getCurrentRoundTopID:function(){var t=this.data.roundTopList,e=this.data.currentRoundTopIndex;return t&&t.length>0&&e>=0&&e<t.length?t[e].id:0},getCurrentGroupTopID:function(){var t=this.data.groupTopList,e=this.data.currentGroupTopIndex;return t&&t.length>0&&e>=0&&e<t.length?t[e].id:""},getCurrentStatGroupID:function(){var e=this.data.statGroupList,a=this.data.currentStatGroupIndex,i=t.getSSID();return e&&e.length>0&&a>=0&&a<e.length?e[a].id:i},getCurrentStatGroupTopID:function(){var e=this.data.statGroupList,a=this.data.currentStatGroupTopIndex,i=t.getSSID();return e&&e.length>0&&a>=0&&a<e.length?e[a].id:i},bindTapStatGroup:function(e){var a=e.detail.value;if(a){this.setData({currentStatGroupIndex:a});var i=this.data.statGroupList;if(i&&i[a]){var r=i[a].id,s=t.getUserID();this.loadRaceList(r,s,0)}}},bindTapStatGroupTop:function(e){var a=e.detail.value;if(a){this.setData({currentStatGroupTopIndex:a});var i=this.data.statGroupList;if(i&&i[a]){var r=i[a].id,s=t.getUserID();this.loadRaceListTop(r,s,0)}}},bindTapOpen:function(t){var e=t.currentTarget.dataset.id;e==this.data.currentOpenId?this.setData({currentOpenId:0}):(this.setData({currentOpenId:e}),this.loadResult("result"))},bindTapRace:function(e){var a=e.detail.value;if(a){this.setData({currentRaceIndex:a});var i=this.data.raceList;if(i&&i[a]){var r=i[a].id,s=t.getUserID(),n=this.getCurrentStatGroupID();this.loadRoundList(n,s,r)}}},bindTapRound:function(e){var a=e.detail.value;if(a){this.setData({currentRoundIndex:a});var i=this.data.roundList;if(i&&i[a]){var r=i[a].id,s=t.getUserID(),n=this.getCurrentStatGroupID();this.loadResultList(n,s,r)}}},bindTapRaceTop:function(e){var a=e.detail.value;if(a){this.setData({currentRaceTopIndex:a});var i=this.data.raceTopList;if(i&&i[a]){var r=i[a].id,s=t.getUserID(),n=this.getCurrentStatGroupTopID();this.loadRoundTopList(n,s,r)}}},bindTapRoundTop:function(e){var a=e.detail.value;if(a){this.setData({currentRoundTopIndex:a});var i=this.data.roundTopList;if(i&&i[a]){var r=i[a].id,s=t.getUserID(),n=this.getCurrentStatGroupTopID();this.loadResultTop(n,s,r,"")}}},bindTapGroupTop:function(e){var a=e.detail.value;if(a){this.setData({currentGroupTopIndex:a});var i=this.data.groupTopList;if(i&&i[a]){var r=i[a].id,s=t.getUserID(),n=t.getSSID(),o=this.getCurrentRoundTopID();this.loadResultTop(n,s,o,r)}}},loadResult:function(e){var a=t.getSSID(),i=this.getCurrentStatGroupID(),r=t.getUserID(),s=this.data.currItemId,n=this.getCurrentRoundID(),o=this.data.currentRaceId,d=this.getCurrentRoundTopID(),u=this.getCurrentGroupTopID();switch(e){case"result":this.setData({currentTab:"result"}),this.loadResultList(i,r,n);break;case"top":this.setData({currentTab:"top"}),this.loadResultTop(i,r,d,u);break;case"realtime":this.setData({currentTab:"realtime"}),this.loadResultRealTime(a,o,s,!1)}},loadResultList:function(e,a,i,r){var s="get-race-result-ritem-list",n=(new Date).getTime(),o=t.createSysKey(s,n,a),d=this.data.currentOpenId||0;!0,wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,ssid:e,userId:a,pid:i,itemId:d,timeStamp:n,sysKey:o},success:function(t){var e=t.data;!1,console.log(e),wx.hideLoading(),1==e.flag?this.setData({dataResults:e,currentOpenId:e.currOpenId||0}):this.setData({dataResults:[],currentOpenId:0}),r&&"function"==typeof r&&r(e)}.bind(this),fail:function(t){wx.hideLoading(),!1,r&&"function"==typeof r&&r(data)}})},loadResultRealTime:function(e,a,i,r,s){var n="get-result-realtime-race",o=(new Date).getTime(),d=t.getUID(),u=t.createSysKey(n,o,d),c=this.data.currentTabRT||1;r&&wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,ssid:e,uid:d,tab:c,pid:a,itemid:i,timeStamp:o,syskey:u},success:function(t){var e=t.data;if(console.log(e),r&&wx.hideLoading(),1==e.flag){var i=e.raceItem.raceTime,s=e.raceItem.leftTime,n=e.RaceList&&e.RaceList.length>0?e.RaceList.length:0,o=a,d=e.raceItem.isPause||"0";e.raceItem&&e.raceItem.id&&(o=e.raceItem.id),this.setData({rtRaceTime:i,rtLeftTime:s,dataRealTime:e,isPause:d,raceRealTimeList:e.RaceList,raceRealTimeCount:n,currentRaceId:o})}else this.setData({dataRealTime:null,rtRaceTime:0,rtLeftTime:0})}.bind(this),fail:function(t){r&&wx.hideLoading()},complete:function(){s&&"function"==typeof s&&s()}})},loadResultTop:function(e,a,i,r){wx.showLoading({title:"\u52a0\u8f7d\u4e2d"});var s="get-race-result-top",n={},o=(new Date).getTime(),d=(a=t.getUID(),t.createSysKey(s,o,a));n.uid=a,n.ssid=e,n.flag=s,n.pid=i,n.tname=r,n.timeStamp=o,n.sysKey=d,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:n,success:function(t){var e=t.data;console.log(e),wx.hideLoading();var a=e.teamItems||[];console.log("teamItems",a),1==e.flag?this.setData({dataTops:e,groupTopList:a}):this.setData({dataTops:null,groupTopList:a})}.bind(this),fail:function(t){wx.hideLoading()}})},loadRaceList:function(e,a,i){var r="get-race-list-group",s=(new Date).getTime(),n=t.createSysKey(r,s,a,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:r,timeStamp:s,ssid:e,userId:a,pid:i,syskey:n},success:function(t){var i=t.data;if(!1,console.log(i),wx.hideLoading(),1==i.flag&&i.items&&i.items.length>0){var r=i.raceID||0;this.setData({raceList:i.items,roundList:[],dataResults:[]}),this.loadRoundList(e,a,r)}else this.setData({raceList:[],roundList:[],dataResults:[]}),console.log("###")}.bind(this),fail:function(t){wx.hideLoading(),!1}})},loadRoundList:function(e,a,i){var r="get-race-result-round-list",s=(new Date).getTime(),n=t.createSysKey(r,s,a,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:r,timeStamp:s,ssid:e,userId:a,pid:i,syskey:n},success:function(e){var a=e.data;if(!1,console.log(a),wx.hideLoading(),1==a.flag&&a.items&&a.items.length>0){var i=t.getUserID(),r=this.getCurrentStatGroupID(),s=a.roundID||0;this.setData({roundList:a.items,currentRoundIndex:a.roundIndex,dataResults:[]}),this.loadResultList(r,i,s)}else this.setData({roundList:[],dataResults:[],currentRoundIndex:0})}.bind(this),fail:function(t){wx.hideLoading(),!1}})},loadRaceListTop:function(e,a,i){var r="get-race-list-group",s=(new Date).getTime(),n=t.createSysKey(r,s,a,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:r,timeStamp:s,ssid:e,userId:a,pid:i,syskey:n},success:function(t){var i=t.data;if(!1,console.log(i),wx.hideLoading(),1==i.flag&&i.items&&i.items.length>0){var r=i.raceID||0;this.setData({raceTopList:i.items,roundTopList:[],dataTops:[]}),this.loadRoundTopList(e,a,r)}else this.setData({raceTopList:[],roundTopList:[],dataTops:[]}),console.log("###top")}.bind(this),fail:function(t){wx.hideLoading(),!1}})},loadRoundTopList:function(e,a,i){var r="get-race-result-round-list",s=(new Date).getTime(),n=t.createSysKey(r,s,a,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:r,timeStamp:s,ssid:e,userId:a,pid:i,syskey:n},success:function(e){var a=e.data;if(!1,console.log(a),wx.hideLoading(),1==a.flag&&a.items&&a.items.length>0){var i=t.getUserID(),r=this.getCurrentStatGroupTopID(),s=a.roundID||0,n=this.getCurrentGroupTopID();this.setData({roundTopList:a.items,currentRoundTopIndex:a.roundIndex,dataTops:[]}),this.loadResultTop(r,i,s,n)}else this.setData({roundTopList:[],dataTops:[],currentRoundTopIndex:0})}.bind(this),fail:function(t){wx.hideLoading(),!1}})}}); 
 			}); 	require("pages/results/index.js");
 		__wxRoute = 'pages/results/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/results/view.js';	define("pages/results/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,currentTab:"result",currItemId:0,currentGroupIndex:0,groupList:[],id:0,userID:0,dataList:null},onLoad:function(a){var e=a.id||0;this.setData({id:e,userID:t.getUserID()})},onReady:function(){this.loadData("result")},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u6210\u7ee9"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var t=this.data.currentTab;this.loadData(t)},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=result&id="+t.getSSID()}},tapItem:function(a){var e=a.currentTarget.dataset.id;if(e==this.data.currItemId&&(e=0),this.setData({currItemId:e,dataResultItems:null}),e>0){var i=t.getSSID(),s=t.getUserID();this.loadResultItem(i,s,e,(function(t){}))}else this.setData({dataResultItems:null})},toggleTab:function(t){var a=t.currentTarget.dataset.index;this.setData({currentTab:a}),this.loadData(a)},bindTapGroup:function(a){var e=a.detail.value;if(e){this.setData({currentGroupIndex:e,currentTab:"group"});var i=this.data.groupList;if(i&&i[e]){var s=i[e].name,o=this.data.id,n=t.getUserID(),r=t.getSSID();wx.showNavigationBarLoading(),this.loadResults(r,n,o,s,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))}}},loadData:function(a){var e=this.data.id,i=t.getUserID(),s=t.getSSID(),o=this.data.currentGroupIndex,n=this.data.groupList||[],r=o>=0&&n&&n[o]?n[o].name:"NULL";wx.showNavigationBarLoading(),"group"==a?this.loadResults(s,i,e,r,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()})):"control"==a?this.loadControlMsg(s,i,e,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()})):this.loadResults(s,i,e,"",(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))},loadResults:function(a,e,i,s,o){var n="get-race-result-by-pid",r=(new Date).getTime(),d=t.createSysKey(n,r,e,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timestamp:r,ssid:a,userId:e,pid:i,isTest:1,group:s,syskey:d},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a,groupList:a.groupList}):this.setData({dataList:{}})}.bind(this),fail:function(t){wx.hideLoading()},complete:function(){o&&"function"==typeof o&&o()}})},loadResultItem:function(a,e,i,s){var o="get-race-result-item",n=(new Date).getTime(),r=t.createSysKey(o,n,e,i);wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timestamp:n,ssid:a,userId:e,pid:i,syskey:r},success:function(t){var a=t.data;console.log(a),1==a.flag?this.setData({currItemId:i,dataResultItems:a.items}):this.setData({dataResultItems:{}})}.bind(this),fail:function(t){},complete:function(){s&&"function"==typeof s&&s()}})},loadControlMsg:function(a,e,i,s){var o="get-race-control-by-pid",n=(new Date).getTime(),r=t.createSysKey(o,n,e,i);wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timestamp:n,ssid:a,userId:e,pid:i,syskey:r},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a,groupList:a.groupList}):this.setData({dataList:{}})}.bind(this),fail:function(t){wx.hideLoading()},complete:function(){s&&"function"==typeof s&&s()}})}}); 
 			}); 	require("pages/results/view.js");
 		__wxRoute = 'pages/docs/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/docs/index.js';	define("pages/docs/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=0;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,SSID:t.getSSID(),list:t.globalData.navList,currentRid:0,currentRName:"2021\u5e74 \u4e2d\u56fd\u8d85\u7ea7\u8dd1\u8f66\u9526\u6807\u8d5b \u4e0a\u6d77\u7ad9",dataList:[],cateId:0,cateList:[{id:-1,name:"\u5168\u90e8"},{id:1,name:"\u516c\u544a\u7c7b\u578b1"},{id:2,name:"\u516c\u544a\u7c7b\u578b2"},{id:3,name:"\u516c\u544a\u7c7b\u578b3"}],noticeMsgCount:0},onLoad:function(e){var i=e.id||0,s=t.globalData.tempFlag,n=t.globalData.tempData;"docs"==s&&""!=n&&parseInt(n)>0&&(i=parseInt(n)),this.setData({SSID:t.getSSID(),currentRid:i,currentRName:""}),a=setInterval(function(){this.setData({noticeMsgCount:t.getMsgCount()})}.bind(this),5e3)},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u8d5b\u4e8b\u516c\u544a"}),console.log("docs.index.onShow");var a=t.getSSID(),e=t.getUserID(),i=t.getSSID()!=this.data.SSID,s=t.globalData.tempFlag,n=t.globalData.tempData;if("docs"==s&&""!=n&&parseInt(n)>0)this.setData({statName:t.globalData.statName,SSID:a,currentRid:n,currentRName:""}),t.globalData.tempFlag="",t.globalData.tempData="",this.initData(a,e,n);else if(i)this.setData({statName:t.globalData.statName,SSID:a}),this.initData(a,e,0);else{this.setData({statName:t.globalData.statName,SSID:a});var o=this.data.currentRid;this.initData(a,e,o)}},onHide:function(){},onUnload:function(){clearInterval(a)},onPullDownRefresh:function(){var a=t.getSSID(),e=t.getUserID(),i=this.data.currentRid;wx.showNavigationBarLoading(),this.initData(a,e,i,(function(t){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}))},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=docs&id="+t.getSSID()}},tabCate:function(a){var e=a.currentTarget.dataset.id;this.setData({cateId:e});var i=t.getSSID(),s=t.getUserID(),n=this.data.currentRid;this.loadDocumentsList(i,s,e,n)},tabDocs:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/docs/view?id="+a})},tabSearch:function(t){var a=this.data.currentRid||0;wx.navigateTo({url:"/pages/docs/search?id="+a})},loadDocumentsList:function(a,e,i,s){var n="get-race-docs-list",o=(new Date).getTime(),r=t.createSysKey(n,o,e);!0,wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:o,ssid:a,userId:e,cid:i,rid:s,syskey:r},success:function(t){var a=t.data;!1,console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a}):this.setData({dataList:[]})}.bind(this),fail:function(t){!1,wx.hideLoading()}})},initData:function(a,e,i,s){var n="get-race-docs-init",o=(new Date).getTime(),r=t.createSysKey(n,o,e);!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:o,ssid:a,userId:e,rid:i,syskey:r},success:function(t){var i=t.data;if(!1,console.log(i),1==i.flag&&i.cateList){var n=i.roundID,o=this.data.cateId;this.setData({cateList:i.cateList,currentRName:i.roundName,currentRid:i.roundID}),console.log(i.cateList),this.loadDocumentsList(a,e,o,n)}else this.setData({cateList:[],dataList:[]});s&&"function"==typeof s&&s(i)}.bind(this),fail:function(t){!1,s&&"function"==typeof s&&s(data)}})}}); 
 			}); 	require("pages/docs/index.js");
 		__wxRoute = 'pages/docs/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/docs/view.js';	define("pages/docs/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,id:0,dataItem:null},onLoad:function(t){var a=t.id?t.id:0;this.setData({id:a})},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u8d5b\u4e8b\u516c\u544a"});var t=this.data.id;this.loadData(t)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var t=this.data.id;wx.showNavigationBarLoading(),this.loadData(t,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=docs&id="+t.getSSID()}},loadData:function(a,o){var e="get-race-docs-by-id",n=(new Date).getTime(),i=t.getUserID(),s=t.createSysKey(e,n,i,a),d=t.getSSID();wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:e,timeStamp:n,userId:i,ssid:d,id:a,syskey:s},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataItem:a.dataItem}):this.setData({dataItem:null})}.bind(this),fail:function(t){wx.hideLoading()},complete:function(){o&&"function"==typeof o&&o()}})},downloadFile:function(t){wx.downloadFile({url:t,header:{},success:function(t){var a=t.tempFilePath;console.log(a),wx.openDocument({filePath:a,success:function(t){console.log("\u6253\u5f00\u6587\u6863\u6210\u529f")},fail:function(t){console.log(t)},complete:function(t){console.log(t)}})},fail:function(t){wx.showToast({title:"\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25"})},complete:function(t){}})},tapDownload:function(t){var a=t.currentTarget.dataset.url;a&&this.downloadFile(a)}}); 
 			}); 	require("pages/docs/view.js");
 		__wxRoute = 'pages/docs/search';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/docs/search.js';	define("pages/docs/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{basePath:a.globalData.basePath,id:0,dataList:[]},onLoad:function(a){var t=a.id?a.id:0;this.setData({id:t})},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u9009\u62e9\u6bd4\u8d5b\u5206\u7ad9"});var a=this.data.id;this.loadData(a)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var a=this.data.id;wx.showNavigationBarLoading(),this.loadData(a,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))},onReachBottom:function(){},onShareAppMessage:function(){return{title:a.getStatName(),path:"pages/index/go?cmd=docs&id="+a.getSSID()}},tabChange:function(t){var e=t.currentTarget.dataset.id;a.globalData.tempFlag="docs",a.globalData.tempData=e,wx.switchTab({url:"/pages/docs/index"})},loadData:function(t,e){var i="get-race-docs-search",o=(new Date).getTime(),n=a.getUserID(),s=a.createSysKey(i,o,n,t),d=a.getSSID();wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:o,userId:n,id:t,ssid:d,syskey:s},success:function(a){var t=a.data;console.log(t),wx.hideLoading(),1==t.flag?this.setData({dataList:t}):this.setData({dataList:[]})}.bind(this),fail:function(a){wx.hideLoading()},complete:function(){e&&"function"==typeof e&&e()}})}}); 
 			}); 	require("pages/docs/search.js");
 		__wxRoute = 'pages/user/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/index.js';	define("pages/user/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=0;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,noticeMsgCount:0,current:4,userData:null,list:t.globalData.navList,menuList:[{icon:"fa fa-flag",text:"\u6211\u7684\u8d5b\u4e8b",url:"/pages/user/station",actived:0},{icon:"fa fa-qrcode",text:"\u53c2\u8d5b\u5361",url:"/pages/user/ecard",actived:1},{icon:"fa fa-user",text:"\u6211\u7684\u8d44\u6599",url:"/pages/user/userinfo",actived:0},{icon:"fa fa-trophy",text:"\u6211\u7684\u6210\u7ee9",url:"@result",actived:0},{icon:"fa fa-database",text:"\u6211\u7684\u8ba2\u5355",url:"/pages/order/index",actived:0},{icon:"fa fa-ticket",text:"\u6211\u7684\u5238\u7968",url:"/pages/ticket/index",actived:0}]},onLoad:function(e){a=setInterval(function(){this.setData({noticeMsgCount:t.getMsgCount()})}.bind(this),5e3)},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u4e2a\u4eba\u4e2d\u5fc3"}),this.setData({statName:t.globalData.statName}),wx.showTabBar({});var a=t.getUserID();this.loadData(a)},onHide:function(){},onUnload:function(){clearInterval(a)},onPullDownRefresh:function(){var a=t.getUserID();wx.showNavigationBarLoading(),this.loadData(a,(function(){wx.stopPullDownRefresh(),wx.hideNavigationBarLoading()}))},onReachBottom:function(){},updateUserInfo:function(){var a=this,e=t.getUID(),n=t.getUserID();wx.getSetting({success:function(o){o.authSetting["scope.userInfo"]&&wx.getUserInfo({lang:"zh_CN",success:function(o){console.log(o),t.globalData.userInfo=o.userInfo,t.globalData.hasUserInfo=!0,t.updateUserInfoAuto(e,n,o.userInfo,(function(t){a.loadData(n)}))}})}})},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabChange:function(a){t.NavTo(a)},tapPhoto:function(){wx.navigateTo({url:"/pages/user/userphoto"})},tapPoint:function(){},tapTicket:function(){wx.navigateTo({url:"/pages/ticket/index"})},toggleTab:function(a){var e=a.currentTarget.dataset.url;switch(e){case"@result":t.globalData.tempID="result",wx.switchTab({url:"/pages/results/index"});break;case"@rank":wx.switchTab({url:"/pages/rank/index"});break;case"@logout":t.userLogout();break;default:wx.navigateTo({url:e})}},loadData:function(a,e){var n=(new Date).getTime(),o=t.createSysKey("get-userinfo",n,a);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"get-userinfo",timeStamp:n,userId:a,syskey:o},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({userData:a.dataItem}):this.setData({userData:null})}.bind(this),fail:function(t){wx.hideLoading()},complete:function(){e&&"function"==typeof e&&e()}})}}); 
 			}); 	require("pages/user/index.js");
 		__wxRoute = 'pages/calendar/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/calendar/index.js';	define("pages/calendar/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=0;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,SSID:t.getSSID(),raceID:0,roundID:0,currentRaceIndex:0,currentRoundIndex:0,raceList:[],roundList:[],dataList:[],currentOpenId:0,noticeMsgCount:0,marginTop:"26px"},onLoad:function(e){var n=e.id||0;this.setData({raceID:n}),a=setInterval(function(){this.setData({noticeMsgCount:t.getMsgCount()})}.bind(this),5e3)},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u8d5b\u4e8b\u65e5\u7a0b"});var a=t.getSSID(),e=t.getUserID(),n=this.data.raceID;a==this.data.SSID&&""!=this.data.statName&&this.data.statName||this.setData({SSID:a,raceID:0,roundID:0,statName:t.globalData.statName}),this.loadCalendarInit(a,e,n)},onHide:function(){},onUnload:function(){clearInterval(a)},onPullDownRefresh:function(){var a=t.getUserID(),e=t.getSSID(),n=this.data.raceID;wx.showNavigationBarLoading(),this.loadCalendarInit(e,a,n,(function(){wx.hideNavigationBarLoading(),wx.stopPullDownRefresh()}))},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=calendar&id="+t.getSSID()}},bindTapOpen:function(a){var e=a.currentTarget.dataset.id;if(e==this.data.currentOpenId)this.setData({currentOpenId:0});else{this.setData({currentOpenId:e});var n=t.getUserID(),i=t.getSSID(),s=this.getCurrentRoundID();this.loadCalendarList(i,n,s)}},getCurrentRoundID:function(){var t=this.data.currentRoundIndex,a=this.data.roundList;return a&&t>=0&&t<a.length?a[t].id:0},bindPickerChange:function(a){var e=a.detail.value,n=this;if(e){this.setData({currentRaceIndex:e}),console.log(e);var i=this.data.raceList;if(i&&i[e]){var s=i[e].id,r=t.getUserID(),d=t.getSSID();wx.createSelectorQuery().select("#picker1").boundingClientRect((function(t){t&&t.height>36?n.setData({marginTop:"26px"}):n.setData({marginTop:"6px"})})).exec(),this.loadRoundList(d,r,s)}}},bindPickerRoundChange:function(a){var e=a.detail.value;if(e){this.setData({currentRoundIndex:e}),console.log(e);var n=this.data.roundList;if(n&&n[e]){var i=n[e].id,s=t.getUserID(),r=t.getSSID();this.loadCalendarList(r,s,i)}}},tabRound:function(a){var e=a.currentTarget.dataset.id;if(-1!=e){this.setData({roundID:e,dataList:[]});var n=t.getUserID(),i=t.getSSID();this.loadCalendarList(i,n,e)}},tabView:function(t){var a=t.currentTarget.dataset.id;3==t.currentTarget.dataset.status&&wx.navigateTo({url:"/pages/results/view?id="+a})},loadCalendarInit:function(a,e,n,i){var s="get-race-calendar-init",r=(new Date).getTime(),d=t.createSysKey(s,r,e,n),o=this;wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,timeStamp:r,ssid:a,userId:e,pid:n,syskey:d},success:function(a){var e=a.data;if(!1,console.log(e),wx.hideLoading(),1==e.flag&&e.raceList&&e.raceList.length>0){var n=t.getUserID(),s=t.getSSID(),r=e.raceID||0;this.setData({raceList:e.raceList,raceID:r,currentRaceIndex:e.raceIndex||0,dataList:[],roundList:[]}),wx.createSelectorQuery().select("#picker1").boundingClientRect((function(t){t&&t.height>36?o.setData({marginTop:"26px"}):o.setData({marginTop:"6px"})})).exec(),this.loadRoundList(s,n,r)}else this.setData({raceList:[],raceID:0,currentRaceIndex:0,dataList:[],roundList:[]});i&&"function"==typeof i&&i(e)}.bind(this),fail:function(t){wx.hideLoading(),!1,i&&"function"==typeof i&&i(data)}})},loadRoundList:function(a,e,n){var i="get-race-round-list",s=(new Date).getTime(),r=t.createSysKey(i,s,e,n);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:s,ssid:a,userId:e,pid:n,syskey:r},success:function(a){var e=a.data;if(!1,console.log(e),wx.hideLoading(),1==e.flag&&e.items&&e.items.length>0){var n=t.getUserID(),i=t.getSSID(),s=e.roundID||0,r=e.roundIndex||0;this.setData({roundList:e.items,roundID:s,currentRoundIndex:r,dataList:[]}),this.loadCalendarList(i,n,s)}else this.setData({roundList:[],dataList:[],roundID:0,currentRoundIndex:0})}.bind(this),fail:function(t){wx.hideLoading(),!1}})},loadCalendarList:function(a,e,n){var i="get-race-calendar-list",s=(new Date).getTime(),r=t.createSysKey(i,s,e),d=this.data.currentOpenId||0;wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:s,ssid:a,userId:e,itemId:d,pid:n,syskey:r},success:function(t){var a=t.data;!1,console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a,currentOpenId:a.openId}):this.setData({dataList:[],currentOpenId:0})}.bind(this),fail:function(t){wx.hideLoading(),!1}})}}); 
 			}); 	require("pages/calendar/index.js");
 		__wxRoute = 'pages/calendar/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/calendar/view.js';	define("pages/calendar/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataList:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u65e5\u7a0b"});var a=t.getUserID(),e=this.data.id;this.loadData(a,e)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=calender&id="+t.getSSID()}},loadData:function(a,e){wx.showLoading({title:"\u4e0b\u5728\u52a0\u8f7d..."});var n="get-orderinfo-by-id",i=(new Date).getTime(),o=t.createSysKey(n,i,a,e),s=this;t.ajaxRequest({flag:n,timestamp:i,userId:a,id:e,syskey:o},(function(t){wx.hideLoading(),1==t.flag?s.setData({dataList:t}):s.setData({dataList:null})}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/calendar/view.js");
 		__wxRoute = 'pages/ticket/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/ticket/index.js';	define("pages/ticket/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!1;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,statusID:-1,pageIndex:1,pullDown:!0,statusList:[{id:-1,name:"\u5168\u90e8"},{id:0,name:"\u4e0d\u53ef\u7528"},{id:1,name:"\u672a\u9884\u7ea6"},{id:2,name:"\u5df2\u9884\u7ea6"},{id:3,name:"\u5df2\u4f7f\u7528"}],dataList:[]},onLoad:function(t){},onReady:function(){var a=t.getUserID(),e=t.getSSID(),i=this.data.statusID,n=this.data.pageIndex;this.loadData(e,a,i,n)},onShow:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u5238\u7968"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(!a&&this.data.pullDown){var e=t.getUserID(),i=t.getSSID(),n=this.data.statusID,s=this.data.pageIndex+1;this.loadData(i,e,n,s)}},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabStatus:function(a){var e=a.currentTarget.dataset.id;this.setData({statusID:e,pullDown:!0,dataList:[],pageIndex:1});var i=t.getUserID(),n=t.getSSID();this.loadData(n,i,e,1)},tapRequest:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/ticket/request?id="+a})},tapView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/ticket/view?id="+a})},loadData:function(e,i,n,s){var o="get-ticket-list",d=(new Date).getTime(),u=t.createSysKey(o,d,i);a=!0,wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timeStamp:d,ssid:e,userId:i,status:n,pn:s,syskey:u},success:function(t){a=!1;var e=t.data,i=[];s>1&&(i=this.data.dataList),console.log(e),wx.hideLoading(),1==e.flag?(i.push(e),this.setData({dataList:i,pullDown:!0,pageIndex:s})):(this.setData({pullDown:!1,pageIndex:s}),wx.showToast({icon:"none",title:"\u6ca1\u6709\u66f4\u591a\u4e86",duration:3e3}))}.bind(this),fail:function(t){wx.hideLoading(),a=!1}})}}); 
 			}); 	require("pages/ticket/index.js");
 		__wxRoute = 'pages/ticket/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/ticket/view.js';	define("pages/ticket/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=t.getUserID(),e=this.data.id;this.loadData(a,e)},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u5238\u7968"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},loadData:function(a,e){wx.showLoading({title:"\u4e0b\u5728\u52a0\u8f7d..."});var n="get-ticket-info-by-id",i=(new Date).getTime(),o=t.createSysKey(n,i,a,e),d=this;t.ajaxRequest({flag:n,timestamp:i,userId:a,id:e,syskey:o},(function(t){wx.hideLoading(),1==t.flag?d.setData({dataItem:t.dataItem}):d.setData({dataItem:null})}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/ticket/view.js");
 		__wxRoute = 'pages/user/userinfo';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/userinfo.js';	define("pages/user/userinfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=getApp();Page({data:{basePath:a.globalData.basePath,statName:a.globalData.statName,isChanged:!1,dataItem:null,mxName:"",mxNicName:"",mxPhoto:"",mxMobile:"",mxTeam:"",mxUpdateAll:!1,mxGender:1,mxRegion:"",sRegion:"",genderIndex:0,mxBirthDay:"1990-01-01",genderList:[{id:1,name:"\u7537"},{id:2,name:"\u5973"}],dateStart:"1890-01-01",dateEnd:"2019-01-01",region:["","",""],customItem:"\u5168\u90e8",natIndex:0,natList:[{id:1,name:"\u4e2d\u56fd"},{id:2,name:"\u963f\u5c14\u5df4\u5c3c\u4e9a"},{id:3,name:"\u963f\u5c14\u53ca\u5229\u4e9a"},{id:4,name:"\u963f\u5bcc\u6c57"},{id:5,name:"\u963f\u6839\u5ef7"},{id:6,name:"\u963f\u62c9\u4f2f\u8054\u5408\u914b\u957f\u56fd"},{id:7,name:"\u963f\u9c81\u5df4"},{id:8,name:"\u963f\u66fc"},{id:9,name:"\u963f\u585e\u62dc\u7586"},{id:10,name:"\u963f\u68ee\u677e\u5c9b"},{id:11,name:"\u57c3\u53ca"},{id:12,name:"\u57c3\u585e\u4fc4\u6bd4\u4e9a"},{id:13,name:"\u7231\u5c14\u5170"},{id:14,name:"\u7231\u6c99\u5c3c\u4e9a"},{id:15,name:"\u5b89\u9053\u5c14"},{id:16,name:"\u5b89\u54e5\u62c9"},{id:17,name:"\u5b89\u572d\u62c9"},{id:18,name:"\u5b89\u63d0\u74dc\u5c9b\u548c\u5df4\u5e03\u8fbe"},{id:19,name:"\u6fb3\u5927\u5229\u4e9a"},{id:20,name:"\u5965\u5730\u5229"},{id:21,name:"\u5965\u5170\u7fa4\u5c9b"},{id:22,name:"\u5df4\u5df4\u591a\u65af\u5c9b"},{id:23,name:"\u5df4\u5e03\u4e9a\u65b0\u51e0\u5185\u4e9a"},{id:24,name:"\u5df4\u54c8\u9a6c"},{id:25,name:"\u5df4\u57fa\u65af\u5766"},{id:26,name:"\u5df4\u62c9\u572d"},{id:27,name:"\u5df4\u52d2\u65af\u5766"},{id:28,name:"\u5df4\u6797"},{id:29,name:"\u5df4\u62ff\u9a6c"},{id:30,name:"\u5df4\u897f"},{id:31,name:"\u767d\u4fc4\u7f57\u65af"},{id:32,name:"\u767e\u6155\u5927"},{id:33,name:"\u4fdd\u52a0\u5229\u4e9a"},{id:34,name:"\u5317\u9a6c\u91cc\u4e9a\u7eb3\u7fa4\u5c9b"},{id:35,name:"\u8d1d\u5b81"},{id:36,name:"\u6bd4\u5229\u65f6"},{id:37,name:"\u51b0\u5c9b"},{id:38,name:"\u6ce2\u591a\u9ece\u5404"},{id:39,name:"\u6ce2\u5170"},{id:40,name:"\u73bb\u5229\u7ef4\u4e9a"},{id:41,name:"\u6ce2\u65af\u5c3c\u4e9a\u548c\u9ed1\u585e\u54e5\u7ef4\u90a3"},{id:42,name:"\u535a\u8328\u74e6\u7eb3"},{id:43,name:"\u4f2f\u5229\u5179"},{id:44,name:"\u4e0d\u4e39"},{id:45,name:"\u5e03\u57fa\u7eb3\u6cd5\u7d22"},{id:46,name:"\u5e03\u9686\u8fea"},{id:47,name:"\u5e03\u97e6\u5c9b"},{id:48,name:"\u671d\u9c9c"},{id:49,name:"\u4e39\u9ea6"},{id:50,name:"\u5fb7\u56fd"},{id:51,name:"\u4e1c\u5e1d\u6c76"},{id:52,name:"\u591a\u54e5"},{id:53,name:"\u591a\u7c73\u5c3c\u52a0"},{id:54,name:"\u591a\u7c73\u5c3c\u52a0\u5171\u548c\u56fd"},{id:55,name:"\u4fc4\u7f57\u65af"},{id:56,name:"\u5384\u74dc\u591a\u5c14"},{id:57,name:"\u5384\u7acb\u7279\u91cc\u4e9a"},{id:58,name:"\u6cd5\u56fd"},{id:59,name:"\u6cd5\u7f57\u7fa4\u5c9b"},{id:60,name:"\u6cd5\u5c5e\u6ce2\u5229\u5c3c\u897f\u4e9a"},{id:61,name:"\u6cd5\u5c5e\u572d\u4e9a\u90a3"},{id:62,name:"\u6cd5\u5c5e\u5357\u90e8\u9886\u5730"},{id:63,name:"\u68b5\u8482\u5188"},{id:64,name:"\u83f2\u5f8b\u5bbe"},{id:65,name:"\u6590\u6d4e"},{id:66,name:"\u82ac\u5170"},{id:67,name:"\u4f5b\u5f97\u89d2"},{id:68,name:"\u5f17\u5170\u514b\u7fa4\u5c9b"},{id:69,name:"\u5188\u6bd4\u4e9a"},{id:70,name:"\u521a\u679c"},{id:71,name:"\u521a\u679c\u6c11\u4e3b\u5171\u548c\u56fd"},{id:72,name:"\u54e5\u4f26\u6bd4\u4e9a"},{id:73,name:"\u54e5\u65af\u8fbe\u9ece\u52a0"},{id:74,name:"\u683c\u6069\u897f\u5c9b"},{id:75,name:"\u683c\u6797\u7eb3\u8fbe"},{id:76,name:"\u683c\u9675\u5170"},{id:77,name:"\u53e4\u5df4"},{id:78,name:"\u74dc\u5fb7\u7f57\u666e"},{id:79,name:"\u5173\u5c9b"},{id:80,name:"\u572d\u4e9a\u90a3"},{id:81,name:"\u54c8\u8428\u514b\u65af\u5766"},{id:82,name:"\u6d77\u5730"},{id:83,name:"\u97e9\u56fd"},{id:84,name:"\u8377\u5170"},{id:85,name:"\u8377\u5c5e\u5b89\u5730\u5217\u65af"},{id:86,name:"\u8d6b\u5fb7\u548c\u9ea6\u514b\u5510\u7eb3\u7fa4\u5c9b"},{id:87,name:"\u6d2a\u90fd\u62c9\u65af"},{id:88,name:"\u57fa\u91cc\u5df4\u65af"},{id:89,name:"\u5409\u5e03\u63d0"},{id:90,name:"\u5409\u5c14\u5409\u65af\u65af\u5766"},{id:91,name:"\u51e0\u5185\u4e9a"},{id:92,name:"\u51e0\u5185\u4e9a\u6bd4\u7ecd"},{id:93,name:"\u52a0\u62ff\u5927"},{id:94,name:"\u52a0\u7eb3"},{id:95,name:"\u52a0\u84ec"},{id:96,name:"\u67ec\u57d4\u5be8"},{id:97,name:"\u6377\u514b\u5171\u548c\u56fd"},{id:98,name:"\u6d25\u5df4\u5e03\u97e6"},{id:99,name:"\u5580\u9ea6\u9686"},{id:100,name:"\u5361\u5854\u5c14"},{id:101,name:"\u5f00\u66fc\u7fa4\u5c9b"},{id:102,name:"\u79d1\u79d1\u65af\u7fa4\u5c9b"},{id:103,name:"\u79d1\u6469\u7f57"},{id:104,name:"\u79d1\u7279\u8fea\u74e6"},{id:105,name:"\u79d1\u5a01\u7279"},{id:106,name:"\u514b\u7f57\u5730\u4e9a"},{id:107,name:"\u80af\u5c3c\u4e9a"},{id:108,name:"\u5e93\u514b\u7fa4\u5c9b"},{id:109,name:"\u62c9\u8131\u7ef4\u4e9a"},{id:110,name:"\u83b1\u7d22\u6258"},{id:111,name:"\u8001\u631d"},{id:112,name:"\u9ece\u5df4\u5ae9"},{id:113,name:"\u5229\u6bd4\u91cc\u4e9a"},{id:114,name:"\u5229\u6bd4\u4e9a"},{id:115,name:"\u7acb\u9676\u5b9b"},{id:116,name:"\u5217\u652f\u6566\u58eb\u767b"},{id:117,name:"\u7559\u5c3c\u65fa\u5c9b"},{id:118,name:"\u5362\u68ee\u5821"},{id:119,name:"\u5362\u65fa\u8fbe"},{id:120,name:"\u7f57\u9a6c\u5c3c\u4e9a"},{id:121,name:"\u9a6c\u8fbe\u52a0\u65af\u52a0"},{id:122,name:"\u9a6c\u5c14\u4ee3\u592b"},{id:123,name:"\u9a6c\u8033\u4ed6"},{id:124,name:"\u9a6c\u62c9\u7ef4"},{id:125,name:"\u9a6c\u6765\u897f\u4e9a"},{id:126,name:"\u9a6c\u91cc"},{id:127,name:"\u9a6c\u5176\u987f"},{id:128,name:"\u9a6c\u7ecd\u5c14\u7fa4\u5c9b"},{id:129,name:"\u9a6c\u63d0\u5c3c\u514b"},{id:130,name:"\u9a6c\u7ea6\u7279\u5c9b"},{id:131,name:"\u66fc\u5c9b"},{id:132,name:"\u6bdb\u91cc\u6c42\u65af"},{id:133,name:"\u6bdb\u91cc\u5854\u5c3c\u4e9a"},{id:134,name:"\u7f8e\u56fd"},{id:135,name:"\u7f8e\u5c5e\u8428\u6469\u4e9a"},{id:136,name:"\u7f8e\u5c5e\u5916\u5c9b"},{id:137,name:"\u8499\u53e4"},{id:138,name:"\u8499\u7279\u585e\u62c9\u7279"},{id:139,name:"\u5b5f\u52a0\u62c9"},{id:140,name:"\u5bc6\u514b\u7f57\u5c3c\u897f\u4e9a"},{id:141,name:"\u79d8\u9c81"},{id:142,name:"\u7f05\u7538"},{id:143,name:"\u6469\u5c14\u591a\u74e6"},{id:144,name:"\u6469\u6d1b\u54e5"},{id:145,name:"\u6469\u7eb3\u54e5"},{id:146,name:"\u83ab\u6851\u6bd4\u514b"},{id:147,name:"\u58a8\u897f\u54e5"},{id:148,name:"\u7eb3\u7c73\u6bd4\u4e9a"},{id:149,name:"\u5357\u975e"},{id:150,name:"\u5357\u6781\u6d32"},{id:151,name:"\u5357\u4e54\u6cbb\u4e9a\u548c\u5357\u6851\u5fb7\u5a01\u5947\u7fa4\u5c9b"},{id:152,name:"\u7459\u9c81"},{id:153,name:"\u5c3c\u6cca\u5c14"},{id:154,name:"\u5c3c\u52a0\u62c9\u74dc"},{id:155,name:"\u5c3c\u65e5\u5c14"},{id:156,name:"\u5c3c\u65e5\u5229\u4e9a"},{id:157,name:"\u7ebd\u57c3"},{id:158,name:"\u632a\u5a01"},{id:159,name:"\u8bfa\u798f\u514b"},{id:160,name:"\u5e15\u52b3\u7fa4\u5c9b"},{id:161,name:"\u76ae\u7279\u51ef\u6069"},{id:162,name:"\u8461\u8404\u7259"},{id:163,name:"\u4e54\u6cbb\u4e9a"},{id:164,name:"\u65e5\u672c"},{id:165,name:"\u745e\u5178"},{id:166,name:"\u745e\u58eb"},{id:167,name:"\u8428\u5c14\u74e6\u591a"},{id:168,name:"\u8428\u6469\u4e9a"},{id:169,name:"\u585e\u5c14\u7ef4\u4e9a,\u9ed1\u5c71"},{id:170,name:"\u585e\u62c9\u5229\u6602"},{id:171,name:"\u585e\u5185\u52a0\u5c14"},{id:172,name:"\u585e\u6d66\u8def\u65af"},{id:173,name:"\u585e\u820c\u5c14"},{id:174,name:"\u6c99\u7279\u963f\u62c9\u4f2f"},{id:175,name:"\u5723\u8bde\u5c9b"},{id:176,name:"\u5723\u591a\u7f8e\u548c\u666e\u6797\u897f\u6bd4"},{id:177,name:"\u5723\u8d6b\u52d2\u62ff"},{id:178,name:"\u5723\u57fa\u8328\u548c\u5c3c\u7ef4\u65af"},{id:179,name:"\u5723\u5362\u897f\u4e9a"},{id:180,name:"\u5723\u9a6c\u529b\u8bfa"},{id:181,name:"\u5723\u76ae\u57c3\u5c14\u548c\u7c73\u514b\u9686\u7fa4\u5c9b"},{id:182,name:"\u5723\u6587\u68ee\u7279\u548c\u683c\u6797\u7eb3\u4e01\u65af"},{id:183,name:"\u65af\u91cc\u5170\u5361"},{id:184,name:"\u65af\u6d1b\u4f10\u514b"},{id:185,name:"\u65af\u6d1b\u6587\u5c3c\u4e9a"},{id:186,name:"\u65af\u74e6\u5c14\u5df4\u548c\u626c\u9a6c\u5ef7"},{id:187,name:"\u65af\u5a01\u58eb\u5170"},{id:188,name:"\u82cf\u4e39"},{id:189,name:"\u82cf\u91cc\u5357"},{id:190,name:"\u6240\u7f57\u95e8\u7fa4\u5c9b"},{id:191,name:"\u7d22\u9a6c\u91cc"},{id:192,name:"\u5854\u5409\u514b\u65af\u5766"},{id:193,name:"\u6cf0\u56fd"},{id:194,name:"\u5766\u6851\u5c3c\u4e9a"},{id:195,name:"\u6c64\u52a0"},{id:196,name:"\u7279\u514b\u65af\u548c\u51ef\u514b\u7279\u65af\u7fa4\u5c9b"},{id:197,name:"\u7279\u91cc\u65af\u5766\u8fbe\u6606\u54c8"},{id:198,name:"\u7279\u7acb\u5c3c\u8fbe\u548c\u591a\u5df4\u54e5"},{id:199,name:"\u7a81\u5c3c\u65af"},{id:200,name:"\u56fe\u74e6\u5362"},{id:201,name:"\u571f\u8033\u5176"},{id:202,name:"\u571f\u5e93\u66fc\u65af\u5766"},{id:203,name:"\u6258\u514b\u52b3"},{id:204,name:"\u74e6\u5229\u65af\u548c\u798f\u56fe\u7eb3"},{id:205,name:"\u74e6\u52aa\u963f\u56fe"},{id:206,name:"\u5371\u5730\u9a6c\u62c9"},{id:207,name:"\u7ef4\u5c14\u4eac\u7fa4\u5c9b\uff0c\u7f8e\u5c5e"},{id:208,name:"\u7ef4\u5c14\u4eac\u7fa4\u5c9b\uff0c\u82f1\u5c5e"},{id:209,name:"\u59d4\u5185\u745e\u62c9"},{id:210,name:"\u6587\u83b1"},{id:211,name:"\u4e4c\u5e72\u8fbe"},{id:212,name:"\u4e4c\u514b\u5170"},{id:213,name:"\u4e4c\u62c9\u572d"},{id:214,name:"\u4e4c\u5179\u522b\u514b\u65af\u5766"},{id:215,name:"\u897f\u73ed\u7259"},{id:216,name:"\u5e0c\u814a"},{id:217,name:"\u65b0\u52a0\u5761"},{id:218,name:"\u65b0\u5580\u91cc\u591a\u5c3c\u4e9a"},{id:219,name:"\u65b0\u897f\u5170"},{id:220,name:"\u5308\u7259\u5229"},{id:221,name:"\u53d9\u5229\u4e9a"},{id:222,name:"\u7259\u4e70\u52a0"},{id:223,name:"\u4e9a\u7f8e\u5c3c\u4e9a"},{id:224,name:"\u4e5f\u95e8"},{id:225,name:"\u4f0a\u62c9\u514b"},{id:226,name:"\u4f0a\u6717"},{id:227,name:"\u4ee5\u8272\u5217"},{id:228,name:"\u610f\u5927\u5229"},{id:229,name:"\u5370\u5ea6"},{id:230,name:"\u5370\u5ea6\u5c3c\u897f\u4e9a"},{id:231,name:"\u82f1\u56fd"},{id:232,name:"\u82f1\u5c5e\u5370\u5ea6\u6d0b\u9886\u5730"},{id:233,name:"\u7ea6\u65e6"},{id:234,name:"\u8d8a\u5357"},{id:235,name:"\u8d5e\u6bd4\u4e9a"},{id:236,name:"\u6cfd\u897f\u5c9b"},{id:237,name:"\u4e4d\u5f97"},{id:238,name:"\u76f4\u5e03\u7f57\u9640"},{id:239,name:"\u667a\u5229"},{id:240,name:"\u4e2d\u975e\u5171\u548c\u56fd"}]},onLoad:function(a){var e=new Date,i=e.getFullYear()+"-"+e.getMonth()+"-"+e.getDate();this.setData({dateEnd:i})},onReady:function(){var e=a.getUserID();this.loadData(e)},onShow:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u8d44\u6599"});var e=a.getUserID();this.loadPhoto(e)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},changeGender:function(a){var e=a.detail.value,i=this.data.genderIndex!=a.detail.value,n=this.data.genderList;this.setData({genderIndex:e,mxGender:n[e].id}),i&&this.setData({isChanged:!0})},changeNat:function(a){var e=a.detail.value,i=this.data.natIndex!=a.detail.value,n=this.data.natList;this.setData({natIndex:e,mxNat:n[e].name}),i&&this.setData({isChanged:!0})},getNatIndex:function(a){for(var e=this.data.natList,i=0;i<e.length;i++)if(a==e[i].name)return i;return 0},changeBirthDay:function(a){var e=this.data.mxBirthDay!=a.detail.value;this.setData({mxBirthDay:a.detail.value}),e&&this.setData({isChanged:!0})},focusNicName:function(a){},changeNicName:function(a){var e=this.data.mxNicName!=a.detail.value;this.setData({mxNicName:a.detail.value}),e&&this.setData({isChanged:!0})},focusName:function(a){},changeName:function(a){var e=this.data.mxName!=a.detail.value;this.setData({mxName:a.detail.value}),e&&this.setData({isChanged:!0})},focusMobi:function(a){},changeMobi:function(a){var e=this.data.mxMobile!=a.detail.value;this.setData({mxMobile:a.detail.value}),e&&this.setData({isChanged:!0})},focusTeam:function(a){},changeTeam:function(a){var e=this.data.mxTeam!=a.detail.value;this.setData({mxTeam:a.detail.value}),e&&this.setData({isChanged:!0})},changeUpdateAll:function(a){var e=this.data.mxUpdateAll!=a.detail.value;this.setData({mxUpdateAll:a.detail.value}),e&&this.setData({isChanged:!0})},getLocalCity:function(a,e,i){var n="";return a&&a.length>0&&"\u5168\u90e8"!=a&&(n+=a,e&&e.length>0&&"\u5168\u90e8"!=e&&(n+=e,i&&i.length>0&&"\u5168\u90e8"!=i&&(n+=i))),n},changeRegion:function(a){var e=this.data.region!=a.detail.value,i=a.detail.value,n=i[0];i.length>1&&"\u5168\u90e8"!=i[1]&&(n+=i[1],i.length>2&&"\u5168\u90e8"!=i[2]&&(n+=i[2])),this.setData({region:a.detail.value,sRegion:n}),e&&this.setData({isChanged:!0})},tapECard:function(a){wx.navigateTo({url:"/pages/user/ecard"})},tapPhoto:function(a){wx.navigateTo({url:"/pages/user/userphoto"})},tapSave:function(a){this.updateUserInfo(!0)},updateUserInfo:function(e){if(e){var i="update-userinfo-all",n=a.getUID(),d=a.getUserID(),t=(new Date).getTime(),m=a.createSysKey(i,t,d),s=this.data.region,o=s[0],l=s[1],h=s[2],r=this.data.mxUpdateAll?1:0,c=this.data.mxName,u=this.data.mxNicName,g=this.data.mxGender,x=this.data.mxMobile,f=this.data.mxBirthDay,v=this.data.mxTeam,D=this.data.mxNat;console.log(this.data.mxUpdateAll),wx.showLoading({title:"\u6b63\u5728\u63d0\u4ea4"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:t,uid:n,userId:d,syskey:m,name:c,nicname:u,gender:g,mobile:x,birthday:f,team:v,nat:D,province:o,city:l,district:h,updateall:r},success:function(a){var e=a.data;console.log(e),wx.hideLoading();var i=e.msg||"\u4fee\u6539\u5931\u8d25";wx.showToast({icon:"none",title:i,duration:3e3}),1==e.flag&&this.setData({isChanged:!1})}.bind(this),fail:function(a){wx.hideLoading()}})}},loadData:function(e){var i="get-userinfo-by-id",n=(new Date).getTime(),d=a.createSysKey(i,n,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:n,userId:e,syskey:d},success:function(e){var i=e.data;if(console.log(i),wx.hideLoading(),1==i.flag&&i.dataItem){var n=i.dataItem;this.setData({dataItem:i.dataItem,mxPhoto:n.photo,mxName:n.name,mxNicName:n.nickName,mxMobile:n.mobile,mxTeam:n.team,mxNat:n.nat,mxUpdateAll:1==n.updateAll,mxGender:n.gender,mxRegion:[n.province,n.city,n.district],mxBirthDay:a.formatDateTime(n.birthday,"yyyy-MM-dd"),genderIndex:2==n.gender?1:0,natIndex:this.getNatIndex(n.nat),sRegion:this.getLocalCity(n.province,n.city,n.district)})}else this.setData({dataItem:null})}.bind(this),fail:function(a){wx.hideLoading()}})},getUserProfile:function(e){var i=this;wx.getUserProfile({desc:"\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599",success:function(e){var n=a.getUID(),d=a.getUserID(),t=e.userInfo;console.log(t),a.updateUserInfo(n,d,t,(function(a){1==a.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),i.initData())}))}})},bindGetUserInfo:function(e){var i=e.detail.userInfo;if(i){var n=a.getUID(),d=a.getUserID();console.log(e),this.setData({isAgree:1}),a.updateUserInfo(n,d,i,function(a){1==a.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),this.loadPhoto(d))}.bind(this))}},loadPhoto:function(e){var i="get-userinfo-by-id",n=(new Date).getTime(),d=a.createSysKey(i,n,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:n,userId:e,syskey:d},success:function(a){var e=a.data;if(console.log(e),wx.hideLoading(),1==e.flag&&e.dataItem){var i=e.dataItem;this.setData({mxPhoto:i.photo,mxNicName:i.nickName})}}.bind(this),fail:function(a){wx.hideLoading()}})}}); 
 			}); 	require("pages/user/userinfo.js");
 		__wxRoute = 'pages/message/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/message/index.js';	define("pages/message/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!1;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,statusID:-1,statusList:[{id:-1,name:"\u5168\u90e8"},{id:0,name:"\u672a\u8bfb"},{id:1,name:"\u5df2\u8bfb"}],pageIndex:1,pullDown:!0,dataList:[],isReload:!1},onLoad:function(t){},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u7cfb\u7edf\u901a\u77e5"}),this.setData({dataList:[],pageIndex:1});var a=t.getUserID(),e=t.getSSID(),s=this.data.statusID;this.loadData(e,a,s,1)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(!a&&this.data.pullDown){var e=t.getUserID(),s=t.getSSID(),n=this.data.statusID,i=this.data.pageIndex+1;this.loadData(s,e,n,i)}},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabStatus:function(a){var e=a.currentTarget.dataset.id;this.setData({statusID:e,pullDown:!0,dataList:[],pageIndex:1});var s=t.getUserID(),n=t.getSSID();this.loadData(n,s,e,1)},tapView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/message/view?id="+a})},tapRemove:function(a){var e=t.getSSID(),s=t.getUserID(),n=this;wx.showModal({title:"\u5220\u9664\u63d0\u793a",content:"\u8bf7\u786e\u5b9a\u662f\u5426\u8981\u5220\u9664\u6240\u6709\u5df2\u8bfb\u7684\u6d88\u606f\uff1f",success:function(t){t.confirm&&n.ajaxRemove(e,s,(function(t){console.log(t);var a=t.msg||"\u5220\u9664\u5931\u8d25";wx.showToast({title:a,duration:3e3}),1==t.flag&&(n.setData({dataList:[],pageIndex:1}),setTimeout((function(){n.onReady()}),2e3))}))}})},ajaxRemove:function(a,e,s){var n="wx-user-msg-del-all",i=(new Date).getTime(),o=t.createSysKey(n,i,e);wx.showLoading({title:"\u6b63\u5728\u5904\u7406\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:i,ssid:a,userId:e,syskey:o},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),s&&"function"==typeof s&&s(a)}.bind(this),fail:function(t){wx.hideLoading()}})},loadData:function(e,s,n,i){var o=(new Date).getTime(),d=t.createSysKey("get-msg-list",o,s);a=!0,wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"get-msg-list",timeStamp:o,ssid:e,userId:s,status:n,pn:i,syskey:d},success:function(t){var e=t.data,s=[];i>1&&(s=this.data.dataList),a=!1,console.log(e),wx.hideLoading(),1==e.flag?(s.push(e),this.setData({dataList:s,pullDown:!0,pageIndex:i})):this.setData({pullDown:!1,pageIndex:i})}.bind(this),fail:function(t){a=!1,wx.hideLoading()}})}}); 
 			}); 	require("pages/message/index.js");
 		__wxRoute = 'pages/message/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/message/view.js';	define("pages/message/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=this.data.id,e=t.getUserID();this.loadData(e,a)},onShow:function(){wx.setNavigationBarTitle({title:"\u7cfb\u7edf\u901a\u77e5"})},onHide:function(){var t=getCurrentPages();t[t.length-2].setData({isReload:!0})},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tapView:function(t){var a=t.currentTarget.dataset.id,e=t.currentTarget.dataset.type;2==e?wx.navigateTo({url:"/pages/web/index?type=msg&id="+a}):3==e&&wx.navigateTo({url:"/pages/results/view?id="+a})},tapRemove:function(a){var e=a.currentTarget.dataset.id;if(e>0){var i=t.getSSID(),n=t.getUserID();wx.showModal({title:"\u5220\u9664\u63d0\u793a",content:"\u8bf7\u786e\u5b9a\u662f\u5426\u8981\u5220\u9664\u5f53\u524d\u901a\u77e5\u6d88\u606f\uff1f",success:function(t){t.confirm&&this.ajaxRemove(i,n,e,(function(t){console.log(t);var a=t.msg||"\u5220\u9664\u5931\u8d25";wx.showToast({title:a,duration:3e3}),1==t.flag&&setTimeout((function(){wx.navigateBack({delta:1})}),2e3)}))}.bind(this)})}},ajaxRemove:function(a,e,i,n){var o="wx-user-msg-del",s=(new Date).getTime(),d=t.createSysKey(o,s,e,i);wx.showLoading({title:"\u6b63\u5728\u5904\u7406\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timeStamp:s,ssid:a,userId:e,id:i,syskey:d},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),n&&"function"==typeof n&&n(a)}.bind(this),fail:function(t){wx.hideLoading()}})},loadData:function(a,e){var i="get-msg-by-id",n=(new Date).getTime(),o=t.createSysKey(i,n,a,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:n,userId:a,id:e,syskey:o},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataItem:a.dataItem}):this.setData({dataItem:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/message/view.js");
 		__wxRoute = 'pages/web/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/web/index.js';	define("pages/web/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{webId:0,webTK:"",webURL:""},onLoad:function(n){var t=n.id||0,o=n.tk||"",e=n.type||"",a=this.data.webURL;"msg"==e&&(a="https://kart.xkarting.com/wx/"+e+"/index.aspx?id="+t+"&tk="+o),this.setData({webURL:a})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("pages/web/index.js");
 		__wxRoute = 'pages/user/station';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/station.js';	define("pages/user/station.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,dataList:null},onLoad:function(t){},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u8d5b\u4e8b"});var a=t.getUID();this.loadData(a)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tapMore:function(t){wx.navigateTo({url:"/pages/station/index"})},tapStat:function(a){var e=t.getUID(),n=a.currentTarget.dataset.id;this.changeStat(e,n)},tapCancel:function(a){var e=this,n=t.getUID(),i=a.currentTarget.dataset.id;wx.showModal({title:"\u63d0\u793a",content:"\u8bf7\u786e\u8ba4\u662f\u5426\u53d6\u6d88\u5173\u6ce8\u5f53\u524d\u8d5b\u4e8b?",success:function(t){t.confirm&&e.cancelStat(n,i)}})},changeStat:function(a,e){var n="change-station",i=(new Date).getTime(),o=t.createSysKey(n,i,a,e);wx.showLoading({title:"\u6b63\u5728\u5207\u6362\u8d5b\u4e8b",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,ssid:e,uid:a,timeStamp:i,syskey:o},success:function(a){var e=a.data,n=e.msg||"\u5207\u6362\u5931\u8d25";if(wx.hideLoading(),1==e.flag&&e.UserInfo){var i=e.StatInfo?e.StatInfo.id:e.UserInfo.SSID,o=e.StatInfo.name||"";t.globalData.userData=e.UserInfo,t.globalData.hasUserData=!0,t.globalData.SSID=i,t.globalData.statName=o,wx.switchTab({url:"/pages/index/index"})}else wx.showToast({icon:"none",title:n})}.bind(this),fail:function(t){wx.hideLoading()}})},cancelStat:function(a,e){var n="add-station-black",i=(new Date).getTime(),o=t.createSysKey(n,i,a,e);wx.showLoading({title:"\u6b63\u5728\u53d6\u6d88\u5173\u6ce8",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,sid:e,uid:a,timeStamp:i,syskey:o},success:function(t){var e=t.data.msg||"\u53d6\u6d88\u5931\u8d25";wx.hideLoading(),wx.showToast({icon:"none",title:e}),this.loadData(a)}.bind(this),fail:function(t){wx.hideLoading()}})},loadData:function(a){var e="get-race-list-user",n=(new Date).getTime(),i=t.createSysKey(e,n,a);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:e,timeStamp:n,uid:a,syskey:i},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a}):this.setData({dataList:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/user/station.js");
 		__wxRoute = 'pages/user/ecard';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/ecard.js';	define("pages/user/ecard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../utils/weapp-qrcode.js");var t=getApp(),e="https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,currentTab:1,tipsInfo:"",pathDriverQRCode:"",pathSafeQRCode:"",uid:t.getUID(),isAgree:0,canIUseGetUserProfile:!1,signStatus:0,safeStatus:0,avatarUrl:e,nicname:"",canIUseAvatar:!1},onLoad:function(e){var a=wx.getSystemInfoSync().SDKVersion,i=!1;this.compareVersion(a,"2.21.2")>=0&&(i=!0),wx.getUserProfile?this.setData({canIUseGetUserProfile:!0,canIUseAvatar:i,uid:t.getUID()}):this.setData({uid:t.getUID(),canIUseAvatar:i})},onReady:function(){},onShow:function(){this.initData()},initData:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u53c2\u8d5b\u5361"}),this.data.uid=t.getUID(),this.setData({uid:t.getUID()}),2==this.data.currentTab?this.createSafeQRCode():this.createDriverQRCode()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},onChangeName:function(t){var e=t.detail.value;e&&""!=e&&this.setData({nicname:e})},onChooseAvatar:function(e){var a=this;if(a.setData({avatarUrl:e.detail.avatarUrl}),e.detail.avatarUrl){var i="upload-user-photo",n=t.getUserID(),s=(new Date).getTime(),o=t.createSysKey(i,s,n);wx.showLoading({title:"\u6b63\u5728\u4e0a\u4f20..."}),wx.uploadFile({url:"https://kart.xkarting.com/ajax/wxupload.ashx",filePath:e.detail.avatarUrl,name:"file",formData:{flag:i,userid:n,timestamp:s,syskey:o},success:function(t){var e=JSON.parse(t.data);console.log(e);var i=e.msg||"\u4e0a\u4f20\u5931\u8d25";wx.hideLoading(),wx.showToast({icon:"none",title:i,duration:3e3}),1==e.flag&&a.setData({avatarUrl:e.photo})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"none",title:"\u4e0a\u4f20\u5931\u8d25",duration:3e3})}})}},saveUserInfo:function(a){var i=t.getUID(),n=t.getUserID(),s=this.data.avatarUrl||"",o=this.data.nicname||"",r=this;!s||s.length<4||s==e?wx.showToast({icon:"none",title:"\u8bf7\u4e0a\u4f20\u5934\u50cf",duration:3e3}):o&&""!=o&&"\u5fae\u4fe1\u7528\u6237"!=o?t.updateUserPhotoAndNicname(i,n,s,o,(function(t){1==t.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),r.initData())})):wx.showToast({icon:"none",title:"\u8bf7\u586b\u5199\u6635\u79f0",duration:3e3})},compareVersion:function(t,e){t=t.split("."),e=e.split(".");for(var a=Math.max(t.length,e.length);t.length<a;)t.push("0");for(;e.length<a;)e.push("0");for(var i=0;i<a;i++){var n=parseInt(t[i]),s=parseInt(e[i]);if(n>s)return 1;if(n<s)return-1}return 0},tapItem:function(t){var e=t.currentTarget.dataset.id;this.setData({currentTab:e}),2==e?this.createSafeQRCode():this.createDriverQRCode()},initUserInfo:function(){var t=this;wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?t.setData({isAgree:1}):t.setData({isAgree:2}),wx.hideLoading()},fail:function(e){t.setData({isAgree:2}),wx.hideLoading()}})},getUserProfile:function(e){var a=this;wx.getUserProfile({desc:"\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599",success:function(e){var i=t.getUID(),n=t.getUserID(),s=e.userInfo;console.log(s),t.updateUserInfo(i,n,s,(function(t){1==t.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),a.initData())}))}})},bindGetUserInfo:function(e){var a=e.detail.userInfo;if(a){var i=t.getUID(),n=t.getUserID(),s=this;t.updateUserInfo(i,n,a,(function(t){1==t.data.flag&&(wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3}),s.initData())}))}},createDriverQRCode:function(){var e=t.getUID(),a=t.getUserID(),i=(new Date).getTime(),n="create-member-qrcode",s=t.createSysKey(n,i,e),o=this;wx.showLoading({title:"\u6b63\u5728\u521b\u5efa"}),t.ajaxRequest({flag:n,timeStamp:i,uid:e,userId:a,is_test:1,sysKey:s},(function(t){wx.hideLoading();var e=t.msg||"\u521b\u5efa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5!";if(1==t.flag){var a=t.signStatus||0,i=t.safeStatus||0;o.setData({isAgree:1,pathDriverQRCode:t.path,signStatus:a,safeStatus:i})}else 2==t.flag?o.setData({isAgree:2,pathDriverQRCode:""}):(o.setData({isAgree:2,pathDriverQRCode:""}),wx.showToast({icon:"none",title:e,duration:3e3}))}),(function(t){wx.hideLoading()}))},createSafeQRCode:function(){var e=t.getUID(),a=t.getUserID(),i=(new Date).getTime(),n="create-member-qrcode-safe",s=t.createSysKey(n,i,e),o=this;wx.showLoading({title:"\u6b63\u5728\u521b\u5efa"}),t.ajaxRequest({flag:n,timeStamp:i,uid:e,userId:a,is_test:1,sysKey:s},(function(t){wx.hideLoading(),console.log(t);var e=t.msg||"\u521b\u5efa\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5!";if(1==t.flag){var a=t.signStatus||0,i=t.safeStatus||0;o.setData({pathSafeQRCode:t.path,signStatus:a,safeStatus:i})}else 2==t.flag?o.setData({pathSafeQRCode:"",isAgree:2}):(o.setData({pathSafeQRCode:""}),wx.showToast({icon:"none",title:e,duration:3e3}))}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/user/ecard.js");
 		__wxRoute = 'pages/order/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/order/view.js';	define("pages/order/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataList:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=t.getUserID(),e=this.data.id;this.loadData(a,e)},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u8ba2\u5355"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},loadData:function(a,e){wx.showLoading({title:"\u4e0b\u5728\u52a0\u8f7d..."});var i="get-orderinfo-by-id",n=(new Date).getTime(),o=t.createSysKey(i,n,a,e),s=this;t.ajaxRequest({flag:i,timestamp:n,userId:a,id:e,syskey:o},(function(t){wx.hideLoading(),1==t.flag?s.setData({dataList:t}):s.setData({dataList:null})}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/order/view.js");
 		__wxRoute = 'pages/order/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/order/index.js';	define("pages/order/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!1;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,SSID:t.getSSID(),statusID:-1,pageIndex:1,pullDown:!0,statusList:[{id:-1,name:"\u5168\u90e8"},{id:0,name:"\u5f85\u4ed8\u6b3e"},{id:1,name:"\u5df2\u6210\u4ea4"},{id:2,name:"\u5df2\u64a4\u9500"}],dataList:[]},onLoad:function(t){},onReady:function(){var a=t.getUserID(),e=t.getSSID(),s=this.data.statusID,i=this.data.pageIndex;this.loadData(e,a,s,i)},onShow:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u8ba2\u5355"});var a=t.getSSID();if(a!=this.data.SSID){this.setData({SSID:a});var e=t.getUserID(),s=this.data.statusID,i=this.data.pageIndex;this.loadData(a,e,s,i)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(!a&&this.data.pullDown){var e=t.getUserID(),s=t.getSSID(),i=this.data.statusID,n=this.data.pageIndex+1;this.loadData(s,e,i,n)}},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabStatus:function(a){var e=a.currentTarget.dataset.id;this.setData({statusID:e,pullDown:!0,dataList:[],pageIndex:1});var s=t.getUserID(),i=t.getSSID();this.loadData(i,s,e,1)},tabView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/order/view?id="+a})},loadData:function(e,s,i,n){var o="get-order-list",d=(new Date).getTime(),r=t.createSysKey(o,d,s);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),a=!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timeStamp:d,ssid:e,userId:s,status:i,pn:n,syskey:r},success:function(t){var e=t.data,s=[];n>1&&(s=this.data.dataList),a=!1,console.log(e),wx.hideLoading(),1==e.flag?(s.push(e),this.setData({dataList:s,pullDown:!0,pageIndex:n})):(this.setData({pullDown:!1,pageIndex:n}),wx.showToast({icon:"none",title:"\u6ca1\u6709\u66f4\u591a\u4e86",duration:3e3}))}.bind(this),fail:function(t){wx.hideLoading(),a=!1}})}}); 
 			}); 	require("pages/order/index.js");
 		__wxRoute = 'pages/station/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/station/index.js';	define("pages/station/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,currentMenu:0,pageIndex:1,cityID:0,cityList:[],typeID:0,typeList:[],dataList:null,mainMenu:[{text:"\u8d5b\u4e8b",iconPath:"/assets/png/icon-home.png",selectedIconPath:"/assets/png/icon-home-on.png"},{text:"\u6211\u7684",iconPath:"/assets/png/icon-user.png",selectedIconPath:"/assets/png/icon-user-on.png"}]},onLoad:function(t){},onReady:function(){var t=this.data.typeID,a=this.data.cityID,e=this.data.pageIndex;this.loadData(t,a,e)},onShow:function(){wx.setNavigationBarTitle({title:"MYRACING"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?id="+t.getSSID()}},tabChange:function(a){var e=a.detail.index;1==e?t.getSSID()<=0?wx.showToast({icon:"none",title:"\u60a8\u9700\u8981\u5148\u5173\u6ce8\u8d5b\u4e8b!!",duration:3e3}):wx.switchTab({url:"/pages/user/index"}):this.setData({currentMenu:e})},tapCity:function(t){var a=t.currentTarget.dataset.id,e=this.data.typeID;this.setData({cityID:a,pageIndex:1}),this.loadData(e,a,1)},tapType:function(t){var a=t.currentTarget.dataset.id,e=this.data.cityID;this.setData({typeID:a,pageIndex:1}),this.loadData(a,e,1)},tapView:function(t){var a=t.currentTarget.dataset.id;a&&a>0&&wx.navigateTo({url:"/pages/station/view?id="+a})},loadData:function(a,e,n){var i="get-race-station-list",s=(new Date).getTime(),o=t.getUID(),d=t.createSysKey(i,s,o);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:s,uid:o,tid:a,cid:e,pn:n,syskey:d},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataList:a,pageIndex:n}):this.setData({dataList:null,pageIndex:n})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/station/index.js");
 		__wxRoute = 'pages/station/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/station/view.js';	define("pages/station/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=0;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,showMarked:!0,showMarkedX:!1,currentMenu:0,SSID:0,mainMenu:[{text:"\u8d5b\u4e8b\u4ecb\u7ecd",iconPath:"/assets/png/icon-intro.png",selectedIconPath:"/assets/png/icon-intro-on.png"}],station:null,indicatorDots:!0,vertical:!1,autoplay:!1,interval:2e3,duration:500,currItemId:0,current:2,currentTab:"top",rtRaceTime:0,rtLeftTime:0,rtLocalTime:"",dlgStat:!1,typeID:2,teamID:0,dateYear:2019,dateYearMin:2019,dateYearMax:2019,dateMonthYear:2019,dateMonth:11,dateWeekYear:2019,dateWeek:42,dateDay:"2019-11-11",dateDayStart:"2019-01-01",dateDayEnd:"2025-12-31",pageIndex:1,statList:null,teamList:null,typeList:[{id:5,name:"\u65e5\u699c"},{id:1,name:"\u5468\u699c"},{id:2,name:"\u6708\u699c"},{id:3,name:"\u5e74\u699c"},{id:4,name:"\u603b\u699c"}],dataTops:null,dataRealTime:null,canIUseGetUserProfile:!1},onLoad:function(a){var e=1==a.show,i=!1;wx.getUserProfile&&(i=!0),this.setData({SSID:a.id,showMarkedX:e,canIUseGetUserProfile:i});var s=new Date,n=s.getFullYear(),o=new Date(n,0,1),r=(s.getTime()-o.getTime())/1e3,d=Math.ceil(r/86400),l=s.getMonth()+1,c=Math.ceil((d-7+o.getDay())/7)+1;this.setData({dateYear:n,dateYearMin:2019,dateYearMax:n,dateMonthYear:n,dateMonth:l,dateWeekYear:n,dateWeek:c,dateDay:t.formatDateTime(s,"yyyy-MM-dd"),dateDayStart:"2019-01-01",dateDayEnd:t.formatDateTime(s,"yyyy-MM-dd")})},onReady:function(){setInterval(function(){this.RefreshRealTime()}.bind(this),1e3),this.initData()},onShow:function(){var t=this.data.currentMenu;this.loadData(t)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?id="+t.getSSID()}},tabChange:function(t){var a=t.detail.index;this.setData({currentMenu:a}),this.loadData(a)},changeIndicatorDots:function(){this.setData({indicatorDots:!this.data.indicatorDots})},changeAutoplay:function(){this.setData({autoplay:!this.data.autoplay})},intervalChange:function(t){this.setData({interval:t.detail.value})},durationChange:function(t){this.setData({duration:t.detail.value})},initData:function(){var a=t.getUID(),e=this.data.SSID,i="get-result-init",s=(new Date).getTime(),n=t.createSysKey(i,s,a,e);wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:s,sysKey:n,uid:a,ssid:e},success:function(t){var a=t.data;console.log(a),1==a.flag&&this.setData({statList:a.stat,teamList:a.team})}.bind(this),fail:function(t){}})},tapItem:function(t){var a=t.currentTarget.dataset.id;a==this.data.currItemId&&(a=0),this.setData({currItemId:a})},getUserProfile:function(a){var e=this;wx.getUserProfile({desc:"\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599",success:function(i){var s=t.getUID(),n=(t.getUserID(),i.userInfo),o=a.currentTarget.dataset.id,r=(s=t.getUID(),t.getUserID());t.globalData.userInfo=n,s>0?e.createUser(s,r,o,n):e.wxLogin(o,n)}})},getUserInfo:function(a){if(a.detail.userInfo){var e=a.currentTarget.dataset.id,i=t.getUID(),s=t.getUserID();t.globalData.userInfo=a.detail.userInfo,i>0?this.createUser(i,s,e,a.detail.userInfo):this.wxLogin(e,a.detail.userInfo)}},createUser:function(a,e,i,s){var n="create-station-user",o=(new Date).getTime(),r=t.createSysKey(n,o,a,i),d=s.nickName||"",l=s.gender||1,c=s.avatarUrl||"",h=s.country||"",u=s.province||"",g=s.city||"",f=this;wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,timeStamp:o,uid:a,userId:e,ssid:i,nicname:d,photo:c,gender:l,country:h,province:u,city:g,syskey:r},success:function(t){var e=t.data;if(console.log(e),wx.hideLoading(),1==e.flag)wx.showModal({title:"\u63d0\u793a",content:"\u8d5b\u4e8b\u5df2\u5173\u6ce8,\u662f\u5426\u7acb\u5373\u5207\u6362\u5230\u6b64\u8d5b\u4e8b?",success:function(t){t.confirm?f.changeStat(a,i):t.cancel&&f.setData({showMarkedX:!1,showMarked:!1})},fail:function(t){f.setData({showMarkedX:!1,showMarked:!1})}});else{var s=e.msg||"\u5904\u7406\u5931\u8d25";wx.showToast({icon:"none",title:s,duration:3e3})}}.bind(this),fail:function(t){wx.hideLoading()}})},wxLogin:function(a,e){wx.login({success:function(i){if(wx.showLoading({title:"\u6b63\u5728\u767b\u5f55",mask:!0}),i.code){var s=e.nickName||"",n=e.gender||1,o=e.avatarUrl||"",r=e.country||"",d=e.province||"",l=e.city||"";wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:"wx-login",ssid:a,wxcode:i.code,nicname:s,photo:o,gender:n,country:r,province:d,city:l},success:function(e){var i=e.data;if(console.log(i),wx.hideLoading(),1==i.flag){var s=i.UserInfo.SSID||a;t.globalData.userData=i.UserInfo,t.globalData.hasUserData=!0,t.globalData.SSID=s,wx.getSetting({success:function(t){console.log(t),t.authSetting["scope.userInfo"]&&wx.getUserInfo({lang:"zh_CN",success:function(t){console.log(t)},fail:function(t){console.log(t)}})}}),wx.showToast({title:"\u767b\u5f55\u6210\u529f",duration:3e3,success:function(){wx.switchTab({url:"/pages/index/index"})}})}else{var n=i.msg||"\u767b\u5f55\u5931\u8d25";wx.showToast({icon:"none",title:n,duration:3e3})}}.bind(this),fail:function(t){wx.hideLoading()}})}else console.log("\u767b\u5f55\u5931\u8d25\uff01"+i.errMsg)}})},changeStat:function(a,e){var i="change-station",s=(new Date).getTime(),n=t.createSysKey(i,s,a,e);wx.showLoading({title:"\u6b63\u5728\u5207\u6362\u8d5b\u4e8b",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,ssid:e,uid:a,timeStamp:s,syskey:n},success:function(a){var e=a.data,i=e.msg||"\u5207\u6362\u5931\u8d25";if(wx.hideLoading(),1==e.flag&&e.UserInfo){var s=e.StatInfo?e.StatInfo.id:e.UserInfo.SSID,n=e.StatInfo.name||"";t.globalData.userData=e.UserInfo,t.globalData.hasUserData=!0,t.globalData.SSID=s,t.globalData.statName=n,wx.switchTab({url:"/pages/index/index"})}else wx.showToast({icon:"none",title:i})}.bind(this),fail:function(t){wx.hideLoading()}})},loadData:function(a){var e="",i=this.data.SSID,s=this.data.teamID,n=this.data.typeID,o=this.data.currItemId,r=t.getUID();switch(a.toString()){case"0":e="\u8d5b\u4e8b\u4ecb\u7ecd",this.loadStationInfo(r,i);break;case"1":e="\u6210\u7ee9\u6392\u884c",this.loadResultTop(i,n,s);break;case"2":e="\u5b9e\u65f6\u6210\u7ee9",this.loadResultRealTime(i,o,!1)}""!=e&&wx.setNavigationBarTitle({title:e})},loadStationInfo:function(a,e){var i="get-station-by-id",s=(new Date).getTime(),n=t.createSysKey(i,s,a,e);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:i,timeStamp:s,uid:a,id:e,syskey:n},success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({station:a}):this.setData({station:null})}.bind(this),fail:function(t){wx.hideLoading()}})},getWeeks:function(t){var a=new Date(t,0,1).getDay();return Math.ceil((358+a)/7)+1},RefreshRealTime:function(){var t=this.data.rtRaceTime+1,e=this.data.rtLeftTime-1;if(2==this.data.currentMenu&&(this.setData({rtRaceTime:t,rtLeftTime:e,rtLocalTime:this.getLocalTime()}),++a%5==0)){var i=this.data.SSID,s=this.data.itemId;this.loadResultRealTime(i,s,!1)}},getLocalTime:function(){var t=new Date,a=t.getHours(),e=t.getMinutes(),i=t.getSeconds();return a+":"+(e<10?"0":"")+e+":"+(i<10?"0":"")+i},tapYearPrev:function(){var t=this.data.dateYearMin,a=this.data.dateYear-1;a>=t&&(this.setData({dateYear:a}),this.loadResult("top"))},tapYearNext:function(){var t=this.data.dateYearMax,a=this.data.dateYear+1;a<=t&&(this.setData({dateYear:a}),this.loadResult("top"))},tapMonthPrev:function(){var t=this.data.dateMonthYear,a=this.data.dateMonth-1;a<=0&&(a=12,t--),this.setData({dateMonthYear:t,dateMonth:a}),this.loadResult("top")},tapMonthNext:function(){var t=this.data.dateMonthYear,a=this.data.dateMonth+1;a>12&&(a=1,t++),this.setData({dateMonthYear:t,dateMonth:a}),this.loadResult("top")},tapWeekPrev:function(){var t=this.data.dateWeekYear,a=this.data.dateWeek-1;a<=0&&(t--,a=this.getWeeks(t)),this.setData({dateWeekYear:t,dateWeek:a}),this.loadResult("top")},tapWeekNext:function(){var t=this.data.dateWeekYear,a=this.data.dateWeek+1;a>this.getWeeks(t)&&(t++,a=1),this.setData({dateWeekYear:t,dateWeek:a}),this.loadResult("top")},tapDayPrev:function(){var a=new Date(this.data.dateDay).getTime()-864e5,e=new Date(a);this.setData({dateDay:t.formatDateTime(e,"yyyy-MM-dd")}),this.loadResult("top")},tapDayNext:function(){var a=new Date(this.data.dateDay).getTime()+864e5,e=new Date(a);this.setData({dateDay:t.formatDateTime(e,"yyyy-MM-dd")}),this.loadResult("top")},tabType:function(t){var a=t.currentTarget.dataset.id;this.setData({typeID:a}),this.loadResult("top")},tabDate:function(t){var a=t.currentTarget.dataset.id;this.setData({dateID:a}),this.loadResult("top")},tabTeam:function(t){var a=t.currentTarget.dataset.id;this.setData({teamID:a}),this.loadResult("top")},toggleTab:function(t){var a=t.currentTarget.dataset.index;this.loadResult(a)},loadResult:function(a){var e=this.data.SSID,i=t.getUID(),s=this.data.itemId;this.data.pageIndex;switch(a){case"info":this.setData({currentMenu:0}),this.loadStationInfo(i,e);break;case"top":this.setData({currentMenu:1});var n=this.data.teamID,o=this.data.typeID;this.loadResultTop(e,o,n);break;case"realtime":this.setData({currentMenu:2}),this.loadResultRealTime(e,s,!1)}},loadResultTop:function(a,e,i){wx.showLoading({title:"\u52a0\u8f7d\u4e2d"});var s="get-result-top",n={},o=(new Date).getTime(),r=t.getUID();1==e?(s="get-result-top-week",n.year=this.data.dateWeekYear,n.weeks=this.data.dateWeek):2==e?(s="get-result-top-month",n.year=this.data.dateMonthYear,n.month=this.data.dateMonth):3==e?(s="get-result-top-year",n.year=this.data.dateYear):5==e&&(s="get-result-top-date",n.date=this.data.dateDay);var d=t.createSysKey(s,o,r);n.uid=r,n.ssid=a,n.flag=s,n.team=i,n.timeStamp=o,n.sysKey=d,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:n,success:function(t){var a=t.data;console.log(a),wx.hideLoading(),1==a.flag?this.setData({dataTops:a}):this.setData({dataTops:null})}.bind(this),fail:function(t){wx.hideLoading()}})},loadResultRealTime:function(a,e,i){var s="get-result-realtime",n=(new Date).getTime(),o=t.getUID(),r=t.createSysKey(s,n,o);i&&wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:s,uid:o,ssid:a,itemId:e,timeStamp:n,syskey:r},success:function(t){var a=t.data;if(console.log(a),i&&wx.hideLoading(),1==a.flag){var e=a.raceItem.raceTime,s=a.raceItem.leftTime;this.setData({rtRaceTime:e,rtLeftTime:s,dataRealTime:a})}else this.setData({dataRealTime:null,rtRaceTime:0,rtLeftTime:0})}.bind(this),fail:function(t){i&&wx.hideLoading()}})}}); 
 			}); 	require("pages/station/view.js");
 		__wxRoute = 'pages/ticket/request';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/ticket/request.js';	define("pages/ticket/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{currCarID:0,currRoundID:0,currRoundName:"",roundIndex:0,requestBtnEnable:0,requestSuccess:0,dataItem:null,roundList:null,carList:null,mxName:"",mxNicName:"",id:0,isLoading:0},onLoad:function(a){var e=a.id||0,i=t.getUserName(),n=t.getNickName();console.log(t.globalData.userData),this.setData({id:e,mxName:i,mxNicName:n})},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u6bd4\u8d5b\u9884\u7ea6"});var a=t.getSSID(),e=t.getUserID(),i=this.data.id;this.loadTicketInfo(a,e,i)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},focusName:function(t){},changeName:function(t){this.setData({mxName:t.detail.value}),this.updateBtnEnable()},focusNicName:function(t){},changeNicName:function(t){this.setData({mxNicName:t.detail.value}),this.updateBtnEnable()},changeRound:function(a){var e=a.detail.value,i=this.data.roundList[e].id,n=this.data.roundList[e].name;if(this.setData({roundIndex:e,currRoundID:i,currRoundName:n,currCarID:0,carList:null}),i>0){var r=this.data.id,s=t.getUserID(),u=t.getSSID();this.loadCarsList(u,s,r,i)}},tapRound:function(a){var e=a.currentTarget.dataset.id;if(this.setData({currRoundID:e,currCarID:0,carList:null}),this.updateBtnEnable(),e>0){var i=this.data.id,n=t.getUserID(),r=t.getSSID();this.loadCarsList(r,n,i,e)}},tapCarItem:function(t){var a=t.currentTarget.dataset.id;1==t.currentTarget.dataset.status&&this.setData({currCarID:a})},tapRequest:function(a){var e=t.getSSID(),i=t.getUserID(),n=this.data.id,r=this.data.currRoundID,s=this.data.currCarID;if(n>0&&r>0){var u=this.data.mxName,d=this.data.mxNicName;u&&""!=u||(u=t.getUserName()),d&&""!=d||(d=t.getNickName()),this.createTicketRequest(e,i,n,r,s,u,d)}},updateBtnEnable:function(){var t=this.data.requestBtnEnable,a=this.data.currRoundID,e=this.data.mxName,i=this.data.mxNicName;return t=a>0&&null!=e&&e.length>0&&null!=i&&i.length>0,this.setData({requestBtnEnable:t}),t},loadTicketInfo:function(a,e,i){var n="get-ticket-request-info",r=(new Date).getTime(),s=t.createSysKey(n,r,e,i),u=this;wx.showLoading({title:"\u6b63\u5728\u52a0\u8f7d\u4e2d",mask:!0}),t.ajaxRequest({flag:n,timeStamp:r,ssid:a,userId:e,id:i,sysKey:s},(function(t){if(wx.hideLoading(),1==t.flag){var a=t.dataItem||{},e=t.roundList?t.roundList:null;e&&e.length,u.setData({dataItem:a,roundList:e,roundIndex:0,currRoundID:0,currRoundName:"",currCarID:0})}else u.setData({dataItem:null,roundList:null,roundIndex:0,currRoundID:0,currRoundName:"",currCarID:0})}),(function(t){wx.hideLoading()}))},loadRoundList:function(a,e){var i="get-ticket-request-round",n=(new Date).getTime(),r=t.createSysKey(i,n,e),s=this;wx.showLoading({title:"\u6b63\u5728\u52a0\u8f7d\u4e2d",mask:!0}),t.ajaxRequest({flag:i,timeStamp:n,ssid:a,userId:e,sysKey:r},(function(t){if(wx.hideLoading(),1==t.flag){var a=t.dataItems?t.dataItems:null;a&&a.length,s.setData({roundList:t.items,roundIndex:0,currRoundID:0,currRoundName:"",currCarID:0})}else s.setData({roundList:null,roundIndex:0,currRoundID:0,currRoundName:"",currCarID:0})}),(function(t){wx.hideLoading()}))},loadCarsList:function(a,e,i,n){var r="get-ticket-request-cars",s=(new Date).getTime(),u=t.createSysKey(r,s,e,i,n),d=this;wx.showLoading({title:"\u6b63\u5728\u52a0\u8f7d\u4e2d",mask:!0}),d.setData({isLoading:0}),t.ajaxRequest({flag:r,timeStamp:s,ssid:a,userId:e,id:i,rid:n,sysKey:u},(function(t){wx.hideLoading(),1==t.flag?d.setData({carList:t.items,currCarID:0,isLoading:1}):d.setData({carList:null,currCarID:0,isLoading:2})}),(function(t){wx.hideLoading(),d.setData({carList:null,currCarID:0,isLoading:2})}))},createTicketRequest:function(a,e,i,n,r,s,u){var d="create-ticket-request",o=(new Date).getTime(),c=t.createSysKey(d,o,e,i),l=this;wx.showLoading({title:"\u6b63\u5728\u5904\u7406\u4e2d",mask:!0}),t.ajaxRequest({flag:d,timeStamp:o,ssid:a,userId:e,id:i,rid:n,car:r,name:s,nicname:u,sysKey:c},(function(t){wx.hideLoading();var a=t.msg||"\u5904\u7406\u5931\u8d25";1==t.flag?l.setData({requestSuccess:1}):wx.showToast({icon:"error",title:a})}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/ticket/request.js");
 		__wxRoute = 'pages/user/userphoto';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/userphoto.js';	define("pages/user/userphoto.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{mxPhoto:"",isAgree:!1,canIUseGetUserProfile:!1,canIUseAvatar:!1,avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"},onLoad:function(t){var a=wx.getSystemInfoSync().SDKVersion,e=!1;this.compareVersion(a,"2.21.2")>=0&&(e=!0),wx.getUserProfile?this.setData({canIUseAvatar:e,canIUseGetUserProfile:!0}):this.setData({canIUseAvatar:e})},onReady:function(){this.initUserInfo();var a=t.getUserID();this.loadData(a)},onShow:function(){wx.setNavigationBarTitle({title:"\u8bbe\u7f6e\u5934\u50cf"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onChooseAvatar:function(a){var e=this;if(e.setData({mxPhoto:a.detail.avatarUrl}),a.detail.avatarUrl){var o="upload-user-photo",n=t.getUserID(),i=(new Date).getTime(),s=t.createSysKey(o,i,n);wx.showLoading({title:"\u6b63\u5728\u4e0a\u4f20..."}),wx.uploadFile({url:"https://kart.xkarting.com/ajax/wxupload.ashx",filePath:a.detail.avatarUrl,name:"file",formData:{flag:o,userid:n,timestamp:i,syskey:s},success:function(t){var a=JSON.parse(t.data);console.log(a);var o=a.msg||"\u4e0a\u4f20\u5931\u8d25";wx.hideLoading(),wx.showToast({icon:"none",title:o,duration:3e3}),1==a.flag&&e.setData({mxPhoto:a.photo})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"none",title:"\u4e0a\u4f20\u5931\u8d25",duration:3e3})}})}},getUserProfile:function(a){var e=this;wx.getUserProfile({desc:"\u7528\u4e8e\u5b8c\u5584\u4f1a\u5458\u8d44\u6599",success:function(a){var o=t.getUID(),n=t.getUserID(),i=a.userInfo;e.setData({mxPhoto:i.avatarUrl,isAgree:!0}),console.log(i),t.updateUserInfo(o,n,i,(function(t){1==t.data.flag&&wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3})}))}})},tabUpload:function(a){var e=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var o=a.tempFilePaths,n="upload-user-photo",i=t.getUserID(),s=(new Date).getTime(),r=t.createSysKey(n,s,i);wx.showLoading({title:"\u6b63\u5728\u4e0a\u4f20..."}),wx.uploadFile({url:"https://kart.xkarting.com/ajax/wxupload.ashx",filePath:o[0],name:"file",formData:{flag:n,userid:i,timestamp:s,syskey:r},success:function(t){var a=JSON.parse(t.data);console.log(a);var o=a.msg||"\u4e0a\u4f20\u5931\u8d25";wx.hideLoading(),wx.showToast({icon:"none",title:o,duration:3e3}),1==a.flag&&e.setData({mxPhoto:a.photo})},fail:function(t){wx.hideLoading(),wx.showToast({icon:"none",title:"\u4e0a\u4f20\u5931\u8d25",duration:3e3})}})}})},bindGetUserInfo:function(a){var e=a.detail.userInfo;if(e){var o=t.getUID(),n=t.getUserID();this.setData({mxPhoto:e.avatarUrl,isAgree:!0}),console.log(e),t.updateUserInfo(o,n,e,(function(t){1==t.data.flag&&wx.showToast({icon:"none",title:"\u5934\u50cf\u5df2\u66f4\u65b0",duration:3e3})}))}},initUserInfo:function(){var t=this;wx.getSetting({success:function(a){a.authSetting["scope.userInfo"],t.setData({isAgree:!1})}})},loadData:function(a){var e="get-userinfo-by-id",o=(new Date).getTime(),n=t.createSysKey(e,o,a);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:e,timeStamp:o,userid:a,syskey:n},success:function(t){var a=t.data;if(console.log(a),wx.hideLoading(),1==a.flag&&a.dataItem){var e=a.dataItem;this.setData({mxPhoto:e.photo})}else this.setData({mxPhoto:null})}.bind(this),fail:function(t){wx.hideLoading()}})},compareVersion:function(t,a){t=t.split("."),a=a.split(".");for(var e=Math.max(t.length,a.length);t.length<e;)t.push("0");for(;a.length<e;)a.push("0");for(var o=0;o<e;o++){var n=parseInt(t[o]),i=parseInt(a[o]);if(n>i)return 1;if(n<i)return-1}return 0}}); 
 			}); 	require("pages/user/userphoto.js");
 		__wxRoute = 'pages/index/go';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/go.js';	define("pages/index/go.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=getApp();Page({data:{ssid:0,cmd:"home",tryCount:0},onLoad:function(n){var a=n.id?n.id:0,e=n.cmd||"home";this.data.ssid=a,this.data.cmd=e,this.setData({ssid:a,cmd:e})},onReady:function(){},onShow:function(){var a=this.data.ssid;a||(a=n.getSSID()),this.doLogin(a)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},tapHome:function(){wx.switchTab({url:"/pages/index/index"})},doLogin:function(a){var e=this.data.cmd||"home",t=this;n.wxLogin(a,!0,(function(n){if(console.log(e,n),1==n.data.flag)switch(e){case"calendar":wx.switchTab({url:"/pages/calendar/index"});break;case"result":wx.switchTab({url:"/pages/results/index"});break;case"docs":wx.switchTab({url:"/pages/docs/index"});break;case"user":wx.switchTab({url:"/pages/user/index"});break;default:wx.switchTab({url:"/pages/index/index"})}else wx.switchTab({url:"/pages/index/index"})}),(function(n){t.data.tryCount++<5?t.doLogin(a):wx.showModal({title:"\u63d0\u793a",confirmText:"\u5c1d\u8bd5\u767b\u5f55",cancelText:"\u8fd4\u56de",content:"\u767b\u5f55\u5931\u8d25\uff0c",success:function(n){n.confirm?t.doLogin(a):n.cancel&&wx.navigateTo({url:"/pages/station/index"})}})}))}}); 
 			}); 	require("pages/index/go.js");
 		__wxRoute = 'pages/index/map';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/map.js';	define("pages/index/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{station:{},markets:[]},onLoad:function(a){var n=t.getSSID();this.loadStationInfo(n)},onReady:function(){},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u5730\u56fe"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},tabNavMap:function(t){var a=parseFloat(this.data.station.lat),n=parseFloat(this.data.station.lng),o=this.data.station.name;wx.openLocation({latitude:a,longitude:n,scale:16,name:o})},loadStationInfo:function(a){var n="get-station-by-id",o=(new Date).getTime(),i=t.getUID(),e=t.createSysKey(n,o,i,a);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:n,uid:i,id:a,timestamp:o,syskey:e},success:function(t){console.log(t.data),wx.hideLoading(),1==t.data.flag?this.setData({station:t.data,markets:[{iconPath:"/assets/png/icon-map-marker.png",id:1,latitude:t.data.lat,longitude:t.data.lng,width:40,height:40}]}):this.setData({station:null})}.bind(this),fail:function(t){wx.hideLoading()}})}}); 
 			}); 	require("pages/index/map.js");
 		__wxRoute = 'pages/point/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/point/index.js';	define("pages/point/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=!1;Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,SSID:t.getSSID(),statusID:-1,pageIndex:1,pullDown:!0,dataList:[]},onLoad:function(t){},onReady:function(){var a=t.getUserID(),e=t.getSSID(),n=this.data.statusID,i=this.data.pageIndex;this.loadData(e,a,n,i)},onShow:function(){wx.setNavigationBarTitle({title:"\u6211\u7684\u79ef\u5206"});var a=t.getSSID();if(a!=this.data.SSID){this.setData({SSID:a});var e=t.getUserID(),n=this.data.pageIndex;this.loadData(a,e,0,n)}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){if(!a&&this.data.pullDown){var e=t.getUserID(),n=t.getSSID(),i=this.data.pageIndex+1;this.loadData(n,e,0,i)}},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},tabView:function(t){var a=t.currentTarget.dataset.id;wx.navigateTo({url:"/pages/point/view?id="+a})},loadData:function(e,n,i,s){var o="get-member-point-logs-list",d=(new Date).getTime(),g=t.createSysKey(o,d,n);wx.showLoading({title:"\u52a0\u8f7d\u4e2d",mask:!0}),a=!0,wx.request({url:"https://kart.xkarting.com/ajax/wxapi.ashx",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{flag:o,timeStamp:d,ssid:e,userId:n,status:i,pn:s,syskey:g},success:function(t){var e=t.data,n=[];s>1&&(n=this.data.dataList),a=!1,console.log(e),wx.hideLoading(),1==e.flag?(n.push(e),this.setData({dataList:n,pullDown:!0,pageIndex:s})):(this.setData({pullDown:!1,pageIndex:s}),wx.showToast({icon:"none",title:"\u6ca1\u6709\u66f4\u591a\u4e86",duration:3e3}))}.bind(this),fail:function(t){wx.hideLoading(),a=!1}})}}); 
 			}); 	require("pages/point/index.js");
 		__wxRoute = 'pages/point/view';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/point/view.js';	define("pages/point/view.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Page({data:{basePath:t.globalData.basePath,statName:t.globalData.statName,id:0,dataItem:null},onLoad:function(t){var a=t.id||0;this.setData({id:a})},onReady:function(){var a=t.getUserID(),e=this.data.id;this.loadData(a,e)},onShow:function(){wx.setNavigationBarTitle({title:"\u67e5\u770b\u79ef\u5206\u8be6\u60c5"})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:t.getStatName(),path:"pages/index/go?cmd=user&id="+t.getSSID()}},loadData:function(a,e){wx.showLoading({title:"\u4e0b\u5728\u52a0\u8f7d..."});var n="get-member-point-logs-by-id",i=(new Date).getTime(),o=t.createSysKey(n,i,a,e),s=this;t.ajaxRequest({flag:n,timestamp:i,userId:a,id:e,syskey:o},(function(t){wx.hideLoading(),1==t.flag?s.setData({dataItem:t.dataItem}):s.setData({dataItem:null})}),(function(t){wx.hideLoading()}))}}); 
 			}); 	require("pages/point/view.js");
 	