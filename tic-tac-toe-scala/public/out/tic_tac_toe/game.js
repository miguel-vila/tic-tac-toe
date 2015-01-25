// Compiled by ClojureScript 0.0-2496
goog.provide('tic_tac_toe.game');
goog.require('cljs.core');
goog.require('tic_tac_toe.utils');
/**
* Valid array of players.
*/
tic_tac_toe.game.valid_players = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O"], null);
tic_tac_toe.game.create_game = (function create_game(){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tiles","tiles",178505240),cljs.core.mapv.call(null,cljs.core.vec,cljs.core.map_indexed.call(null,(function (i,r){
return cljs.core.map_indexed.call(null,(function (j,m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j);
}),r);
}),cljs.core.repeat.call(null,(3),cljs.core.repeat.call(null,(3),cljs.core.PersistentArrayMap.EMPTY)))),new cljs.core.Keyword(null,"plays","plays",-1373778553),cljs.core.get.call(null,tic_tac_toe.game.valid_players,cljs.core.rand_int.call(null,(2)))], null);
});
tic_tac_toe.game.somebody_can_win_in_arr_QMARK_ = (function somebody_can_win_in_arr_QMARK_(arr){

var marks = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345),arr);
var marks_size = cljs.core.count.call(null,marks);
return ((marks_size <= (1))) || ((cljs.core._EQ_.call(null,marks_size,(2))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.filter.call(null,((function (marks,marks_size){
return (function (p1__5127_SHARP_){
return cljs.core.contains_QMARK_.call(null,marks,p1__5127_SHARP_);
});})(marks,marks_size))
,tic_tac_toe.game.valid_players)),(1))));
});
tic_tac_toe.game.same_mark_QMARK_ = (function same_mark_QMARK_(arr){

return cljs.core.first.call(null,cljs.core.filter.call(null,(function (mark){
if(cljs.core.every_QMARK_.call(null,(function (p1__5128_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(p1__5128_SHARP_),mark);
}),arr)){
return mark;
} else {
return false;
}
}),tic_tac_toe.game.valid_players));
});
tic_tac_toe.game.get_mark = (function get_mark(tiles,x,y){

return cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"mark","mark",-373816345)], null));
});
tic_tac_toe.game.get_NW_SE_diag = (function get_NW_SE_diag(tiles){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], null);
});
tic_tac_toe.game.has_same_mark_in_NW_SE_diag_QMARK_ = (function has_same_mark_in_NW_SE_diag_QMARK_(tiles){

var diag = tic_tac_toe.game.get_NW_SE_diag.call(null,tiles);
var mark = tic_tac_toe.game.same_mark_QMARK_.call(null,diag);
if(cljs.core.truth_(mark)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner","winner",714604679),mark,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"NW-SE","NW-SE",-1413224837)], null)], null);
} else {
return null;
}
});
tic_tac_toe.game.somebody_can_win_in_NW_SE_diag_QMARK_ = (function somebody_can_win_in_NW_SE_diag_QMARK_(tiles){

return tic_tac_toe.game.somebody_can_win_in_arr_QMARK_.call(null,tic_tac_toe.game.get_NW_SE_diag.call(null,tiles));
});
tic_tac_toe.game.get_NE_SW_diag = (function get_NE_SW_diag(tiles){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], null);
});
tic_tac_toe.game.has_same_mark_in_NE_SW_diag_QMARK_ = (function has_same_mark_in_NE_SW_diag_QMARK_(tiles){

var diag = tic_tac_toe.game.get_NE_SW_diag.call(null,tiles);
var mark = tic_tac_toe.game.same_mark_QMARK_.call(null,diag);
if(cljs.core.truth_(mark)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner","winner",714604679),mark,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"NE-SW","NE-SW",1897734620)], null)], null);
} else {
return null;
}
});
tic_tac_toe.game.somebody_can_win_in_NE_SW_diag_QMARK_ = (function somebody_can_win_in_NE_SW_diag_QMARK_(tiles){

return tic_tac_toe.game.somebody_can_win_in_arr_QMARK_.call(null,tic_tac_toe.game.get_NE_SW_diag.call(null,tiles));
});
tic_tac_toe.game.get_tiles_in_d = (function get_tiles_in_d(d,tiles){

return cljs.core.group_by.call(null,d,cljs.core.apply.call(null,cljs.core.concat,tiles));
});
tic_tac_toe.game.has_same_mark_in_d_QMARK_ = (function has_same_mark_in_d_QMARK_(d,tiles){

return cljs.core.reduce_kv.call(null,(function (acc,k,v){
if(cljs.core.truth_(v)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner","winner",714604679),v,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"i","i",-1386841315),k], null)], null);
} else {
return acc;
}
}),null,tic_tac_toe.utils.map_map_values.call(null,tic_tac_toe.game.same_mark_QMARK_,tic_tac_toe.game.get_tiles_in_d.call(null,d,tiles)));
});
tic_tac_toe.game.somebody_can_win_in_d_QMARK_ = (function somebody_can_win_in_d_QMARK_(d,tiles){

return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,tic_tac_toe.game.somebody_can_win_in_arr_QMARK_,cljs.core.vals.call(null,tic_tac_toe.game.get_tiles_in_d.call(null,d,tiles))));
});
/**
* Returns the position and the mark/player that has won by marking a whole row.
*/
tic_tac_toe.game.there_is_marked_row_QMARK_ = cljs.core.partial.call(null,tic_tac_toe.game.has_same_mark_in_d_QMARK_,new cljs.core.Keyword(null,"x","x",2099068185));
/**
* Returns true if a player can still win by marking a whole row.
*/
tic_tac_toe.game.somebody_can_win_in_the_rows_QMARK_ = cljs.core.partial.call(null,tic_tac_toe.game.somebody_can_win_in_d_QMARK_,new cljs.core.Keyword(null,"x","x",2099068185));
/**
* Returns the position and the mark/player that has won by marking a whole column.
*/
tic_tac_toe.game.there_is_marked_column_QMARK_ = cljs.core.partial.call(null,tic_tac_toe.game.has_same_mark_in_d_QMARK_,new cljs.core.Keyword(null,"y","y",-1757859776));
/**
* Returns true if a player can still win by marking a whole column.
*/
tic_tac_toe.game.somebody_can_win_in_the_columns_QMARK_ = cljs.core.partial.call(null,tic_tac_toe.game.somebody_can_win_in_d_QMARK_,new cljs.core.Keyword(null,"y","y",-1757859776));
/**
* Returns the position and the mark/player that wins the game or nil if there is no such mark/player.
*/
tic_tac_toe.game.somebody_wins_QMARK_ = cljs.core.some_fn.call(null,tic_tac_toe.game.there_is_marked_row_QMARK_,tic_tac_toe.game.there_is_marked_column_QMARK_,tic_tac_toe.game.has_same_mark_in_NW_SE_diag_QMARK_,tic_tac_toe.game.has_same_mark_in_NE_SW_diag_QMARK_);
/**
* Returns true if some player can still win by filling a row/column/diagonal.
* This method may return false positives due to only taking into accounts dimensions independently.
*/
tic_tac_toe.game.somebody_can_win_in_the_future_QMARK_ = cljs.core.some_fn.call(null,tic_tac_toe.game.somebody_can_win_in_the_rows_QMARK_,tic_tac_toe.game.somebody_can_win_in_the_columns_QMARK_,tic_tac_toe.game.somebody_can_win_in_NW_SE_diag_QMARK_,tic_tac_toe.game.somebody_can_win_in_NE_SW_diag_QMARK_);
tic_tac_toe.game.next_player = (function next_player(game){

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"plays","plays",-1373778553).cljs$core$IFn$_invoke$arity$1(game),"X")){
return "O";
} else {
return "X";
}
});
tic_tac_toe.game.put_mark = (function put_mark(mark,tiles,x,y){

if(cljs.core.truth_(cljs.core.get_in.call(null,tiles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"mark","mark",-373816345)], null)))){
return tiles;
} else {
return cljs.core.assoc_in.call(null,tiles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,new cljs.core.Keyword(null,"mark","mark",-373816345)], null),mark);
}
});
tic_tac_toe.game.play = (function play(mark,game,x,y){

if(cljs.core.truth_(tic_tac_toe.game.get_mark.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(game),x,y))){
return game;
} else {
var new_tiles = tic_tac_toe.game.put_mark.call(null,mark,cljs.core.get.call(null,game,new cljs.core.Keyword(null,"tiles","tiles",178505240)),x,y);
var map__5130 = tic_tac_toe.game.somebody_wins_QMARK_.call(null,new_tiles);
var map__5130__$1 = ((cljs.core.seq_QMARK_.call(null,map__5130))?cljs.core.apply.call(null,cljs.core.hash_map,map__5130):map__5130);
var position = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var winner = cljs.core.get.call(null,map__5130__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
if(cljs.core.truth_(winner)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"winner","winner",714604679),winner,new cljs.core.Keyword(null,"winner-position","winner-position",-1831351679),position,new cljs.core.Keyword(null,"tiles","tiles",178505240),new_tiles], null);
} else {
if(cljs.core.truth_(tic_tac_toe.game.somebody_can_win_in_the_future_QMARK_.call(null,new_tiles))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plays","plays",-1373778553),tic_tac_toe.game.next_player.call(null,game),new cljs.core.Keyword(null,"tiles","tiles",178505240),new_tiles], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw?","draw?",1765298547),true,new cljs.core.Keyword(null,"tiles","tiles",178505240),new_tiles], null);

}
}
}
});

//# sourceMappingURL=game.js.map?rel=1421516665877