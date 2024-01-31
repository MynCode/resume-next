import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl text-center font-bold">Your Name</h1>
        <p className="text-xl text-center">Your Profession</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p>Short description about yourself.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Experience</h2>
        {/* List your experiences here */}
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Education</h2>
        {/* List your educational background here */}
      </section>
    </main>
  );
}
