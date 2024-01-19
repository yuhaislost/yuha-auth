import LoginButton from "@/components/auth/loginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-[#FF928B] to-[#FFAC81]">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Yuha Auth</h1>
        <p className="text-large text-white">
          The authentication provider you&apos;ll love!
        </p>
        <div>
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
