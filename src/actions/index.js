export const changeColors = (interval) => ({
  type: 'CHANGE_COLORS',
})

export const startChangeColors = (interval) => ({
  type: 'START_CHANGE_COLORS',
  interval
})

export const stopChangeColors = () => ({
  type: 'STOP_CHANGE_COLORS'
})