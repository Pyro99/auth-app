export default function UserProfile({ params }: any) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl">Profile No : {params.id}</h1>
    </div>
  );
}
