
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      <div className='parentContainer'>
      <div><h1>STUDENTS MARKSHEET</h1></div>
     <MarksSheet name="CSK" teluguMarks="95" hindiMarks="75" englishMarks="85" 
     mathsMarks="86" scienceMarks="99" socialMarks="80" result="Pass"></MarksSheet>
     <br></br>
     <MarksSheet name="DC" teluguMarks="90" hindiMarks="95" englishMarks="82" 
      mathsMarks="100" scienceMarks="85" socialMarks="89" result="Pass"></MarksSheet>
     <br></br>
     <MarksSheet name="KKR" teluguMarks="55" hindiMarks="50" englishMarks="45"  
     mathsMarks="33" scienceMarks="48" socialMarks="29" result="fail"></MarksSheet>
     <br></br>
     <MarksSheet name="MI" teluguMarks="33" hindiMarks="40" englishMarks="55"  
     mathsMarks="35" scienceMarks="25" socialMarks="35" result="fail"></MarksSheet>
     <br></br>
     <MarksSheet name="RCB" teluguMarks="98" hindiMarks="95" englishMarks="85"  
     mathsMarks="100" scienceMarks="95" socialMarks="96" result="Pass"></MarksSheet>

     {/* <div>
      <StudentsMarks rollno="2" studentName="DC" maxmarks="100" telugu="90" 
        hindi="95" english="82"  maths="100" science="85" social="89" total="541" remarks="Pass" >
        </StudentsMarks>  
        <StudentsMarks rollno="3" studentName="KKR" maxmarks="100" telugu="65" 
        hindi="55" english="45"  maths="33" science="60" social="65" total="323" remarks="Fail" >
        </StudentsMarks>  
        <StudentsMarks rollno="4" studentName="MI" maxmarks="100" telugu="35" 
        hindi="40" english="55"  maths="35" science="40" social="35" total="240" remarks="Fail" >
        </StudentsMarks>  
        <StudentsMarks rollno="5" studentName="RCB" maxmarks="100" telugu="98" 
        hindi="95" english="85"  maths="100" science="95" social="96" total="569" remarks="Pass" ></StudentsMarks>
    </div> */}
      </div>
    </div>
    
  );
}

export default App;
