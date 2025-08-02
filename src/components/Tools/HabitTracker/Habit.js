
import "./Habit.css";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


const Habit = ({ habit, index, toggleDay, removeHabit }) => {
  const showDays = habit.frequency === 'Daily' ? 7 : 1;

  return (
    <div className="habit">
      <div className="habit-title">
        <strong>{habit.name}</strong>
        <span>({habit.category} / {habit.frequency})</span>
        <button className="remove" onClick={() => removeHabit(index)}>✕</button>
      </div>

      <div className="week">
        {Array(showDays).fill().map((_, i) => (
          <label key={i}>
            <input
              type="checkbox"
              checked={habit.week[i]}
              onChange={() => toggleDay(index, i)}
            />
            {habit.frequency === 'Daily' ? days[i] : 'This Week'}
          </label>
        ))}
      </div>

      <div className="stats">
        ✅ Completions: {habit.completions} | 🔥 Streak: {habit.streak}
      </div>
    </div>
  );
};

export default Habit;
