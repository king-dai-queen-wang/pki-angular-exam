import {Injectable, Injector} from '@angular/core';
import {HttpService} from "./base/http.service";
import {concatMap, map, tap} from "rxjs/operators";
import {EquipmentModel, EquipmentModelInterface} from "../models/equipment.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends HttpService {
  equipmentPath = '/equipments';
  allList$: BehaviorSubject<EquipmentModel[]> = new BehaviorSubject<EquipmentModel[]>([]);

  constructor(public injector: Injector) {
    super(injector);
  }

  getList(): Observable<EquipmentModel[]> {
    return super.get(`${this.equipmentPath}`).pipe(
      tap(console.log),
      map(
        res => (res || []).map((item: EquipmentModelInterface) => {
          return new EquipmentModel(item)
        })
      ),
      tap(
        res => this.allList$.next(res)
      )

    )
  }

  addEquipment(data: EquipmentModel) {
    return super.post(`${this.equipmentPath}`, data).pipe(
      concatMap(() => {
        return this.getList();
      })
    )
  }

  editEquipment(data: EquipmentModel) {
    return super.put(`${this.equipmentPath}/${encodeURIComponent(data.id!)}`, data).pipe(
      concatMap(() => {
        return this.getList();
      })
    )
  }


  delete(id: string) {
    return super.delete(`${this.equipmentPath}/${encodeURIComponent(id)}`).pipe(
      concatMap(() => {
        return this.getList();
      })
    )
  }
}
