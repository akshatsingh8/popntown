
import { getAllProfile, getUnassignedProfiles } from '../api-handler/frontend/utils';
import ProfileList from '../components/ProfileList';

function Home({ profiles }){
return <ProfileList data={profiles}/>;
}

export default Home;
  
export const getStaticProps = async () => {
    const profiles = await getUnassignedProfiles();

    return {
        props: {
            profiles,
        },
    };

};