/* eslint-disable @next/next/no-img-element */
import { StyledImage } from "./(component)/StyledImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-around p-24">
      <div className="max-w-md">
        {/* Top right flower image */}
        <div className="fixed top-0 right-0 z-[0]">
          <StyledImage src="/flower-svgrepo-com.svg" alt="Flower" />
        </div>

        {/* Main content */}
        <section className="flex flex-col items-center justify-center">
          <img className="mask mask-squircle" src="/casi_pizza.jpg" alt="Casi Pizza" />
          <h1 className="text-5xl font-bold mt-6">Bye Bye Pilu!</h1>
          <p className="py-6 text-2xl font-[cursive]">Your Bestest Friend</p>
        </section>

        {/* Bottom left flower image */}
        <div className="fixed bottom-0 left-0 z-[0]">
          <StyledImage src="/flower-green-svgrepo-com.svg" alt="Flower" />
        </div>
      </div>
    </main>
  );
}
