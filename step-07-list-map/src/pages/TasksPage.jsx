function TaskItem({ title }) {
  return (
    <div className="task-item">
      <span>{title}</span>
    </div>
  );
}

function TasksPage() {
  const tasks = [
    { id: 1, title: "Học HTML" },
    { id: 2, title: "Học JavaScript" },
    { id: 3, title: "Học React" },
  ];

  const forItems = [];
  for (let i = 0; i < tasks.length; i++) {
    forItems.push(<TaskItem key={tasks[i].id} title={tasks[i].title} />);
  }

  const forItemsNoPush = Array(tasks.length);
  for (let i = 0; i < tasks.length; i++) {
    forItemsNoPush[i] = <TaskItem key={tasks[i].id} title={tasks[i].title} />;
  }

  return (
    <section>
      <h2>Tasks</h2>

      <div className="card block-nopush">
        <h3>Phiên bản 1 - Vòng lặp for </h3>
        {forItemsNoPush}
      </div>

      <div className="card block-for">
        <h3>Phiên bản 2 - Vòng lặp for dùng push</h3>
        {forItems}
      </div>

      <div className="card block-map">
        <h3>Phiên bản 3 - Phương thức map</h3>
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </div>
    </section>
  );
}
export default TasksPage;
