import { Search } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Input from "@/components/form/input/Input";

const exploreTags = [
  "all",
  "Mountains",
  "Urban",
  "Adventure",
  "Upcoming",
  "Nature",
];

export const ExplorePageLayout = ({
  children,
  currentTag,
  setCurrentTag,
}: {
  children: React.ReactNode;
  currentTag: string;
  setCurrentTag: (tag: string) => void;
}) => {
  return (
    <div>
      <section className="px-3 py-6">
        <Input
          className="text-black bg-transparent outline-none"
          placeholder="Search..."
          icon={<Search color="gray" />}
          variant={"unstyled"}
          required={false}
        />
      </section>

      <section className="flex gap-2 mx-4 mb-4 overflow-x-scroll no-scrollbar">
        {exploreTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setCurrentTag(tag)}
            className={`rounded-2xl text-sm border-2 py-1 text-gray-700 px-6 capitalize h-fit
            ${
              currentTag === tag ? "bg-primary text-white border-primary" : null
            }`}
          >
            {tag}
          </button>
        ))}
      </section>

      <section className="pb-24">{children}</section>
      <Navbar />
    </div>
  );
};
