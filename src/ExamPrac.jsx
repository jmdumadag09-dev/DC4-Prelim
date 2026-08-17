import {useState} from "react";


function ExamPrac(){
    const [username, setUsername] =useState('');
    const [email, setEmail] =useState('');
    const [agreed, setAgreed] =useState(false);

    const handleSubmit = () => {
        if(!agreed) return;
    console.log({username, email});
    };
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input value ={username}onChange={e => setUsername(e.target.value)}/>
                <input value ={email}onCanPlay={e => setEmail(e.target.value)}/>
                <input type ="checkbox" checked={agreed} onCanPlay={e => setAgreed(e.target.checked)}/>
                <button type ="submit">Sign up</button>
            </form>
 
</div>
    );
}
export default ExamPrac;