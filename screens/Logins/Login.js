
import { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Alert, ScrollView } from "react-native";
import CustomButton from "../../components/CustomButton";


export default function Login(props){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [verified,setVerified] = useState(false);
    // const fetch = require('node-fetch');
    function usernameChanged(input){
        setUsername(input)
        // console.log(username)
    }

    function passwordChanged(input){
        setPassword(input)
        // console.log(password)
    }

    async function loginPressed(){
        const details = {
            username: username,
            password: password
        }
        
        await fetch('http://localhost:3000',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(details)})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status===true){
                setVerified(true);
            }
        })
        .catch(error => console.error(error));

        props.navigation.navigate('Dashboard')
    }

    return(
            <View style={styles.viewContainer}>
            <ScrollView>
            <Text style={styles.headerStyle}> LOGIN </Text>
            <View style={styles.detailsViewStyle}>
            <Text style={styles.textStyle}> Username </Text>
            <TextInput placeholder="Enter username here" placeholderTextColor={'#888888'} style={styles.textInputStyle} onChangeText={usernameChanged} />
            <Text style={styles.textStyle}> Password </Text>
            <TextInput placeholder="Enter password here" placeholderTextColor={'#888888'} style={styles.textInputStyle} secureTextEntry={true} onChangeText={passwordChanged} />
            </View>
            <CustomButton title='Login' onPress={loginPressed} />
            <CustomButton title='Go Back' onPress={props.navigation.goBack}/>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        // height: 100,
        backgroundColor: '#743030',
    },
    headerStyle: {
        marginVertical: 30,
        padding: 30,
        color: '#ffffff',
        fontSize: 30,
    },
    textStyle: {
        fontSize: 17,
        color: '#ffffff',
    },
    detailsViewStyle: {
        margin: 10,
        padding: 10,
    },
    textInputStyle: {
        marginVertical: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: 'white',
    }
})


// import { useState } from "react";
// import { 
//   Modal, 
//   TextField, 
//   Button,
//   Box
// } from "@mui/material";

// export default function Login(props){

//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [verified,setVerified] = useState(false);

//   function usernameChanged(input){
//       setUsername(input)
//   }

//   function passwordChanged(input){
//       setPassword(input)
//   }

//   async function loginPressed(){
//       const details = {
//           username: username,
//           password: password
//       }
//       await fetch('http://localhost:3000',{
//           method:'POST',
//           headers: {
//               'Content-Type': 'application/json'
//             },
//           body: JSON.stringify(details)})
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           if(data.status===true){
//               setVerified(true);
//           }
//       })
//       .catch(error => console.error(error));
//   }

//   const handleClose = () => {
//     props.modalVisibility = false;
//   }

//   return(
//       <Modal open={props.modalVisibility} onClose={handleClose}>
//         <Box 
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 400,
//             height: 400,
//             bgcolor: '#fff',
//             p: 3
//           }}
//         >
//           <h2 style={{marginBottom: 30}}>LOGIN</h2>
//           <TextField 
//             label="Username" 
//             variant="outlined" 
//             color="primary" 
//             margin="dense" 
//             value={username} 
//             onChange={(e) => usernameChanged(e.target.value)}
//           />
//           <TextField 
//             label="Password" 
//             variant="outlined" 
//             color="primary" 
//             margin="dense" 
//             type="password" 
//             value={password} 
//             onChange={(e) => passwordChanged(e.target.value)}
//           />
//           <Button 
//             variant="contained" 
//             color="primary" 
//             size="large" 
//             sx={{mt: 3}}
//             onClick={loginPressed}
//           >
//             Login
//           </Button>
//           <Button 
//             variant="outlined" 
//             color="primary" 
//             size="large" 
//             sx={{mt: 1}}
//             onClick={props.goBack}
//           >
//             Go Back
//           </Button>
//         </Box>
//       </Modal>
//   )
// }



