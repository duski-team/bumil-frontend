<script>
export default {
  name: 'sidebarGuest',
  computed: { 
    sidebarGuest () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: 'Petunjuk Pengguna',
            to: '/dashboardguest',
            icon: 'cil-speedometer',
          },
          {
            _name: 'CSidebarNavDropdown',
            name: 'Soal',
            route: '/survey',
            icon: 'cil-layers',
            items: [{
                name: 'Soal Pengetahuan',
                to: '/survey/pengetahuan'
              },
              {
                name: 'Soal Sikap',
                to: '/survey/sikap',
              },
            ]
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Materi',
            to: '/materi',
            icon: 'cil-pencil'
          },
          {
            _name: 'CSidebarNavDropdown',
            name: 'Soal Akhir',
            route: '/surveypost',
            icon: 'cil-layers',
            items: [{
                name: 'Soal Pengetahuan',
                to: '/surveypost/postpengetahuan'
              },
              {
                name: 'Soal Sikap',
                to: '/surveypost/postsikap',
              },
            ]
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Pemasangan IUD',
            to: '/pemasangan',
            icon: 'cil-pencil'
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Chat',
            to: '/chatguest',
            icon: 'cil-pencil'
          },
        ]
      }]
    }
  }
}
</script>
