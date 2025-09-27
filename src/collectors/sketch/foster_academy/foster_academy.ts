
import { SketchCollector } from '../../sketchCollector';

export class FosterAcademyCollector extends SketchCollector {

    static CONFIG = {
        id: "foster_academy",
        name: "FOSTER ACADEMY",
        description: "i18n.collectors.foster_academy.description",
        version: "0",
        website: "https://aussiescertification.com/certification/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061768.jpg",
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
        entryUrl: "https://aussiescertification.com/certification/login",
    }

    constructor() {
        super(FosterAcademyCollector.CONFIG);
    }
}
