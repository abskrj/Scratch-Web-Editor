@react.component
let make = (~name, ~size=20, ~className=?) => {
  let otherClasses = switch className {
  | Some(str) => str
  | None => ""
  }
  <svg
    className={`fill-current ${otherClasses}`}
    width={string_of_int(size) ++ "px"}
    height={string_of_int(size) ++ "px"}>
    <use xlinkHref={`/icons/solid.svg#${name}`} />
  </svg>
}
