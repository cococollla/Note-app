using Notes.Models;

namespace Notes.Services.NoteService
{
    public interface INoteService
    {
        public void InitData();
        public void AddNote(Note note);
        public IEnumerable<Note> GetAllNotes();
        public Note GetNoteById(int id);
        public void UpdateNote(Note note);
        public void DeleteNoteByID(int id);
    }
}
