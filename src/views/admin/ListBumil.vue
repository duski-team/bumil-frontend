<template>
    <div class="listbumil">
        <b-container>
            <b-row>
                <b-col md="12">
                    <b-row>
                        <b-col md="12" style="margin-top : 20px; margin-bottom: 20px">
                            <h3 class="text-center m-t-0 m-b-0">
                            <strong>DATA IBU HAMIL</strong>
                            </h3>
                        </b-col>
                    </b-row>
                <div style="margin-top:30px">
                     <b-card bg-variant="light">
                        <b-table
                        show-empty
                        bordered
                        hover
                        ref="table"
                        :items="items"
                        :fields="fields"
                        responsive
                        >
                        <template v-slot:cell(actions)="row">
                            <b-button
                                size="sm"
                                variant="warning"
                                @click="editModal(row.item, row.index, $event.target)"
                                class="mr-1"
                                >
                                Edit
                            </b-button>
                            <b-button
                                size="sm"
                                variant="danger"
                                @click="handleClick(row.item, row.index, $event.target)"
                                class="mr-1"
                                >
                                Hapus
                            </b-button>
                            <b-button
                                size="sm"
                                variant="secondary"
                                @click="goDetail(row.item.id)"
                                class="mr-1"
                                >
                                Detail
                            </b-button>
                        </template>
                        </b-table>
                    </b-card>   
                </div>
                </b-col>
            </b-row>
        </b-container>  


    <!-- MODAL -->
    <!-- edit -->
    <b-modal
      :id="editModals.id"
      ref="modal"
      hide-footer
      hide-header
    >
    <h2 class="text-center" style="margin-bottom:10px;">Edit Data Ibu Hamil</h2>
        <b-form-group label="Pilih Role :" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="editModals.content.role" :aria-describedby="ariaDescribedby" name="some-radios" value="akuntan">Akuntan</b-form-radio>
          <b-form-radio v-model="editModals.content.role" :aria-describedby="ariaDescribedby" name="some-radios" value="gudang">Gudang</b-form-radio>
          <b-form-radio v-model="editModals.content.role" :aria-describedby="ariaDescribedby" name="some-radios" value="sales">Sales</b-form-radio>
          <b-form-radio v-model="editModals.content.role" :aria-describedby="ariaDescribedby" name="some-radios" value="driver">Driver</b-form-radio>
        </b-form-group>

        <b-form-group 
            label="Email" 
        >
        <b-form-input
            v-model="editModals.content.email"
            placeholder="Silahkan Isi Email"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="Nama" 
        >
        <b-form-input
            v-model="editModals.content.nama"
            placeholder="Silahkan Isi Nama"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="Alamat" 
        >
        <b-form-input
            v-model="editModals.content.alamat"
            placeholder="Silahkan Isi Alamat"
        ></b-form-input>
        </b-form-group>

         <b-form-group label="Pilih Jenis Kelamin :" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="editModals.content.jenisKelamin" :aria-describedby="ariaDescribedby" name="some-radios" value="pria">Pria</b-form-radio>
          <b-form-radio v-model="editModals.content.jenisKelamin" :aria-describedby="ariaDescribedby" name="some-radios" value="wanita">Wanita</b-form-radio>
        </b-form-group>

        <b-form-group 
            label="No Handphone" 
        >
        <b-form-input
            v-model="editModals.content.noHp"
            placeholder="Silahkan Isi No. Handphone"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="No KTP" 
        >
        <b-form-input
            v-model="editModals.content.noKTP"
            placeholder="Silahkan Isi No. KTP"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="Tempat Lahir" 
        >
        <b-form-input
            v-model="editModals.content.tempatLahir"
            placeholder="Silahkan Isi Tempat Lahir"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="Tanggal Lahir" 
        >
        <b-input-group class="mb-3" style="width:250px; margin-left:10px">
            <b-input-group-append>
                <b-form-datepicker
                v-model="editModals.content.tanggalLahir"
                button-only
                right
                locale="en-US"
                aria-controls="tanggalLahir"
                
                ></b-form-datepicker>
            </b-input-group-append>
            <b-form-input
                id="tanggalLahir"
                v-model="editModals.content.tanggalLahir"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
            ></b-form-input>
        </b-input-group>
        </b-form-group>

        <b-form-group 
            label="Pendidikan Terakhir" 
        >
        <b-form-input
            v-model="editModals.content.pendidikanTerakhir"
            placeholder="Silahkan Isi Pendidikan Terakhir"
        ></b-form-input>
        </b-form-group>

        <b-form-group 
            label="Status" 
        >
        <b-form-input
            v-model="editModals.content.status"
            placeholder="Silahkan Isi Status"
        ></b-form-input>
        </b-form-group>
        <b-button @click="editData()" variant="primary" class="m-t-15">Simpan</b-button>
    </b-modal>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
