import { useEffect } from "react"
import ListPostView from "./ListPostView"
import axios from "axios"
import { useState } from "react"

//Kullanıcı etkileşimiyle tetiklenecek fonksiyonlar 
//Veri çekme işlemleri yapılır
// View ihtiyacı olan veriler prop olarak gönderilir.
const ListPostController = () => {
    const [data,setData] = useState(null)
    const [showPopup,setShowPopup] = useState(false)
    const [userName, setUserName] = useState(null);
useEffect(()=>{
    axios.get('http://localhost:3005/posts')
    .then((res)=>setData(res.data))
},[])

// Controller bileşenlerinde View döndürülür 
// Gerekli proplar gönerilir
return  <ListPostView 
showPopup={showPopup}
setShowPopup={setShowPopup}
data = {data} 
userName={userName}
setUserName={setUserName}
/>
}

export default ListPostController
