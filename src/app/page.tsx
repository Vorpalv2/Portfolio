import BackButton from "@/components/BackButton";
import UnicornScene from "unicornstudio-react/next";

const ExternalLinkIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-4 h-4"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const Homepage = () => {
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-white">
      {/* Name and Contact Links (Top Left) */}
      <div className="absolute top-4 left-4 z-50 text-black">
        <span className="text-2xl">Aakash</span>
        <ul className="mt-2 space-y-1 text-base">
          <li>
            <a
              href="mailto:vorpalv2@yahoo.com"
              className="flex items-center gap-1 hover:underline"
            >
              Email
              <ExternalLinkIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Vorpalv2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              GitHub
              <ExternalLinkIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vorpalv2/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              LinkedIn
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
      </div>

      {/* "Open Portfolio" Button (Top Right - Desktop) */}
      <div className="absolute top-4 right-4 md:block hidden z-50">
        <BackButton buttonName="Open Portfolio" href="/portfolio" />
      </div>

      {/* "Open Portfolio" Button (Center - Mobile) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden z-50">
        <BackButton buttonName="Open Portfolio" href="/portfolio" />
      </div>
      <div
        className="hidden md:block overflow-hidden"
        data-us-project="ZVUjFol3aD7LWcWetCCU"
        style={{
          width: "100%",
          height: "70vh",
          transform: "translateY(40px)",
          // CSS properties are camelCase in React style objects
          clipPath: "inset(0 0 20% 0)",
        }}
        data-us-initialized="true"
        data-scene-id="id-gvj9uaklfhs70ak62ul15t"
      >
        <UnicornScene
          projectId="ZVUjFol3aD7LWcWetCCU"
          height={"70vh"}
          width={"100%"}
          className="pt-100px mt-100px"
        />
      </div>
    </div>
  );
};

export default Homepage;
