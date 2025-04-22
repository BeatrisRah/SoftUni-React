import { createContext, useContext } from "react";
import { Note } from "../types/types";


type noteContextType = {
    getAll: () => Note[],
    add: (newNote: Note) => void,
    remove: (title: string) => void
}

const NoteContext = createContext<noteContextType | null>(null)

export const useNoteContext = (): noteContextType => {
    const context = useContext(NoteContext);
    if (!context) {
      throw new Error('useNoteContext must be used within a NoteProvider');
    }
    return context;
};


export default NoteContext;