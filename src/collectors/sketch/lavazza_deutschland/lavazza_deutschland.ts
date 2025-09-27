
import { SketchCollector } from '../../sketchCollector';

export class LavazzaDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "lavazza_deutschland",
        name: "Lavazza Deutschland",
        description: "i18n.collectors.lavazza_deutschland.description",
        version: "0",
        website: "https://customerportal.lavazza.com/s/login/?language=en_US",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025556.jpg",
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
        entryUrl: "https://customerportal.lavazza.com/s/login/?language=en_US",
    }

    constructor() {
        super(LavazzaDeutschlandCollector.CONFIG);
    }
}
