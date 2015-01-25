// Compiled by ClojureScript 0.0-2496
goog.provide('tic_tac_toe.utils');
goog.require('cljs.core');
tic_tac_toe.utils.map_map_values = (function map_map_values(f,m){

return cljs.core.reduce.call(null,(function (m2,p__5133){
var vec__5134 = p__5133;
var k = cljs.core.nth.call(null,vec__5134,(0),null);
var v = cljs.core.nth.call(null,vec__5134,(1),null);
return cljs.core.assoc.call(null,m2,k,f.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
tic_tac_toe.utils.with_class = (function with_class(default_class_name){

return (function() {
var G__5135 = null;
var G__5135__0 = (function (){
return {"className": default_class_name};
});
var G__5135__1 = (function (class_name){
return {"className": cljs.core.apply.call(null,cljs.core.str,class_name," ",default_class_name)};
});
G__5135 = function(class_name){
switch(arguments.length){
case 0:
return G__5135__0.call(this);
case 1:
return G__5135__1.call(this,class_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5135.cljs$core$IFn$_invoke$arity$0 = G__5135__0;
G__5135.cljs$core$IFn$_invoke$arity$1 = G__5135__1;
return G__5135;
})()
});
/**
* Returns a js object with a default class name of 'centered' and optionally other class name given by argument.
*/
tic_tac_toe.utils.centered = tic_tac_toe.utils.with_class.call(null,"centered");
/**
* Returns a js object with a default class name of 'centered-text' and optionally other class name given by argument.
*/
tic_tac_toe.utils.centered_text = tic_tac_toe.utils.with_class.call(null,"centered-text");

//# sourceMappingURL=utils.js.map?rel=1421516665981