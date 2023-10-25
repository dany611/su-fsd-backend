

// create a function to to get a list of fileName from read a file 

const fs = require('fs');
const moment =  require('moment');




const getFileList = (sortColumn,sortDirection) => {

    // read a file 
    const data = fs.readFileSync('./test-data.csv', 'utf8');
    
    // split the data by new line
    const dataArr = data.split('\n');

    let fileData=[];

    dataArr.forEach(item=>{
        const line = item.split(';')
        fileData.push({
            date:line[0],
            name:line[1],
        });
    })



    if(sortColumn == "date"){
        fileData = sortDataBasedOnDate(fileData,sortDirection)
    }

    if(sortColumn == "name"){
        fileData = sortDataBasedOnFileName(fileData,sortDirection)
    }

    return fileData;

};



const sortDataBasedOnDate = (data,sortDirection) => {

    // sort the data based on sortColumn and sortDirection
    const sortedData = data.sort((a,b)=>{

        let dateA = a.date;
        let dateB = b.date;

        dateA = new Date(dateA)
        dateB = new Date(dateB)


        // Convert the date properties to timestamps for comparison
   dateA = dateA.getTime();
   dateB = dateB.getTime();

  if (sortDirection === 'ASC') {
    if (dateA < dateB) {
      return -1;
    } else if (dateA > dateB) {
      return 1;
    }
  } else if (sortDirection === 'DESC') {
    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    }
  }
    })    

    return sortedData

}

const sortDataBasedOnFileName = (data, sortDirection) => {

    // sort the data based on sortColumn and sortDirection
    const fileName = data.map(item=>{

        return {
            ...item,
            integerPart : parseInt(item.name.replace(/[a-zA-Z]/g, '')),
            stringPart : item.name.replace(/[0-9]/g, '')
        }
    })


    const sortedData = fileName.sort((a,b)=>{
        const numComparison = parseInt(a.integerPart, 10) - parseInt(b.integerPart, 10);
        if (sortDirection === 'ASC') {
          

  if (numComparison !== 0) {
    return numComparison;
  }

  return a.stringPart.localeCompare(b.stringPart);
          } else if (sortDirection === 'DESC') {
    if (numComparison !== 0) {
        return -numComparison;
        }
        return b.stringPart.localeCompare(a.stringPart);
    }
            })
    

    sortedData.forEach(item=>{
        delete item.integerPart;
        delete item.stringPart;
    })
    
    return sortedData
}

module.exports = {
    getFileList
};
