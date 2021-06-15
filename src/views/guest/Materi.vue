<template>
    <div class="c-app flex-row align-items-center">
        <CContainer style="font-family:timesnewroman; font-size:18px">
            <CRow>
                <CCol xl="12">
                <CCard>
                    <CCardHeader>
                    Materi IUD
                    </CCardHeader>
                    <CCardBody>
                    <div>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 0 ? false : 0" 
                        >
                            <h5 class="m-0">1.	Pengertian KB Pasca Persalinan</h5>
                        </CButton>
                        <CCollapse :show="accordion === 0">
                            <CCardBody style="font-family:agencyfb; font-size:18px">
                            <center><iframe  src="https://www.youtube.com/embed/XfZP8GUYMFo" title="YouTube video player" allowfullscreen></iframe></center>
                            <p>KB pasca persalinan merupakan pelayanan KB yang diberikan kepada pasangan usia subur setelah persalinan sampai kurun waktu 6 minggu (42 hari).<br>
                            KB pasca persalinan merupakan suatu upaya yang dilakukan untuk menurunkan angka kematian ibu (AKI) dan angka kematian bayi (AKB).<br>
                            Penggunaan kontrasepsi harus direncanakan pada masa kehamilan sehingga dapat mempengaruhi ibu untuk memulai metode kontrasepsi yang dipilihnya sesegera mungkin setelah melahirkan.</p>
                            <center><iframe  src="https://www.youtube.com/embed/fqmcBqZxMF4" title="YouTube video player" allowfullscreen></iframe></center>
                            <p>Tujuan KB pasca persalinan:<br>
                            a)	Menjarangkan kehamilan<br>
                            b)	Mencegah kehamilan yang tidak direncanakan, sehingga setiap keluarga dapat merencanakan kehamilan yang aman dan sehat.<br>
                            c)	Mengatur jarak antar kehamilan, jarak yang aman dari melahirkan ke kehamilan selanjutnya adalah 2 tahun. Jarak kehamilan yang terlalu dekat dapat meningkatkan resiko kelahiran prematur, berat bayi lahir rendah (BBLR), dan bayi kecil masa kehamilan.</p>
                            <p>Salah satu metode kontrasepsi yang direkomendasikan oleh WHO sebagai kontrasepsi pasca persalinan adalah IUD. Hal ini sesuai dengan target rencana pembangunan jangka menengah (RPJMN) tahun 2015-2019 yaitu meningkatkan kontrasepsi jangka panjang, salah satunya adalah metode IUD.</p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 1 ? false : 1" 
                        >
                            <h5 class="m-0">2.	IUD Pasca Persalinan</h5>
                        </CButton>
                        <CCollapse :show="accordion === 1">
                            <CCardBody style="font-family:agencyfb; font-size:18px">
                                <center><iframe  src="https://www.youtube.com/embed/VNf9Pqs60vw" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Alat kontrasepsi berbentuk kecil yang terdiri dari rangka plastik yang lentur dengan lengan tembaga dan disertai dengan benang yang dipasang kedalam rahim. IUD dapat digolongkan menjadi dua jenis, yaitu IUD yang tidak mengandung hormon dan IUD yang mengandung hormon. </p>
                                <p>IUD merupakan salah satu metode untuk mencegah kehamilan yang aman dan efektif digunakan setelah persalinan normal maupun operasi sesar. Dibandingkan dengan sterilisasi, IUD lebih sederhana, lebih murah, dan dapat segera hamil kembali ketika dilepas. IUD yang dipasang setelah melahirkan dapat meningkatkan fokus ibu untuk mengasuh anak tanpa khawatir akan terjadinya kehamilan yang tidak diharapkan. Pemasangan IUD segera setelah persalinan di fasilitas kesehatan juga dapat mencegah kehilangan kesempatan untuk mendapatkan perlindungan kontrasepsi (<i>missed opportunity</i>) </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 2 ? false : 2" 
                        >
                            <h5 class="m-0">3.	Waktu Pemasangan</h5>
                        </CButton>
                        <CCollapse :show="accordion === 2">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/fmAOm7waG24" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Pemasangan IUD setelah melahirkan dapat dilakukan pada :<br>
                                a.	Boleh dipasang dalam waktu 10 menit setelah plasenta lahir.<br>
                                b.	Dipasang dalam waktu 48 jam setelah melahirkan.<br>
                                c.	Dapat pula dipasang setelah 4 minggu setelah melahirkan, dengan ketentuan tidak ada kehamilan.<br>
                                d.	Pada persalinan dengan operasi sesar, pemasangan IUD dapat bersamaan dengan dilakukannya operasi sesar.
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 3 ? false : 3" 
                        >
                            <h5 class="m-0">4.	Jenis IUD</h5>
                        </CButton>
                        <CCollapse :show="accordion === 3">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/P_bxRSOhxxo" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Saat ini, terdapat 2 jenis alat kontrasepsi dalam rahim (AKDR/IUD) yaitu IUD yang hanya mengandung tembaga (Un-medicated), dan IUD yang mendapat tambahan kandungan hormon (Medicated). </p>
                                <p>a.	IUD yang hanya mengandung tembaga meliputi :<br>
                                        1)	Cu T- 200 B: memiliki karakteristik panjang 36 mm, lebar 32 mm, mengandung 200 mm2  kawat halus tembaga, ujung bagian bawah batang IUD berbentuk bola. Efektif digunakan selama 3 tahun.<br>
                                        2)	ML Cu 250: memiliki karakteristik luas permukaan kawat halus tembaga 220 mm2, memiliki benang ekor 2 lembar berwarna hitam atau tidak berwarna, efektif digunakan selama 3 tahun.<br>
                                        3)	ML Cu 375: memiliki karakteristik luas permukaan kawat halus tembaga 375 mm2, memiliki 2 benang ekor berwarna hitam atau tidak berwarna, efektif digunakan selama 5 tahun.<br>
                                        4)	Cu T- 380 A/ Para Gard: memiliki karakteristik panjang 36 mm, lebar 32 mm, luas permukaan kawat halus tembaga 314 mm2 pada batang vertikal, terdapat 2 selubung tembaga  seluas masing-masing 33 mm2 pada masing-masing lengan horizontal. Efektif digunakan selama 8 tahun, bahkan menurut FDA daya kerjanya sampai 10 tahun.
                                </p>
                                <p>b.	IUD yang mendapat tambahan kandungan hormone yaitu :<br>
                                        1)	Progestasert-T/ Alza T: memiliki karakteristik panjang 36 mm, lebar 32 mm, dengan 2 lembar benang ekor berwarna hitam. Mengandung 38 mg progesteron dan barium sulfat, melepaskan 65 mcg progesteron per hari. Efektif digunakan selama 18 bulan. <br> 
                                        2)	Mirena: plastik fleksibel berukuran 32 mm berbentuk T, mirena berisi 52 mg levonorgestrel (LNG). Mirena dapat melepaskan levonorgestrel dalam jumlah yang sangat kecil setiap harinya (20 mcg/ hari pada awal pemasangan dan menjadi 10 mcg/hari setelah 5 tahun).
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 4 ? false : 4" 
                        >
                            <h5 class="m-0">5.	Cara Kerja IUD</h5>
                        </CButton>
                        <CCollapse :show="accordion === 4">
                            <CCardBody style="font-family:timesnewroman; font-size:18px">
                                <center><iframe  src="https://www.youtube.com/embed/DTB8rkt4l4I" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Secara umum, mencegah bertemunya sel telur dan sperma dan mencegah menempelnya hasil pembuahan pada rahim9. Berikut adalah cara kerja berdasarkan jenis IUD yaitu :
                                </p>
                                <table>
                                    <tr>
                                        <th><i>Un-medicated</i>  IUD</th>
                                        <th><i>Medicated</i>  IUD</th>
                                    </tr>
                                    <tr>
                                        <td>Timbul reaksi radang local yang non-spesifik didalam kavum uteri sehingga implantasi sel telur yang telah dibuahi terganggu.</td>
                                        <td>Mencegah pembuahan sel telur, dengan mencegah penebalan dinding rahim sehingga sel telur yang telah dibuahi tidak berkembang. </td>
                                    </tr>
                                    <tr>
                                        <td>Produksi local prostaglandin yang meninggi menyebabkan terhambatnya implantasi.</td>
                                        <td>Mengeblok bersatunya ovum dan sperma. </td>
                                    </tr>
                                    <tr>
                                        <td>Terlepasnya blastocyst yang telah berimplantasi di dalam endometrium.</td>
                                        <td>Memenuhi leher rahim dengan lendir lengket sehingga mencegah masuknya sperma.</td>
                                    </tr>
                                    <tr>
                                        <td>Menghambat pergerakan ovum yang bertambah cepat didalam tuba fallopi.</td>
                                        <td>Mengurangi jumlah sperma yang mencapai tuba.</td>
                                    </tr>
                                </table>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 5 ? false : 5" 
                        >
                            <h5 class="m-0">6.	Indikasi Pemasangan IUD</h5>
                        </CButton>
                        <CCollapse :show="accordion === 5">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/Zs4PKUpXGeU" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Sebagian besar perempuan dapat memakai IUD (AKDR) sebagai alat kontrasepsi untuk mencegah kehamilan9. Beberapa kondisi ibu yang dapat menggunakan IUD diantaranya :<br>
                                a.	Pernah melahirkan dan telah memiliki anak.<br>
                                b.	Menginginkan untuk menggunakan metode kontrasepsi untuk jangka panjang.<br>
                                c.	Ibu sedang menyusui dan ingin menggunakan kontrasepsi. <br>
                                d.	Memiliki resiko penyakit kelamin termasuk HIV/AIDS dan IMS. <br>
                                e.	Setelah keguguran. <br>
                                f.	Sering lupa mengonsumsi pil KB. <br>
                                g.	Ibu setelah melahirkan baik secara normal maupun dengan operasi sesar. Waktu pemasangan sesuai dengan ketentuan sebelumnya.
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 6 ? false : 6" 
                        >
                            <h5 class="m-0">7.	Kontraindikasi</h5>
                        </CButton>
                        <CCollapse :show="accordion === 6">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/jHVsfLyrzg8" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Berikut adalah kondisi ibu yang tidak diperbolehkan menggunakan IUD (AKDR) diantaranya : <br>
                                a.	Sedang hamil. <br>
                                b.	Memiliki resiko infeksi menular seksual termasuk HIV/AID yang tinggi, meliputi : <br>
                                1)	Mempunyai lebih dari 1 pasangan yang tidak selalu memakai kondom. <br>
                                2)	Memiliki pasangan dengan HIV/AIDS dan infeksi menular seksual dan tidak selalu menggunakan kondom. <br>
                                3)	Memakai jarum bersama, atau pasangan memakai jarum suntik bersama. <br>
                                c.	Menstruasi yang tidak biasa sebelum pemakaian IUD (AKDR). <br>
                                d.	Terdapat infeksi atau masalah pada organ reproduksi perempuan. <br>
                                e.	Terdapat kecurigaan alergi pada tembaga atau adanya penyakit Wilson.
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 7 ? false : 7" 
                        >
                            <h5 class="m-0">8.	Keuntungan Penggunaan IUD</h5>
                        </CButton>
                        <CCollapse :show="accordion === 7">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/tWkyuFhWnRU" title="YouTube video player" allowfullscreen></iframe>    </center>
                                <p>Penggunaan IUD/ AKDR memiliki banyak keuntungan, termasuk pada pemasangan setelah melahirkan. Keuntungan tersebut diantaranya : <br>
                                a.	IUD merupakan alat kontrasepsi yang aman dan efektif digunakan setelah melahirkan baik setelah persalinan normal maupun operasi sesar. <br>
                                b.	Tingkat efektivitasnya tinggi dengan kegagalan 1: 1000 pengguna. <br>
                                c.	IUD dapat bekerja hingga 10 tahun, bahkan menurut FDA (Food and Drug Administration) dapat bekerja hingga 12 tahun tergantung jenisny. <br>
                                d.	Dapat langsung dipasang pada ibu yang melahirkan di pelayanan kesehatan. <br>
                                e.	Pemasangan IUD setelah melahirkan tidak meningkatkan resiko infeksi atau endometriosis, perdarahan, dan perforasi uterus. <br>
                                f.	Rendahnya resiko terjadinya infeksi setelah pemasangan IUD/ AKDR pada ibu pasca melahirkan. <br>
                                g.	Tidak meningkatkan resiko perdarahan setelah pemasangan IUD/ AKDR pada ibu pasca melahirkan. <br>
                                h.	Mengurangi rasa nyeri saat pemasangan karena jalan lahir masih terbuka. <br>
                                i.	Aman digunakan saat sedang menyusui dan tidak mempengaruhi proses menyusui. <br>
                                j.	Tidak menggangu hubungan seksual. <br>
                                k.	Efek samping yang relatif sangat kecil. <br>
                                l.	Kesuburan dapat langsung kembali setelah IUD dilepas, dengan kata lain ibu dapat segera hamil kembali ketika IUD dilepas.
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 8 ? false : 8" 
                        >
                            <h5 class="m-0">9.	Keterbatasan Penggunaan IUD</h5>
                        </CButton>
                        <CCollapse :show="accordion === 8">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/hER3HJsYeb4" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>a.	Pemasangan dan pelepasan membutuhkan tenaga kesehatan dengan pelatihan khusus. Semua bidan dan dokter yang membantu pemasangan dan pelepasan IUD telah mendapatan pelatihan dan telah dinyatakan kompeten. Sehingga dapat dikatakan aman. <br>
                                b.	Tidak melindungi pengguna dari penyakit kelamin termasuk HIV/AIDS. Penggunaan IUD pada pengguna dengan HIV/AIDS hanya boleh dilakukan bila ada metode lain yang cocok. <br>
                                c.	Dapat terjadi kegagalan pemasangan dan ekspulsi (keluarnya IUD lewat jalan lahir). Kegagalan pemasangan dan ekspulsi dapat dikurangi dengan penggunaan metode dan inserter (alat untuk memasang IUD) yang tepa serta dilakukan oleh tenaga kesehatan yang kompeten.
                                </p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 9 ? false : 9" 
                        >
                            <h5 class="m-0">10.	Efek Samping</h5>
                        </CButton>
                        <CCollapse :show="accordion === 9">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/A13Szj2sQ2k" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Beberapa efek samping yang dapat terjadi selama penggunaan IUD diantaranya : <br>
                                    Sebagian efek samping yang dapat terjadi tidak berbahaya dan bukan tanda-tanda penyakit. Efek samping yang terjadi kemungkinan merupakan bentuk penyesuaian tubuh setelah pemasangan dan pada setiap orang berbeda reaksinya.
                                </p>
                                <table>
                                    <tr>
                                        <th>Efek Samping</th>
                                        <th>Penanganannya</th>
                                    </tr>
                                    <tr>
                                        <td>Kram/ mules yang dapat dirasakan beberapa hari setelah pemasangan IUD.</td>
                                        <td>
                                            <ul>
                                                <li>Istirahat cukup setelah IUD dipasang.</li>
                                                <li>Apabila kram/ mules yang dirasakan terasa mengganggu, dapat diatasi dengan meminum obat pereda nyeri (analgesik) sesuai dengan resep dokter/ bidan.</li>
                                                <li>Apabila kram yang dirasakan terasa berat dan sangat mengganggu, segera datang ke fasilitas kesehatan untuk mendapatkan tindakan selanjutnya.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Gangguan menstruasi/ haid yang dapat berupa : 
                                            <ul>
                                                <li>Haid lebih lama dan lebih banyak</li>
                                                <li>Timbulnya bercak atau flek diantara masa haid</li>
                                                <li>Terjadinya kram atau nyeri selama haid</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>Apabila gangguan haid yang dialami terasa mengganggu, segera datang ke bidan/ dokter untuk mengetahui kondisi ibu dan pengobatan yang sesuai.</li>
                                                <li>Apabila gangguan haid yang dialami menyebabkan anemia, pencabutan atau pelepasan IUD dapat dilakukan dan bidan akan membantu memilih metode kontrasepsi lain yang dapat digunakan ibu.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Benang IUD bertambah panjang atau hilang.</td>
                                        <td>
                                            <ul>
                                                <li>Datanglah segera ke bidan apabila merasa benang bertambah panjang atau dirasa tidak teraba ataupun hilang.</li>
                                                <li>Jangan panik, karena IUD hanya bisa keluar lewat jalan lahir dan tidak dapat berpindah atau berjalan ke organ tubuh yang lain.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 10 ? false : 10" 
                        >
                            <h5 class="m-0">11.	Pemasangan dan Pelepasan</h5>
                        </CButton>
                        <CCollapse :show="accordion === 10">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/powIjFrkqPY" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Pemasangan dan pelepasan IUD dilakukan oleh tenaga kesehatan yang kompeten di fasilitas kesehatan (rumah sakit, puskesmas atau Praktik bidan). Tindakan tersebut dilakukan tanpa bius dan ibu dalam keadaan sadar.</p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 11 ? false : 11" 
                        >
                            <h5 class="m-0">12.	Kunjungan Ulang</h5>
                        </CButton>
                        <CCollapse :show="accordion === 11">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/JAw6FuSO-q4" title="YouTube video player" allowfullscreen></iframe></center>
                                <p>Setelah pemasangan IUD, pemeriksaan dapat dilakukan satu minggu setelah pemasangan. Untuk pemeriksaan selanjutnya, dianjurkan untuk melakukan kunjungan ulang dalam 3-6 minggu, atau setelah masa haid berikutnya. Selain itu, datanglah ke fasilitas kesehatan untuk kunjungan ulang kapanpun jika ada masalah dan keluhan atau ingin melepas IUD.</p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                        <CCard class="mb-0">
                        <CButton 
                            block 
                            color="link" 
                            class="text-left shadow-none card-header" 
                            @click="accordion = accordion === 12 ? false : 12" 
                        >
                            <h5 class="m-0">13.	Tips memeriksa benang sendiri</h5>
                        </CButton>
                        <CCollapse :show="accordion === 12">
                            <CCardBody>
                                <center><iframe  src="https://www.youtube.com/embed/aFLgPp5c_sk" title="YouTube video player" allowfullscreen></iframe></center>
                            <p>Cuci tangan, duduk dalam posisi jongkok, masukkan jari kedalam vagina dan rasakan benang IUD (AKDR) di mulut rahim. Jangan menarik benangnya, dirasakan saja. Setelah itu, cuci tangan setelah selesai.</p>
                            </CCardBody>
                        </CCollapse>
                        </CCard>
                    </div>
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
export default {
  name: 'Materi',
  data () {
    return {
      collapse: false,
      cardCollapse: true,
      innerCollapse: false,
      accordion: 0,
    }
  },
  mounted(){
      axios.get(ipBackend + "/users/profile", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        //   console.log(res)
          if(res.data[0].tanggalPostSikap == null){
              this.$swal("Maaf selesaikan dulu semua pertanyaan pengetahuan dan sikap.");
              this.$router.push({path: '/dashboardguest'})
          }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
<style scoped>
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
</style>