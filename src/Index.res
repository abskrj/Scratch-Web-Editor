%%raw(`require("tailwindcss/tailwind.css")`)

module Sidebar = {
  @react.component
  let make = () => {
    <div
      className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {React.string("Events")} </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {React.string("When ")}
        <Icon name="flag" size=15 className="text-green-600 mx-2" />
        {React.string("clicked")}
      </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {React.string("When this sprite clicked")}
      </div>
      <div className="font-bold"> {React.string("Motion")} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {React.string("Move 10 steps")}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {React.string("Turn ")}
        <Icon name="undo" size=15 className="text-white mx-2" />
        {React.string("15 degrees")}
      </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {React.string("Turn ")}
        <Icon name="redo" size=15 className="text-white mx-2" />
        {React.string("15 degrees")}
      </div>
    </div>
  }
}
module MidArea = {
  @react.component
  let make = () => {
    <div className="flex-1 h-full overflow-auto"> {React.string("mid area")} </div>
  }
}

module PreviewArea = {
  @react.component
  let make = () => {
    <div className="flex-none h-full overflow-y-auto p-2"> <CatSprite /> </div>
  }
}

module App = {
  @react.component
  let make = () => {
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div
          className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div
          className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  }
}

switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<App />, root)
| None => ()
}
