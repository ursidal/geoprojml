(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var starter = (function (exports) {
'use strict';

var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;


/*  Not a pure module */

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  }
  return result;
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}


/* No side effect */

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  }
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}


/* No side effect */

function __(tag, block) {
  block.tag = tag;
  return block;
}


/* No side effect */

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              }
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  }
}


/* No side effect */

/* stdin Not a pure module */

/* No side effect */

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);


/* imul Not a pure module */

/* repeat Not a pure module */

/* two_ptr_32_dbl Not a pure module */

/* float_of_string Not a pure module */

function caml_create_string(len) {
  if (len < 0) {
    throw [
          invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    }
    return s;
  }
}


/* No side effect */

var id = [0];

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}


/* No side effect */

/* not_implemented Not a pure module */

/* No side effect */

var Exit = create("Pervasives.Exit");

var min_int = -2147483648;

function string_of_int(param) {
  return "" + param;
}

var max_int = 2147483647;


/* No side effect */

function rev_append(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (l1) {
      _l2 = /* :: */[
        l1[0],
        l2
      ];
      _l1 = l1[1];
      continue ;
      
    } else {
      return l2;
    }
  }
}

function rev(l) {
  return rev_append(l, /* [] */0);
}

function map(f, param) {
  if (param) {
    var r = _1(f, param[0]);
    return /* :: */[
            r,
            map(f, param[1])
          ];
  } else {
    return /* [] */0;
  }
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      _1(f, param[0]);
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function fold_left(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (l) {
      _l = l[1];
      _accu = _2(f, accu, l[0]);
      continue ;
      
    } else {
      return accu;
    }
  }
}

function fold_right(f, l, accu) {
  if (l) {
    return _2(f, l[0], fold_right(f, l[1], accu));
  } else {
    return accu;
  }
}

function fold_left2(f, _accu, _l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    var accu = _accu;
    if (l1) {
      if (l2) {
        _l2 = l2[1];
        _l1 = l1[1];
        _accu = _3(f, accu, l1[0], l2[0]);
        continue ;
        
      } else {
        throw [
              invalid_argument,
              "List.fold_left2"
            ];
      }
    } else if (l2) {
      throw [
            invalid_argument,
            "List.fold_left2"
          ];
    } else {
      return accu;
    }
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function polyfills() {
  ((
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
  }())
  ));
  ((
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  ));
  return /* () */0;
}


/* No side effect */

/* No side effect */

/* No side effect */

