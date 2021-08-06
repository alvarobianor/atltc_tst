import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface PhotosProviderProps {
  children: ReactNode;
}

type Photos = Photo[];

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface InfosPagination {
  start: number;
  end: number;
  total: number;
}

interface PhotosData {
  photos: Photos;
  photo: Photo;
  infosPagination: InfosPagination;
  idToGetPhoto: number;
  SetId: (id: number) => void;
  PreviosPage: () => void;
  NextPage: () => void;
}

const PhotosContext = createContext<PhotosData>({} as PhotosData);

export function PhotosProvider({ children }: PhotosProviderProps) {
  const [photos, setPhotos] = useState<Photos>([] as Photos);
  const [photo, setPhoto] = useState<Photo>({} as Photo);
  const [numberAllPhotos, setNumberAllPhotos] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const limit = 10;
  const [infosPagination, setInfosPagination] = useState<InfosPagination>(
    {} as InfosPagination
  );

  const [idToGetPhoto, SetIdToGetPhoto] = useState<number>(1);

  useEffect(() => {
    const createInfosPaginations = async () => {
      const start = limit * page + 1;
      const end = limit * page + limit;
      try {
        setInfosPagination({
          start: start > numberAllPhotos ? numberAllPhotos : start,
          end: end > numberAllPhotos ? numberAllPhotos : end,
          total: numberAllPhotos,
        });
      } catch (error) {
        toast.error("Data could not be loaded correctly!");
      }
    };

    createInfosPaginations();
  }, [limit, numberAllPhotos, page]);

  useEffect(() => {
    const loadNumberPhotos = async () => {
      try {
        const { data } = await api.get<Photos>("");

        setNumberAllPhotos(data.length);
        toast.success("Data loaded successfully!");
      } catch (error) {
        toast.error("Data could not be loaded correctly!");
      }
    };
    loadNumberPhotos();
  }, []);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const { data } = await api.get<Photos>(
          `?_start=${page * limit}&_limit=${limit}`
        );

        setPhotos(data);
      } catch (error) {
        toast.error("Data could not be loaded correctly!");
      }
    };
    loadPhotos();
  }, [infosPagination.start, limit, page]);

  useEffect(() => {
    const LoadPhoto = async (): Promise<void> => {
      try {
        const { data } = await api.get<Photo[]>(`?id=${idToGetPhoto}`);
        setPhoto(data[0]);
      } catch (error) {
        toast.error("Data could not be loaded correctly!");
      }
    };
    LoadPhoto();
  }, [idToGetPhoto]);

  const SetId = (id: number) => {
    try {
      SetIdToGetPhoto(id);
    } catch (error) {
      toast.error("Data could not be loaded correctly!");
    }
  };

  const PreviosPage = async (): Promise<void> => {
    try {
      setPage(page - 1);
    } catch (error) {
      toast.error("Somebody is wrong :(");
    }
  };

  const NextPage = async (): Promise<void> => {
    try {
      setPage(page + 1);
    } catch (error) {
      toast.error("Somebody is wrong :(");
    }
  };
  return (
    <PhotosContext.Provider
      value={{
        photos,
        infosPagination,
        photo,
        idToGetPhoto,
        SetId,
        PreviosPage,
        NextPage,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

export function usePhotos() {
  const context = useContext(PhotosContext);

  return context;
}
