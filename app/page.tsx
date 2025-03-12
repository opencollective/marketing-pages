import { TextLoop } from "@/components/motion-primitives/text-loop";

import { Logo } from "@/components/Logo";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto flex flex-col">
      {/* Hero Section */}
      <div className="px-4 py-6">
        <Logo />
      </div>
      <section className="w-full pt-48">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-5xl font-semibold mb-6 text-left max-w-prose">
            Manage money together, <br />
            without the complexity of <br />{" "}
            <TextLoop
              className=""
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                },
              }}
            >
              <span>incorporation</span>
              <span>accounting</span>
              <span>spreadsheets</span>
              <span>bank accounts</span>
            </TextLoop>
          </h1>
          <div className="text-gray-600 space-y-8 max-w-prose text-lg">
            <p>
              Make your finances visible to your team, your community and the
              world. Discover how financial transparency can transform the way
              you think about and relate to money in your organization, group
              and community.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Section with Fixed Screenshot */}
      <Features />
    </main>
  );
}
