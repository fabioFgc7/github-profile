import { useEffect, useState } from "react";
import { GithubRepos, UserProfile } from "../type";
import UserInformations from "./UserInformations";
import FormSearch from "./FormSearch";
import DetailsProfile from "./DetailsProfile";

const Profile = () => {
  const [user, setUser] = useState<UserProfile[]>([]);
  const [userRepos, setUserRepos] = useState<GithubRepos[]>([]);
  const [search, setSearch] = useState<string>("github");
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    gitApi();
    gitApiRepos();
  }, []);
  const gitApi = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}`);
      const data = await res.json();
      console.log(data);
      setUser([data]);
    } catch (error) {
      console.log(error);
    }
  };
  const gitApiRepos = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${search}/repos`);
      const data = await res.json();
      console.log(data);
      setUserRepos([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setSearch(search);
    gitApi();
    gitApiRepos();
  };
  return (
    <section className='bg-[#20293A]'>
      <FormSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      <div className='w-full p-5'>
        {" "}
        <article className='md:p-6 text-[#CDD5E0] text-base w-full flex flex-col items-center '>
          <UserInformations users={user} />
          <section className='md:space-y-5 space-y-3 '>
            <div className=''>
              {user.map((el) => (
                <div
                  key={el.id}
                  className='w-auto  text-[#CDD5E0] max-w-lg '>
                  <h2 className='md:text-4xl text-xl font-bold'>{el.name}</h2>
                  <p>{el.bio}</p>
                </div>
              ))}
            </div>
            <div className=''>
              <DetailsProfile userRepos={userRepos} />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default Profile;
