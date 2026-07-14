"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import DeleteAccountModal from "./DeleteAccountModal";

export default function DangerZone() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">

        <h2 className="text-2xl font-bold text-red-400">
          ⚠ Danger Zone
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Deleting your account permanently removes all your
          interviews, resumes, settings, and profile.
          This action cannot be undone.
        </p>

        <div className="mt-8">

          <Button
            variant="danger"
            onClick={() => setOpen(true)}
          >
            Delete Account
          </Button>

        </div>

      </section>

      <DeleteAccountModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}