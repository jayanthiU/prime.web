function calcsum()
{
    value1=parseInt(document.mainform.textbox1.value);
    value2=parseInt(document.mainform.textbox2.value);
    sum=value1+value2;
    document.mainform.textboxsum.value=sum;
}
function calcdif()
{
    value1=parseInt(document.mainform.textbox1.value);
    value2=parseInt(document.mainform.textbox2.value);
    dif=value1-value2;
    document.mainform.textboxdif.value=dif;
}
function calcmul()
{
    value1=parseInt(document.mainform.textbox1.value);
    value2=parseInt(document.mainform.textbox2.value);
    mul=value1*value2;
    document.mainform.textboxmul.value=mul;
}
function calcdiv()
{
    value1=parseInt(document.mainform.textbox1.value);
    value2=parseInt(document.mainform.textbox2.value);
    div=value1/value2;
    document.mainform.textboxdiv.value=div;
}