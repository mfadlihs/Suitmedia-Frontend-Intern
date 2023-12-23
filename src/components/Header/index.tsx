import { useEffect, useMemo, useState } from "react";
import LinkButton from "./LinkButton";
import tw from "twin.macro";
import { HeaderContainer } from "./styles";

export type PageState =
  | "work"
  | "about"
  | "services"
  | "ideas"
  | "careers"
  | "contact";

export default function Header() {
  const [page, setPage] = useState<PageState>("ideas");

  const onChangePage = (state: PageState) => {
    setPage(state);
  };
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <HeaderContainer
      state={isHeaderVisible}
      isTop={lastScrollTop < 5}
      className={`px-20 py-4 flex justify-between fixed left-0 right-0 duration-1000 z-30`}
    >
      <div>
        <img src="/images/logo-white.png" height={50} width={120} />
      </div>
      <div className="flex text-slate-50 gap-4 items-center">
        <LinkButton type="work" state={page} onUpdate={onChangePage}>
          Work
        </LinkButton>
        <LinkButton type="about" state={page} onUpdate={onChangePage}>
          About
        </LinkButton>
        <LinkButton type="services" state={page} onUpdate={onChangePage}>
          Services
        </LinkButton>
        <LinkButton type="ideas" state={page} onUpdate={onChangePage}>
          Ideas
        </LinkButton>
        <LinkButton type="careers" state={page} onUpdate={onChangePage}>
          Careers
        </LinkButton>
        <LinkButton type="contact" state={page} onUpdate={onChangePage}>
          Contact
        </LinkButton>
      </div>
    </HeaderContainer>
  );
}
