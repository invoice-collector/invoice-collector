
import { SketchCollector } from '../../sketchCollector';

export class UtilitiesKingstonCollector extends SketchCollector {

    static CONFIG = {
        id: "utilities_kingston",
        name: "Utilities Kingston",
        description: "i18n.collectors.utilities_kingston.description",
        version: "0",
        website: "https://my.utilitieskingston.com/app/login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8575.jpg",
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
        entryUrl: "https://my.utilitieskingston.com/app/login.jsp",
    }

    constructor() {
        super(UtilitiesKingstonCollector.CONFIG);
    }
}
