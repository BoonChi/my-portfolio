export const delayMilliSecond = (value:number) => {
  return new Promise(resolve => setTimeout(resolve,value))
}

// use callback
const userLeft = true
const userWatchingMeme = true

type callback = (message:string) => void
interface ErrorCallbackItem  {
  name: string;
  message: string
}
type errorCallback = (items: ErrorCallbackItem) => void

const watchTutorialCallback = (callback: callback, errorCallback: errorCallback) => {
  if(userLeft){
    errorCallback({
      name: "user",
      message: "User left :("
    })
  }else if(userWatchingMeme){
    errorCallback({
      name: "watching",
      message: "user watched meme"
    })
  }else {
    callback("User is still watching our video")
  }
}

watchTutorialCallback(message => console.log("Sucess callback "+ message),error => console.log("Failed callback:"+error.name))

// use callback

const watchTutorialPromise = new Promise((resolve, reject) => {
  if(userLeft){
    reject({
      name: "user",
      message: "User left :("
    })
  }else if(userWatchingMeme){
    reject({
      name: "watching",
      message: "user watched meme"
    })
  }else {
    resolve("User is still watching our video")
  }
})

watchTutorialPromise.then(message => console.log(message)).catch(error => console.log(error.name, error.message))