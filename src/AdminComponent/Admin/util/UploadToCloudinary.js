const uplaod_preset = "gestion_restaurants"
const cloud_name = "dkxpul6tf"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudinary= async (file)=>{
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset",uplaod_preset);
    data.append("cloud_name",cloud_name);
    const res= await fetch(api_url,{
        method:"post",
        body:data
    });
    const fileData= await res.json();
    return fileData.url;
}