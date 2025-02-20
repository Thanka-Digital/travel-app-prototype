import Input from "@/components/form/input/Input";
import { exploreTags } from "@/utils/exploreTags";
import Navbar from "@/components/global/Navbar";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

interface ExploreTagsProps {
  path: string;
  name: string;
}

export const ExplorePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <section className="px-3">
        <Input
          className="bg-transparent outline-none text-black"
          placeholder="Search..."
          icon={<Search color="gray" />}
          variant={"unstyled"}
        />
      </section>

      <section className="flex gap-2 mx-4 overflow-x-scroll no-scrollbar">
        {
          exploreTags.map((object, index) => (
            <ExploreTags
              {...object}
              key={index}
            />
          ))
        }
      </section>

      <section className="pb-24">
        {children}
      </section>
      <Navbar />
    </div >
  )
}

export const ExploreTags = (props: ExploreTagsProps) => {
  const {
    path,
    name,
  } = props;

  return (
    <NavLink to={path} className={({ isActive }) =>
      `rounded-2xl text-sm border-2 text-gray-700 px-6 py-1 my-2
    ${isActive ? "bg-primary text-white border-primary" : null}`}>
      {name}</NavLink>
  )
}