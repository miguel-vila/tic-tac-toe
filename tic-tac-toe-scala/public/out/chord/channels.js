// Compiled by ClojureScript 0.0-2496
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.channels.read_from_ws_BANG_ = (function read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function write_to_ws_BANG_(ws,ch){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__){
return (function (){
var f__7011__auto__ = (function (){var switch__6995__auto__ = ((function (c__7010__auto__){
return (function (state_12040){
var state_val_12041 = (state_12040[(1)]);
if((state_val_12041 === (7))){
var inst_12036 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
var statearr_12042_12057 = state_12040__$1;
(statearr_12042_12057[(2)] = inst_12036);

(statearr_12042_12057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (6))){
var state_12040__$1 = state_12040;
var statearr_12043_12058 = state_12040__$1;
(statearr_12043_12058[(2)] = null);

(statearr_12043_12058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (5))){
var inst_12030 = (state_12040[(7)]);
var inst_12032 = ws.send(inst_12030);
var state_12040__$1 = (function (){var statearr_12044 = state_12040;
(statearr_12044[(8)] = inst_12032);

return statearr_12044;
})();
var statearr_12045_12059 = state_12040__$1;
(statearr_12045_12059[(2)] = null);

(statearr_12045_12059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (4))){
var inst_12030 = (state_12040[(7)]);
var inst_12030__$1 = (state_12040[(2)]);
var state_12040__$1 = (function (){var statearr_12046 = state_12040;
(statearr_12046[(7)] = inst_12030__$1);

return statearr_12046;
})();
if(cljs.core.truth_(inst_12030__$1)){
var statearr_12047_12060 = state_12040__$1;
(statearr_12047_12060[(1)] = (5));

} else {
var statearr_12048_12061 = state_12040__$1;
(statearr_12048_12061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12041 === (3))){
var inst_12038 = (state_12040[(2)]);
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12040__$1,inst_12038);
} else {
if((state_val_12041 === (2))){
var state_12040__$1 = state_12040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12040__$1,(4),ch);
} else {
if((state_val_12041 === (1))){
var state_12040__$1 = state_12040;
var statearr_12049_12062 = state_12040__$1;
(statearr_12049_12062[(2)] = null);

(statearr_12049_12062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7010__auto__))
;
return ((function (switch__6995__auto__,c__7010__auto__){
return (function() {
var state_machine__6996__auto__ = null;
var state_machine__6996__auto____0 = (function (){
var statearr_12053 = [null,null,null,null,null,null,null,null,null];
(statearr_12053[(0)] = state_machine__6996__auto__);

(statearr_12053[(1)] = (1));

return statearr_12053;
});
var state_machine__6996__auto____1 = (function (state_12040){
while(true){
var ret_value__6997__auto__ = (function (){try{while(true){
var result__6998__auto__ = switch__6995__auto__.call(null,state_12040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6998__auto__;
}
break;
}
}catch (e12054){if((e12054 instanceof Object)){
var ex__6999__auto__ = e12054;
var statearr_12055_12063 = state_12040;
(statearr_12055_12063[(5)] = ex__6999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12064 = state_12040;
state_12040 = G__12064;
continue;
} else {
return ret_value__6997__auto__;
}
break;
}
});
state_machine__6996__auto__ = function(state_12040){
switch(arguments.length){
case 0:
return state_machine__6996__auto____0.call(this);
case 1:
return state_machine__6996__auto____1.call(this,state_12040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6996__auto____0;
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6996__auto____1;
return state_machine__6996__auto__;
})()
;})(switch__6995__auto__,c__7010__auto__))
})();
var state__7012__auto__ = (function (){var statearr_12056 = f__7011__auto__.call(null);
(statearr_12056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_12056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__))
);

return c__7010__auto__;
});
/**
* @param {...*} var_args
*/
chord.channels.bidi_ch = (function() { 
var bidi_ch__delegate = function (read_ch,write_ch,p__12065){
var vec__12071 = p__12065;
var map__12072 = cljs.core.nth.call(null,vec__12071,(0),null);
var map__12072__$1 = ((cljs.core.seq_QMARK_.call(null,map__12072))?cljs.core.apply.call(null,cljs.core.hash_map,map__12072):map__12072);
var on_close = cljs.core.get.call(null,map__12072__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t12073 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.channels.t12073 = (function (on_close,map__12072,vec__12071,p__12065,write_ch,read_ch,bidi_ch,meta12074){
this.on_close = on_close;
this.map__12072 = map__12072;
this.vec__12071 = vec__12071;
this.p__12065 = p__12065;
this.write_ch = write_ch;
this.read_ch = read_ch;
this.bidi_ch = bidi_ch;
this.meta12074 = meta12074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.channels.t12073.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t12073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.t12073.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t12073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.t12073.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t12073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.t12073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (_12075){
var self__ = this;
var _12075__$1 = this;
return self__.meta12074;
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.t12073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (_12075,meta12074__$1){
var self__ = this;
var _12075__$1 = this;
return (new chord.channels.t12073(self__.on_close,self__.map__12072,self__.vec__12071,self__.p__12065,self__.write_ch,self__.read_ch,self__.bidi_ch,meta12074__$1));
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.t12073.cljs$lang$type = true;

chord.channels.t12073.cljs$lang$ctorStr = "chord.channels/t12073";

chord.channels.t12073.cljs$lang$ctorPrWriter = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function (this__4223__auto__,writer__4224__auto__,opt__4225__auto__){
return cljs.core._write.call(null,writer__4224__auto__,"chord.channels/t12073");
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

chord.channels.__GT_t12073 = ((function (vec__12071,map__12072,map__12072__$1,on_close){
return (function __GT_t12073(on_close__$1,map__12072__$2,vec__12071__$1,p__12065__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta12074){
return (new chord.channels.t12073(on_close__$1,map__12072__$2,vec__12071__$1,p__12065__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta12074));
});})(vec__12071,map__12072,map__12072__$1,on_close))
;

}

return (new chord.channels.t12073(on_close,map__12072__$1,vec__12071,p__12065,write_ch,read_ch,bidi_ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),22,new cljs.core.Keyword(null,"end-line","end-line",1837326455),45,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/mglvl/tic-tac-toe/tic-tac-toe-cljs/out/chord/channels.cljs"], null)));
};
var bidi_ch = function (read_ch,write_ch,var_args){
var p__12065 = null;
if (arguments.length > 2) {
  p__12065 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return bidi_ch__delegate.call(this,read_ch,write_ch,p__12065);};
bidi_ch.cljs$lang$maxFixedArity = 2;
bidi_ch.cljs$lang$applyTo = (function (arglist__12076){
var read_ch = cljs.core.first(arglist__12076);
arglist__12076 = cljs.core.next(arglist__12076);
var write_ch = cljs.core.first(arglist__12076);
var p__12065 = cljs.core.rest(arglist__12076);
return bidi_ch__delegate(read_ch,write_ch,p__12065);
});
bidi_ch.cljs$core$IFn$_invoke$arity$variadic = bidi_ch__delegate;
return bidi_ch;
})()
;

//# sourceMappingURL=channels.js.map?rel=1421619101896