import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';


const material = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({

  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
