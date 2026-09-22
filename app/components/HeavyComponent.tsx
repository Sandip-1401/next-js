"use client";

export default function HeavyComponent() {
  return (
    <section className="mt-20 rounded-xl border p-10">
      <h2 className="text-2xl font-bold">
        Heavy Component
      </h2>

      <p className="mt-4">
        This component is loaded separately.
      </p>
    </section>
  );
}