// Compiled by ClojureScript 0.0-2496
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('fressian_cljs.core');
goog.require('cognitect.transit');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.core.async');

chord.format.ChordFormatter = (function (){var obj11315 = {};
return obj11315;
})();

chord.format.freeze = (function freeze(_,obj){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.chord$format$ChordFormatter$freeze$arity$2;
} else {
return and__3624__auto__;
}
})()){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (chord.format.freeze[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (chord.format.freeze["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
})().call(null,_,obj);
}
});

chord.format.thaw = (function thaw(_,s){
if((function (){var and__3624__auto__ = _;
if(and__3624__auto__){
return _.chord$format$ChordFormatter$thaw$arity$2;
} else {
return and__3624__auto__;
}
})()){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__4280__auto__ = (((_ == null))?null:_);
return (function (){var or__3636__auto__ = (chord.format.thaw[goog.typeOf(x__4280__auto__)]);
if(or__3636__auto__){
return or__3636__auto__;
} else {
var or__3636__auto____$1 = (chord.format.thaw["_"]);
if(or__3636__auto____$1){
return or__3636__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
})().call(null,_,s);
}
});

chord.format.formatter_STAR_ = (function (){var method_table__4533__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4534__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4535__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4536__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4537__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4537__auto__,method_table__4533__auto__,prefer_table__4534__auto__,method_cache__4535__auto__,cached_hierarchy__4536__auto__));
})();
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t11316 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11316 = (function (_,meta11317){
this._ = _;
this.meta11317 = meta11317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11316.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11316.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t11316.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t11316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11318){
var self__ = this;
var _11318__$1 = this;
return self__.meta11317;
});

chord.format.t11316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11318,meta11317__$1){
var self__ = this;
var _11318__$1 = this;
return (new chord.format.t11316(self__._,meta11317__$1));
});

chord.format.t11316.cljs$lang$type = true;

chord.format.t11316.cljs$lang$ctorStr = "chord.format/t11316";

chord.format.t11316.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11316");
});

chord.format.__GT_t11316 = (function __GT_t11316(___$1,meta11317){
return (new chord.format.t11316(___$1,meta11317));
});

}

return (new chord.format.t11316(_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),28,new cljs.core.Keyword(null,"end-line","end-line",1837326455),33,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t11319 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11319 = (function (_,meta11320){
this._ = _;
this.meta11320 = meta11320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11319.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11319.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t11319.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t11319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11321){
var self__ = this;
var _11321__$1 = this;
return self__.meta11320;
});

chord.format.t11319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11321,meta11320__$1){
var self__ = this;
var _11321__$1 = this;
return (new chord.format.t11319(self__._,meta11320__$1));
});

chord.format.t11319.cljs$lang$type = true;

chord.format.t11319.cljs$lang$ctorStr = "chord.format/t11319";

chord.format.t11319.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11319");
});

chord.format.__GT_t11319 = (function __GT_t11319(___$1,meta11320){
return (new chord.format.t11319(___$1,meta11320));
});

}

return (new chord.format.t11319(_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),43,new cljs.core.Keyword(null,"end-line","end-line",1837326455),43,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t11322 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11322 = (function (json_formatter,opts,meta11323){
this.json_formatter = json_formatter;
this.opts = opts;
this.meta11323 = meta11323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11322.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11322.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t11322.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t11322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_11324){
var self__ = this;
var _11324__$1 = this;
return self__.meta11323;
});})(json_formatter))
;

chord.format.t11322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_11324,meta11323__$1){
var self__ = this;
var _11324__$1 = this;
return (new chord.format.t11322(self__.json_formatter,self__.opts,meta11323__$1));
});})(json_formatter))
;

chord.format.t11322.cljs$lang$type = true;

chord.format.t11322.cljs$lang$ctorStr = "chord.format/t11322";

chord.format.t11322.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11322");
});})(json_formatter))
;

chord.format.__GT_t11322 = ((function (json_formatter){
return (function __GT_t11322(json_formatter__$1,opts__$1,meta11323){
return (new chord.format.t11322(json_formatter__$1,opts__$1,meta11323));
});})(json_formatter))
;

}

return (new chord.format.t11322(json_formatter,opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),52,new cljs.core.Keyword(null,"end-line","end-line",1837326455),52,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),47,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t11325 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11325 = (function (_,meta11326){
this._ = _;
this.meta11326 = meta11326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11325.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11325.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t11325.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t11325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11327){
var self__ = this;
var _11327__$1 = this;
return self__.meta11326;
});

