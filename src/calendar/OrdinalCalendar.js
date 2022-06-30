import OrdinalDay from "./OrdinalDay";
import { useOrdinalDays } from "./useOrdinalDays";

export default function OrdinalCalendar() {
  const { days, setDays } = useOrdinalDays();

  const handleToggleTodo = ({ dayIndex, todoId, checked }) => {
    const newDays = [...days];
    newDays[dayIndex].todos[todoId].checked = checked;
    setDays(newDays);
  };

  return (
    <div
      style={{
        overflow: "scroll",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
      }}
    >
      {days.map((day, index) => (
        <OrdinalDay
          key={index}
          todos={day.todos}
          index={index}
          onToggleTodo={handleToggleTodo}
          onAddTodo={(value) => {
            setDays(
              days.map((day) => {
                if (day.index === index) {
                  return {
                    ...day,
                    todos: [{ value, index: day.todos.length }, ...day.todos],
                  };
                }
                return day;
              })
            );
          }}
        />
      ))}
    </div>
  );
}
