// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.uuid');
goog.require('cljs.core');
fressian_cljs.uuid.rng = (function rng(){
var r = cljs.core.atom.call(null,(0));
var iter__4392__auto__ = ((function (r){
return (function iter__11795(s__11796){
return (new cljs.core.LazySeq(null,((function (r){
return (function (){
var s__11796__$1 = s__11796;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__11796__$1);
if(temp__4388__auto__){
var s__11796__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11796__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__11796__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__11798 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__11797 = (0);
while(true){
if((i__11797 < size__4391__auto__)){
var i = cljs.core._nth.call(null,c__4390__auto__,i__11797);
cljs.core.chunk_append.call(null,b__11798,(function (){
if(cljs.core._EQ_.call(null,(i & (3)),(0))){
cljs.core.reset_BANG_.call(null,r,(cljs.core.rand.call(null) * (68719476736)));
} else {
}

return ((cljs.core.deref.call(null,r) >> ((i & (3)) << (3))) & (255));
})()
);

var G__11799 = (i__11797 + (1));
i__11797 = G__11799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11798),iter__11795.call(null,cljs.core.chunk_rest.call(null,s__11796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11798),null);
}
} else {
var i = cljs.core.first.call(null,s__11796__$2);
return cljs.core.cons.call(null,(function (){
if(cljs.core._EQ_.call(null,(i & (3)),(0))){
cljs.core.reset_BANG_.call(null,r,(cljs.core.rand.call(null) * (68719476736)));
} else {
}

return ((cljs.core.deref.call(null,r) >> ((i & (3)) << (3))) & (255));
})()
,iter__11795.call(null,cljs.core.rest.call(null,s__11796__$2)));
}
} else {
return null;
}
break;
}
});})(r))
,null,null));
});})(r))
;
return iter__4392__auto__.call(null,cljs.core.range.call(null,(0),(16)));
});
fressian_cljs.uuid.unparse = (function unparse(buf){
var offset = cljs.core.atom.call(null,(0));
var iter__4392__auto__ = ((function (offset){
return (function iter__11806(s__11807){
return (new cljs.core.LazySeq(null,((function (offset){
return (function (){
var s__11807__$1 = s__11807;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__11807__$1);
if(temp__4388__auto__){
var s__11807__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11807__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__11807__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__11809 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__11808 = (0);
while(true){
if((i__11808 < size__4391__auto__)){
var n = cljs.core._nth.call(null,c__4390__auto__,i__11808);
cljs.core.chunk_append.call(null,b__11809,(function (){var token = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (i__11808,n,c__4390__auto__,size__4391__auto__,b__11809,s__11807__$2,temp__4388__auto__,offset){
return (function (p1__11800_SHARP_){
return (((new Uint8Array(cljs.core.int_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11800_SHARP_], null))))[(0)]) + (256)).toString((16)).substr((1));
});})(i__11808,n,c__4390__auto__,size__4391__auto__,b__11809,s__11807__$2,temp__4388__auto__,offset))
,cljs.core.take.call(null,n,cljs.core.drop.call(null,cljs.core.deref.call(null,offset),buf))));
cljs.core.swap_BANG_.call(null,offset,((function (i__11808,token,n,c__4390__auto__,size__4391__auto__,b__11809,s__11807__$2,temp__4388__auto__,offset){
return (function (p1__11801_SHARP_){
return (n + p1__11801_SHARP_);
});})(i__11808,token,n,c__4390__auto__,size__4391__auto__,b__11809,s__11807__$2,temp__4388__auto__,offset))
);

return token;
})());

var G__11810 = (i__11808 + (1));
i__11808 = G__11810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11809),iter__11806.call(null,cljs.core.chunk_rest.call(null,s__11807__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11809),null);
}
} else {
var n = cljs.core.first.call(null,s__11807__$2);
return cljs.core.cons.call(null,(function (){var token = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (n,s__11807__$2,temp__4388__auto__,offset){
return (function (p1__11800_SHARP_){
return (((new Uint8Array(cljs.core.int_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11800_SHARP_], null))))[(0)]) + (256)).toString((16)).substr((1));
});})(n,s__11807__$2,temp__4388__auto__,offset))
,cljs.core.take.call(null,n,cljs.core.drop.call(null,cljs.core.deref.call(null,offset),buf))));
cljs.core.swap_BANG_.call(null,offset,((function (token,n,s__11807__$2,temp__4388__auto__,offset){
return (function (p1__11801_SHARP_){
return (n + p1__11801_SHARP_);
});})(token,n,s__11807__$2,temp__4388__auto__,offset))
);

return token;
})(),iter__11806.call(null,cljs.core.rest.call(null,s__11807__$2)));
}
} else {
return null;
}
break;
}
});})(offset))
,null,null));
});})(offset))
;
return iter__4392__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2),(2),(2),(6)], null));
});
fressian_cljs.uuid.parse = (function parse(s){
var buf = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var idx = cljs.core.atom.call(null,(0));
clojure.string.replace.call(null,s.toLowerCase(),/[0-9a-f]{2}/,((function (buf,idx){
return (function (oct){
if((cljs.core.deref.call(null,idx) < (16))){
(buf[cljs.core.deref.call(null,idx)] = parseInt([cljs.core.str("0x"),cljs.core.str(oct)].join('')));

return cljs.core.swap_BANG_.call(null,idx,cljs.core.inc);
} else {
return null;
}
});})(buf,idx))
);

return buf;
});
fressian_cljs.uuid.v4 = (function v4(){
return clojure.string.join.call(null,"-",fressian_cljs.uuid.unparse.call(null,cljs.core.map_indexed.call(null,(function (idx,item){
if(cljs.core._EQ_.call(null,idx,(8))){
return ((item & (63)) | (128));
} else {
return item;
}
}),cljs.core.map_indexed.call(null,(function (idx,item){
if(cljs.core._EQ_.call(null,idx,(6))){
return ((item & (15)) | (64));
} else {
return item;
}
}),fressian_cljs.uuid.rng.call(null)))));
});

//# sourceMappingURL=uuid.js.map?rel=1421619101263