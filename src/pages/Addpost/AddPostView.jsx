const AddPostView = ({onInputChange,handleSubmit}) => {
  return (
  
    <form onSubmit={handleSubmit} action="">
        <h2>Yeni Gönderi Ekle</h2>
        <fieldset>
            <label>Kullanıcı Adı</label>
            <input
            onChange={(e)=>onInputChange('user',e.target.value)} type="text" placeholder="örn:Ahmet" />
        </fieldset>

        <fieldset>
            <label>Başlık</label>
            <input  onChange={(e)=>onInputChange('title',e.target.value)} type="text" placeholder="örn:MVC Mimarisi" />
        </fieldset>

        <fieldset>
            <label>Açıklama</label>
            <textarea  onChange={(e)=>onInputChange('text',e.target.value)} type="text" placeholder="Açıklamayı giriniz..." 
            maxLength={'100'}
            />
        </fieldset>

        <button>Gönder</button>
    </form>
  
  )
}

export default AddPostView
