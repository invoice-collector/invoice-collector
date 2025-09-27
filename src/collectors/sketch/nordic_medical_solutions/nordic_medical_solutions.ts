
import { SketchCollector } from '../../sketchCollector';

export class NordicMedicalSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "nordic_medical_solutions",
        name: "NORDIC MEDICAL SOLUTIONS",
        description: "i18n.collectors.nordic_medical_solutions.description",
        version: "0",
        website: "www.nordicms.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874668.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "www.nordicms.com",
    }

    constructor() {
        super(NordicMedicalSolutionsCollector.CONFIG);
    }
}
