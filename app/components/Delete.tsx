// app/components/DeleteButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface Props {
  id_produk: number;
  deleteAction: (data: FormData) => Promise<void>;
}

export default function DeleteButton({ id_produk, deleteAction }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id_produk", id_produk.toString());

    await deleteAction(formData);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-600 hover:underline cursor-pointer bg-transparent border-none p-0"
    >
      {isPending ? "Menghapus..." : "Hapus"}
    </button>
  );
}
