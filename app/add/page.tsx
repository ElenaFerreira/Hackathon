"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AddPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: "", matiere: "", reparation: "" });
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");

  const getCamera = async (mode: "user" | "environment") => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: mode } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
    }
  };

  useEffect(() => {
    getCamera(facingMode);
  }, [facingMode]);

  const switchCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    context.drawImage(videoRef.current, 0, 0, 320, 240);
    const dataURL = canvasRef.current.toDataURL("image/png");
    setPhoto(dataURL);
    setStep(2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      {/* Étapes */}
      <div className="flex justify-between text-sm font-medium text-gray-400">
        <span className={step === 1 ? "text-black font-semibold underline" : ""}>Étape 1</span>
        <span className={step === 2 ? "text-black font-semibold underline" : ""}>Étape 2</span>
        <span className={step === 3 ? "text-black font-semibold underline" : ""}>Étape 3</span>
      </div>

      {/* Vidéo ou photo capturée */}
      {step === 1 && (
        <div className="relative rounded-xl overflow-hidden border border-gray-200 aspect-[4/3] sm:aspect-video">
          <video ref={videoRef} autoPlay playsInline className="absolute top-0 left-0 w-full h-full object-cover" />
          <button onClick={switchCamera} className="absolute top-2 right-2 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
            🔄 Caméra
          </button>
        </div>
      )}

      {/* Aperçu photo + mini formulaire */}
      {step === 2 && photo && (
        <div className="space-y-4">
          <img src={photo} alt="Aperçu de la photo" className="w-full rounded-xl object-cover" style={{ aspectRatio: "4 / 3" }} />
          <div className="space-y-3">
            <input
              type="text"
              name="type"
              placeholder="Type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <input
              type="text"
              name="matiere"
              placeholder="Matière"
              value={form.matiere}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <input
              type="text"
              name="reparation"
              placeholder="Réparation"
              value={form.reparation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button onClick={() => setStep(3)} className="w-full bg-primary text-white py-2 rounded-md font-medium">
              Suivant
            </button>
          </div>
        </div>
      )}

      {/* Bouton capture */}
      {step === 1 && (
        <div className="flex justify-center">
          <button onClick={takePhoto} className="w-16 h-16 bg-primary text-white rounded-full shadow-lg flex items-center justify-center">
            📸
          </button>
        </div>
      )}

      <canvas ref={canvasRef} width="320" height="240" className="hidden" />
    </div>
  );
}
