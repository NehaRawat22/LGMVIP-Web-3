import "../App.css";
import React, {useState} from 'react';

function Form(props){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [course,setCourse] = useState('');
    const [agree,setAgree] = useState(false);
    const [image, setImage] = useState('');
    var loadFile = function(e) {
      var image = document.getElementById('output');
      image.src = URL.createObjectURL(e.target.files[0]);
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!agree){
            alert("Terms & Conditions not checked");
        }
        else{
            const value = {'name': name, 'email': email, 'phone': phone, 'address': address, 'course': course, 'image': image };
            console.log(value);
            props.addValue(value);
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setCourse('');
        }
    }
    return(
        <div className="form">
            <h1>Registration Form</h1>
            <form onSubmit={onSubmit} className="form-data" method="POST" id="imageForm" encType="multipart/form-data">
                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/><br/>
                <input type="text" name="email" id="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
                <input type="text" name="phone" id="phone" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)}/><br/>
                <input type="text" name="address" id="address" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)}/><br/>
                <input type="text" name="course" id="course" placeholder="Course" value={course} onChange={e=>setCourse(e.target.value)}/><br/>

                <input type="file" id="image" name="image" value={image} onClick={(e) => setImage(e.target.value)} onChange={(e)=>loadFile(e)} accept="image/*" style={{cursor: "pointer"}}></input><br/>

                <div>
                    <input type="checkbox" id="agree" name="agree" onChange={()=>{setAgree(!agree);}}/>
                    <label htmlFor="agree">Agree to Terms & Conditions</label>
                </div><br/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
}
export default Form