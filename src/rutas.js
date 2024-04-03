import { createRouter, createWebHistory } from 'vue-router';
import Principal from '@/views/principal.vue';
import Error404 from '@/views/404.vue';

// definir routes 
const routes = [
    {
        path: '/', component: Principal
    },
    {
        path: '/formulario', component: () => import('@/views/formulario/todo.vue'),
        name: 'formulario'
    },
    {
        path: '/tecnologias', component: () => import('@/views/tecnologias/index.vue'),
        name: 'tecnologias'
    },
    {
        path: '/proyectos', component: () => import('@/views/proyectos/index.vue'),
        name: 'proyectos'
    },
    {
        path: '/sobre', component: () => import('@/views/sobre/index.vue'),
        name: 'sobre'
    },
    {
        path: '/:pathMatch(.*)*', component: Error404
    }
]

// crear objeto de rutas
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router