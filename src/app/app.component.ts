. . .

import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "menu", component: MenuComponent }

    . . .
