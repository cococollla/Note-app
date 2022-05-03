using Microsoft.EntityFrameworkCore;
using Notes.Models;
using Notes.Models.Repository;

namespace Notes.Services.NoteService
{
    public class NoteService : INoteService
    {
        private readonly ApplicationContext Context; //Контекст приложения
        public NoteService(ApplicationContext context)
        {
            Context = context;
        }

        public void AddNote(Note note)
        {
            Context.Notes.Add(note);
            Context.SaveChanges();
        }

        public void DeleteNoteByID(int id)
        {
            var note = Context.Notes.FirstOrDefault(x => x.Id == id);

            if (note != null)
            {
                Context.Notes.Remove(note);
                Context.SaveChanges();
            }

        }

        public IEnumerable<Note> GetAllNotes()
        {
            var notes = Context.Notes.ToList();
            return notes;
        }

        public Note GetNoteById(int id)
        {
            var note = Context.Notes.FirstOrDefault(x => x.Id == id);
            return note;
        }

        /// <summary>
        /// Инициализация первой записи, при запуске
        /// </summary>
        public void InitData()
        {
            if (!Context.Notes.Any())
            {
                Context.Notes.Add(new Note() { Name = "Заметка 0", Discription = "Привет, я буду тут, пока ты не удалишь меня" });
            }

            Context.SaveChanges();
        }

        public void UpdateNote(Note note)
        {
            Context.Entry(note).State = EntityState.Modified;
            Context.SaveChanges();
        }
    }
}
