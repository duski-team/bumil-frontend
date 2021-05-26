<template>
    <div class ="surveypostsikap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-row>
                <b-col md="12">
                    <h3>
                    <strong>PERTANYAAN SIKAP</strong>
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
    name:'surveypostsikap',
    data(){
        return {
            quiz: {
                title: "Quiz Sample Title",
                questions: [
                    {
                    text: '1. Saya merasa yakin bahwa setiap wanita dapat menggunakan IUD dengan aman.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '2. Saya khawatir ketika menggunakan IUD/spiral setelah persalinan karena dapat mempengaruhi proses menyusui.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '3. Saya merasa malu ketika bidan melakukan pemasangan IUD setelah melahirkan',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '4. Saya merasa lebih percaya menggunakan IUD dibandingkan dengan alat kontrasepsi lainnya untuk mencegah kehamilan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '5. Dengan menggunakan IUD setelah melahirkan, saya tidak perlu mengingat-ingat kapan saya harus menggunakan kontrasepsi setiap hari atau bulan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '6. Saya merasa penggunaan IUD dapat mengganggu hubungan seksual dengan suami',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '7. Saya percaya dengan menggunakan IUD setelah melahirkan dapat mengatur jarak kehamilan berikutnya minimal 2 tahun.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '8. Pemasangan yang dilakukan oleh tenaga kesehatan terlatih, membuat saya merasa yakin untuk menggunakan IUD setelah melahirkan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '9. Saya merasa khawatir menstruasi atau haid yang saya alami menjadi lebih lama ketika menggunakan IUD',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '10. Saya rasa suami akan mendukung penggunaan IUD/Spiral menjadi alat kontrasepsi setelah melahirkan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '11. Saya khawatir pemasangan IUD setelah melahirkan dapat menimbulkan rasa nyeri atau sakit yang berlebihan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '12. Penggunaan IUD setelah melahirkan dapat membuat saya lebih fokus dalam merawat bayi. ',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '13. Saya merasa, IUD/ Spiral sangat praktis karena hanya perlu sesekali kontrol ke petugas kesehatan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
                        },
                    ]
                    },
                    {
                    text: '14. Saya merasa khawatir IUD yang telah dipasang dalam rahim dapat keluar dan menempel di organ lain.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 1]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 2]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 3]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 4]
                        },
                    ]
                    },
                    {
                    text: '15. Saya merasa yakin menggunakan IUD setelah melahirkan karena lebih efektif mencegah terjadinya kehamilan.',
                    answers: [
                        {
                        text: 'Sangat Setuju',
                        value: ['SS', 4]
                        },
                        {
                        text: 'Setuju',
                        value: ['S', 3]
                        },
                        {
                        text: 'Tidak Setuju',
                        value: ['TS', 2]
                        },
                        {
                        text: 'Sangat Tidak Setuju',
                        value: ['STS', 1]
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
            axios.post(ipBackend + '/postPoolSikap/screening', 
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
 