import { Routes } from '@angular/router';
import { EnrollmentAgingComponent } from './enrollment-aging/enrollment-aging.component';
import { IDCardAgingComponent } from './id-card-aging/id-card-aging.component';
import { IDCardStatusComponent } from './id-card-status/id-card-status.component';
import { TATEnrollmentsComponent } from './tat-enrollments/tat-enrollments.component';

export const routes: Routes = [
    {
        path:'enrollmentAging',
        component:EnrollmentAgingComponent
    },
    {
        path:'idCardAging',
        component:IDCardAgingComponent
    },
    {
        path:'idCardStatus',
        component:IDCardStatusComponent
    },
    {
        path:'tatEnrollments',
        component:TATEnrollmentsComponent
    }
];
