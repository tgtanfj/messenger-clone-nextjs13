import getCurrentUser from "@/app/actions/get-current-user"
import MobileFooter from "./MobileFooter"
import DesktopSidebar from "./DesktopSidebar"

const Sidebar = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser()
  


  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!}/>
      <MobileFooter/>
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar