interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
}
const FormSearch = ({ handleChange, handleSubmit, search }: Props) => {
  return (
    <section className="bg-[url('/src//assets/profiles/hero-image-github-profile.png')] flex justify-center w-full bg-cover text-lg  md:h-[300px] h-40 p-5">
      <form
        action=''
        onSubmit={handleSubmit}
        className='w-full md:mt-10 mt-5 flex justify-center '>
        <div className='md:w-1/2 relative w-full '>
          <input
            type='text'
            className='w-full  px-10 md:py-4 py-2 rounded-xl bg-[#20293A]  text-[#a0abbb] placeholder:text-[#a0abbb] outline-none'
            placeholder='username'
            onChange={handleChange}
            value={search}
          />
          <img
            src='/src/assets/profiles/Search.svg'
            alt='Search'
            className='absolute md:top-4 top-2 left-4  -translate-x-1/2'
          />
        </div>
      </form>
    </section>
  );
};

export default FormSearch;
