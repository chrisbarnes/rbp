import { useState } from "react";

export const PreviewBanner = () => {
  const [isClearing, setIsClearing] = useState(false);
  const handleClearPreviewData = async () => {
    setIsClearing(true);
    const clearPreviewResponse = await fetch("/api/preview/clear").then(
      (response) => response.json()
    );
    setIsClearing(false);

    if (clearPreviewResponse.message === "Success") {
      // Reload the window so the page loads in non-preview mode
      window.location.reload();
    }
  };

  return (
    <div className="bg-slate-600 text-white px-8 py-4">
      <div className="container mx-auto flex justify-between">
        <p>
          You are currently in preview mode. The content visible may not be
          published on the live site.
        </p>
        <button
          type="button"
          onClick={handleClearPreviewData}
          isLoading={isClearing}
        >
          Clear Preview {isClearing && "..."}
        </button>
      </div>
    </div>
  );
};
