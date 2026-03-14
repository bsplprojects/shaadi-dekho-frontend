import SetPreference from "@/components/Profile/SetPreference";
import { useNavigate } from "react-router-dom";

const EditPreferences = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 page-pattern page-dots relative">
      <div className="container max-w-2xl relative z-10">
        <h1 className="text-3xl font-display font-bold mb-2">
          Edit Partner Preferences
        </h1>
        <p className="text-muted-foreground mb-8">
          Refine what you're looking for in a life partner
        </p>

        <SetPreference />
      </div>
    </div>
  );
};

export default EditPreferences;
