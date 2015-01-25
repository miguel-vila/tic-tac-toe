// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.writer');
goog.require('cljs.core');
goog.require('fressian_cljs.adler32');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('fressian_cljs.fns');
goog.require('fressian_cljs.defs');

/**
* @constructor
* @param {*} buffer
* @param {*} index
* @param {*} handlers
* @param {*} checksum
* @param {*} priority_cache
* @param {*} struct_cache
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
fressian_cljs.writer.FressianWriter = (function (buffer,index,handlers,checksum,priority_cache,struct_cache,__meta,__extmap,__hash){
this.buffer = buffer;
this.index = index;
this.handlers = handlers;
this.checksum = checksum;
this.priority_cache = priority_cache;
this.struct_cache = struct_cache;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.writer.FressianWriter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.call(null,this__4239__auto____$1,k__4240__auto__,null);
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k11696,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__11698 = (((k11696 instanceof cljs.core.Keyword))?k11696.fqn:null);
switch (G__11698) {
case "struct-cache":
return self__.struct_cache;

break;
case "priority-cache":
return self__.priority_cache;

break;
case "checksum":
return self__.checksum;

break;
case "handlers":
return self__.handlers;

break;
case "index":
return self__.index;

break;
case "buffer":
return self__.buffer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11696,else__4242__auto__);

}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,pr_pair__4256__auto__,"#fressian-cljs.writer.FressianWriter{",", ","}",opts__4255__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checksum","checksum",549736371),self__.checksum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
var self__ = this;
var this__4234__auto____$1 = this;
var h__4057__auto__ = self__.__hash;
if(!((h__4057__auto__ == null))){
return h__4057__auto__;
} else {
var h__4057__auto____$1 = cljs.core.hash_imap.call(null,this__4234__auto____$1);
self__.__hash = h__4057__auto____$1;

return h__4057__auto____$1;
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
var self__ = this;
var this__4235__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3624__auto__ = other__4236__auto__;
if(cljs.core.truth_(and__3624__auto__)){
return ((this__4235__auto____$1.constructor === other__4236__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4235__auto____$1,other__4236__auto__));
} else {
return and__3624__auto__;
}
})())){
return true;
} else {
return false;
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"checksum","checksum",549736371),null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null), null),k__4249__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4249__auto__)),null));
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__11695){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__11699 = cljs.core.keyword_identical_QMARK_;
var expr__11700 = k__4247__auto__;
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(G__11695,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,G__11695,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,G__11695,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,G__11695,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,G__11695,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11699.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),expr__11700))){
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,G__11695,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4247__auto__,G__11695),null));
}
}
}
}
}
}
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checksum","checksum",549736371),self__.checksum],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__11695){
var self__ = this;
var this__4238__auto____$1 = this;
return (new fressian_cljs.writer.FressianWriter(self__.buffer,self__.index,self__.handlers,self__.checksum,self__.priority_cache,self__.struct_cache,G__11695,self__.__extmap,self__.__hash));
});

fressian_cljs.writer.FressianWriter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4245__auto__)){
return cljs.core._assoc.call(null,this__4244__auto____$1,cljs.core._nth.call(null,entry__4245__auto__,(0)),cljs.core._nth.call(null,entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

fressian_cljs.writer.FressianWriter.cljs$lang$type = true;

fressian_cljs.writer.FressianWriter.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.writer/FressianWriter");
});

fressian_cljs.writer.FressianWriter.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write.call(null,writer__4274__auto__,"fressian-cljs.writer/FressianWriter");
});

fressian_cljs.writer.__GT_FressianWriter = (function __GT_FressianWriter(buffer,index,handlers,checksum,priority_cache,struct_cache){
return (new fressian_cljs.writer.FressianWriter(buffer,index,handlers,checksum,priority_cache,struct_cache,null,null,null));
});

fressian_cljs.writer.map__GT_FressianWriter = (function map__GT_FressianWriter(G__11697){
return (new fressian_cljs.writer.FressianWriter(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__11697),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__11697),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__11697),new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(G__11697),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(G__11697),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(G__11697),null,cljs.core.dissoc.call(null,G__11697,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"checksum","checksum",549736371),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)),null));
});



fressian_cljs.writer.notify_bytes_written = (function notify_bytes_written(wtr,cnt){
return cljs.core.swap_BANG_.call(null,wtr,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core._PLUS_,cnt);
});
fressian_cljs.writer.write_raw_byte = (function write_raw_byte(wtr,b){
((new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))))[new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))] = b);

fressian_cljs.adler32.update_BANG_.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),b);

fressian_cljs.writer.notify_bytes_written.call(null,wtr,(1));

return wtr;
});
fressian_cljs.writer.write_raw_bytes = (function write_raw_bytes(wtr,b,off,len){
var i8array = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr))));
i8array.set(b.subarray(off,(off + len)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));

fressian_cljs.adler32.update_BANG_.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),b,off,len);

fressian_cljs.writer.notify_bytes_written.call(null,wtr,len);

return wtr;
});
fressian_cljs.writer.reset = (function reset(wtr){
cljs.core.swap_BANG_.call(null,wtr,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(0));

return fressian_cljs.adler32.reset.call(null,new cljs.core.Keyword(null,"checksum","checksum",549736371).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));
});
fressian_cljs.writer.write_code = (function write_code(wtr,code){
return fressian_cljs.writer.write_raw_byte.call(null,wtr,code);
});
fressian_cljs.writer.write_tag = (function write_tag(wtr,tag,component_count){
var temp__4386__auto___11703 = fressian_cljs.defs.tag_to_code.call(null,tag);
if(cljs.core.truth_(temp__4386__auto___11703)){
var shortcut_code_11704 = temp__4386__auto___11703;
fressian_cljs.writer.write_code.call(null,wtr,shortcut_code_11704);
} else {
var index_11705 = fressian_cljs.defs.old_index.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),tag);
if(cljs.core._EQ_.call(null,index_11705,(-1))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"structtype","structtype",112563241)));

fressian_cljs.writer.write_object.call(null,wtr,tag);

fressian_cljs.writer.write_int.call(null,wtr,component_count);
} else {
if((index_11705 < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"struct-cache-packed-end","struct-cache-packed-end",1499051160)))){
fressian_cljs.writer.write_code.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) + index_11705));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct","struct",-1314558596)));

fressian_cljs.writer.write_int.call(null,wtr,index_11705);

}
}
}

return wtr;
});
fressian_cljs.writer._GT__GT__GT_ = (function _GT__GT__GT_(n,s){
return Math.floor((n / Math.pow((2),s)));
});
fressian_cljs.writer.write_named = (function write_named(tag,wtr,s){
fressian_cljs.writer.write_tag.call(null,wtr,tag,(2));

fressian_cljs.writer.write_object.call(null,wtr,cljs.core.namespace.call(null,s),true);

return fressian_cljs.writer.write_object.call(null,wtr,cljs.core.name.call(null,s),true);
});
fressian_cljs.writer.write_raw_int16 = (function write_raw_int16(wtr,s){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,s,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(s & (255)));
});
fressian_cljs.writer.write_raw_int24 = (function write_raw_int24(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int32 = (function write_raw_int32(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int40 = (function write_raw_int40(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(32)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int48 = (function write_raw_int48(wtr,i){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(40)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(32)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(24)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(16)) & (255)));

fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.writer._GT__GT__GT_.call(null,i,(8)) & (255)));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,(i & (255)));
});
fressian_cljs.writer.write_raw_int64 = (function write_raw_int64(wtr,i){
cljs.core.doall.call(null,(function (){var iter__4392__auto__ = (function iter__11710(s__11711){
return (new cljs.core.LazySeq(null,(function (){
var s__11711__$1 = s__11711;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__11711__$1);
if(temp__4388__auto__){
var s__11711__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11711__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__11711__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__11713 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__11712 = (0);
while(true){
if((i__11712 < size__4391__auto__)){
var x = cljs.core._nth.call(null,c__4390__auto__,i__11712);
cljs.core.chunk_append.call(null,b__11713,fressian_cljs.writer.write_raw_byte.call(null,wtr,fressian_cljs.writer._GT__GT__GT_.call(null,i,(((7) - x) * (8)))));

var G__11714 = (i__11712 + (1));
i__11712 = G__11714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11713),iter__11710.call(null,cljs.core.chunk_rest.call(null,s__11711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11713),null);
}
} else {
var x = cljs.core.first.call(null,s__11711__$2);
return cljs.core.cons.call(null,fressian_cljs.writer.write_raw_byte.call(null,wtr,fressian_cljs.writer._GT__GT__GT_.call(null,i,(((7) - x) * (8)))),iter__11710.call(null,cljs.core.rest.call(null,s__11711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__.call(null,cljs.core.range.call(null,(0),(8)));
})());

return wtr;
});
fressian_cljs.writer.write_raw_float = (function write_raw_float(wtr,f){
var f32array_11715 = (new Float32Array((1)));
(f32array_11715[(0)] = f);

var bytes_11716 = (new Uint8Array(f32array_11715.buffer));
var n__4523__auto___11717 = (4);
var i_11718 = (0);
while(true){
if((i_11718 < n__4523__auto___11717)){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(bytes_11716[i_11718]));

var G__11719 = (i_11718 + (1));
i_11718 = G__11719;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.write_raw_double = (function write_raw_double(wtr,f){
var f64array_11720 = (new Float64Array((1)));
(f64array_11720[(0)] = f);

var bytes_11721 = (new Uint8Array(f64array_11720.buffer));
var n__4523__auto___11722 = (8);
var i_11723 = (0);
while(true){
if((i_11723 < n__4523__auto___11722)){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(bytes_11721[i_11723]));

var G__11724 = (i_11723 + (1));
i_11723 = G__11724;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.bit_switch = (function bit_switch(l){
return ((64) - Math.abs(l).toString((2)).length);
});
fressian_cljs.writer.write_int = (function write_int(wtr,n){
var s = fressian_cljs.writer.bit_switch.call(null,n);
if((((1) <= s)) && ((s <= (14)))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)));

return fressian_cljs.writer.write_raw_int64.call(null,wtr,n);
} else {
if((((15) <= s)) && ((s <= (22)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(48))));

return fressian_cljs.writer.write_raw_int48.call(null,wtr,n);
} else {
if((((23) <= s)) && ((s <= (30)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(40))));

return fressian_cljs.writer.write_raw_int40.call(null,wtr,n);
} else {
if((((31) <= s)) && ((s <= (38)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(32))));

return fressian_cljs.writer.write_raw_int32.call(null,wtr,n);
} else {
if((((39) <= s)) && ((s <= (44)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(24))));

return fressian_cljs.writer.write_raw_int24.call(null,wtr,n);
} else {
if((((45) <= s)) && ((s <= (51)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(16))));

return fressian_cljs.writer.write_raw_int16.call(null,wtr,n);
} else {
if((((52) <= s)) && ((s <= (57)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(8))));

return fressian_cljs.writer.write_raw_byte.call(null,wtr,n);
} else {
if((((58) <= s)) && ((s <= (64)))){
if((n < (-1))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed_2_zero","int-packed_2_zero",914365607)) + fressian_cljs.writer._GT__GT__GT_.call(null,n,(8))));
} else {
}

return fressian_cljs.writer.write_raw_byte.call(null,wtr,n);
} else {
throw (new Error("more than 64 bits in a long!"));

}
}
}
}
}
}
}
}
});
fressian_cljs.writer.write_float = (function write_float(wtr,f){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)));

return fressian_cljs.writer.write_raw_float.call(null,wtr,f);
});
fressian_cljs.writer.write_double = (function write_double(wtr,d){
var G__11726 = d;
switch (G__11726) {
case 0.0:
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"doulbe-0","doulbe-0",-1668698487)));

break;
case 1.0:
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)));

break;
default:
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)));

return fressian_cljs.writer.write_raw_double.call(null,wtr,d);

}
});
fressian_cljs.writer.write_count = (function write_count(wtr,cnt){
return fressian_cljs.writer.write_int.call(null,wtr,cnt);
});
fressian_cljs.writer.write_string = (function write_string(wtr,s){
var max_buf_needed_11736 = (function (){var x__3960__auto__ = (cljs.core.count.call(null,s) * (3));
var y__3961__auto__ = (65536);
return ((x__3960__auto__ < y__3961__auto__) ? x__3960__auto__ : y__3961__auto__);
})();
var string_buffer_11737 = (new Int8Array((new ArrayBuffer(max_buf_needed_11736))));
var G__11733_11738 = fressian_cljs.fns.buffer_string_chunk_utf8.call(null,s,(0),string_buffer_11737);
var vec__11734_11739 = G__11733_11738;
var string_pos_11740 = cljs.core.nth.call(null,vec__11734_11739,(0),null);
var buf_pos_11741 = cljs.core.nth.call(null,vec__11734_11739,(1),null);
var G__11733_11742__$1 = G__11733_11738;
while(true){
var vec__11735_11743 = G__11733_11742__$1;
var string_pos_11744__$1 = cljs.core.nth.call(null,vec__11735_11743,(0),null);
var buf_pos_11745__$1 = cljs.core.nth.call(null,vec__11735_11743,(1),null);
if((buf_pos_11745__$1 < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"string-packed-length-end","string-packed-length-end",-358232148)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + buf_pos_11745__$1));
} else {
if(cljs.core._EQ_.call(null,string_pos_11744__$1,cljs.core.count.call(null,s))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)));

fressian_cljs.writer.write_code.call(null,wtr,buf_pos_11745__$1);
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)));

fressian_cljs.writer.write_count.call(null,wtr,buf_pos_11745__$1);

}
}

fressian_cljs.writer.write_raw_bytes.call(null,wtr,string_buffer_11737,(0),buf_pos_11745__$1);

if((string_pos_11744__$1 < cljs.core.count.call(null,s))){
var G__11746 = fressian_cljs.fns.buffer_string_chunk_utf8.call(null,s,string_pos_11744__$1,string_buffer_11737);
G__11733_11742__$1 = G__11746;
continue;
} else {
}
break;
}

return wtr;
});
fressian_cljs.writer.write_bytes = (function() {
var write_bytes = null;
var write_bytes__2 = (function (wtr,b){
return write_bytes.call(null,wtr,b,(0),b.length);
});
var write_bytes__4 = (function (wtr,b,offset,length){
if((length < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"bytes-packed-length-end","bytes-packed-length-end",-2089240276)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) + length));

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,offset,length);
} else {
var len_11747 = length;
var off_11748 = offset;
while(true){
if((len_11747 > fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-chunk","bytes-chunk",58155330)));

fressian_cljs.writer.write_count.call(null,wtr,fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,off_11748,fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));

var G__11749 = (len_11747 - fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));
var G__11750 = (off_11748 + fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"byte-chunk-size","byte-chunk-size",-133367132)));
len_11747 = G__11749;
off_11748 = G__11750;
continue;
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680)));

fressian_cljs.writer.write_count.call(null,wtr,len_11747);

fressian_cljs.writer.write_raw_bytes.call(null,wtr,b,off_11748,len_11747);
}
break;
}
}

return wtr;
});
write_bytes = function(wtr,b,offset,length){
switch(arguments.length){
case 2:
return write_bytes__2.call(this,wtr,b);
case 4:
return write_bytes__4.call(this,wtr,b,offset,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_bytes.cljs$core$IFn$_invoke$arity$2 = write_bytes__2;
write_bytes.cljs$core$IFn$_invoke$arity$4 = write_bytes__4;
return write_bytes;
})()
;
fressian_cljs.writer.write_list = (function write_list(wtr,l){
var length = cljs.core.count.call(null,l);
if((length < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"list-packed-length-end","list-packed-length-end",1171518200)))){
fressian_cljs.writer.write_raw_byte.call(null,wtr,(length + fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054))));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list","list",765357683)));

fressian_cljs.writer.write_count.call(null,wtr,length);
}

return cljs.core.doall.call(null,(function (){var seq__11755 = cljs.core.seq.call(null,l);
var chunk__11756 = null;
var count__11757 = (0);
var i__11758 = (0);
while(true){
if((i__11758 < count__11757)){
var item = cljs.core._nth.call(null,chunk__11756,i__11758);
fressian_cljs.writer.write_object.call(null,wtr,item);

var G__11759 = seq__11755;
var G__11760 = chunk__11756;
var G__11761 = count__11757;
var G__11762 = (i__11758 + (1));
seq__11755 = G__11759;
chunk__11756 = G__11760;
count__11757 = G__11761;
i__11758 = G__11762;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__11755);
if(temp__4388__auto__){
var seq__11755__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755__$1)){
var c__4423__auto__ = cljs.core.chunk_first.call(null,seq__11755__$1);
var G__11763 = cljs.core.chunk_rest.call(null,seq__11755__$1);
var G__11764 = c__4423__auto__;
var G__11765 = cljs.core.count.call(null,c__4423__auto__);
var G__11766 = (0);
seq__11755 = G__11763;
chunk__11756 = G__11764;
count__11757 = G__11765;
i__11758 = G__11766;
continue;
} else {
var item = cljs.core.first.call(null,seq__11755__$1);
fressian_cljs.writer.write_object.call(null,wtr,item);

var G__11767 = cljs.core.next.call(null,seq__11755__$1);
var G__11768 = null;
var G__11769 = (0);
var G__11770 = (0);
seq__11755 = G__11767;
chunk__11756 = G__11768;
count__11757 = G__11769;
i__11758 = G__11770;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
fressian_cljs.writer.write_map = (function write_map(wtr,m){
fressian_cljs.writer.write_tag.call(null,wtr,"map",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.flatten.call(null,cljs.core.seq.call(null,m)));
});
fressian_cljs.writer.write_set = (function write_set(wtr,s){
fressian_cljs.writer.write_tag.call(null,wtr,"set",(1));

return fressian_cljs.writer.write_list.call(null,wtr,cljs.core.seq.call(null,s));
});
fressian_cljs.writer.clear_caches = (function clear_caches(wtr){
return null;
});
fressian_cljs.writer.internal_write_footer = (function internal_write_footer(wtr,length){
fressian_cljs.writer.write_raw_int32.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)));

fressian_cljs.writer.write_raw_int32.call(null,wtr,length);

return fressian_cljs.writer.reset.call(null,wtr);
});
fressian_cljs.writer.write_footer = (function write_footer(wtr){
fressian_cljs.writer.internal_write_footer.call(null,wtr,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)));

fressian_cljs.writer.clear_caches.call(null,wtr);

return wtr;
});
fressian_cljs.writer.internal_write = (function (){var method_table__4533__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4534__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4535__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4536__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4537__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fressian-cljs.writer","internal-write"),((function (method_table__4533__auto__,prefer_table__4534__auto__,method_cache__4535__auto__,cached_hierarchy__4536__auto__,hierarchy__4537__auto__){
return (function (_,o){
return cljs.core.type.call(null,o);
});})(method_table__4533__auto__,prefer_table__4534__auto__,method_cache__4535__auto__,cached_hierarchy__4536__auto__,hierarchy__4537__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4537__auto__,method_table__4533__auto__,prefer_table__4534__auto__,method_cache__4535__auto__,cached_hierarchy__4536__auto__));
})();
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Number,(function (wtr,n){
if(cljs.core._EQ_.call(null,Math.ceil(n),n)){
return fressian_cljs.writer.write_int.call(null,wtr,n);
} else {
if(((Math.pow((2),(-126)) < n)) && ((n < Math.pow((2),(128))))){
return fressian_cljs.writer.write_float.call(null,wtr,n);
} else {
return fressian_cljs.writer.write_double.call(null,wtr,n);

}
}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Boolean,(function (wtr,b){
if(cljs.core.truth_(b)){
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)));
} else {
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)));
}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,String,(function (wtr,s){
if((s instanceof cljs.core.Keyword)){
return fressian_cljs.writer.write_named.call(null,"key",wtr,s);
} else {
return fressian_cljs.writer.write_string.call(null,wtr,s);

}
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Date,(function (wtr,d){
fressian_cljs.writer.write_tag.call(null,wtr,"inst",(1));

return fressian_cljs.writer.write_int.call(null,wtr,d.getTime());
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Array,(function (wtr,arr){
return fressian_cljs.writer.write_list.call(null,wtr,arr);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.ObjMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentHashMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentArrayMap,(function (wtr,m){
return fressian_cljs.writer.write_map.call(null,wtr,m);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentVector,(function (wtr,v){
return fressian_cljs.writer.write_list.call(null,wtr,v);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.ChunkedSeq,(function (wtr,s){
return fressian_cljs.writer.write_list.call(null,wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.PersistentHashSet,(function (wtr,s){
return fressian_cljs.writer.write_set.call(null,wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.Keyword,(function (wtr,k){
return fressian_cljs.writer.write_named.call(null,"key",wtr,k);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.Symbol,(function (wtr,s){
return fressian_cljs.writer.write_named.call(null,"sym",wtr,s);
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,cljs.core.UUID,(function (wtr,uuid){
fressian_cljs.writer.write_tag.call(null,wtr,"uuid",(1));

return fressian_cljs.writer.write_bytes.call(null,wtr,(new Uint8Array(fressian_cljs.fns.uuid_to_byte_array.call(null,uuid))));
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,null,(function (wtr,null_ref){
return fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"null","null",-180137709)));
}));
cljs.core._add_method.call(null,fressian_cljs.writer.internal_write,Object,(function (wtr,o){
return fressian_cljs.writer.write_map.call(null,wtr,cljs.core.js__GT_clj.call(null,o));
}));
fressian_cljs.writer.should_skip_cache_QMARK_ = (function should_skip_cache_QMARK_(o){
if(((o == null)) || (cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Boolean))){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),String)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,o),(0));
} else {
return false;

}
}
});
fressian_cljs.writer.do_write = (function do_write(wtr,tag,o,handler,cache_QMARK_){
if(cljs.core.truth_(cache_QMARK_)){
if(fressian_cljs.writer.should_skip_cache_QMARK_.call(null,o)){
return do_write.call(null,wtr,tag,o,handler,false);
} else {
var index = fressian_cljs.defs.old_index.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,wtr)),o);
if(cljs.core._EQ_.call(null,index,(-1))){
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"put-priority-cache","put-priority-cache",-1626100040)));

return do_write.call(null,wtr,tag,o,handler,false);
} else {
if((index < fressian_cljs.defs.ranges.call(null,new cljs.core.Keyword(null,"priority-cache-packed-end","priority-cache-packed-end",1123343205)))){
return fressian_cljs.writer.write_code.call(null,wtr,(fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) + index));
} else {
fressian_cljs.writer.write_code.call(null,wtr,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"get-priority-cache","get-priority-cache",409460466)));

return fressian_cljs.writer.write_int.call(null,wtr,index);
}
}
}
} else {
return handler.call(null,wtr,o);
}
});
fressian_cljs.writer.lookup_handler = (function lookup_handler(wtr,tag,o){
if(cljs.core.truth_(tag)){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,wtr),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.type.call(null,o),tag], null));
} else {
var G__11772 = cljs.core.get_in.call(null,cljs.core.deref.call(null,wtr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.type.call(null,o)], null));
var G__11772__$1 = (((G__11772 == null))?null:cljs.core.first.call(null,G__11772));
var G__11772__$2 = (((G__11772__$1 == null))?null:cljs.core.val.call(null,G__11772__$1));
return G__11772__$2;
}
});
fressian_cljs.writer.write_as = (function() {
var write_as = null;
var write_as__3 = (function (wtr,tag,o){
return write_as.call(null,wtr,null,o,false);
});
var write_as__4 = (function (wtr,tag,o,cache_QMARK_){
var temp__4386__auto__ = (function (){var or__3636__auto__ = fressian_cljs.writer.lookup_handler.call(null,wtr,tag,o);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.get_method.call(null,fressian_cljs.writer.internal_write,cljs.core.type.call(null,o));
}
})();
if(cljs.core.truth_(temp__4386__auto__)){
var handler = temp__4386__auto__;
return fressian_cljs.writer.do_write.call(null,wtr,tag,o,handler,cache_QMARK_);
} else {
throw (new Error([cljs.core.str("Cannot write "),cljs.core.str(o),cljs.core.str(" as tag "),cljs.core.str(tag)].join('')));
}
});
write_as = function(wtr,tag,o,cache_QMARK_){
switch(arguments.length){
case 3:
return write_as__3.call(this,wtr,tag,o);
case 4:
return write_as__4.call(this,wtr,tag,o,cache_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_as.cljs$core$IFn$_invoke$arity$3 = write_as__3;
write_as.cljs$core$IFn$_invoke$arity$4 = write_as__4;
return write_as;
})()
;
fressian_cljs.writer.write_object = (function() {
var write_object = null;
var write_object__2 = (function (wtr,o){
return fressian_cljs.writer.write_as.call(null,wtr,null,o);
});
var write_object__3 = (function (wtr,o,cache_QMARK_){
return fressian_cljs.writer.write_as.call(null,wtr,null,o,cache_QMARK_);
});
write_object = function(wtr,o,cache_QMARK_){
switch(arguments.length){
case 2:
return write_object__2.call(this,wtr,o);
case 3:
return write_object__3.call(this,wtr,o,cache_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_object.cljs$core$IFn$_invoke$arity$2 = write_object__2;
write_object.cljs$core$IFn$_invoke$arity$3 = write_object__3;
return write_object;
})()
;

//# sourceMappingURL=writer.js.map?rel=1421619100971