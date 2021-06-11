<template>
    <div id="listJawaban">
        <b-container>
            <b-row>
                <b-col md="12">
                    <b-row>
                        <b-col md="12" style="margin-top : 30px; margin-bottom: 30px">
                            <h3 class="text-center m-t-0 m-b-0">
                            <strong>DATA LIST JAWABAN</strong>
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
                        style="text-align:center"
                        >
                        </b-table>
                    </b-card>   
                </div>  
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
export default {
    name:'listJawaban',
    data(){
        return{
            items:[],
            fields: [
                {
                key: 'nomor',
                label: "No",
                sortable: true,
                sortDirection: "desc",
                },
                {
                    key: 'soal',
                    label:'Soal Pertanyaan',
                    sortable: true
                },
                {
                    key: 'nilaiPengetahuan',
                    label: 'Jawaban Soal Pengetahuan',
                    sortable: true
                },
                {
                    key: 'hasilPengetahuan',
                    label: 'Point Pengetahuan',
                    sortable: true
                },
                {
                    key: 'nilaiSikap',
                    label: 'Jawaban Soal Sikap',
                    sortable: true
                },
                {
                    key: 'hasilSikap',
                    label: 'Point Sikap',
                    sortable: true
                },
                {
                    key: 'nilaiPengetahuan2',
                    label: 'Jawaban Soal Post Pengetahuan',
                    sortable: true
                },
                {
                    key: 'hasilPengetahuan2',
                    label: 'Point Post Pengetahuan',
                    sortable: true
                },
                {
                    key: 'nilaiSikap2',
                    label: 'Jawaban Soal Post Sikap',
                    sortable: true
                },
                {
                    key: 'hasilSikap2',
                    label: 'Point Post Sikap',
                    sortable: true
                },
            ],
        }
    },
    mounted() {
        let id = localStorage.getItem('idDetail')
        console.log(id, 'ini id')
        axios.post(ipBackend + "/users/listJawaban", {id}, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
          console.log(res)
        let vm = this
        res.data.nilaiPengetahuan.forEach((element, index) => {
            let x = {}
            if(!res.data.nilaiPostPengetahuan.length && !res.data.nilaiPostSikap.length){
                x.nomor = index +1
                x.soal = index +1
                x.nilaiPengetahuan = res.data.nilaiPengetahuan[index].jawabanpengetahuan
                x.hasilPengetahuan = res.data.nilaiPengetahuan[index].pengetahuanpoint
                x.nilaiSikap = res.data.nilaiSikap[index].jawabansikap
                x.hasilSikap = res.data.nilaiSikap[index].sikappoint
            }
            else {
                x.nomor = index +1
                x.soal = index +1
                x.nilaiPengetahuan = res.data.nilaiPengetahuan[index].jawabanpengetahuan
                x.hasilPengetahuan = res.data.nilaiPengetahuan[index].pengetahuanpoint
                x.nilaiSikap = res.data.nilaiSikap[index].jawabansikap
                x.hasilSikap = res.data.nilaiSikap[index].sikappoint
                x.nilaiPengetahuan2 = res.data.nilaiPostPengetahuan[index].jawabanpengetahuan2
                x.hasilPengetahuan2 = res.data.nilaiPostPengetahuan[index].pengetahuanpoint2
                x.nilaiSikap2 = res.data.nilaiPostSikap[index].jawabansikap2
                x.hasilSikap2 = res.data.nilaiPostSikap[index].sikappoint2 
            }
            vm.items.push(x)           
        });
        console.log(vm.items, 'ini itemnya om')
      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>

<style scoped>

</style>