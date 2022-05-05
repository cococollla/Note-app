using Microsoft.EntityFrameworkCore;
using Notes.Models.Repository;
using Notes.Services.NoteService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddTransient<INoteService, NoteService>(); //��������� ����� ������� � ��������� ���

var configuration = builder.Configuration; // ��������� ������ ������������

var connection = configuration.GetConnectionString("DefualtConnectionSQLite"); // ����� ������ ����������� �� �����

builder.Services.AddDbContext<ApplicationContext>();
// ����������� � sql server

builder.Services.AddScoped<ApplicationContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Note}/{action=Index}/{id?}");
app.Run();
