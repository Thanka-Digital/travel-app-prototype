import Navbar from "@/components/global/Navbar";
import { Link } from "react-router-dom";

function PostNavigate({ text, path }: { text: string; path: string }) {
  return (
    <Link
      to={path}
      className="px-6 py-12 font-medium text-center border-2 w-36 rounded-xl text-secondary"
    >
      {text}
    </Link>
  );
}

export function PostHeading({
  heading,
  bio,
}: {
  heading: string;
  bio: string;
}) {
  return (
    <div className="flex flex-col py-4 mx-6">
      <p className="text-2xl font-bold">{heading}</p>
      <p className="text-[#7E7E7E] font-medium text-sm">{bio}</p>
    </div>
  );
}

export default function AddPostPage() {
  return (
    <div className="h-screen text-black bg-white">
      <img src="/Postbg.png" />

      <div className="absolute flex flex-col w-full gap-12 bg-white bottom-32">
        <PostHeading
          heading="Add Post"
          bio="Share your joy with everyone else"
        />

        <section className="flex justify-center mx-6">
          <PostNavigate text="Add Normal Post" path="/add-post/normal-post" />
        </section>
      </div>

      <Navbar />
    </div>
  );
}
