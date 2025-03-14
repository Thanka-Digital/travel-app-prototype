import { ImageUp, X } from "lucide-react";
import { imageTobase64 } from "@/utils/imageToBase64";
import { useState } from "react";

interface CustomImageInput {
  onChange: (base64Images: PostImage[], isAdd?: boolean) => void;
  name: string;
  label: string;
  accept: string;
}

export default function CustomFileInput(props: CustomImageInput) {
  const [images, setImages] = useState<PostImage[]>([]);

  const {
    onChange,
    name,
    accept,
    label
  } = props;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgs = await imageTobase64(e);
    setImages((prev) => ([...prev, ...imgs]));
    onChange(imgs);
  }

  const removeImage = (id: number) => {
    onChange([images.find((im) => im.id === id)!], false);
    setImages((prevImages) => prevImages.filter((img) => img.id !== id));
  };

  return (
    <div>
      <p className="font-medium">
        {label} <span className="text-danger">*</span>
      </p>
      <section className='flex flex-col items-center mt-1'>
        <label htmlFor="fileInput" className='px-28 py-10 rounded-xl border-2 border-dashed'>
          <input type="file" multiple id="fileInput" accept={accept} onChange={handleChange} name={name}
            style={{ display: "none" }} required />
          <ImageUp size={92} color="#D2D2D2" />
        </label>
        <div className="grid grid-cols-4 gap-4 m-2">
          {images.map((img) => (
            <div className="relative" key={img.id}>
              <img src={img.base64} alt="Preview" className="aspect-square object-cover rounded" />
              <button
                onClick={() => removeImage(img.id)}
                className="absolute top-0 right-0 text-red-600"
              ><X size={18} /></button>
            </div>))}
        </div>
      </section>
    </div>
  )
}