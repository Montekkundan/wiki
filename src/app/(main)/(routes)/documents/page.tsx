"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Icons } from "@/components/icons";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" })
      .then((documentId) => router.push(`/documents/${documentId}`))

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };

  const onDashboard = () => {
    router.push("/dashboard");
  }

  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome {user?.firstName}
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-6">
      <Button className="mt-6" onClick={onDashboard}>
        <Icons.plusCircle className="h-4 w-4 mr-2" />
        Dashboard
      </Button>
      <Button className="mt-6" onClick={onCreate}>
        <Icons.plusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
      </div>
    </div>
   );
}
 
export default DocumentsPage;