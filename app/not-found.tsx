import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-greenDesign flex flex-col size-full gap-2">
      <Header />
      <div className="flex flex-col items-center justify-center text-center flex-1 h-full">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <Button asChild>
          <Link
            href="/"
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
