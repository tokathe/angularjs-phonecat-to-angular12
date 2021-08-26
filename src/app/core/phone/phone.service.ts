import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { resource } from "angular";
import { Observable } from "rxjs";

@Injectable() 
export class Phone {
    constructor(private http: HttpClient){}

    query(): Observable<PhoneData[]> {
       return this.http.get<PhoneData[]>(`assets/phones/phones.json`);
    }
    get(id: string): Observable<PhoneData> {
        return this.http.get<PhoneData>(`assets/phones/${id}.json`);
    }
}

export interface PhoneData {
    name: string;
    snippet: string;
    images: string[];
}