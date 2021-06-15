<script>
export default {
  name: 'sidebarCS',
  computed: { 
    sidebarCS () {
      return [{
        _name: 'CSidebarNav',
        _children: [{
            _name: 'CSidebarNavItem',
            name: 'List Ibu Hamil',
            to: '/listbumilcs',
            icon: 'cil-pencil',
          },


        ]
      }]
    }
  }
}
</script>
