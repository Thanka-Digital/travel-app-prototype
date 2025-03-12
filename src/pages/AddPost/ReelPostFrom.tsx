import Input from "@/components/form/input/Input";
import { PostHeading } from "./AddPostPage";
import Button from "@/components/form/button/Button";
import { FileInput } from "./NormalPostForm";
import { useNavigate } from "react-router-dom";
import BackButton from "@/components/global/BackButton";

export default function ReelPostFrom() {
  const navigate = useNavigate()

  return (
    <form className="bg-white text-black h-screen py-4">
      <BackButton />

      <div className="mt-6">
        <PostHeading
          heading="Add Reel"
          bio="Express more with videos"
        />

        <section className="mx-6 flex flex-col gap-4 items-center">
          <Input
            className="bg-white"
            placeholder="Caption"
            label="Caption"
          />

          <FileInput
            label="Video"
            name="video"
            accept=".mp4,.mov,.avi"
          />

          <section className="flex justify-between w-full absolute bottom-10 px-5">
            <Button className="rounded-3xl mt-4 px-10 py-3"
              variant={"outline"}
              colorscheme={"danger"}
              onClick={() => navigate(-1)}
            >Cancel</Button>
            <Button className="rounded-3xl mt-4 px-10 py-3 text-white">Create Post</Button>
          </section>
        </section>
      </div>
    </form>
  )
}