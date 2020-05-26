const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
