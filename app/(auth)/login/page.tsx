import { AuthShell } from "@/components/auth-shell";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <AuthShell
      title="Log in to your account"
      subtitle="Welcome back! Please enter your details."
    >
      <LoginForm />
    </AuthShell>
  );
}
