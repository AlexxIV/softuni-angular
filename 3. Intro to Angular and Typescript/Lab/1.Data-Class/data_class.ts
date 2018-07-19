class dataRequest {
    method: string
    uri: string
    version: string
    message: string
    response: string 
    fulfilled: boolean 

    constructor(method, uri, version, message) {
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = 'undefined'
        this.fulfilled = false
    }
}

let myData = new dataRequest('GET', 'http://google.com', 'HTTP/1.1', '')

console.log(myData)