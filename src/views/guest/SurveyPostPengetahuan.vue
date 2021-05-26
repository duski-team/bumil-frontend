<template>
    <div class ="surveypostpengetahuan">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-row>
                <b-col md="12">
                    <h3>
                    <strong>PERTANYAAN PENGETAHUAN</strong>
                    </h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="12">
                    <h4>
                      Petunjuk pengisian soal :
                    </h4>
                    <ul>
                      <li>Bacalah pernyataan dibawah ini dengan cermat dan teliti sebelum menjawab.</li>
                      <li>Setiap pernyataan pilihlah salah satu jawaban yang paling sesuai menurut ibu.</li>
                      <li>Untuk kelancaran dan aslinya hasil penelitian, mohon isilah pernyataan sesuai dengan pengetahuan ibu. Ibu tidak perlu bertanya atau meminta pendapat orang lain, jawablah seluruh pertanyaan secara jujur dan apa adanya.</li>
                    </ul>  
                </b-col>
            </b-row>
            <b-row>
              <b-card>
                <b-col md="12">
                    <div v-for="(question, index) in quiz.questions">
                      <div v-show="index === questionIndex">
                      
                        <h4 class="mt-5 mb-3">{{ question.text }}</h4> 
                        
                        <div v-for="answer in question.answers" class="form-check">
                          <label class="form-check-label">
                            <input class="form-check-input" type="radio"
                                :value="answer.value"
                                :name="index"
                                v-model="responses[index]">
                            {{answer.text}}
                          </label>
                        </div>
                        
                        <div class="mt-5">
                          <button class="btn btn-primary" @click="next">
                              Lanjut
                          </button>  
                        </div>
                      </div>
                    </div>
                    
                    <div v-show="questionIndex === quiz.questions.length">
                      <button class="btn btn-success" @click="playAgain">
                        Simpan
                      </button>
                    </div>
                </b-col>
              </b-card>
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
    name:'surveypostpengetahuan',
    data(){
        return {
            quiz: {
                title: "Quiz Sample Title",
                questions: [
                    {
                    text: '1.	KB pasca persalinan merupakan pelayanan KB yang diberikan pada saat?',
                    answers: [
                        {
                        text: 'a.	14 hari pasca keguguran',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Setelah persalinan sampai kurun waktu 6 minggu (42 hari)',
                        value: ['B',1]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '2.	Menurut ibu, apakah tujuan dari Keluarga Berencana Pasca Persalinan (KBPP)?',
                    answers: [
                        {
                        text: 'a.	Mencegah kehamilan yang tidak direncanakan',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Mengatur jarak kelahiran ',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Semua benar',
                        value: ['C', 1]
                        },
                    ]
                    },
                    {
                    text: '3.	Intra Uterine Device (IUD) atau lebih dikenal dengan Spiral merupakan?',
                    answers: [
                        {
                        text: 'a.	Alat kontrasepsi yang dimasukkan kedalam rongga rahim',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Alat kontrasepsi yang berisi hormon dan dimasukkan dibawah kulit ',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Obat kontrasepsi yang disuntikkan setiap bulan. ',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '4.	Pemasangan IUD yang dilakukan setelah melahirkan dapat bekerja hingga 10 tahun.',
                    answers: [
                        {
                        text: 'a.	Benar',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Salah',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '5.	Manakah waktu yang tepat untuk pemasangan IUD setelah melahirkan?',
                    answers: [
                        {
                        text: 'a.	Kurang dari 48 jam setelah melahirkan',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Hari terakhir menstruasi',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '6.	Salah satu jenis IUD yang hanya mengandung tembaga tanpa hormon yaitu?',
                    answers: [
                        {
                        text: 'a.	Mirena ',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Copper T 380 A',
                        value: ['B', 1]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '7.	Kapankah waktu pemasangan IUD/Spiral yang tidak diperbolehkan?',
                    answers: [
                        {
                        text: 'a.	Saat hamil',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Setelah melahirkan',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '8.	Manakah dibawah ini yang merupakan keuntungan dari penggunaan IUD/Spiral?',
                    answers: [
                        {
                        text: 'a.	Dapat mengganggu produksi ASI',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Kesuburan dapat langsung kembali setelah IUD/Spiral ',
                        value: ['B', 1]
                        },
                        {
                        text: 'c.	Dapat mencegah penularan penyakit kelamin',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '9.	Dimanakah ibu dapat mendapatkan pelayanan KB IUD/ Spiral pasca persalinan?',
                    answers: [
                        {
                        text: 'a.	Rumah Sakit',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Puskesmas',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Semua benar',
                        value: ['C', 1]
                        },
                    ]
                    },
                    {
                    text: '10.	Manakah yang termasuk kekurangan dari penggunaan IUD/Steril?',
                    answers: [
                        {
                        text: 'a.	Dapat keluar sendiri jika ukuran IUD tidak cocok dengan rahim',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Pemakaian harus disiplin setiap hari',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Semua benar',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '11.	Bagaimanakah kondisi ibu yang diperbolehkan menggunakan IUD/Spiral?',
                    answers: [
                        {
                        text: 'a.	Pernah melahirkan dan mempunyai anak',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Ibu yang mengalami ketuban pecah dini',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Memiliki penyakit kelamin dan HIV',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '12.	Manakah dibawah ini yang bukan keuntungan dari penggunaan IUD/Spiral?',
                    answers: [
                        {
                        text: 'a.	Aman digunakan pada ibu menyusui',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Mudah, dan dapat digunakan sendiri',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Dapat mencegah dari penyakit kelamin dan HIV',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '13.	Kapankah ibu dapat memeriksa IUD/Spiral setelah dipasang?',
                    answers: [
                        {
                        text: 'a.	Satu minggu setelah pemasangan',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Kapan saja setiap selesai haid ',
                        value: ['B', 0]
                        },
                        {
                        text: 'c.	Semua benar',
                        value: ['C', 1]
                        },
                    ]
                    },
                    {
                    text: '14.	Manakah dibawah ini yang benar mengenai waktu pemasangan IUD setelah melahirkan?',
                    answers: [
                        {
                        text: 'a.	Dalam kurun waktu 10 menit setelah ari-ari lahir.',
                        value: ['A', 1]
                        },
                        {
                        text: 'b.	Kurang dari 48 jam setelah melahirkan',
                        value: ['B', 1]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                    {
                    text: '15.	Dibawah ini, yang termasuk kelebihan dari penggunaan IUD/Spiral  oleh ibu adalah?',
                    answers: [
                        {
                        text: 'a.	Hanya bisa dipasang dan dilepas oleh tenaga kesehatan terlatih',
                        value: ['A', 0]
                        },
                        {
                        text: 'b.	Tidak mengganggu kenyamanan hubungan seksual dengan suami',
                        value: ['B', 1]
                        },
                        {
                        text: 'c.	Tidak tahu',
                        value: ['C', 0]
                        },
                    ]
                    },
                ]
            },
            questionIndex: 0,
            responses: [],
            errors: [],
            items: [],
        }
    },
    methods : {  
        next: function() {
            if (this.responses[this.questionIndex] === undefined) {
                this.errors[this.questionIndex] = 1;
                this.$swal("Silahkan isi Jawaban Terlebih Dahulu");
            } 
            else {
                this.errors[this.questionIndex] = 0;
                this.questionIndex++;
            } 
        },   
        score: function() {
            
        },
            
        playAgain: function() {
          console.log(this.responses)
            let bulk = []
            let user = localStorage.getItem('idUser')
            let angka = parseInt(user)
            this.responses.forEach((element, index) => {
            let penampung = {}
            penampung.pengetahuanId = index + 1
            penampung.jawaban = this.responses[index][0]  
            penampung.point = this.responses[index][1] 
            penampung.userId = angka
            bulk.push(penampung)    
            });
            console.log(bulk, 'ini bulk')
            axios.post(ipBackend + '/postPoolPengetahuan/screening', 
            {
              bulk : bulk
            }, 
            {
                headers: {
                    token: localStorage.getItem("token"),
                },
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        },
    }
}
</script>