function concat$1(sep, l) {
  if (l) {
    var hd$$1 = l[0];
    var num = [0];
    var len = [0];
    iter((function (s) {
            num[0] = num[0] + 1 | 0;
            len[0] = len[0] + s.length | 0;
            return /* () */0;
          }), l);
    var r = caml_create_string(len[0] + imul(sep.length, num[0] - 1 | 0) | 0);
    caml_blit_string(hd$$1, 0, r, 0, hd$$1.length);
    var pos = [hd$$1.length];
    iter((function (s) {
            caml_blit_string(sep, 0, r, pos[0], sep.length);
            pos[0] = pos[0] + sep.length | 0;
            caml_blit_string(s, 0, r, pos[0], s.length);
            pos[0] = pos[0] + s.length | 0;
            return /* () */0;
          }), l[1]);
    return bytes_to_string(r);
  } else {
    return "";
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function setStyle(n, key, value) {
  n.style[key] = value;
  return /* () */0;
}

function setStyleProperty(n, $staropt$star, key, value) {
  var priority = $staropt$star ? $staropt$star[0] : /* false */0;
  var style = n.style;
  var match = style.setProperty;
  if (match !== undefined) {
    return style.setProperty(key, value, priority ? "important" : null);
  } else {
    return setStyle(n, key, value);
  }
}

function insertBefore(n, child, refNode) {
  return n.insertBefore(child, refNode);
}

function setAttributeNsOptional(n, namespace, key, value) {
  if (namespace === "") {
    return n.setAttribute(key, value);
  } else {
    return n.setAttributeNS(namespace, key, value);
  }
}

function removeAttributeNsOptional(n, namespace, key) {
  if (namespace === "") {
    return n.removeAttribute(key);
  } else {
    return n.removeAttributeNS(namespace, key);
  }
}

function addEventListener(n, typ, listener, options) {
  return n.addEventListener(typ, listener, options);
}

function removeEventListener(n, typ, listener, options) {
  return n.removeEventListener(typ, listener, options);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function createElementNsOptional(namespace, tagName) {
  if (namespace === "") {
    return document.createElement(tagName);
  } else {
    return document.createElementNS(namespace, tagName);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var noNode = /* CommentNode */__(0, [""]);

function fullnode(namespace, tagName, key, unique, props, vdoms) {
  return /* Node */__(2, [
            namespace,
            tagName,
            key,
            unique,
            props,
            vdoms
          ]);
}

function onCB(name, key, cb) {
  return /* Event */__(3, [
            name,
            /* EventHandlerCallback */__(0, [
                key,
                cb
              ]),
            [/* None */0]
          ]);
}

function onMsg(name, msg) {
  return /* Event */__(3, [
            name,
            /* EventHandlerMsg */__(1, [msg]),
            [/* None */0]
          ]);
}

function renderToHtmlString(_param) {
  while(true) {
    var param = _param;
    switch (param.tag | 0) {
      case 0 : 
          return "<!-- " + (param[0] + " -->");
      case 1 : 
          return param[0];
      case 2 : 
          var tagName = param[1];
          var namespace = param[0];
          return concat$1("", /* :: */[
                      "<",
                      /* :: */[
                        namespace,
                        /* :: */[
                          namespace === "" ? "" : ":",
                          /* :: */[
                            tagName,
                            /* :: */[
                              concat$1("", map((function (p) {
                                          var param = p;
                                          if (typeof param === "number") {
                                            return "";
                                          } else {
                                            switch (param.tag | 0) {
                                              case 0 : 
                                                  return concat$1("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 1 : 
                                                  return concat$1("", /* :: */[
                                                              " ",
                                                              /* :: */[
                                                                param[1],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[2],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 2 : 
                                                  return concat$1("", /* :: */[
                                                              " data-",
                                                              /* :: */[
                                                                param[0],
                                                                /* :: */[
                                                                  "=\"",
                                                                  /* :: */[
                                                                    param[1],
                                                                    /* :: */[
                                                                      "\"",
                                                                      /* [] */0
                                                                    ]
                                                                  ]
                                                                ]
                                                              ]
                                                            ]);
                                              case 3 : 
                                                  return "";
                                              case 4 : 
                                                  return concat$1("", /* :: */[
                                                              " style=\"",
                                                              /* :: */[
                                                                concat$1(";", map((function (param) {
                                                                            return concat$1("", /* :: */[
                                                                                        param[0],
                                                                                        /* :: */[
                                                                                          ":",
                                                                                          /* :: */[
                                                                                            param[1],
                                                                                            /* :: */[
                                                                                              ";",
                                                                                              /* [] */0
                                                                                            ]
                                                                                          ]
                                                                                        ]
                                                                                      ]);
                                                                          }), param[0])),
                                                                /* :: */[
                                                                  "\"",
                                                                  /* [] */0
                                                                ]
                                                              ]
                                                            ]);
                                              
                                            }
                                          }
                                        }), param[4])),
                              /* :: */[
                                ">",
                                /* :: */[
                                  concat$1("", map(renderToHtmlString, param[5])),
                                  /* :: */[
                                    "</",
                                    /* :: */[
                                      tagName,
                                      /* :: */[
                                        ">",
                                        /* [] */0
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]);
      case 3 : 
          _param = _1(param[1], /* () */0);
          continue ;
          case 4 : 
          _param = param[1];
          continue ;
          
    }
  }
}

function eventHandler(callbacks, cb) {
  return (function (ev) {
      var match = _1(cb[0], ev);
      if (match) {
        return _1(callbacks[0][/* enqueue */0], match[0]);
      } else {
        return /* () */0;
      }
    });
}

function eventHandler_GetCB(param) {
  if (param.tag) {
    var msg = param[0];
    return (function () {
        return /* Some */[msg];
      });
  } else {
    return param[1];
  }
}

function compareEventHandlerTypes(left, param) {
  if (param.tag) {
    if (!left.tag || !caml_equal(param[0], left[0])) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  } else if (!left.tag && param[0] === left[0]) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function eventHandler_Register(callbacks, elem, name, handlerType) {
  var cb = [eventHandler_GetCB(handlerType)];
  var handler = eventHandler(callbacks, cb);
  addEventListener(elem, name, handler, /* false */0);
  return /* Some */[/* record */[
            /* handler */handler,
            /* cb */cb
          ]];
}

function eventHandler_Unregister(elem, name, param) {
  if (param) {
    removeEventListener(elem, name, param[0][/* handler */0], /* false */0);
    return /* None */0;
  } else {
    return /* None */0;
  }
}

function eventHandler_Mutate(callbacks, elem, oldName, newName, oldHandlerType, newHandlerType, oldCache, newCache) {
  var match = oldCache[0];
  if (match) {
    if (oldName === newName) {
      newCache[0] = oldCache[0];
      if (compareEventHandlerTypes(oldHandlerType, newHandlerType)) {
        return /* () */0;
      } else {
        var cb = eventHandler_GetCB(newHandlerType);
        match[0][/* cb */1][0] = cb;
        return /* () */0;
      }
    } else {
      oldCache[0] = eventHandler_Unregister(elem, oldName, oldCache[0]);
      newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
      return /* () */0;
    }
  } else {
    newCache[0] = eventHandler_Register(callbacks, elem, newName, newHandlerType);
    return /* () */0;
  }
}

function patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, _, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = param[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, param[0], param[1], param[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Add Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Add Data Unhandled"
              ];
      case 3 : 
          param[2][0] = eventHandler_Register(callbacks, elem, param[0], param[1]);
          return /* () */0;
      case 4 : 
          return fold_left((function (_, param) {
                        return setStyleProperty(elem, /* None */0, param[0], param[1]);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_Remove(_, elem, _$1, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          elem[param[0]] = undefined;
          return /* () */0;
      case 1 : 
          return removeAttributeNsOptional(elem, param[0], param[1]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Remove Data Unhandled",
                param[0],
                param[1]
              ]);
          throw [
                failure,
                "TODO:  Remove Data Unhandled"
              ];
      case 3 : 
          var cache = param[2];
          cache[0] = eventHandler_Unregister(elem, param[0], cache[0]);
          return /* () */0;
      case 4 : 
          return fold_left((function (_, param) {
                        return setStyleProperty(elem, /* None */0, param[0], null);
                      }), /* () */0, param[0]);
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, oldProp, newProp) {
  patchVNodesOnElems_PropertiesApply_Remove(callbacks, elem, idx, oldProp);
  patchVNodesOnElems_PropertiesApply_Add(callbacks, elem, idx, newProp);
  return /* () */0;
}

function patchVNodesOnElems_PropertiesApply_Mutate(_, elem, _$1, oldProp, _newProp) {
  if (typeof _newProp === "number") {
    throw [
          failure,
          "This should never be called as all entries through NoProp are gated."
        ];
  } else {
    switch (_newProp.tag | 0) {
      case 0 : 
          elem[_newProp[0]] = _newProp[1];
          return /* () */0;
      case 1 : 
          return setAttributeNsOptional(elem, _newProp[0], _newProp[1], _newProp[2]);
      case 2 : 
          console.log(/* tuple */[
                "TODO:  Mutate Data Unhandled",
                _newProp[0],
                _newProp[1]
              ]);
          throw [
                failure,
                "TODO:  Mutate Data Unhandled"
              ];
      case 3 : 
          throw [
                failure,
                "This will never be called because it is gated"
              ];
      case 4 : 
          if (typeof oldProp === "number") {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          } else if (oldProp.tag === 4) {
            return fold_left2((function (_, param, param$1) {
                          var nv = param$1[1];
                          var nk = param$1[0];
                          var ok = param[0];
                          if (ok === nk) {
                            if (param[1] === nv) {
                              return /* () */0;
                            } else {
                              return setStyleProperty(elem, /* None */0, nk, nv);
                            }
                          } else {
                            setStyleProperty(elem, /* None */0, ok, null);
                            return setStyleProperty(elem, /* None */0, nk, nv);
                          }
                        }), /* () */0, oldProp[0], _newProp[0]);
          } else {
            throw [
                  failure,
                  "Passed a non-Style to a new Style as a Mutations while the old Style is not actually a style!"
                ];
          }
          break;
      
    }
  }
}

function patchVNodesOnElems_PropertiesApply(callbacks, elem, _idx, _oldProperties, _newProperties) {
  while(true) {
    var newProperties = _newProperties;
    var oldProperties = _oldProperties;
    var idx = _idx;
    if (oldProperties) {
      var _oldProp = oldProperties[0];
      var exit = 0;
      if (newProperties) {
        if (typeof _oldProp === "number") {
          if (typeof newProperties[0] === "number") {
            _newProperties = newProperties[1];
            _oldProperties = oldProperties[1];
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            exit = 1;
          }
        } else {
          switch (_oldProp.tag | 0) {
            case 0 : 
                var newProp = newProperties[0];
                if (typeof newProp === "number") {
                  exit = 1;
                } else if (newProp.tag) {
                  exit = 1;
                } else {
                  if (!(_oldProp[0] === newProp[0] && _oldProp[1] === newProp[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                }
                break;
            case 1 : 
                var newProp$1 = newProperties[0];
                if (typeof newProp$1 === "number") {
                  exit = 1;
                } else if (newProp$1.tag === 1) {
                  if (!(_oldProp[0] === newProp$1[0] && _oldProp[1] === newProp$1[1] && _oldProp[2] === newProp$1[2])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$1);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 2 : 
                var newProp$2 = newProperties[0];
                if (typeof newProp$2 === "number") {
                  exit = 1;
                } else if (newProp$2.tag === 2) {
                  if (!(_oldProp[0] === newProp$2[0] && _oldProp[1] === newProp$2[1])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$2);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 3 : 
                var _newProp = newProperties[0];
                if (typeof _newProp === "number") {
                  exit = 1;
                } else if (_newProp.tag === 3) {
                  eventHandler_Mutate(callbacks, elem, _oldProp[0], _newProp[0], _oldProp[1], _newProp[1], _oldProp[2], _newProp[2]);
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            case 4 : 
                var newProp$3 = newProperties[0];
                if (typeof newProp$3 === "number") {
                  exit = 1;
                } else if (newProp$3.tag === 4) {
                  if (!caml_equal(_oldProp[0], newProp$3[0])) {
                    patchVNodesOnElems_PropertiesApply_Mutate(callbacks, elem, idx, _oldProp, newProp$3);
                  }
                  _newProperties = newProperties[1];
                  _oldProperties = oldProperties[1];
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  exit = 1;
                }
                break;
            
          }
        }
      } else {
        return /* false */0;
      }
      if (exit === 1) {
        patchVNodesOnElems_PropertiesApply_RemoveAdd(callbacks, elem, idx, _oldProp, newProperties[0]);
        _newProperties = newProperties[1];
        _oldProperties = oldProperties[1];
        _idx = idx + 1 | 0;
        continue ;
        
      }
      
    } else if (newProperties) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function patchVNodesOnElems_Properties(callbacks, elem, oldProperties, newProperties) {
  return patchVNodesOnElems_PropertiesApply(callbacks, elem, 0, oldProperties, newProperties);
}

function patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, param) {
  if (param.tag === 2) {
    var newProperties = param[4];
    var oldChild = caml_array_get(elems, idx);
    var newChild = createElementNsOptional(param[0], param[1]);
    var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                return /* NoProp */0;
              }), newProperties), newProperties);
    if (match !== 0) {
      var childChildren = newChild.childNodes;
      patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
      insertBefore(elem, newChild, oldChild);
      elem.removeChild(oldChild);
      return /* () */0;
    } else {
      throw [
            match_failure,
            [
              "/home/sylvain/Documents/devel/geoprojml/node_modules/bucklescript-tea/src/vdom.ml",
              319,
              30
            ]
          ];
    }
  } else {
    throw [
          failure,
          "Node replacement should never be passed anything but a node itself"
        ];
  }
}

function patchVNodesOnElems_CreateElement(_callbacks, _param) {
  while(true) {
    var param = _param;
    var callbacks = _callbacks;
    switch (param.tag | 0) {
      case 0 : 
          var text = param[0];
          return document.createComment(text);
      case 1 : 
          var text$1 = param[0];
          return document.createTextNode(text$1);
      case 2 : 
          var newProperties = param[4];
          var newChild = createElementNsOptional(param[0], param[1]);
          var match = patchVNodesOnElems_Properties(callbacks, newChild, map((function () {
                      return /* NoProp */0;
                    }), newProperties), newProperties);
          if (match !== 0) {
            var childChildren = newChild.childNodes;
            patchVNodesOnElems(callbacks, newChild, childChildren, 0, /* [] */0, param[5]);
            return newChild;
          } else {
            throw [
                  match_failure,
                  [
                    "/home/sylvain/Documents/devel/geoprojml/node_modules/bucklescript-tea/src/vdom.ml",
                    333,
                    30
                  ]
                ];
          }
          break;
      case 3 : 
          var vdom = _1(param[1], /* () */0);
          param[2][0] = vdom;
          _param = vdom;
          continue ;
          case 4 : 
          _param = param[1];
          _callbacks = _1(param[0], callbacks);
          continue ;
          
    }
  }
}

function patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode) {
  if (oldNode.tag === 2) {
    if (newNode.tag === 2) {
      if (oldNode[3] !== newNode[3] || oldNode[1] !== newNode[1]) {
        return patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
      } else {
        var child = caml_array_get(elems, idx);
        var childChildren = child.childNodes;
        if (!patchVNodesOnElems_Properties(callbacks, child, oldNode[4], newNode[4])) {
          console.log("VDom:  Failed swapping properties because the property list length changed, use `noProp` to swap properties instead, not by altering the list structure.  This is a massive inefficiency until this issue is resolved.");
          patchVNodesOnElems_ReplaceNode(callbacks, elem, elems, idx, newNode);
        }
        return patchVNodesOnElems(callbacks, child, childChildren, 0, oldNode[5], newNode[5]);
      }
    } else {
      throw [
            failure,
            "Non-node passed to patchVNodesOnElems_MutateNode"
          ];
    }
  } else {
    throw [
          failure,
          "Non-node passed to patchVNodesOnElems_MutateNode"
        ];
  }
}

function patchVNodesOnElems(callbacks, elem, elems, _idx, _oldVNodes, _newVNodes) {
  while(true) {
    var newVNodes = _newVNodes;
    var oldVNodes = _oldVNodes;
    var idx = _idx;
    if (oldVNodes) {
      var oldNode = oldVNodes[0];
      var exit = 0;
      switch (oldNode.tag | 0) {
        case 0 : 
            if (newVNodes) {
              var match = newVNodes[0];
              if (match.tag) {
                exit = 1;
              } else if (oldNode[0] === match[0]) {
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 1 : 
            if (newVNodes) {
              var match$1 = newVNodes[0];
              if (match$1.tag === 1) {
                var newText = match$1[0];
                if (oldNode[0] !== newText) {
                  var child = caml_array_get(elems, idx);
                  child.nodeValue = newText;
                }
                _newVNodes = newVNodes[1];
                _oldVNodes = oldVNodes[1];
                _idx = idx + 1 | 0;
                continue ;
                
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 2 : 
            if (newVNodes) {
              var newNode = newVNodes[0];
              if (newNode.tag === 2) {
                var newRest = newVNodes[1];
                var newKey = newNode[2];
                var newTagName = newNode[1];
                var newNamespace = newNode[0];
                var oldRest = oldVNodes[1];
                var oldKey = oldNode[2];
                var oldTagName = oldNode[1];
                var oldNamespace = oldNode[0];
                if (oldKey === newKey && oldKey !== "") {
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else if (oldKey === "" || newKey === "") {
                  patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                  _newVNodes = newRest;
                  _oldVNodes = oldRest;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$1 = 0;
                  var exit$2 = 0;
                  if (oldRest) {
                    var match$2 = oldRest[0];
                    if (match$2.tag === 2) {
                      var olderRest = oldRest[1];
                      var olderKey = match$2[2];
                      var olderTagName = match$2[1];
                      var olderNamespace = match$2[0];
                      var exit$3 = 0;
                      if (newRest) {
                        var match$3 = newRest[0];
                        if (match$3.tag === 2) {
                          if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey && oldNamespace === match$3[0] && oldTagName === match$3[1] && oldKey === match$3[2]) {
                            var firstChild$$1 = caml_array_get(elems, idx);
                            var secondChild = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild);
                            insertBefore(elem, secondChild, firstChild$$1);
                            _newVNodes = newRest[1];
                            _oldVNodes = olderRest;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$3 = 4;
                          }
                        } else {
                          exit$3 = 4;
                        }
                      } else {
                        exit$3 = 4;
                      }
                      if (exit$3 === 4) {
                        if (olderNamespace === newNamespace && olderTagName === newTagName && olderKey === newKey) {
                          var oldChild = caml_array_get(elems, idx);
                          elem.removeChild(oldChild);
                          _newVNodes = newRest;
                          _oldVNodes = olderRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$2 = 3;
                        }
                      }
                      
                    } else {
                      exit$2 = 3;
                    }
                  } else {
                    exit$2 = 3;
                  }
                  if (exit$2 === 3) {
                    if (newRest) {
                      var match$4 = newRest[0];
                      if (match$4.tag === 2) {
                        if (oldNamespace === match$4[0] && oldTagName === match$4[1] && oldKey === match$4[2]) {
                          var oldChild$1 = caml_array_get(elems, idx);
                          var newChild = patchVNodesOnElems_CreateElement(callbacks, newNode);
                          insertBefore(elem, newChild, oldChild$1);
                          _newVNodes = newRest;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$1 = 2;
                        }
                      } else {
                        exit$1 = 2;
                      }
                    } else {
                      exit$1 = 2;
                    }
                  }
                  if (exit$1 === 2) {
                    patchVNodesOnElems_MutateNode(callbacks, elem, elems, idx, oldNode, newNode);
                    _newVNodes = newRest;
                    _oldVNodes = oldRest;
                    _idx = idx + 1 | 0;
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 3 : 
            if (newVNodes) {
              var match$5 = newVNodes[0];
              if (match$5.tag === 3) {
                var newRest$1 = newVNodes[1];
                var newCache = match$5[2];
                var newGen = match$5[1];
                var newKey$1 = match$5[0];
                var oldRest$1 = oldVNodes[1];
                var oldCache = oldNode[2];
                var oldKey$1 = oldNode[0];
                if (oldKey$1 === newKey$1) {
                  newCache[0] = oldCache[0];
                  _newVNodes = newRest$1;
                  _oldVNodes = oldRest$1;
                  _idx = idx + 1 | 0;
                  continue ;
                  
                } else {
                  var exit$4 = 0;
                  var exit$5 = 0;
                  if (oldRest$1) {
                    var match$6 = oldRest$1[0];
                    if (match$6.tag === 3) {
                      var olderRest$1 = oldRest$1[1];
                      var olderKey$1 = match$6[0];
                      var exit$6 = 0;
                      if (newRest$1) {
                        var match$7 = newRest$1[0];
                        if (match$7.tag === 3) {
                          if (olderKey$1 === newKey$1 && oldKey$1 === match$7[0]) {
                            var firstChild$1 = caml_array_get(elems, idx);
                            var secondChild$1 = caml_array_get(elems, idx + 1 | 0);
                            elem.removeChild(secondChild$1);
                            insertBefore(elem, secondChild$1, firstChild$1);
                            _newVNodes = newRest$1[1];
                            _oldVNodes = olderRest$1;
                            _idx = idx + 2 | 0;
                            continue ;
                            
                          } else {
                            exit$6 = 4;
                          }
                        } else {
                          exit$6 = 4;
                        }
                      } else {
                        exit$6 = 4;
                      }
                      if (exit$6 === 4) {
                        if (olderKey$1 === newKey$1) {
                          var oldChild$2 = caml_array_get(elems, idx);
                          elem.removeChild(oldChild$2);
                          var oldVdom = match$6[2][0];
                          newCache[0] = oldVdom;
                          _newVNodes = newRest$1;
                          _oldVNodes = olderRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$5 = 3;
                        }
                      }
                      
                    } else {
                      exit$5 = 3;
                    }
                  } else {
                    exit$5 = 3;
                  }
                  if (exit$5 === 3) {
                    if (newRest$1) {
                      var match$8 = newRest$1[0];
                      if (match$8.tag === 3) {
                        if (match$8[0] === oldKey$1) {
                          var oldChild$3 = caml_array_get(elems, idx);
                          var newVdom = _1(newGen, /* () */0);
                          newCache[0] = newVdom;
                          var newChild$1 = patchVNodesOnElems_CreateElement(callbacks, newVdom);
                          insertBefore(elem, newChild$1, oldChild$3);
                          _newVNodes = newRest$1;
                          _idx = idx + 1 | 0;
                          continue ;
                          
                        } else {
                          exit$4 = 2;
                        }
                      } else {
                        exit$4 = 2;
                      }
                    } else {
                      exit$4 = 2;
                    }
                  }
                  if (exit$4 === 2) {
                    var oldVdom$1 = oldCache[0];
                    var newVdom$1 = _1(newGen, /* () */0);
                    newCache[0] = newVdom$1;
                    _newVNodes = /* :: */[
                      newVdom$1,
                      newRest$1
                    ];
                    _oldVNodes = /* :: */[
                      oldVdom$1,
                      oldRest$1
                    ];
                    continue ;
                    
                  }
                  
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case 4 : 
            _oldVNodes = /* :: */[
              oldNode[1],
              oldVNodes[1]
            ];
            continue ;
            
      }
      if (exit === 1) {
        var oldRest$2 = oldVNodes[1];
        if (newVNodes) {
          var newNode$1 = newVNodes[0];
          if (newNode$1.tag === 4) {
            patchVNodesOnElems(_1(newNode$1[0], callbacks), elem, elems, idx, /* :: */[
                  oldNode,
                  /* [] */0
                ], /* :: */[
                  newNode$1[1],
                  /* [] */0
                ]);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          } else {
            var oldChild$4 = caml_array_get(elems, idx);
            var newChild$2 = patchVNodesOnElems_CreateElement(callbacks, newNode$1);
            insertBefore(elem, newChild$2, oldChild$4);
            elem.removeChild(oldChild$4);
            _newVNodes = newVNodes[1];
            _oldVNodes = oldRest$2;
            _idx = idx + 1 | 0;
            continue ;
            
          }
        } else {
          var child$1 = caml_array_get(elems, idx);
          elem.removeChild(child$1);
          _newVNodes = /* [] */0;
          _oldVNodes = oldRest$2;
          continue ;
          
        }
      }
      
    } else if (newVNodes) {
      var newChild$3 = patchVNodesOnElems_CreateElement(callbacks, newVNodes[0]);
      elem.appendChild(newChild$3);
      _newVNodes = newVNodes[1];
      _oldVNodes = /* [] */0;
      _idx = idx + 1 | 0;
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function patchVNodesIntoElement(callbacks, elem, oldVNodes, newVNodes) {
  var elems = elem.childNodes;
  patchVNodesOnElems(callbacks, elem, elems, 0, oldVNodes, newVNodes);
  return newVNodes;
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function run(callbacks, param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 1 : 
          return fold_left((function (_, cmd) {
                        return run(callbacks, cmd);
                      }), /* () */0, param[0]);
      case 0 : 
      case 2 : 
          return _1(param[0], callbacks);
      
    }
  }
}

var none = /* NoCmd */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function run$1(oldCallbacks, newCallbacks, oldSub, newSub) {
  var enable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return enable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              param[2][0] = /* Some */[_1(param[1], callbacks)];
              return /* () */0;
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var disable = function (_callbacks, _param) {
    while(true) {
      var param = _param;
      var callbacks = _callbacks;
      if (typeof param === "number") {
        return /* () */0;
      } else {
        switch (param.tag | 0) {
          case 0 : 
              var subs = param[0];
              if (subs) {
                return iter((function(callbacks){
                          return function (param) {
                            return disable(callbacks, param);
                          }
                          }(callbacks)), subs);
              } else {
                return /* () */0;
              }
          case 1 : 
              var diCB = param[2];
              var match = diCB[0];
              if (match) {
                diCB[0] = /* None */0;
                return _1(match[0], /* () */0);
              } else {
                return /* () */0;
              }
          case 2 : 
              var subCallbacks = _1(param[0], callbacks);
              _param = param[1];
              _callbacks = subCallbacks;
              continue ;
              
        }
      }
    }
  };
  var exit = 0;
  if (typeof oldSub === "number") {
    if (typeof newSub === "number") {
      return newSub;
    } else {
      exit = 1;
    }
  } else {
    switch (oldSub.tag | 0) {
      case 0 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag) {
            exit = 1;
          } else {
            var aux = function (_oldList, _newList) {
              while(true) {
                var newList = _newList;
                var oldList = _oldList;
                if (oldList) {
                  var oldRest = oldList[1];
                  var oldSubSub = oldList[0];
                  if (newList) {
                    run$1(oldCallbacks, newCallbacks, oldSubSub, newList[0]);
                    _newList = newList[1];
                    _oldList = oldRest;
                    continue ;
                    
                  } else {
                    disable(oldCallbacks, oldSubSub);
                    _newList = /* [] */0;
                    _oldList = oldRest;
                    continue ;
                    
                  }
                } else if (newList) {
                  enable(newCallbacks, newList[0]);
                  _newList = newList[1];
                  _oldList = /* [] */0;
                  continue ;
                  
                } else {
                  return /* () */0;
                }
              }
            };
            aux(oldSub[0], newSub[0]);
            return newSub;
          }
          break;
      case 1 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 1) {
            if (oldSub[0] === newSub[0]) {
              newSub[2][0] = oldSub[2][0];
              return newSub;
            } else {
              exit = 1;
            }
          } else {
            exit = 1;
          }
          break;
      case 2 : 
          if (typeof newSub === "number") {
            exit = 1;
          } else if (newSub.tag === 2) {
            var olderCallbacks = _1(oldSub[0], oldCallbacks);
            var newerCallbacks = _1(newSub[0], newCallbacks);
            run$1(olderCallbacks, newerCallbacks, oldSub[1], newSub[1]);
            return newSub;
          } else {
            exit = 1;
          }
          break;
      
    }
  }
  if (exit === 1) {
    disable(oldCallbacks, oldSub);
    enable(newCallbacks, newSub);
    return newSub;
  }
  
}

var none$1 = /* NoSub */0;


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function programStateWrapper(initModel, pump, shutdown) {
  var model = [initModel];
  var callbacks = [/* record */[/* enqueue */(function () {
          console.log("INVALID enqueue CALL!");
          return /* () */0;
        })]];
  var pumperInterface = _1(pump, callbacks);
  var pending = [/* None */0];
  var handler = function (msg$$1) {
    var match = pending[0];
    if (match) {
      pending[0] = /* Some */[/* :: */[
          msg$$1,
          match[0]
        ]];
      return /* () */0;
    } else {
      pending[0] = /* Some */[/* [] */0];
      var newModel = _2(pumperInterface[/* handleMsg */2], model[0], msg$$1);
      model[0] = newModel;
      var match$1 = pending[0];
      if (match$1) {
        var msgs = match$1[0];
        if (msgs) {
          pending[0] = /* None */0;
          return iter(handler, rev(msgs));
        } else {
          pending[0] = /* None */0;
          return /* () */0;
        }
      } else {
        throw [
              failure,
              "INVALID message queue state, should never be None during message processing!"
            ];
      }
    }
  };
  var finalizedCBs = /* record */[/* enqueue */handler];
  callbacks[0] = finalizedCBs;
  var pi_requestShutdown = function () {
    callbacks[0] = /* record */[/* enqueue */(function () {
          console.log("INVALID message enqueued when shut down");
          return /* () */0;
        })];
    var cmd = _1(shutdown, model[0]);
    _1(pumperInterface[/* shutdown */3], cmd);
    return /* () */0;
  };
  var render_string = function () {
    return _1(pumperInterface[/* render_string */1], model[0]);
  };
  _1(pumperInterface[/* startup */0], /* () */0);
  return {
          pushMsg: handler,
          shutdown: pi_requestShutdown,
          getHtmlString: render_string
        };
}

function programLoop(update, view, subscriptions, initModel, initCmd, param) {
  if (param) {
    var parentNode = param[0];
    return (function (callbacks) {
        var priorRenderedVdom = [/* [] */0];
        var latestModel = [initModel];
        var nextFrameID = [/* None */0];
        var doRender = function () {
          var match = nextFrameID[0];
          if (match) {
            var newVdom_000 = _1(view, latestModel[0]);
            var newVdom = /* :: */[
              newVdom_000,
              /* [] */0
            ];
            var justRenderedVdom = patchVNodesIntoElement(callbacks, parentNode, priorRenderedVdom[0], newVdom);
            priorRenderedVdom[0] = justRenderedVdom;
            nextFrameID[0] = /* None */0;
            return /* () */0;
          } else {
            return /* () */0;
          }
        };
        var scheduleRender = function () {
          var match = nextFrameID[0];
          if (match) {
            return /* () */0;
          } else {
            nextFrameID[0] = /* Some */[-1];
            return doRender(16);
          }
        };
        var clearPnode = function () {
          while(parentNode.childNodes.length > 0) {
            var match = parentNode.firstChild;
            if (match !== null) {
              parentNode.removeChild(match);
            }
            
          }
          return /* () */0;
        };
        var oldSub = [/* NoSub */0];
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
          return /* () */0;
        };
        var handlerStartup = function () {
          clearPnode(/* () */0);
          run(callbacks, initCmd);
          handleSubscriptionChange(latestModel[0]);
          nextFrameID[0] = /* Some */[-1];
          doRender(16);
          return /* () */0;
        };
        var render_string = function (model) {
          return renderToHtmlString(_1(view, model));
        };
        var handler = function (model, msg$$1) {
          var match = _2(update, model, msg$$1);
          var newModel = match[0];
          latestModel[0] = newModel;
          run(callbacks, match[1]);
          scheduleRender(/* () */0);
          handleSubscriptionChange(newModel);
          return newModel;
        };
        var handlerShutdown = function (cmd) {
          nextFrameID[0] = /* None */0;
          run(callbacks, cmd);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
          priorRenderedVdom[0] = /* [] */0;
          clearPnode(/* () */0);
          return /* () */0;
        };
        return /* record */[
                /* startup */handlerStartup,
                /* render_string */render_string,
                /* handleMsg */handler,
                /* shutdown */handlerShutdown
              ];
      });
  } else {
    return (function (callbacks) {
        var oldSub = [/* NoSub */0];
        var handleSubscriptionChange = function (model) {
          var newSub = _1(subscriptions, model);
          oldSub[0] = run$1(callbacks, callbacks, oldSub[0], newSub);
          return /* () */0;
        };
        return /* record */[
                /* startup */(function () {
                    run(callbacks, initCmd);
                    handleSubscriptionChange(initModel);
                    return /* () */0;
                  }),
                /* render_string */(function (model) {
                    return renderToHtmlString(_1(view, model));
                  }),
                /* handleMsg */(function (model, msg$$1) {
                    var match = _2(update, model, msg$$1);
                    var newModel = match[0];
                    run(callbacks, match[1]);
                    handleSubscriptionChange(newModel);
                    return newModel;
                  }),
                /* shutdown */(function (cmd) {
                    run(callbacks, cmd);
                    oldSub[0] = run$1(callbacks, callbacks, oldSub[0], /* NoSub */0);
                    return /* () */0;
                  })
              ];
      });
  }
}

function program(param, pnode, flags) {
  polyfills(/* () */0);
  var match = _1(param[/* init */0], flags);
  var initModel = match[0];
  var opnode = (pnode == null) ? /* None */0 : [pnode];
  var pumpInterface = programLoop(param[/* update */1], param[/* view */2], param[/* subscriptions */3], initModel, match[1], opnode);
  return programStateWrapper(initModel, pumpInterface, param[/* shutdown */4]);
}

function standardProgram(param, pnode, args) {
  return program(/* record */[
              /* init */param[/* init */0],
              /* update */param[/* update */1],
              /* view */param[/* view */2],
              /* subscriptions */param[/* subscriptions */3],
              /* shutdown */(function () {
                  return /* NoCmd */0;
                })
            ], pnode, args);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var svgNamespace = "http://www.w3.org/2000/svg";

function text$1(str) {
  return /* Text */__(1, [str]);
}

function svg($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode(svgNamespace, "svg", key, unique, props, nodes);
}

function circle($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode(svgNamespace, "circle", key, unique, props, nodes);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function div$2($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "div", key, unique, props, nodes);
}

function button($staropt$star, $staropt$star$1, props, nodes) {
  var key = $staropt$star ? $staropt$star[0] : "";
  var unique = $staropt$star$1 ? $staropt$star$1[0] : "";
  return fullnode("", "button", key, unique, props, nodes);
}

function styles$1(s) {
  return /* Style */__(4, [s]);
}

var onCB$1 = onCB;

function onClick(msg) {
  return onMsg("click", msg);
}


/* No side effect */

var $$Error = create("Js_exn.Error");

function internalToOCamlException(e) {
  if (isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}


/* No side effect */

function map$8(f, a) {
  var l = a.length;
  if (l) {
    var r = caml_make_vect(l, _1(f, a[0]));
    for(var i = 1 ,i_finish = l - 1 | 0; i <= i_finish; ++i){
      r[i] = _1(f, a[i]);
    }
    return r;
  } else {
    return /* array */[];
  }
}

function to_list(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    } else {
      _res = /* :: */[
        a[i],
        res
      ];
      _i = i - 1 | 0;
      continue ;
      
    }
  }
}

function fold_right$1(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = _2(f, a[i], r);
  }
  return r;
}

var Bottom = create("Array.Bottom");


/* No side effect */

function classify$1(x) {
  var ty = typeof x;
  if (ty === "string") {
    return /* JSONString */__(0, [x]);
  } else if (ty === "number") {
    return /* JSONNumber */__(1, [x]);
  } else if (ty === "boolean") {
    if (x === true) {
      return /* JSONTrue */1;
    } else {
      return /* JSONFalse */0;
    }
  } else if (x === null) {
    return /* JSONNull */2;
  } else if (Array.isArray(x)) {
    return /* JSONArray */__(3, [x]);
  } else {
    return /* JSONObject */__(2, [x]);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var classify = classify$1;


/* null Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function result_to_option(param) {
  if (param.tag) {
    return /* None */0;
  } else {
    return /* Some */[param[0]];
  }
}

function error(param) {
  if (param.tag) {
    return /* Some */[param[0]];
  } else {
    return /* None */0;
  }
}

function first(fst, e) {
  if (e.tag) {
    return e;
  } else {
    return fst;
  }
}

function error_of_first(fst, param) {
  if (param.tag) {
    return /* Some */[param[0]];
  } else {
    return error(fst);
  }
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function height(param) {
  if (param) {
    return param[4];
  } else {
    return 0;
  }
}

function create$1(l, x, d, r) {
  var hl = height(l);
  var hr = height(r);
  return /* Node */[
          l,
          x,
          d,
          r,
          hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        ];
}

function singleton(x, d) {
  return /* Node */[
          /* Empty */0,
          x,
          d,
          /* Empty */0,
          1
        ];
}

function bal(l, x, d, r) {
  var hl = l ? l[4] : 0;
  var hr = r ? r[4] : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      var lr = l[3];
      var ld = l[2];
      var lv = l[1];
      var ll = l[0];
      if (height(ll) >= height(lr)) {
        return create$1(ll, lv, ld, create$1(lr, x, d, r));
      } else if (lr) {
        return create$1(create$1(ll, lv, ld, lr[0]), lr[1], lr[2], create$1(lr[3], x, d, r));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else if (hr > (hl + 2 | 0)) {
    if (r) {
      var rr = r[3];
      var rd = r[2];
      var rv = r[1];
      var rl = r[0];
      if (height(rr) >= height(rl)) {
        return create$1(create$1(l, x, d, rl), rv, rd, rr);
      } else if (rl) {
        return create$1(create$1(l, x, d, rl[0]), rl[1], rl[2], create$1(rl[3], rv, rd, rr));
      } else {
        throw [
              invalid_argument,
              "Map.bal"
            ];
      }
    } else {
      throw [
            invalid_argument,
            "Map.bal"
          ];
    }
  } else {
    return /* Node */[
            l,
            x,
            d,
            r,
            hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          ];
  }
}

function is_empty(param) {
  if (param) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function add$1(x, data, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(add$1(x, data, l), v, d, r);
      } else {
        return bal(l, v, d, add$1(x, data, r));
      }
    } else {
      return /* Node */[
              l,
              x,
              data,
              r,
              param[4]
            ];
    }
  } else {
    return /* Node */[
            /* Empty */0,
            x,
            data,
            /* Empty */0,
            1
          ];
  }
}

function find$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return param[2];
      }
    } else {
      throw not_found;
    }
  }
}

function mem$1(x, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var c = caml_string_compare(x, param[1]);
      if (c) {
        _param = c < 0 ? param[0] : param[3];
        continue ;
        
      } else {
        return /* true */1;
      }
    } else {
      return /* false */0;
    }
  }
}

function min_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var l = param[0];
      if (l) {
        _param = l;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function max_binding(_param) {
  while(true) {
    var param = _param;
    if (param) {
      var r = param[3];
      if (r) {
        _param = r;
        continue ;
        
      } else {
        return /* tuple */[
                param[1],
                param[2]
              ];
      }
    } else {
      throw not_found;
    }
  }
}

function remove_min_binding(param) {
  if (param) {
    var l = param[0];
    if (l) {
      return bal(remove_min_binding(l), param[1], param[2], param[3]);
    } else {
      return param[3];
    }
  } else {
    throw [
          invalid_argument,
          "Map.remove_min_elt"
        ];
  }
}

function remove$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        return bal(remove$1(x, l), v, d, r);
      } else {
        return bal(l, v, d, remove$1(x, r));
      }
    } else {
      var t1 = l;
      var t2 = r;
      if (t1) {
        if (t2) {
          var match = min_binding(t2);
          return bal(t1, match[0], match[1], remove_min_binding(t2));
        } else {
          return t1;
        }
      } else {
        return t2;
      }
    }
  } else {
    return /* Empty */0;
  }
}

function iter$3(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      iter$3(f, param[0]);
      _2(f, param[1], param[2]);
      _param = param[3];
      continue ;
      
    } else {
      return /* () */0;
    }
  }
}

function map$7(f, param) {
  if (param) {
    var l$prime = map$7(f, param[0]);
    var d$prime = _1(f, param[2]);
    var r$prime = map$7(f, param[3]);
    return /* Node */[
            l$prime,
            param[1],
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function mapi$3(f, param) {
  if (param) {
    var v = param[1];
    var l$prime = mapi$3(f, param[0]);
    var d$prime = _2(f, v, param[2]);
    var r$prime = mapi$3(f, param[3]);
    return /* Node */[
            l$prime,
            v,
            d$prime,
            r$prime,
            param[4]
          ];
  } else {
    return /* Empty */0;
  }
}

function fold(f, _m, _accu) {
  while(true) {
    var accu = _accu;
    var m = _m;
    if (m) {
      _accu = _3(f, m[1], m[2], fold(f, m[0], accu));
      _m = m[3];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function for_all$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        if (for_all$1(p, param[0])) {
          _param = param[3];
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  }
}

function exists$1(p, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (_2(p, param[1], param[2])) {
        return /* true */1;
      } else if (exists$1(p, param[0])) {
        return /* true */1;
      } else {
        _param = param[3];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  }
}

function add_min_binding(k, v, param) {
  if (param) {
    return bal(add_min_binding(k, v, param[0]), param[1], param[2], param[3]);
  } else {
    return singleton(k, v);
  }
}

function add_max_binding(k, v, param) {
  if (param) {
    return bal(param[0], param[1], param[2], add_max_binding(k, v, param[3]));
  } else {
    return singleton(k, v);
  }
}

function join(l, v, d, r) {
  if (l) {
    if (r) {
      var rh = r[4];
      var lh = l[4];
      if (lh > (rh + 2 | 0)) {
        return bal(l[0], l[1], l[2], join(l[3], v, d, r));
      } else if (rh > (lh + 2 | 0)) {
        return bal(join(l, v, d, r[0]), r[1], r[2], r[3]);
      } else {
        return create$1(l, v, d, r);
      }
    } else {
      return add_max_binding(v, d, l);
    }
  } else {
    return add_min_binding(v, d, r);
  }
}

function concat$3(t1, t2) {
  if (t1) {
    if (t2) {
      var match = min_binding(t2);
      return join(t1, match[0], match[1], remove_min_binding(t2));
    } else {
      return t1;
    }
  } else {
    return t2;
  }
}

function concat_or_join(t1, v, d, t2) {
  if (d) {
    return join(t1, v, d[0], t2);
  } else {
    return concat$3(t1, t2);
  }
}

function split$1(x, param) {
  if (param) {
    var r = param[3];
    var d = param[2];
    var v = param[1];
    var l = param[0];
    var c = caml_string_compare(x, v);
    if (c) {
      if (c < 0) {
        var match = split$1(x, l);
        return /* tuple */[
                match[0],
                match[1],
                join(match[2], v, d, r)
              ];
      } else {
        var match$1 = split$1(x, r);
        return /* tuple */[
                join(l, v, d, match$1[0]),
                match$1[1],
                match$1[2]
              ];
      }
    } else {
      return /* tuple */[
              l,
              /* Some */[d],
              r
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* None */0,
            /* Empty */0
          ];
  }
}

function merge$1(f, s1, s2) {
  var exit$$1 = 0;
  if (s1) {
    var v1 = s1[1];
    if (s1[4] >= height(s2)) {
      var match = split$1(v1, s2);
      return concat_or_join(merge$1(f, s1[0], match[0]), v1, _3(f, v1, /* Some */[s1[2]], match[1]), merge$1(f, s1[3], match[2]));
    } else {
      exit$$1 = 1;
    }
  } else if (s2) {
    exit$$1 = 1;
  } else {
    return /* Empty */0;
  }
  if (exit$$1 === 1) {
    if (s2) {
      var v2 = s2[1];
      var match$1 = split$1(v2, s1);
      return concat_or_join(merge$1(f, match$1[0], s2[0]), v2, _3(f, v2, match$1[1], /* Some */[s2[2]]), merge$1(f, match$1[2], s2[3]));
    } else {
      throw [
            assert_failure,
            [
              "map.ml",
              270,
              10
            ]
          ];
    }
  }
  
}

function filter$2(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var l$prime = filter$2(p, param[0]);
    var pvd = _2(p, v, d);
    var r$prime = filter$2(p, param[3]);
    if (pvd) {
      return join(l$prime, v, d, r$prime);
    } else {
      return concat$3(l$prime, r$prime);
    }
  } else {
    return /* Empty */0;
  }
}

function partition$1(p, param) {
  if (param) {
    var d = param[2];
    var v = param[1];
    var match = partition$1(p, param[0]);
    var lf = match[1];
    var lt = match[0];
    var pvd = _2(p, v, d);
    var match$1 = partition$1(p, param[3]);
    var rf = match$1[1];
    var rt = match$1[0];
    if (pvd) {
      return /* tuple */[
              join(lt, v, d, rt),
              concat$3(lf, rf)
            ];
    } else {
      return /* tuple */[
              concat$3(lt, rt),
              join(lf, v, d, rf)
            ];
    }
  } else {
    return /* tuple */[
            /* Empty */0,
            /* Empty */0
          ];
  }
}

function cons_enum(_m, _e) {
  while(true) {
    var e = _e;
    var m = _m;
    if (m) {
      _e = /* More */[
        m[1],
        m[2],
        m[3],
        e
      ];
      _m = m[0];
      continue ;
      
    } else {
      return e;
    }
  }
}

function compare$4(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        var c = caml_string_compare(e1[0], e2[0]);
        if (c !== 0) {
          return c;
        } else {
          var c$1 = _2(cmp, e1[1], e2[1]);
          if (c$1 !== 0) {
            return c$1;
          } else {
            _e2 = cons_enum(e2[2], e2[3]);
            _e1 = cons_enum(e1[2], e1[3]);
            continue ;
            
          }
        }
      } else {
        return 1;
      }
    } else if (e2) {
      return -1;
    } else {
      return 0;
    }
  }
}

function equal(cmp, m1, m2) {
  var _e1 = cons_enum(m1, /* End */0);
  var _e2 = cons_enum(m2, /* End */0);
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (e1) {
      if (e2) {
        if (caml_string_compare(e1[0], e2[0])) {
          return /* false */0;
        } else if (_2(cmp, e1[1], e2[1])) {
          _e2 = cons_enum(e2[2], e2[3]);
          _e1 = cons_enum(e1[2], e1[3]);
          continue ;
          
        } else {
          return /* false */0;
        }
      } else {
        return /* false */0;
      }
    } else if (e2) {
      return /* false */0;
    } else {
      return /* true */1;
    }
  }
}

function cardinal(param) {
  if (param) {
    return (cardinal(param[0]) + 1 | 0) + cardinal(param[3]) | 0;
  } else {
    return 0;
  }
}

function bindings_aux(_accu, _param) {
  while(true) {
    var param = _param;
    var accu = _accu;
    if (param) {
      _param = param[0];
      _accu = /* :: */[
        /* tuple */[
          param[1],
          param[2]
        ],
        bindings_aux(accu, param[3])
      ];
      continue ;
      
    } else {
      return accu;
    }
  }
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

var ObjectDict = [
  /* Empty */0,
  is_empty,
  mem$1,
  add$1,
  singleton,
  remove$1,
  merge$1,
  compare$4,
  equal,
  iter$3,
  fold,
  for_all$1,
  exists$1,
  filter$2,
  partition$1,
  cardinal,
  bindings,
  min_binding,
  max_binding,
  min_binding,
  split$1,
  find$1,
  map$7,
  mapi$3
];

var ParseFail = create("Tea_json.Decoder.ParseFail");

var string = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-string value"]);
      } else if (match.tag) {
        return /* Error */__(1, ["Non-string value"]);
      } else {
        return /* Ok */__(0, [match[0]]);
      }
    })];

var $$int = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-int value"]);
      } else if (match.tag === 1) {
        var n = match[0];
        if (n > min_int && n < max_int) {
          return /* Ok */__(0, [n | 0]);
        } else {
          return /* Error */__(1, ["number out of int range"]);
        }
      } else {
        return /* Error */__(1, ["Non-int value"]);
      }
    })];

var $$float = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        return /* Error */__(1, ["Non-float-value"]);
      } else if (match.tag === 1) {
        return /* Ok */__(0, [match[0]]);
      } else {
        return /* Error */__(1, ["Non-float-value"]);
      }
    })];

var bool = /* Decoder */[(function (value) {
      var match = classify(value);
      if (typeof match === "number") {
        switch (match) {
          case 0 : 
              return /* Ok */__(0, [/* false */0]);
          case 1 : 
              return /* Ok */__(0, [/* true */1]);
          case 2 : 
              return /* Error */__(1, ["Non-boolean value"]);
          
        }
      } else {
        return /* Error */__(1, ["Non-boolean value"]);
      }
    })];

function $$null(v) {
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                if (match >= 2) {
                  return /* Ok */__(0, [v]);
                } else {
                  return /* Error */__(1, ["Non-null value"]);
                }
              } else {
                return /* Error */__(1, ["Non-null value"]);
              }
            })];
}

function list(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-list value"]);
              } else if (match.tag === 3) {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map(parse, to_list(match[0]))]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["list -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-list value"]);
              }
            })];
}

function array(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-array value"]);
              } else if (match.tag === 3) {
                var parse = function (v) {
                  var match = _1(decoder, v);
                  if (match.tag) {
                    throw [
                          ParseFail,
                          match[0]
                        ];
                  } else {
                    return match[0];
                  }
                };
                try {
                  return /* Ok */__(0, [map$8(parse, match[0])]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["array -> " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-array value"]);
              }
            })];
}

