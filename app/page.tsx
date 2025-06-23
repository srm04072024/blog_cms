import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10 container mx-auto grid grid-cols-1 gap-6 p-12 text-white">
      <h1 className="text-4xl font-bold">Home</h1>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </main>
  );
}
