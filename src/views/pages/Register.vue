<template>
  <div class="c-app d-flex align-items-center min-vh-100" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Daftar</h1>
                <p class="text-muted">Silahkan Buat Akun</p>
                <CInput
                  label="Email"
                  placeholder="Silahkan Isi Email"
                  autocomplete="email"
                  v-model="email"
                  horizontal
                />
                <CInput
                  label="Username" 
                  placeholder="Silahkan Isi Username"
                  autocomplete="username"
                  v-model="username"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Password"
                  placeholder="Silahkan Isi Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="password"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Nama Lengkap"
                  placeholder="Silahkan Isi Nama Lengkap"
                  v-model="nama"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Alamat"
                  placeholder="Silahkan Isi Alamat"
                  v-model="alamat"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Tanggal Lahir"
                  type="date"
                  horizontal
                  v-model="tanggalLahir"
                >
                </CInput>
                <CSelect
                  label="Pendidikan Terakhir"
                  horizontal
                  :value.sync="pendidikanTerakhir"
                  :options="pendidikan"
                  placeholder="-- Silahkan Pilih --"
                />
                <CInput
                  label="Pekerjaan"
                  placeholder="Silahkan isi Nama Pekerjaan"
                  v-model="pekerjaan"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Nomor Hp"
                  placeholder="Silahkan Isi Nomor Handphone"
                  v-model="noHp"
                  horizontal
                >
                </CInput>
                <CInput
                  label="HPHT"
                  type="date"
                  horizontal
                  v-model="hpht"
                >
                </CInput>
                <CInput
                  label="HPL"
                  type="date"
                  horizontal
                  v-model="hpl"
                >
                </CInput>
                <CInput
                  label="Usia Kehamilan"
                  placeholder="Silahkan Isi dalam minggu"
                  v-model="usiaKehamilan"
                  horizontal
                >
                </CInput>
                <CInput
                  label="Paritas"
                  placeholder="Silahkan Isi Kehamilan ke -"
                  v-model="paritas"
                  horizontal
                >
                </CInput>
                <CSelect
                  label="Dukungan Suami"
                  horizontal
                  :value.sync="dukunganSuami"
                  :options="dukungan"
                  placeholder="-- Silahkan Pilih --"
                />
                <CButton @click="signup()" color="success" block>Simpan</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios';
import { ipBackend } from "@/config.js";
import moment from 'moment';
export default {
  name: 'Register',
  data (){
      return{
      username: '',
      password: '',
      email: '',
      role: 'guest',
      nama: '',
      alamat: '',
      tanggalLahir: '',
      pendidikanTerakhir: '',
      pendidikan: ['SD', 'SMP', 'SMA', 'Perguruan Tinggi',{value:'',label:'-- Silahkan Pilih --'}],
      pekerjaan: '',
      noHp: '',
      hpht: '',
      hpl: '',
      usiaKehamilan: '',
      paritas: '',
      dukungan: [{value:'',label:'-- Silahkan Pilih --'},{value:1,label:'Ya'},{value:0,label:'Tidak'}],
      dukunganSuami: '',
      };
  },
  methods: {
    signup(){
            let vm = this;
            let tgllhr = moment(vm.tanggalLahir).format("YYYY/MM/DD")
            let tglhpht = moment(vm.hpht).format("YYYY/MM/DD")
            let tglhpl = moment(vm.hpl).format("YYYY/MM/DD")
            console.log(tgllhr,"ngetes")
            axios.post(ipBackend + '/users/register', {
                username:vm.username,
                password:vm.password,
                email:vm.email,
                nama:vm.nama,
                alamat:vm.alamat,
                role:vm.role,
                noHp:vm.noHp,
                HPHT:tglhpht,
                HPL:tglhpl,
                tanggalLahir:tgllhr,
                pendidikanTerakhir:vm.pendidikanTerakhir,
                pekerjaan:vm.pekerjaan,
                usiaKehamilan:vm.usiaKehamilan,
                paritas:vm.paritas,
                dukunganSuami:vm.dukunganSuami
            },
            )
            .then(res => {
                console.log(res.data)
                if(res.data.name == "SequelizeDatabaseError"){
                    this.$swal("Gagal Mendaftar");
                }
                else {
                    this.$swal("Berhasil Mendaftar");
                    vm.$router.push({ path: "/login" });
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
  }
}
</script>
