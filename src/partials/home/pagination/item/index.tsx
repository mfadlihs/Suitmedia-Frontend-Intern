import Icon from "@/components/Icon";
import { ItemContainer } from "./styles";
import { useRouter } from "next/router";

type LabelPagination = "&laquo; Previous" | "Next &raquo;" | "..." | string;

interface ItemPaginationProps {
  isActive: boolean;
  label: LabelPagination;
}

const IconPagination = ({
  children,
}: {
  children: LabelPagination;
}): React.ReactNode => {
  switch (children) {
    case "&laquo; Previous":
      return <Icon name="chevron-left" color="#ff6800" />;
    case "Next &raquo;":
      return <Icon name="chevron-right" color="#ff6800" />;
    default:
      return children;
  }
};

export default function ItemPagination({
  isActive,
  label,
}: ItemPaginationProps) {
  const router = useRouter();

  return (
    <ItemContainer
      onClick={() => {
        if (!isNaN(Number(label))) {
          router.push({
            pathname: router.pathname,
            query: { ...router.query, page: label },
          });
        }
      }}
      className={`${
        isActive && "bg-orange text-slate-100 font-medium"
      } flex items-center text-xs md:text-base cursor-pointer justify-center p-2 aspect-square md:w-8 md:h-8 w-6 h-6 rounded-lg`}
    >
      <IconPagination>{label}</IconPagination>
    </ItemContainer>
  );
}