function keyValuePairs(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-keyValuePair value"]);
              } else if (match.tag === 2) {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, l) {
                  var match = o[k];
                  if (match !== undefined) {
                    var match$1 = _1(decoder, match);
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return /* :: */[
                              /* tuple */[
                                k,
                                match$1[0]
                              ],
                              l
                            ];
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$1(parse, keys, /* [] */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid keyValuePair parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-keyValuePair value"]);
              }
            })];
}

function dict(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-dict value"]);
              } else if (match.tag === 2) {
                var o = match[0];
                var keys = Object.keys(o);
                var parse = function (k, d) {
                  var match = o[k];
                  if (match !== undefined) {
                    var match$1 = _1(decoder, match);
                    if (match$1.tag) {
                      throw [
                            ParseFail,
                            match$1[0]
                          ];
                    } else {
                      return add$1(k, match$1[0], d);
                    }
                  } else {
                    throw [
                          ParseFail,
                          "Key is undefined: " + k
                        ];
                  }
                };
                try {
                  return /* Ok */__(0, [fold_right$1(parse, keys, /* Empty */0)]);
                }
                catch (raw_exn){
                  var exn = internalToOCamlException(raw_exn);
                  if (exn[0] === ParseFail) {
                    return /* Error */__(1, ["Invalid dict parsing: " + exn[1]]);
                  } else {
                    throw exn;
                  }
                }
              } else {
                return /* Error */__(1, ["Non-dict value"]);
              }
            })];
}

