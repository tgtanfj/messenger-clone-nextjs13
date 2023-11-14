import getUser from "../actions/get-user";
import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
  const users = await getUser();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users}/>
        {children}
      </div>
    </Sidebar>
  );
};
export default UsersLayout;
