import { UserProfile } from "../type";

interface Props {
  users: UserProfile[];
}

const UserInformations = ({ users }: Props) => {
  return (
    <div className='w-full'>
      {users.map((user) => (
        <div
          className='w-full'
          key={user.id}>
          <div className='flex  md:justify-evenly justify-around md:gap-4 gap-2 items-center text-[#8a9bb6]'>
            <div className='bg-[#20293A] p-2 relative -top-14 md:-top-16  rounded-lg  flex justify-center'>
              <img
                className='rounded-md  w-32 '
                src={user.avatar_url}
                alt=''
              />
            </div>
            <div className='flex md:flex-row flex-col  justify-center gap-5 md:mt-5 text-lg font-medium'>
              <p className='md:px-5 md:py-2  px-2 py-1 rounded-lg bg-[#111729] flex gap-2 items-center'>
                <span className='relative px-2'>
                  Folloers
                  <span className='absolute w-[1px] h-full  bg-[#364153] right-0'></span>
                </span>
                <span className='text-[#CDD5E0]'> {user.followers} </span>
              </p>
              <p className='px-2 py-1 rounded-lg bg-[#111729] flex gap-2 items-center'>
                <span className='relative px-2'>
                  Following
                  <span className='absolute w-[1px] h-full  bg-[#364153] right-0'></span>
                </span>

                <span className='text-[#CDD5E0]'> {user.following}</span>
              </p>
              <p className='px-2 py-1 rounded-lg bg-[#111729] flex gap-2 items-center max-w-sm'>
                <span className='relative px-2 h-full '>
                  Location
                  <span className='absolute w-[1px] h-full  bg-[#364153] right-0'></span>
                </span>
                <span className='text-[#CDD5E0]'> {user.location}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInformations;
