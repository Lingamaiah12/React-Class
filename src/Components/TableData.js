


const  TableData = ()=>{
    const userDeatial={
        name :'linga',
        rollno:22,
        study: '10th',
        mobileNo:8143811181,
    }
    const {name,rollno,study , mobileNo} = userDeatial;
    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Class</th>
                    <th>Mobile No</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{rollno}</td>
                    <td>{study}</td>
                    <td>{mobileNo}</td>
                </tr>
            </table>
        </div>
    )
}

export default TableData;