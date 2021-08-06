import Dashboard from "components/Dashboard";
import { InfosModal } from "components/InfosModal";
import Logo from "components/Logo";
import { useState } from "react";

export default function Home() {
  const [isInfosModalOpen, setIsInfosModalOpen] = useState(false);

  function handleOpenInfosModal() {
    setIsInfosModalOpen(true);
  }

  function handleCloseInfosModal() {
    setIsInfosModalOpen(false);
  }

  return (
    <>
      <Logo />
      <Dashboard openModalDetails={handleOpenInfosModal} />
      <InfosModal
        isOpen={isInfosModalOpen}
        onRequestClose={handleCloseInfosModal}
      />
    </>
  );
}
