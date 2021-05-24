<script>
export default {
  name: 'sidebarCS',
  computed: { 
    sidebarCS () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: this.$t('menu.dashboard'),
            to: '/dashboardcs',
            icon: 'cil-speedometer',
          },
          {
            _name: 'CSidebarNavItem',
            name: 'List Ibu Hamil',
            to: '/listbumil',
            icon: 'cil-pencil'
          },
        ]
      }]
    }
  }
}
</script>
