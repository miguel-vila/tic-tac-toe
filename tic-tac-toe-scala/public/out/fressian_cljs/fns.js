// Compiled by ClojureScript 0.0-2496
goog.provide('fressian_cljs.fns');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('fressian_cljs.uuid');
fressian_cljs.fns.expected = (function() {
var expected = null;
var expected__2 = (function (expected__$1,ch){
throw goog.string.format("expected %s at %d",expected__$1,ch);
});
var expected__3 = (function (expected__$1,ch,got){
throw goog.string.format("expected %s at %d, got %s",expected__$1,ch,got);
});
expected = function(expected__$1,ch,got){
switch(arguments.length){
case 2:
return expected__2.call(this,expected__$1,ch);
case 3:
return expected__3.call(this,expected__$1,ch,got);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
expected.cljs$core$IFn$_invoke$arity$2 = expected__2;
expected.cljs$core$IFn$_invoke$arity$3 = expected__3;
return expected;
})()
;
fressian_cljs.fns.uuid_to_byte_array = (function uuid_to_byte_array(uuid){
return fressian_cljs.uuid.parse.call(null,uuid.uuid);
});
fressian_cljs.fns.create_array_from_typed = (function create_array_from_typed(array_buffer_view){
var arr = (new Array(array_buffer_view.length));
var n__4523__auto___11773 = cljs.core.count.call(null,arr);
var n_11774 = (0);
while(true){
if((n_11774 < n__4523__auto___11773)){
(arr[n_11774] = (array_buffer_view[n_11774]));

var G__11775 = (n_11774 + (1));
n_11774 = G__11775;
continue;
} else {
}
break;
}

return arr;
});
fressian_cljs.fns.byte_array_to_uuid = (function byte_array_to_uuid(bytes){
var b_array = (((bytes instanceof Uint8Array))?fressian_cljs.fns.create_array_from_typed.call(null,bytes):bytes);
return (new cljs.core.UUID(clojure.string.join.call(null,"-",fressian_cljs.uuid.unparse.call(null,b_array))));
});
fressian_cljs.fns.read_utf8_chars = (function read_utf8_chars(source,offset,length){
var buf = (new Array());
var pos_11776 = (0);
while(true){
var ch_11777 = ((source[pos_11776]) & (255));
var ch_GT__GT_4_11778 = (ch_11777 >> (4));
if((pos_11776 < length)){
if((((0) <= ch_GT__GT_4_11778)) && ((ch_GT__GT_4_11778 <= (7)))){
buf.push(ch_11777);

var G__11779 = (pos_11776 + (1));
pos_11776 = G__11779;
continue;
} else {
if((((12) <= ch_GT__GT_4_11778)) && ((ch_GT__GT_4_11778 <= (13)))){
var ch1_11780 = (source[(pos_11776 + (1))]);
buf.push((((ch_11777 & (31)) << (6)) | (ch1_11780 & (63))));

var G__11781 = (pos_11776 + (2));
pos_11776 = G__11781;
continue;
} else {
if(cljs.core._EQ_.call(null,ch_GT__GT_4_11778,(14))){
var ch1_11782 = (source[(pos_11776 + (1))]);
var ch2_11783 = (source[(pos_11776 + (2))]);
buf.push(((((ch_11777 & (15)) << (12)) | ((ch1_11782 & (63)) << (6))) | (ch2_11783 & (63))));

var G__11784 = (pos_11776 + (3));
pos_11776 = G__11784;
continue;
} else {
throw goog.string.format("Invalid UTF-8: %d",ch_11777);

}
}
}
} else {
}
break;
}

return String.fromCharCode.apply(null,buf);
});
fressian_cljs.fns.utf8_encoding_size = (function utf8_encoding_size(ch){
if((ch <= (127))){
return (1);
} else {
if((ch > (2047))){
return (2);
} else {
return (3);

}
}
});
fressian_cljs.fns.buffer_string_chunk_utf8 = (function buffer_string_chunk_utf8(s,start,buf){
var string_pos = start;
var buffer_pos = (0);
while(true){
if((string_pos < s.length)){
var ch = s.charCodeAt(string_pos);
var encoding_size = fressian_cljs.fns.utf8_encoding_size.call(null,ch);
if(((buffer_pos + encoding_size) <= buf.length)){
var G__11786_11787 = encoding_size;
switch (G__11786_11787) {
case (1):
(buf[buffer_pos] = ch);

break;
case (2):
(buf[buffer_pos] = ((192) | ((ch >> (6)) & (31))));

(buf[(buffer_pos + (1))] = ((128) | ((ch >> (0)) & (63))));

break;
case (3):
(buf[buffer_pos] = ((224) | ((ch >> (12)) & (15))));

(buf[(buffer_pos + (1))] = ((128) | ((ch >> (6)) & (63))));

(buf[(buffer_pos + (2))] = ((128) | ((ch >> (0)) & (63))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(encoding_size)].join('')));

}

var G__11789 = (string_pos + (1));
var G__11790 = (buffer_pos + encoding_size);
string_pos = G__11789;
buffer_pos = G__11790;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string_pos,buffer_pos], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [string_pos,buffer_pos], null);
}
break;
}
});

//# sourceMappingURL=fns.js.map?rel=1421619101169