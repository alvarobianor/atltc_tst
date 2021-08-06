import * as S from "./styles";
import { usePhotos } from "hooks/usePhotos";
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface Props {
  identify: number;
  onOpenModalDetails: () => void;
  photo: Photo;
}

export default function Card({ onOpenModalDetails, photo, identify }: Props) {
  const { SetId } = usePhotos();
  return (
    <S.Container
      onClick={() => {
        SetId(identify);
        onOpenModalDetails();
      }}
    >
      <S.Presentation>
        <S.Row>
          <S.Text>Key: {photo.id}</S.Text>
        </S.Row>
      </S.Presentation>
      <S.Content>
        <S.Description>Title: {photo.title}</S.Description>
      </S.Content>
    </S.Container>
  );
}
