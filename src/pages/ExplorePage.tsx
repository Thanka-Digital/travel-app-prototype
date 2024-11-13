import Input from "@/components/form/input/Input";
import { useNavigate } from "react-router-dom";
import Button from "@/components/form/button/Button";
import { exploreTags } from "@/utils/exploreTags";

export const ExploreTags = ({ text, path }: { text: string, path: string }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => { navigate(path) }}
      className="rounded-xl"
    >{text}</Button>
  )
}

export default function ExplorePage() {
  return (
    <div className="bg-white h-screen">
      <Input
        colorscheme={"gray"}
      />
      <section className="flex gap-6 mx-4">
        {
          exploreTags.map((object, index) => (
            <ExploreTags
              text={object.name}
              key={index}
              path={object.path}
            />
          ))
        }
      </section>




    </div >
  )
}