function field(key, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-fieldable value"]);
              } else if (match.tag === 2) {
                var match$1 = match[0][key];
                if (match$1 !== undefined) {
                  var o = _1(decoder, match$1);
                  if (o.tag) {
                    return /* Error */__(1, ["field `" + (key + ("` -> " + o[0]))]);
                  } else {
                    return o;
                  }
                } else {
                  return /* Error */__(1, ["Field Value is undefined: " + key]);
                }
              } else {
                return /* Error */__(1, ["Non-fieldable value"]);
              }
            })];
}

function at(fields, dec) {
  return fold_right(field, fields, dec);
}

function index$2(idx, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = classify(value);
              if (typeof match === "number") {
                return /* Error */__(1, ["Non-array value"]);
              } else if (match.tag === 3) {
                var a = match[0];
                if (idx < 0 || idx > a.length) {
                  return /* Error */__(1, ["Array index out of range: " + idx]);
                } else {
                  return _1(decoder, caml_array_get(a, idx));
                }
              } else {
                return /* Error */__(1, ["Non-array value"]);
              }
            })];
}

function maybe(param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder, value);
              if (match.tag) {
                return /* Ok */__(0, [/* None */0]);
              } else {
                return /* Ok */__(0, [/* Some */[match[0]]]);
              }
            })];
}

