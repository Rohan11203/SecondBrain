import { Brain,  ArrowRight, Sparkle } from "lucide-react";
import { Button } from "../components/ui/Button";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center">
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Second Brain for
            <span className="text-purple-600"> Better Thinking</span>
          </h1>
          <div className="flex justify-center">
            <Brain className="h-10 w-10 " />
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Organize your thoughts, connect ideas, and unlock your creative
            potential with our AI-powered second brain app
          </p>
          <div className="flex justify-center gap-4">
            <Button
              text=" Get Started Free"
              size="md"
              variant="primary"
              endIcon={<ArrowRight className="ml-2 h-4 w-4" />}
            />

            <Button
              size="md"
              text=" Watch Now"
              variant="secondary"
              endIcon={<Sparkle className="ml-2 h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
