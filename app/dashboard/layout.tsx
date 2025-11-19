import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { HeaderDashboard } from "@/components/admin/headers/adminheader"
import { Dashboard } from "@/components/admin/dashboard/dashboard";
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <HeaderDashboard></HeaderDashboard>
      <main className=" flex flex-row items-center justify-start  w-full bg-sec text-[3px] sm:text-[4px]   lg:text-[4px]  xl:text-[4px] 2xl:text-[4.5px]  ">
        <Dashboard></Dashboard>
        {children}
        </main>
      
    </>
  );
}