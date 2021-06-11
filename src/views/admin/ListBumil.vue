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
                        style="text-align:center"
                        >
                        <template v-slot:cell(actions)="row">
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
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
export default {
    name:'listbumil',
    data(){
        return {
            items:[],
            fields: [
                {
                key: 'nomor',
                label: "No",
                sortable: true,
                sortDirection: "desc",
                },
                {
                    key: 'nama',
                    label: 'Nama',
                    sortable: true
                },
                
                {
                    key: 'pointPengetahuan1',
                    label: 'Nilai Pengetahuan',
                    sortable: true
                },
                {
                    key: 'hasil1',
                    label: 'Presentase (%)',
                    sortable: true
                },
                {
                    key: 'pointSikap1',
                    label: 'Nilai Sikap',
                    sortable: true
                },
                {
                    key: 'hasil2',
                    label: 'Presentase (%)',
                    sortable: true
                },
                {
                    key: 'pointPengetahuan2',
                    label: 'Nilai Post Test Pengetahuan',
                    sortable: true
                },
                {
                    key: 'hasil3',
                    label: 'Presentase (%)',
                    sortable: true
                },
                {
                    key: 'pointSikap2',
                    label: 'Nilai Post Test Sikap',
                    sortable: true
                },
                {
                    key: 'hasil4',
                    label: 'Presentase (%)',
                    sortable: true
                },
                { key: "actions", label: "Actions" },
            ],
        }
    },
    mounted() {
        axios.get(ipBackend + "/users/listAll", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
          console.log(res)
        this.items = res.data
        
        res.data.forEach((element, index) => {
            let x = this.items[index]
            x.nomor = index +1
            x.hasil1 = Math.floor((this.items[index].pointPengetahuan1/15) * (100)) 
            x.hasil2 = Math.floor((this.items[index].pointSikap1/60) * (100))
            x.hasil3 = Math.floor((this.items[index].pointPengetahuan2/15) * (100)) 
            x.hasil4 = Math.floor((this.items[index].pointSikap2/60) * (100))   
        });
        console.log(this.items, 'ini this item')
      })
      .catch((err) => {
        console.log(err);
      });
    },
    methods: {
      goDetail(id){
          let vm = this
          localStorage.setItem('idDetail', id)
          vm.$router.push({path: '/listjawaban'})
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