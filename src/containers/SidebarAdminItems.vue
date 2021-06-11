<script>
export default {
  name: 'sidebarAdmin',
  computed: { 
    sidebarAdmin () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: this.$t('menu.dashboard'),
            to: '/dashboardadmin',
            icon: 'cil-speedometer',
          },
          {
            _name: 'CSidebarNavItem',
            name: 'List Ibu Hamil',
            to: '/listbumil',
            icon: 'cil-pencil'
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
