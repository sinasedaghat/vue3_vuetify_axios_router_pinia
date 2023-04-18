export interface Latest {
  motd: {
    msg: string
    url: string
  },
  success: boolean
  base: string
  data: string
  rates: {
    [prop: string]: number
  }
}