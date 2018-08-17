var playlist =  {['Red Hot Chili Peppers']: 'Slow Cheetah'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}