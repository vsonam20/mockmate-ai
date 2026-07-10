"use client";

import {
  useSpeechRecognition as useReactSpeechRecognition,
} from "react-speech-recognition";

interface Options {
  onFinalTranscript: (text: string) => void;
}

export function useSpeechRecognition({
  onFinalTranscript,
}: Options) {

  const {
    transcript,
    interimTranscript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useReactSpeechRecognition();

  function start() {
    resetTranscript();

    import("react-speech-recognition").then(
      ({ default: SpeechRecognition }) => {
        SpeechRecognition.startListening({
          continuous: true,
          language: "en-US",
        });
      }
    );
  }

  function stop() {
    import("react-speech-recognition").then(
      ({ default: SpeechRecognition }) => {
        SpeechRecognition.stopListening();

        if (transcript.trim()) {
          onFinalTranscript(transcript.trim());
        }

        resetTranscript();
      }
    );
  }

  return {
    supported: browserSupportsSpeechRecognition,
    isRecording: listening,
    interimTranscript,
    start,
    stop,
  };
}