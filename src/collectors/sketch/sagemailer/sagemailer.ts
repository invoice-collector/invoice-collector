
import { SketchCollector } from '../../sketchCollector';

export class SagemailerCollector extends SketchCollector {

    static CONFIG = {
        id: "sagemailer",
        name: "SageMailer",
        description: "i18n.collectors.sagemailer.description",
        version: "0",
        website: "http://www.sagemailer.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109382.jpg",
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
        entryUrl: "http://www.sagemailer.com",
    }

    constructor() {
        super(SagemailerCollector.CONFIG);
    }
}
