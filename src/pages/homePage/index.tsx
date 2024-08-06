import { Box } from "../../components/Box";
import { HomePageProps } from "./props";
import { BoxContainer, HomeContainer, HomeHeaderStyle,BoxContent } from "./style";
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

export const HomePage = () => {
   return (
      <>
         <HomeContainer>
            <HomeHeaderStyle>
               <p>
                  Welcome, <span>Emmanuel Okafor</span>
               </p>
            </HomeHeaderStyle>
            <BoxContainer>
               {HomePageProps.data.map((data, index) => {
                  return (
                     <BoxContent key={index}>
                        <Box icon={data.icon} name={data.name} />
                     </BoxContent>
                  );
               })}
            </BoxContainer>
            {/* <BoxContainer>
                <Box name="Visitors"/>
                <Box name="History"/>
                <Box name="Notification"/>
                <Box name=""/>
            </BoxContainer> */}
         </HomeContainer>
      </>
   );
};

// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// const style = {
//   table: {
//     borderCollapse: 'collapse'
//   },
//   tableCell: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm(props) {
// const submit =(e)=>{
// e.preventDefault();

// const newPhone = {firstname: props.firstname,lastname: props.lastname,phone: props.phone}

// const updatedPhoneList = [...props.phoneList,  newPhone].sort((a,b)=>a.lastname.localeCompare(b.lastname))

// props.setPhoneList(updatedPhoneList)
// }
//   return (
//     <form onSubmit={submit} style={style.form.container}>
//       <label>First name:</label>
//       <br />
//       <input
//       value={props.firstname}
//       onChange = {(e) =>props.setFirstname(e.target.value)}
//         style={style.form.inputs}
//         className='userFirstname'
//         name='userFirstname'
//         type='text'
//       />
//       <br/>
//       <label>Last name:</label>
//       <br />
//       <input
//       value={props.lastname}
//       onChange = {(e) =>props.setLastname(e.target.value)}
//         style={style.form.inputs}
//         className='userLastname'
//         name='userLastname'
//         type='text'
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//       value={props.phone}
//       onChange = {(e) =>props.setPhone(e.target.value)}
//         style={style.form.inputs}
//         className='userPhone'
//         name='userPhone'
//         type='text'
//       />
//       <br/>
//       <input
//         style={style.form.submitBtn}
//         className='submitButton'
//         type='submit'
//         value='Add User'
//       />
//     </form>
//   )
// }

// function InformationTable(props) {
//   return (
//     <table style={style.table} className='informationTable'>
//       <thead>

//         <tr>
//          <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//          <th style={style.tableCell}>phone</th>
//         </tr>
//       </thead>
//       {props.phoneList.map((list, index) =>(
//       <tr key={index} >
//        <th style={style.tableCell}>{list.firstname}</th>
//          <th style={style.tableCell}>{list.lastname}</th>
//            <th style={style.tableCell}>{list.phone}</th>
//       </tr>
//       ))}
//       <tbody>
//       </tbody>
//     </table>
//   );
// }

// function Application(props) {
// const [firstname, setFirstname] = useState("Coder")
// const [lastname, setLastname] = useState("Byte")
// const [phone, setPhone] = useState("8885559999")

// const [phoneList, setPhoneList] = useState([])
//   return (
//     <section>
//       <PhoneBookForm
//       setFirstname = {setFirstname}
//       setLastname ={setLastname}
//       setPhone = {setPhone}
//       firstname = {firstname}
//       lastname = {lastname}
//       phone = {phone}
//       setPhoneList = {setPhoneList}
//       phoneList={phoneList}
//       />
//       <InformationTable
//       phoneList = {phoneList} />
//     </section>
//   );
// }

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Application />);
