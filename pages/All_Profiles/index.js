import { getAllProfile } from "../../api-handler/frontend/utils";
import ProfileList from "../../components/ProfileList"

function AllProfilesHome({profiles}) {
    return<ProfileList data={profiles} />;
}
export default AllProfilesHome;

export const getStaticProps = async () => {
    const profiles = await getAllProfile();

    return {
        props: {
            profiles,
        },
    };

};