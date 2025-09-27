
import { SketchCollector } from '../../sketchCollector';

export class InvisalignDoctorsiteCollector extends SketchCollector {

    static CONFIG = {
        id: "invisalign_doctorsite",
        name: "Invisalign DoctorSite",
        description: "i18n.collectors.invisalign_doctorsite.description",
        version: "0",
        website: "https://vip.invisalign.com/v3/auth/patients.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4037199.jpg",
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
        entryUrl: "https://vip.invisalign.com/v3/auth/patients.action",
    }

    constructor() {
        super(InvisalignDoctorsiteCollector.CONFIG);
    }
}
