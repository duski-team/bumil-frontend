<template>
  <div class="c-app flex-row align-items-center" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Silahkan Masukan Akun</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
                    v-model="username"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="password"
                    v-on:keyup.enter="signin()"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton  @click="signin()" color="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton @click="goReg()" color="link" class="px-0">Belum Mendaftar?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
export default {
  name: 'Login',
  data (){
      return{
      username: '',
      password: ''
      };
  },
  methods: {
        signin(){
            let vm = this;
            axios.post(ipBackend + '/users/login', {
                username : vm.username,
                password : vm.password
            })
            .then(res => {
                if(res.data){
                    localStorage.setItem('idUser', res.data.id)
                    localStorage.setItem('role', res.data.role)
                    localStorage.setItem('token', res.data.token)
                    if(res.data.role == "superuser"){
                        vm.$router.push({ path: "/admin" });
                    }else if(res.data.role == "guest"){
                        vm.$router.push({ path: "/guest" });
                    }else if(res.data.role == "cs"){
                        vm.$router.push({ path: "/cs" });
                    }

                    // this.$swal('Selamat Anda Telah Login');
                }
                else {
                    this.$swal("eror");
                }
                console.log(res.data,'ini ress')
            })
            .catch(err => {
                console.log(err, 'ini eror')
            })
        },
        goReg(){
          this.$router.push({ path: "/register" });
        }
    }
}
</script>
