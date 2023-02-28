import { useState } from "react";

function useOpenMenu () {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);

  return [isMenuOpen, setIsMenuOpen];
}

export default useOpenMenu;