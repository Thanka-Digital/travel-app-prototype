import { useContext, useState } from "react";

import Input from "@/components/form/input/Input";
import { PostHeading } from "./AddPostPage";
import Button from "@/components/form/button/Button";
import BackButton from "@/components/global/BackButton";
import { useNavigate } from "react-router-dom";
import { PostContext } from "@/providers/Context/context";
import CustomImageInput from "./components/CustomImageInput";
import Select from "@/components/form/select/Select";
import { locationInfo } from "@/utils/locationDetailsData";

const initialPost: Partial<Post> = {
  userId: 1,
  isLiked: false,
  likeCount: 0,
  images: [],
  caption: "",
  season: "all",
  transportation: "all",
  temperature: 0,
  activities: "",
  location: "",
};

export default function NormalPostForm() {
  const navigate = useNavigate();
  const [normalPost, setNormalPost] = useState<Partial<Post>>(initialPost);
  const { postDispatch } = useContext(PostContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    if (name === "temperature") {
      if (isNaN(Number(value))) {
        return;
      }

      setNormalPost((prev) => ({
        ...prev,
        [name]: Number(value),
      }));
      return;
    }
    setNormalPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    base64Images: PostImage[],
    isAdd: boolean = true
  ) => {
    if (isAdd) {
      setNormalPost((prev) => ({
        ...prev,
        images: [...prev.images!, ...base64Images.map((i) => i.base64)],
      }));
    } else {
      setNormalPost((prev) => ({
        ...prev,
        images: prev.images?.filter((im) => im !== base64Images[0].base64),
      }));
    }
  };

  const handlePostAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const p = {
      ...normalPost,
      id: Math.floor(Math.random() * 100),
    } as Post;
    postDispatch({
      type: "ADD",
      payload: p,
    });
    setNormalPost(initialPost);
    navigate("/user-profile/1");
  };

  return (
    <form className="py-4 text-black bg-white" onSubmit={handlePostAdd}>
      <BackButton />

      <div className="mt-6">
        <PostHeading
          heading="Add Post"
          bio="Share your joy with everyone else"
        />

        <section className="flex flex-col items-center gap-4 mx-6">
          <Input
            className="outline-none"
            variant={"unstyled"}
            placeholder="Caption"
            label="Caption"
            name="caption"
            value={normalPost.caption}
            onChange={handleChange}
          />
          <CustomImageInput
            accept="image/*"
            label="Images"
            name="images"
            onChange={handleFileChange}
          />

          <section>
            <p className="text-xl font-semibold">Extra Information</p>
            <p className="text-[#7E7E7E] font-medium text-sm">
              This part will help the comunity to grow but you can skip it if
              you aren't interested.
            </p>
          </section>
          <Select
            label="Best season to vist"
            className="outline-none"
            name="season"
            required
            options={[
              {
                label: "All",
                value: "all",
              },
              {
                label: "Summer",
                value: "summer",
              },
              {
                label: "Winter",
                value: "winter",
              },
              {
                label: "Fall",
                value: "fall",
              },
              {
                label: "Autumn",
                value: "Autumn",
              },
            ]}
            value={normalPost.season}
            onChange={handleChange}
          />
          <Select
            label="Transportation facilities"
            className="outline-none"
            name="transportation"
            required
            options={[
              {
                label: "All",
                value: "all",
              },
              {
                label: "Car and Jeep",
                value: "car-jeep",
              },
              {
                label: "Bus",
                value: "bus",
              },
              {
                label: "By foot",
                value: "foot",
              },
            ]}
            value={normalPost.transportation}
            onChange={handleChange}
          />
          <Input
            className="outline-none"
            variant={"unstyled"}
            placeholder="Temperature of the place"
            label="Temperature"
            name="temperature"
            value={normalPost.temperature}
            onChange={handleChange}
          />
          <Input
            className="outline-none"
            variant={"unstyled"}
            placeholder="List of activities to do"
            label="Activities to do"
            name="activities"
            value={normalPost.activities}
            onChange={handleChange}
          />
          <Select
            label="Location"
            className="outline-none"
            name="location"
            required
            options={locationInfo.map((l) => ({
              label: l.name,
              value: l.name,
            }))}
            value={normalPost.location}
            onChange={handleChange}
          />

          <Button
            className="px-10 py-3 mt-4 text-white rounded-3xl"
            type="submit"
            onClick={() => handlePostAdd}
          >
            Create Post
          </Button>
        </section>
      </div>
    </form>
  );
}
