export default function checkAge(yearOfBirth: number) {
  const currentDate = new Date()

  const age = currentDate.getFullYear() - yearOfBirth

  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  if (currentMonth === 11 && currentDay >= 15) {
    return age
  }

  return age - 1
}
