<script>
export default {
  name: 'sidebarAdmin',
  computed: { 
    sidebarAdmin () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: 'Dashboard Admin',
            to: '/dashboardadmin',
            icon:'cil-speedometer'
          },
          {
            _name: 'CSidebarNavItem',
            name: 'List Data Ibu Hamil',
            to: '/listuser',
            icon: 'cil-pencil',
          },
          {
            _name: 'CSidebarNavItem',
            name: 'List Nilai Ibu Hamil',
            to: '/listbumil',
            icon: 'cil-pencil',
          },
          {
            _name: 'CSidebarNavDropdown',
            name: 'Master Pertanyaan',
            route: '/pertanyaan',
            icon: 'cil-layers',
            items: [{
                name: 'Pertanyaan Pengetahuan',
                to: '/pertanyaan/pengetahuan'
              },
              {
                name: 'Pertanyaan Sikap',
                to: '/pertanyaan/sikap'
              },
            ]
          },
        ]
      }]
    }
  }
}
</script>
