import { RestApiService } from './../rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './../student';
import{ studentservice} from './../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  studentList:Student[]=[];
  newStudent:Student=new Student();
  editStudent:Student=new Student();

  constructor(private service: RestApiService) { }

  ngOnInit(){
    this.GetAllStudent();
  }
  studentData:any;

  GetAllStudent(){
    this.service.GetAllStudent().subscribe(
      (student)=>{
      this.studentData = student;
      },
    (error)=>{
      console.log(error);

    }
    )
  }
   saveClick()
   {
    this.newStudent.id=0;
    this.StudentService.saveStudent(this.newStudent).subscribe(
      (response)=>{
        this.GetAllStudent();
      },
      (error)=>{
        console.log(error);
      }
    )
   }

}