const student = require( '../modles/studentmodel')

exports.studentController = async(req , res) => {
    try {
        const {firstname , lastname ,email , age , role} = req.body;
       const datas =  await student.create({firstname , lastname, email ,age ,role});

        console.log(datas)
        return res.status(201).json({
            message : 'Student created in db',
            
        }) 

    } catch (error) {
        console.log('Error in create controller' + error);
        
    }

}


exports.findStudent = async (req , res) => {
    try {
        let studentData = await student.find();
        console.log(studentData);
        
        return  res.status(200).json(studentData)
    }
        
     catch (error) {
        console.log("Error in find method" + error);
        return res.status(404).json({
           message: "No data found!"
          });

        
    }


}

exports.studentUpdata = async (req , res) => {
    try {
        const updateData = await student.findByIdAndUpdate(req.params.id , req.body , {
            new : true,
            runValidators : true
        });
        if(!updateData){
            return res.status(404).json({message:"No such record found"})
        }else{
            console.log(updateData);
            return res.status(200).json(updateData)
        }
        
    
    } catch (error) {
        return res.status(500).json({
            error : error.message
        })
        
    }
}