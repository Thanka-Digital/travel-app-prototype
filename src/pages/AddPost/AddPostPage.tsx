import Navbar from "@/components/global/Navbar";
import { Link } from "react-router-dom";

function PostNavigate({ text, path }: { text: string, path: string }) {
  return (
    <Link to={path} className="px-6 py-12 w-36 rounded-xl font-medium text-secondary border-2">
      {text}
    </Link>
  )
}

export function PostHeading({ heading, bio }: { heading: string, bio: string }) {
  return (
    <div className="flex flex-col py-4 mx-6">
      <p className="text-2xl font-bold">{heading}</p>
      <p className="text-[#7E7E7E] font-medium text-sm">{bio}</p>
    </div>
  )
}

export default function AddPostPage() {
  return (
    <div className="bg-white h-screen text-black">
      <img src="/Postbg.png"
      />

      <div className="bg-white flex flex-col gap-12 absolute bottom-32 w-full">
        <PostHeading
          heading="Add Post"
          bio="Share your joy with everyone else"
        />

        <section className="flex justify-between mx-6">
          <PostNavigate
            text="Add Normal Post"
            path="/add-post/normal-post"
          />
          <PostNavigate
            text="Share Reel"
            path="/add-post/reel-post"
          />
        </section>
      </div>

      <Navbar />
    </div>
  )
}