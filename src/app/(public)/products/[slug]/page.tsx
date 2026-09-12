export default function ProductSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Product: {params.slug}</h1>
    </div>
  );
}
