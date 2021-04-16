let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."

m=str.search(/�\?[a-z]/)
str=str.replace(/�\?[a-z]/,str[m+2].toUpperCase().toString())
str=str.replace(/\?*�+\?*�*/g,' ')

console.log(str) // 'I'm going to take a trip to Daocheng on May Day.'