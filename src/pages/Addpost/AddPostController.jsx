import { useState } from "react"
import AddPostView from "./AddPostView"
import AddPostModel from "./AddPostModel"
import axios from "axios"
import {  useNavigate } from "react-router-dom"


const AddPostController = () => {
    const navigate = useNavigate()
    //class'ın örneğini alma
    const model = new AddPostModel()
    //sate'in varsayılan değerini modelden alma
    const [form, setForm] = useState(model.state)
    //hangi ınputta değişiklik varsa inputa göre state'i günceller
    const onInputChange = (label, value) => {
        //state'in kopyasını alma
        const copyState = { ...form }

        // objenin dinamik bir şekilde değerlerini değiştirme
        copyState[label] = value


        //state'i güncelle
        setForm(copyState)

    }
       //formun gönderilmesi
       const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.user || !form.text || !form.title){
            alert('Lütfen bütün alanları doldurun')
        }

        axios.post('http://localhost:3005/posts',form)
        .then(() => navigate('/'))
       }



    return <AddPostView 
    onInputChange={onInputChange}
    handleSubmit = {handleSubmit}
    />
}

export default AddPostController
