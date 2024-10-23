import React from 'react'

function MarksSheet(props) {
    let teluguMarks= Number(props.teluguMarks);
    let hindiMarks= Number(props.hindiMarks);
    let englishMarks= Number(props.englishMarks);
    let mathsMarks= Number(props.mathsMarks);
    let scienceMarks= Number(props.scienceMarks);
    let socialMarks= Number(props.socialMarks);
    let result=props.result;


    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks;
    let percentage = totalMarks/600 *100;

  return (
    <div className="studentsMarkSheet">
        
      <table>
      <caption>{props.name} 's MarkSheet</caption>
      <colgroup>
        <col span="2" className="changeColor" />
        <col span="1" />
        <col span="2" className="changeColor" />
      </colgroup>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Max. Marks</th>
                <th>Marks Obtained</th>
                <th>Result</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{teluguMarks}</td>
                <td>{teluguMarks>=35?"Pass":"Fail"}</td>
                <td>{teluguMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hindiMarks}</td>
                <td>{hindiMarks>=35?"Pass":"Fail"}</td>
                <td>{hindiMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{englishMarks}</td>
                <td>{englishMarks>=35?"Pass":"Fail"}</td>
                <td>{englishMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{mathsMarks>=35?"Pass":"Fail"}</td>
                <td>{mathsMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{scienceMarks}</td>
                <td>{scienceMarks>=35?"Pass":"Fail"}</td>
                <td>{scienceMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socialMarks}</td>
                <td>{socialMarks>=35?"Pass":"Fail"}</td>
                <td>{socialMarks>=35?"Good":"Needs Improvement"}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>TOTAL</th>
                <th>600</th>
                <th>{totalMarks}({percentage.toFixed(2)}%)</th>
                <th>Pass</th>
                <th>{result="Pass"?"Good":"Needs Improvement"}</th>
            </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default MarksSheet
