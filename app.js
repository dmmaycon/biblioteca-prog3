const Lista = {
    template: `<div name="lista" class="w-full m-10">
    <div>
        <a href="/formulario-inclusao.html">
            <svg class="h-5 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </a>
    </div>
    <table class="table-auto border-2 border-blue-500 p-2">
        <thead>
            <th class="border border-2 border-blue-500 p-2 bg-blue-600 text-white">ID</th>
            <th class="border border-2 border-blue-500 p-2 bg-blue-600 text-white">TITULO</th>
            <th class="border border-2 border-blue-500 p-2 bg-blue-600 text-white">AUTOR</th>
            <th class="border border-2 border-blue-500 p-2 bg-blue-600 text-white">AÇÕES</th>
        </thead>
        <tbody>
            <tr>
                <td class="border border-2 border-blue-500 p-2">1</td>
                <td class="border border-2 border-blue-500 p-2">Livro 1</td>
                <td class="border border-2 border-blue-500 p-2">Autor 1</td>
                <td class="border border-2 border-blue-500 p-2">
                    <a href="/formulario-visualizacao.html">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </a>
                    <a href="/formulario-alteracao.html">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </a>
                    <a href="/formulario-exclusao.html">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>`

};

const Formulario = {
    template: `<div name="formulario-inclusao" class="w-full m-10">

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="id">ID</label>
            <input type="text" id="id" name="id"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="editora">Editora</label>
            <input type="text" id="editora" name="editora"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
    </div>


    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="autor">Autor</label>
            <input type="text" id="autor" name="autor"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="ano">Ano</label>
            <input type="date" id="ano" name="ano"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="preco">Preço</label>
            <input type="text" id="preco" name="preco"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="quantidade">Quantidade</label>
            <input min="0" type="number" id="quantidade" name="quantidade"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
        <div class="flex flex-col text-center w-3/6 px-2">
            <label class="mb-1" for="tipo">Tipo</label>
            <input type="text" id="tipo" name="tipo"
                class="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600 border border-5 border-gray-500" />
        </div>
    </div>

    <div class="flex items-center justify-between mb-5">
        <div class="flex flex-col text-center w-3/6 px-2">
            <button class="m-2">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div class="flex flex-col text-center w-3/6 px-2">
            <button class="m-2">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
        </div>
    </div>

</div>`
}

const routes = [
    {
        path: '/',
        name: 'Lista',
        component: Lista
    },
    {
        path: '/form',
        component: Formulario
    }
]

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');