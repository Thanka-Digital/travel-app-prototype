import Input from "@/components/form/input/Input";
import { exploreTags } from "@/utils/exploreTags";
import Navbar from "@/components/global/Navbar";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

export const ExplorePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white">
      <section className="px-3">
        <Input
          className="bg-white"
          placeholder="Search..."
          icon={<Search color="gray" />}
          variant={"unstyled"}
        />
      </section>

      <section className="flex gap-2 mx-4 overflow-x-scroll no-scrollbar">
        {
          exploreTags.map((object, index) => (
            <NavLink to={object.path} className={({ isActive }) =>
              `rounded-2xl text-sm border-2 text-gray-700 px-6 py-1 my-2
                 ${isActive ? "bg-primary text-white border-primary" : null}`} key={index}>
              {object.name}</NavLink>
          ))
        }
      </section>
      {children}
      <Navbar />
    </div >
  )
}