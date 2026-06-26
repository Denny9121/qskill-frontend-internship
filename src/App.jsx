import {Routes,Route,Link} from "react-router-dom";
import Translator from "./components/Translator";
import StringGenerator from "./components/StringGenerator";
export default function App(){return(<><nav><Link to="/">Translator</Link>{" | "}<Link to="/string-gen">String Generator</Link></nav><Routes><Route path="/" element={<Translator/>}/><Route path="/string-gen" element={<StringGenerator/>}/></Routes></>)}