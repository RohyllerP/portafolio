import { createRouter, createWebHistory } from 'vue-router';
import Principal from '@/views/principal.vue';

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
    }
]

// crear objeto de rutas
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router