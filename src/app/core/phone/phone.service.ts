import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Phone {
  constructor(private http: HttpClient) {}

  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`assets/phones/phones.json`);
  }
  get(id: string): Observable<PhoneDetail> {
    return this.http.get<PhoneDetail>(`assets/phones/${id}.json`);
  }
}

export interface PhoneData {
  age: number;
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
}

export interface PhoneDetail extends PhoneData {
  additionalFeatures: string;
  images: string[];
  android: { os: string; ui: string };
  availability: string[];
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean;
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  sizeAndWeight: {
    dimensions: string[];
    weight: string;
  };
  storage: {
    flash: string;
    ram: string;
  };
  hardware: {
    accelerometer: boolean;
    audioJack: string;
    cpu: string;
    fmRadio: boolean;
    physicalKeyboard: boolean;
    usb: string;
  };
}
