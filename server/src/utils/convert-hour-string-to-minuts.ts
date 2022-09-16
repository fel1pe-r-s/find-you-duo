// 18:00 -> 1080
export function converThourStringtoMinuts(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmout = (hours * 60) + minutes;

  return minutesAmout
}
