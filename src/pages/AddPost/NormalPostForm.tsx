import Input from "@/components/form/input/Input";
import Button from "@/components/form/button/Button";
import { ImageUp } from "lucide-react";
import BackButton from "@/components/global/BackButton";

export function PostHeading({ heading, bio }: { heading: string, bio: string }) {
  return (
    <div className="flex flex-col py-4 mx-6">
      <p className="text-2xl font-bold">{heading}</p>
      <p className="text-[#7E7E7E] font-medium text-sm">{bio}</p>
    </div>
  )
}

export const FileInput = ({ accept }: { accept: string }) => {
  return (
    <form className='flex flex-col items-center'>
      <label htmlFor="fileInput" className='px-28 py-10 rounded-xl border-2 border-dashed'>
        <input type="file" multiple id="fileInput" accept={accept}
          style={{ display: "none" }} />
        <ImageUp size={92} color="#D2D2D2" />
      </label>
    </form>
  )
}

export default function NormalPostForm() {
  return (
    <div className="bg-white text-black py-4">
      <BackButton />

      <div className="mt-6">
        <PostHeading
          heading="Add Post"
          bio="Share your joy with everyone else"
        />

        <section className="mx-6 flex flex-col gap-4 items-center">
          <Input
            className="bg-white"
            placeholder="Caption"
          />
          <FileInput accept=".png,.jpg,.jpeg" />

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

          <Button className="rounded-3xl mt-4 px-10 py-3 text-white" type="submit">Create Post</Button>
        </section>
      </div>
    </div>
  )
}