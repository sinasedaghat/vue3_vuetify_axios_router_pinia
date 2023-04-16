import http from "@/lib/axios"

class latest {
  getLatest(): Promise<any> {
    return http.get("/latest/");
  }
}

export default new latest()