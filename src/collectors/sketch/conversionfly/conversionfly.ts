
import { SketchCollector } from '../../sketchCollector';

export class ConversionflyCollector extends SketchCollector {

    static CONFIG = {
        id: "conversionfly",
        name: "conversionfly",
        description: "i18n.collectors.conversionfly.description",
        version: "0",
        website: "https://conversionfly.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71496.jpg",
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
        entryUrl: "https://conversionfly.com/login.php",
    }

    constructor() {
        super(ConversionflyCollector.CONFIG);
    }
}
