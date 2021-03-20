function ransomNote(mag,ran) {
  let magazine = mag.split(" ")
  let ransom = ran.split(" ")
  let magObj = {}
  let ranObj = {}
  let count = 0

  for (i=0; i<magazine.length; i++) {
    if (magObj[magazine[i]]) {
      magObj[magazine[i]] += 1
    } else {
      magObj[magazine[i]] = 1
        }
    }

  for (j=0; j<ransom.length; j++) {
   if (ranObj[ransom[j]]) {
     ranObj[ransom[j]] += 1
    } else {
     ranObj[ransom[j]] = 1
      }
    }

  for (k in ranObj) {
   if (magObj.hasOwnProperty(k) && (magObj[k] >= ranObj[k])) {
     count += ranObj[k]
    }
   }
if (count === ransom.length) {
      console.log("Yes")
  } else {
      console.log("No")
  }

}



let note = "hand me the ferbie or else"
let magazineHistorgram = {a: 6, b: 1, c: 3, d: 3, e: 12,
f: 2, h: 7, g:2, i:2, o:1, m:2, n:1, r:2, s:1, t:1, z:1 };
