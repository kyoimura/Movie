import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="font-semibold text-2xl mb-2 tracking-tighter ">Kyosuke Imura</h1>
        <ol className=" text-sm text-center sm:text-left">
          <li className="mb-8">
            <p>
            I'm a driven UCLA graduate who's passionate about ML/AI, 
            Data Science, and Software Development. 
            </p>
          </li>
          <li className = "mb-4">
            <p>
            I enjoy exploring new ideas, and I'm always excited in
            building upon my personal and technical skills through further experience.
            </p>
          </li>
        </ol>
        
        <a className="text-yellow-300 hover:text-gray-400" href="/interests">
          Here are things I'm involved in and areas of interest.
        </a>

        
      </main>


    </div>
  );
}
