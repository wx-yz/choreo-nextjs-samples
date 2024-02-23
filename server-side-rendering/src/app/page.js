import Image from "next/image";

export default async function Home() {

  const res = await fetch('https://run.mocky.io/v3/f8a822e9-9468-4cc4-93b4-4d35ec9d79d3');
  const data = await res.json();

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Next.js App with Server Side Rendering 
        </p>
      </div>

      <div class="pt-12 ">
        <p className="font-mono">
          {JSON.stringify(data)}
        </p>
      </div>
    </main>
  );
}

