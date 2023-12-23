import { useEffect, useMemo, useState } from "react";
import LinkButton from "./LinkButton";
import tw from "twin.macro";
import { HeaderContainer } from "./styles";
import Icon from "../Icon";
import NavMobile from "./NavMobile";

export type PageState =
  | "work"
  | "about"
  | "services"
  | "ideas"
  | "careers"
  | "contact";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
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
      className={`lg:px-20 px-6 sm:px-10 md:px-16 py-4 items-center flex justify-between fixed left-0 right-0 duration-1000 z-30`}
    >
      <div>
        <img
          src="/images/logo-white.png"
          className="sm:h-10 h-8 md:h-11 lg:h-12"
        />
      </div>
      <div className="md:hidden">
        <div
          onClick={() => {
            console.log("asdasd");
            setShow(!show);
          }}
          style={{ zIndex: 100, position: "relative" }}
        >
          <Icon name="menu" size={22} color="white" />
        </div>
        <NavMobile active={show} page={page} onUpdate={onChangePage} />
      </div>
      <div className="hidden md:flex text-slate-50 gap-4 items-center">
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
