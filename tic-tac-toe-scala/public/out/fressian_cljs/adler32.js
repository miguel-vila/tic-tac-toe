// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.adler32');
goog.require('cljs.core');
fressian_cljs.adler32._STAR_BASE_STAR_ = (65521);

fressian_cljs.adler32.Adler32Protocol = (function (){var obj11670 = {};
return obj11670;
})();

fressian_cljs.adler32.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (_,b){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2;
} else {
return and__3624__auto__;
}
})()){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2(_,b);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (fressian_cljs.adler32.update_BANG_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (fressian_cljs.adler32.update_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.update!",_);
}
}
})().call(null,_,b);
}
});
var update_BANG___4 = (function (_,bs,off,len){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4;
} else {
return and__3624__auto__;
}
})()){
return _.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4(_,bs,off,len);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (fressian_cljs.adler32.update_BANG_[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (fressian_cljs.adler32.update_BANG_["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.update!",_);
}
}
})().call(null,_,bs,off,len);
}
});
update_BANG_ = function(_,bs,off,len){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,_,bs);
case 4:
return update_BANG___4.call(this,_,bs,off,len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;

fressian_cljs.adler32.get_value = (function get_value(_){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1;
} else {
return and__3624__auto__;
}
})()){
return _.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1(_);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (fressian_cljs.adler32.get_value[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (fressian_cljs.adler32.get_value["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.get-value",_);
}
}
})().call(null,_);
}
});

fressian_cljs.adler32.reset = (function reset(_){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.fressian_cljs$adler32$Adler32Protocol$reset$arity$1;
} else {
return and__3624__auto__;
}
})()){
return _.fressian_cljs$adler32$Adler32Protocol$reset$arity$1(_);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (fressian_cljs.adler32.reset[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (fressian_cljs.adler32.reset["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Adler32Protocol.reset",_);
}
}
})().call(null,_);
}
});


/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
fressian_cljs.adler32.Adler32 = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fressian_cljs.adler32.Adler32.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4239__auto__,k__4240__auto__){
var self__ = this;
var this__4239__auto____$1 = this;
return cljs.core._lookup.call(null,this__4239__auto____$1,k__4240__auto__,null);
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4241__auto__,k11672,else__4242__auto__){
var self__ = this;
var this__4241__auto____$1 = this;
var G__11674 = (((k11672 instanceof cljs.core.Keyword))?k11672.fqn:null);
switch (G__11674) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11672,else__4242__auto__);

}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4253__auto__,writer__4254__auto__,opts__4255__auto__){
var self__ = this;
var this__4253__auto____$1 = this;
var pr_pair__4256__auto__ = ((function (this__4253__auto____$1){
return (function (keyval__4257__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,cljs.core.pr_writer,""," ","",opts__4255__auto__,keyval__4257__auto__);
});})(this__4253__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4254__auto__,pr_pair__4256__auto__,"#fressian-cljs.adler32.Adler32{",", ","}",opts__4255__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4237__auto__){
var self__ = this;
var this__4237__auto____$1 = this;
return self__.__meta;
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4233__auto__){
var self__ = this;
var this__4233__auto____$1 = this;
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4243__auto__){
var self__ = this;
var this__4243__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4234__auto__){
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

fressian_cljs.adler32.Adler32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4235__auto__,other__4236__auto__){
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

fressian_cljs.adler32.Adler32.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4248__auto__,k__4249__auto__){
var self__ = this;
var this__4248__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4249__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4248__auto____$1),self__.__meta),k__4249__auto__);
} else {
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4249__auto__)),null));
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4246__auto__,k__4247__auto__,G__11671){
var self__ = this;
var this__4246__auto____$1 = this;
var pred__11675 = cljs.core.keyword_identical_QMARK_;
var expr__11676 = k__4247__auto__;
if(cljs.core.truth_(pred__11675.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__11676))){
return (new fressian_cljs.adler32.Adler32(G__11671,self__.__meta,self__.__extmap,null));
} else {
return (new fressian_cljs.adler32.Adler32(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4247__auto__,G__11671),null));
}
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4251__auto__){
var self__ = this;
var this__4251__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4238__auto__,G__11671){
var self__ = this;
var this__4238__auto____$1 = this;
return (new fressian_cljs.adler32.Adler32(self__.value,G__11671,self__.__extmap,self__.__hash));
});

