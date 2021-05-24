<script>
export default {
  name: 'nav',
  computed: { 
    sidebarItems () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: this.$t('menu.dashboard'),
            to: '/dashboard',
            icon: 'cil-speedometer',
          },
          {
            _name: 'CSidebarNavTitle',
            _children: ['Master']
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Master Karyawan',
            to: '/theme/colors',
            icon: 'cil-pencil'
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Master Barang',
            to: '/theme/typography',
            icon: 'cil-pencil'
          },
          {
            _name: 'CSidebarNavItem',
            name: 'Master Wilayah',
            to: '/theme/typography',
            icon: 'cil-pencil'
          },
        ]
      }]
    }
  }
}
</script>
