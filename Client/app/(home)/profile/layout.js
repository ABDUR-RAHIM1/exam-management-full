import { getDataHandler } from "@/app/actions/users/getData";
import ProfileSidebar from "./ProfileSidebar";
import NotFound from "@/app/components/Globals/NotFound";



// Metadata for the page
export const metadata = {
    title: "Profile",
    description: "Generated by create next app",
};



export default async function ProfileLayout({ children }) {
    const api = "/user/me";
    const { status, result } = await getDataHandler(api);

    if (status && status !== 200) {
        return <NotFound page={"User"} />
    }

    return (
        <div className="flex">
            <ProfileSidebar profileInfo={result} />

            <main className="  flex-1 h-screen overflow-y-auto scrollbar-hidden bg-gray-200 py-16 md:py-10 px-4">
                {children}
            </main>
        </div>
    );
}
