// declaring variables
const Container = document.querySelector(".imgContainer")
const allCategories = document.querySelector(".all-categories")
const images = document.querySelector(".images")
const more = document.querySelector(".more")
let defaultImg
// creating varibales
let ul = document.createElement("ul")
const loadMore = document.createElement("p")
// const next = document.createElement("p")
// const back = document.createElement("p")
loadMore.innerHTML = ""
// next.innerHTML = ""
// back.innerHTML = ""


loadMore.setAttribute = ("id", "styles")
// next.setAttribute = ("id", "styles")
// back.setAttribute = ("id", "styles")
// appending
// more.append(back, loadMore, next)
allCategories.append(ul)
let imagesChild
// function for default photos
function getDefPhotos(url, target = null){
    fetch(url,{headers: {
        'x-api-key': "api_key"
      }})
      .then(responce => responce.json())
      .then(res => {
        res.forEach(img => {
            defaultImg = document.createElement("img")
            defaultImg.src = img.url
            defaultImg.className = "images-children"
            if(target === "boxes"){
                arrBox.push(defaultImg)
            }
            if(target === "clothes"){
                arrClothes.push(defaultImg)
            }
            if(target === "hats"){
                arrHat.push(defaultImg)
            }
            if(target === "sinks"){
                arrSink.push(defaultImg)
            }
            if(target === "space"){
                arrSpace.push(defaultImg)
            }
            if(target === "sunglasses"){
                arrSunglasses.push(defaultImg)
            }
            if(target === "ties"){
                arrTies.push(defaultImg)
            }
            images.append(defaultImg)
        })
      })
}
const nextBox = document.createElement("p")
const backBox = document.createElement("p")
const nextClothes = document.createElement("p")
const backClothes = document.createElement("p")
const nextHats = document.createElement("p")
const backHats = document.createElement("p")
const nextSinks = document.createElement("p")
const backSinks = document.createElement("p")
const nextSpace = document.createElement("p")
const backSpace = document.createElement("p")
const nextGlasses = document.createElement("p")
const backGlasses = document.createElement("p")
const nextTies = document.createElement("p")
const backTies = document.createElement("p")

let arrBox = []
let arrClothes = []
let arrHat = []
let arrSink = []
let arrSpace = []
let arrSunglasses = []
let arrTies = []


let boxCount = 1
let countClothes = 1
let countHat = 1
let countSink = 1
let countSpace = 1
let countSunglasses = 1
let countTies = 1
getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1")
// function for fetching photos
// function forNext(url){
//     fetch(url,{headers: {
//         'x-api-key': "api_key"
//       }})
//       .then(responce => responce.json())
//       .then(res => {
//         res.forEach(val => {
//         })
//       })
// }
function getPhotos(url, target){
    fetch(url,{headers: {
        'x-api-key': "api_key"
      }})
      .then(responce => responce.json())
      .then(res => {
        res.forEach(img => {
            imagesChild = document.createElement("img")
            imagesChild.src = img.url
            imagesChild.className = "images-children"
            if(target === "boxes"){
                arrBox.push(imagesChild)
                if(arrBox.length <= 10){
                    for(let i = 0; i < arrBox.length; i++){
                        images.append(arrBox[i])
                    }
                } 
                else if(arrBox.length > 10){
                    images.innerHTML = ""
                    for(let i = arrBox.length - 10; i < arrBox.length; i++){
                        images.append(arrBox[i])                    
                    }
                }
            }
            if(target === "clothes"){
                arrClothes.push(imagesChild)
                if(arrClothes.length <= 10){
                    for(let i = 0; i < arrClothes.length; i++){
                        images.append(arrClothes[i])
                    }
                } 
                else if(arrClothes.length > 10){
                    images.innerHTML = ""
                    for(let i = arrClothes.length - 10; i < arrClothes.length; i++){
                        images.append(arrClothes[i])                    
                    }
                }
            }
            if(target === "hats"){
                arrHat.push(imagesChild)
                if(arrHat.length <= 10){
                    for(let i = 0; i < arrHat.length; i++){
                        images.append(arrHat[i])
                    }
                } 
                else if(arrHat.length > 10){
                    images.innerHTML = ""
                    for(let i = arrHat.length - 10; i < arrHat.length; i++){
                        images.append(arrHat[i])                    
                    }
                }
            }
            if(target === "sinks"){
                arrSink.push(imagesChild)
                if(arrSink.length <= 10){
                    for(let i = 0; i < arrSink.length; i++){
                        images.append(arrSink[i])
                    }
                } 
                else if(arrSink.length > 10){
                    images.innerHTML = ""
                    for(let i = arrSink.length - 10; i < arrSink.length; i++){
                        images.append(arrSink[i])                    
                    }
                }
            }
            if(target === "space"){
                arrSpace.push(imagesChild)
                if(arrSpace.length <= 10){
                    for(let i = 0; i < arrSpace.length; i++){
                        images.append(arrSpace[i])
                    }
                } 
                else if(arrSpace.length > 10){
                    images.innerHTML = ""
                    for(let i = arrSpace.length - 10; i < arrSpace.length; i++){
                        images.append(arrSpace[i])                    
                    }
                }
            }
            if(target === "sunglasses"){
                arrSunglasses.push(imagesChild)
                if(arrSunglasses.length <= 10){
                    for(let i = 0; i < arrSunglasses.length; i++){
                        images.append(arrSunglasses[i])
                    }
                } 
                else if(arrSunglasses.length > 10){
                    images.innerHTML = ""
                    for(let i = arrSunglasses.length - 10; i < arrSunglasses.length; i++){
                        images.append(arrSunglasses[i])                    
                    }
                }
            }
            if(target === "ties"){
                arrTies.push(imagesChild)
                if(arrTies.length <= 10){
                    for(let i = 0; i < arrTies.length; i++){
                        images.append(arrTies[i])
                    }
                } 
                else if(arrTies.length > 10){
                    images.innerHTML = ""
                    for(let i = arrTies.length - 10; i < arrTies.length; i++){
                        images.append(arrTies[i])                    
                    }
                }
            }
        })
      })
}

