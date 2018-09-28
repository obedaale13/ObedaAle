 function banner() {
};
banner = new banner();
number = 0;

banner[number++] = "<img src='https://lh3.googleusercontent.com/-4tu8CHZ0BjQ/UQqVI-pVfNI/AAAAAAAAAcU/8fdk465s00g/s468/changedb1.jpg' border='0'></a>"
banner[number++] = "<img src='https://lh3.googleusercontent.com/-qA1GhaYlhG4/UQqVIebzcnI/AAAAAAAAAcQ/asC87nGOnH8/s468/changedb2.gif' border='0'></a>"
banner[number++] = "<img src='https://lh4.googleusercontent.com/-iBrQ_-AXMjU/UQqVI-MGLbI/AAAAAAAAAcM/Co7g4CmYoqA/s468/changedb3.gif' border='0'></a>"
banner[number++] = "<img src='https://lh4.googleusercontent.com/-RKPrvfl9bqk/UQqVKb2AN0I/AAAAAAAAAcg/NcK6-FCGjsk/s468/changedb4.jpg' border='0'></a>"
banner[number++] = "<img src='https://lh6.googleusercontent.com/-19yNY-oMek8/UQqVKo1NDKI/AAAAAAAAAck/2pWrHiHn5I4/s468/changedb5.gif' border='0'></a>"


increment = Math.floor(Math.random() * number);
document.write(banner[increment]);
