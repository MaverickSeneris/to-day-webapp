import TopNav from "../ui/topnav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
       <TopNav/>
      </div>
      <div className="px-4">{children}</div>
    </div>
  );
}