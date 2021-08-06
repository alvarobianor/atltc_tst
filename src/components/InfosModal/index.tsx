import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "assets/close/close.svg";
import { usePhotos } from "hooks/usePhotos";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function InfosModal({ isOpen, onRequestClose }: ModalProps) {
  const { photo, idToGetPhoto } = usePhotos();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <img
          src={CloseButtonImg}
          alt="CloseButton"
          className="close-button-modal"
          onClick={onRequestClose}
        />
      </button>

      <S.Container>
        <h2>Details</h2>

        {photo.id === idToGetPhoto && (
          <>
            <S.Text>Title: {photo.title}</S.Text>
            <S.Space />
            <S.Text>Thumbnail: </S.Text>
            <S.Flag src={photo.thumbnailUrl} alt="thumbnail" />
          </>
        )}
      </S.Container>
    </Modal>
  );
}
