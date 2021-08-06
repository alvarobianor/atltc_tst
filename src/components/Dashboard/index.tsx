import Card from "components/Card";
import * as S from "./styles";
import { usePhotos } from "hooks/usePhotos";
import Pagination from "components/Pagination";

interface Props {
  openModalDetails: () => void;
}

export default function Dashboard({ openModalDetails }: Props) {
  const { photos } = usePhotos();

  return (
    <S.Container>
      <S.ContainerPagination>
        <S.Row>
          <Pagination />
        </S.Row>
      </S.ContainerPagination>
      <S.Content>
        {photos.map((photo) => (
          <Card
            identify={Number(photo.id)}
            key={photo.id}
            photo={photo}
            onOpenModalDetails={openModalDetails}
          />
        ))}
      </S.Content>
    </S.Container>
  );
}
