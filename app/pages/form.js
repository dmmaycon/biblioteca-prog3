export const FormComponent = {
    template: `<div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label for="" class="block text-sm text-gray-700 text-center font-semibold">
                    <h1>{{tituloPagina}}</h1>
                </label>
                <div class="mt-10">
                                  
                    <!-- campos -->
                    <div>
                        <input type="text" readonly v-model="livro.id"  placeholder="ID" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="livro.editora"  placeholder="Editora" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="livro.titulo"  placeholder="Titulo" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="livro.autor"  placeholder="Autor" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="livro.ano"  placeholder="Ano" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="livro.preco"  placeholder="Preço" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="number" v-model="livro.id"  placeholder="Quantidade" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="livro.tipo"  placeholder="Tipo" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    
        
                    <div class="mt-7">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Ação
                        </button>
                    </div>
                    <div class="mt-7">
                        <button @click="cancelar" class="bg-red-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    data() {
      return {
        tituloPagina: '',
        tituloAcao: '',
            livro: {
                id: '',
                editora: '',
                titulo: '',
                autor: '',
                ano: '',
                preco: '',
                quantidade: '',
                tipo: ''
            }
      }
    },
    created: function() {
        if (this.$route.name == 'Visual') {
            this.tituloPagina = 'Visualizar um Livro';
        } else if (this.$route.name == 'Editar') {
            this.tituloPagina = 'Editar um Livro'
        } else if (this.$route.name == 'Excluir') {
            this.tituloPagina = 'Excluir um Livro'
        }
    },
    methods: {
        cancelar() {
            this.$router.push('/');
        }
    }
}