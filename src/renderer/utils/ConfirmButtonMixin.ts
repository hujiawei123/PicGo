import { Component, Vue } from 'vue-property-decorator'
@Component
export default class extends Vue {
  defaultPicBed = this.$db.get('picBed.current')
  setDefaultPicBed (type: string) {
    this.$db.set('picBed.current', type)
    this.defaultPicBed = type
    const successNotification = new Notification('设置默认图床', {
      body: '设置成功'
    })
    successNotification.onclick = () => {
      return true
    }
  }
}
