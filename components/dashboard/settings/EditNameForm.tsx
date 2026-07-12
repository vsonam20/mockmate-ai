"use client";

import { useState } from "react";
import { toast } from "sonner";

import { updateProfileName } from "@/app/actions/account";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface Props {
  fullName: string;
  email: string;
}

export default function EditNameForm({
  fullName,
  email,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(fullName);
  const router = useRouter();

    async function handleSave() {
    if (!name.trim()) return;

    const result = await updateProfileName(name);

    if (result.success) {
        toast.success("Name updated successfully.");

        setEditing(false);

        setName(name.trim());

        router.refresh();
    } else {
        toast.error(result.error);
        }
    }

  return (
    <div className="space-y-8">

      {/* Full Name */}

      <div>

        <div className="mb-3 flex items-center justify-between">

          <label className="text-sm text-zinc-400">
            Full Name
          </label>

          {!editing ? (
            <Button
                variant="ghost"
                onClick={() => setEditing(true)}
            >
                Edit
            </Button>
          ) : (
            <div className="flex items-center gap-5">

            <Button
                variant="ghost"
                onClick={handleSave}
            >
                Save
            </Button>

            <Button
                variant="ghost"
                onClick={() => {
                    setEditing(false);
                    setName(fullName);
            }}
            >
                Cancel
            </Button>

            </div>
          )}

        </div>

        <Input
          value={name}
          readOnly={!editing}
          onChange={(e) => setName(e.target.value)}
        />

      </div>

      {/* Email */}

      <div>

        <label className="mb-3 block text-sm text-zinc-400">
          Email Address
        </label>

        <Input
          value={email}
          readOnly
          className="opacity-80"
        />

      </div>

    </div>
  );
}