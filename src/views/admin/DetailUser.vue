<template>
    <div id="detail">
        <b-container>
            <b-row>
                <b-col md='12'>
                    <b-row>
                        <b-col md="12" style="margin-top : 15px; margin-bottom: 15px">
                            <h3 class="text-center m-t-0 m-b-0">
                            <strong>DETAIL IBU HAMIL</strong>
                            </h3>
                        </b-col>
                    </b-row>
                    
                    <b-card bg-variant="light">
                    <b-row>
                        
                        <b-col md='12' class="part-two">
                            <div class="content">
                                <table>
                                    <tr>
                                        <td style="width:200px">Nama</td>
                                        <td>: {{items.nama}}</td>
                                    </tr>
                                    <tr>
                                        <td>Alamat</td>
                                        <td>: {{items.alamat}}</td>
                                    </tr>
                                    <tr>
                                        <td>No. Handphone</td>
                                        <td>: {{items.noHp}}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>: {{items.email}}</td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal Lahir</td>
                                        <td>: {{items.tanggalLahir}}</td>
                                    </tr>
                                    <tr>
                                        <td>Pendidikan Terakhir</td>
                                        <td>: {{items.pendidikanTerakhir}}</td>
                                    </tr>
                                    <tr>
                                        <td>Pekerjaan</td>
                                        <td>: {{items.pekerjaan}}</td>
                                    </tr>
                                    <tr>
                                        <td>HPHT</td>
                                        <td>: {{items.HPHT}}</td>
                                    </tr>
                                    <tr>
                                        <td>HPL</td>
                                        <td>: {{items.HPL}}</td>
                                    </tr>
                                    <tr>
                                        <td>Usia Kehamilan</td>
                                        <td>: {{items.usiaKehamilan}} Minggu</td>
                                    </tr>
                                    <tr>
                                        <td>Paritas</td>
                                        <td>: {{items.paritas}}</td>
                                    </tr>
                                    <tr>
                                        <td>Dukungan Suami</td>
                                        <td>: {{items.dukunganSuami}}</td>
                                    </tr>
                                </table>
                            </div>
                            
                        </b-col>
                    </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
import moment from 'moment';
export default {
    name:'detailuser',
    data(){
        return {
            items: [],
            
        }
    },
     mounted() {
         let vm = this
         moment.locale('id')
        let idUser = localStorage.getItem('idDetail')
         axios.get(ipBackend + "/users/profileByAdmin/" + idUser, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        //   console.log(res)
        vm.items = res.data[0];
        let x = vm.items
        let tgl = moment(x.tanggalLahir).format("DD-MMMM-YYYY")          
        x.tanggalLahir = tgl
        let tglhpht = moment(x.HPHT).format("DD-MMMM-YYYY")          
        x.HPHT = tglhpht
        let tglhpl = moment(x.HPL).format("DD-MMMM-YYYY")          
        x.HPL = tglhpl
        if(x.dukunganSuami == 1){
            x.dukunganSuami = "Ya"
        }else {
            x.dukunganSuami = 'Tidak'
        }                    
        console.log(vm.items,'ini this item')
      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>

<style scoped>
    #detail {
        font-family: "Times New Roman";
    }
    .part-one{
        display: flex;
        justify-content: left;    
    }
    .part-two{
        display: flex;
        justify-content: left;    
    }
    .images{
        margin-left: 100px;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 150px;        
    }
    .content {
        text-align: left;
        margin-left: 100px;
        
    }
    .content-two {
        text-align: left;
        margin-left: 100px;
        
    }
    tr td {
        font-size:20px;
    }
</style>