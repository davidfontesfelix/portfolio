export default function checkExperience(initalDate: number) {
  const currentDate = new Date()

  const years = currentDate.getFullYear() - initalDate

  const currentMonth = currentDate.getMonth()
  const currentDay = currentDate.getDate()

  if (currentMonth === 10 && currentDay >= 20) {
    return years
  }

  return years - 1
}
