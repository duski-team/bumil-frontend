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
                                variant="warning"
                                class="mr-1"
                                v-b-modal.modal-1
                                style="position: relative"
                                @click="popupChat(row.item.id)"
                                >Chat
                                <b-badge  v-if="row.item.unread > 0" variant="primary">{{ row.item.unread }}</b-badge>
                                <!-- <div
                                    v-if="row.item.unread > 0"
                                    style="
                                    width: 30px;
                                    height: 30px;
                                    background-color: #007bff;
                                    border-radius: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    top: -15px;
                                    right: -15px;
                                    "
                                >
                                    <h6 style="margin: 0; padding: 0; color: #fff">
                                    <strong>{{ row.item.unread }}</strong>
                                    </h6>
                                </div> -->
                            </b-button>
                        </template>
                        </b-table>
                    </b-card>   
                </div>
                </b-col>
            </b-row>
        </b-container>  

        <b-modal id="modal-1" size="lg" title="Chat" hide-footer>
        <b-row>
            <b-col md="12" lg="12">
            <div
                style="
                width: 100%;
                height: 60vh;
                background-color: ;
                overflow-y: auto;
                overflow-x: hidden;
                "
                ref="chat"
                id="chatnya"
            >
                <b-row v-for="item in chat" :key="item.id" style="margin-top: 20px">
                <b-col md="12" lg="12" v-if="item.adminId">
                    <div
                    style="
                        width: 90%;
                        padding: 5px 15px;
                        background-color: #007bff;
                        border-top-right-radius: 4px;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                        border-bottom-right-radius: 4px;
                        color: #ffffff;
                        font-weight: bold;
                        margin-right: 10%;
                    "
                    >
                    <b-row>
                        <b-col md="12" lg="12">
                        <h6 style="margin: 0; text-align: right">
                            {{ item.createdAt }}
                        </h6>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                        <hr style="margin: 10px 0" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                        <hr style="margin: 10px 0" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                        <p>{{ item.isi }}</p>
                        </b-col>
                    </b-row>
                    </div>
                </b-col>
                <b-col md="12" lg="12" v-else>
                    <div
                    style="
                        width: 90%;
                        padding: 10px;
                        background-color: #2c3d50;
                        border-top-right-radius: 4px;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                        border-bottom-right-radius: 4px;
                        color: #ffffff;
                        font-weight: bold;
                        margin-left: 10%;
                    "
                    >
                    <b-row>
                        <b-col md="12" lg="12">
                        <h6 style="margin: 0; text-align: right">
                            {{ item.createdAt }}
                        </h6>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                        <hr style="margin: 10px 0" />
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col md="12" lg="12">
                        <p>{{ item.isi }}</p>
                        </b-col>
                    </b-row>
                    </div>
                </b-col>
                </b-row>
            </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="12" lg="12">
            <div
                style="
                width: 100%;
                height: 10vh;
                background-color: ;
                display: flex;
                justify-content: center;
                align-items: center;
                "
            >
                <div style="width: 90%">
                <b-form-input
                    required
                    placeholder=""
                    v-model="isi"
                ></b-form-input>
                </div>
                <div style="width: 2.5%" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block"></div>
                  <div style="width: 7.5%" class="d-none d-md-block d-lg-none d-none d-lg-block d-xl-none d-none d-xl-block">
                      <b-button variant="primary" block @click="kirimChat"
                        >Kirim</b-button
                      >
                  </div>
            </div>
            <div  >
                      <b-button variant="primary" @click="kirimChat"
                        >Kirim</b-button
                      >
                  </div>
            </b-col>
        </b-row>
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
export default {
    name:'listbumil',
    data(){
        return {
            chat: [],
            isi: "",
            selectedUserId: 0,
            userId: 0,
            responden: [],
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
                    key: 'alamat',
                    label: 'Alamat',
                    sortable: true
                },
                
                { key: "actions", label: "Actions" },
            ],
        }
    },
    sockets: {
        semuachat(data) {
        // console.log(data, 'aaa')
        this.chat = data;
        let vm = this;
        setTimeout(function () {
            vm.scrollToEnd();
        }, 1000);
        },
        chatMasuk(data) {
        console.log(data, 'aaa')
        this.chat.push(data);
        let vm = this;
        setTimeout(function () {
            vm.scrollToEnd();
        }, 1000);
        },
        updateJumlah(userId) {
        // console.log(data, 'aaa')
        let idx = this.items.findIndex((x) => x.id == userId);
        this.items[idx].unread = parseInt(this.items[idx].unread) + 1;
        this.getData() 
        },
        updateJumlahChat: function(){
            console.log('uhuihuhui')
         
      },
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData(){
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
                });
                console.log(this.items, 'ini this item')
            })
            .catch((err) => {
                console.log(err);
            });
        },
        scrollToEnd() {
            var elem = document.getElementById("chatnya");
            elem.scrollTop = elem.scrollHeight;
        },
        popupChat(userId) {
            console.log(userId);
            this.chat = [];
            this.$socket.emit("join", userId);
            this.$socket.emit("allchat", {userId, adminId:1});
            this.selectedUserId = userId;
            this.getData()
        },
        kirimChat() {
            //  {userId:data.userId, isi:data.isi, adminId:data.adminId}
            this.$socket.emit(
                "chat",
                 {userId: this.selectedUserId, isi:this.isi, adminId:1}
              
            );
            this.isi = "";
        },
    }
}
</script>
    
<style scoped>
    .mr-1 {
        margin:5px;
    }
</style>