"use client";

import { useCallback, useEffect } from "react";
import { Mic, Square } from "lucide-react";

import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

interface RecordingPanelProps {
  isRecording: boolean;
  setIsRecording: React.Dispatch<React.SetStateAction<boolean>>;

  transcript: string;
  setTranscript: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function RecordingPanel({
  setIsRecording,
  setTranscript,
}: RecordingPanelProps) {

  // Append only FINAL recognized speech
  const handleFinalTranscript = useCallback(
    (text: string) => {
      setTranscript((prev) =>
        prev.trim()
          ? `${prev} ${text}`.trim()
          : text
      );
    },
    [setTranscript]
  );

  const {
    supported,
    isRecording,
    interimTranscript,
    start,
    stop,
  } = useSpeechRecognition({
    onFinalTranscript: handleFinalTranscript,
  });

  // Sync recording state with parent
  useEffect(() => {
    setIsRecording(isRecording);
  }, [isRecording, setIsRecording]);

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      <div className="flex flex-col items-center gap-6">

        <div
          className={`
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            transition-all
            duration-300
            ${
              isRecording
                ? "bg-red-500 animate-pulse"
                : "bg-pink-500"
            }
          `}
        >
          {isRecording ? (
            <Square className="text-white" size={30} />
          ) : (
            <Mic className="text-white" size={36} />
          )}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white">
            {isRecording
              ? "Recording..."
              : "Ready to Record"}
          </h3>

          <p className="mt-2 text-zinc-400">
            {isRecording
              ? "Speak naturally. We'll capture your answer."
              : "Click the button below to start answering."}
          </p>
        </div>

        {/* Live speech preview */}
        {interimTranscript && (
          <div
            className="
              w-full
              rounded-xl
              border
              border-white/10
              bg-black/20
              p-3
              text-sm
              text-zinc-300
            "
          >
            {interimTranscript}
          </div>
        )}

        <button
          onClick={() => {

            if (!supported) {
              alert(
                "Speech Recognition is not supported in this browser."
              );
              return;
            }

            if (isRecording) {
              stop();
            } else {
              start();
            }

          }}
          className="
            rounded-2xl
            bg-gradient-to-r
            from-pink-500
            to-fuchsia-500
            px-8
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
          "
        >
          {isRecording
            ? "Pause Recording"
            : "Start Recording"}
        </button>

      </div>
    </div>
  );
}