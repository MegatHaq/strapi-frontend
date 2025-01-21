import { contentData } from "@/lib/types";
import { AlignRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

type tableOfContentProps = {
  headers: contentData[];
};

type headerChildrenProps = {
  children: string;
  level: number;
};

const HeaderChildren = ({ children, level }: headerChildrenProps) => {
  const baseClass = "text-sm cursor-pointer hover:text-gray-950 ";
  const additionalClasses =
    level == 1 ? "ml-[20px]" : level == 2 ? "ml-[40px]" : "ml-[60px]";

  const combinedClass = twMerge(baseClass, additionalClasses);

  return <div className={combinedClass}>{children}</div>;
};

export const TableOfContent = (props: tableOfContentProps) => {
  const { headers } = props;

  return (
    <div className="h-full scrollbar overflow-auto border-l-2 border-gray-100 px-4">
      <div className="flex gap-4 mb-4">
        <AlignRight width={16} height={16} />
        <h1 className="text-sm font-bold">On this page</h1>
      </div>
      <div className="flex flex-col gap-2 text-gray-700">
        {headers.map(({ children, level }) => {
          return children.map(({ text }) => {
            return <HeaderChildren level={level}>{text}</HeaderChildren>;
          });
        })}
      </div>
    </div>
  );
};