import moment from 'moment';
export default {
    name:'karyawanadmin',
    data(){
        return {
            username:'',
            password:'',
            email:'',
            nama:'',
            jenisKelamin:null,
            alamat:'',
            noHp:'',
            noKTP:'',
            tempatLahir:'',
            tanggalLahir:'',
            role:null,
            pendidikanTerakhir:'',
            status:'',
            wilayahId:1,
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
                    key: 'username',
                    label:'Username',
                    sortable: true
                },
                {
                    key: 'nama',
                    label: 'Nama',
                    sortable: true
                },
                {
                    key: 'alamat',
                    label: 'Alamat',
                    sortable: true,
                },
                {
                    key: 'noHp',
                    label: 'No. Handphone',
                    sortable: true
                },
                {
                    key: 'role',
                    label: 'Role',
                    sortable: true
                },
                { key: "actions", label: "Actions" },
            ],
        }
    },
    mounted() {
        axios.get(ipBackend + "/users/findAll", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
          console.log(res)
        this.items = res.data.respon
        console.log(this.items, 'ini this item')
        res.data.respon.forEach((element, index) => {
            let x = this.items[index]
            x.nomor = index +1
            let tgl = moment(res.data.respon[index].tanggalLahir).format("DD-MMMM-YYYY")          
            x.tanggalLahir = tgl
                      
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        resetModal() {
        this.username = ''
        this.password = ''
        this.email= ''
        this.nama = ''
        this.alamat = ''
        this.jenisKelamin = null
        this.role = null
        this.noHp = ''
        this.noKTP = ''
        this.tempatLahir = ''
        this.tanggalLahir = ''
        this.pendidikanTerakhir = ''
        this.status = ''
        this.wilayahId=1
        },
        signup(){
            let vm = this;
            axios.post(ipBackend + '/users/register', {
                username:vm.username,
                password:vm.password,
                email:vm.email,
                nama:vm.nama,
                alamat:vm.alamat,
                jenisKelamin:vm.jenisKelamin,
                role:vm.role,
                noHp:vm.noHp,
                noKTP:vm.noKTP,
                tempatLahir:vm.tempatLahir,
                tanggalLahir:vm.tanggalLahir,
                pendidikanTerakhir:vm.pendidikanTerakhir,
                status:vm.status,
                wilayahId:vm.wilayahId,
                
            },
            {
              headers: 
              {token: localStorage.getItem("token"),
              },
            },
            )
            .then(res => {
                console.log(res.data)
                this.$swal("Sukses Karyawan Telah Terdaftar");
                vm.$nextTick(() => {
                vm.$bvModal.hide('modal-1')
                this.resetModal()
              })
            })
            .catch(err => {
                console.log(err)
            })
        },
        editModal(item, index, button) {
            this.editModals.content = item;
            this.idEdit = item.id;
            this.email = item.email;
            this.nama = item.nama;
            this.alamat = item.alamat;
            this.jenisKelamin = item.jenisKelamin;
            this.role = item.role;
            this.noHp = item.noHp;
            this.noKTP = item.noKTP;
            this.tempatLahir = item.tempatLahir;
            this.tanggalLahir = item.tanggalLahir;
            this.pendidikanTerakhir = item.pendidikanTerakhir;
            this.status = item.status;
            this.wilayahId = item.wilayahId;
            
            this.$root.$emit("bv::show::modal", this.editModals.id, button);
            console.log(this.idEdit);
      },
      editData() {
            let vm = this;
            axios.post(ipBackend + "/users/update/" + this.idEdit, {
                    email: vm.editModals.content.email,
                    nama: vm.editModals.content.nama,
                    alamat: vm.editModals.content.alamat,
                    jenisKelamin: vm.editModals.content.jenisKelamin,
                    role: vm.editModals.content.role,
                    noHp: vm.editModals.content.noHp,
                    noKTP:vm.editModals.content.noKTP,
                    tempatLahir:vm.editModals.content.tempatLahir,
                    tanggalLahir:vm.editModals.content.tanggalLahir,
                    pendidikanTerakhir:vm.editModals.content.pendidikanTerakhir,
                    status:vm.editModals.content.status,
                    wilayahId:vm.editModals.content.wilayahId,
                   
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
      goDetail(id){
          let vm = this
          localStorage.setItem('idDetail', id)
          vm.$router.push({path: '/detailkaryawanadmin/'+id})
      },
      deleteItem(a,b) {
        let data = a
        let vm = this
              axios.post(ipBackend + "/users/delete/" + data.id, {
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
                  this.$socket.emit('refresh') 
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