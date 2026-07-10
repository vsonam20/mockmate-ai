"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root {...props} />;
}

function DialogTrigger(
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogPortal(
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogClose(
  props: React.ComponentProps<typeof DialogPrimitive.Close>
) {
  return <DialogPrimitive.Close {...props} />;
}

function DialogOverlay({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      className={`fixed inset-0 z-50 bg-black/70 ${className}`}
      {...props}
    />
  );
}

function DialogContent({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={`
          fixed
          left-1/2
          top-1/2
          z-50
          w-full
          max-w-lg
          -translate-x-1/2
          -translate-y-1/2
          rounded-3xl
          border
          border-white/10
          bg-[#151018]
          p-8
          shadow-2xl
          outline-none
          ${className}
        `}
        {...props}
      />
    </DialogPortal>
  );
}

function DialogHeader({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mb-6 flex flex-col gap-2 ${className}`}
      {...props}
    />
  );
}

function DialogTitle({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={`text-2xl font-bold text-white ${className}`}
      {...props}
    />
  );
}

function DialogDescription({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={`text-zinc-400 ${className}`}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
};