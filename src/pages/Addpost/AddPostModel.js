import { v4 } from "uuid"

class AddPostModel {
    //API'ye göndereceğimiz veri yapısı
    state = {
        id: v4(),
        date: new Date(),
        title: '',
        text: '',
        user: '',
}
}

export default AddPostModel