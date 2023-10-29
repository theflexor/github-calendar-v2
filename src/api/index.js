


export const getData = async () => {
  const res = await fetch('https://dpg.gg/test/calendar.json')

  return await res.json()
}