fressian_cljs.adler32.Adler32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4244__auto__,entry__4245__auto__){
var self__ = this;
var this__4244__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4245__auto__)){
return cljs.core._assoc.call(null,this__4244__auto____$1,cljs.core._nth.call(null,entry__4245__auto__,(0)),cljs.core._nth.call(null,entry__4245__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4244__auto____$1,entry__4245__auto__);
}
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$ = true;

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
var s1 = ((cljs.core.deref.call(null,self__.value) & (65535)) + (b & (255)));
var s2 = (((cljs.core.deref.call(null,self__.value) >> (16)) & (65535)) + s1);
return cljs.core.reset_BANG_.call(null,self__.value,((cljs.core.mod.call(null,s2,fressian_cljs.adler32._STAR_BASE_STAR_) << (16)) | cljs.core.mod.call(null,s1,fressian_cljs.adler32._STAR_BASE_STAR_)));
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$update_BANG_$arity$4 = (function (_,bs,off,len){
var self__ = this;
var ___$1 = this;
var seq__11678 = cljs.core.seq.call(null,cljs.core.range.call(null,off,(off + len)));
var chunk__11679 = null;
var count__11680 = (0);
var i__11681 = (0);
while(true){
if((i__11681 < count__11680)){
var i = cljs.core._nth.call(null,chunk__11679,i__11681);
fressian_cljs.adler32.update_BANG_.call(null,___$1,(bs[i]));

var G__11683 = seq__11678;
var G__11684 = chunk__11679;
var G__11685 = count__11680;
var G__11686 = (i__11681 + (1));
seq__11678 = G__11683;
chunk__11679 = G__11684;
count__11680 = G__11685;
i__11681 = G__11686;
continue;
} else {
var temp__4388__auto__ = cljs.core.seq.call(null,seq__11678);
if(temp__4388__auto__){
var seq__11678__$1 = temp__4388__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11678__$1)){
var c__4423__auto__ = cljs.core.chunk_first.call(null,seq__11678__$1);
var G__11687 = cljs.core.chunk_rest.call(null,seq__11678__$1);
var G__11688 = c__4423__auto__;
var G__11689 = cljs.core.count.call(null,c__4423__auto__);
var G__11690 = (0);
seq__11678 = G__11687;
chunk__11679 = G__11688;
count__11680 = G__11689;
i__11681 = G__11690;
continue;
} else {
var i = cljs.core.first.call(null,seq__11678__$1);
fressian_cljs.adler32.update_BANG_.call(null,___$1,(bs[i]));

var G__11691 = cljs.core.next.call(null,seq__11678__$1);
var G__11692 = null;
var G__11693 = (0);
var G__11694 = (0);
seq__11678 = G__11691;
chunk__11679 = G__11692;
count__11680 = G__11693;
i__11681 = G__11694;
continue;
}
} else {
return null;
}
}
break;
}
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$get_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.call(null,self__.value) & (4294967295));
});

fressian_cljs.adler32.Adler32.prototype.fressian_cljs$adler32$Adler32Protocol$reset$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.value,(1));
});

fressian_cljs.adler32.Adler32.cljs$lang$type = true;

fressian_cljs.adler32.Adler32.cljs$lang$ctorPrSeq = (function (this__4273__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"fressian-cljs.adler32/Adler32");
});

fressian_cljs.adler32.Adler32.cljs$lang$ctorPrWriter = (function (this__4273__auto__,writer__4274__auto__){
return cljs.core._write.call(null,writer__4274__auto__,"fressian-cljs.adler32/Adler32");
});

fressian_cljs.adler32.__GT_Adler32 = (function __GT_Adler32(value){
return (new fressian_cljs.adler32.Adler32(value,null,null,null));
});

fressian_cljs.adler32.map__GT_Adler32 = (function map__GT_Adler32(G__11673){
return (new fressian_cljs.adler32.Adler32(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__11673),null,cljs.core.dissoc.call(null,G__11673,new cljs.core.Keyword(null,"value","value",305978217)),null));
});

fressian_cljs.adler32.make_adler32 = (function make_adler32(){
return fressian_cljs.adler32.map__GT_Adler32.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.atom.call(null,(1))], null));
});

//# sourceMappingURL=adler32.js.map?rel=1421619100601