import { PhotosProvider } from "hooks/usePhotos";
import Home from "pages/home";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <PhotosProvider>
      <Home />
      <ToastContainer autoClose={3000} />
    </PhotosProvider>
  );
}
