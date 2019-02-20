const render = function() {
    $('.content').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<p>${employeeList[i].name}</br>${employeeList[i].officeNum}</br>${employeeList[i].phoneNum}</p>`);
    }
  }
  
  render();
// 1. When the view button is pressed, render the list

  $('#view').on('click', render);

  // 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function() {
    const tempList = {
        name: '',
        officeNum: 0,
        phoneNum: ''
      };
    tempList.name = $('#name').val();
    tempList.officeNum = $('#officeNum').val()
    tempList.phoneNum = $('#phoneNum').val()
    if(tempList.name!=''){
    employeeList.push(tempList);
    }
    console.log(employeeList);
  
    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
  }
  
  $('#add').on('click', getInputVal);

  //3. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
const removeName = function() {
    const nameVal = $('#name').val();
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    if(nameVal !=''){
    employeeList.splice(employeeList.map(function(e) { return e.name; }).indexOf(nameVal), 1);
    }
    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    render();
  }
  
  $('#delete').on('click', removeName);
  
    //4. When the update button is pressed, update the element from studentList that matches the name the user entered in the input field. Re-render the list.
const updateName = function() {
    const nameVal = $('#name').val();
    const officeNumVal = $('#officeNum').val();
    const phoneNumVal = $('#phoneNum').val();
    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    const nameIndex = employeeList.map(function(e) { return e.name; }).indexOf(nameVal);
    employeeList[nameIndex].name = nameVal;
    employeeList[nameIndex].officeNum = officeNumVal;
    employeeList[nameIndex].phoneNum = phoneNumVal;

  
    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
  }
  
  $('#update').on('click', updateName);

      //5. When the search button is pressed, search the element from studentList that matches the name the user entered in the input field. Display 'yes' if found or 'no' if not found.
const verifyName = function() {
    const nameVal = $('#name').val();

    // We use the indexOf method to find the index of the input name
    // Then we use splice to remove 1 element, starting with that index
    const nameIndex = employeeList.map(function(e) { return e.name; }).indexOf(nameVal);
    $('.content').empty();
    if(nameIndex!==-1)
        $('.content').append(`<p>yes</p>`);
    else
    $('.content').append(`<p>no</p>`);

  
    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
   // render();
  }
  
  $('#verify').on('click', verifyName);