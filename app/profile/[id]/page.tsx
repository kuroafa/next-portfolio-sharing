import { UserProfile } from "@/common.types";
import ProfilePage from "@/components/ProfilePage";
import { getUserProjects } from "@/lib/actions"

type Props = {
    params: {
        id: string;
    }
}

const userProfile = async ({params}: Props) => {
    const result = await getUserProjects(params.id, 10) as {user: UserProfile}

    if(!result?.user){
        return <p className="no-result-text">Failed to return Info</p>
    }
  return <ProfilePage user={result?.user}/>
}

export default userProfile
