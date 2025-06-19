import UserDataApi from "@/commonComponents/api/UserDataApi";
import PostDataApi from "@/commonComponents/api1/PostDataApi";
import NavigationTab from "@/commonComponents/NavigationTab/NavigationTab";

export default function Home() {
  return (
    <div>
      <NavigationTab />
      <UserDataApi />
      <PostDataApi />
    </div>
  );
}




