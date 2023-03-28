var Odd = 1
var Even = 0
var IDK = 0 

while(Odd <= 51){
    document.writeln(Odd);
    Odd = Odd + 2
    if(Odd <= 51){
        document.writeln(",")
    }
}

document.writeln("<br>")
do{
    Even = Even + 2
    document.writeln(Even)
    if(Even < 50){
        document.writeln(",")
    }
}while(Even < 50)
document.writeln("<br>")

for(let i = 1; IDK < 4000; i++)
{
    IDK = 0.5*((2*i)+(2**i)-2)
    document.writeln(IDK)
    if(IDK < 4000){
        document.writeln(",")
    }
}
