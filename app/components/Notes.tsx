'use client';

interface NoteListProps {
  notes: string[];
  noteInput: string;
  onNoteChange: (value: string) => void;
  onAddNote: () => void;
  onDeleteNote: (index: number) => void;
}

export default function NoteList({ notes, noteInput, onNoteChange, onAddNote, onDeleteNote }: NoteListProps) {
  return (
    <div>
      <textarea
        value={noteInput}
        onChange={(e) => onNoteChange(e.target.value)}
        placeholder="Tambahkan catatan di sini..."
        className="w-full p-3 border rounded-lg bg-white shadow-sm resize-none h-28 mb-2"
      ></textarea>
      <button
        onClick={onAddNote}
        className="px-4 py-2 bg-white text-[#D39C9C] rounded-md hover:bg-[#E2A8A2] transition mb-4"
      >
        Simpan Catatan
      </button>
      {notes.length > 0 ? (
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
              <span className="text-gray-700">{note}</span>
              <button
                onClick={() => onDeleteNote(index)}
                className="text-sm text-red-500 hover:text-red-700 font-medium"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">Belum ada catatan.</p>
      )}
    </div>
  );
}
