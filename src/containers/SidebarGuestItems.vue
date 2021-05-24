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
            name: 'Pertanyaan',
            route: '/survey',
            icon: 'cil-layers',
            items: [{
                name: 'Pertanyaan Pengetahuan',
                to: '/survey/pengetahuan'
              },
              {
                name: 'Pertanyaan Sikap',
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
            name: 'Pertanyaan Posttest',
            route: '/surveypost',
            icon: 'cil-layers',
            items: [{
                name: 'Pertanyaan Pengetahuan',
                to: '/surveypost/postpengetahuan'
              },
              {
                name: 'Pertanyaan Sikap',
                to: '/surveypost/postsikap',
              },
            ]
          },
        ]
      }]
    }
  }
}
</script>
