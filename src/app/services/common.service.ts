import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public url: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }
  public getPagesArray(noPages: number) {
    let array = [];
    for (let i = 0; i < noPages; i++) {
      array.push(i);
    }
    return array;
  }

  public deleteResource<T>(url: string) {
    return this.httpClient.delete<T>(this.url);
  }

  public createResource<T>(url: string, data):Observable<T> {
    return this.httpClient.post<T>(this.url, data);
  }

  public getResource<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  public updateResource<T>(url, data): Observable<T> {
    return this.httpClient.put<T>(url, data);
  }
  public toastMessage(title,message:string){

  $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> <div class="toast-header"> <strong class="mr-auto">'+title+'</strong> <small class="text-muted">just now</small> <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="toast-body">'+message+'</div> </div>').appendTo('#toasts-div').toast({autohide:false}).toast('show');
  }
}
