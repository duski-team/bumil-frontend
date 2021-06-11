<template>
  <div id="chatFront">

    <section style=" padding-bottom: 60px">
      <b-container>
        <b-row>
          <b-col md="12" lg="12">
            <b-row>
              <b-col md="12" lg="12">
                <b-breadcrumb>
                  <b-breadcrumb-item>
                    <router-link :to="'dashboardFront'">
                      <b-icon
                        icon="house-fill"
                        scale="1.25"
                        shift-v="1.25"
                        aria-hidden="true"
                      ></b-icon>
                      Dashboard
                    </router-link>
                  </b-breadcrumb-item>
                  <b-breadcrumb-item active>Chat</b-breadcrumb-item>
                </b-breadcrumb>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12" lg="12">
                <div class="box">
                  <b-row>
                    <b-col md="12" lg="12">
                      <div
                        style="
                          width: 100%;
                          height: 60vh;
                          background-color: white;
                          overflow-y: auto;
                          overflow-x: hidden;
                        "
                        id="chatnya"
                      >
                        <b-row
                          v-for="(item, index) in chat"
                          :key="item.id"
                          :class="`index-${index}`"
                          style="margin-top: 20px"
                        >
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
                </div>
              </b-col>

              <b-col md="12" lg="12" style="margin-top: 15px">
                <div class="box">
                  <div
                    style="
                      width: 100%;
                      height: 10vh;
                      background-color: ;
                      display: flex;
                      flex-direction:row;
                    "
                  >
                    <div style="width: 100%">
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
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import { ipBackend } from "@/config.js";
import axios from "axios";
export default {
  name: "chatFront",
  data() {
    return {
      responden: [],
      chat: [],
      isi: "",
    };
  },
  sockets: {
    semuachat(data) {
      // console.log(data, 'aaa')
      this.chat = data;
      let vm = this;
      setTimeout(function () {
        vm.scrollToEnd();
      }, 300);
    },
    chatMasuk(data) {
      // console.log(data, 'aaa')
      this.chat.push(data);
      let vm = this;
      setTimeout(function () {
        vm.scrollToEnd();
      }, 300);
    },
  },
  mounted() {
    // get profile
    // let idProfile = localStorage.getItem('token.id')
    axios
      .get(ipBackend + "/users/profile", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log('mounted profile', res);
        console.log(res);
        this.responden = res.data[0];
        this.$socket.emit("join", this.responden.id);
        this.$socket.emit("allchat", {userId:this.responden.id, adminId:0});
        console.log(this.responden.id, 'ini id responden');
      })
      .catch((err) => {
        console.log("mounted nya", err);
      });
  },
  methods: {
    scrollToEnd() {
      const el = this.$el.getElementsByClassName(
        "index-" + (this.chat.length - 1)
      )[0];
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    kirimChat() {
        let data = {}
        data.userId = this.responden.id
        data.isi = this.isi
        data.adminId = 0
      this.$socket.emit("chat", data);
      this.isi = "";
    },
  },
};
</script>

<style scoped>

</style>