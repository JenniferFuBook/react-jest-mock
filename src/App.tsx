import useDate from './useDate';

function App() {
  const {
    locale,
    formatDateTime,
    formatTime,
    formatFullDate,
    formatFullDateTime,
  } = useDate();
  const date = '1/10/2024 6:10 PM';
  return (
    <>
      <div>locale: {locale}</div>
      <div>formatDateTime: {formatDateTime(date)}</div>
      <div>formatTime: {formatTime(date)}</div>
      <div>formatFullDate: {formatFullDate(date)}</div>
      <div>formatFullDateTime: {formatFullDateTime(date)}</div>
    </>
  );
}

export default App;
