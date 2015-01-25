// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.core');
goog.require('cljs.core');
goog.require('fressian_cljs.defs');
goog.require('fressian_cljs.adler32');
goog.require('fressian_cljs.writer');
goog.require('fressian_cljs.reader');
goog.require('clojure.string');
/**
* Return the map constructor for a record
*/
fressian_cljs.core.record_map_constructor_name = (function record_map_constructor_name(rname){
var comps = clojure.string.split.call(null,[cljs.core.str(rname)].join(''),/\./);
return [cljs.core.str(clojure.string.join.call(null,".",cljs.core.map.call(null,((function (comps){
return (function (p1__11608_SHARP_){
return str.replace.call(null,p1__11608_SHARP_,"_","-");
});})(comps))
,cljs.core.butlast.call(null,comps)))),cljs.core.str("/map->"),cljs.core.str(cljs.core.last.call(null,comps))].join('');
});
fressian_cljs.core.cljs_read_handler = cljs.core.PersistentHashMap.fromArrays(["map","vec","ratio","record","key","char","bigint","byte","sym"],[(function (reader,tag,component_count){
var kvs = fressian_cljs.reader.read_object.call(null,reader);
return cljs.core.apply.call(null,cljs.core.hash_map,kvs);
}),(function (reader,tag,component_count){
return cljs.core.vec.call(null,fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return (parseInt(fressian_cljs.reader.read_object.call(null,reader)) / parseInt(fressian_cljs.reader.read_object.call(null,reader)));
}),(function (reader,tag,component_count){
var rname = fressian_cljs.reader.read_object.call(null,reader);
var rmap = fressian_cljs.reader.read_object.call(null,reader);
var temp__4386__auto__ = fressian_cljs.core.load_string.call(null,fressian_cljs.core.record_map_constructor_name.call(null,rname));
if(cljs.core.truth_(temp__4386__auto__)){
var rcons = temp__4386__auto__;
return rcons.call(null,rmap);
} else {
return (new fressian_cljs.defs.TaggedObject("record",cljs.core.into_array.call(null,Object,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rname,rmap], null)),null,null,null,null));
}
}),(function (reader,tag,component_count){
return cljs.core.keyword.call(null,fressian_cljs.reader.read_object.call(null,reader),fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return String.fromCharCode(fressian_cljs.reader.read_object.call(null,reader));
}),(function (reader,tag,component_count){
return fressian_cljs.reader.read_object.call(null,reader);
}),(function (reader,tag,component_count){
return fressian_cljs.reader.read_object.call(null,reader);
}),(function (reader,tag,component_count){
return cljs.core.symbol.call(null,fressian_cljs.reader.read_object.call(null,reader),fressian_cljs.reader.read_object.call(null,reader));
})]);
fressian_cljs.core.cljs_write_handler = new cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentVector,new cljs.core.PersistentArrayMap(null, 1, ["vec",(function (wtr,v){
fressian_cljs.writer.write_tag.call(null,wtr,"vec",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.seq.call(null,v));
})], null)], true, false);
fressian_cljs.core.create_reader = (function (){var method_table__4533__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4534__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4535__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4536__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4537__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fressian-cljs.core","create-reader"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4537__auto__,method_table__4533__auto__,prefer_table__4534__auto__,method_cache__4535__auto__,cached_hierarchy__4536__auto__));
})();
cljs.core._add_method.call(null,fressian_cljs.core.create_reader,ArrayBuffer,(function() { 
var G__11611__delegate = function (buf,p__11609){
var map__11610 = p__11609;
var map__11610__$1 = ((cljs.core.seq_QMARK_.call(null,map__11610))?cljs.core.apply.call(null,cljs.core.hash_map,map__11610):map__11610);
var handlers = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.atom.call(null,(new fressian_cljs.reader.FressianReader(buf,(0),(function (){var or__3636__auto__ = handlers;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return fressian_cljs.core.cljs_read_handler;
}
})(),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,null,null)));
};
var G__11611 = function (buf,var_args){
var p__11609 = null;
if (arguments.length > 1) {
  p__11609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11611__delegate.call(this,buf,p__11609);};
G__11611.cljs$lang$maxFixedArity = 1;
G__11611.cljs$lang$applyTo = (function (arglist__11612){
var buf = cljs.core.first(arglist__11612);
var p__11609 = cljs.core.rest(arglist__11612);
return G__11611__delegate(buf,p__11609);
});
G__11611.cljs$core$IFn$_invoke$arity$variadic = G__11611__delegate;
return G__11611;
})()
);
cljs.core._add_method.call(null,fressian_cljs.core.create_reader,Blob,(function() { 
var G__11615__delegate = function (buf,p__11613){
var map__11614 = p__11613;
var map__11614__$1 = ((cljs.core.seq_QMARK_.call(null,map__11614))?cljs.core.apply.call(null,cljs.core.hash_map,map__11614):map__11614);
var handlers = cljs.core.get.call(null,map__11614__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
throw "Blob FressianReader has been implemented yet.";
};
var G__11615 = function (buf,var_args){
var p__11613 = null;
if (arguments.length > 1) {
  p__11613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11615__delegate.call(this,buf,p__11613);};
G__11615.cljs$lang$maxFixedArity = 1;
G__11615.cljs$lang$applyTo = (function (arglist__11616){
var buf = cljs.core.first(arglist__11616);
var p__11613 = cljs.core.rest(arglist__11616);
return G__11615__delegate(buf,p__11613);
});
G__11615.cljs$core$IFn$_invoke$arity$variadic = G__11615__delegate;
return G__11615;
})()
);
/**
* @param {...*} var_args
*/
fressian_cljs.core.read = (function() { 
var read__delegate = function (readable,options){
return fressian_cljs.reader.read_object.call(null,cljs.core.apply.call(null,fressian_cljs.core.create_reader,readable,options));
};
var read = function (readable,var_args){
var options = null;
if (arguments.length > 1) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return read__delegate.call(this,readable,options);};
read.cljs$lang$maxFixedArity = 1;
read.cljs$lang$applyTo = (function (arglist__11617){
var readable = cljs.core.first(arglist__11617);
var options = cljs.core.rest(arglist__11617);
return read__delegate(readable,options);
});
read.cljs$core$IFn$_invoke$arity$variadic = read__delegate;
return read;
})()
;
/**
* @param {...*} var_args
*/
fressian_cljs.core.create_writer = (function() { 
var create_writer__delegate = function (p__11618){
var map__11620 = p__11618;
var map__11620__$1 = ((cljs.core.seq_QMARK_.call(null,map__11620))?cljs.core.apply.call(null,cljs.core.hash_map,map__11620):map__11620);
var handlers = cljs.core.get.call(null,map__11620__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var buffer = (new ArrayBuffer((65536)));
return cljs.core.atom.call(null,(new fressian_cljs.writer.FressianWriter(buffer,(0),(function (){var or__3636__auto__ = handlers;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return fressian_cljs.core.cljs_write_handler;
}
})(),fressian_cljs.adler32.make_adler32.call(null),fressian_cljs.defs.create_interleaved_index_hop_map.call(null,(16)),fressian_cljs.defs.create_interleaved_index_hop_map.call(null,(16)),null,null,null)));
};
var create_writer = function (var_args){
var p__11618 = null;
if (arguments.length > 0) {
  p__11618 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return create_writer__delegate.call(this,p__11618);};
create_writer.cljs$lang$maxFixedArity = 0;
create_writer.cljs$lang$applyTo = (function (arglist__11621){
var p__11618 = cljs.core.seq(arglist__11621);
return create_writer__delegate(p__11618);
});
create_writer.cljs$core$IFn$_invoke$arity$variadic = create_writer__delegate;
return create_writer;
})()
;
/**
* @param {...*} var_args
*/
fressian_cljs.core.write = (function() { 
var write__delegate = function (obj,options){
var map__11623 = (cljs.core.truth_(options)?cljs.core.apply.call(null,cljs.core.hash_map,options):null);
var map__11623__$1 = ((cljs.core.seq_QMARK_.call(null,map__11623))?cljs.core.apply.call(null,cljs.core.hash_map,map__11623):map__11623);
var footer_QMARK_ = cljs.core.get.call(null,map__11623__$1,new cljs.core.Keyword(null,"footer?","footer?",-986176238));
var writer = cljs.core.apply.call(null,fressian_cljs.core.create_writer,options);
fressian_cljs.writer.write_object.call(null,writer,obj);

if(cljs.core.truth_(footer_QMARK_)){
fressian_cljs.writer.write_footer.call(null,writer);
} else {
}

return (new Int8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,writer)))).subarray((0),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,writer)));
};
var write = function (obj,var_args){
var options = null;
if (arguments.length > 1) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write__delegate.call(this,obj,options);};
write.cljs$lang$maxFixedArity = 1;
write.cljs$lang$applyTo = (function (arglist__11624){
var obj = cljs.core.first(arglist__11624);
var options = cljs.core.rest(arglist__11624);
return write__delegate(obj,options);
});
write.cljs$core$IFn$_invoke$arity$variadic = write__delegate;
return write;
})()
;

//# sourceMappingURL=core.js.map?rel=1421619100104