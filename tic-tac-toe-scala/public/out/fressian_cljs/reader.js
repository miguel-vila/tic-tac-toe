// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.reader');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('fressian_cljs.fns');
goog.require('fressian_cljs.defs');

/**
* @constructor
* @param {*} buffer
* @param {*} index
* @param {*} handlers
* @param {*} priority_cache
* @param {*} struct_cache
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
fressian_cljs.reader.FressianReader = (function (buffer,index,handlers,priority_cache,struct_cache,__meta,__extmap,__hash){
this.buffer = buffer;
this.index = index;
this.handlers = handlers;
this.priority_cache = priority_cache;
this.struct_cache = struct_cache;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.reader.FressianReader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.call(null,this__4239__auto____$1,k__4240__auto__,null);
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k11812,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__11814 = (((k11812 instanceof cljs.core.Keyword))?k11812.fqn:null);
switch (G__11814) {
case "struct-cache":
return self__.struct_cache;

break;
case "priority-cache":
return self__.priority_cache;

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
return cljs.core.get.call(null,self__.__extmap,k11812,else__4242__auto__);

}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,pr_pair__4256__auto__,"#fressian-cljs.reader.FressianReader{",", ","}",opts__4255__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

fressian_cljs.reader.FressianReader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

fressian_cljs.reader.FressianReader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null,new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null,new cljs.core.Keyword(null,"buffer","buffer",617295198),null], null), null),k__4249__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4249__auto__)),null));
}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__11811){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__11815 = cljs.core.keyword_identical_QMARK_;
var expr__11816 = k__4247__auto__;
if(cljs.core.truth_(pred__11815.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198),expr__11816))){
return (new fressian_cljs.reader.FressianReader(G__11811,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11815.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__11816))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,G__11811,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11815.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__11816))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,G__11811,self__.priority_cache,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11815.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),expr__11816))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,G__11811,self__.struct_cache,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11815.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),expr__11816))){
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,G__11811,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4247__auto__,G__11811),null));
}
}
}
}
}
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buffer","buffer",617295198),self__.buffer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),self__.priority_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),self__.struct_cache],null))], null),self__.__extmap));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__11811){
var self__ = this;
var this__4238__auto____$1 = this;
return (new fressian_cljs.reader.FressianReader(self__.buffer,self__.index,self__.handlers,self__.priority_cache,self__.struct_cache,G__11811,self__.__extmap,self__.__hash));
});

fressian_cljs.reader.FressianReader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4245__auto__)){
return cljs.core._assoc.call(null,this__4244__auto____$1,cljs.core._nth.call(null,entry__4245__auto__,(0)),cljs.core._nth.call(null,entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

fressian_cljs.reader.FressianReader.cljs$lang$type = true;

fressian_cljs.reader.FressianReader.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.reader/FressianReader");
});

fressian_cljs.reader.FressianReader.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write.call(null,writer__4274__auto__,"fressian-cljs.reader/FressianReader");
});

fressian_cljs.reader.__GT_FressianReader = (function __GT_FressianReader(buffer,index,handlers,priority_cache,struct_cache){
return (new fressian_cljs.reader.FressianReader(buffer,index,handlers,priority_cache,struct_cache,null,null,null));
});

fressian_cljs.reader.map__GT_FressianReader = (function map__GT_FressianReader(G__11813){
return (new fressian_cljs.reader.FressianReader(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(G__11813),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__11813),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__11813),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(G__11813),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(G__11813),null,cljs.core.dissoc.call(null,G__11813,new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)),null));
});

fressian_cljs.reader.standard_extension_hadlers = cljs.core.PersistentHashMap.fromArrays(["map","inst","bigdec","long[]","uri","regex","uuid","int[]","boolean[]","float[]","Object[]","set","double[]","bigint"],[(function (r,tag,component_count){
return cljs.core.apply.call(null,cljs.core.hash_map,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var d = (new Date());
var tm = fressian_cljs.reader.read_int.call(null,r);
d.setTime(tm);

return d;
}),(function (r,tag,component_count){
return cljs.core.List.EMPTY;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11819_11843 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11820_11844 = null;
var count__11821_11845 = (0);
var i__11822_11846 = (0);
while(true){
if((i__11822_11846 < count__11821_11845)){
var n_11847 = cljs.core._nth.call(null,chunk__11820_11844,i__11822_11846);
(result[n_11847] = fressian_cljs.reader.read_int.call(null,r));

var G__11848 = seq__11819_11843;
var G__11849 = chunk__11820_11844;
var G__11850 = count__11821_11845;
var G__11851 = (i__11822_11846 + (1));
seq__11819_11843 = G__11848;
chunk__11820_11844 = G__11849;
count__11821_11845 = G__11850;
i__11822_11846 = G__11851;
continue;
} else {
var temp__4388__auto___11852 = cljs.core.seq.call(null,seq__11819_11843);
if(temp__4388__auto___11852){
var seq__11819_11853__$1 = temp__4388__auto___11852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11819_11853__$1)){
var c__4423__auto___11854 = cljs.core.chunk_first.call(null,seq__11819_11853__$1);
var G__11855 = cljs.core.chunk_rest.call(null,seq__11819_11853__$1);
var G__11856 = c__4423__auto___11854;
var G__11857 = cljs.core.count.call(null,c__4423__auto___11854);
var G__11858 = (0);
seq__11819_11843 = G__11855;
chunk__11820_11844 = G__11856;
count__11821_11845 = G__11857;
i__11822_11846 = G__11858;
continue;
} else {
var n_11859 = cljs.core.first.call(null,seq__11819_11853__$1);
(result[n_11859] = fressian_cljs.reader.read_int.call(null,r));

var G__11860 = cljs.core.next.call(null,seq__11819_11853__$1);
var G__11861 = null;
var G__11862 = (0);
var G__11863 = (0);
seq__11819_11843 = G__11860;
chunk__11820_11844 = G__11861;
count__11821_11845 = G__11862;
i__11822_11846 = G__11863;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return fressian_cljs.reader.read_object.call(null,r);
}),(function (r,tag,component_count){
return cljs.core.re_pattern.call(null,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var buf = fressian_cljs.reader.read_object.call(null,r);
if(cljs.core._EQ_.call(null,buf.length,(16))){
} else {
throw [cljs.core.str("Invalid uuid buffer size: "),cljs.core.str(cljs.core.count.call(null,buf))].join('');
}

return fressian_cljs.fns.byte_array_to_uuid.call(null,buf);
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11823_11864 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11824_11865 = null;
var count__11825_11866 = (0);
var i__11826_11867 = (0);
while(true){
if((i__11826_11867 < count__11825_11866)){
var n_11868 = cljs.core._nth.call(null,chunk__11824_11865,i__11826_11867);
(result[n_11868] = fressian_cljs.reader.read_int.call(null,r));

var G__11869 = seq__11823_11864;
var G__11870 = chunk__11824_11865;
var G__11871 = count__11825_11866;
var G__11872 = (i__11826_11867 + (1));
seq__11823_11864 = G__11869;
chunk__11824_11865 = G__11870;
count__11825_11866 = G__11871;
i__11826_11867 = G__11872;
continue;
} else {
var temp__4388__auto___11873 = cljs.core.seq.call(null,seq__11823_11864);
if(temp__4388__auto___11873){
var seq__11823_11874__$1 = temp__4388__auto___11873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11823_11874__$1)){
var c__4423__auto___11875 = cljs.core.chunk_first.call(null,seq__11823_11874__$1);
var G__11876 = cljs.core.chunk_rest.call(null,seq__11823_11874__$1);
var G__11877 = c__4423__auto___11875;
var G__11878 = cljs.core.count.call(null,c__4423__auto___11875);
var G__11879 = (0);
seq__11823_11864 = G__11876;
chunk__11824_11865 = G__11877;
count__11825_11866 = G__11878;
i__11826_11867 = G__11879;
continue;
} else {
var n_11880 = cljs.core.first.call(null,seq__11823_11874__$1);
(result[n_11880] = fressian_cljs.reader.read_int.call(null,r));

var G__11881 = cljs.core.next.call(null,seq__11823_11874__$1);
var G__11882 = null;
var G__11883 = (0);
var G__11884 = (0);
seq__11823_11864 = G__11881;
chunk__11824_11865 = G__11882;
count__11825_11866 = G__11883;
i__11826_11867 = G__11884;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11827_11885 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11828_11886 = null;
var count__11829_11887 = (0);
var i__11830_11888 = (0);
while(true){
if((i__11830_11888 < count__11829_11887)){
var n_11889 = cljs.core._nth.call(null,chunk__11828_11886,i__11830_11888);
(result[n_11889] = fressian_cljs.reader.read_boolean.call(null,r));

var G__11890 = seq__11827_11885;
var G__11891 = chunk__11828_11886;
var G__11892 = count__11829_11887;
var G__11893 = (i__11830_11888 + (1));
seq__11827_11885 = G__11890;
chunk__11828_11886 = G__11891;
count__11829_11887 = G__11892;
i__11830_11888 = G__11893;
continue;
} else {
var temp__4388__auto___11894 = cljs.core.seq.call(null,seq__11827_11885);
if(temp__4388__auto___11894){
var seq__11827_11895__$1 = temp__4388__auto___11894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11827_11895__$1)){
var c__4423__auto___11896 = cljs.core.chunk_first.call(null,seq__11827_11895__$1);
var G__11897 = cljs.core.chunk_rest.call(null,seq__11827_11895__$1);
var G__11898 = c__4423__auto___11896;
var G__11899 = cljs.core.count.call(null,c__4423__auto___11896);
var G__11900 = (0);
seq__11827_11885 = G__11897;
chunk__11828_11886 = G__11898;
count__11829_11887 = G__11899;
i__11830_11888 = G__11900;
continue;
} else {
var n_11901 = cljs.core.first.call(null,seq__11827_11895__$1);
(result[n_11901] = fressian_cljs.reader.read_boolean.call(null,r));

var G__11902 = cljs.core.next.call(null,seq__11827_11895__$1);
var G__11903 = null;
var G__11904 = (0);
var G__11905 = (0);
seq__11827_11885 = G__11902;
chunk__11828_11886 = G__11903;
count__11829_11887 = G__11904;
i__11830_11888 = G__11905;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11831_11906 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11832_11907 = null;
var count__11833_11908 = (0);
var i__11834_11909 = (0);
while(true){
if((i__11834_11909 < count__11833_11908)){
var n_11910 = cljs.core._nth.call(null,chunk__11832_11907,i__11834_11909);
(result[n_11910] = fressian_cljs.reader.read_float.call(null,r));

var G__11911 = seq__11831_11906;
var G__11912 = chunk__11832_11907;
var G__11913 = count__11833_11908;
var G__11914 = (i__11834_11909 + (1));
seq__11831_11906 = G__11911;
chunk__11832_11907 = G__11912;
count__11833_11908 = G__11913;
i__11834_11909 = G__11914;
continue;
} else {
var temp__4388__auto___11915 = cljs.core.seq.call(null,seq__11831_11906);
if(temp__4388__auto___11915){
var seq__11831_11916__$1 = temp__4388__auto___11915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11831_11916__$1)){
var c__4423__auto___11917 = cljs.core.chunk_first.call(null,seq__11831_11916__$1);
var G__11918 = cljs.core.chunk_rest.call(null,seq__11831_11916__$1);
var G__11919 = c__4423__auto___11917;
var G__11920 = cljs.core.count.call(null,c__4423__auto___11917);
var G__11921 = (0);
seq__11831_11906 = G__11918;
chunk__11832_11907 = G__11919;
count__11833_11908 = G__11920;
i__11834_11909 = G__11921;
continue;
} else {
var n_11922 = cljs.core.first.call(null,seq__11831_11916__$1);
(result[n_11922] = fressian_cljs.reader.read_float.call(null,r));

var G__11923 = cljs.core.next.call(null,seq__11831_11916__$1);
var G__11924 = null;
var G__11925 = (0);
var G__11926 = (0);
seq__11831_11906 = G__11923;
chunk__11832_11907 = G__11924;
count__11833_11908 = G__11925;
i__11834_11909 = G__11926;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11835_11927 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11836_11928 = null;
var count__11837_11929 = (0);
var i__11838_11930 = (0);
while(true){
if((i__11838_11930 < count__11837_11929)){
var n_11931 = cljs.core._nth.call(null,chunk__11836_11928,i__11838_11930);
(result[n_11931] = fressian_cljs.reader.read_object.call(null,r));

var G__11932 = seq__11835_11927;
var G__11933 = chunk__11836_11928;
var G__11934 = count__11837_11929;
var G__11935 = (i__11838_11930 + (1));
seq__11835_11927 = G__11932;
chunk__11836_11928 = G__11933;
count__11837_11929 = G__11934;
i__11838_11930 = G__11935;
continue;
} else {
var temp__4388__auto___11936 = cljs.core.seq.call(null,seq__11835_11927);
if(temp__4388__auto___11936){
var seq__11835_11937__$1 = temp__4388__auto___11936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11835_11937__$1)){
var c__4423__auto___11938 = cljs.core.chunk_first.call(null,seq__11835_11937__$1);
var G__11939 = cljs.core.chunk_rest.call(null,seq__11835_11937__$1);
var G__11940 = c__4423__auto___11938;
var G__11941 = cljs.core.count.call(null,c__4423__auto___11938);
var G__11942 = (0);
seq__11835_11927 = G__11939;
chunk__11836_11928 = G__11940;
count__11837_11929 = G__11941;
i__11838_11930 = G__11942;
continue;
} else {
var n_11943 = cljs.core.first.call(null,seq__11835_11937__$1);
(result[n_11943] = fressian_cljs.reader.read_object.call(null,r));

var G__11944 = cljs.core.next.call(null,seq__11835_11937__$1);
var G__11945 = null;
var G__11946 = (0);
var G__11947 = (0);
seq__11835_11927 = G__11944;
chunk__11836_11928 = G__11945;
count__11837_11929 = G__11946;
i__11838_11930 = G__11947;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return cljs.core.set.call(null,fressian_cljs.reader.read_object.call(null,r));
}),(function (r,tag,component_count){
var size = fressian_cljs.reader.read_int.call(null,r);
var result = (new Array(size));
var seq__11839_11948 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),size));
var chunk__11840_11949 = null;
var count__11841_11950 = (0);
var i__11842_11951 = (0);
while(true){
if((i__11842_11951 < count__11841_11950)){
var n_11952 = cljs.core._nth.call(null,chunk__11840_11949,i__11842_11951);
(result[n_11952] = fressian_cljs.reader.read_double.call(null,r));

var G__11953 = seq__11839_11948;
var G__11954 = chunk__11840_11949;
var G__11955 = count__11841_11950;
var G__11956 = (i__11842_11951 + (1));
seq__11839_11948 = G__11953;
chunk__11840_11949 = G__11954;
count__11841_11950 = G__11955;
i__11842_11951 = G__11956;
continue;
} else {
var temp__4388__auto___11957 = cljs.core.seq.call(null,seq__11839_11948);
if(temp__4388__auto___11957){
var seq__11839_11958__$1 = temp__4388__auto___11957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11839_11958__$1)){
var c__4423__auto___11959 = cljs.core.chunk_first.call(null,seq__11839_11958__$1);
var G__11960 = cljs.core.chunk_rest.call(null,seq__11839_11958__$1);
var G__11961 = c__4423__auto___11959;
var G__11962 = cljs.core.count.call(null,c__4423__auto___11959);
var G__11963 = (0);
seq__11839_11948 = G__11960;
chunk__11840_11949 = G__11961;
count__11841_11950 = G__11962;
i__11842_11951 = G__11963;
continue;
} else {
var n_11964 = cljs.core.first.call(null,seq__11839_11958__$1);
(result[n_11964] = fressian_cljs.reader.read_double.call(null,r));

var G__11965 = cljs.core.next.call(null,seq__11839_11958__$1);
var G__11966 = null;
var G__11967 = (0);
var G__11968 = (0);
seq__11839_11948 = G__11965;
chunk__11840_11949 = G__11966;
count__11841_11950 = G__11967;
i__11842_11951 = G__11968;
continue;
}
} else {
}
}
break;
}

return result;
}),(function (r,tag,component_count){
return cljs.core.List.EMPTY;
})]);
fressian_cljs.reader.core_handlers = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list","list",765357683),(function (p1__11969_SHARP_){
return cljs.core.apply.call(null,cljs.core.list,p1__11969_SHARP_);
}),new cljs.core.Keyword(null,"bytes","bytes",1175866680),cljs.core.identity,new cljs.core.Keyword(null,"double","double",884886883),cljs.core.identity,new cljs.core.Keyword(null,"float","float",-1732389368),cljs.core.identity], null);
fressian_cljs.reader.under_construction = (new Object());
fressian_cljs.reader.read_and_cache_object = (function read_and_cache_object(reader){
var o = fressian_cljs.reader.read_object.call(null,reader);
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756)], null),cljs.core.conj,o);

return o;
});
fressian_cljs.reader.lookup_cache = (function lookup_cache(cache,index){
if((index < cljs.core.count.call(null,cache))){
var result = cljs.core.nth.call(null,cache,index);
if(cljs.core._EQ_.call(null,result,fressian_cljs.reader.under_construction)){
throw (new Error("Unable to resolve circular reference in cache"));
} else {
return result;
}
} else {
throw (new Error([cljs.core.str("Requested object beyond end of cache at "),cljs.core.str(index)].join('')));
}
});
fressian_cljs.reader.reset_caches = (function reset_caches(reader){
cljs.core.swap_BANG_.call(null,reader,cljs.core.assoc,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756),null);

return cljs.core.swap_BANG_.call(null,reader,cljs.core.assoc,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487),null);
});
fressian_cljs.reader.read_next_code = (function read_next_code(reader){
var code = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(1)));
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc);

return (code[(0)]);
});
fressian_cljs.reader.read_fully = (function read_fully(reader,length){
var buf = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),length));
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core._PLUS_,length);

return buf;
});
fressian_cljs.reader.read_raw_byte = (function read_raw_byte(reader){
var result = (function (){var G__11971 = (new Uint8Array(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(1)));
var G__11971__$1 = (((G__11971 == null))?null:(G__11971[(0)]));
return G__11971__$1;
})();
if((result < (0))){
throw (new Error("EOF"));
} else {
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc);

return result;
}
});
fressian_cljs.reader._LT__LT_ = (function _LT__LT_(x,y){
return (x * Math.pow((2),y));
});
fressian_cljs.reader.read_raw_int8 = (function read_raw_int8(reader){
return fressian_cljs.reader.read_raw_byte.call(null,reader);
});
fressian_cljs.reader.read_raw_int16 = (function read_raw_int16(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8)) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int24 = (function read_raw_int24(reader){
return ((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(16)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8))) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int32 = (function read_raw_int32(reader){
return (((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(24)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(16))) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(8))) + fressian_cljs.reader.read_raw_byte.call(null,reader));
});
fressian_cljs.reader.read_raw_int40 = (function read_raw_int40(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
});
fressian_cljs.reader.read_raw_int48 = (function read_raw_int48(reader){
return (fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
});
fressian_cljs.reader.read_raw_int64 = (function read_raw_int64(reader){
return ((fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(56)) + fressian_cljs.reader._LT__LT_.call(null,fressian_cljs.reader.read_raw_byte.call(null,reader),(48))) + fressian_cljs.reader.read_raw_int48.call(null,reader));
});
fressian_cljs.reader.read_raw_float = (function read_raw_float(reader){
var f32buf = (new Float32Array((1)));
var u8buf = (new Uint8Array(f32buf.buffer));
var n__4523__auto___11972 = (4);
var i_11973 = (0);
while(true){
if((i_11973 < n__4523__auto___11972)){
var b_11974 = fressian_cljs.reader.read_raw_byte.call(null,reader);
(u8buf[i_11973] = b_11974);

var G__11975 = (i_11973 + (1));
i_11973 = G__11975;
continue;
} else {
}
break;
}

return (f32buf[(0)]);
});
fressian_cljs.reader.read_raw_double = (function read_raw_double(reader){
var buf = (new ArrayBuffer((8)));
var h = fressian_cljs.reader.read_raw_int32.call(null,reader);
var l = fressian_cljs.reader.read_raw_int32.call(null,reader);
((new Int32Array(buf))[(0)] = h);

((new Int32Array(buf))[(1)] = l);

return ((new Float64Array(buf))[(0)]);
});
fressian_cljs.reader.internal_read_int32 = (function internal_read_int32(reader){
return fressian_cljs.reader.internal_read_int.call(null,reader);
});
fressian_cljs.reader.internal_read_double = (function internal_read_double(reader,code){
var pred__11979 = cljs.core._EQ_;
var expr__11980 = code;
if(cljs.core.truth_(pred__11979.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)),expr__11980))){
return fressian_cljs.reader.read_raw_double.call(null,reader);
} else {
if(cljs.core.truth_(pred__11979.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-0","double-0",-1217811359)),expr__11980))){
return 0.0;
} else {
if(cljs.core.truth_(pred__11979.call(null,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)),expr__11980))){
return 1.0;
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Number)){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"double",code,o)));
}
}
}
}
});
fressian_cljs.reader.read_boolean = (function read_boolean(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)))){
return true;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)))){
return false;
} else {
var res = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,Boolean,cljs.core.type.call(null,res))){
return res;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"boolean",code,res)));
}

}
}
});
fressian_cljs.reader.read_int = (function read_int(reader){
return fressian_cljs.reader.internal_read_int.call(null,reader);
});
fressian_cljs.reader.read_double = (function read_double(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
return fressian_cljs.reader.internal_read_double.call(null,reader,code);
});
fressian_cljs.reader.read_float = (function read_float(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)))){
return fressian_cljs.reader.read_raw_float.call(null,reader);
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,o),Number)){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"float",code,o)));
}

}
});
fressian_cljs.reader.read_int32 = (function read_int32(reader){
return fressian_cljs.reader.read_int.call(null,reader);
});
fressian_cljs.reader.read_count = (function read_count(reader){
return fressian_cljs.reader.read_int32.call(null,reader);
});
fressian_cljs.reader.internal_read_string = (function internal_read_string(reader,length){
var buf = fressian_cljs.reader.read_fully.call(null,reader,length);
return fressian_cljs.fns.read_utf8_chars.call(null,buf,(0),length);
});
fressian_cljs.reader.internal_read_chunked_string = (function internal_read_chunked_string(reader,length){
var buf = cljs.core.atom.call(null,fressian_cljs.reader.internal_read_string.call(null,reader,length));
var code = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + (7))))){
return fressian_cljs.reader.internal_read_string.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
return null;
}
}
}
break;
}
});
fressian_cljs.reader.internal_read_bytes = (function internal_read_bytes(reader,length){
return fressian_cljs.reader.read_fully.call(null,reader,length);
});
fressian_cljs.reader.internal_read_chunked_bytes = (function internal_read_chunked_bytes(reader){
return null;
});
fressian_cljs.reader.read_closed_list = (function read_closed_list(reader){
var objects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var code_11982 = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(!(cljs.core._EQ_.call(null,code_11982,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"end-collection","end-collection",1938577755))))){
cljs.core.swap_BANG_.call(null,objects,cljs.core.conj,fressian_cljs.reader.read.call(null,reader,code_11982));
} else {
var G__11983 = fressian_cljs.reader.read_next_code.call(null,reader);
code_11982 = G__11983;
continue;
}
break;
}

return cljs.core.deref.call(null,objects);
});
fressian_cljs.reader.read_open_list = (function read_open_list(reader){
var objects = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
try{var code_11986 = fressian_cljs.reader.read_next_code.call(null,reader);
while(true){
if(!(cljs.core._EQ_.call(null,code_11986,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"end-collection","end-collection",1938577755))))){
cljs.core.swap_BANG_.call(null,objects,cljs.core.conj,fressian_cljs.reader.read.call(null,reader,code_11986));
} else {
var G__11987 = fressian_cljs.reader.read_next_code.call(null,reader);
code_11986 = G__11987;
continue;
}
break;
}
}catch (e11985){if((e11985 instanceof Error)){
var ex_11988 = e11985;
} else {
throw e11985;

}
}
return cljs.core.deref.call(null,objects);
});
fressian_cljs.reader.read_objects = (function read_objects(reader,length){
var iter__4392__auto__ = (function iter__11993(s__11994){
return (new cljs.core.LazySeq(null,(function (){
var s__11994__$1 = s__11994;
while(true){
var temp__4388__auto__ = cljs.core.seq.call(null,s__11994__$1);
if(temp__4388__auto__){
var s__11994__$2 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11994__$2)){
var c__4390__auto__ = cljs.core.chunk_first.call(null,s__11994__$2);
var size__4391__auto__ = cljs.core.count.call(null,c__4390__auto__);
var b__11996 = cljs.core.chunk_buffer.call(null,size__4391__auto__);
if((function (){var i__11995 = (0);
while(true){
if((i__11995 < size__4391__auto__)){
var x = cljs.core._nth.call(null,c__4390__auto__,i__11995);
cljs.core.chunk_append.call(null,b__11996,fressian_cljs.reader.read_object.call(null,reader));

var G__11997 = (i__11995 + (1));
i__11995 = G__11997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11996),iter__11993.call(null,cljs.core.chunk_rest.call(null,s__11994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11996),null);
}
} else {
var x = cljs.core.first.call(null,s__11994__$2);
return cljs.core.cons.call(null,fressian_cljs.reader.read_object.call(null,reader),iter__11993.call(null,cljs.core.rest.call(null,s__11994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4392__auto__.call(null,cljs.core.range.call(null,(0),length));
});
fressian_cljs.reader.internal_read_list = (function internal_read_list(reader,length){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_objects.call(null,reader,length));
});
fressian_cljs.reader.handle_struct = (function handle_struct(reader,tag,fields){
var temp__4386__auto__ = (function (){var or__3636__auto__ = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,reader),new cljs.core.Keyword(null,"handlers","handlers",79528781)),tag);
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.get.call(null,fressian_cljs.reader.standard_extension_hadlers,tag);
}
})();
if(cljs.core.truth_(temp__4386__auto__)){
var h = temp__4386__auto__;
return h.call(null,reader,tag,fields);
} else {
return (new fressian_cljs.defs.TaggedObject(tag,fressian_cljs.reader.read_objects.call(null,reader,fields),null,null,null,null));
}
});
fressian_cljs.reader.validate_footer = (function validate_footer(reader,length,magic_from_stream){
if(cljs.core._EQ_.call(null,magic_from_stream,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)))){
} else {
throw (new Error(goog.string.format("Invalid footer magic, expected %d got %d",fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer-magic","footer-magic",-1426554286)),magic_from_stream)));
}

var length_from_stream_11998 = fressian_cljs.reader.read_raw_int32.call(null,reader);
if(cljs.core._EQ_.call(null,length,length_from_stream_11998)){
} else {
throw (new Error(goog.string.format("Invalid footer length, expected %d got %d",length,length_from_stream_11998)));
}

return fressian_cljs.reader.reset_caches.call(null,reader);
});
fressian_cljs.reader.read = (function read(reader,code){
if(cljs.core._EQ_.call(null,code,(255))){
return (-1);
} else {
if((((0) <= code)) && ((code <= (63)))){
return (code & (255));
} else {
if((((64) <= code)) && ((code <= (95)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944))),(8)) + fressian_cljs.reader.read_raw_int8.call(null,reader));
} else {
if((((96) <= code)) && ((code <= (111)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840))),(16)) + fressian_cljs.reader.read_raw_int16.call(null,reader));
} else {
if((((112) <= code)) && ((code <= (115)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965))),(24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
} else {
if((((116) <= code)) && ((code <= (119)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722))),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
} else {
if((((120) <= code)) && ((code <= (123)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066))),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
} else {
if((((124) <= code)) && ((code <= (127)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732))),(48)) + fressian_cljs.reader.read_raw_int48.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"put-priority-cache","put-priority-cache",-1626100040)))){
return fressian_cljs.reader.read_and_cache_object.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"get-priority-cache","get-priority-cache",409460466)))){
return fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),fressian_cljs.reader.read_int32.call(null,reader));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283)) + (31))))){
return fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"priority-cache-packed-start","priority-cache-packed-start",-733080283))));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714)) + (15))))){
var st = fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"priority-cache","priority-cache",-1046947756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct-cache-packed-start","struct-cache-packed-start",-1769478714))));
return fressian_cljs.reader.handle_struct.call(null,reader,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(st));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"map","map",1371690461)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"map",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"set","set",304602554)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"set",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"uuid",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"regex","regex",939488856)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"regex",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"uri",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bigint","bigint",-1710937017)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"bigint",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bigdec","bigdec",1019443956)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"bigdec",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"inst","inst",645962501)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"inst",(1));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"sym",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"key","key",-1516042587)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"key",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-array","int-array",-1181354911)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"int[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"long-array","long-array",-1422952337)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"long[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float-array","float-array",402506738)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"float[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"boolean-array","boolean-array",2014081856)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"boolean[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-array","double-array",-1383495801)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"double[]",(2));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"object-array","object-array",-1434096880)))){
return fressian_cljs.reader.handle_struct.call(null,reader,"Object[]",(2));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646)) + (7))))){
return fressian_cljs.reader.internal_read_bytes.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-packed-length-start","bytes-packed-length-start",1640199646))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes","bytes",1175866680)))){
return fressian_cljs.reader.internal_read_bytes.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"bytes-chunk","bytes-chunk",58155330)))){
return fressian_cljs.reader.internal_read_chunked_bytes.call(null,reader);
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400)) + (7))))){
return fressian_cljs.reader.internal_read_string.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-packed-length-start","string-packed-length-start",329881400))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)))){
return fressian_cljs.reader.internal_read_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"string-chunk","string-chunk",1505929923)))){
return fressian_cljs.reader.internal_read_chunked_string.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(((fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054)) <= code)) && ((code <= (fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054)) + (7))))){
return fressian_cljs.reader.internal_read_list.call(null,reader,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list-packed-length-start","list-packed-length-start",-170807054))));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"list","list",765357683)))){
return fressian_cljs.reader.internal_read_list.call(null,reader,fressian_cljs.reader.read_count.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"begin-closed-list","begin-closed-list",968601935)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_closed_list.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"begin-open-list","begin-open-list",-1218035346)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"list","list",765357683)).call(null,fressian_cljs.reader.read_open_list.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"true","true",-1114210334)))){
return true;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"false","false",1277713805)))){
return false;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double","double",884886883)),fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-1","double-1",1958675496)),fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"double-0","double-0",-1217811359))], true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [code], null)))){
return fressian_cljs.reader.internal_read_double.call(null,reader,code);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)))){
return fressian_cljs.reader.core_handlers.call(null,new cljs.core.Keyword(null,"float","float",-1732389368)).call(null,fressian_cljs.reader.read_raw_float.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)))){
return fressian_cljs.reader.read_raw_int64.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"null","null",-180137709)))){
return null;
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)))){
var length = (reader.call(null,new cljs.core.Keyword(null,"index","index",-1531685915)) - (1));
var magic_from_stream = ((code << (24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
fressian_cljs.reader.validate_footer.call(null,reader,length,magic_from_stream);

return fressian_cljs.reader.read_object.call(null,reader);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"structtype","structtype",112563241)))){
var tag = fressian_cljs.reader.read_object.call(null,reader);
var fields = fressian_cljs.reader.read_int32.call(null,reader);
cljs.core.swap_BANG_.call(null,reader,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487)], null),cljs.core.conj,(new fressian_cljs.defs.StructType(tag,fields,null,null,null)));

return fressian_cljs.reader.handle_struct.call(null,reader,tag,fields);
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"struct","struct",-1314558596)))){
var st = fressian_cljs.reader.lookup_cache.call(null,new cljs.core.Keyword(null,"struct-cache","struct-cache",-1873382487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader)),fressian_cljs.reader.read_int32.call(null,reader));
return fressian_cljs.reader.handle_struct.call(null,reader,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(st),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(st));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"reset-caches","reset-caches",1572788555)))){
fressian_cljs.reader.reset_caches.call(null,reader);

return fressian_cljs.reader.read_object.call(null,reader);
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"any",code)));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
fressian_cljs.reader.internal_read_int = (function internal_read_int(reader){
var code = fressian_cljs.reader.read_next_code.call(null,reader);
if(cljs.core._EQ_.call(null,code,(255))){
return (-1);
} else {
if((((0) <= code)) && ((code <= (63)))){
return (code & (255));
} else {
if((((64) <= code)) && ((code <= (95)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-2-zero","int-packed-2-zero",1071077944))),(8)) + fressian_cljs.reader.read_raw_int8.call(null,reader));
} else {
if((((96) <= code)) && ((code <= (111)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-3-zero","int-packed-3-zero",-1069270840))),(16)) + fressian_cljs.reader.read_raw_int16.call(null,reader));
} else {
if((((112) <= code)) && ((code <= (115)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-4-zero","int-packed-4-zero",1146756965))),(24)) + fressian_cljs.reader.read_raw_int24.call(null,reader));
} else {
if((((116) <= code)) && ((code <= (119)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-5-zero","int-packed-5-zero",103558722))),(32)) + fressian_cljs.reader.read_raw_int32.call(null,reader));
} else {
if((((120) <= code)) && ((code <= (123)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-6-zero","int-packed-6-zero",1172771066))),(40)) + fressian_cljs.reader.read_raw_int40.call(null,reader));
} else {
if((((124) <= code)) && ((code <= (127)))){
return (fressian_cljs.reader._LT__LT_.call(null,(code - fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int-packed-7-zero","int-packed-7-zero",-909757732))),(48)) + fressian_cljs.reader.read_raw_int48.call(null,reader));
} else {
if(cljs.core._EQ_.call(null,code,fressian_cljs.defs.codes.call(null,new cljs.core.Keyword(null,"int","int",-1741416922)))){
return fressian_cljs.reader.read_raw_int64.call(null,reader);
} else {
var o = fressian_cljs.reader.read.call(null,reader,code);
if(cljs.core._EQ_.call(null,Number,cljs.core.type.call(null,o))){
return o;
} else {
throw (new Error(fressian_cljs.fns.expected.call(null,"int64",code,o)));
}

}
}
}
}
}
}
}
}
}
});
fressian_cljs.reader.read_object = (function read_object(reader){
return fressian_cljs.reader.read.call(null,reader,fressian_cljs.reader.read_next_code.call(null,reader));
});

//# sourceMappingURL=reader.js.map?rel=1421619101709