import { useState, useEffect } from 'react';
import Habit from './Habit';
import "./HabitTracker.css";

const categories = ['Health', 'Mind', 'Work'];
const frequencies = ['Daily', 'Weekly'];

const presetHabits = [
  'Drink 8 glasses of water',
  'Read for 30 minutes',
  'Exercise',
  'Meditate',
  'Write a journal entry',
  'No sugar today',
  'Wake up before 7 AM',
  'Learn something new',
];

const getInitialHabits = () => {
  const stored = localStorage.getItem('habits');
  return stored ? JSON.parse(stored) : [];
};

const defaultWeek = () => Array(7).fill(false);

const HabitTracker = () => {
  const [habits, setHabits] = useState(getInitialHabits);
  const [habitDetails, setHabitDetails] = useState({
    name: '',
    category: 'Health',
    frequency: 'Daily',
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!habitDetails.name.trim()) return;

    const newHabit = {
      ...habitDetails,
      week: habitDetails.frequency === 'Daily' ? defaultWeek() : [false],
      completions: 0,
      streak: 0,
      lastCompleted: null,
    };

    setHabits([...habits, newHabit]);
    setHabitDetails({ name: '', category: 'Health', frequency: 'Daily' });
  };

  const toggleDay = (habitIndex, dayIndex) => {
    const updated = [...habits];
    const habit = updated[habitIndex];
    const completed = !habit.week[dayIndex];

    habit.week[dayIndex] = completed;

    if (completed) {
      habit.completions += 1;

      const today = new Date().toDateString();
      if (habit.lastCompleted !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        habit.streak = habit.lastCompleted === yesterday ? habit.streak + 1 : 1;
        habit.lastCompleted = today;
      }
    } else {
      habit.completions = Math.max(0, habit.completions - 1);
    }

    setHabits(updated);
  };

  const removeHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  return (
    <div className="habit-tracker">
      <div className="input-group">
        {/* Category */}
        <select
          value={habitDetails.category}
          onChange={(e) =>
            setHabitDetails({ ...habitDetails, category: e.target.value })
          }
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Frequency */}
        <select
          value={habitDetails.frequency}
          onChange={(e) =>
            setHabitDetails({ ...habitDetails, frequency: e.target.value })
          }
        >
          {frequencies.map((freq) => (
            <option key={freq} value={freq}>
              {freq}
            </option>
          ))}
        </select>

        {/* Preset Habit Dropdown */}
        <select
          onChange={(e) =>
            setHabitDetails({ ...habitDetails, name: e.target.value })
          }
          value=""
        >
          <option value="" disabled>
            Select a preset habit
          </option>
          {presetHabits.map((habit, i) => (
            <option key={i} value={habit}>
              {habit}
            </option>
          ))}
        </select>

        {/* Text Input */}
        <input
          value={habitDetails.name}
          onChange={(e) =>
            setHabitDetails({ ...habitDetails, name: e.target.value })
          }
          placeholder="Enter habit name..."
        />
        <button onClick={addHabit}>Add</button>
      </div>

      <div className="habit-list">
        {habits.map((habit, i) => (
          <Habit
            key={i}
            habit={habit}
            index={i}
            toggleDay={toggleDay}
            removeHabit={removeHabit}
          />
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
