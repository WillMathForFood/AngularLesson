import { AbstractControl, ValidationErrors, FormGroup, FormControl } from '@angular/forms';

export class ChangePasswordValidators {
    static isValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string) !== '1234')
                    resolve({ invalid: true });
                else
                    resolve(null);
            }, 1000);
        });
    }

    static confirmMatch(control: AbstractControl): ValidationErrors | null {
        let frm = control as FormGroup;
        
        if(frm.get('newPassword') === null || frm.get('confirmPassword') === null ||
           frm.get('newPassword').value === '' || frm.get('confirmPassword').value === '')
            return null;

        if(frm.get('newPassword').value !== frm.get('confirmPassword').value)
            return { mismatch: true };

        return null;
    }
}