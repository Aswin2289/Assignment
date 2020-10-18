let employe=[

		{eid:100,name:"ajay",desig:"devop",join:1981,resign:2003},
		{eid:101,name:"vijay",desig:"devop",join:1992,resign:2008},
		{eid:102,name:"bijoy",desig:"ba",join:1999,resign:2007},
		{eid:103,name:"jhon",desig:"ba",join:1989,resign:2010},
		{eid:104,name:"danie",desig:"qa",join:2009,resign:2014},
		{eid:105,name:"lari",desig:"qa",join:1987,resign:2010}
        ]

console.log("all employee name and designation only")
console.log("--------------------------------------")
var emp=employe.map(ob=>"name :\t"+ob.name+"\tDesignation :\t"+ob.desig)
for(i of emp)
{
    console.log(i)
}
console.log("\n")
console.log("all employee details whose desig equals devop")
console.log("---------------------------------------------")
var emp1=employe.filter(ob=>ob.desig=="devop")
for(i of emp1)
{
    console.log("Name :\t"+i["name"])
}
console.log("\n")
console.log("all employee details those who are woking in 80s  [*(>1980 & <2000)]")
console.log("--------------------------------------------------------------------")
var emp2=employe.filter(ob=>ob.join>1980&ob.join<2000)
for(i of emp2)
{
    console.log("Name :\t"+i["name"]+"\tDesignation :\t"+i["desig"]+"\tJoin :\t"+i["join"])
}
console.log("\n")
console.log("all employee details those who have experience >9 years")
console.log("-------------------------------------------------------")
var emp3=employe.filter(ob=>(ob.resign-ob.join)>9)
for(i of emp3)
{
    console.log("Name :\t"+i["name"]+"\tDesignation :\t"+i["desig"]+"\tJoin :\t"+i["join"]+"\tResign :\t"+i["resign"])
}
console.log("\n")

console.log("sort all employees based on theire joining year")
console.log("-----------------------------------------------")
var emp4=employe.sort((ob1,ob2)=>ob1.join-ob2.join)
for(i of emp4)
{
    console.log("Name :\t"+i["name"]+"\tDesignation :\t"+i["desig"]+"\tJoin :\t"+i["join"]+"\tResign :\t"+i["resign"])
}