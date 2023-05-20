const heading = React.createElement("h1", 
{ "id": "heading"}, "Hello world from React !");

console.log('heading', heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log('root', root)

root.render(heading);