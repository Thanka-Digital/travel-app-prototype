import Input from "@/components/form/input/Input";
import { PostHeading } from "./AddPostPage";
import Button from "@/components/form/button/Button";
import { FileInput } from "./NormalPostForm";

export default function ReelPostFrom() {
  return (
    <div className="bg-white text-black h-screen py-4">
      <PostHeading
        heading="Add Reel"
        bio="Express more with videos"
      />

      <section className="mx-6 flex flex-col gap-4 items-center">
        <Input
          className="bg-white"
          placeholder="Caption"
        />

        <FileInput />

        <section className="flex justify-between w-full absolute bottom-10 px-5">
          <Button className="rounded-3xl mt-4 px-10 py-3 text-danger"
            variant={"outline"}
            colorscheme={"danger"}>Cancel</Button>
          <Button className="rounded-3xl mt-4 px-10 py-3 text-white">Create Post</Button>
        </section>
      </section>
    </div>
  )
}