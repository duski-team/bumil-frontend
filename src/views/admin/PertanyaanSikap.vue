<template>
    <div class="pertanyaansikap">
        <b-container>
            <b-row>
                <b-col md="12">
                    <b-row>
                        <b-col md="12" style="margin-top : 20px; margin-bottom: 20px">
                            <h3 class="text-center m-t-0 m-b-0">
                            <strong>DATA PERTANYAAN SIKAP</strong>
                            </h3>
                        </b-col>
                    </b-row>
                   
                <div style="margin-top:80px">
                     <b-card bg-variant="light">
                        <b-table
                        show-empty
                        bordered
                        hover
                        ref="table"
                        :items="items"
                        :fields="fields"
                        responsive
                        style="text-align:center; !important"
                        >
                        </b-table>
                    </b-card>   
                </div>
                </b-col>
            </b-row>
        </b-container>  


    <!-- MODAL -->
    <b-modal
      id="modal-1"
      ref="modal"
      title="Daftar Pertanyaan"
      hide-footer
      hide-header
    >
    <h2 class="text-center" style="margin-bottom:10px;">Tambah Data</h2>
        <b-form-group 
            label="Pertanyaan" 
        >
            <b-form-row>
                <b-col><b-form-textarea rows="3" max-rows="6" v-model="pertanyaan" placeholder="Silahkan isi Pertanyaan"/></b-col>
            </b-form-row>
        </b-form-group>
        <b-button @click="signup()" variant="primary" class="m-t-15">Simpan</b-button>
    </b-modal>
    <!-- edit -->
    <b-modal
      :id="editModals.id"
      ref="modal"
      hide-footer
      hide-header
    >
    <h2 class="text-center" style="margin-bottom:10px;">Edit Data Pertanyaan</h2>
        <b-form-row>
                <b-col>
                    <b-form-textarea rows="3" max-rows="6" v-model="editModals.content.pertanyaan" placeholder="Silahkan isi Pertanyaan"/>
                </b-col>
            </b-form-row>
        <b-button @click="editData()" variant="primary" class="m-t-15">Simpan</b-button>
    </b-modal>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
export default {
    name:'pertanyaansikap',
    data(){
        return {
            pertanyaan:'',
            idEdit:'',
            items:[],
            editModals: {
                id: "editModal",
                title: "",
                content: "",
            }, 
            fields: [
                {
                key: 'nomor',
                label: "No",
                sortable: true,
                sortDirection: "desc",
                },
                {
                    key: 'pertanyaan',
                    label:'Pertanyaan',
                    sortable: true
                },
            ],
        }
    },
    mounted() {
        axios.get(ipBackend + "/sikap/listAll", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
          console.log(res)
        this.items = res.data
        console.log(this.items, 'ini this item')
        res.data.forEach((element, index) => {
            let x = this.items[index]
            x.nomor = index +1                     
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        resetModal() {
        this.pertanyaan = ''
        },
        signup(){
            let vm = this;
            axios.post(ipBackend + '/sikap/register', {
                pertanyaan:vm.pertanyaan,
            },
            {
              headers: 
              {token: localStorage.getItem("token"),
              },
            },
            )
            .then(res => {
                console.log(res.data)
                if(res.data.message !== "sukses"){
                    this.$swal("Gagal Menambah Pertanyaan");
                }
                else {
                    this.$swal("Berhasil Menambah Pertanyaan");
                    vm.$nextTick(() => {
                    vm.$bvModal.hide('modal-1')
                    this.resetModal()
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        editModal(item, index, button) {
            this.editModals.content = item;
            this.idEdit = item.id;
            this.pertanyaan = item.pertanyaan;           
            this.$root.$emit("bv::show::modal", this.editModals.id, button);
            console.log(this.idEdit);
      },
      editData() {
            let vm = this;
            axios.post(ipBackend + "/sikap/update/" + this.idEdit, {
                    pertanyaan: vm.editModals.content.pertanyaan,
                },
                {
                  headers: {
                    token: localStorage.getItem("token"),
                  },
                }
              )
              .then((res) => {
                console.log(res.data, 'ini responyaaaaaaaaaaaaaaaa');
                this.$swal("Berhasil Mengedit Data");
                let idNew = this.items.findIndex((o) => o.id === this.idEdit);
                vm.items[idNew] = vm.editModals.content;
                this.$root.$emit("bv::hide::modal", "editModal");
              })
              .catch((err) => {
                console.log(err);
              });
      },
      deleteItem(a,b) {
        let data = a
        let vm = this
              axios.post(ipBackend + "/sikap/delete/" + data.id, {
                id:vm.items[b].id, 
              },
              {
                  headers: {
                    token: localStorage.getItem("token"),
                  },
              })
                .then((res) => {
                  console.log(res.data);
                  vm.$swal("berhasil");
                  vm.items.splice(b, 1);
                  vm.$router.push({ path: "/pertanyaan/pengetahuan" });
                })
                .catch(function (error) {
                  console.log(error);
                });
    },
    handleClick(a,b){
                this.$confirm(
                    {
                    message: `Yakin ingin menghapus?`,
                    button: {
                        no: 'Tidak',
                        yes: 'Ya'
                    },
                    /**
                     * Callback Function
                     * @param {Boolean} confirm 
                     */
                    callback: confirm => {
                        if (confirm) {
                        this.deleteItem(a,b)
                        }
                    }
                    }
                )
            },
    }
}
</script>
    
<style scoped>
    .mr-1 {
        margin:5px;
    }
</style>