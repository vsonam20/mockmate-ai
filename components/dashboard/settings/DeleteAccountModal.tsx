"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { deleteAccountData } from "@/app/actions/delete-account";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DeleteAccountModal({
  open,
  onClose,
}: Props) {
  const [confirmation, setConfirmation] = useState("");

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  function handleDelete() {
    startTransition(async () => {
      const result = await deleteAccountData();

      if (!result.success) {
        toast.error(result.error);
        return;
      }

      toast.success("Account data deleted successfully.");

      router.push("/");

      router.refresh();
    });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-red-500/20 bg-zinc-950 p-8">
        <h2 className="text-3xl font-bold text-red-400">
          Delete Account
        </h2>

        <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
          <p className="text-sm leading-7 text-red-300">
            This action is permanent.
            All interview history, resumes, feedback,
            settings and your account will be permanently deleted.
            This cannot be undone.
          </p>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Type
          <span className="mx-2 rounded bg-red-500/10 px-2 py-1 font-semibold text-red-400">
            DELETE
          </span>
          to continue.
        </p>

        <div className="mt-5">
          <Input
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            placeholder="Type DELETE"
            disabled={isPending}
          />
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <Button
            variant="ghost"
            disabled={isPending}
            onClick={() => {
              setConfirmation("");
              onClose();
            }}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
            disabled={
              confirmation !== "DELETE" ||
              isPending
            }
          >
            {isPending
              ? "Deleting..."
              : "Delete Account"}
          </Button>
        </div>
      </div>
    </div>
  );
}