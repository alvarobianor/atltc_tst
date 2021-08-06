import { usePhotos } from "hooks/usePhotos";
import * as S from "./styles";

export default function Pagination() {
  const { PreviosPage, NextPage, infosPagination } = usePhotos();
  return (
    <>
      <S.BoxTransparent>
        <S.Box>
          <S.ButtonSC
            disabled={
              infosPagination.start === 0 || infosPagination.start === 1
            }
            onClick={PreviosPage}
          >
            <S.IconCustom fontSize="large">chevron_left</S.IconCustom>
          </S.ButtonSC>
          <S.ButtonSC
            disabled={
              infosPagination.start === infosPagination.end ||
              infosPagination.end >= infosPagination.total
            }
            onClick={NextPage}
          >
            <S.IconCustom fontSize="large">chevron_right</S.IconCustom>
          </S.ButtonSC>
        </S.Box>
        <S.Infos>
          {/* <S.TextInfos>1 - 10 de 50</S.TextInfos> */}
          <S.TextInfos>{`${infosPagination.start} - ${infosPagination.end} de ${infosPagination.total}`}</S.TextInfos>
        </S.Infos>
      </S.BoxTransparent>
    </>
  );
}
