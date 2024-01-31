import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="mb-8 flex flex-row w-full bg-orange-300 p-6">
        <section className="flex flex-col justify-center items-center w-3/4">
          <h1 className="text-4xl text-center font-bold">James Duffield</h1>
          <p className="text-xl text-center">Integrations Manager</p>
          <hr className="w-[50%]" />
          <p>soem stuff here</p>
        </section>
        <section className="flex">
          <Image
            src="/profile.jpg"
            alt="Profile Photo"
            width={200}
            height={200}
            className="rounded-full"
          />
        </section>
      </header>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p>Short description about yourself.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Experience</h2>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Education</h2>
      </section>
    </main>
  );
}
