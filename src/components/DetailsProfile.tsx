import { formatDistanceToNow } from "date-fns";
import { GithubRepos } from "../type";
import { useState } from "react";

interface Props {
  userRepos: GithubRepos[];
}

const DetailsProfile = ({ userRepos }: Props) => {
  const [countRepos, setCountRepos] = useState<number>(4);
  const [isActiveCountRepos, setIsActiveCountRepos] = useState<boolean>(false);
  const handleCountRepos = () => {
    if (isActiveCountRepos) {
      setCountRepos(4);
      setIsActiveCountRepos(false);
    } else {
      setCountRepos(userRepos.length);
      setIsActiveCountRepos(true);
    }
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full grid md:gap-6 gap-5 md:grid-cols-2 grid-cols-1 place-items-center place-content-center'>
        {userRepos.slice(0, countRepos).map((repo) => {
          const date = new Date(repo.updated_at);
          const relativeDate = formatDistanceToNow(date, { addSuffix: true });

          return (
            <div
              key={repo.id}
              className='bg-gradient-to-l to-[#111729] from-[#1D1B48] rounded-lg w-full max-h-min md:p-7 p-3  max-w-lg gap-2'>
              <h3 className='text-[#CDD5E0] text-lg font-semibold'>
                {repo.name}
              </h3>
              <p>{repo.description}</p>
              <div className='flex gap-5 mt-5 w-full'>
                <div className='flex gap-2 items-center'>
                  {repo.license !== null ? (
                    <>
                      <img
                        src='/src/assets/profiles/Chield_alt.svg'
                        alt={repo.license.name}
                        className=''
                      />
                      <span className=''>{repo.license.spdx_id}</span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className='flex gap-2 items-center'>
                  <img
                    src='/src/assets/profiles/Nesting.svg'
                    alt='Forks'
                    className=''
                  />
                  <span className=''>{repo.forks}</span>
                </div>
                <div className='flex gap-2 items-center'>
                  <img
                    src='/src/assets/profiles/Star.svg'
                    alt='stars gazers count'
                    className=''
                  />
                  <span className=''>{repo.stargazers_count}</span>
                </div>
                <span>{relativeDate}</span>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleCountRepos}
        className='text-center md:text-xl text-lg font-sans mt-10 '>
        {isActiveCountRepos
          ? "Ver menos repositorios  "
          : "Ver todos los repositorios"}
      </button>
    </div>
  );
};

export default DetailsProfile;
