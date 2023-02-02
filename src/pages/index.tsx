import HeaderNavigation from "@/components/HeaderNavigation";
import NaverMap from "@/components/NaverMap";

export default function Home() {
  return (
    <>
      <div
        className={`flex flex-col min-h-[calc(100vh-45px)] items-center justify-center`}
      >
        <NaverMap />
      </div>
    </>
  );
}