// function for getting categories
function getCategories(url){
    fetch(url)
    .then(val => val.json())
    .then(res => {
        res.forEach(cat => {
            let li = document.createElement("li")
            li.innerHTML = cat.name
            li.className = "categories-child"
            ul.append(li)
            li.addEventListener("click", (e) => {
                if(e.target.innerHTML === "boxes"){
                    nextClothes.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextSinks.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSpace.innerHTML = ""
                    backClothes.innerHTML = ""
                    backHats.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backSinks.innerHTML = ""
                    backTies.innerHTML = ""
                    backSpace.innerHTML = ""
                    nextBox.setAttribute = ("id", "styles")
                    backBox.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5", "boxes")
                    
                    console.log(arrBox)
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextBox.innerHTML  = "next"
                        backBox.innerHTML = "back"
                        more.append(backBox, loadMore, nextBox)
                    }, 1500);

                    nextBox.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        boxCount++
                        loadMore.innerHTML = "Page" + boxCount
                        let lengthArr = boxCount * 10
                        if(lengthArr > arrBox.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5", "boxes")
                            console.log(arrBox)
                        }
                        else if(lengthArr <= arrBox.length){
                            for(let i = arrBox.length - 10; i < arrBox.length; i++){
                                images.append(arrBox[i])
                            }
                        }
                    })
                    backBox.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        boxCount--
                        loadMore.innerHTML = "Page" + boxCount
                        let lengthArr = boxCount * 10 
                        if(boxCount <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrBox[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            boxCount = 1
                        } 
                        else if(boxCount > 1){
                            images.innerHTML = ""
                            console.log(boxCount)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrBox.length)
                                images.append(arrBox[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "clothes"){
                    nextBox.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextSinks.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSpace.innerHTML = ""
                    backBox.innerHTML = ""
                    backHats.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backSinks.innerHTML = ""
                    backTies.innerHTML = ""
                    backSpace.innerHTML = ""
                    nextClothes.setAttribute = ("id", "styles")
                    backClothes.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15", "clothes")
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextClothes.innerHTML  = "next"
                        backClothes.innerHTML = "back"
                        more.append(backClothes, loadMore, nextClothes)
                    }, 1500);
                    console.log(arrClothes)
                    for(let i = 0; i < arrClothes.length; i++){
                        images.append(arrClothes[i])
                    }
                    nextClothes.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countClothes++
                        loadMore.innerHTML = "Page" + countClothes
                        let lengthArr = countClothes * 10
                        if(lengthArr > arrClothes.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15", "clothes")
                            console.log(arrClothes)
                        }
                        else if(lengthArr <= arrClothes.length){
                            for(let i = arrClothes.length - 10; i < arrClothes.length; i++){
                                images.append(arrClothes[i])
                            }
                        }
                    })
                    backClothes.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countClothes--
                        loadMore.innerHTML = "Page" + countClothes
                        let lengthArr = countClothes * 10 
                        if(countClothes <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrClothes[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countClothes = 1
                        } 
                        else if(countClothes > 1){
                            images.innerHTML = ""
                            console.log(countClothes)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrClothes.length)
                                images.append(arrClothes[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "hats"){
                    nextBox.innerHTML = ""
                    nextClothes.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextSinks.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSpace.innerHTML = ""
                    backBox.innerHTML = ""
                    backClothes.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backSinks.innerHTML = ""
                    backTies.innerHTML = ""
                    backSpace.innerHTML = ""
                    nextHats.setAttribute = ("id", "styles")
                    backHats.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1", "hats")
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextHats.innerHTML  = "next"
                        backHats.innerHTML = "back"
                        more.append(backHats, loadMore, nextHats)
                    }, 1500);
                    console.log(arrHat)
                    for(let i = 0; i < arrHat.length; i++){
                        images.append(arrHat[i])
                    }
                    nextHats.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countHat++
                        loadMore.innerHTML = "Page" + countHat
                        let lengthArr = countHat * 10
                        if(lengthArr > arrHat.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1", "hats")
                            console.log(arrHat)
                        }
                        else if(lengthArr <= arrHat.length){
                            for(let i = arrHat.length - 10; i < arrHat.length; i++){
                                images.append(arrHat[i])
                            }
                        }
                    })
                    backHats.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countHat--
                        loadMore.innerHTML = "Page" + countHat
                        let lengthArr = countHat * 10 
                        if(countHat <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrHat[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countHat = 1
                        } 
                        else if(countHat > 1){
                            images.innerHTML = ""
                            console.log(countHat)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrHat.length)
                                images.append(arrHat[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "sinks"){
                    nextBox.innerHTML = ""
                    nextClothes.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSpace.innerHTML = ""
                    backBox.innerHTML = ""
                    backClothes.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backHats.innerHTML = ""
                    backTies.innerHTML = ""
                    backSpace.innerHTML = ""
                    nextSinks.setAttribute = ("id", "styles")
                    backSinks.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14", "sinks")
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextSinks.innerHTML  = "next"
                        backSinks.innerHTML = "back"
                        more.append(backSinks, loadMore, nextSinks)
                    }, 1500);
                    console.log(arrSink)
                    for(let i = 0; i < arrSink.length; i++){
                        images.append(arrSink[i])
                    }
                    nextSinks.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSink++
                        loadMore.innerHTML = "Page" + countSink
                        let lengthArr = countSink * 10
                        if(lengthArr > arrSink.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14", "sinks")
                            console.log(arrSink)
                        }
                        else if(lengthArr <= arrSink.length){
                            for(let i = arrSink.length - 10; i < arrSink.length; i++){
                                images.append(arrSink[i])
                            }
                        }
                    })
                    backSinks.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSink--
                        loadMore.innerHTML = "Page" + countSink
                        let lengthArr = countSink * 10 
                        if(countSink <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrSink[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countSink = 1
                        } 
                        else if(countSink > 1){
                            images.innerHTML = ""
                            console.log(countSink)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrSink.length)
                                images.append(arrSink[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "space"){
                    nextBox.innerHTML = ""
                    nextClothes.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSinks.innerHTML = ""
                    backBox.innerHTML = ""
                    backClothes.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backHats.innerHTML = ""
                    backTies.innerHTML = ""
                    backSinks.innerHTML = ""
                    nextSpace.setAttribute = ("id", "styles")
                    backSpace.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2", "space")
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextSpace.innerHTML  = "next"
                        backSpace.innerHTML = "back"
                        more.append(backSpace, loadMore, nextSpace)
                    }, 1500);
                    console.log(arrSpace)
                    for(let i = 0; i < arrSpace.length; i++){
                        images.append(arrSpace[i])
                    }
                    nextSpace.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSpace++
                        loadMore.innerHTML = "Page" + countSpace
                        let lengthArr = countSpace * 10
                        if(lengthArr > arrSpace.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2", "space")
                            console.log(arrSpace)
                        }
                        else if(lengthArr <= arrSpace.length){
                            for(let i = arrSpace.length - 10; i < arrSpace.length; i++){
                                images.append(arrSpace[i])
                            }
                        }
                    })
                    backSpace.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSpace--
                        loadMore.innerHTML = "Page" + countSpace
                        let lengthArr = countSpace * 10 
                        if(countSpace <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrSpace[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countSpace = 1
                        } 
                        else if(countSpace > 1){
                            images.innerHTML = ""
                            console.log(countSpace)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrSpace.length)
                                images.append(arrSpace[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "sunglasses"){
                    nextBox.innerHTML = ""
                    nextClothes.innerHTML = ""
                    nextSpace.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextTies.innerHTML = ""
                    nextSinks.innerHTML = ""
                    backBox.innerHTML = ""
                    backClothes.innerHTML = ""
                    backSpace.innerHTML = ""
                    backHats.innerHTML = ""
                    backTies.innerHTML = ""
                    backSinks.innerHTML = ""
                    nextGlasses.setAttribute = ("id", "styles")
                    backGlasses.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4", "sunglasses")
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextGlasses.innerHTML  = "next"
                        backGlasses.innerHTML = "back"
                        more.append(backGlasses, loadMore, nextGlasses)
                    }, 1500);
                    console.log(arrSunglasses)
                    for(let i = 0; i < arrSunglasses.length; i++){
                        images.append(arrSunglasses[i])
                    }
                    nextGlasses.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSunglasses++
                        loadMore.innerHTML = "Page" + countSunglasses
                        let lengthArr = countSunglasses * 10
                        if(lengthArr > arrSunglasses.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4", "sunglasses")
                            console.log(arrSunglasses)
                        }
                        else if(lengthArr <= arrSunglasses.length){
                            for(let i = arrSunglasses.length - 10; i < arrSunglasses.length; i++){
                                images.append(arrSunglasses[i])
                            }
                        }
                    })
                    backGlasses.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countSunglasses--
                        loadMore.innerHTML = "Page" + countSunglasses
                        let lengthArr = countSunglasses * 10 
                        if(countSunglasses <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrSunglasses[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countSunglasses = 1
                        } 
                        else if(countSunglasses > 1){
                            images.innerHTML = ""
                            console.log(countSunglasses)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrSunglasses.length)
                                images.append(arrSunglasses[i])
                            }
                        }

                    })
                }
                if(e.target.innerHTML === "ties"){
                    nextBox.innerHTML = ""
                    nextClothes.innerHTML = ""
                    nextSpace.innerHTML = ""
                    nextHats.innerHTML = ""
                    nextGlasses.innerHTML = ""
                    nextSinks.innerHTML = ""
                    backBox.innerHTML = ""
                    backClothes.innerHTML = ""
                    backSpace.innerHTML = ""
                    backHats.innerHTML = ""
                    backGlasses.innerHTML = ""
                    backSinks.innerHTML = ""
                    nextTies.setAttribute = ("id", "styles")
                    backTies.setAttribute = ("id", "styles")
                    images.innerHTML = ""
                    loadMore.innerHTML = ""
                    getDefPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7", "ties")
                    console.log(arrTies)
                    for(let i = 0; i < arrTies.length; i++){
                        images.append(arrTies[i])
                    }
                    setTimeout(() => {
                        loadMore.innerHTML = "Page 1"
                        nextTies.innerHTML  = "next"
                        backTies.innerHTML = "back"
                        more.append(backTies, loadMore, nextTies)
                    }, 1500);
                    nextTies.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countTies++
                        loadMore.innerHTML = "Page" + countTies
                        let lengthArr = countTies * 10
                        if(lengthArr > arrTies.length){
                            getPhotos("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7", "ties")
                            console.log(arrTies)
                        }
                        else if(lengthArr <= arrTies.length){
                            for(let i = arrTies.length - 10; i < arrTies.length; i++){
                                images.append(arrTies[i])
                            }
                        }
                    })
                    backTies.addEventListener("click", (e) => {
                        images.innerHTML = ""
                        countTies--
                        loadMore.innerHTML = "Page" + countTies
                        let lengthArr = countTies * 10 
                        if(countTies <= 1){
                            for(let i = 0; i < 10; i++){
                                images.append(arrTies[i])
                            }
                            loadMore.innerHTML = "Page 1"
                            countTies = 1
                        } 
                        else if(countTies > 1){
                            images.innerHTML = ""
                            console.log(countTies)
                            for(let i = lengthArr - 10; i < lengthArr; i++){
                                console.log(arrTies.length)
                                images.append(arrTies[i])
                            }
                        }
                    })
                }
            })
        })

    })
}
getCategories("https://api.thecatapi.com/v1/categories")