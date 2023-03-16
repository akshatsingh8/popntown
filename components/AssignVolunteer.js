import React, { Component, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProfileFromId, updateProfile } from '@/api-handler/frontend/utils';
import AssignVolunteerForm from '../components/AssignVolunteerForm.js';

const UpdateProfile = () => {
    const [profile, setProfile] = useState();
    const router = useRouter();
    const  id = router.query.id;
    useEffect(() => {
        getProfileFromId(id)
        .then((data) => setProfile(data))
        .catch((err) => console.log(err));
    }, [router.query.id]);
    console.log(profile);
const getFormData = (data) => {
    updateProfile(id, data)
    .then((value) => console.log(value)).then(() => {
        router.push("/All_Profiles");
    })
    .catch((err) => console.log(err));


}
  return (
    <div>
        {profile ? (<AssignVolunteerForm data={profile} onSubmit={getFormData}/>) : <p>Unable To Load Profie</p>}
    </div>
  )
}

export default UpdateProfile