chord.format.t11325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11327,meta11326__$1){
var self__ = this;
var _11327__$1 = this;
return (new chord.format.t11325(self__._,meta11326__$1));
});

chord.format.t11325.cljs$lang$type = true;

chord.format.t11325.cljs$lang$ctorStr = "chord.format/t11325";

chord.format.t11325.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11325");
});

chord.format.__GT_t11325 = (function __GT_t11325(___$1,meta11326){
return (new chord.format.t11325(___$1,meta11326));
});

}

return (new chord.format.t11325(_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),71,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),55,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"fressian","fressian",1554168117),(function (_){
if(typeof chord.format.t11328 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11328 = (function (_,meta11329){
this._ = _;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11328.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11328.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return fressian_cljs.core.write.call(null,obj);
});

chord.format.t11328.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return fressian_cljs.core.read.call(null,s);
});

chord.format.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11330){
var self__ = this;
var _11330__$1 = this;
return self__.meta11329;
});

chord.format.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11330,meta11329__$1){
var self__ = this;
var _11330__$1 = this;
return (new chord.format.t11328(self__._,meta11329__$1));
});

chord.format.t11328.cljs$lang$type = true;

chord.format.t11328.cljs$lang$ctorStr = "chord.format/t11328";

chord.format.t11328.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11328");
});

chord.format.__GT_t11328 = (function __GT_t11328(___$1,meta11329){
return (new chord.format.t11328(___$1,meta11329));
});

}

return (new chord.format.t11328(_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),26,new cljs.core.Keyword(null,"end-line","end-line",1837326455),80,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),74,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t11331 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t11331 = (function (_,meta11332){
this._ = _;
this.meta11332 = meta11332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.format.t11331.prototype.chord$format$ChordFormatter$ = true;

chord.format.t11331.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t11331.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t11331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11333){
var self__ = this;
var _11333__$1 = this;
return self__.meta11332;
});

chord.format.t11331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11333,meta11332__$1){
var self__ = this;
var _11333__$1 = this;
return (new chord.format.t11331(self__._,meta11332__$1));
});

chord.format.t11331.cljs$lang$type = true;

chord.format.t11331.cljs$lang$ctorStr = "chord.format/t11331";

chord.format.t11331.cljs$lang$ctorPrWriter = (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.format/t11331");
});

chord.format.__GT_t11331 = (function __GT_t11331(___$1,meta11332){
return (new chord.format.t11331(___$1,meta11332));
});

}

return (new chord.format.t11331(_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),10,new cljs.core.Keyword(null,"end-line","end-line",1837326455),88,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/format.cljs"], null)));
}));
chord.format.formatter = (function formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function wrap_format(p__11335,p__11336){
var map__11342 = p__11335;
var map__11342__$1 = ((cljs.core.seq_QMARK_.call(null,map__11342))?cljs.core.apply.call(null,cljs.core.hash_map,map__11342):map__11342);
var write_ch = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch = cljs.core.get.call(null,map__11342__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var map__11343 = p__11336;
var map__11343__$1 = ((cljs.core.seq_QMARK_.call(null,map__11343))?cljs.core.apply.call(null,cljs.core.hash_map,map__11343):map__11343);
var opts = map__11343__$1;
var format = cljs.core.get.call(null,map__11343__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__11342,map__11342__$1,write_ch,read_ch,map__11343,map__11343__$1,opts,format){
return (function (p__11344){
var map__11345 = p__11344;
var map__11345__$1 = ((cljs.core.seq_QMARK_.call(null,map__11345))?cljs.core.apply.call(null,cljs.core.hash_map,map__11345):map__11345);
var message = cljs.core.get.call(null,map__11345__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
}catch (e11346){if((e11346 instanceof Error)){
var e = e11346;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e11346;

}
}});})(fmtr,map__11342,map__11342__$1,write_ch,read_ch,map__11343,map__11343__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__11342,map__11342__$1,write_ch,read_ch,map__11343,map__11343__$1,opts,format){
return (function (p1__11334_SHARP_){
return chord.format.freeze.call(null,fmtr,p1__11334_SHARP_);
});})(fmtr,map__11342,map__11342__$1,write_ch,read_ch,map__11343,map__11343__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map?rel=1421619098960