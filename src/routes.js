import Start from './components/Start';
import Menu from './components/Menu';
import About from './components/About';
import MenuPizza from './components/MenuPizza';
import MenuAddons from './components/MenuAddons';

export default [
  { path: '/', component: Start},
  {
    path: '/menu',
    component: Menu,
    children: [
      { path: '', component: MenuPizza },
      { path: 'addons', component: MenuAddons }
    ]
  },
  { path: '/about', component: About },
  // { path: '*', redirect: '/' }

]