import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { useState, useEffect, FormEvent } from "react";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";

function App() {
  const [upload, setUpload] = useState(false);
  const [loading, setLoadinha] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoadinha(true);
      setPhotos(await Photos.getAll());

      setLoadinha(false);
    };
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUpload(true);

      let result = await Photos.insert(file);

      setUpload(false);

      if (result instanceof Error) {
        alert(result.message);
      } else {
        let newPhotolist = [...photos];
        newPhotolist.push(result);
        setPhotos(newPhotolist);
      }
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>PHOLBUM</C.Header>
        <h2 className="subtitle">
          A Photo Sharing Application{" "}
          <span>Using React JS, Firebase And TypeScript</span> 🚀
        </h2>
        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" id="actual_btn" />
          <input
            type="submit"
            className="up_btn"
            value="Upload The Selected File"
          />
          {upload && " Uploading..."}
        </C.UploadForm>

        {loading && (
          <C.ScreenWarnig>
            <div className="loading__text">Loading Images....</div>
          </C.ScreenWarnig>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name} />
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarnig>
            <div className="emoji">☠️</div>
            <div style={{ fontSize: '32px', color: '#000' }}>No Images</div>
          </C.ScreenWarnig>
        )}
      </C.Area>
    </C.Container>
  );
}

export default App;
