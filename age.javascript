<body onload="getAge()">
  <h1 id="age" ></h1>

  <script>
    function calculateAge(dob) {
      var now = new Date();
      var dob = new Date(dob);
      var year=now.getYear()-dob.getYear();
      var month=now.getMonth()-dob.getMonth();
      if(month<0){
        month=now.getMonth()+12-dob.getMonth();
        year=year-1;
      }
      var day=now.getDate()-dob.getDate();
      if(day<0){
        var monthNumber=dob.getMonth();
        var fullDate=getFullDate(monthNumber);
        day=now.getDate()+fullDate-dob.getDate();
        month=month-1;
      }

      return year+" Years, "+month+" Months, "+day+" Days!";
    };
    function getFullDate(x){
      switch(x){
        case 0:
          return 31;
          break;
        case 1:
          return 28;
          break;
        case 2:
          return 31;
          break;
        case 3:
          return 30;
          break;
        case 4:
          return 31;
          break;
        case 5:
          return 30;
          break;
        case 6:
          return 31;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 30;
          break;
        case 9:
          return 31;
          break;
        case 10:
          return 30;
          break;
        case 11:
          return 31;
      }
    }
    function getAge(){
      x=prompt("Please Enter Your Date of Birth in format (yyyy-mm-dd): ","");
      x=new Date(x);
      document.getElementById("age").innerHTML="Your age is: "+calculateAge(x);
    }
  </script>
</body>
