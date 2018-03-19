
open Tea
open Tea.App
open Tea.Html
open Tea.Mouse
open Tea.Svg

let offsetx = 0 and offsety = 25;;
   
type msg =
  | MouseClick of position
  | Reset
  | Select of string
  | ClickPlane
[@@bs.deriving {accessors}]


(*type drag =
  { start : position
  ; current : position
  }*)

type model =
  { points : position list
  }

(*external document : Dom.document = "document" [@@bs.val];;
external querySelector : string ->  Dom.element option = "" [@@bs.send.pipe: Dom.document] [@@bs.return null_to_opt];;
(* external style : Dom.element => Dom.cssStyleDeclaration = "" [@@bs.get];
external setColor : Dom.cssStyleDeclaration => string => unit = "color" [@@bs.set];*)


let getposition eltid =
    match document |> querySelector ("#"^eltid) with 
      | Some element -> 
      | None => ()*)

let init () =
  ( {points = []}, Cmd.none )

(*let getPosition {position; drag} =
  match drag with
  | None ->
    position

  | Some {start; current} ->
    { x = position.x + current.x - start.x
    ; y = position.y + current.y - start.y
    }
 *)

let offsetting pos =
  let newx = pos.x -offsetx and newy = pos.y - offsety in {x=newx;y=newy}
  
let update  model = function
  | Reset ->
    ({points = []},Cmd.none)
  (* | ClickPlane -> ( model , MouseClick ) *)
  | MouseClick xy ->
    ({ points = (offsetting xy)::model.points},Cmd.none)
  |_ -> (model,Cmd.none)

(*
let update model msg =
  ( updateHelp model msg, Cmd.none )
 *)

let subscriptions _ =
(*    Sub.batch [ Mouse.downs mouseClick ]
 *)
  Sub.none

let px number =
  (string_of_int number) ^ "px"

let onMouseDown =
  onCB "mousedown" "" (fun ev ->
      Json.Decoder.decodeEvent (Json.Decoder.map mouseClick Mouse.position) ev
      |> Result.result_to_option
    )
  
let view model =
  div
    []
    [ div
        []
        [ button [onClick Reset] [text "Reset"]
        ; button [onClick (Select "point")] [text "Point"]
        ; button [onClick (Select "line")] [text "Line"]]
    ; svg
        [ onMouseDown
        ; styles ["left",px offsetx;"top",px offsety;"border", "1px solid black"]
        ; Svg.Attributes.width "800px"
        ; Svg.Attributes.height "600px"] 
        (List.map
           (fun pos -> 
             circle [Svg.Attributes.cx (string_of_int pos.x);
                     Svg.Attributes.cy (string_of_int pos.y);
                     Svg.Attributes.r "3"] []
           )
           model.points)
    ]
  
  
          
let main =
  standardProgram {
    init;
    update;
    view;
    subscriptions;
  }

