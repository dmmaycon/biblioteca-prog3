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
                    <div v-show="this.acao != 'Cadastrar'">
                        <input type="text" readonly v-model="aula.id"  placeholder="ID da aula" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="aula.nome"  placeholder="Nome da Aula" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
                    </div>

                    <div class="mt-7" v-show="this.acao != 'Visualizar'">
                        <button @click="comunicaApi(method)" class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            {{this.acao}}
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
        acao: 'Cadastrar',
        method: 'POST',
        aula: {
                id: '',
                nome: ''
            }
      }
    },
    created: function() {        
        if (this.$route.name == 'Visual') {
            this.tituloPagina = 'Visualizar uma Aula';
            this.acao = 'Visualizar';
            this.visualizar(this.$route.params.id);
        } else if (this.$route.name == 'Editar') {
            this.tituloPagina = 'Editar uma Aula';
            this.acao = 'Editar';
            this.editar(this.$route.params.id);
            this.method = 'PUT';
        } else if (this.$route.name == 'Excluir') {
            this.tituloPagina = 'Excluir uma Aula';
            this.acao = 'Excluir';
            this.method = 'DELETE';
            this.editar(this.$route.params.id);
        }
    },
    methods: {
        cancelar() {
            this.$router.push('/');
        },
        comunicaApi(method) {
            let url = `http://localhost:3000/aulas/${this.aula.id}`;          
            if (method === 'POST') {
                url = 'http://localhost:3000/aulas';
            }
            fetch(url, {
                method: method, 
                headers: { 
                    "Content-Type" : "application/json" 
                },
                mode: 'cors',
                body: JSON.stringify({nome: this.aula.nome})
            })
            .then((response) => {    
                response.text().then((data) => {
                    // console.log(data)
                    alert(`${this.acao} executada!`);
                    this.$router.push('/');
                })
            })
        },
        visualizar(id) {
            fetch(`http://localhost:3000/aula/${id}`, {method: 'GET', mode: 'cors'})
            .then((response) => {    
                response.json().then((data) => {
                    this.aula.id = data.id;
                    this.aula.nome = data.nome;
                })
            })
            .catch((error) => {
                console.error(error)
            })
        },
        editar(id) {
            this.visualizar(id);
        },
        excluir(id) {
            this.visualizar(id);
        }
    }
}