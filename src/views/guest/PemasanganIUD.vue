<template>
    <div id="pemasangan">
        <b-container>
            <b-row>
                <b-col>
                    <b-row>
                        <b-col md="12" style="margin-top : 10px; margin-bottom: 30px">
                            <h3 class="text-center m-t-0 m-b-0">
                            <strong>DATA PEMASANGAN IUD</strong>
                            </h3>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col md="12">
                            <h4>
                            Silahkan di isi sesudah persalinan.
                            </h4> 
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>                            
                            <b-form style="margin-top:20px">
                                <b-card bg-variant="light">
                                    <div style="display:flex;justify-content:center;align-items:center;">
                                        <b-form-group style="width:780px">
                                            <b-form-group
                                                label="Pemasangan IUD:"
                                                label-cols-sm="3"
                                                label-align-sm="right"
                                            >
                                            <b-form-select v-model="pemasangan" :options="options"></b-form-select>
                                            </b-form-group>

                                            <b-form-group
                                                label="Tempat Persalinan:"
                                                label-cols-sm="3"
                                                label-align-sm="right"
                                            >
                                                <b-form-input
                                                    v-model="tempatPersalinan"
                                                    placeholder="Silahkan Isi Nama Tempat Persalinan"
                                                ></b-form-input>
                                            </b-form-group>

                                            <b-form-group
                                                label="Tanggal Persalinan:"
                                                label-cols-sm="3"
                                                label-align-sm="right"
                                                
                                            >
                                                <b-form-datepicker
                                                v-model="tanggalPersalinan"
                                                left
                                                locale="id-ID"
                                                aria-controls="tgl"
                                                placeholder="Silahkan Pilih Tanggal"
                                                ></b-form-datepicker>   
                                            </b-form-group> 
                                            <b-form-group
                                                label="Tanggal Pemasangan IUD:"
                                                label-cols-sm="3"
                                                label-align-sm="right"
                                                
                                            >
                                                <b-form-datepicker
                                                v-model="tanggalPemasanganUID"
                                                left
                                                locale="id-ID"
                                                aria-controls="tgl"
                                                placeholder="Silahkan Pilih Tanggal"
                                                ></b-form-datepicker>   
                                            </b-form-group> 
                                        </b-form-group>
                                    </div>
                                
                                </b-card>
                                <b-button @click="simpan()" variant="primary" class="m-t-15" style="width:100px;left:0;margin-top:10px">Simpan</b-button>
                            </b-form>  
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";   
export default {
    name: 'pemasangan',

    data(){
        return {
            pemasangan:null,
            options:[
                { value: null, text: 'Silahkan Pilih' },
                { value: "Ya", text: 'Ya' },
                { value: "Tidak", text: 'Tidak' },
            ],
            tempatPersalinan:'',
            tanggalPersalinan:'',
            tanggalPemasanganUID:'',
        }
    },
    mounted(){
        axios.get(ipBackend + "/IUD/list", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
          console.log(res, 'ini ress nya')
          if(res.data.length !== 0){
              this.$swal("Maaf anda sudah mengisi ini.");
              this.$router.push({path: '/dashboardguest'})
          }
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
        simpan(){
            let vm = this
            axios.post(ipBackend + '/IUD/register', {
                pemasangan : vm.pemasangan,
                tempatPersalinan : vm.tempatPersalinan,
                tanggalPersalinan : vm.tanggalPersalinan,
                tanggalPemasanganUID : vm.tanggalPemasanganUID
            },
            {
                headers: {
                    token: localStorage.getItem("token"),
                }
            })
            .then(res => {
                console.log(res)
                this.$swal("Sukses");
                this.$router.push({path: '/dashboardguest'})
            })
            .catch(err => {
                console.log(err, 'ini eror')
            })
        }
    }
}
</script>

<style scoped>

</style>