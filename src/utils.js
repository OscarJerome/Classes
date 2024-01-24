export function getImageUrl(person,size = 's'){
    return(
        "https://i.imgurl.com/"+
        person.imageId +
        size +
        ".jpg"
    );
}