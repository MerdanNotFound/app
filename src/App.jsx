import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import Content from "./components/content";


function App() {
    return (
    <>
      <div className="wrapper">
        <Nav />
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
