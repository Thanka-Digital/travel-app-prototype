import Input from "@/components/form/input/Input";
import { PostHeading } from "./AddPostPage";
import Button from "@/components/form/button/Button";
import { ImageUp } from "lucide-react";

export const FileInput = () => {
  return (
    <form className='flex flex-col items-center'>
      <div className='px-28 py-10 rounded-xl border-2 border-dashed'>
        <input className="bg-white"
          style={{ display: "none" }} />
        <ImageUp size={92} color="#D2D2D2" />
      </div>
    </form>
  )
}

export default function NormalPostForm() {
  return (
    <div className="bg-white text-black py-4">
      <PostHeading
        heading="Add Post"
        bio="Share your joy with everyone else"
      />

      <section className="mx-6 flex flex-col gap-4 items-center">
        <Input
          className="bg-white"
          placeholder="Caption"
        />
        <FileInput />

        <section>
          <p className="text-xl font-semibold">Extra Information</p>
          <p className="text-[#7E7E7E] font-medium text-sm">This part will help the comunity to grow but you can skip it if you aren't interested.</p>
        </section>
        <Input
          className="bg-white"
          placeholder="Recommended season"
          label="Best season to visit"
        />
        <Input
          className="bg-white"
          placeholder="Available mode of transport"
          label="Transportaion facility"
        />
        <Input
          className="bg-white"
          placeholder="Temperature of the place"
          label="Temperature"
        />
        <Input
          className="bg-white"
          placeholder="List of activities to do"
          label="Activities to do"
        />

        <Button className="rounded-3xl mt-4 px-10 py-3 text-white">Create Post</Button>
      </section>
    </div>
  )
}