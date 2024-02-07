import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const linkArray: { text: string; href: string }[] = [
    {
      text: "Link1",
      href: "/link1",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
    {
      text: "Link2",
      href: "/link2",
    },
  ];

  return (
    <main className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-3/4 h-3/4 bg-gray-100 rounded-lg p-4 opacity-0 animate-fadeIn overflow-hidden">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            {/*
            <Image
              src="/profile.jpg"
              alt="Descriptive alt text"
              width={200}
              height={200}
              className="rounded-full"
            /> */}
            {linkArray.map((link, index) => (
              <div
                key={index}
                className="animate-slideInFromLeft"
                style={{ opacity: 0, animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <Link href={link.href}>{link.text}</Link>
              </div>
            ))}
          </div>
          <div>hello</div>
        </div>
      </div>
    </main>
  );
}
