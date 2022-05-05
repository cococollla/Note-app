namespace Notes.Models
{
    /// <summary>
    /// Класс заметок
    /// </summary>
    public class Note
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Discription { get; set; }
        public Note() { }
        public Note(int id, string name, string discription)
        {
            Name = name;
            Discription = discription;
            Id = id;
        }
    }
}
