import { useState,useEffect } from "react";
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, listAll, list, } from "firebase/storage"
function App() {
  const [image, setImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");
  const upload = () => {
    if (image == null)
      return;
    else {
      const imageRef = ref(storage, `images/${image.name}`)
      uploadBytes(imageRef, image)
      .then(
        (snapshot) => {
          console.log('success');
          getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
    }
  }
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleChange = (e) => {
    setImage(e.target.files[0])
  }
  return (
    <div className="App">
      <center>
        <input type="file" onChange={(e) => { handleChange(e) }} />
        <button onClick={upload}>Upload</button>
      </center>

      <div>
        {imageUrls.map((url) => {
          console.log(url);
          return <img src={url} />;
        })}
      </div>
    </div>
  )
}
export default App;
  // const upload = () => {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyBw4Us1R6dYfYyZP2fTca5JTCmjVG2GHjU",
  //     authDomain: "uploadwithreact.firebaseapp.com",
  //     projectId: "uploadwithreact",
  //     storageBucket: "uploadwithreact.appspot.com",
  //     messagingSenderId: "149648307334",
  //     appId: "1:149648307334:web:d0916dff42d82eeda18d07",
  //     measurementId: "G-T7WMD5L917"
  //   };
  //   let firebase;
  //   firebase.initializeApp(firebaseConfig);
  //   const ref = firebase.storage().ref();
  //   const nameImage = +new Date() + "-" + image.name;
  //   const metadata = {  
  //     contentType: image.type
  // };
  // const task = ref.child(nameImage).put(image, metadata);
  //   task
  //   .then(snapshot => snapshot.ref.getDownloadURL())
  //   .then(url => {setImageUrls((prev) => [...prev, url]);})
  // } 


