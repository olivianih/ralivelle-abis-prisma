'use client';

import { useTransition } from 'react';

interface DeleteButtonProps {
  idName: string;
  idValue: number;
  deleteAction: (formData: FormData) => void;
}

export default function DeleteButton({
  idName,
  idValue,
  deleteAction,
}: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        const confirmed = confirm('Yakin ingin menghapus produk ini?');
        if (confirmed) {
          startTransition(() => {
            deleteAction(formData);
          });
        }
      }}
    >
      <input type="hidden" name={idName} value={idValue} />
      <button
        type="submit"
        disabled={isPending}
        className="text-red-600 hover:underline disabled:opacity-50"
      >
        {isPending ? 'Menghapus...' : 'Hapus'}
      </button>
    </form>
  );
}
