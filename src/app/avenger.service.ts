import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvengerService {

  constructor(private http: HttpClient) { }

  detailAvenger(){
    return this.http.get('http://localhost:3000/avengers');
  }

  addAvenger(data){
    debugger;
    return this.http.post('http://localhost:3000/avengers', data);
  }

  getAvenger(aveId){
    return this.http.get('http://localhost:3000/avengers/' + aveId);
  }

  deleteAvenger(aveId){
    return this.http.delete('http://localhost:3000/avengers/' +aveId);
  }

  editAvenger(aveId, data){
    return this.http.put('http://localhost:3000/avengers/' +aveId, data);
  }
}
