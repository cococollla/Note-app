using Microsoft.AspNetCore.Mvc;
using Notes.Models;
using Notes.Services.NoteService;

namespace Notes.Controllers
{
    public class NoteController : Controller
    {
        private readonly INoteService noteService;
        public NoteController(INoteService noteService)
        {
            this.noteService = noteService;
            this.noteService.InitData();
        }
        public IActionResult Index() // Отвечает за вывод списка заметок
        {
            var note = noteService.GetAllNotes();
            return View(note);
        }

        [HttpPost]
        public IActionResult DeleteNote(int noteId)
        {
            noteService.DeleteNoteByID(noteId);
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult UpdateNote(Note note)
        {
            noteService.UpdateNote(note);
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult CreateNote(Note note)
        {
            noteService.AddNote(note);
            return RedirectToAction("Index");
        }
    }
}
