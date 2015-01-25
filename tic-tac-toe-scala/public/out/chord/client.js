// Compiled by ClojureScript 0.0-2496
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('chord.format');
goog.require('chord.channels');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
chord.client.on_close = (function() { 
var on_close__delegate = function (ws,read_ch,write_ch,p__10895){
var vec__10968 = p__10895;
var err_meta_channel = cljs.core.nth.call(null,vec__10968,(0),null);
return ws.onclose = ((function (vec__10968,err_meta_channel){
return (function (ev){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,vec__10968,err_meta_channel){
return (function (){
var f__7011__auto__ = (function (){var switch__6995__auto__ = ((function (c__7010__auto__,vec__10968,err_meta_channel){
return (function (state_11007){
var state_val_11008 = (state_11007[(1)]);
if((state_val_11008 === (7))){
var inst_11003 = (state_11007[(2)]);
var inst_11004 = cljs.core.async.close_BANG_.call(null,read_ch);
var inst_11005 = cljs.core.async.close_BANG_.call(null,write_ch);
var state_11007__$1 = (function (){var statearr_11009 = state_11007;
(statearr_11009[(7)] = inst_11003);

(statearr_11009[(8)] = inst_11004);

return statearr_11009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11007__$1,inst_11005);
} else {
if((state_val_11008 === (1))){
var inst_10969 = (state_11007[(9)]);
var inst_10969__$1 = ws.error_seen;
var state_11007__$1 = (function (){var statearr_11010 = state_11007;
(statearr_11010[(9)] = inst_10969__$1);

return statearr_11010;
})();
if(cljs.core.truth_(inst_10969__$1)){
var statearr_11011_11040 = state_11007__$1;
(statearr_11011_11040[(1)] = (2));

} else {
var statearr_11012_11041 = state_11007__$1;
(statearr_11012_11041[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (4))){
var inst_10975 = (state_11007[(2)]);
var state_11007__$1 = state_11007;
if(cljs.core.truth_(inst_10975)){
var statearr_11013_11042 = state_11007__$1;
(statearr_11013_11042[(1)] = (5));

} else {
var statearr_11014_11043 = state_11007__$1;
(statearr_11014_11043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (6))){
var state_11007__$1 = state_11007;
var statearr_11015_11044 = state_11007__$1;
(statearr_11015_11044[(2)] = null);

(statearr_11015_11044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (3))){
var inst_10972 = ev.wasClean;
var inst_10973 = cljs.core.not.call(null,inst_10972);
var state_11007__$1 = state_11007;
var statearr_11016_11045 = state_11007__$1;
(statearr_11016_11045[(2)] = inst_10973);

(statearr_11016_11045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (12))){
var inst_11000 = (state_11007[(2)]);
var state_11007__$1 = state_11007;
var statearr_11017_11046 = state_11007__$1;
(statearr_11017_11046[(2)] = inst_11000);

(statearr_11017_11046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (2))){
var inst_10969 = (state_11007[(9)]);
var state_11007__$1 = state_11007;
var statearr_11018_11047 = state_11007__$1;
(statearr_11018_11047[(2)] = inst_10969);

(statearr_11018_11047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (11))){
var inst_10995 = (state_11007[(2)]);
var state_11007__$1 = state_11007;
var statearr_11019_11048 = state_11007__$1;
(statearr_11019_11048[(2)] = inst_10995);

(statearr_11019_11048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (9))){
var state_11007__$1 = state_11007;
var statearr_11020_11049 = state_11007__$1;
(statearr_11020_11049[(2)] = null);

(statearr_11020_11049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (5))){
var inst_10977 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];
var inst_10978 = ev.reason;
var inst_10979 = ev.code;
var inst_10980 = ev.wasClean;
var inst_10981 = [inst_10978,inst_10979,inst_10980];
var inst_10982 = cljs.core.PersistentHashMap.fromArrays(inst_10977,inst_10981);
var state_11007__$1 = (function (){var statearr_11021 = state_11007;
(statearr_11021[(10)] = inst_10982);

return statearr_11021;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_11022_11050 = state_11007__$1;
(statearr_11022_11050[(1)] = (8));

} else {
var statearr_11023_11051 = state_11007__$1;
(statearr_11023_11051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11008 === (10))){
var inst_10982 = (state_11007[(10)]);
var inst_10998 = (state_11007[(2)]);
var state_11007__$1 = (function (){var statearr_11024 = state_11007;
(statearr_11024[(11)] = inst_10998);

return statearr_11024;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11007__$1,(12),read_ch,inst_10982);
} else {
if((state_val_11008 === (8))){
var inst_10982 = (state_11007[(10)]);
var inst_10969 = (state_11007[(9)]);
var inst_10987 = cljs.core.async.chan.call(null,(1));
var inst_10988 = (function (){var c__7010__auto____$1 = inst_10987;
var error_desc = inst_10982;
var error_seen_QMARK_ = inst_10969;
return ((function (c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel){
return (function (){
var f__7011__auto__ = (function (){var switch__6995__auto__ = ((function (c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel){
return (function (state_10985){
var state_val_10986 = (state_10985[(1)]);
if((state_val_10986 === (1))){
var state_10985__$1 = state_10985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10985__$1,error_desc);
} else {
return null;
}
});})(c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel))
;
return ((function (switch__6995__auto__,c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel){
return (function() {
var state_machine__6996__auto__ = null;
var state_machine__6996__auto____0 = (function (){
var statearr_11028 = [null,null,null,null,null,null,null];
(statearr_11028[(0)] = state_machine__6996__auto__);

(statearr_11028[(1)] = (1));

return statearr_11028;
});
var state_machine__6996__auto____1 = (function (state_10985){
while(true){
var ret_value__6997__auto__ = (function (){try{while(true){
var result__6998__auto__ = switch__6995__auto__.call(null,state_10985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6998__auto__;
}
break;
}
}catch (e11029){if((e11029 instanceof Object)){
var ex__6999__auto__ = e11029;
var statearr_11030_11052 = state_10985;
(statearr_11030_11052[(5)] = ex__6999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11053 = state_10985;
state_10985 = G__11053;
continue;
} else {
return ret_value__6997__auto__;
}
break;
}
});
state_machine__6996__auto__ = function(state_10985){
switch(arguments.length){
case 0:
return state_machine__6996__auto____0.call(this);
case 1:
return state_machine__6996__auto____1.call(this,state_10985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6996__auto____0;
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6996__auto____1;
return state_machine__6996__auto__;
})()
;})(switch__6995__auto__,c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel))
})();
var state__7012__auto__ = (function (){var statearr_11031 = f__7011__auto__.call(null);
(statearr_11031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto____$1);

return statearr_11031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});
;})(c__7010__auto____$1,error_desc,error_seen_QMARK_,inst_10982,inst_10969,inst_10987,state_val_11008,c__7010__auto__,vec__10968,err_meta_channel))
})();
var inst_10989 = cljs.core.async.impl.dispatch.run.call(null,inst_10988);
var inst_10991 = cljs.core.async.chan.call(null);
var inst_10992 = cljs.core.async.close_BANG_.call(null,inst_10991);
var inst_10993 = chord.channels.bidi_ch.call(null,inst_10987,inst_10991);
var state_11007__$1 = (function (){var statearr_11032 = state_11007;
(statearr_11032[(12)] = inst_10992);

(statearr_11032[(13)] = inst_10989);

return statearr_11032;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11007__$1,(11),err_meta_channel,inst_10993);
} else {
return null;
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
});})(c__7010__auto__,vec__10968,err_meta_channel))
;
return ((function (switch__6995__auto__,c__7010__auto__,vec__10968,err_meta_channel){
return (function() {
var state_machine__6996__auto__ = null;
var state_machine__6996__auto____0 = (function (){
var statearr_11036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11036[(0)] = state_machine__6996__auto__);

(statearr_11036[(1)] = (1));

return statearr_11036;
});
var state_machine__6996__auto____1 = (function (state_11007){
while(true){
var ret_value__6997__auto__ = (function (){try{while(true){
var result__6998__auto__ = switch__6995__auto__.call(null,state_11007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6998__auto__;
}
break;
}
}catch (e11037){if((e11037 instanceof Object)){
var ex__6999__auto__ = e11037;
var statearr_11038_11054 = state_11007;
(statearr_11038_11054[(5)] = ex__6999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11055 = state_11007;
state_11007 = G__11055;
continue;
} else {
return ret_value__6997__auto__;
}
break;
}
});
state_machine__6996__auto__ = function(state_11007){
switch(arguments.length){
case 0:
return state_machine__6996__auto____0.call(this);
case 1:
return state_machine__6996__auto____1.call(this,state_11007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6996__auto____0;
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6996__auto____1;
return state_machine__6996__auto__;
})()
;})(switch__6995__auto__,c__7010__auto__,vec__10968,err_meta_channel))
})();
var state__7012__auto__ = (function (){var statearr_11039 = f__7011__auto__.call(null);
(statearr_11039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_11039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,vec__10968,err_meta_channel))
);

return c__7010__auto__;
});})(vec__10968,err_meta_channel))
;
};
var on_close = function (ws,read_ch,write_ch,var_args){
var p__10895 = null;
if (arguments.length > 3) {
  p__10895 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return on_close__delegate.call(this,ws,read_ch,write_ch,p__10895);};
on_close.cljs$lang$maxFixedArity = 3;
on_close.cljs$lang$applyTo = (function (arglist__11056){
var ws = cljs.core.first(arglist__11056);
arglist__11056 = cljs.core.next(arglist__11056);
var read_ch = cljs.core.first(arglist__11056);
arglist__11056 = cljs.core.next(arglist__11056);
var write_ch = cljs.core.first(arglist__11056);
var p__10895 = cljs.core.rest(arglist__11056);
return on_close__delegate(ws,read_ch,write_ch,p__10895);
});
on_close.cljs$core$IFn$_invoke$arity$variadic = on_close__delegate;
return on_close;
})()
;
chord.client.make_open_ch = (function make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.call(null);
chord.client.on_close.call(null,ws,read_ch,write_ch,ch);

ws.onopen = ((function (ch){
return (function (){
var c__7010__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto__,ch){
return (function (){
var f__7011__auto__ = (function (){var switch__6995__auto__ = ((function (c__7010__auto__,ch){
return (function (state_11075){
var state_val_11076 = (state_11075[(1)]);
if((state_val_11076 === (2))){
var inst_11072 = (state_11075[(2)]);
var inst_11073 = cljs.core.async.close_BANG_.call(null,ch);
var state_11075__$1 = (function (){var statearr_11077 = state_11075;
(statearr_11077[(7)] = inst_11072);

return statearr_11077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11075__$1,inst_11073);
} else {
if((state_val_11076 === (1))){
var state_11075__$1 = state_11075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11075__$1,(2),ch,v);
} else {
return null;
}
}
});})(c__7010__auto__,ch))
;
return ((function (switch__6995__auto__,c__7010__auto__,ch){
return (function() {
var state_machine__6996__auto__ = null;
var state_machine__6996__auto____0 = (function (){
var statearr_11081 = [null,null,null,null,null,null,null,null];
(statearr_11081[(0)] = state_machine__6996__auto__);

(statearr_11081[(1)] = (1));

return statearr_11081;
});
var state_machine__6996__auto____1 = (function (state_11075){
while(true){
var ret_value__6997__auto__ = (function (){try{while(true){
var result__6998__auto__ = switch__6995__auto__.call(null,state_11075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6998__auto__;
}
break;
}
}catch (e11082){if((e11082 instanceof Object)){
var ex__6999__auto__ = e11082;
var statearr_11083_11085 = state_11075;
(statearr_11083_11085[(5)] = ex__6999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11086 = state_11075;
state_11075 = G__11086;
continue;
} else {
return ret_value__6997__auto__;
}
break;
}
});
state_machine__6996__auto__ = function(state_11075){
switch(arguments.length){
case 0:
return state_machine__6996__auto____0.call(this);
case 1:
return state_machine__6996__auto____1.call(this,state_11075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6996__auto____0;
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6996__auto____1;
return state_machine__6996__auto__;
})()
;})(switch__6995__auto__,c__7010__auto__,ch))
})();
var state__7012__auto__ = (function (){var statearr_11084 = f__7011__auto__.call(null);
(statearr_11084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto__);

return statearr_11084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto__,ch))
);

return c__7010__auto__;
});})(ch))
;

return ch;
});
chord.client.close_event__GT_maybe_error = (function close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* opts             - (optional) map to configure reading/writing channels
* :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
* :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
* :format        - (optional) data format to use on the channel, (at the moment)
* either :edn (default), :json, :json-kw or :str.
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__11089){
var vec__11189 = p__11089;
var map__11190 = cljs.core.nth.call(null,vec__11189,(0),null);
var map__11190__$1 = ((cljs.core.seq_QMARK_.call(null,map__11190))?cljs.core.apply.call(null,cljs.core.hash_map,map__11190):map__11190);
var opts = map__11190__$1;
var format = cljs.core.get.call(null,map__11190__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_ch = cljs.core.get.call(null,map__11190__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch = cljs.core.get.call(null,map__11190__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var web_socket = (new WebSocket(ws_url));
var map__11191 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__3636__auto__ = read_ch;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__3636__auto__ = write_ch;
if(cljs.core.truth_(or__3636__auto__)){
return or__3636__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__11191__$1 = ((cljs.core.seq_QMARK_.call(null,map__11191))?cljs.core.apply.call(null,cljs.core.hash_map,map__11191):map__11191);
var write_ch__$1 = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var read_ch__$1 = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function (p1__11087_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__11087_SHARP_);
});})(web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
;

web_socket.onclose = ((function (web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function (p1__11088_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__11088_SHARP_);
});})(web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function (){
return web_socket.close();
});})(web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__7010__auto___11288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function (){
var f__7011__auto__ = (function (){var switch__6995__auto__ = ((function (c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function (state_11251){
var state_val_11252 = (state_11251[(1)]);
if((state_val_11252 === (7))){
var inst_11247 = (state_11251[(2)]);
var state_11251__$1 = state_11251;
var statearr_11253_11289 = state_11251__$1;
(statearr_11253_11289[(2)] = inst_11247);

(statearr_11253_11289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (20))){
var state_11251__$1 = state_11251;
var statearr_11254_11290 = state_11251__$1;
(statearr_11254_11290[(2)] = null);

(statearr_11254_11290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (1))){
var inst_11192 = false;
var state_11251__$1 = (function (){var statearr_11255 = state_11251;
(statearr_11255[(7)] = inst_11192);

return statearr_11255;
})();
var statearr_11256_11291 = state_11251__$1;
(statearr_11256_11291[(2)] = null);

(statearr_11256_11291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (4))){
var inst_11203 = (state_11251[(8)]);
var inst_11205 = (state_11251[(9)]);
var inst_11203__$1 = (state_11251[(2)]);
var inst_11204 = cljs.core.nth.call(null,inst_11203__$1,(0),null);
var inst_11205__$1 = cljs.core.nth.call(null,inst_11203__$1,(1),null);
var inst_11206 = cljs.core._EQ_.call(null,inst_11205__$1,open_ch);
var state_11251__$1 = (function (){var statearr_11257 = state_11251;
(statearr_11257[(8)] = inst_11203__$1);

(statearr_11257[(9)] = inst_11205__$1);

(statearr_11257[(10)] = inst_11204);

return statearr_11257;
})();
if(inst_11206){
var statearr_11258_11292 = state_11251__$1;
(statearr_11258_11292[(1)] = (5));

} else {
var statearr_11259_11293 = state_11251__$1;
(statearr_11259_11293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (15))){
var inst_11232 = (state_11251[(2)]);
var state_11251__$1 = state_11251;
var statearr_11260_11294 = state_11251__$1;
(statearr_11260_11294[(2)] = inst_11232);

(statearr_11260_11294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (21))){
var inst_11243 = (state_11251[(2)]);
var state_11251__$1 = state_11251;
var statearr_11261_11295 = state_11251__$1;
(statearr_11261_11295[(2)] = inst_11243);

(statearr_11261_11295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (13))){
var state_11251__$1 = state_11251;
var statearr_11262_11296 = state_11251__$1;
(statearr_11262_11296[(2)] = null);

(statearr_11262_11296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (6))){
var inst_11205 = (state_11251[(9)]);
var inst_11218 = cljs.core._EQ_.call(null,inst_11205,close_ch);
var state_11251__$1 = state_11251;
if(inst_11218){
var statearr_11263_11297 = state_11251__$1;
(statearr_11263_11297[(1)] = (9));

} else {
var statearr_11264_11298 = state_11251__$1;
(statearr_11264_11298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (17))){
var state_11251__$1 = state_11251;
var statearr_11265_11299 = state_11251__$1;
(statearr_11265_11299[(2)] = initial_ch);

(statearr_11265_11299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (3))){
var inst_11249 = (state_11251[(2)]);
var state_11251__$1 = state_11251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11251__$1,inst_11249);
} else {
if((state_val_11252 === (12))){
var inst_11192 = (state_11251[(7)]);
var state_11251__$1 = state_11251;
if(cljs.core.truth_(inst_11192)){
var statearr_11266_11300 = state_11251__$1;
(statearr_11266_11300[(1)] = (16));

} else {
var statearr_11267_11301 = state_11251__$1;
(statearr_11267_11301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (2))){
var inst_11199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11200 = [open_ch,close_ch];
var inst_11201 = (new cljs.core.PersistentVector(null,2,(5),inst_11199,inst_11200,null));
var state_11251__$1 = state_11251;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11251__$1,(4),inst_11201);
} else {
if((state_val_11252 === (19))){
var inst_11204 = (state_11251[(10)]);
var state_11251__$1 = state_11251;
var statearr_11268_11302 = state_11251__$1;
(statearr_11268_11302[(2)] = inst_11204);

(statearr_11268_11302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (11))){
var inst_11245 = (state_11251[(2)]);
var state_11251__$1 = state_11251;
var statearr_11269_11303 = state_11251__$1;
(statearr_11269_11303[(2)] = inst_11245);

(statearr_11269_11303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (9))){
var inst_11203 = (state_11251[(8)]);
var inst_11222 = (state_11251[(11)]);
var inst_11221 = cljs.core.nth.call(null,inst_11203,(0),null);
var inst_11222__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_11221);
var state_11251__$1 = (function (){var statearr_11270 = state_11251;
(statearr_11270[(11)] = inst_11222__$1);

return statearr_11270;
})();
if(cljs.core.truth_(inst_11222__$1)){
var statearr_11271_11304 = state_11251__$1;
(statearr_11271_11304[(1)] = (12));

} else {
var statearr_11272_11305 = state_11251__$1;
(statearr_11272_11305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (5))){
var inst_11203 = (state_11251[(8)]);
var inst_11209 = cljs.core.nth.call(null,inst_11203,(0),null);
var inst_11210 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_11211 = [ws_chan];
var inst_11212 = cljs.core.PersistentHashMap.fromArrays(inst_11210,inst_11211);
var state_11251__$1 = (function (){var statearr_11273 = state_11251;
(statearr_11273[(12)] = inst_11209);

return statearr_11273;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11251__$1,(8),initial_ch,inst_11212);
} else {
if((state_val_11252 === (14))){
var inst_11235 = (state_11251[(2)]);
var inst_11236 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_11237 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_11251__$1 = (function (){var statearr_11274 = state_11251;
(statearr_11274[(13)] = inst_11235);

(statearr_11274[(14)] = inst_11236);

return statearr_11274;
})();
var statearr_11275_11306 = state_11251__$1;
(statearr_11275_11306[(2)] = inst_11237);

(statearr_11275_11306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (16))){
var state_11251__$1 = state_11251;
var statearr_11276_11307 = state_11251__$1;
(statearr_11276_11307[(2)] = read_ch__$1);

(statearr_11276_11307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (10))){
var inst_11205 = (state_11251[(9)]);
var inst_11239 = cljs.core._EQ_.call(null,inst_11205,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_11251__$1 = state_11251;
if(inst_11239){
var statearr_11277_11308 = state_11251__$1;
(statearr_11277_11308[(1)] = (19));

} else {
var statearr_11278_11309 = state_11251__$1;
(statearr_11278_11309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11252 === (18))){
var inst_11222 = (state_11251[(11)]);
var inst_11227 = (state_11251[(2)]);
var inst_11228 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_11229 = [inst_11222];
var inst_11230 = cljs.core.PersistentHashMap.fromArrays(inst_11228,inst_11229);
var state_11251__$1 = state_11251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11251__$1,(15),inst_11227,inst_11230);
} else {
if((state_val_11252 === (8))){
var inst_11214 = (state_11251[(2)]);
var inst_11215 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_11192 = true;
var state_11251__$1 = (function (){var statearr_11279 = state_11251;
(statearr_11279[(7)] = inst_11192);

(statearr_11279[(15)] = inst_11215);

(statearr_11279[(16)] = inst_11214);

return statearr_11279;
})();
var statearr_11280_11310 = state_11251__$1;
(statearr_11280_11310[(2)] = null);

(statearr_11280_11310[(1)] = (2));


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
});})(c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
;
return ((function (switch__6995__auto__,c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch){
return (function() {
var state_machine__6996__auto__ = null;
var state_machine__6996__auto____0 = (function (){
var statearr_11284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11284[(0)] = state_machine__6996__auto__);

(statearr_11284[(1)] = (1));

return statearr_11284;
});
var state_machine__6996__auto____1 = (function (state_11251){
while(true){
var ret_value__6997__auto__ = (function (){try{while(true){
var result__6998__auto__ = switch__6995__auto__.call(null,state_11251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6998__auto__;
}
break;
}
}catch (e11285){if((e11285 instanceof Object)){
var ex__6999__auto__ = e11285;
var statearr_11286_11311 = state_11251;
(statearr_11286_11311[(5)] = ex__6999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11312 = state_11251;
state_11251 = G__11312;
continue;
} else {
return ret_value__6997__auto__;
}
break;
}
});
state_machine__6996__auto__ = function(state_11251){
switch(arguments.length){
case 0:
return state_machine__6996__auto____0.call(this);
case 1:
return state_machine__6996__auto____1.call(this,state_11251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6996__auto____0;
state_machine__6996__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6996__auto____1;
return state_machine__6996__auto__;
})()
;})(switch__6995__auto__,c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
})();
var state__7012__auto__ = (function (){var statearr_11287 = f__7011__auto__.call(null);
(statearr_11287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7010__auto___11288);

return statearr_11287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7012__auto__);
});})(c__7010__auto___11288,ws_chan,initial_ch,web_socket,map__11191,map__11191__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11189,map__11190,map__11190__$1,opts,format,write_ch,read_ch))
);


return initial_ch;
};
var ws_ch = function (ws_url,var_args){
var p__11089 = null;
if (arguments.length > 1) {
  p__11089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return ws_ch__delegate.call(this,ws_url,p__11089);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__11313){
var ws_url = cljs.core.first(arglist__11313);
var p__11089 = cljs.core.rest(arglist__11313);
return ws_ch__delegate(ws_url,p__11089);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;

//# sourceMappingURL=client.js.map?rel=1421619098737