function oneOf(decoders) {
  return /* Decoder */[(function (value) {
              var parse = function (v, _param) {
                while(true) {
                  var param = _param;
                  if (param) {
                    var rest = param[1];
                    try {
                      var ok$$1 = _1(param[0][0], v);
                      if (ok$$1.tag) {
                        return parse(v, rest);
                      } else {
                        return ok$$1;
                      }
                    }
                    catch (exn){
                      _param = rest;
                      continue ;
                      
                    }
                  } else {
                    return /* Error */__(1, ["No one-of's matched"]);
                  }
                }
              };
              return parse(value, decoders);
            })];
}

function map$1$1(mapper, param) {
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              if (match.tag) {
                return /* Error */__(1, ["map " + match[0]]);
              } else {
                return /* Ok */__(0, [_1(mapper, match[0])]);
              }
            })];
}

function map2$1(mapper, param, param$1) {
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_2(mapper, match[0], match$1[0])]);
              }
              if (exit$$1 === 1) {
                var match$2 = error_of_first(match, match$1);
                if (match$2) {
                  return /* Error */__(1, ["map2 -> " + match$2[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map3(mapper, param, param$1, param$2) {
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_3(mapper, match[0], match$1[0], match$2[0])]);
              }
              if (exit$$1 === 1) {
                var match$3 = first(match$2, first(match$1, match));
                if (match$3.tag) {
                  return /* Error */__(1, ["map3 -> " + match$3[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map4(mapper, param, param$1, param$2, param$3) {
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_4(mapper, match[0], match$1[0], match$2[0], match$3[0])]);
              }
              if (exit$$1 === 1) {
                var match$4 = first(match$3, first(match$2, first(match$1, match)));
                if (match$4.tag) {
                  return /* Error */__(1, ["map4 -> " + match$4[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map5(mapper, param, param$1, param$2, param$3, param$4) {
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_5(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0])]);
              }
              if (exit$$1 === 1) {
                var match$5 = first(match$4, first(match$3, first(match$2, first(match$1, match))));
                if (match$5.tag) {
                  return /* Error */__(1, ["map5 -> " + match$5[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map6(mapper, param, param$1, param$2, param$3, param$4, param$5) {
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_6(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0])]);
              }
              if (exit$$1 === 1) {
                var match$6 = first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))));
                if (match$6.tag) {
                  return /* Error */__(1, ["map6 -> " + match$6[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map7(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6) {
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else if (match$6.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_7(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0])]);
              }
              if (exit$$1 === 1) {
                var match$7 = first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match))))));
                if (match$7.tag) {
                  return /* Error */__(1, ["map7 -> " + match$7[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function map8(mapper, param, param$1, param$2, param$3, param$4, param$5, param$6, param$7) {
  var decoder8 = param$7[0];
  var decoder7 = param$6[0];
  var decoder6 = param$5[0];
  var decoder5 = param$4[0];
  var decoder4 = param$3[0];
  var decoder3 = param$2[0];
  var decoder2 = param$1[0];
  var decoder1 = param[0];
  return /* Decoder */[(function (value) {
              var match = _1(decoder1, value);
              var match$1 = _1(decoder2, value);
              var match$2 = _1(decoder3, value);
              var match$3 = _1(decoder4, value);
              var match$4 = _1(decoder5, value);
              var match$5 = _1(decoder6, value);
              var match$6 = _1(decoder7, value);
              var match$7 = _1(decoder8, value);
              var exit$$1 = 0;
              if (match.tag) {
                exit$$1 = 1;
              } else if (match$1.tag) {
                exit$$1 = 1;
              } else if (match$2.tag) {
                exit$$1 = 1;
              } else if (match$3.tag) {
                exit$$1 = 1;
              } else if (match$4.tag) {
                exit$$1 = 1;
              } else if (match$5.tag) {
                exit$$1 = 1;
              } else if (match$6.tag) {
                exit$$1 = 1;
              } else if (match$7.tag) {
                exit$$1 = 1;
              } else {
                return /* Ok */__(0, [_8(mapper, match[0], match$1[0], match$2[0], match$3[0], match$4[0], match$5[0], match$6[0], match$7[0])]);
              }
              if (exit$$1 === 1) {
                var match$8 = first(match$7, first(match$6, first(match$5, first(match$4, first(match$3, first(match$2, first(match$1, match)))))));
                if (match$8.tag) {
                  return /* Error */__(1, ["map8 -> " + match$8[0]]);
                } else {
                  throw [
                        failure,
                        "Impossible case"
                      ];
                }
              }
              
            })];
}

function succeed(v) {
  return /* Decoder */[(function () {
              return /* Ok */__(0, [v]);
            })];
}

function fail(e) {
  return /* Decoder */[(function () {
              return /* Error */__(1, [e]);
            })];
}

var value$1 = /* Decoder */[(function (value) {
      return /* Ok */__(0, [value]);
    })];

function andThen(func, param) {
  var decoder = param[0];
  return /* Decoder */[(function (value) {
              var err = _1(decoder, value);
              if (err.tag) {
                return err;
              } else {
                var match = _1(func, err[0]);
                return _1(match[0], value);
              }
            })];
}

function lazy_(func) {
  return andThen(func, /* Decoder */[(function () {
                  return /* Ok */__(0, [/* () */0]);
                })]);
}

function nullable(decoder) {
  return oneOf(/* :: */[
              $$null(/* None */0),
              /* :: */[
                map$1$1((function (v) {
                        return /* Some */[v];
                      }), decoder),
                /* [] */0
              ]
            ]);
}

function decodeValue(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeEvent(param, value) {
  try {
    return _1(param[0], value);
  }
  catch (raw_exn){
    var exn = internalToOCamlException(raw_exn);
    if (exn[0] === ParseFail) {
      return /* Error */__(1, [exn[1]]);
    } else {
      return /* Error */__(1, ["Unknown JSON parsing error"]);
    }
  }
}

function decodeString(decoder, string) {
  try {
    var value = JSON.parse(string);
    return decodeValue(decoder, value);
  }
  catch (exn){
    return /* Error */__(1, ["Invalid JSON string"]);
  }
}

var Decoder = /* module */[
  /* ObjectDict */ObjectDict,
  /* ParseFail */ParseFail,
  /* string */string,
  /* int */$$int,
  /* float */$$float,
  /* bool */bool,
  /* null */$$null,
  /* list */list,
  /* array */array,
  /* keyValuePairs */keyValuePairs,
  /* dict */dict,
  /* field */field,
  /* at */at,
  /* index */index$2,
  /* maybe */maybe,
  /* oneOf */oneOf,
  /* map */map$1$1,
  /* map2 */map2$1,
  /* map3 */map3,
  /* map4 */map4,
  /* map5 */map5,
  /* map6 */map6,
  /* map7 */map7,
  /* map8 */map8,
  /* succeed */succeed,
  /* fail */fail,
  /* value */value$1,
  /* andThen */andThen,
  /* lazy_ */lazy_,
  /* nullable */nullable,
  /* decodeValue */decodeValue,
  /* decodeEvent */decodeEvent,
  /* decodeString */decodeString
];


/* Web_json Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
var position = Decoder[/* map2 */17]((function (x, y) {
        return /* record */[
                /* x */x,
                /* y */y
              ];
      }), Decoder[/* field */11]("pageX", Decoder[/* int */3]), Decoder[/* field */11]("pageY", Decoder[/* int */3]));


/* position Not a pure module */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function cx(v) {
  return /* Attribute */__(1, [
            "",
            "cx",
            v
          ]);
}

function cy(v) {
  return /* Attribute */__(1, [
            "",
            "cy",
            v
          ]);
}

function height$1(v) {
  return /* Attribute */__(1, [
            "",
            "height",
            v
          ]);
}

function r(v) {
  return /* Attribute */__(1, [
            "",
            "r",
            v
          ]);
}

function width(v) {
  return /* Attribute */__(1, [
            "",
            "width",
            v
          ]);
}


/* No side effect */

// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
function mouseClick(param_0) {
  return /* MouseClick */__(0, [param_0]);
}

function select(param_0) {
  return /* Select */__(1, [param_0]);
}

function init() {
  return /* tuple */[
          /* record */[/* points : [] */0],
          none
        ];
}

function offsetting(pos) {
  var newx = pos[/* x */0] - 0 | 0;
  var newy = pos[/* y */1] - 25 | 0;
  return /* record */[
          /* x */newx,
          /* y */newy
        ];
}

function update(model, param) {
  if (typeof param === "number") {
    if (param) {
      return /* tuple */[
              model,
              none
            ];
    } else {
      return /* tuple */[
              /* record */[/* points : [] */0],
              none
            ];
    }
  } else if (param.tag) {
    return /* tuple */[
            model,
            none
          ];
  } else {
    return /* tuple */[
            /* record */[/* points : :: */[
                offsetting(param[0]),
                model[/* points */0]
              ]],
            none
          ];
  }
}

function subscriptions() {
  return none$1;
}

function px(number) {
  return string_of_int(number) + "px";
}

var onMouseDown = onCB$1("mousedown", "", (function (ev) {
        return result_to_option(Decoder[/* decodeEvent */31](Decoder[/* map */16](mouseClick, position), ev));
      }));

function view(model) {
  return div$2(/* None */0, /* None */0, /* [] */0, /* :: */[
              div$2(/* None */0, /* None */0, /* [] */0, /* :: */[
                    button(/* None */0, /* None */0, /* :: */[
                          onClick(/* Reset */0),
                          /* [] */0
                        ], /* :: */[
                          text$1("Reset"),
                          /* [] */0
                        ]),
                    /* :: */[
                      button(/* None */0, /* None */0, /* :: */[
                            onClick(/* Select */__(1, ["point"])),
                            /* [] */0
                          ], /* :: */[
                            text$1("Point"),
                            /* [] */0
                          ]),
                      /* :: */[
                        button(/* None */0, /* None */0, /* :: */[
                              onClick(/* Select */__(1, ["line"])),
                              /* [] */0
                            ], /* :: */[
                              text$1("Line"),
                              /* [] */0
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]),
              /* :: */[
                svg(/* None */0, /* None */0, /* :: */[
                      onMouseDown,
                      /* :: */[
                        styles$1(/* :: */[
                              /* tuple */[
                                "left",
                                string_of_int(0) + "px"
                              ],
                              /* :: */[
                                /* tuple */[
                                  "top",
                                  string_of_int(25) + "px"
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "border",
                                    "1px solid black"
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]),
                        /* :: */[
                          width("800px"),
                          /* :: */[
                            height$1("600px"),
                            /* [] */0
                          ]
                        ]
                      ]
                    ], map((function (pos) {
                            return circle(/* None */0, /* None */0, /* :: */[
                                        cx(string_of_int(pos[/* x */0])),
                                        /* :: */[
                                          cy(string_of_int(pos[/* y */1])),
                                          /* :: */[
                                            r("3"),
                                            /* [] */0
                                          ]
                                        ]
                                      ], /* [] */0);
                          }), model[/* points */0])),
                /* [] */0
              ]
            ]);
}

var partial_arg = /* record */[
  /* init */init,
  /* update */update,
  /* view */view,
  /* subscriptions */subscriptions
];

function main(param, param$1) {
  return standardProgram(partial_arg, param, param$1);
}

var offsetx = 0;

var offsety = 25;

var reset = /* Reset */0;

var clickPlane = /* ClickPlane */1;


/* onMouseDown Not a pure module */

exports.offsetx = offsetx;
exports.offsety = offsety;
exports.mouseClick = mouseClick;
exports.reset = reset;
exports.select = select;
exports.clickPlane = clickPlane;
exports.init = init;
exports.offsetting = offsetting;
exports.update = update;
exports.subscriptions = subscriptions;
exports.px = px;
exports.onMouseDown = onMouseDown;
exports.view = view;
exports.main = main;

return exports;

}({}));
