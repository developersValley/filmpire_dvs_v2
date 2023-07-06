import { CssBaseline } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Movies, NavBar, Profile, MovieInfo, Actors } from './components'
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.toolbar}>
      <div className={classes.content}>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route element={<MovieInfo/>} path="/movie/:id" />
          <Route element={<Actors />} path="/actors/:id" />
          <Route element={<Profile />} path="/profile/:id" />
   
        </Routes>
        </div>
      </main>
    </div>
  )
}

export default App