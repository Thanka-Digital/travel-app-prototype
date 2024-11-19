interface PFriendCardProps {
  id: string;
  name: string;
  image: string;
}
export default function PFriendCard(props: PFriendCardProps) {
  const { id, name, image } = props;
  return (
    <div className="flex flex-col items-center mb-5" key={id}>
      <img
        src={image}
        alt="friend image"
        className="rounded-full h-24 object-cover w-24"
      />
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}
