import Stories from "./stories";
import Pagination from "./Pagination";
import Search from "./Search";
import "./App.css";
function App() {
  return (
    <>
        {/* <h1>Welcome to my Stunning News WeBsite created by</h1> */}
        <Search/>
        <Pagination/>
        <Stories/>
    </>
  );
}

export default App; 
