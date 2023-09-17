import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div>0</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        100円売る！
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        100円買う！
      </button>
    </main>
  );
}

// wss://9dk72w5w0i.execute-api.ap-southeast-2.amazonaws.com/production
