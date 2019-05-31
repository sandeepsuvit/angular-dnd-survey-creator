import { AbstractControl } from '@angular/forms';

/**
 * List of all custom validators
 */
export class CustomValidators {
    /**
     * Validate for password missmatch
     *
     * @param control AbstractControl
     */
    public static passwordsMatch(control: AbstractControl) {
        const password = control.get('password').value;
        const passwordConfirm = control.get('passwordConfirm').value;

        if (password !== passwordConfirm) {
            control.get('passwordConfirm').setErrors({ passwordConfirm: true });
        } else {
            return null;
        }
    }
}
