import Input from "@/components/form/input/Input";
import { PostHeading } from "./AddPostPage";
import Button from "@/components/form/button/Button";
import { ImageUp } from "lucide-react";
import BackButton from "@/components/global/BackButton";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "@/providers/Context/context";

interface FileInput {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: any;
  label: string;
  accept: string;
}

export const FileInput = (props: FileInput) => {
  const {
    onChange,
    name,
    value,
    accept,
    label
  } = props;

  return (
    <div>
      <p className="font-medium">
        {label} <span className="text-danger">*</span>
      </p>
      <section className='flex flex-col items-center mt-1'>
        <label htmlFor="fileInput" className='px-28 py-10 rounded-xl border-2 border-dashed'>
          <input type="file" multiple id="fileInput" accept={accept} onChange={onChange} name={name} value={value}
            style={{ display: "none" }} required />
          <ImageUp size={92} color="#D2D2D2" />
        </label>
      </section>
    </div>
  )
}

const initialPost: Partial<Post> = {
  userId: 1,
  isLiked: false,
  likeCount: 0,
  images: [],
  caption: "gfgkj",
  season: "gfhj",
  transportation: "jklh",
  temperature: "hfhgfh",
  activities: "hffuyfkgjgh",
  location: "nbfhgffgh",
}

export default function NormalPostForm() {
  const navigate = useNavigate();
  const [normalPost, setNormalPost] = useState<Partial<Post>>(initialPost);
  const [postImages, setPostImages] = useState<string[]>([]);
  const { postDispatch } = useContext(PostContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNormalPost((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFlieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setNormalPost((prev) => ({
      ...prev,
      [name]: [files![0].name]
    }))
  }

  const handlePostAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const p = {
      ...normalPost, id: Math.floor(Math.random() * 100)
    } as Post
    postDispatch({
      type: "ADD",
      payload: p,
    })
    setNormalPost(initialPost);
    navigate('/user-profile');
  }

  return (
    <form className="bg-white text-black py-4" onSubmit={handlePostAdd}>
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
            label="Caption"
            name="caption"
            value={normalPost.caption}
            onChange={handleChange}
          />
          <FileInput
            accept=".png,.jpg,.jpeg"
            label="Images"
            onChange={handleFlieChange}
            name="images"
          // value={normalPost.images}
          />

          <section>
            <p className="text-xl font-semibold">Extra Information</p>
            <p className="text-[#7E7E7E] font-medium text-sm">This part will help the comunity to grow but you can skip it if you aren't interested.</p>
          </section>
          <Input
            className="bg-white"
            placeholder="Recommended season"
            label="Best season to visit"
            name="season"
            value={normalPost.season}
            onChange={handleChange}
          />
          <Input
            className="bg-white"
            placeholder="Available mode of transport"
            label="Transportation facility"
            name="transportation"
            value={normalPost.transportation}
            onChange={handleChange}
          />
          <Input
            className="bg-white"
            placeholder="Temperature of the place"
            label="Temperature"
            name="temperature"
            value={normalPost.temperature}
            onChange={handleChange}
          />
          <Input
            className="bg-white"
            placeholder="List of activities to do"
            label="Activities to do"
            name="activities"
            value={normalPost.activities}
            onChange={handleChange}
          />
          <Input
            className="bg-white"
            placeholder="Location Name"
            label="Location"
            name="location"
            value={normalPost.location}
            onChange={handleChange}
          />

          <Button
            className="rounded-3xl mt-4 px-10 py-3 text-white"
            type="submit"
            onClick={() => handlePostAdd}
          >Create Post</Button>
        </section>
      </div>
    </form>
  )
}