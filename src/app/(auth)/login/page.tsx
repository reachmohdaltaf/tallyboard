import { LoginForm } from "@/components/LoginForm";

export default function Page() {
  return (
    <div className="flex bg-accent min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full bg-accent max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
